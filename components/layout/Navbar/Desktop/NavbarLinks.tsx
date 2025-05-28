'use client';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { useHeaderContext } from '@/components/layout/Header/Header.context';
import {
  CategoryMouseOverHandler,
  NavbarMouseEvent,
} from '@/components/layout/Header/types';
import { links } from '../XnavbarLinkObj';
import clsx from 'clsx';
import { Skeleton } from '@/components/ui/skeleton';

type NavbarLinksProps = {
  mouseOverHandler: CategoryMouseOverHandler;
  mouseOutHandler?: NavbarMouseEvent;
};
const NavbarLinks = ({
  mouseOverHandler,
  mouseOutHandler,
}: NavbarLinksProps) => {
  const parentNavbarRef = useRef<HTMLDivElement>(null);
  const childNavbarRef = useRef<HTMLDivElement>(null);

  const {
    navLinks,
    setNavLinks,
    desktop: {
      selectedHorizontalNavLink,
      navbar: { setNavbarElementsDsktp, childOffset },
    },
  } = useHeaderContext();

  useEffect(() => {
    if (parentNavbarRef.current && childNavbarRef.current) {
      setNavbarElementsDsktp(parentNavbarRef.current, childNavbarRef.current);
    }
    // [ ]: Replace "setNavLinks(links)" call with an API call to fetch the links
    setNavLinks(links);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="flex-grow overflow-x-hidden whitespace-nowrap"
      ref={parentNavbarRef}
    >
      <div
        className="inline-flex transition-transform duration-300"
        style={{ transform: `translateX(${childOffset || 0}px)` }}
        ref={childNavbarRef}
      >
        {/* [ ]: Change this condition when API call is implemented */}
        {navLinks.length === 0 && (
          <Skeleton className="h-4 w-[550px] translate-y-3" />
        )}
        {navLinks.map((link) => (
          <Link key={link.id} prefetch={false} href={link.href}>
            <span
              id={link.id}
              className={clsx(
                "relative inline-block p-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:content-[''] dark:text-zinc-300 dark:after:bg-white",
                {
                  'bg-gray-100 after:scale-x-100 dark:bg-zinc-800':
                    selectedHorizontalNavLink === link.label,
                },
              )}
              onMouseOver={mouseOverHandler(link)}
              onMouseOut={mouseOutHandler}
            >
              {link.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavbarLinks;
