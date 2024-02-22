import Image from "next/image";
import React from "react";
import SectionLayout from "../shared/SectionLayout";
import CardMotion from "../motion/CardMotion";
import ImageMotion from "../motion/ImageMotion";
import MotionEffect from "../motion/MotionEffect";
import { Mulish, Bitter } from "next/font/google";

const bitter = Bitter({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });

const ScheduleSection = () => {
  return (
    <SectionLayout bg="bg-[#F1F5FA] ">
      <div className="space-y-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <MotionEffect effect="fade-right" duration="2000">
            <div className="">
              <h2
                className={`text-stone-950 font-bold text-4xl mt-5 mb-0.5 text-center md:text-left ${bitter.className}`}
              >
                You Can Get A Free Consultation <br /> From Hardam Tripathi ESQ
              </h2>
              <hr class="h-[2px] my-0 bg-stone-950 border-0 w-28 mb-4"></hr>
              <p className="mb-4 text-lg text-stone-950 text-center md:text-left">
                Using our interactive simulator, you can find out your options
                of moving abroad. We offer a diverse database of mentorship
                programs that will prepare you to be able to succeed in your
                journey abroad.
              </p>

              <button
                type="button"
                class="text-white bg-[#1B2639] hover:bg-[#162030] focus:ring-4 focus:ring-blue-300 font-medium  text-lg px-8 py-2.5 me-6 mb-2 focus:outline-none rounded-md"
              >
                Schedule Free Consultation
              </button>
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

export default ScheduleSection;
