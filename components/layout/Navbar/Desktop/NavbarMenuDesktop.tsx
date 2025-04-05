'use client';
import React from 'react';
import { useHeaderContext } from '@/components/layout/Header/header.context';
import { HeaderContext } from '../../Header/types';

const NavbarMenuDesktop = () => {
  const {
    desktop: { isMenuVisible },
  }: HeaderContext = useHeaderContext();

  const [isVisible, category] = isMenuVisible;

  const styleClasses = `${!isVisible && '-translate-y-full'}`;

  return (
    <div
      className={`absolute z-0 h-96 w-full ${styleClasses} bg-gray-200 transition-transform duration-300`}
    >
      {category}
    </div>
  );
};

export default NavbarMenuDesktop;
