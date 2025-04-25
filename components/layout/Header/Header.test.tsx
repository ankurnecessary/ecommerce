import { describe, expect, it } from 'vitest';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Header from '@/components/layout/Header';

describe('Header', () => {
  it('renders the component with text', () => {
    const { getByText } = render(<Header />);
    expect(getByText('Celeb')).toBeInTheDocument();
  });

  it('renders the component with search input', () => {
    const { getByPlaceholderText } = render(<Header />);
    expect(getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  it('renders the component with search button', () => {
    const { getByRole } = render(<Header />);
    expect(getByRole('button', { name: /^search/i })).toBeInTheDocument();
  });

  it('has a logo link on click of which user will land on home page', () => {
    const { getByText } = render(<Header />);
    const logoLink = getByText('Celeb').closest('a');
    expect(logoLink).toHaveAttribute('href', '/');
  });

  it('has a "Categories" link. On it\'s "mouseOver" and "mouseOut" events "<NavbarMenu />" will toggle', async () => {
    const { getByText, getByTestId } = render(<Header />);
    const categoriesLink = getByText('Categories');
    expect(categoriesLink).toBeInTheDocument();

    const navbarMenu = getByTestId('navbar-menu');
    expect(navbarMenu).toBeInTheDocument();

    // Trigger mouseover event
    fireEvent.mouseOver(categoriesLink);

    // Wait for the class to be applied
    await waitFor(() => {
      expect(navbarMenu).toHaveClass(
        'absolute z-0 h-96 w-full  transition-transform duration-300 flex',
      );
    });

    // Trigger mouseout event
    fireEvent.mouseOut(categoriesLink);

    // Wait for the class to be applied
    await waitFor(() => {
      expect(navbarMenu).toHaveClass(
        'absolute z-0 h-96 w-full -translate-y-full transition-transform duration-300 flex',
      );
    });
  });

  it('has category links. On it\'s "mouseOver" and "mouseOut" events "<NavbarMenu />" will toggle', async () => {
    const { getByTestId, container } = render(<Header />);
    const categoryLinks = container.querySelectorAll(
      'a.inline-block.p-2.hover\\:bg-gray-100',
    );
    expect(categoryLinks.length).toBeGreaterThan(0);

    const navbarMenu = getByTestId('navbar-menu');
    expect(navbarMenu).toBeInTheDocument();

    // Check if the initial class is applied
    expect(navbarMenu).toHaveClass('-translate-y-full');

    // Trigger mouseover event
    fireEvent.mouseOver(categoryLinks[0]);

    // Wait for the class to be applied
    await waitFor(() => {
      expect(navbarMenu).toHaveClass(
        'absolute z-0 h-96 w-full  transition-transform duration-300 flex',
      );
    });

    // Trigger mouseout event
    fireEvent.mouseOut(categoryLinks[0]);

    // Wait for the class to be applied
    await waitFor(() => {
      expect(navbarMenu).toHaveClass('-translate-y-full');
    });
  });
});
