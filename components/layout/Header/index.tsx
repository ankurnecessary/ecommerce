import React from 'react';
import { Mulish } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const mulish = Mulish({
  subsets: ['latin'],
});

const Header = () => {
  return (
    <header className="relative flex items-center justify-between md:container md:mx-auto md:py-5">
      {/* Logo container */}
      <div className="absolute left-1/2 -translate-x-1/2 md:left-28">
        <h1
          className={`${mulish.className} relative p-1 text-3xl font-bold uppercase`}
        >
          <Link href={'/'}>
            Celeb
            <span className="absolute -right-1 -top-10 text-6xl text-fuchsia-400">
              .
            </span>
            <span className="absolute -top-6 text-5xl text-green-500">.</span>
          </Link>
        </h1>
      </div>

      {/* [Moblie only]: For left side of the header  */}
      <div className="border-r border-black md:grow">
        {/* For hamburger menu button */}
        <button className="hidden px-4 py-3" aria-label="Open navigation menu">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {/* For the center of the header */}
      <div className="md:grow">
        {/* [Mobile only]: Center space for logo */}
        <div
          role="search"
          className="mx-auto my-1 hidden w-1/2 border border-black md:flex"
        >
          <input
            type="search"
            placeholder="Search..."
            className="min-w-0 flex-grow border-r border-black px-2 text-sm placeholder-black outline-none"
          />
          <button
            id="header-search-button"
            type="button"
            aria-label="search"
            className="bg-black px-3 py-1.5 text-white"
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>

      {/* For the right side of the header */}
      <div className="border-l border-black md:grow">
        {/* [Moblie only]: Search button */}
        <button className="px-4 py-3 md:hidden" aria-label="Open search bar">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </header>
  );
};

export default Header;
