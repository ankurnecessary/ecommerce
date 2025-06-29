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
import styles from '@/components/layout/Navbar/Desktop/NavbarLinks.module.scss';

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
    <div className={styles.navbarlinks} ref={parentNavbarRef}>
      <div
        className={clsx(styles.navbarlinks__container, {
          'pt-3': navLinks.length === 0,
        })}
        style={{ transform: `translateX(${childOffset || 0}px)` }}
        ref={childNavbarRef}
      >
        {/* [ ]: Change this condition when API call is implemented */}
        {navLinks.length === 0 && (
          <Skeleton className={styles.navbarlinks__skeleton} />
        )}
        {navLinks.map((link) => (
          <Link key={link.id} prefetch={false} href={link.href}>
            <span
              id={link.id}
              className={clsx(styles.navbarlinks__link, {
                [styles['navbarlinks__link--active']]:
                  selectedHorizontalNavLink === link.label,
              })}
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
