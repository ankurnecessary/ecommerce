'use client';
import React from 'react';
import { useHeaderContext } from '@/components/layout/Header/Header.context';
import { HeaderContext } from '@/components/layout/Header/types';

const NavbarMenu = () => {
  const {
    desktop: { isMenuVisible, toggleMenu },
  }: HeaderContext = useHeaderContext();

  const [isVisible, category] = isMenuVisible;

  const mouseOverHandler = () => {
    // Fetching link text from the link
    toggleMenu(true, category);
  };

  // Can be done by FP
  const mouseOutHandler = () => {
    toggleMenu(false, '');
  };

  // To handle the visibility of the Navbar menu drawer
  const styleClasses = !isVisible ? '-translate-y-full' : '';

  return (
    <div
      data-testid="navbar-menu"
      className={`absolute z-0 h-96 w-full ${styleClasses} bg-gray-200 transition-transform duration-300`}
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
    >
      {category}
    </div>
  );
};

export default NavbarMenu;
