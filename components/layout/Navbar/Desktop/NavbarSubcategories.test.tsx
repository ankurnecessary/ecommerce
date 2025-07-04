import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import NavbarSubcategories from '@/components/layout/Navbar/Desktop/NavbarSubcategories';

describe('NavbarSubcategories', () => {
  it('should render loader when there are no subcategories', () => {
    const { getByText } = render(
      <NavbarSubcategories
        category={{
          id: 'testId',
          href: '/Test',
          label: '/Test',
          subcategories: [],
        }}
      />,
    );
    expect(getByText('Sub-categories not found!')).toBeInTheDocument();
  });

  it('should render loader when subcategories are undefined', () => {
    const { getByText } = render(
      <NavbarSubcategories
        category={{
          id: 'testId',
          href: '/Test',
          label: '/Test',
        }}
      />,
    );
    expect(getByText('Sub-categories not found!')).toBeInTheDocument();
  });

  it('should not render loader but sub-category link(s)', () => {
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

  it('should render right link against sub-category', () => {
    const { getByText } = render(
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
    expect(getByText('Shirt').closest('a')).toHaveAttribute('href', '/Shirt');
  });

  it('should render right image against sub-category', () => {
    const { getByAltText } = render(
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
    expect(getByAltText('Shirt')).toHaveAttribute(
      'src',
      'https://picsum.photos/id/1/55/55',
    );
  });

  it('should render right classNames on hover of sub-category links', () => {
    const { getByText } = render(
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
    const subCategoryLink = getByText('Shirt').closest('a');
    expect(subCategoryLink).toHaveClass('group/subcat');
  });

  it('should render vertical scroll container', () => {
    const { getByLabelText } = render(
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
    expect(getByLabelText('Vertical Scroll Container')).toBeInTheDocument();
  });
});
