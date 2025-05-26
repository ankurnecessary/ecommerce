'use client';
import React from 'react';
import { useHeaderContext } from '@/components/layout/Header/Header.context';
import {
  CategoryMouseOverHandler,
  HeaderContext,
  MenuCategory,
} from '@/components/layout/Header/types';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VerticalScrollContainer from '@/components/custom-ui/VerticalScrollContainer';
import clsx from 'clsx';
import NavbarSubcategories from '@/components/layout/Navbar/Desktop/NavbarSubcategories';

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
    setSelectedVerticalNavLink(category.label);
  };

  // Can be done by FP
  const menuMouseOutHandler = () => {
    toggleMenu(false, {} as MenuCategory);
    setSelectedHorizontalNavLink('');
  };

  const categoryMouseOverHandler: CategoryMouseOverHandler =
    (category: MenuCategory) => (e) => {
      e.stopPropagation();

      // Fetching link text from the link
      const link = e.currentTarget as HTMLAnchorElement;
      const linkText = link.textContent?.trim() || '';

      setSelectedVerticalNavLink(linkText);
      toggleMenu(true, category);
      setVerticalNavScrollToElementId('');
    };

  return (
    <div
      data-testid="navbar-menu"
      className={clsx(
        'absolute z-0 flex h-96 w-full overflow-hidden bg-white transition-transform duration-300 dark:bg-zinc-700',
        {
          '-translate-y-full': !isVisible,
          'shadow-2xl dark:shadow-zinc-500': isVisible,
        },
      )}
      onMouseOver={menuMouseOverHandler}
      onMouseLeave={menuMouseOutHandler}
    >
      <div className="w-64 flex-shrink-0">
        <VerticalScrollContainer
          className="p-5 pl-10"
          scrollToElementId={verticalNavScrollToElementId}
        >
          {navLinks.map((link) => (
            // [ ]: Change `key={link.id}` when actual API is made with unique key. Probably id.
            <span
              key={link.id}
              id={`vertical-${link.id}`}
              className={clsx('flex w-full justify-between px-2 py-3 text-xs', {
                'bg-gray-100 dark:bg-zinc-800':
                  selectedVerticalNavLink === link.label,
              })}
              onMouseOver={categoryMouseOverHandler(link)}
            >
              <span>{link.label}</span>
              <span>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-xs opacity-25"
                />
              </span>
            </span>
          ))}
        </VerticalScrollContainer>
      </div>
      <div className="my-5 w-[1px] bg-gray-300 dark:bg-zinc-500"></div>
      <div className="flex-grow px-5">
        <NavbarSubcategories category={category} />
      </div>
    </div>
  );
};

export default NavbarMenu;
