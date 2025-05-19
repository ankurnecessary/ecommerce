import React from 'react';
import { Mulish } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { Navbar } from '@/components/layout';
import NavbarMenu from '@/components/layout/Navbar/Desktop/NavbarMenu';
import { HeaderContextProvider } from '@/components/layout/Header/Header.context';

const mulish = Mulish({
  subsets: ['latin'],
});

const Header = () => {
  return (
    <HeaderContextProvider>
      <header className="relative z-[1] border-b border-black bg-white md:border-gray-300 dark:border-zinc-800 dark:bg-zinc-700">
        <div className="relative flex items-center justify-between md:container md:mx-auto md:py-5">
          {/* Logo container */}
          <div className="absolute left-1/2 -translate-x-1/2 md:left-28">
            <h1
              className={`${mulish.className} relative p-1 text-3xl font-bold uppercase`}
            >
              <Link href={'/'}>Celeb</Link>
            </h1>
          </div>

          {/* [Moblie only]: For left side of the header  */}
          <div className="border-r border-black md:grow">
            {/* For hamburger menu button */}
            <button
              className="px-4 py-3 md:hidden"
              aria-label="Open navigation menu"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>

          {/* For the center of the header */}
          <div className="md:grow">
            {/* [Mobile only]: Center space for logo which is absolutely positioned */}
            <div
              role="search"
              className="mx-auto my-1 hidden w-1/2 border border-black md:invisible md:flex"
            >
              {/* md:invisible - Just remove this class from the <div> above to see the search text box */}
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
          <div className="flex md:grow md:justify-end">
            {/* Start: [Mobile only]: <div> */}
            <div className="md:hidden">
              {/* [Mobile only]: Search button */}
              <button
                className="border-l border-black px-4 py-3"
                aria-label="Open search bar"
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
            {/* End: [Mobile only]: <div> */}

            {/* Start: [Desktop only]: <div> */}
            <div className="hidden pr-16 md:block">
              {/* You can add those items which are only visible on desktop version */}
            </div>
            {/* End: [Desktop only]: <div> */}
          </div>
        </div>
        <Navbar />
      </header>
      <NavbarMenu />
    </HeaderContextProvider>
  );
};

export default Header;
