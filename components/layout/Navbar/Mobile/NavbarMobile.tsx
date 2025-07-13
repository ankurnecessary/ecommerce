'use client';
import React from 'react';
import { useHeaderContext } from '@/components/layout/Header/Header.context';
import { HeaderContext } from '@/components/layout/Header/types';
import { ChevronRight, X } from 'lucide-react';
import Link from 'next/link';
import { links } from '@/components/layout/Navbar/XnavbarLinkObj';

const NavbarMobile = () => {
  const {
    mobile: { isMenuVisible, toggleMenu },
  }: HeaderContext = useHeaderContext();

  const mobileMenuHandler = () => {
    toggleMenu(false);
  };

  return (
    <>
      {/* Mobile Navbar */}
      <div
        className={`fixed left-0 top-0 z-[1] h-full w-[300px] border-r border-gray-300 bg-white transition-transform duration-300 ${isMenuVisible ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex justify-end p-2">
          <button className="bg-slate-200 p-1" onClick={mobileMenuHandler}>
            <X />
          </button>
        </div>
        <div className="h-full overflow-auto">
          <ul className="px-2">
            {links.map((link) => (
              <li
                key={link.id}
                className="flex justify-between border-b border-dotted border-slate-400 p-2 hover:bg-slate-100"
              >
                <Link href={link.href} className="">
                  <span>{link.label}</span>
                </Link>
                <button className="bg-slate-200 p-1">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Translucent Backdrop */}
      {isMenuVisible && (
        <div
          className="fixed inset-0 z-0 bg-black bg-opacity-50"
          onClick={mobileMenuHandler}
        ></div>
      )}
    </>
  );
};

export default NavbarMobile;
