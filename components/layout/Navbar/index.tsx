import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <>
      <nav className="container mx-auto flex w-[calc(100%-4rem)] px-6 text-sm text-black">
        {/* Category button */}
        <div className="whitespace-nowrap">
          <span className="group inline-block cursor-pointer px-2 py-2 hover:bg-gray-100">
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
            >
              New In
            </Link>
            <Link className="inline-block p-2 hover:bg-gray-100" href={'/sale'}>
              Sale
            </Link>
            <Link
              className="inline-block p-2 hover:bg-gray-100"
              href={'/womenClothing'}
            >
              Women Clothing
            </Link>
            <Link
              className="inline-block p-2 hover:bg-gray-100"
              href={'/curve'}
            >
              Curve
            </Link>
            <Link
              className="inline-block p-2 hover:bg-gray-100"
              href={'/homeAndKitchen'}
            >
              Home &amp; Kitchen
            </Link>
            <Link
              className="inline-block p-2 hover:bg-gray-100"
              href={'/menClothing'}
            >
              Men Clothing
            </Link>
            <Link className="inline-block p-2 hover:bg-gray-100" href={'/kids'}>
              Kids
            </Link>
            <Link
              className="inline-block p-2 hover:bg-gray-100"
              href={'/jewelryAndAccessories'}
            >
              Jewelry &amp; Accessories
            </Link>
            <Link
              className="inline-block p-2 hover:bg-gray-100"
              href={'/underwearAndSleepwear'}
            >
              Underwear &amp; Sleepwear
            </Link>
            <Link
              className="inline-block p-2 hover:bg-gray-100"
              href={'/beautyAndHealth'}
            >
              Beauty &amp; Health
            </Link>
            <Link
              className="inline-block p-2 hover:bg-gray-100"
              href={'/shoes'}
            >
              Shoes
            </Link>
            <Link
              className="inline-block p-2 hover:bg-gray-100"
              href={'/bagsAndLuggage'}
            >
              Bags &amp; Luggage
            </Link>
            <Link
              className="inline-block p-2 hover:bg-gray-100"
              href={'/homeTextiles'}
            >
              Home Textiles
            </Link>
            <Link
              className="inline-block p-2 hover:bg-gray-100"
              href={'/sportsAndOutdoors'}
            >
              Sports &amp; Outdoors
            </Link>
            <Link
              className="inline-block p-2 hover:bg-gray-100"
              href={'/toysAndGames'}
            >
              Toys &amp; Games
            </Link>
            <Link
              className="inline-block p-2 hover:bg-gray-100"
              href={'/babyAndMaternity'}
            >
              Baby &amp; Maternity
            </Link>
            <Link
              className="inline-block p-2 hover:bg-gray-100"
              href={'/electronics'}
            >
              Electronics
            </Link>
            <Link
              className="inline-block p-2 hover:bg-gray-100"
              href={'/toolsAndHomeImprovement'}
            >
              Tools &amp; Home Improvement
            </Link>
            <Link
              className="inline-block p-2 hover:bg-gray-100"
              href={'/officeAndSchoolSupplies'}
            >
              Office &amp; School Supplies
            </Link>
            <Link
              className="inline-block p-2 hover:bg-gray-100"
              href={'/appliances'}
            >
              Appliances
            </Link>
            <Link
              className="inline-block p-2 hover:bg-gray-100"
              href={'/petSupplies'}
            >
              Pet Supplies
            </Link>
            <Link
              className="inline-block p-2 hover:bg-gray-100"
              href={'/automotive'}
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
    </>
  );
};

export default Navbar;
