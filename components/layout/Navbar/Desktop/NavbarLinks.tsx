'use client';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { useHeaderContext } from '@/components/layout/Header/Header.context';
import { CategoryMouseEventHandler } from '@/components/layout/Header/types';
import clsx from 'clsx';
import { Skeleton } from '@/components/ui/skeleton';
import styles from '@/components/layout/Navbar/Desktop/NavbarLinks.module.scss';

type NavbarLinksProps = {
  mouseOverHandler: CategoryMouseEventHandler;
  mouseOutHandler: CategoryMouseEventHandler;
};
const NavbarLinks = ({
  mouseOverHandler,
  mouseOutHandler,
}: NavbarLinksProps) => {
  const parentNavbarRef = useRef<HTMLDivElement>(null);
  const childNavbarRef = useRef<HTMLDivElement>(null);

  const {
    navLinks,
    desktop: {
      selectedHorizontalNavLink,
      navbar: { setNavbarElementsDsktp, childOffset },
    },
  } = useHeaderContext();

  useEffect(() => {
    if (parentNavbarRef.current && childNavbarRef.current) {
      setNavbarElementsDsktp(parentNavbarRef.current, childNavbarRef.current);
    }
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
          <Link key={link.id} prefetch={false} href={link.url}>
            <span
              id={link.id}
              className={clsx(styles.navbarlinks__link, {
                [styles['navbarlinks__link--active']]:
                  selectedHorizontalNavLink === link.name,
              })}
              onMouseOver={mouseOverHandler(link)}
              onMouseOut={mouseOutHandler(link)}
            >
              {link.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavbarLinks;
