'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useHeaderContext } from '@/components/layout/Header/header.context';
import { HeaderContext } from '@/components/layout/Header/types';
import NavbarLinks from '@/components/layout/Navbar/Desktop/NavbarLinks';
import NavbarScroller from '@/components/layout/Navbar/Desktop/NavbarScroller';

const NavbarDesktop = () => {
  const [translateValue, setTranslateValue] = useState<number>(0);

  const {
    desktop: { toggleMenu },
  }: HeaderContext = useHeaderContext();

  const mouseOverHandler = () => {
    toggleMenu(true, '');
  };

  // Can be done by FP
  const mouseOutHandler = () => {
    toggleMenu(false, '');
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
        translateValue={translateValue}
        mouseOverHandler={mouseOverHandler}
        mouseOutHandler={mouseOutHandler}
      />

      {/* Buttons to scroll links horizontally */}
      <NavbarScroller scrollLinks={setTranslateValue} />
    </nav>
  );
};

export default NavbarDesktop;
