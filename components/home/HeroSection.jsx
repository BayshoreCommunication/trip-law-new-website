"use client";
import MotionEffect from "../motion/MotionEffect";
import HeadingText from "../shared/HeadingText";
import SectionLayout from "../shared/SectionLayout";
import { TypeAnimation } from "react-type-animation";
import { Mulish, Bitter } from "next/font/google";

const bitter = Bitter({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });

const HeroSection = () => {
  return (
    <div>
      <div className="bg-[url('/assets/home/trip-low-hero-bg.jpg')] bg-cover bg-center bg-fixed">
        <SectionLayout>
          <div className="grid grid-cols-1 md:grid-cols-3 items-center my-4 md:my-28">
            <div className="col-span-2">
              <h2 className="text-red-700 font-black text-3xl">
                Giving You Advices That Matters
              </h2>
              <hr class="h-[2px] my-2 bg-red-700 border-0 w-20"></hr>
              <h1
                className={`text-[70px] md:text-[100px]  font-[800] text-white text-left leading-tight tracking-normal ${bitter.className}`}
              >
                Foundation of Justice
                <br /> is Good Faith
              </h1>
              <p className="text-white text-base max-w-[450px]">
                Malesuada felis facilisis diam sed volutpat sociis nibh enim
                arcu Ac diam eget faucibus pulvinar nunc porttitor sit. Quam.
              </p>
              <div className="mt-5 flex justify-center md:justify-start">
                <button
                  type="button"
                  class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium  text-lg px-4 md:px-8 py-2.5 me-6 mb-2 focus:outline-none uppercase"
                >
                  Consultation
                </button>
                <button
                  type="button"
                  class="text-white bg-none hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium  text-lg px-4 md:px-8 py-2.5 me-6 mb-2 focus:outline-none border border-white "
                >
                  (863)-599-6735
                </button>
              </div>
            </div>
            <div></div>
          </div>
        </SectionLayout>
      </div>
    </div>
  );
};

export default HeroSection;
