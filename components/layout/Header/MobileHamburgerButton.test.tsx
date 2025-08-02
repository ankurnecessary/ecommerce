import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, Mock, vi } from 'vitest';
import MobileHamburgerButton from '@/components/layout/Header/MobileHamburgerButton';
import { mockUseHeaderContext } from '@/components/layout/Header/Header.context.test.mock';
import * as HeaderContextModule from '@/components/layout/Header/Header.context';

describe('MobileHamburgerButton', () => {
  it('should load', () => {
    const { getByRole } = render(<MobileHamburgerButton />);
    const button = getByRole('button', { name: 'Open navigation menu' });
    expect(button).toBeInTheDocument();
  });

  it('should call the function toggleMenu', () => {
    const toggleMenuMock = vi.fn();
    (HeaderContextModule.useHeaderContext as Mock).mockReturnValue(
      mockUseHeaderContext({
        mobile: { toggleMenu: toggleMenuMock },
      }),
    );

    const { getByRole } = render(<MobileHamburgerButton />);
    const button = getByRole('button', { name: 'Open navigation menu' });
    fireEvent.click(button);

    expect(toggleMenuMock).toHaveBeenCalledWith(true);
  });
});
