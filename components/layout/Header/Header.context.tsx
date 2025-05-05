'use client';
import React, { createContext, useContext, useReducer } from 'react';
import {
  HeaderContext,
  HeaderInitialState,
  ToggleMenu,
  SetNavbarElementsDsktp,
  HeaderReducer,
  SetNavbarOffsetDsktp,
} from '@/components/layout/Header/types';

// Need to use in useReducer() hook
const headerInitialState: HeaderInitialState = {
  navbarParentDsktp: null,
  navbarChildDsktp: null,
  isMenuVisibleDsktp: [false, ''],
  selectedHorizontalNavLink: '',
  selectedVerticalNavLink: '',
  navbarChildOffsetDsktp: 0,
  navLinks: [],
  verticalNavScrollToElementId: '',
};

/**
 * A reducer function for managing the header state.
 * @param state - The current state of the header.
 * @param action - The action to be performed on the state.
 * @returns The updated state of the header.
 */
const headerReducer: HeaderReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_NAVBAR_OFFSET_DSKTP':
      return {
        ...state,
        navbarChildOffsetDsktp: action.navbarChildOffsetDsktp,
      };
    case 'UPDATE_NAVBAR_ELEMENTS_DSKTP':
      return {
        ...state,
        navbarParentDsktp: action.navbarParentDsktp,
        navbarChildDsktp: action.navbarChildDsktp,
      };
    case 'TOGGLE_MENU_DSKTP':
      return {
        ...state,
        isMenuVisibleDsktp: [action.isMenuVisible, action.menuCategory],
      };
    case 'SET_NAV_LINKS':
      return {
        ...state,
        navLinks: action.navLinks,
      };
    case 'SET_SELECTED_HORIZONTAL_NAV_LINK':
      return {
        ...state,
        selectedHorizontalNavLink: action.menuCategory,
      };
    case 'SET_SELECTED_VERTICAL_NAV_LINK':
      return {
        ...state,
        selectedVerticalNavLink: action.menuCategory,
      };
    case 'SET_VERTICAL_NAV_SCROLL_TO_ELEMENT_ID':
      return {
        ...state,
        verticalNavScrollToElementId: action.elementId,
      };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

// Created header context
const headerContext = createContext<HeaderContext>({
  navLinks: [],
  setNavLinks() {},
  desktop: {
    isMenuVisible: [false, ''],
    selectedHorizontalNavLink: '',
    setSelectedHorizontalNavLink() {},
    selectedVerticalNavLink: '',
    setSelectedVerticalNavLink() {},
    verticalNavScrollToElementId: '',
    setVerticalNavScrollToElementId() {},
    toggleMenu() {},
    navbar: {
      parent: null,
      child: null,
      childOffset: 0,
      setNavbarElementsDsktp() {},
      setNavbarOffsetDsktp() {},
    },
  },
  mobile: null,
});

/**
 * Provides the HeaderContext to its children.
 * This context manages the state and behavior of the header, including the navbar and menu visibility.
 *
 * @param children - The child components that will consume the context.
 */
export const HeaderContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [header, dispatchHeaderActions] = useReducer(
    headerReducer,
    headerInitialState,
  );

  /**
   * Toggles the visibility of the desktop menu.
   *
   * @param isMenuVisible - Whether the menu should be visible.
   * @param menuCategory - The category of the menu being toggled.
   */
  const toggleMenu: ToggleMenu = (isMenuVisible, menuCategory) => {
    dispatchHeaderActions({
      type: 'TOGGLE_MENU_DSKTP',
      isMenuVisible,
      menuCategory,
    });
  };

  /**
   * Sets the parent and child elements of the navbar.
   *
   * @param navbarParentDsktp - The parent element of the navbar.
   * @param navbarChildDsktp - The child element of the navbar.
   */
  const setNavbarElementsDsktp: SetNavbarElementsDsktp = (
    navbarParentDsktp,
    navbarChildDsktp,
  ) => {
    dispatchHeaderActions({
      type: 'UPDATE_NAVBAR_ELEMENTS_DSKTP',
      navbarParentDsktp,
      navbarChildDsktp,
    });
  };

  /**
   * To set navbar offset when scroll buttons are used.
   *
   * @param navbarChildOffsetDsktp - The offset of the child element.
   */
  const setNavbarOffsetDsktp: SetNavbarOffsetDsktp = (
    navbarChildOffsetDsktp,
  ) => {
    dispatchHeaderActions({
      type: 'UPDATE_NAVBAR_OFFSET_DSKTP',
      navbarChildOffsetDsktp,
    });
  };

  /**
   * Adds navigation links to the header state.
   *
   * @param navLinks - The navigation links to be added.
   */
  const setNavLinks = (navLinks: HeaderInitialState['navLinks']) => {
    dispatchHeaderActions({
      type: 'SET_NAV_LINKS',
      navLinks,
    });
  };

  /**
   * Sets the selected horizontal navigation link.
   *
   * @param category - The category to set as selected.
   */
  const setSelectedHorizontalNavLink = (category: string) => {
    dispatchHeaderActions({
      type: 'SET_SELECTED_HORIZONTAL_NAV_LINK',
      menuCategory: category,
    });
  };

  /**
   * Sets the selected vertical navigation link.
   *
   * @param category - The category to set as selected.
   */
  const setSelectedVerticalNavLink = (category: string) => {
    dispatchHeaderActions({
      type: 'SET_SELECTED_VERTICAL_NAV_LINK',
      menuCategory: category,
    });
  };

  /**
   * Sets the ID of the element to scroll to in the vertical navbar menu navigation.
   *
   * @param elementId - The ID of the element to scroll to.
   */
  const setVerticalNavScrollToElementId = (elementId: string) => {
    dispatchHeaderActions({
      type: 'SET_VERTICAL_NAV_SCROLL_TO_ELEMENT_ID',
      elementId,
    });
  };

  const contextValue: HeaderContext = {
    navLinks: header.navLinks,
    setNavLinks,
    desktop: {
      isMenuVisible: header.isMenuVisibleDsktp,
      selectedHorizontalNavLink: header.selectedHorizontalNavLink,
      setSelectedHorizontalNavLink,
      selectedVerticalNavLink: header.selectedVerticalNavLink,
      setSelectedVerticalNavLink,
      verticalNavScrollToElementId: header.verticalNavScrollToElementId,
      setVerticalNavScrollToElementId,
      toggleMenu,
      navbar: {
        parent: header.navbarParentDsktp,
        child: header.navbarChildDsktp,
        childOffset: header.navbarChildOffsetDsktp,
        setNavbarElementsDsktp,
        setNavbarOffsetDsktp,
      },
    },
    mobile: null,
  };

  return (
    <headerContext.Provider value={contextValue}>
      {children}
    </headerContext.Provider>
  );
};

export const useHeaderContext = () => {
  const context = useContext<HeaderContext>(headerContext);
  if (!context) {
    throw new Error(
      'useHeaderContext must be used within a HeaderContextProvider',
    );
  }
  return context;
};
