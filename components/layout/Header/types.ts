/**
 * Toggles the visibility of the desktop menu.
 * @param isMenuVisible - Whether the menu should be visible.
 * @param menuCategory - The category of the menu being toggled.
 */
export type ToggleMenu = (isMenuVisible: boolean, menuCategory: string) => void;
export type MenuVisibility = [boolean, string];

export type HeaderInitialState = {
  navbarParentDsktp: HTMLDivElement | null;
  navbarChildDsktp: HTMLDivElement | null;
  isMenuVisibleDsktp: MenuVisibility;
  navbarChildOffsetDsktp: number;
};

/**
 * Sets the parent and child elements of the navbar.
 * @param navbarParentDsktp - The parent element of the navbar.
 * @param navbarChildDsktp - The child element of the navbar.
 */
export type SetNavbarElements = (
  navbarParent: HTMLDivElement,
  navbarChild: HTMLDivElement,
) => void;

/**
 * Sets the offset of the child element in the navbar.
 * @param navbarChildOffsetDsktp - The offset of the child element.
 */
export type SetNavbarOffsetDsktp = (navbarChildOffsetDsktp: number) => void;

/**
 * A reducer function for managing the header state.
 * @param state - The current state of the header.
 * @param action - The action to be performed on the state.
 * @returns The updated state of the header.
 */
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

/**
 * A navigation links displayed in the navbar. Common for both desktop and mobile.
 */
export type NavLink = {
  /**
   * The URL to navigate to when the link is clicked.
   */
  href: string;
  /**
   * The text label displayed for the link.
   */
  label: string;
};

/**
 * Represents the structure of the HeaderContext.
 */
export type HeaderContext = {
  /**
   * An array of navigation links displayed in the header.
   */
  navLinks: Array<NavLink>;
  /**
   * Desktop-specific properties and methods.
   */
  desktop: {
    /**
     * Indicates whether the desktop menu is visible and the current menu category.
     * The first element is a boolean for visibility, and the second is the menu category.
     */
    isMenuVisible: MenuVisibility;
    /**
     * Toggles the visibility of the desktop menu.
     * @param isMenuVisible - Whether the menu should be visible.
     * @param menuCategory - The category of the menu being toggled.
     */
    toggleMenu: ToggleMenu;
    /**
     * Navbar-related properties and methods for the desktop view.
     */
    navbar: {
      /**
       * The parent element of the navbar.
       */
      parent: HTMLDivElement | null;
      /**
       * The child element of the navbar.
       */
      child: HTMLDivElement | null;
      /**
       * The offset of the child element in the navbar.
       */
      childOffset: number;
      /**
       * Sets the parent and child elements of the navbar.
       * @param navbarParentDsktp - The parent element of the navbar.
       * @param navbarChildDsktp - The child element of the navbar.
       */
      setNavbarElementsDsktp: SetNavbarElements;
      /**
       * Sets the offset of the child element in the navbar.
       * @param navbarChildOffsetDsktp - The offset of the child element.
       */
      setNavbarOffsetDsktp: SetNavbarOffsetDsktp;
    };
  };
  /**
   * Mobile-specific properties and methods (if any).
   */
  mobile: null;
};

/**
 * A function that calculates the offset for the navbar based on the direction.
 * @param directions - The direction to calculate the offset ('left' or 'right').
 * @returns A function that takes the parent and child navbar elements and returns a function that takes an offset value.
 */
export type CalculateOffset = (
  directions: 'left' | 'right',
) => (navbarParent: number, navbarChild: number) => (offset: number) => number;

/**
 * A function that handles mouse events for the navbar.
 * @param e - The mouse event.
 */
export type NavbarMouseEvent = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
) => void;
