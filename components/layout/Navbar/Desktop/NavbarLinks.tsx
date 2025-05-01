'use client';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { useHeaderContext } from '@/components/layout/Header/Header.context';
import { NavbarMouseEvent } from '@/components/layout/Header/types';
import { links } from '../XnavbarLinkObj';

type NavbarLinksProps = {
  mouseOverHandler: NavbarMouseEvent;
  mouseOutHandler: NavbarMouseEvent;
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
      navbar: { setNavbarElementsDsktp, childOffset },
    },
  } = useHeaderContext();

  useEffect(() => {
    if (parentNavbarRef.current && childNavbarRef.current) {
      setNavbarElementsDsktp(parentNavbarRef.current, childNavbarRef.current);
    }
    // TODO: Replace "setNavLinks(links)" call with an API call to fetch the links
    setNavLinks(links);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="overflow-x-hidden whitespace-nowrap" ref={parentNavbarRef}>
      <div
        className="inline-flex transition-transform duration-300"
        style={{ transform: `translateX(${childOffset || 0}px)` }}
        ref={childNavbarRef}
        onMouseOver={mouseOverHandler}
        onMouseOut={mouseOutHandler}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            prefetch={false}
            className="relative inline-block p-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:content-[''] hover:bg-gray-100 hover:after:scale-x-100"
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavbarLinks;
