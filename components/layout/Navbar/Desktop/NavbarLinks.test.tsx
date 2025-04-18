import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import NavbarLinks from '@/components/layout/Navbar/Desktop/NavbarLinks';

describe('NavbarLinks', () => {
  const mockMouseOverHandler = vi.fn();
  const mockMouseOutHandler = vi.fn();

  it('should have multiple category links', () => {
    const { getAllByRole } = render(
      <NavbarLinks
        mouseOverHandler={mockMouseOverHandler}
        mouseOutHandler={mockMouseOutHandler}
      />,
    );
    const categoryLinks = getAllByRole('link');
    expect(categoryLinks.length).toBeGreaterThan(0);
  });
});
