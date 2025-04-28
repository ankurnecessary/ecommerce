'use client';
import React from 'react';
import { useHeaderContext } from '@/components/layout/Header/Header.context';
import { HeaderContext } from '@/components/layout/Header/types';
import Link from 'next/link';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VerticalScrollContainer from '@/components/custom-ui/VerticalScrollContainer';

const NavbarMenu = () => {
  const {
    desktop: { isMenuVisible, toggleMenu },
  }: HeaderContext = useHeaderContext();

  const [isVisible, category] = isMenuVisible;

  const mouseOverHandler = () => {
    // Fetching link text from the link
    toggleMenu(true, category);
  };

  // Can be done by FP
  const mouseOutHandler = () => {
    toggleMenu(false, '');
  };

  // To handle the visibility of the Navbar menu drawer
  const styleClasses = !isVisible ? '-translate-y-full' : '';

  return (
    <div
      data-testid="navbar-menu"
      className={`absolute z-0 h-96 w-full ${styleClasses} flex transition-transform duration-300`}
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
    >
      <VerticalScrollContainer className="w-80 p-5 pl-10">
        <Link
          prefetch={false}
          className="flex w-full justify-between px-2 py-3 text-xs hover:bg-gray-100"
          href={'/newIn'}
        >
          <span>New In</span>
          <span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-xs opacity-25"
            />
          </span>
        </Link>
        <Link
          prefetch={false}
          className="flex w-full justify-between px-2 py-3 text-xs hover:bg-gray-100"
          href={'/sale'}
        >
          <span>Sale</span>
          <span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-xs opacity-25"
            />
          </span>
        </Link>
        <Link
          prefetch={false}
          className="flex w-full justify-between px-2 py-3 text-xs hover:bg-gray-100"
          href={'/womenClothing'}
        >
          <span>Women Clothing</span>
          <span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-xs opacity-25"
            />
          </span>
        </Link>
        <Link
          prefetch={false}
          className="flex w-full justify-between px-2 py-3 text-xs hover:bg-gray-100"
          href={'/curve'}
        >
          <span>Curve</span>
          <span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-xs opacity-25"
            />
          </span>
        </Link>
        <Link
          prefetch={false}
          className="flex w-full justify-between px-2 py-3 text-xs hover:bg-gray-100"
          href={'/homeAndKitchen'}
        >
          <span>Home &amp; Kitchen</span>
          <span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-xs opacity-25"
            />
          </span>
        </Link>
        <Link
          prefetch={false}
          className="flex w-full justify-between px-2 py-3 text-xs hover:bg-gray-100"
          href={'/menClothing'}
        >
          <span>Men Clothing</span>
          <span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-xs opacity-25"
            />
          </span>
        </Link>
        <Link
          prefetch={false}
          className="flex w-full justify-between px-2 py-3 text-xs hover:bg-gray-100"
          href={'/kids'}
        >
          <span>Kids</span>
          <span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-xs opacity-25"
            />
          </span>
        </Link>
        <Link
          prefetch={false}
          className="flex w-full justify-between px-2 py-3 text-xs hover:bg-gray-100"
          href={'/jewelryAndAccessories'}
        >
          <span>Jewelry &amp; Accessories</span>
          <span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-xs opacity-25"
            />
          </span>
        </Link>
        <Link
          prefetch={false}
          className="flex w-full justify-between px-2 py-3 text-xs hover:bg-gray-100"
          href={'/underwearAndSleepwear'}
        >
          <span>Underwear &amp; Sleepwear</span>
          <span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-xs opacity-25"
            />
          </span>
        </Link>
        <Link
          prefetch={false}
          className="flex w-full justify-between px-2 py-3 text-xs hover:bg-gray-100"
          href={'/beautyAndHealth'}
        >
          <span>Beauty &amp; Health</span>
          <span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-xs opacity-25"
            />
          </span>
        </Link>
        <Link
          prefetch={false}
          className="flex w-full justify-between px-2 py-3 text-xs hover:bg-gray-100"
          href={'/shoes'}
        >
          <span>Shoes</span>
          <span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-xs opacity-25"
            />
          </span>
        </Link>
        <Link
          prefetch={false}
          className="flex w-full justify-between px-2 py-3 text-xs hover:bg-gray-100"
          href={'/bagsAndLuggage'}
        >
          <span>Bags &amp; Luggage</span>
          <span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-xs opacity-25"
            />
          </span>
        </Link>
        <Link
          prefetch={false}
          className="flex w-full justify-between px-2 py-3 text-xs hover:bg-gray-100"
          href={'/homeTextiles'}
        >
          <span>Home Textiles</span>
          <span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-xs opacity-25"
            />
          </span>
        </Link>
        <Link
          prefetch={false}
          className="flex w-full justify-between px-2 py-3 text-xs hover:bg-gray-100"
          href={'/sportsAndOutdoors'}
        >
          <span>Sports &amp; Outdoors</span>
          <span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-xs opacity-25"
            />
          </span>
        </Link>
        <Link
          prefetch={false}
          className="flex w-full justify-between px-2 py-3 text-xs hover:bg-gray-100"
          href={'/toysAndGames'}
        >
          <span>Toys &amp; Games</span>
          <span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-xs opacity-25"
            />
          </span>
        </Link>
        <Link
          prefetch={false}
          className="flex w-full justify-between px-2 py-3 text-xs hover:bg-gray-100"
          href={'/babyAndMaternity'}
        >
          <span>Baby &amp; Maternity</span>
          <span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-xs opacity-25"
            />
          </span>
        </Link>
        <Link
          prefetch={false}
          className="flex w-full justify-between px-2 py-3 text-xs hover:bg-gray-100"
          href={'/electronics'}
        >
          <span>Electronics</span>
          <span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-xs opacity-25"
            />
          </span>
        </Link>
        <Link
          prefetch={false}
          className="flex w-full justify-between px-2 py-3 text-xs hover:bg-gray-100"
          href={'/toolsAndHomeImprovement'}
        >
          <span>Tools &amp; Home Improvement</span>
          <span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-xs opacity-25"
            />
          </span>
        </Link>
        <Link
          prefetch={false}
          className="flex w-full justify-between px-2 py-3 text-xs hover:bg-gray-100"
          href={'/officeAndSchoolSupplies'}
        >
          <span>Office &amp; School Supplies</span>
          <span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-xs opacity-25"
            />
          </span>
        </Link>
        <Link
          prefetch={false}
          className="flex w-full justify-between px-2 py-3 text-xs hover:bg-gray-100"
          href={'/appliances'}
        >
          <span>Appliances</span>
          <span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-xs opacity-25"
            />
          </span>
        </Link>
        <Link
          prefetch={false}
          className="flex w-full justify-between px-2 py-3 text-xs hover:bg-gray-100"
          href={'/petSupplies'}
        >
          <span>Pet Supplies</span>
          <span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-xs opacity-25"
            />
          </span>
        </Link>
        <Link
          prefetch={false}
          className="flex w-full justify-between px-2 py-3 text-xs hover:bg-gray-100"
          href={'/automotive'}
        >
          <span>Automotive</span>
          <span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-xs opacity-25"
            />
          </span>
        </Link>
      </VerticalScrollContainer>
      <div className="my-5 w-[1px] bg-gray-300"></div>
      <div className="flex-grow">{category}</div>
    </div>
  );
};

export default NavbarMenu;
