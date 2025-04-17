import { describe, expect, it } from 'vitest';
import { fireEvent, render, waitFor } from '@testing-library/react';
import Header from '.';

describe('Header', () => {
  const { getByText, getByPlaceholderText, getByRole, getByTestId } = render(
    <Header />,
  );

  it('renders the component with text', () => {
    expect(getByText('Celeb')).toBeInTheDocument();
  });

  it('renders the component with search input', () => {
    expect(getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  it('renders the component with search button', () => {
    expect(getByRole('button', { name: /^search/i })).toBeInTheDocument();
  });

  it('has a logo link on click of which user will land on home page', () => {
    const logoLink = getByText('Celeb').closest('a');
    expect(logoLink).toHaveAttribute('href', '/');
  });

  it('has a "Categories" link. On its "mouseOver" event "<NavbarMenu />" will show up', async () => {
    const categoriesLink = getByText('Categories');
    expect(categoriesLink).toBeInTheDocument();

    const navbarMenu = getByTestId('navbar-menu');
    expect(navbarMenu).toBeInTheDocument();

    // Trigger mouseover event
    fireEvent.mouseOver(categoriesLink);

    // Wait for the class to be applied
    await waitFor(() => {
      expect(navbarMenu).toHaveClass(
        'absolute z-0 h-96 w-full bg-gray-200 transition-transform duration-300',
      );
    });

    // Trigger mouseout event
    fireEvent.mouseOut(categoriesLink);

    // Wait for the class to be applied
    await waitFor(() => {
      expect(navbarMenu).toHaveClass(
        'absolute z-0 h-96 w-full -translate-y-full bg-gray-200 transition-transform duration-300',
      );
    });
  });
});
