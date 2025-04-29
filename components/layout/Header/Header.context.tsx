'use client';
import React, { createContext, useContext, useReducer } from 'react';
import {
  HeaderContext,
  HeaderInitialState,
  ToggleMenu,
  SetNavbarElements,
  HeaderReducer,
  SetNavbarOffsetDsktp,
} from '@/components/layout/Header/types';

// Need to use in useReducer() hook
const headerInitialState: HeaderInitialState = {
  navbarParentDsktp: null,
  navbarChildDsktp: null,
  isMenuVisibleDsktp: [false, ''],
  navbarChildOffsetDsktp: 0,
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
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

// Created header context
const headerContext = createContext<HeaderContext>({
  navLinks: [],
  desktop: {
    isMenuVisible: [false, ''],
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
  const setNavbarElementsDsktp: SetNavbarElements = (
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

  const contextValue: HeaderContext = {
    navLinks: [],
    desktop: {
      isMenuVisible: header.isMenuVisibleDsktp,
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
