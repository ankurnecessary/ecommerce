import React from 'react';
import NavbarMobileLink from './NavbarMobileLink';
import { MenuSubCategory } from '../../Header/types';

type navbarMobileSubmenu = {
  subcategories: MenuSubCategory[];
};

const NavbarMobileSubmenu = ({ subcategories }: navbarMobileSubmenu) => {
  return (
    <ul className="px-2">
      {subcategories.map((link) => (
        <li key={link.id} className="border-b border-dotted border-slate-400">
          <NavbarMobileLink link={link} />
        </li>
      ))}
    </ul>
  );
};

export default NavbarMobileSubmenu;
