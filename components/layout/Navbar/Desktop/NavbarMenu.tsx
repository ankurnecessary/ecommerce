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
    desktop: {
      isMenuVisible,
      toggleMenu,
      selectedHorizontalNavLink,
      setSelectedHorizontalNavLink,
      selectedVerticalNavLink,
      setSelectedVerticalNavLink,
      verticalNavScrollToElementId,
      setVerticalNavScrollToElementId,
    },
  }: HeaderContext = useHeaderContext();

  const [isVisible, category] = isMenuVisible;

  const menuMouseOverHandler = () => {
    toggleMenu(true, category);
    if (selectedVerticalNavLink && !selectedHorizontalNavLink) return;
    setSelectedHorizontalNavLink(selectedHorizontalNavLink);
    setSelectedVerticalNavLink(category);
  };

  // Can be done by FP
  const menuMouseOutHandler = () => {
    toggleMenu(false, '');
    setSelectedHorizontalNavLink('');
  };

  const categoryMouseOverHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();

    // Fetching link text from the link
    const link = e.currentTarget as HTMLAnchorElement;
    const linkText = link.textContent?.trim() || '';

    setSelectedVerticalNavLink(linkText);
    toggleMenu(true, linkText);
    setVerticalNavScrollToElementId('');
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
      onMouseOver={menuMouseOverHandler}
      onMouseOut={menuMouseOutHandler}
    >
      <VerticalScrollContainer
        className="w-80 p-5 pl-10"
        scrollToElementId={verticalNavScrollToElementId}
      >
        {navLinks.map((link) => (
          // TODO: Check "Catetories" hover in navbar
          // TODO: Change this key when actual API is made with unique key. Probably id.
          <Link
            id={`vertical-${link.id}`}
            key={link.id}
            prefetch={false}
            className={clsx('flex w-full justify-between px-2 py-3 text-xs', {
              'bg-gray-100': selectedVerticalNavLink === link.label,
            })}
            href={link.href}
            onMouseOver={categoryMouseOverHandler}
          >
            <span>{link.label}</span>
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
