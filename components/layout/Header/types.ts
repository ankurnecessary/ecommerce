export type ToggleMenu = (isMenuVisible: boolean, menuCategory: string) => void;
export type MenuVisibility = [boolean, string];
export type HeaderContext = {
  desktop: { isMenuVisible: MenuVisibility; toggleMenu: ToggleMenu };
  mobile: null;
};
