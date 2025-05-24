import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import NavbarSubcategories from '@/components/layout/Navbar/Desktop/NavbarSubcategories';

describe('NavbarSubcategories', () => {
  it('should render loader while loading subcategories', () => {
    const { getByTestId } = render(
      <NavbarSubcategories
        category={{
          id: 'testId',
          href: '/Test',
          label: '/Test',
          subcategories: [],
        }}
      />,
    );
    expect(getByTestId('navbar-subcategories-loader')).toBeInTheDocument();
  });

  it('should not render loader', () => {
    const { queryByTestId } = render(
      <NavbarSubcategories
        category={{
          id: 'testId',
          href: '/Test',
          label: '/Test',
          subcategories: [
            {
              name: 'Shirt',
              id: '1jljlk',
              image: 'https://picsum.photos/id/1/55/55',
            },
          ],
        }}
      />,
    );
    expect(
      queryByTestId('navbar-subcategories-loader'),
    ).not.toBeInTheDocument();
    expect(queryByTestId('navbar-subcategories')).toBeInTheDocument();
  });
});
