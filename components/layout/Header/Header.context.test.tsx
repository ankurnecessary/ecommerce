import { render, renderHook, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  useHeaderContext,
  HeaderContextProvider,
} from '@/components/layout/Header/Header.context';
import React from 'react';
import { NavLink } from './types';

function TestComponent() {
  const { desktop } = useHeaderContext();

  React.useEffect(() => {
    // Simulate calling with nulls
    desktop.navbar.setNavbarElementsDsktp(
      null as unknown as HTMLDivElement,
      null as unknown as HTMLDivElement,
    );
  }, []);

  return <div data-testid="test">No Crash</div>;
}

describe('HeaderContext', () => {
  it('provides default values', () => {
    // Related to mock
    const { result } = renderHook(() => useHeaderContext(), {
      wrapper: HeaderContextProvider,
    });

    expect(result.current.navLinks.length).toEqual(1);
    expect(result.current.navLinks).toEqual([
      { id: 'fkjffh1', href: '/newIn', label: 'New In' },
    ]);
    expect(typeof result.current.setNavLinks).toBe('function');
    expect(result.current.desktop.isMenuVisible).toEqual([false, '']);
    expect(typeof result.current.desktop.toggleMenu).toBe('function');
    expect(result.current.desktop.selectedHorizontalNavLink).toBe('');
    expect(typeof result.current.desktop.setSelectedHorizontalNavLink).toBe(
      'function',
    );
    expect(result.current.desktop.selectedVerticalNavLink).toBe('');
    expect(typeof result.current.desktop.setSelectedVerticalNavLink).toBe(
      'function',
    );
    expect(result.current.desktop.verticalNavScrollToElementId).toBe('');
    expect(typeof result.current.desktop.setVerticalNavScrollToElementId).toBe(
      'function',
    );
    expect(result.current.desktop.navbar.parent).toBeNull();
    expect(result.current.desktop.navbar.child).toBeNull();
    expect(typeof result.current.desktop.navbar.setNavbarElementsDsktp).toBe(
      'function',
    );
    expect(result.current.desktop.navbar.childOffset).toEqual(0);
    expect(typeof result.current.desktop.navbar.setNavbarOffsetDsktp).toBe(
      'function',
    );
    expect(result.current.mobile).toBeNull();
  });

  it('updates navLinks when setNavLinks is called', () => {
    const { result } = renderHook(() => useHeaderContext(), {
      wrapper: HeaderContextProvider,
    });

    const newLinks: NavLink[] = [
      { id: 'abc', href: '/abc', label: 'ABC' },
      { id: 'xyz', href: '/xyz', label: 'XYZ' },
    ];

    // Update navLinks
    result.current.setNavLinks(newLinks);
    waitFor(() => {
      expect(result.current.navLinks).toEqual(newLinks);
    });
  });

  it('does not crash if navbarParentDsktp or navbarChildDsktp are null', () => {
    const { getByTestId } = render(
      <HeaderContextProvider>
        <TestComponent />
      </HeaderContextProvider>,
    );

    // If it gets here, the component didn't crash
    expect(getByTestId('test')).toBeInTheDocument();
  });

  it('updates selectedHorizontalNavLink when setSelectedHorizontalNavLink is called', () => {
    const { result } = renderHook(() => useHeaderContext(), {
      wrapper: HeaderContextProvider,
    });

    result.current.desktop.setSelectedHorizontalNavLink('TestCategory');
    waitFor(() => {
      expect(result.current.desktop.selectedHorizontalNavLink).toBe(
        'TestCategory',
      );
    });
  });

  it('updates selectedVerticalNavLink when setSelectedVerticalNavLink is called', () => {
    const { result } = renderHook(() => useHeaderContext(), {
      wrapper: HeaderContextProvider,
    });

    result.current.desktop.setSelectedVerticalNavLink('VerticalCat');
    waitFor(() => {
      expect(result.current.desktop.selectedVerticalNavLink).toBe(
        'VerticalCat',
      );
    });
  });

  it('updates verticalNavScrollToElementId when setVerticalNavScrollToElementId is called', () => {
    const { result } = renderHook(() => useHeaderContext(), {
      wrapper: HeaderContextProvider,
    });

    result.current.desktop.setVerticalNavScrollToElementId('element-123');
    waitFor(() => {
      expect(result.current.desktop.verticalNavScrollToElementId).toBe(
        'element-123',
      );
    });
  });

  it('toggles menu visibility and category', () => {
    const { result } = renderHook(() => useHeaderContext(), {
      wrapper: HeaderContextProvider,
    });

    result.current.desktop.toggleMenu(true, 'Shoes');
    waitFor(() => {
      expect(result.current.desktop.isMenuVisible).toEqual([true, 'Shoes']);
    });

    result.current.desktop.toggleMenu(false, '');
    waitFor(() => {
      expect(result.current.desktop.isMenuVisible).toEqual([false, '']);
    });
  });

  it('updates navbar elements and offset', () => {
    const { result } = renderHook(() => useHeaderContext(), {
      wrapper: HeaderContextProvider,
    });

    // Simulate setting navbar elements
    const parent = document.createElement('div');
    const child = document.createElement('div');
    result.current.desktop.navbar.setNavbarElementsDsktp(parent, child);
    waitFor(() => {
      expect(result.current.desktop.navbar.parent).toBe(parent);
      expect(result.current.desktop.navbar.child).toBe(child);
    });

    // Simulate setting navbar offset
    result.current.desktop.navbar.setNavbarOffsetDsktp(42);
    waitFor(() => {
      expect(result.current.desktop.navbar.childOffset).toBe(42);
    });
  });
});
