'use client';
import React from 'react';
import { useHeaderContext } from '@/components/layout/Header/Header.context';
import { HeaderContext } from '@/components/layout/Header/types';
import Link from 'next/link';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VerticalScrollContainer from '@/components/custom-ui/VerticalScrollContainer';
import clsx from 'clsx';

const NavbarMenu = () => {
  const {
    navLinks,
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

  return (
    <div
      data-testid="navbar-menu"
      className={clsx(
        'absolute z-0 flex h-96 w-full bg-white transition-transform duration-300',
        {
          '-translate-y-full': !isVisible,
          'drop-shadow-2xl': isVisible,
        },
      )}
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
    >
      <VerticalScrollContainer className="w-80 p-5 pl-10">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            prefetch={false}
            className="flex w-full justify-between px-2 py-3 text-xs hover:bg-gray-100"
            href={link.href}
          >
            <span> {link.label}</span>
            <span>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-xs opacity-25"
              />
            </span>
          </Link>
        ))}
      </VerticalScrollContainer>
      <div className="my-5 w-[1px] bg-gray-300"></div>
      <div className="flex-grow">{category}</div>
    </div>
  );
};

export default NavbarMenu;
