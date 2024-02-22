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
import NavbarLogo from "./shared/NavbarLogo";

const MainNavbar = () => {
  const pathname = usePathname();

  console.log("check data 28", pathname);

  return (
    <Navbar
      // shouldHideOnScroll
      shouldHideOnScroll
      maxWidth="2xl"
      className="flex !justify-center bg-cover my-2"
    >
      <NavbarContent className="md:hidden" justify="start">
        <NavbarMenuToggle className="text-slate-900" />
      </NavbarContent>

      <NavbarContent className="pr-3 md:hidden" justify="end">
        <Image
          width={300}
          height={130}
          src={"/assets/site-logo/trip-law-logo.svg"}
          alt="Trip Law"
          className="object-cover cursor-pointer"
        />
      </NavbarContent>

      <NavbarContent className="justify-center hidden gap-10 md:flex ml-[-130px]"></NavbarContent>
      <NavbarContent className="justify-center hidden gap-14 md:flex">
        {SITECONFIG?.mainNav?.left?.map((nav, index) => {
          return (
            <NavbarItem key={index}>
              <Link
                href={nav.slug}
                className={`text-slate-900 font-semibold
                text-lg hover:border-b-2 hover:border-solid hover:border-black ${pathname === nav.slug ? "border-b-2 border-solid border-black" : ""}`}
              >
                {nav.title}
              </Link>
            </NavbarItem>
          );
        })}

        <Image
          width={180}
          height={60}
          src={"/assets/site-logo/trip-law-logo.svg"}
          alt="Trip Low"
          // layout="fill"
          // objectFit="contain"
          className="object-cover cursor-pointer"
        />

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
      <NavbarContent className="justify-center hidden gap-x-14 md:flex"></NavbarContent>

      <NavbarMenu>
        {SITECONFIG?.mobileNav?.map((nav, index) => (
          <NavbarMenuItem key={`${nav}-${index}`}>
            <Link
              className={`text-slate-900 font-semibold text-lg hover:border-b-2 hover:border-solid hover:border-black ${pathname === nav.slug ? "border-b-2 border-solid border-black" : ""}`}
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
