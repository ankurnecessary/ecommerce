'use client';
import React, { createContext, useContext, useState } from 'react';
import { HeaderContext, MenuVisibility, ToggleMenu } from './types';

const headerContext = createContext<HeaderContext>({
  desktop: { isMenuVisible: [false, ''], toggleMenu: () => {} },
  mobile: null,
});

export const HeaderContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isMenuVisible, setIsMenuVisible] = useState<MenuVisibility>([
    false,
    '',
  ]);

  const toggleMenu: ToggleMenu = (isMenuVisible, menuCategory) => {
    setIsMenuVisible([isMenuVisible, menuCategory]);
  };

  const contextValue = {
    desktop: { isMenuVisible, toggleMenu },
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
