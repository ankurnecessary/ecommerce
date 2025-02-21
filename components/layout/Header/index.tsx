import React from 'react';
import { Mulish } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';

const mulish = Mulish({
  subsets: ['latin'],
});

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <h1 className={`${mulish.className} relative p-1 text-3xl font-bold`}>
        Celebrations
        <span className="absolute -right-1 -top-11 text-6xl text-fuchsia-400">
          .
        </span>
        <span className="absolute -top-7 text-5xl text-green-500">.</span>
      </h1>
      <search className="flex w-1/4 justify-between border border-black">
        <input
          type="search"
          placeholder="Search"
          className="flex-grow p-1 outline-none"
        />
        <button
          id="header-search-button"
          type="button"
          aria-labelledby="search-button-label"
          title="search"
          className="bg-black pl-3 pr-2 text-white"
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <span id="search-button-label" hidden>
          Search
        </span>
      </search>
      <div id="user-buttons" className="hidden items-center gap-2">
        {/* user */}
        <button>
          <FontAwesomeIcon icon={faUser} />
        </button>
        {/* shopping cart */}
        <button>
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
        {/*  wish list */}
        <button>
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>
    </header>
  );
};

export default Header;
