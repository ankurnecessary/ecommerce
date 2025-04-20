import { describe, expect, it } from 'vitest';
import NavbarMenu from '@/components/layout/Navbar/Desktop/NavbarMenu';
import { render } from '@testing-library/react';

describe('NavbarMenu', () => {
  it('renders in the DOM.', () => {
    const { getByTestId } = render(<NavbarMenu />);
    expect(getByTestId('navbar-menu')).toBeInTheDocument();
  });
});
