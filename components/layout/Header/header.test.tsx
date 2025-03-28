import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '.';

describe('Header', () => {
  render(<Header />);

  it('renders the component with text', () => {
    expect(screen.getByText('Celeb')).toBeInTheDocument();
  });

  it('renders the component with search input', () => {
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  it('renders the component with search button', () => {
    expect(
      screen.getByRole('button', { name: /^search/i }),
    ).toBeInTheDocument();
  });
});
