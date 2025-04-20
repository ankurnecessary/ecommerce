import { afterEach, describe, expect, it, Mock, vi } from 'vitest';
import NavbarScroller from '@/components/layout/Navbar/Desktop/NavbarScroller';
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import { useHeaderContext } from '@/components/layout/Header/Header.context';
import { mockUseHeaderContext } from '@/components/layout/Header/Header.context.mock';

describe('NavbarScroller', () => {
  it('should render the component', () => {
    const { getByRole } = render(<NavbarScroller />);

    const leftArrowButton = getByRole('button', {
      name: 'left scroller',
    });
    expect(leftArrowButton).toBeInTheDocument();

    const rightArrowButton = getByRole('button', {
      name: 'right scroller',
    });
    expect(rightArrowButton).toBeInTheDocument();
  });

  it('renders <NavbarScroller />. Its left arrow button should be disabled initially.', () => {
    const { getByRole } = render(<NavbarScroller />);
    const leftArrowButton = getByRole('button', {
      name: 'left scroller',
    });
    expect(leftArrowButton).toBeInTheDocument();
    expect(leftArrowButton).toBeDisabled();
  });

  it('renders <NavbarScroller />. Its right arrow button shold be enabled initially.', () => {
    const { getByRole } = render(<NavbarScroller />);
    const rightArrowButton = getByRole('button', {
      name: 'right scroller',
    });
    expect(rightArrowButton).toBeInTheDocument();
    expect(rightArrowButton).not.toBeDisabled();
  });

  it('renders <NavbarScroller />. Its left arrow button should be enabled as childOffset != 0', async () => {
    // Mocking HeaderContext
    (useHeaderContext as Mock).mockReturnValue(
      mockUseHeaderContext({ childOffset: -1000 }),
    );

    const { getByRole } = render(<NavbarScroller />);
    const leftArrowButton = getByRole('button', {
      name: 'left scroller',
    });
    expect(leftArrowButton).toBeInTheDocument();
    expect(leftArrowButton).not.toBeDisabled();
  });

  it('renders <NavbarScroller />. Its left arrow button should be enabled after clicking on right arrow', async () => {
    const { getByRole, rerender } = render(<NavbarScroller />);

    const leftArrowButton = getByRole('button', {
      name: 'left scroller',
    });
    expect(leftArrowButton).toBeInTheDocument();
    expect(leftArrowButton).toBeDisabled();

    const rightArrowButton = getByRole('button', {
      name: 'right scroller',
    });
    expect(rightArrowButton).toBeInTheDocument();
    expect(rightArrowButton).not.toBeDisabled();

    fireEvent.click(rightArrowButton);
    (useHeaderContext as Mock).mockReturnValue(
      mockUseHeaderContext({ childOffset: -1000 }),
    );

    rerender(<NavbarScroller />);
    await waitFor(() => {
      expect(leftArrowButton).not.toBeDisabled();
    });
  });

  it('renders <NavbarScroller />. Its right arrow button should be disabled when childOffset == maxRightOffset', async () => {
    // Mocking HeaderContext
    (useHeaderContext as Mock).mockReturnValue(
      mockUseHeaderContext({
        child: { getBoundingClientRect: () => ({ width: 5000 }) },
        parent: { getBoundingClientRect: () => ({ width: 1000 }) },
        childOffset: -4000,
      }),
    );

    const { getByRole } = render(<NavbarScroller />);

    const leftArrowButton = getByRole('button', {
      name: 'left scroller',
    });
    expect(leftArrowButton).toBeInTheDocument();
    expect(leftArrowButton).not.toBeDisabled();

    const rightArrowButton = getByRole('button', {
      name: 'right scroller',
    });
    expect(rightArrowButton).toBeInTheDocument();
    expect(rightArrowButton).toBeDisabled();
  });

  it('renders <NavbarScroller />. Its left and right arrow buttons should be disabled when childWidth <= parentWidth', async () => {
    // Mocking HeaderContext
    (useHeaderContext as Mock).mockReturnValue(
      mockUseHeaderContext({
        child: { getBoundingClientRect: () => ({ width: 1000 }) },
        parent: { getBoundingClientRect: () => ({ width: 1000 }) },
      }),
    );

    const { getByRole } = render(<NavbarScroller />);

    const leftArrowButton = getByRole('button', {
      name: 'left scroller',
    });
    expect(leftArrowButton).toBeInTheDocument();
    expect(leftArrowButton).toBeDisabled();

    const rightArrowButton = getByRole('button', {
      name: 'right scroller',
    });
    expect(rightArrowButton).toBeInTheDocument();
    expect(rightArrowButton).toBeDisabled();
  });

  afterEach(() => {
    cleanup();
    vi.resetAllMocks();
  });
});
