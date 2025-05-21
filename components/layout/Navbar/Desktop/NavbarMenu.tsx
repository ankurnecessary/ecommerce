'use client';
import React from 'react';
import { useHeaderContext } from '@/components/layout/Header/Header.context';
import { HeaderContext } from '@/components/layout/Header/types';
import Link from 'next/link';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VerticalScrollContainer from '@/components/custom-ui/VerticalScrollContainer';
import clsx from 'clsx';
import Image from 'next/image';

const NavbarMenu = () => {
  const {
    navLinks,
    desktop: {
      isMenuVisible,
      toggleMenu,
      selectedHorizontalNavLink,
      setSelectedHorizontalNavLink,
      selectedVerticalNavLink,
      setSelectedVerticalNavLink,
      verticalNavScrollToElementId,
      setVerticalNavScrollToElementId,
    },
  }: HeaderContext = useHeaderContext();

  const [isVisible, category] = isMenuVisible;

  const menuMouseOverHandler = () => {
    toggleMenu(true, category);
    if (selectedVerticalNavLink && !selectedHorizontalNavLink) return;
    setSelectedHorizontalNavLink(selectedHorizontalNavLink);
    setSelectedVerticalNavLink(category);
  };

  // Can be done by FP
  const menuMouseOutHandler = () => {
    toggleMenu(false, '');
    setSelectedHorizontalNavLink('');
  };

  const categoryMouseOverHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();

    // Fetching link text from the link
    const link = e.currentTarget as HTMLAnchorElement;
    const linkText = link.textContent?.trim() || '';

    setSelectedVerticalNavLink(linkText);
    toggleMenu(true, linkText);
    setVerticalNavScrollToElementId('');
  };

  return (
    <div
      data-testid="navbar-menu"
      className={clsx(
        'absolute z-0 flex h-96 w-full bg-white transition-transform duration-300 dark:bg-zinc-700',
        {
          '-translate-y-full': !isVisible,
          'shadow-2xl dark:shadow-zinc-500': isVisible,
        },
      )}
      onMouseOver={menuMouseOverHandler}
      onMouseLeave={menuMouseOutHandler}
    >
      <VerticalScrollContainer
        className="w-64 flex-shrink-0 p-5 pl-10"
        scrollToElementId={verticalNavScrollToElementId}
      >
        {navLinks.map((link) => (
          // [ ]: Change `key={link.id}` when actual API is made with unique key. Probably id.
          // FIXME: Remove prefetch={false} from <Link /> when we will create a page for categories
          <Link
            key={link.id}
            prefetch={false}
            href={link.href}
            className="block"
          >
            <span
              id={`vertical-${link.id}`}
              className={clsx('flex w-full justify-between px-2 py-3 text-xs', {
                'bg-gray-100 dark:bg-zinc-800':
                  selectedVerticalNavLink === link.label,
              })}
              onMouseOver={categoryMouseOverHandler}
            >
              <span>{link.label}</span>
              <span>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-xs opacity-25"
                />
              </span>
            </span>
          </Link>
        ))}
      </VerticalScrollContainer>
      <div className="my-5 w-[1px] bg-gray-300 dark:bg-zinc-500"></div>
      <div className="flex-grow p-5">
        <VerticalScrollContainer>
          <div className="flex flex-wrap gap-6">
            <Link href="/test" className="flex w-20 flex-col">
              <span className="m-1 flex justify-center">
                <Image
                  src="https://picsum.photos/id/1/55/55"
                  alt="T-shirts"
                  width={55}
                  height={55}
                  className="rounded-full object-cover"
                />
              </span>
              <span className="w-full text-center text-xs">{category}</span>
            </Link>
            <Link href="/test" className="flex w-20 flex-col">
              <span className="m-1 flex justify-center">
                <Image
                  src="https://picsum.photos/id/1/55/55"
                  alt="T-shirts"
                  width={55}
                  height={55}
                  className="rounded-full object-cover"
                />
              </span>
              <span className="w-full text-center text-xs">category1</span>
            </Link>
            <Link href="/test" className="flex w-20 flex-col">
              <span className="m-1 flex justify-center">
                <Image
                  src="https://picsum.photos/id/1/55/55"
                  alt="T-shirts"
                  width={55}
                  height={55}
                  className="rounded-full object-cover"
                />
              </span>
              <span className="w-full text-center text-xs">category1</span>
            </Link>
            <Link href="/test" className="flex w-20 flex-col">
              <span className="m-1 flex justify-center">
                <Image
                  src="https://picsum.photos/id/1/55/55"
                  alt="T-shirts"
                  width={55}
                  height={55}
                  className="rounded-full object-cover"
                />
              </span>
              <span className="w-full text-center text-xs">category1</span>
            </Link>
            <Link href="/test" className="flex w-20 flex-col">
              <span className="m-1 flex justify-center">
                <Image
                  src="https://picsum.photos/id/1/55/55"
                  alt="T-shirts"
                  width={55}
                  height={55}
                  className="rounded-full object-cover"
                />
              </span>
              <span className="w-full text-center text-xs">category1</span>
            </Link>
            <Link href="/test" className="flex w-20 flex-col">
              <span className="m-1 flex justify-center">
                <Image
                  src="https://picsum.photos/id/1/55/55"
                  alt="T-shirts"
                  width={55}
                  height={55}
                  className="rounded-full object-cover"
                />
              </span>
              <span className="w-full text-center text-xs">category1</span>
            </Link>
            <Link href="/test" className="flex w-20 flex-col">
              <span className="m-1 flex justify-center">
                <Image
                  src="https://picsum.photos/id/1/55/55"
                  alt="T-shirts"
                  width={55}
                  height={55}
                  className="rounded-full object-cover"
                />
              </span>
              <span className="w-full text-center text-xs">category1</span>
            </Link>
            <Link href="/test" className="flex w-20 flex-col">
              <span className="m-1 flex justify-center">
                <Image
                  src="https://picsum.photos/id/1/55/55"
                  alt="T-shirts"
                  width={55}
                  height={55}
                  className="rounded-full object-cover"
                />
              </span>
              <span className="w-full text-center text-xs">category1</span>
            </Link>
            <Link href="/test" className="flex w-20 flex-col">
              <span className="m-1 flex justify-center">
                <Image
                  src="https://picsum.photos/id/1/55/55"
                  alt="T-shirts"
                  width={55}
                  height={55}
                  className="rounded-full object-cover"
                />
              </span>
              <span className="w-full text-center text-xs">category1</span>
            </Link>
            <Link href="/test" className="flex w-20 flex-col">
              <span className="m-1 flex justify-center">
                <Image
                  src="https://picsum.photos/id/1/55/55"
                  alt="T-shirts"
                  width={55}
                  height={55}
                  className="rounded-full object-cover"
                />
              </span>
              <span className="w-full text-center text-xs">category1</span>
            </Link>
            <Link href="/test" className="flex w-20 flex-col">
              <span className="m-1 flex justify-center">
                <Image
                  src="https://picsum.photos/id/1/55/55"
                  alt="T-shirts"
                  width={55}
                  height={55}
                  className="rounded-full object-cover"
                />
              </span>
              <span className="w-full text-center text-xs">category1</span>
            </Link>
            <Link href="/test" className="flex w-20 flex-col">
              <span className="m-1 flex justify-center">
                <Image
                  src="https://picsum.photos/id/1/55/55"
                  alt="T-shirts"
                  width={55}
                  height={55}
                  className="rounded-full object-cover"
                />
              </span>
              <span className="w-full text-center text-xs">category1</span>
            </Link>
            <Link href="/test" className="flex w-20 flex-col">
              <span className="m-1 flex justify-center">
                <Image
                  src="https://picsum.photos/id/1/55/55"
                  alt="T-shirts"
                  width={55}
                  height={55}
                  className="rounded-full object-cover"
                />
              </span>
              <span className="w-full text-center text-xs">category1</span>
            </Link>
            <Link href="/test" className="flex w-20 flex-col">
              <span className="m-1 flex justify-center">
                <Image
                  src="https://picsum.photos/id/1/55/55"
                  alt="T-shirts"
                  width={55}
                  height={55}
                  className="rounded-full object-cover"
                />
              </span>
              <span className="w-full text-center text-xs">category1</span>
            </Link>
            <Link href="/test" className="flex w-20 flex-col">
              <span className="m-1 flex justify-center">
                <Image
                  src="https://picsum.photos/id/1/55/55"
                  alt="T-shirts"
                  width={55}
                  height={55}
                  className="rounded-full object-cover"
                />
              </span>
              <span className="w-full text-center text-xs">category1</span>
            </Link>
            <Link href="/test" className="flex w-20 flex-col">
              <span className="m-1 flex justify-center">
                <Image
                  src="https://picsum.photos/id/1/55/55"
                  alt="T-shirts"
                  width={55}
                  height={55}
                  className="rounded-full object-cover"
                />
              </span>
              <span className="w-full text-center text-xs">category1</span>
            </Link>
            <Link href="/test" className="flex w-20 flex-col">
              <span className="m-1 flex justify-center">
                <Image
                  src="https://picsum.photos/id/1/55/55"
                  alt="T-shirts"
                  width={55}
                  height={55}
                  className="rounded-full object-cover"
                />
              </span>
              <span className="w-full text-center text-xs">category1</span>
            </Link>
            <Link href="/test" className="flex w-20 flex-col">
              <span className="m-1 flex justify-center">
                <Image
                  src="https://picsum.photos/id/1/55/55"
                  alt="T-shirts"
                  width={55}
                  height={55}
                  className="rounded-full object-cover"
                />
              </span>
              <span className="w-full text-center text-xs">category1</span>
            </Link>
            <Link href="/test" className="flex w-20 flex-col">
              <span className="m-1 flex justify-center">
                <Image
                  src="https://picsum.photos/id/1/55/55"
                  alt="T-shirts"
                  width={55}
                  height={55}
                  className="rounded-full object-cover"
                />
              </span>
              <span className="w-full text-center text-xs">category1</span>
            </Link>
            <Link href="/test" className="flex w-20 flex-col">
              <span className="m-1 flex justify-center">
                <Image
                  src="https://picsum.photos/id/1/55/55"
                  alt="T-shirts"
                  width={55}
                  height={55}
                  className="rounded-full object-cover"
                />
              </span>
              <span className="w-full text-center text-xs">category1</span>
            </Link>
            <Link href="/test" className="flex w-20 flex-col">
              <span className="m-1 flex justify-center">
                <Image
                  src="https://picsum.photos/id/1/55/55"
                  alt="T-shirts"
                  width={55}
                  height={55}
                  className="rounded-full object-cover"
                />
              </span>
              <span className="w-full text-center text-xs">category1</span>
            </Link>
            <Link href="/test" className="flex w-20 flex-col">
              <span className="m-1 flex justify-center">
                <Image
                  src="https://picsum.photos/id/1/55/55"
                  alt="T-shirts"
                  width={55}
                  height={55}
                  className="rounded-full object-cover"
                />
              </span>
              <span className="w-full text-center text-xs">category1</span>
            </Link>
          </div>
        </VerticalScrollContainer>
      </div>
    </div>
  );
};

export default NavbarMenu;
