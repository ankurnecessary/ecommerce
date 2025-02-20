import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <h1 className={`${charm.className} p-1 text-3xl`}>Celebrations</h1>
      <search>
        <input type="search" placeholder="Search" />
        <button>GO</button>
      </search>
      <div id="header-user-buttons">
        <button>Sign in</button>
        <button>Sign up</button>
        <button>Cart</button>
        <button>Wish List</button>
      </div>
    </header>
  );
};

export default Header;
