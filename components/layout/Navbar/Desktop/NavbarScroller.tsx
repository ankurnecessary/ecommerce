import React, { Dispatch, SetStateAction } from 'react';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavbarScroller = ({
  scrollLinks,
}: {
  scrollLinks: Dispatch<SetStateAction<number>>;
}) => {
  const categoriesLeftScroller = () => {
    scrollLinks((x) => (x < 0 ? x + 20 : 0));
  };

  const categoriesRightScroller = () => {
    scrollLinks((x) => x - 20);
  };

  return (
    <div className="shadow-left whitespace-nowrap">
      <button
        className="inline-block cursor-pointer p-2 hover:bg-gray-100"
        onClick={categoriesLeftScroller}
      >
        <FontAwesomeIcon icon={faChevronLeft} className="text-xs" />
      </button>
      <button
        className="inline-block cursor-pointer p-2 hover:bg-gray-100"
        onClick={categoriesRightScroller}
      >
        <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
      </button>
    </div>
  );
};

export default NavbarScroller;
