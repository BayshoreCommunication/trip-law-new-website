import React from "react";
import SectionLayout from "../shared/SectionLayout";
import CardMotion from "../motion/CardMotion";
import { Bitter, Mulish } from "next/font/google";
import { ConsultationCtaContent } from "../shared/ScheduleConsultationCta";
import Image from "next/image";

const bitter = Bitter({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });

const ScheduleSection = () => {
  return (
    <SectionLayout bg="bg-[#F1F5FA] ">
      <div className="space-y-14">
        <ConsultationCtaContent />
        <CardMotion
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1.1 },
          }}
          initial={{ opacity: 0, y: 100 }}
        >
          <div className="">
            <div className="flex justify-center mb-10">
              <div>
                <h2
                  className={`text-stone-950 font-bold text-3xl md:text-4xl mt-5 mb-0.5 text-center md:text-left ${bitter.className}`}
                >
                  Membership
                </h2>
                <hr className="h-[2px] my-0 bg-stone-950 border-0 w-28 mt-2 mb-4 "></hr>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-8 md:items-end md:flex-row md:gap-20 ">
              <div className="flex justify-center">
                <Image
                  src="/assets/home/membership-logo-2025.png"
                  alt="membership-logo"
                  className=""
                  rel="preload"
                  height={200}
                  width={300}
                />
              </div>
              <div className="max-w-64">
                <p className="mb-4 text-xl text-[#1B2639] text-center md:text-left font-extrabold">
                  Active Member AILA
                </p>
                <h2
                  className={`text-[#1B2639] font-bold text-4xl md:text-5xl mt-5 mb-0.5 text-center md:text-left ${mulish.className}`}
                >
                  American Immigration Lawyer Association
                </h2>
              </div>
            </div>
          </div>
        </CardMotion>
      </div>
    </SectionLayout>
  );
};

export default ScheduleSection;
