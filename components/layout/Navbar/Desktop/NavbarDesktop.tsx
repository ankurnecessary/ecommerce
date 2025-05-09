'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useHeaderContext } from '@/components/layout/Header/Header.context';
import {
  HeaderContext,
  NavbarMouseEvent,
} from '@/components/layout/Header/types';
import NavbarLinks from '@/components/layout/Navbar/Desktop/NavbarLinks';
import NavbarScroller from '@/components/layout/Navbar/Desktop/NavbarScroller';

const NavbarDesktop = () => {
  const {
    desktop: { toggleMenu },
  }: HeaderContext = useHeaderContext();

  const mouseOverHandler: NavbarMouseEvent = (e) => {
    // Fetching link text from the link
    const link = e.target as HTMLAnchorElement;
    toggleMenu(true, link.textContent || '');
  };

  // Can be done by FP
  const mouseOutHandler: NavbarMouseEvent = (e) => {
    // Fetching link text from the link
    const link = e.target as HTMLAnchorElement;
    toggleMenu(false, link.textContent || '');
  };

  return (
    <nav className="container mx-auto hidden w-[calc(100%-4rem)] px-6 text-sm text-black md:flex">
      {/* Category button */}
      <div className="whitespace-nowrap">
        <span
          className="group inline-block cursor-pointer px-2 py-2 hover:bg-gray-100"
          onMouseOver={mouseOverHandler}
          onMouseOut={mouseOutHandler}
        >
          Categories
          <FontAwesomeIcon
            icon={faChevronDown}
            className="ml-1 text-xs transition-transform duration-300 group-hover:rotate-180"
          />
        </span>
      </div>

      {/* horizontal links scroller */}
      <NavbarLinks
        mouseOverHandler={mouseOverHandler}
        mouseOutHandler={mouseOutHandler}
      />

      {/* Buttons to scroll links horizontally */}
      <NavbarScroller />
    </nav>
  );
};

export default NavbarDesktop;
