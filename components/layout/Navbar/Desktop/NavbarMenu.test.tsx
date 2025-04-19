import { afterEach, describe, expect, it } from 'vitest';
import NavbarMenu from './NavbarMenu';
import { cleanup, render } from '@testing-library/react';

describe('NavbarMenu', () => {
  it('renders in the DOM.', () => {
    const { getByTestId } = render(<NavbarMenu />);
    expect(getByTestId('navbar-menu')).toBeInTheDocument();
  });

  afterEach(() => {
    cleanup();
  });
});
