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
    default: ({ children, href, className }: { children: React.ReactNode; href: string, className: string }) => {
      return <a href={ href } className={className}> { children } </a>;
    },
  };
});
