import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Image from "next/image";
import { aboutInfo } from "@/config/data";
import MotionEffect from "../motion/MotionEffect";

const CardSection = () => {
  return (
    <SectionLayout bg="bg-[#D5AD45]">
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-8">
        {aboutInfo.cardInfo.map((item, index) => (
          <MotionEffect effect="fade-up" duration="2000">
            <div className="p-6 ">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <Image
                  width={50}
                  height={50}
                  src={item.url}
                  alt="about img"
                  className="rounded-tr-[100px]"
                />
              </div>
              <h2 className="text-xl font-semibold text-white mb-2 text-center md:text-left">
                {item.title}
              </h2>
              <p className="text-white text-center md:text-left">{item.dec}</p>
            </div>
          </MotionEffect>
        ))}
      </div>
    </SectionLayout>
  );
};

export default CardSection;
