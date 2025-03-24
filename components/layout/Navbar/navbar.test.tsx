import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Navbar from '.';

describe('Navbar', () => {
  it('renders the text inside the component', () => {
    render(<Navbar />);
    expect(screen.getByText('This is navbar')).toBeInTheDocument();
  });
});
