'use client';
import React, { useState } from 'react';
import { useHeaderContext } from '@/components/layout/Header/Header.context';
import {
  HeaderContext,
  MenuSubCategory,
} from '@/components/layout/Header/types';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { links } from '@/components/layout/Navbar/XnavbarLinkObj';
import clsx from 'clsx';
import NavbarMobileLink from './NavbarMobileLink';

const NavbarMobile = () => {
  const [isSubMenuVisible, setIsSubMenuVisible] = useState<boolean>(false);
  const [subcategories, setSubCategories] = useState<MenuSubCategory[]>([]);
  const {
    mobile: { isMenuVisible, toggleMenu },
  }: HeaderContext = useHeaderContext();

  const mainMenuHandler = () => {
    toggleMenu(false);
    setSubCategories([]);
    setIsSubMenuVisible(false);
  };

  // Handling click of category with some sub-categories
  const categoryClickHandler = (subcategories: MenuSubCategory[]) => {
    setSubCategories(subcategories);
    setIsSubMenuVisible(true);
  };

  return (
    <>
      {/* Mobile Navbar */}
      <div
        className={`fixed left-0 top-0 z-[1] h-full w-[300px] border-r border-gray-300 bg-white transition-transform duration-300 ${isMenuVisible ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* START: Button to collapse main mobile menu */}
        <button
          className="absolute right-0 top-0 z-10 bg-slate-200 p-1"
          onClick={mainMenuHandler}
        >
          <X />
        </button>
        {/* END: Button to collapse main mobile menu */}

        {/* START: Button to collapse sub-menu */}
        {isSubMenuVisible && (
          <button
            className="absolute left-0 top-0 z-10 bg-slate-200 p-1"
            onClick={() => setIsSubMenuVisible(false)}
          >
            <ChevronLeft />
          </button>
        )}
        {/* END: Button to collapse sub-menu */}

        {/* START: Main menu links */}
        <div className="mt-9 h-full overflow-auto">
          <ul className="px-2">
            {links.map((link) => (
              <li
                key={link.id}
                className="border-b border-dotted border-slate-400"
              >
                {/* START: When we have {subcategories: [...]} */}
                {link.subcategories?.length && (
                  <span
                    className="flex justify-between p-2 hover:bg-slate-100"
                    onClick={() => categoryClickHandler(link.subcategories)}
                  >
                    <span>{link.name}</span>
                    <button className="bg-slate-200 p-1">
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </span>
                )}
                {/* END: When we have {subcategories: [...]} */}

                {/* START: When we don't have {subcategories: [...]} */}
                {!link.subcategories?.length && (
                  <NavbarMobileLink link={link} />
                )}
                {/* END: When we don't have {subcategories: [...]} */}
              </li>
            ))}
          </ul>
        </div>
        {/* END: Main menu links */}

        {/* START: Sub-menu links */}
        <div
          className={clsx(
            'absolute left-0 top-0 z-[2] mt-9 h-full w-full overflow-auto bg-white transition-transform duration-300',
            { '-translate-x-full': !isSubMenuVisible },
          )}
        >
          <ul className="px-2">
            {subcategories.map((link) => (
              <li
                key={link.id}
                className="border-b border-dotted border-slate-400"
              >
                <NavbarMobileLink link={link} />
              </li>
            ))}
          </ul>
        </div>
        {/* END: Sub-menu links */}
      </div>

      {/* START: Translucent Backdrop */}
      {isMenuVisible && (
        <div
          className="fixed inset-0 z-0 bg-black bg-opacity-50"
          onClick={mainMenuHandler}
        ></div>
      )}
      {/* END: Translucent Backdrop */}
    </>
  );
};

export default NavbarMobile;
