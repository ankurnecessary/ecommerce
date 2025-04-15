import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import Header from '.';

describe('Header', () => {
  const { getByText, getByPlaceholderText, getByRole } = render(<Header />);

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
});
