import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Image from "next/image";
import { Mulish, Bitter } from "next/font/google";
import MotionEffect from "../motion/MotionEffect";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

const bitter = Bitter({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });

const HeroSection = () => {
  return (
    <SectionLayout
      img="bg-[url('/assets/services/hero-banner.png')] bg-cover bg-center"
      bg=" bg-black bg-opacity-85"
    >
      <div className="py-16 flex gap-10 items-center">
        <h2
          className={`text-stone-50 font-bold text-4xl text-center md:text-left`}
        >
          Services
        </h2>

        <nav class="flex" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li class="inline-flex items-center">
              <a
                href="#"
                class="inline-flex items-center text-sm font-medium text-stone-50 hover:text-blue-600 "
              >
                Home
              </a>
            </li>
            <li>
              <div class="flex items-center">
                <svg
                  class="rtl:rotate-180 w-3 h-3 text-stone-50 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <a
                  href="#"
                  class="ms-1 text-sm font-medium text-stone-50 hover:text-blue-600 md:ms-2"
                >
                  Services
                </a>
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </SectionLayout>
  );
};

export default HeroSection;
