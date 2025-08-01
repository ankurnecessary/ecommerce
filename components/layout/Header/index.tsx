import React from 'react';
import { Mulish } from 'next/font/google';
import Link from 'next/link';
import { Navbar } from '@/components/layout';
import NavbarMenu from '@/components/layout/Navbar/Desktop/NavbarMenu';
import { HeaderContextProvider } from '@/components/layout/Header/Header.context';
import { Search } from 'lucide-react';
import { links } from '@/components/layout/Navbar/XnavbarLinkObj';
import MobileHamburgerButton from '@/components/layout/Header/MobileHamburgerButton';
import styles from '@/components/layout/Header/Header.module.scss';
import clsx from 'clsx';
const mulish = Mulish({
  subsets: ['latin'],
});

const Header = () => {
  // [ ]: Replace "links" with <HeaderContextProvider/> with an API call to fetch the links
  // const links = await fetchLinksFromAPI();
  // [ ]: [navlinks] [categories] [sub-categories] Use No-SQL DB to store the links data. This will increase the fetching speed. Whenever we update categories or thier subcategories in SQL DB, a new object will be created in No-SQL DB with the updated data. This will help us to fetch the data faster.

  return (
    <HeaderContextProvider categories={links}>
      <header className={styles.header}>
        <div className={styles.header__container}>
          {/* Logo container */}
          <div className={styles.logo}>
            <h1 className={clsx(mulish.className, styles.logo__text)}>
              <Link href={'/'}>Celeb</Link>
            </h1>
          </div>

          {/* [Moblie only]: For left side of the header  */}
          <div className={styles.header__mobileNav}>
            {/* For hamburger menu button */}
            <MobileHamburgerButton />
          </div>

          {/* For the center of the header */}
          <div className={styles.header__left}>
            {/* [Mobile only]: Center space for logo which is absolutely positioned */}
            <div role="search" className={styles.header__search}>
              {/* lg:invisible - Just remove this class from the <div> above to see the search text box */}
              <input
                type="search"
                placeholder="Search..."
                className={styles.header__searchInput}
              />
              <button
                id="header-search-button"
                type="button"
                aria-label="search"
                className={styles.header__searchButton}
              >
                <Search />
              </button>
            </div>
          </div>

          {/* For the right side of the header */}
          <div className={styles.header__right}>
            {/* Start: [Mobile only]: <div> */}
            <div className={styles.header__mobileSearch}>
              {/* [Mobile only]: Search button */}
              <button
                className={styles.header__mobileSearchBtn}
                aria-label="Open search bar"
              >
                <Search />
              </button>
            </div>
            {/* End: [Mobile only]: <div> */}

            {/* Start: [Desktop only]: <div> */}
            <div className={styles.header__buttons}>
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
