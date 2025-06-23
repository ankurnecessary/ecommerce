'use client';
import React from 'react';
import { useHeaderContext } from '@/components/layout/Header/Header.context';
import {
  CategoryMouseOverHandler,
  HeaderContext,
  MenuCategory,
  NavbarMouseEvent,
} from '@/components/layout/Header/types';
import NavbarLinks from '@/components/layout/Navbar/Desktop/NavbarLinks';
import NavbarScroller from '@/components/layout/Navbar/Desktop/NavbarScroller';
import clsx from 'clsx';
import { ChevronDown } from 'lucide-react';
// [x] Check how horizontal menu nav items are getting highlighted on hover on shien.com.
// [x]: test-case: Check how horizontal menu nav items are getting highlighted on hover on shien.com.
// [x]: test-case: Add test cases for the navbar menu flap's category section.
// [ ]: Integrate storybook for the Navbar component and its sub-components.
// [x] Convert navbar links into an array of objects and map through them to create the links dynamically.
// [x] Check why scrollbar is not working in firefox.
// [x] Check backdrop of the menubar.
// [x] Check when you slowly take the mouse out of the navbar menu link, the menu drawer takes a jump.
// [x]: Write test cases for the VerticalScrollContainer component.
// [x] Set hover behavior for the vertical category links in navbar menu.
// [x] Add CSS skeleton for the navbar menu.
// [x] Add autoscroll feature in VerticalScrollContainer component. So that when a user hovers over the categories in the horizontal navbar, the vertical scroll area scrolls to the hovered category.
// [x] After navbar menu gets visible, when we bring our mouse pointer on the right and left arrow buttons, the menu hides. It should not hide. Fix this issue.
// [x] Initially, scroll buttons are getting disabled on first load of the component. Atleast one of them should be enabled. Fix this issue.
// [x] Hide horizontal scrollbar buttons from the navbar menu if the categories reel don't outgrow it's parent container.
const NavbarDesktop = () => {
  const {
    navLinks,
    desktop: {
      isMenuVisible,
      toggleMenu,
      selectedHorizontalNavLink,
      setSelectedHorizontalNavLink,
      setSelectedVerticalNavLink,
      setVerticalNavScrollToElementId,
    },
  }: HeaderContext = useHeaderContext();

  const mouseOverHandler: CategoryMouseOverHandler =
    (category: MenuCategory): NavbarMouseEvent =>
    (e) => {
      e.stopPropagation();
      toggleMenu(true, category);
      setSelectedHorizontalNavLink(category.label || '');
      setSelectedVerticalNavLink(category.label || '');
      setVerticalNavScrollToElementId(
        category.id ? `vertical-${category.id}` : '',
      );
    };

  const navbarMouseOverHandler: NavbarMouseEvent = () => {
    if (isMenuVisible[1]) toggleMenu(true, isMenuVisible[1]);
    if (selectedHorizontalNavLink)
      setSelectedHorizontalNavLink(selectedHorizontalNavLink);
  };

  const navbarMouseOutHandler: NavbarMouseEvent = () => {
    toggleMenu(false, {} as MenuCategory);
    setSelectedHorizontalNavLink('');
  };

  const categoryMouseOverHandler: NavbarMouseEvent = (e) => {
    e.stopPropagation();
    const link = e.target as HTMLAnchorElement;
    toggleMenu(true, navLinks[0]);
    setSelectedHorizontalNavLink(link.textContent || '');
    setSelectedVerticalNavLink(navLinks[0].label || '');
    setVerticalNavScrollToElementId(`vertical-${navLinks[0].id}` || '');
  };

  return (
    <nav
      className="container mx-auto hidden w-[calc(100%-4rem)] translate-y-[1px] px-6 text-sm text-black md:flex"
      onMouseOver={navbarMouseOverHandler}
      onMouseOut={navbarMouseOutHandler}
    >
      {/* Category button */}
      <div className="whitespace-nowrap">
        <span
          className={clsx(
            "relative inline-block p-2 pb-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:content-[''] dark:text-zinc-300 dark:after:bg-white",
            {
              'bg-gray-100 after:scale-x-100 dark:bg-zinc-800':
                selectedHorizontalNavLink === 'Categories',
            },
          )}
          onMouseOver={categoryMouseOverHandler}
        >
          Categories
          <ChevronDown
            className={clsx(
              'mb-[1px] ml-1 inline-block w-4 text-xs transition-transform duration-300',
              {
                'rotate-180': selectedHorizontalNavLink === 'Categories',
              },
            )}
          />
        </span>
      </div>

      {/* horizontal links scroller */}
      <NavbarLinks mouseOverHandler={mouseOverHandler} />

      {/* Buttons to scroll links horizontally */}
      <NavbarScroller />
    </nav>
  );
};

export default NavbarDesktop;
