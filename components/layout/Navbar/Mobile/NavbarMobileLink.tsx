import Link from 'next/link';
import React from 'react';

type navbarMobileLink = { link: { name: string; url: string } };

const NavbarMobileLink = ({ link }: navbarMobileLink) => {
  return (
    <Link
      href={link.url}
      className="inline-block w-full px-2 py-[10px] hover:bg-slate-100"
    >
      <span>{link.name}</span>
    </Link>
  );
};

export default NavbarMobileLink;
