import React from 'react';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHeaderContext } from '@/components/layout/Header/Header.context';
import { CalculateOffset } from '@/components/layout/Header/types';

const calculateOffset: CalculateOffset =
  (direction) => (parentWidth, childWidth) => (offset) => {
    let displacer = 0;

    // Setting displacer
    if (childWidth > parentWidth) {
      displacer = parentWidth;
    }

    // Handling left movement
    if (direction === 'left') {
      offset = offset + displacer;
      const maxLeftOffset = 0;
      return offset < maxLeftOffset ? offset : maxLeftOffset;
    }

    // Handling right movement
    offset = offset - displacer;
    const maxRightOffset = parentWidth - childWidth;
    return offset < maxRightOffset ? maxRightOffset : offset;
  };

const NavbarScroller = () => {
  const {
    desktop: {
      navbar: {
        child: navbarChild,
        parent: navbarParent,
        childOffset: navbarChildOffset,
        setNavbarOffsetDsktp,
      },
    },
  } = useHeaderContext();

  // <parent> - Need width of the <div> having overflow property set over it.
  const parentWidth = navbarParent?.getBoundingClientRect().width ?? 0;
  // <child> - Need width of the <div> wrapping all links inside <parent>.
  const childWidth = navbarChild?.getBoundingClientRect().width ?? 0;
  const maxRightOffset = parentWidth - childWidth;

  const calculateLeftOffset = calculateOffset('left')(parentWidth, childWidth);
  const calculateRightOffset = calculateOffset('right')(
    parentWidth,
    childWidth,
  );

  const linksLeftScroller = () => {
    setNavbarOffsetDsktp(calculateLeftOffset(navbarChildOffset));
  };

  const linksRightScroller = () => {
    setNavbarOffsetDsktp(calculateRightOffset(navbarChildOffset));
  };

  return (
    <div className="shadow-left whitespace-nowrap">
      <button
        className="inline-block cursor-pointer p-2 hover:bg-gray-100 disabled:cursor-auto disabled:opacity-25"
        onClick={linksLeftScroller}
        disabled={navbarChildOffset == 0}
        aria-label="left scroller"
      >
        <FontAwesomeIcon icon={faChevronLeft} className="text-xs" />
      </button>
      <button
        className="inline-block cursor-pointer p-2 hover:bg-gray-100 disabled:cursor-auto disabled:opacity-25"
        onClick={linksRightScroller}
        disabled={navbarChildOffset === maxRightOffset}
        aria-label="right scroller"
      >
        <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
      </button>
    </div>
  );
};

export default NavbarScroller;
