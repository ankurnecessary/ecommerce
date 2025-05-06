import { afterEach, beforeAll, vi } from 'vitest';
import React from 'react';
import { mockUseHeaderContext } from '@/components/layout/Header/Header.context.mock';
import { cleanup } from '@testing-library/react';

beforeAll(() => {
  globalThis.ResizeObserver = vi.fn(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }));
});

vi.mock('next/font/google', () => ({
  Mulish: () => ({
    className: 'mock-mulish',
    variable: '--mock-mulish',
  }),
}));

vi.mock('next/link', () => {
  return {
    __esModule: true,
    default: ({ children, href, className }: { children: React.ReactNode; href: string, className: string }) => {
      return <a href={href} className={className}> {children} </a>;
    },
  };
});

vi.mock('@/components/layout/Header/Header.context', () => ({
  __esModule: true,
  useHeaderContext: vi.fn(() => mockUseHeaderContext({})),
  HeaderContextProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

// Automatically clean up the DOM after each test
afterEach(() => {
  cleanup();
  vi.resetAllMocks();
});
