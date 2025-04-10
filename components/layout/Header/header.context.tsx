'use client';
import React, { createContext, useContext, useReducer } from 'react';
import {
  HeaderContext,
  HeaderInitialState,
  ToggleMenu,
  SetNavbarElements,
  HeaderReducer,
} from '@/components/layout/Header/types';

// Need to use in useReducer() hook
const headerInitialState: HeaderInitialState = {
  navbarParentDsktp: null,
  navbarChildDsktp: null,
  isMenuVisibleDsktp: [false, ''],
};

// Need to use in useReducer() hook
const headerReducer: HeaderReducer = (state, action) => {
  switch (action.type) {
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
      setNavbarElements() {},
    },
  },
  mobile: null,
});

export const HeaderContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [header, dispatchHeaderActions] = useReducer(
    headerReducer,
    headerInitialState,
  );

  const toggleMenu: ToggleMenu = (isMenuVisible, menuCategory) => {
    dispatchHeaderActions({
      type: 'TOGGLE_MENU_DSKTP',
      isMenuVisible,
      menuCategory,
    });
  };

  const setNavbarElements: SetNavbarElements = (
    navbarParentDsktp,
    navbarChildDsktp,
  ) => {
    // TODO: Check if type is assigned to all the `useState()`
    dispatchHeaderActions({
      type: 'UPDATE_NAVBAR_ELEMENTS_DSKTP',
      navbarParentDsktp,
      navbarChildDsktp,
    });
  };

  const contextValue = {
    desktop: {
      isMenuVisible: header.isMenuVisibleDsktp,
      toggleMenu,
      navbar: {
        parent: header.navbarParentDsktp,
        child: header.navbarChildDsktp,
        setNavbarElements,
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
  const context = useContext(headerContext);
  if (!context) {
    throw new Error(
      'useHeaderContext must be used within a HeaderContextProvider',
    );
  }
  return context;
};
