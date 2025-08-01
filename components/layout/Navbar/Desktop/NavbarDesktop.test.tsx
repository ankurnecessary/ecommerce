import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import NavbarDesktop from '@/components/layout/Navbar/Desktop/NavbarDesktop';

describe('NavbarDesktop', () => {
  it('renders the "Categories" text inside the component', () => {
    globalThis.matchMediaMock.useMediaQuery('(min-width: 768px)');
    const { getByText } = render(<NavbarDesktop />);
    expect(getByText('Categories')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    globalThis.matchMediaMock.useMediaQuery('(min-width: 768px)');
    const { getByRole } = render(<NavbarDesktop />);
    // Example: check for a nav element
    expect(getByRole('navigation')).toBeInTheDocument();
  });

  it('handles mouse over and mouse out events', () => {
    globalThis.matchMediaMock.useMediaQuery('(min-width: 768px)');
    const { getByRole } = render(<NavbarDesktop />);
    const nav = getByRole('navigation');
    nav.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
    nav.dispatchEvent(new MouseEvent('mouseout', { bubbles: true }));
    // Add assertions based on expected state changes or side effects
  });

  it('renders "New In" nav link', () => {
    globalThis.matchMediaMock.useMediaQuery('(min-width: 768px)');
    const { getByText } = render(<NavbarDesktop />);
    expect(getByText('New In')).toBeInTheDocument();
  });
});
