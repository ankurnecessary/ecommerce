'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MenuCategory } from '@/components/layout/Header/types';
import NavbarSubcategoriesLoader from '@/components/layout/Navbar/Desktop/NavbarSubcategoriesLoader';
import VerticalScrollContainer from '@/components/custom-ui/VerticalScrollContainer';
import styles from '@/components/layout/Navbar/Desktop/NavbarSubcategories.module.scss';

type NavbarSubcategoriesProps = {
  category: MenuCategory;
};

const NavbarSubcategories = ({ category }: NavbarSubcategoriesProps) => {
  //[ ]: Later on we will extract sub-categories of a category via a separate HTTP request
  const subCategories = category.subcategories || [];

  if (!subCategories || subCategories.length === 0) {
    return <NavbarSubcategoriesLoader />;
  }

  return (
    <VerticalScrollContainer>
      <div
        className={styles.navbarSubcategories}
        data-testid="navbar-subcategories"
      >
        {subCategories.map((subCategory) => (
          // [ ] We will eventually remove prefetch={false} when we make respective sub-category page
          <Link
            key={subCategory.id}
            href={`/${subCategory.name}`}
            className={styles.navbarSubcategories__link}
            prefetch={false}
          >
            <span className={styles.navbarSubcategories__linkContainer}>
              <Image
                src={subCategory.image}
                alt={subCategory.name}
                width={55}
                height={55}
                className={styles.navbarSubcategories__image}
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
