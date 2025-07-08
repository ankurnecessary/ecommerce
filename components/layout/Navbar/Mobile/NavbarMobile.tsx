'use client';
import React from 'react';
import { useHeaderContext } from '@/components/layout/Header/Header.context';
import { HeaderContext } from '@/components/layout/Header/types';
import { X } from 'lucide-react';

const NavbarMobile = () => {
  const {
    mobile: { isMenuVisible, toggleMenu },
  }: HeaderContext = useHeaderContext();

  const mobileMenuHandler = () => {
    toggleMenu(false);
  };

  return (
    <div
      className={`fixed left-0 top-0 h-full w-[300px] border-r border-gray-300 bg-white transition-transform duration-300 ${isMenuVisible ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <div className="flex justify-end p-2">
        <button className="bg-slate-200 p-1" onClick={mobileMenuHandler}>
          <X />
        </button>
      </div>
    </div>
  );
};

export default NavbarMobile;
