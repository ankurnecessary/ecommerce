'use client';
import React from 'react';
import { useHeaderContext } from '@/components/layout/Header/Header.context';
import {
  CategoryMouseOverHandler,
  HeaderContext,
  MenuCategory,
} from '@/components/layout/Header/types';
import VerticalScrollContainer from '@/components/custom-ui/VerticalScrollContainer';
import clsx from 'clsx';
import NavbarSubcategories from '@/components/layout/Navbar/Desktop/NavbarSubcategories';
import { ChevronRight } from 'lucide-react';
import styles from '@/components/layout/Navbar/Desktop/NavbarMenu.module.scss';

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
      className={clsx(styles.navbarMenu, {
        [styles['navbarMenu--invisible']]: !isVisible,
        [styles['navbarMenu--visible']]: isVisible,
      })}
      onMouseOver={menuMouseOverHandler}
      onMouseLeave={menuMouseOutHandler}
    >
      <div className={styles.navbarMenu__leftCol}>
        <VerticalScrollContainer
          contentClassName="p-5 pl-10"
          scrollToElementId={verticalNavScrollToElementId}
        >
          {navLinks.map((link) => (
            // [ ]: Change `key={link.id}` when actual API is made with unique key. Probably id.
            <span
              key={link.id}
              id={`vertical-${link.id}`}
              className={clsx(styles.navbarMenu__categoryLink, {
                [styles['navbarMenu__categoryLink--active']]:
                  selectedVerticalNavLink === link.label,
              })}
              onMouseOver={categoryMouseOverHandler(link)}
            >
              <span>{link.label}</span>
              <span>
                <ChevronRight className={styles.navbarMenu__categoryChevron} />
              </span>
            </span>
          ))}
        </VerticalScrollContainer>
      </div>
      <div className={styles.navbarMenu__divider}></div>
      <div className={styles.navbarMenu__rightCol}>
        <NavbarSubcategories category={category} />
      </div>
    </div>
  );
};

export default NavbarMenu;
