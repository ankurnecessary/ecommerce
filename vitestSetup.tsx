import { vi } from 'vitest';
import React from 'react';

vi.mock('next/font/google', () => ({
  Mulish: () => ({
    className: 'mock-mulish',
    variable: '--mock-mulish',
  }),
}));

vi.mock('next/link', () => {
  return {
    __esModule: true,
    default: ({ children, href }: { children: React.ReactNode; href: string }) => {
      return <a href={ href }> { children } </a>;
    },
  };
});
