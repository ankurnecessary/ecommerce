import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Navbar from '@/components/layout/Navbar';

describe('Navbar', () => {
  
  it('renders the text inside the component', () => {
    render(<Navbar />);
    expect(screen.getByText('Categories')).toBeInTheDocument();
  });

});
