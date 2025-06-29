'use client';
import clsx from 'clsx';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import {
  ScrollWheelHandler,
  ThumbMouseDownHandler,
} from '@/components/custom-ui/VerticalScrollContainer/types';
import { syncThumbPosition, updateThumbHeight } from './utils';
import styles from '@/components/custom-ui/VerticalScrollContainer/VerticalScrollContainer.module.scss';

type VerticalScrollContainerProps = {
  children: React.ReactNode;
  containerClassName?: string;
  contentClassName?: string;
  scrollbarClassName?: string;
  thumbClassName?: string;
  scrollToElementId?: string;
};

const VerticalScrollContainer = ({
  children,
  containerClassName,
  contentClassName,
  scrollbarClassName = '',
  thumbClassName = '',
  scrollToElementId,
}: VerticalScrollContainerProps) => {
  const verticalScrollContainerRef = useRef<HTMLDivElement>(null);
  const verticalScrollContentRef = useRef<HTMLDivElement>(null);
  const scrollbarThumbRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startY, setStartY] = useState<number>(0);
  const [startTop, setStartTop] = useState<number>(0);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const scrollTo = (elementId: string) => {
    if (!elementId) return;
    const content = verticalScrollContentRef.current;
    if (!content) return;

    const targetElement = content.querySelector(`#${elementId}`) as HTMLElement;
    if (targetElement) {
      content.scrollTo({
        top: targetElement.offsetTop - 60, // Adjust for any offset
        behavior: 'smooth', // Enables smooth scrolling
      });
      syncThumbPosition(
        verticalScrollContainerRef.current,
        verticalScrollContentRef.current,
        scrollbarThumbRef.current,
      );
    }
  };

  const contentScrollHandler = () => {
    syncThumbPosition(
      verticalScrollContainerRef.current,
      verticalScrollContentRef.current,
      scrollbarThumbRef.current,
    );
  };

  const scrollWheelHandler: ScrollWheelHandler = (e) => {
    // [ ]: Add throttle to this function if needed
    const content = verticalScrollContentRef.current;
    if (!content) return;

    content.scrollTop += e.deltaY;
    syncThumbPosition(
      verticalScrollContainerRef.current,
      verticalScrollContentRef.current,
      scrollbarThumbRef.current,
    );
  };

  const thumbMouseDownHandler: ThumbMouseDownHandler = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartY(e.clientY);
    const thumb = scrollbarThumbRef.current;
    if (thumb) {
      setStartTop(parseFloat(thumb.style.top || '0'));
    }
  };

  const documentMouseUpHandler = () => {
    setIsDragging(false);
    document.body.style.userSelect = ''; // Re-enable text selection
  };

  const documentMouseMoveHandler = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      const container = verticalScrollContainerRef.current;
      const content = verticalScrollContentRef.current;
      const thumb = scrollbarThumbRef.current;
      if (!container || !content || !thumb) return;

      const deltaY = e.clientY - startY;
      const newTop = Math.min(
        Math.max(startTop + deltaY, 0),
        container.offsetHeight - thumb.offsetHeight,
      );
      thumb.style.top = `${newTop}px`;

      // Sync content scroll with thumb position
      const scrollHeight = content.scrollHeight - container.offsetHeight;
      content.scrollTop =
        (newTop / (container.offsetHeight - thumb.offsetHeight)) * scrollHeight;
    },
    [isDragging, startY, startTop],
  );

  useEffect(() => {
    const container = verticalScrollContainerRef.current;
    const content = verticalScrollContentRef.current;
    const thumb = scrollbarThumbRef.current;

    if (!container || !content) return;
    setIsOverflowing(content.scrollHeight > container.offsetHeight);

    if (!container || !content || !thumb) return;
    updateThumbHeight(container, content, thumb);
    syncThumbPosition(container, content, thumb);
    scrollTo(scrollToElementId || '');
  }, [children, scrollToElementId, isOverflowing]);

  useEffect(() => {
    const container = verticalScrollContainerRef.current;
    const content = verticalScrollContentRef.current;
    const thumb = scrollbarThumbRef.current;
    if (!container || !content || !thumb) return;

    const update = () => {
      setIsOverflowing(content.scrollHeight > container.offsetHeight);
      updateThumbHeight(container, content, thumb);
      syncThumbPosition(container, content, thumb);
    };

    const resizeObserver = new window.ResizeObserver(update);
    resizeObserver.observe(container);
    resizeObserver.observe(content);

    return () => {
      resizeObserver.disconnect();
    };
  }, [children]);

  useEffect(() => {
    const container = verticalScrollContainerRef.current;
    if (!container) return;
    container.addEventListener('mouseup', documentMouseUpHandler);
    container.addEventListener('mousemove', documentMouseMoveHandler);
    return () => {
      container.removeEventListener('mouseup', documentMouseUpHandler);
      container.removeEventListener('mousemove', documentMouseMoveHandler);
    };
  }, [documentMouseMoveHandler]);

  return (
    // container
    <div
      role="group"
      aria-label="Vertical Scroll Container"
      className={clsx(styles.verticalScrollContainer, containerClassName)}
      ref={verticalScrollContainerRef}
    >
      {/* content */}
      <div
        className={clsx(
          styles.verticalScrollContainer__content,
          contentClassName,
        )}
        ref={verticalScrollContentRef}
        onScroll={contentScrollHandler}
        data-testid="vertical-scrollable-content"
        tabIndex={0}
      >
        {children}
      </div>
      {/* scrollbar */}
      {isOverflowing && (
        <div
          data-testid="scrollbar"
          className={clsx(
            styles.verticalScrollContainer__scrollbar,
            scrollbarClassName,
          )}
          onWheel={scrollWheelHandler}
        >
          {/* thumb */}
          <div
            className={clsx(
              styles.verticalScrollContainer__thumb,
              thumbClassName,
            )}
            ref={scrollbarThumbRef}
            onMouseDown={thumbMouseDownHandler}
          ></div>
        </div>
      )}
    </div>
  );
};

export default VerticalScrollContainer;
