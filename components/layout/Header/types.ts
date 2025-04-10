export type ToggleMenu = (isMenuVisible: boolean, menuCategory: string) => void;
export type MenuVisibility = [boolean, string];

export type HeaderInitialState = {
  navbarParentDsktp: HTMLDivElement | null;
  navbarChildDsktp: HTMLDivElement | null;
  isMenuVisibleDsktp: MenuVisibility;
};

export type SetNavbarElements = (
  navbarParent: HTMLDivElement,
  navbarChild: HTMLDivElement,
) => void;

export type HeaderReducer = (
  state: HeaderInitialState,
  action: {
    type: 'UPDATE_NAVBAR_ELEMENTS_DSKTP' | 'TOGGLE_MENU_DSKTP';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  },
) => HeaderInitialState;

export type HeaderContext = {
  desktop: {
    isMenuVisible: MenuVisibility;
    toggleMenu: ToggleMenu;
    navbar: {
      parent: HTMLDivElement | null;
      child: HTMLDivElement | null;
      setNavbarElements: SetNavbarElements;
    };
  };
  mobile: null;
};
