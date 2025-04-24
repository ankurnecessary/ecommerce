'use client';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { useHeaderContext } from '@/components/layout/Header/Header.context';
import { NavbarMouseEvent } from '@/components/layout/Header/types';

const NavbarLinks = ({
  mouseOverHandler,
  mouseOutHandler,
}: {
  mouseOverHandler: NavbarMouseEvent;
  mouseOutHandler: NavbarMouseEvent;
}) => {
  const parentNavbarRef = useRef<HTMLDivElement>(null);
  const childNavbarRef = useRef<HTMLDivElement>(null);

  const {
    desktop: {
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
    <div className="overflow-x-hidden whitespace-nowrap" ref={parentNavbarRef}>
      <div
        className="inline-flex transition-transform duration-300"
        style={{ transform: `translateX(${childOffset || 0}px)` }}
        ref={childNavbarRef}
        onMouseOver={mouseOverHandler}
        onMouseOut={mouseOutHandler}
      >
        <Link
          prefetch={false}
          className="inline-block p-2 hover:bg-gray-100"
          href={'/newIn'}
        >
          New In
        </Link>
        <Link
          prefetch={false}
          className="inline-block p-2 hover:bg-gray-100"
          href={'/sale'}
        >
          Sale
        </Link>
        <Link
          prefetch={false}
          className="inline-block p-2 hover:bg-gray-100"
          href={'/womenClothing'}
        >
          Women Clothing
        </Link>
        <Link
          prefetch={false}
          className="inline-block p-2 hover:bg-gray-100"
          href={'/curve'}
        >
          Curve
        </Link>
        <Link
          prefetch={false}
          className="inline-block p-2 hover:bg-gray-100"
          href={'/homeAndKitchen'}
        >
          Home &amp; Kitchen
        </Link>
        <Link
          prefetch={false}
          className="inline-block p-2 hover:bg-gray-100"
          href={'/menClothing'}
        >
          Men Clothing
        </Link>
        <Link
          prefetch={false}
          className="inline-block p-2 hover:bg-gray-100"
          href={'/kids'}
        >
          Kids
        </Link>
        <Link
          prefetch={false}
          className="inline-block p-2 hover:bg-gray-100"
          href={'/jewelryAndAccessories'}
        >
          Jewelry &amp; Accessories
        </Link>
        <Link
          prefetch={false}
          className="inline-block p-2 hover:bg-gray-100"
          href={'/underwearAndSleepwear'}
        >
          Underwear &amp; Sleepwear
        </Link>
        <Link
          prefetch={false}
          className="inline-block p-2 hover:bg-gray-100"
          href={'/beautyAndHealth'}
        >
          Beauty &amp; Health
        </Link>
        <Link
          prefetch={false}
          className="inline-block p-2 hover:bg-gray-100"
          href={'/shoes'}
        >
          Shoes
        </Link>
        <Link
          prefetch={false}
          className="inline-block p-2 hover:bg-gray-100"
          href={'/bagsAndLuggage'}
        >
          Bags &amp; Luggage
        </Link>
        <Link
          prefetch={false}
          className="inline-block p-2 hover:bg-gray-100"
          href={'/homeTextiles'}
        >
          Home Textiles
        </Link>
        <Link
          prefetch={false}
          className="inline-block p-2 hover:bg-gray-100"
          href={'/sportsAndOutdoors'}
        >
          Sports &amp; Outdoors
        </Link>
        <Link
          prefetch={false}
          className="inline-block p-2 hover:bg-gray-100"
          href={'/toysAndGames'}
        >
          Toys &amp; Games
        </Link>
        <Link
          prefetch={false}
          className="inline-block p-2 hover:bg-gray-100"
          href={'/babyAndMaternity'}
        >
          Baby &amp; Maternity
        </Link>
        <Link
          prefetch={false}
          className="inline-block p-2 hover:bg-gray-100"
          href={'/electronics'}
        >
          Electronics
        </Link>
        <Link
          prefetch={false}
          className="inline-block p-2 hover:bg-gray-100"
          href={'/toolsAndHomeImprovement'}
        >
          Tools &amp; Home Improvement
        </Link>
        <Link
          prefetch={false}
          className="inline-block p-2 hover:bg-gray-100"
          href={'/officeAndSchoolSupplies'}
        >
          Office &amp; School Supplies
        </Link>
        <Link
          prefetch={false}
          className="inline-block p-2 hover:bg-gray-100"
          href={'/appliances'}
        >
          Appliances
        </Link>
        <Link
          prefetch={false}
          className="inline-block p-2 hover:bg-gray-100"
          href={'/petSupplies'}
        >
          Pet Supplies
        </Link>
        <Link
          prefetch={false}
          className="inline-block p-2 hover:bg-gray-100"
          href={'/automotive'}
        >
          Automotive
        </Link>
      </div>
    </div>
  );
};

export default NavbarLinks;
