import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import NavbarLinks from '@/components/layout/Navbar/Desktop/NavbarLinks';

describe('NavbarLinks', () => {
  it('should have multiple category links', () => {
    const { getAllByRole } = render(
      <NavbarLinks mouseOverHandler={vi.fn()} mouseOutHandler={vi.fn()} />,
    );
    const categoryLinks = getAllByRole('link');
    expect(categoryLinks.length).toBeGreaterThan(0);
  });
});
