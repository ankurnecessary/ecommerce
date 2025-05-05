'use client';
import clsx from 'clsx';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import {
  ScrollWheelHandler,
  ThumbMouseDownHandler,
} from '@/components/custom-ui/VerticalScrollContainer/types';
import { syncThumbPosition, updateThumbHeight } from './utils';
import { debounce } from 'lodash';

type VerticalScrollContainerProps = {
  children: React.ReactNode;
  className?: string;
  scrollbarClassName?: string;
  thumbClassName?: string;
  scrollToElementId?: string;
};

const VerticalScrollContainer = ({
  children,
  className = 'w-full',
  scrollbarClassName = '',
  thumbClassName = '',
  scrollToElementId,
}: VerticalScrollContainerProps) => {
  console.log({ scrollToElementId });
  const verticalScrollContainerRef = useRef<HTMLDivElement>(null);
  const verticalScrollContentRef = useRef<HTMLDivElement>(null);
  const scrollbarThumbRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startY, setStartY] = useState<number>(0);
  const [startTop, setStartTop] = useState<number>(0);

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
    // TODO: Add throttle to this function if needed
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

  const isContentOverflowing = () => {
    const container = verticalScrollContainerRef.current;
    const content = verticalScrollContentRef.current;
    if (!container || !content) return false;

    return content.scrollHeight > container.offsetHeight;
  };

  useEffect(() => {
    const container = verticalScrollContainerRef.current;
    const content = verticalScrollContentRef.current;
    const thumb = scrollbarThumbRef.current;
    if (!container || !content || !thumb) return;

    scrollTo(scrollToElementId || '');

    updateThumbHeight(container, content, thumb);
    syncThumbPosition(container, content, thumb);

    // Using a debounce function to limit the number of times the updateThumbHeight function is called on resize
    const debouncedUpdateThumbHeight = debounce(
      updateThumbHeight.bind(null, container, content, thumb),
      300,
    );

    window.addEventListener('resize', debouncedUpdateThumbHeight);
    container.addEventListener('mouseup', documentMouseUpHandler);
    container.addEventListener('mousemove', documentMouseMoveHandler);
    return () => {
      window.removeEventListener('resize', debouncedUpdateThumbHeight);
      container.removeEventListener('mouseup', documentMouseUpHandler);
      container.removeEventListener('mousemove', documentMouseMoveHandler);
    };
  }, [children, documentMouseMoveHandler, scrollToElementId]);

  return (
    // container
    <div
      className="group relative h-full overflow-hidden"
      ref={verticalScrollContainerRef}
    >
      {/* content */}
      <div
        className={clsx(
          'h-full overflow-y-auto overflow-x-hidden scrollbar-none',
          className,
        )}
        ref={verticalScrollContentRef}
        onScroll={contentScrollHandler}
      >
        {children}
      </div>
      {/* scrollbar */}
      {isContentOverflowing() && (
        <div
          className={clsx(
            'absolute right-0 top-0 h-full w-2 bg-transparent',
            scrollbarClassName,
          )}
          onWheel={scrollWheelHandler}
        >
          {/* thumb */}
          <div
            className={clsx(
              'absolute top-0 min-h-5 w-full rounded-md bg-transparent group-hover:bg-gray-400 group-active:bg-gray-400',
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
