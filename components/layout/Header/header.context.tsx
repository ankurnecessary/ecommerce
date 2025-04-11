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

// Need to use in useReducer() hook
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
// TODO: Check if type is assigned to all the `useState()`
export const HeaderContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [header, dispatchHeaderActions] = useReducer(
    headerReducer,
    headerInitialState,
  );

  // To toggle navigation menu
  const toggleMenu: ToggleMenu = (isMenuVisible, menuCategory) => {
    dispatchHeaderActions({
      type: 'TOGGLE_MENU_DSKTP',
      isMenuVisible,
      menuCategory,
    });
  };

  // To set navbar elements
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

  // To set navbar offset when scroll buttons are used
  const setNavbarOffsetDsktp: SetNavbarOffsetDsktp = (
    navbarChildOffsetDsktp,
  ) => {
    dispatchHeaderActions({
      type: 'UPDATE_NAVBAR_OFFSET_DSKTP',
      navbarChildOffsetDsktp,
    });
  };

  const contextValue: HeaderContext = {
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
