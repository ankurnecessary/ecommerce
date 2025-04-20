import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import NavbarDesktop from '@/components/layout/Navbar/Desktop/NavbarDesktop';

describe('NavbarDesktop', () => {
  it('renders the "Categories" text inside the component', () => {
    const { getByText } = render(<NavbarDesktop />);
    expect(getByText('Categories')).toBeInTheDocument();
  });
});
