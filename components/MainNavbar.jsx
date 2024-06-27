'use client';
import React, { useState } from 'react';
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import { usePathname } from 'next/navigation';
import { SITECONFIG } from '@/config/site';
import Image from 'next/image';
import Link from 'next/link';

const MainNavbar = () => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  console.log('check log menu', isMenuOpen);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      maxWidth='2xl'
      className='flex !justify-center bg-white bg-cover my-1'
    >
      <NavbarContent className='md:hidden ml-0' justify='start'>
        <NavbarMenuToggle className='text-slate-900 ml-0' />
      </NavbarContent>

      <NavbarContent className=' md:hidden' justify='end'>
        <Image
          width={280}
          height={130}
          src={'/assets/site-logo/trip-law-logo.svg'}
          alt='Trip Law'
          className='object-cover cursor-pointer'
        />
      </NavbarContent>

      <NavbarContent className='justify-center hidden gap-10 md:flex'></NavbarContent>
      <NavbarContent className='justify-center hidden gap-14 md:flex'>
        {SITECONFIG?.mainNav?.left?.map((nav, index) => {
          return (
            <NavbarItem key={index}>
              <Link
                href={nav.slug}
                className={`text-slate-900 font-semibold text-lg hover:border-b-2 hover:border-solid hover:border-black !cursor-pointer ${pathname === nav.slug ? 'border-b-2 border-solid border-black' : ''}`}
              >
                {nav.title}
              </Link>
            </NavbarItem>
          );
        })}

        <NavbarItem>
          <Link href='/'>
            <Image
              width={170}
              height={60}
              src={'/assets/site-logo/trip-law-logo.svg'}
              alt='Trip Low'
              className='object-cover cursor-pointer !max-w-[170px]'
            />
          </Link>
        </NavbarItem>

        {SITECONFIG?.mainNav?.right?.map((nav, index) => {
          return (
            <NavbarItem key={index}>
              {/* <Link
                href={nav.slug}
                className={`text-slate-900 font-semibold text-lg hover:border-b-2 hover:border-solid hover:border-black ${pathname === nav.slug ? 'border-b-2 border-solid border-black' : ''}`}
              >
                {nav.title}
              </Link> */}
              {nav.title === 'Blog' ? (
                <div
                  className='relative inline-block'
                  onMouseEnter={toggleDropdown}
                  onMouseLeave={toggleDropdown}
                >
                  <div className='group'>
                    <div className='flex items-center gap-1'>
                      <Link
                        href={nav.slug}
                        className={`text-slate-900 font-semibold text-lg hover:border-b-2 hover:border-solid hover:border-black !cursor-pointer ${pathname === nav.slug ? 'border-b-2 border-solid border-black' : ''}`}
                      >
                        Blog
                      </Link>
                      <span>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='currentColor'
                          className={`size-4 font-extrabold transform transition-transform duration-200 ${isDropdownVisible ? 'rotate-0' : 'rotate-180'}`}
                        >
                          <path
                            fillRule='evenodd'
                            d='M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </span>
                    </div>
                    <div className='absolute hidden group-hover:block bg-white shadow-lg rounded p-4 w-48'>
                      <ul className='py-2 '>
                        <li>
                          <Link
                            href={`https://podcasters.spotify.com/pod/show/theimmigrationzone`}
                            className={`py-2 flex text-slate-900 font-semibold text-lg hover:border-b-2 hover:border-solid hover:border-black`}
                          >
                            Podcast
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href={nav.slug}
                  className={`text-slate-900 font-semibold text-lg hover:border-b-2 hover:border-solid hover:border-black ${pathname === nav.slug ? 'border-b-2 border-solid border-black' : ''}`}
                >
                  {nav.title}
                </Link>
              )}
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent className='justify-center hidden gap-10 md:flex'></NavbarContent>

      <NavbarMenu className='ml-0'>
        {SITECONFIG?.mobileNav?.map((nav, index) => (
          <NavbarMenuItem key={`${nav}-${index}`} className='list-none'>
            {/* <Link
              className={`text-slate-900 font-semibold text-lg hover:border-b-2 hover:border-solid hover:border-black list-none ${pathname === nav.slug ? 'border-b-2 border-solid border-black' : ''}`}
              href={nav.slug}
              size='lg'
            >
              {nav.title}
            </Link> */}
            {nav.title === 'Blog' ? (
              <div
                className='relative inline-block'
                onMouseEnter={toggleDropdown}
                onMouseLeave={toggleDropdown}
              >
                <div className='group'>
                  <div className='flex items-center gap-1'>
                    <Link
                      className={`text-slate-900 font-semibold text-lg hover:border-b-2 hover:border-solid hover:border-black list-none ${pathname === nav.slug ? 'border-b-2 border-solid border-black' : ''}`}
                      href={nav.slug}
                      size='lg'
                      aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                      Blog
                    </Link>
                    <span>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className={`size-4 font-extrabold transform transition-transform duration-200 ${isDropdownVisible ? 'rotate-0' : 'rotate-180'}`}
                      >
                        <path
                          fillRule='evenodd'
                          d='M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </span>
                  </div>
                  <div className='absolute hidden group-hover:block bg-white shadow-lg rounded p-2 z-50 w-[300px]'>
                    <ul className='py-2 '>
                      <li key={index}>
                        <Link
                          onClick={() => {
                            setIsMenuOpen((prev) => !prev);
                          }}
                          href={`https://podcasters.spotify.com/pod/show/theimmigrationzone`}
                          className={`py-2 flex text-slate-900 font-semibold text-lg hover:border-b-1 hover:border-solid hover:border-black`}
                        >
                          Podcast
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                className={`text-slate-900 font-semibold text-lg hover:border-b-2 hover:border-solid hover:border-black list-none ${pathname === nav.slug ? 'border-b-2 border-solid border-black' : ''}`}
                href={nav.slug}
                size='lg'
                onClick={() => {
                  setIsMenuOpen((prev) => !prev);
                }}
              >
                {nav.title}
              </Link>
            )}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default MainNavbar;
