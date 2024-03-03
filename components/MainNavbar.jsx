"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { SITECONFIG } from "@/config/site";
import { useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const MainNavbar = () => {
  const pathname = usePathname();

  return (
    <Navbar
      shouldHideOnScroll
      maxWidth="2xl"
      className="flex !justify-center bg-cover my-1"
    >
      <NavbarContent className="md:hidden" justify="start">
        <NavbarMenuToggle className="text-slate-900" />
      </NavbarContent>

      <NavbarContent className="pr-3 md:hidden" justify="end">
        <Image
          width={280}
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

        <NavbarItem>
          <Link href="/">
            <Image
              width={170}
              height={60}
              src={"/assets/site-logo/trip-law-logo.svg"}
              alt="Trip Low"
              className="object-cover cursor-pointer !max-w-[170px]"
            />
          </Link>
        </NavbarItem>

        {/* <Image
          width={170}
          height={60}
          src={"/assets/site-logo/trip-law-logo.svg"}
          alt="Trip Low"
          className="object-cover cursor-pointer"
          // onClick={() => router.push("/")}
        /> */}

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
