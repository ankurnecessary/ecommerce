import React, { Dispatch, SetStateAction } from 'react';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHeaderContext } from '@/components/layout/Header/header.context';
import { CalculateOffset } from '@/components/layout/Header/types';

const calculateOffset: CalculateOffset =
  (direction) => (navbarParent, navbarChild) => (offset) => {
    let displacer = 0;
    // <parent> - Need width of the <div> having overflow property set over it.
    const parentWidth = navbarParent?.getBoundingClientRect().width ?? 0;
    // <child> - Need width of the <div> wrapping all links inside <parent>.
    const childWidth = navbarChild?.getBoundingClientRect().width ?? 0;

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

const NavbarScroller = ({
  scrollLinks,
}: {
  scrollLinks: Dispatch<SetStateAction<number>>;
}) => {
  const {
    desktop: {
      navbar: { child: navbarChild, parent: navbarParent },
    },
  } = useHeaderContext();

  const calculateLeftOffset = calculateOffset('left')(
    navbarParent,
    navbarChild,
  );
  const calculateRightOffset = calculateOffset('right')(
    navbarParent,
    navbarChild,
  );

  const linksLeftScroller = () => {
    scrollLinks((x) => calculateLeftOffset(x));
  };

  const linksRightScroller = () => {
    scrollLinks((x) => calculateRightOffset(x));
  };

  return (
    <div className="shadow-left whitespace-nowrap">
      <button
        className="inline-block cursor-pointer p-2 hover:bg-gray-100"
        onClick={linksLeftScroller}
      >
        <FontAwesomeIcon icon={faChevronLeft} className="text-xs" />
      </button>
      <button
        className="inline-block cursor-pointer p-2 hover:bg-gray-100"
        onClick={linksRightScroller}
      >
        <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
      </button>
    </div>
  );
};

export default NavbarScroller;
