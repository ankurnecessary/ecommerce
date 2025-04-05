'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useHeaderContext } from '@/components/layout/Header/header.context';
import { HeaderContext } from '../../Header/types';

const NavbarDesktop = () => {
  const {
    desktop: { toggleMenu },
  }: HeaderContext = useHeaderContext();

  const mouseOverHandler = () => {
    toggleMenu(true, '');
  };

  // Can be done by FP
  const mouseOutHandler = () => {
    toggleMenu(false, '');
  };

  return (
    <nav className="container mx-auto hidden w-[calc(100%-4rem)] px-6 text-sm text-black md:flex">
      {/* Category button */}
      <div className="whitespace-nowrap">
        <span
          className="group inline-block cursor-pointer px-2 py-2 hover:bg-gray-100"
          onMouseOver={mouseOverHandler}
          onMouseOut={mouseOutHandler}
        >
          Categories
          <FontAwesomeIcon
            icon={faChevronDown}
            className="ml-1 text-xs transition-transform duration-300 group-hover:rotate-180"
          />
        </span>
      </div>

      {/* horizontal category scroller */}
      <div className="overflow-x-hidden whitespace-nowrap">
        <div className="flex">
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

      {/* Buttons to scroll categories */}
      <div className="shadow-left whitespace-nowrap">
        <span className="inline-block cursor-pointer p-2 hover:bg-gray-100">
          <FontAwesomeIcon icon={faChevronLeft} className="text-xs" />
        </span>
        <span className="inline-block cursor-pointer p-2 hover:bg-gray-100">
          <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
        </span>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
