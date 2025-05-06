import { vi } from 'vitest';

export const mockUseHeaderContext = (overrides = {}) => ({
  navLinks: [],
  setNavLinks: vi.fn(),
  desktop: {
    isMenuVisible: [false, ''],
    toggleMenu: vi.fn(),
    navbar: {
      child: { getBoundingClientRect: () => ({ width: 5000 }) },
      parent: { getBoundingClientRect: () => ({ width: 1000 }) },
      childOffset: 0,
      setNavbarOffsetDsktp: vi.fn(),
      setNavbarElementsDsktp: vi.fn(),
      ...overrides, // Allow overriding specific properties
    },
  },
});
