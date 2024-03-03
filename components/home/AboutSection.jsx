import Image from "next/image";
import React from "react";
import SectionLayout from "../shared/SectionLayout";
import CardMotion from "../motion/CardMotion";
import ImageMotion from "../motion/ImageMotion";
import MotionEffect from "../motion/MotionEffect";
import { motion } from "framer-motion";
import { Mulish, Bitter } from "next/font/google";
import BlackButton from "../shared/BlackButton";

const bitter = Bitter({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });

const AboutSection = () => {
  return (
    <SectionLayout bg="bg-slate-50 ">
      <div className="space-y-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <MotionEffect effect="fade-right" duration="2000">
            <div className="">
              <h2 className="text-stone-950 font-bold text-base">About</h2>
              <hr class="h-[2px] my-0 bg-stone-950 border-0 w-4"></hr>
              <h2
                className={`text-stone-950 font-bold text-5xl mt-5 mb-4 text-center md:text-left ${bitter.className}`}
              >
                About Us
              </h2>

              <p className="mb-4 text-lg text-stone-950 text-center md:text-left">
                Accumsan volutpat ocurreret id nam, solet numquam accommodare
                quo et. Et vidit choro aliquid pro, ad inani eirmod vituperata
                duo. Ut ludus vulputate qui, movartem accom modare eos no, vix
                error percipitur.
              </p>
              <p className="mb-4 text-lg text-stone-950 text-center md:text-left">
                Nunc, blandit libero, blandit nunc diam rhoncus viverra. Et nec
                tellus nulla erisque ultricies massa sagittis dictum malesuada.
                Urna id velit, quis morbi nibh duis massa odio. Iaculis massa
                duis sit tellus adipiscing. Cursus amet
              </p>
              <div className="flex justify-center mt-8 md:justify-start">
                {/* <button
                  type="button"
                  class="text-white bg-[#1B2639] hover:bg-[#162030] focus:ring-4 focus:ring-blue-300 font-medium  text-lg px-8 py-2.5 me-6 mb-2 focus:outline-none uppercase rounded-md"
                ></button> */}
                <BlackButton
                  title={"READ MORE"}
                  link={"/"}
                  style={"rounded-md"}
                />
              </div>
            </div>
          </MotionEffect>
          <div className="">
            <MotionEffect effect="fade-left" duration="2000">
              <div className="flex justify-center items-center">
                <Image
                  width={1200}
                  height={500}
                  src={"/assets/home/video-thum.jpg"}
                  alt="about img"
                />
              </div>
            </MotionEffect>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default AboutSection;
