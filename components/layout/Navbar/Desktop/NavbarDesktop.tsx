'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useHeaderContext } from '@/components/layout/Header/Header.context';
import {
  HeaderContext,
  NavbarMouseEvent,
} from '@/components/layout/Header/types';
import NavbarLinks from '@/components/layout/Navbar/Desktop/NavbarLinks';
import NavbarScroller from '@/components/layout/Navbar/Desktop/NavbarScroller';
import clsx from 'clsx';
// DONE: Check how horizontal menu nav items are getting highlighted on hover on shien.com.
// TODO: test-case: Check how horizontal menu nav items are getting highlighted on hover on shien.com.
// TODO: test-case: Add test cases for the <scroll-area /> component.
// TODO: test-case: Add test cases for the navbar menu flap's category section.
// TODO: Integrate storybook for the Navbar component and its sub-components.
// DONE: Convert navbar links into an array of objects and map through them to create the links dynamically.
// DONE: Check why scrollbar is not working in firefox.
// DONE: Check backdrop of the menubar.
// DONE: Check when you slowly take the mouse out of the navbar menu link, the menu drawer takes a jump.
// TODO: Write test cases for the VerticalScrollContainer component.
// DONE: Set hover behavior for the vertical category links in navbar menu.
// TODO: Add CSS skeleton for the navbar menu.
// DONE: Add autoscroll feature in VerticalScrollContainer component. So that when a user hovers over the categories in the horizontal navbar, the vertical scroll area scrolls to the hovered category.
// DONE: After navbar menu gets visible, when we bring our mouse pointer on the right and left arrow buttons, the menu hides. It should not hide. Fix this issue.
// DONE: Initially, scroll buttons are getting disabled on first load of the component. Atleast one of them should be enabled. Fix this issue.
// DONE: Hide horizontal scrollbar buttons from the navbar menu if the categories reel don't outgrow it's parent container.
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

  const mouseOverHandler: NavbarMouseEvent = (e) => {
    e.stopPropagation();
    // Fetching link text from the link
    const link = e.target as HTMLAnchorElement;
    toggleMenu(true, link.textContent || '');
    setSelectedHorizontalNavLink(link.textContent || '');
    setSelectedVerticalNavLink(link.textContent || '');
    setVerticalNavScrollToElementId(link?.id ? `vertical-${link.id}` : '');
  };

  const navbarMouseOverHandler: NavbarMouseEvent = () => {
    if (isMenuVisible[1]) toggleMenu(true, isMenuVisible[1]);
    if (selectedHorizontalNavLink)
      setSelectedHorizontalNavLink(selectedHorizontalNavLink);
  };

  const navbarMouseOutHandler: NavbarMouseEvent = () => {
    toggleMenu(false, '');
    setSelectedHorizontalNavLink('');
  };

  const categoryMouseOverHandler: NavbarMouseEvent = (e) => {
    e.stopPropagation();
    const link = e.target as HTMLAnchorElement;
    toggleMenu(true, navLinks[0].label || '');
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
            "relative inline-block p-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:content-['']",
            {
              'bg-gray-100 after:scale-x-100':
                selectedHorizontalNavLink === 'Categories',
            },
          )}
          onMouseOver={categoryMouseOverHandler}
        >
          Categories
          <FontAwesomeIcon
            icon={faChevronDown}
            className={clsx('ml-1 text-xs transition-transform duration-300', {
              'rotate-180':
                isMenuVisible[0] && isMenuVisible[1] === 'Categories',
            })}
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
