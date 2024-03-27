"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { SITECONFIG } from "@/config/site";
import Image from "next/image";

const MainNavbar = () => {
  const pathname = usePathname();

  return (
    <Navbar
      shouldHideOnScroll
      maxWidth="2xl"
      className="flex !justify-center bg-white bg-cover my-1"
    >
      <NavbarContent className="md:hidden ml-0" justify="start">
        <NavbarMenuToggle className="text-slate-900 ml-0" />
      </NavbarContent>

      <NavbarContent className=" md:hidden" justify="end">
        <Image
          width={280}
          height={130}
          src={"/assets/site-logo/trip-law-logo.svg"}
          alt="Trip Law"
          className="object-cover cursor-pointer"
        />
      </NavbarContent>

      <NavbarContent className="justify-center hidden gap-10 md:flex"></NavbarContent>
      <NavbarContent className="justify-center hidden gap-14 md:flex">
        {SITECONFIG?.mainNav?.left?.map((nav, index) => {
          return (
            <NavbarItem key={index}>
              <Link
                href={nav.slug}
                className={`text-slate-900 font-semibold text-lg hover:border-b-2 hover:border-solid hover:border-black ${pathname === nav.slug ? "border-b-2 border-solid border-black" : ""}`}
              >
                {nav.title}
              </Link>
            </NavbarItem>
          );
        })}

        <NavbarItem>
          <Link href="/">
            {/* <Image
              width={170}
              height={60}
              src={"/assets/site-logo/trip-law-logo.svg"}
              alt="Trip Low"
              className="object-cover cursor-pointer !max-w-[170px]"
            /> */}
          </Link>
        </NavbarItem>

        {SITECONFIG?.mainNav?.right?.map((nav, index) => {
          return (
            <NavbarItem key={index}>
              <Link
                href={nav.slug}
                className={`text-slate-900 font-semibold text-lg hover:border-b-2 hover:border-solid hover:border-black ${pathname === nav.slug ? "border-b-2 border-solid border-black" : ""}`}
              >
                {nav.title}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent className="justify-center hidden gap-10 md:flex"></NavbarContent>

      <NavbarMenu className="ml-0">
        {SITECONFIG?.mobileNav?.map((nav, index) => (
          <NavbarMenuItem key={`${nav}-${index}`} className="list-none">
            <Link
              className={`text-slate-900 font-semibold text-lg hover:border-b-2 hover:border-solid hover:border-black list-none ${pathname === nav.slug ? "border-b-2 border-solid border-black" : ""}`}
              href={nav.slug}
              size="lg"
            >
              {nav.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default MainNavbar;
