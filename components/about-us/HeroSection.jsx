import React from "react";
import SectionLayout from "../shared/SectionLayout";
import MotionEffect from "../motion/MotionEffect";

const HeroSection = () => {
  return (
    <SectionLayout bg="bg-black">
      <MotionEffect effect="fade-right" duration="2000">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col p-4 bg-[#FFFFFF]">
            <h1 className="p-12 mt-5 text-6xl font-black tracking-normal text-center text-black sm:mt-16">
              Our Journey at 10X <br /> Tax Pro
            </h1>
          </div>

          <div className="flex flex-col bg-[#6B6B6B] ">
            <p className="text-white text-center md:text-left text-[18px] p-[20px] sm:p-[81px]">
              At 10X Tax Pro, our story is not just about a business helping tax
              preparation businesses; it's about our relentless commitment to
              helping tax professionals achieve unprecedented growth and
              success. Founded by a group of seasoned tax experts and business
              strategists, we embarked on a mission to transform the tax
              preparation industry from the inside out. it's about our
              relentless commitment to helping tax professionals achieve
              unprecedented growth and success. Founded by a group of seasoned
              tax experts and business strategists, we embarked on a mission to
              transform the tax preparation industry from the inside out.
            </p>
          </div>
        </div>
      </MotionEffect>
    </SectionLayout>
  );
};

export default HeroSection;
