import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '.';

vi.mock('next/font/google', () => ({
  Mulish: () => ({
    className: 'mock-mulish',
    variable: '--mock-mulish',
  }),
}));

describe('Header', () => {
  render(<Header />);

  it('renders the component with text', () => {
    expect(screen.getByText('Celebrations')).toBeInTheDocument();
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
