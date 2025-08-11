import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from '@/components/layout/Header';

describe('<Header />', () => {
  it('has category links. On it\'s "mouseOver" and "mouseOut" events "<NavbarMenu />" will toggle', async () => {
    globalThis.matchMediaMock.useMediaQuery('(min-width: 768px)');
    render(<Header />);
    const categoryLinks = screen.getAllByRole('link', { hidden: true });
    const navbarMenu = screen.getByTestId('navbar-menu');
    expect(navbarMenu).toHaveClass('-translate-y-full');
    fireEvent.mouseOver(categoryLinks[1]);
    waitFor(() => {
      expect(navbarMenu).not.toHaveClass('-translate-y-full');
    });
    fireEvent.mouseOut(categoryLinks[1]);
    waitFor(() => {
      expect(navbarMenu).toHaveClass('-translate-y-full');
    });
  });
});
