import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { useHeaderContext } from '../../Header/header.context';

const NavbarLinks = ({
  mouseOverHandler,
  mouseOutHandler,
}: {
  mouseOverHandler: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => void;
  mouseOutHandler: () => void;
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
      >
        <Link
          className="inline-block p-2 hover:bg-gray-100"
          href={'/newIn'}
          onMouseOver={mouseOverHandler}
          onMouseOut={mouseOutHandler}
        >
          New In
        </Link>
        <Link
          className="inline-block p-2 hover:bg-gray-100"
          href={'/sale'}
          onMouseOver={mouseOverHandler}
          onMouseOut={mouseOutHandler}
        >
          Sale
        </Link>
        <Link
          className="inline-block p-2 hover:bg-gray-100"
          href={'/womenClothing'}
          onMouseOver={mouseOverHandler}
          onMouseOut={mouseOutHandler}
        >
          Women Clothing
        </Link>
        <Link
          className="inline-block p-2 hover:bg-gray-100"
          href={'/curve'}
          onMouseOver={mouseOverHandler}
          onMouseOut={mouseOutHandler}
        >
          Curve
        </Link>
        <Link
          className="inline-block p-2 hover:bg-gray-100"
          href={'/homeAndKitchen'}
          onMouseOver={mouseOverHandler}
          onMouseOut={mouseOutHandler}
        >
          Home &amp; Kitchen
        </Link>
        <Link
          className="inline-block p-2 hover:bg-gray-100"
          href={'/menClothing'}
          onMouseOver={mouseOverHandler}
          onMouseOut={mouseOutHandler}
        >
          Men Clothing
        </Link>
        <Link
          className="inline-block p-2 hover:bg-gray-100"
          href={'/kids'}
          onMouseOver={mouseOverHandler}
          onMouseOut={mouseOutHandler}
        >
          Kids
        </Link>
        <Link
          className="inline-block p-2 hover:bg-gray-100"
          href={'/jewelryAndAccessories'}
          onMouseOver={mouseOverHandler}
          onMouseOut={mouseOutHandler}
        >
          Jewelry &amp; Accessories
        </Link>
        <Link
          className="inline-block p-2 hover:bg-gray-100"
          href={'/underwearAndSleepwear'}
          onMouseOver={mouseOverHandler}
          onMouseOut={mouseOutHandler}
        >
          Underwear &amp; Sleepwear
        </Link>
        <Link
          className="inline-block p-2 hover:bg-gray-100"
          href={'/beautyAndHealth'}
          onMouseOver={mouseOverHandler}
          onMouseOut={mouseOutHandler}
        >
          Beauty &amp; Health
        </Link>
        <Link
          className="inline-block p-2 hover:bg-gray-100"
          href={'/shoes'}
          onMouseOver={mouseOverHandler}
          onMouseOut={mouseOutHandler}
        >
          Shoes
        </Link>
        <Link
          className="inline-block p-2 hover:bg-gray-100"
          href={'/bagsAndLuggage'}
          onMouseOver={mouseOverHandler}
          onMouseOut={mouseOutHandler}
        >
          Bags &amp; Luggage
        </Link>
        <Link
          className="inline-block p-2 hover:bg-gray-100"
          href={'/homeTextiles'}
          onMouseOver={mouseOverHandler}
          onMouseOut={mouseOutHandler}
        >
          Home Textiles
        </Link>
        <Link
          className="inline-block p-2 hover:bg-gray-100"
          href={'/sportsAndOutdoors'}
          onMouseOver={mouseOverHandler}
          onMouseOut={mouseOutHandler}
        >
          Sports &amp; Outdoors
        </Link>
        <Link
          className="inline-block p-2 hover:bg-gray-100"
          href={'/toysAndGames'}
          onMouseOver={mouseOverHandler}
          onMouseOut={mouseOutHandler}
        >
          Toys &amp; Games
        </Link>
        <Link
          className="inline-block p-2 hover:bg-gray-100"
          href={'/babyAndMaternity'}
          onMouseOver={mouseOverHandler}
          onMouseOut={mouseOutHandler}
        >
          Baby &amp; Maternity
        </Link>
        <Link
          className="inline-block p-2 hover:bg-gray-100"
          href={'/electronics'}
          onMouseOver={mouseOverHandler}
          onMouseOut={mouseOutHandler}
        >
          Electronics
        </Link>
        <Link
          className="inline-block p-2 hover:bg-gray-100"
          href={'/toolsAndHomeImprovement'}
          onMouseOver={mouseOverHandler}
          onMouseOut={mouseOutHandler}
        >
          Tools &amp; Home Improvement
        </Link>
        <Link
          className="inline-block p-2 hover:bg-gray-100"
          href={'/officeAndSchoolSupplies'}
          onMouseOver={mouseOverHandler}
          onMouseOut={mouseOutHandler}
        >
          Office &amp; School Supplies
        </Link>
        <Link
          className="inline-block p-2 hover:bg-gray-100"
          href={'/appliances'}
          onMouseOver={mouseOverHandler}
          onMouseOut={mouseOutHandler}
        >
          Appliances
        </Link>
        <Link
          className="inline-block p-2 hover:bg-gray-100"
          href={'/petSupplies'}
          onMouseOver={mouseOverHandler}
          onMouseOut={mouseOutHandler}
        >
          Pet Supplies
        </Link>
        <Link
          className="inline-block p-2 hover:bg-gray-100"
          href={'/automotive'}
          onMouseOver={mouseOverHandler}
          onMouseOut={mouseOutHandler}
        >
          Automotive
        </Link>
      </div>
    </div>
  );
};

export default NavbarLinks;
