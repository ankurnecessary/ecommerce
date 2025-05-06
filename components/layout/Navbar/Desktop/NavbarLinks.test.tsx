import { describe, expect, it, Mock, vi } from 'vitest';
import { render } from '@testing-library/react';
import NavbarLinks from '@/components/layout/Navbar/Desktop/NavbarLinks';
import * as HeaderContextModule from '@/components/layout/Header/Header.context';
import { mockUseHeaderContext } from '@/components/layout/Header/Header.context.mock';

describe('NavbarLinks', () => {
  it('should have multiple category links', () => {
    (HeaderContextModule.useHeaderContext as Mock).mockReturnValue(
      mockUseHeaderContext({
        navLinks: [
          { id: 'fkjffh1', href: '/newIn', label: 'New In' },
          { id: 'fkjffh2', href: '/sale', label: 'Sale' },
        ],
      }),
    );

    const { getAllByRole } = render(
      <NavbarLinks mouseOverHandler={vi.fn()} mouseOutHandler={vi.fn()} />,
    );
    const categoryLinks = getAllByRole('link');
    expect(categoryLinks.length).toBeGreaterThan(0);
  });
});
