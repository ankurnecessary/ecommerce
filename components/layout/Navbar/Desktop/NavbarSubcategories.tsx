'use client';
import VerticalScrollContainer from '@/components/custom-ui/VerticalScrollContainer';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { MenuCategory } from '@/components/layout/Header/types';
import NavbarSubcategoriesLoader from '@/components/layout/Navbar/Desktop/NavbarSubcategoriesLoader';

type NavbarSubcategoriesProps = {
  category: MenuCategory;
};

const NavbarSubcategories = ({ category }: NavbarSubcategoriesProps) => {
  //[ ]: Later on we will extract sub-categories of a category via a separate HTTP request
  const subCategories = category.subcategories || [];

  if (subCategories.length === 0) {
    return <NavbarSubcategoriesLoader />;
  }

  return (
    <VerticalScrollContainer>
      <div className="flex flex-wrap gap-6 py-5">
        {subCategories.map((subCategory) => (
          <Link
            key={subCategory.id}
            href={`/${subCategory.name}`}
            className="group/subcat flex w-20 flex-col"
          >
            <span className="m-1 flex justify-center">
              <Image
                src={subCategory.image}
                alt={subCategory.name}
                width={55}
                height={55}
                className="ease rounded-full object-cover transition-transform duration-200 group-hover/subcat:scale-110 group-hover/subcat:[box-shadow:0_0_7px_1px_rgba(0,0,0,0.20)] group-hover/subcat:dark:[box-shadow:0_0_7px_1px_rgba(255,255,255,0.20)]"
              />
            </span>
            <span className="w-full text-center text-xs">
              {subCategory.name}
            </span>
          </Link>
        ))}
      </div>
    </VerticalScrollContainer>
  );
};

export default NavbarSubcategories;
