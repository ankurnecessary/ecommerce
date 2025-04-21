export type ToggleMenu = (isMenuVisible: boolean, menuCategory: string) => void;
export type MenuVisibility = [boolean, string];

export type HeaderInitialState = {
  navbarParentDsktp: HTMLDivElement | null;
  navbarChildDsktp: HTMLDivElement | null;
  isMenuVisibleDsktp: MenuVisibility;
  navbarChildOffsetDsktp: number;
};

export type SetNavbarElements = (
  navbarParent: HTMLDivElement,
  navbarChild: HTMLDivElement,
) => void;

export type SetNavbarOffsetDsktp = (navbarChildOffsetDsktp: number) => void;

export type HeaderReducer = (
  state: HeaderInitialState,
  action: {
    type:
      | 'UPDATE_NAVBAR_ELEMENTS_DSKTP'
      | 'TOGGLE_MENU_DSKTP'
      | 'UPDATE_NAVBAR_OFFSET_DSKTP';
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
      childOffset: number;
      setNavbarElementsDsktp: SetNavbarElements;
      setNavbarOffsetDsktp: SetNavbarOffsetDsktp;
    };
  };
  mobile: null;
};

export type CalculateOffset = (
  directions: 'left' | 'right',
) => (navbarParent: number, navbarChild: number) => (offset: number) => number;

export type NavbarMouseEvent = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
) => void;
