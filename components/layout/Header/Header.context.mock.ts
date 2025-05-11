import { vi } from 'vitest';
import { PartialDeep } from 'type-fest';
import { HeaderContext } from '@/components/layout/Header/types';
import { merge } from 'lodash';

export type HeaderContextOverrides = PartialDeep<HeaderContext>;

export const mockUseHeaderContext = (
  overrides: HeaderContextOverrides = {},
): HeaderContext => {
  const defaultContext: HeaderContext = {
    navLinks: [{ id: 'fkjffh1', href: '/newIn', label: 'New In' }],
    setNavLinks: vi.fn(),
    desktop: {
      isMenuVisible: [false, ''],
      toggleMenu: vi.fn(),
      selectedHorizontalNavLink: '',
      selectedVerticalNavLink: '',
      verticalNavScrollToElementId: '',
      setSelectedHorizontalNavLink: vi.fn(),
      setSelectedVerticalNavLink: vi.fn(),
      setVerticalNavScrollToElementId: vi.fn(),
      navbar: {
        child: null,
        parent: null,
        childOffset: 0,
        setNavbarOffsetDsktp: vi.fn(),
        setNavbarElementsDsktp: vi.fn(),
      },
    },
    mobile: null
  };
  return merge({}, defaultContext, overrides);
};
