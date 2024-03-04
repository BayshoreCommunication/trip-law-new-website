import React from "react";
import SectionLayout from "../shared/SectionLayout";
import { Mulish, Bitter } from "next/font/google";
import MotionEffect from "../motion/MotionEffect";
import { DoubleOneTabSection } from "../shared/DoubleOneTabSection";
const bitter = Bitter({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });

const HumanitarianImmigration = () => {
  const tabsData = {
    top: [
      {
        value: "1",
        label: "H1B Visa",
      },
      {
        value: "2",
        label: "L-1 Visa",
      },
      {
        value: "3",
        label: "O-1 Visa",
      },
    ],
    bottom: [
      {
        value: "4",
        label: "EB-1 Visa",
      },
    ],
    details: [
      {
        value: "1",
        content:
          "H1B Visa Introducing international opportunities & strategic investment solutions, we specialize in empowering businesses and individuals to explore the vast potential of foreign markets. With deep expertise, tailored strategies, and unwavering commitment, we facilitate your journey to expand investment horizons across borders. TurnAbroad will diversify your business portfolio and help you navigate the intricate world of foreign investment.",
        img: `/assets/home/deportation-defense.png`,
        url: "#",
      },
      {
        value: "2",
        content:
          "L-1 Visa Introducing international opportunities & strategic investment solutions, we specialize in empowering businesses and individuals to explore the vast potential of foreign markets. With deep expertise, tailored strategies, and unwavering commitment, we facilitate your journey to expand investment horizons across borders. TurnAbroad will diversify your business portfolio and help you navigate the intricate world of foreign investment.",
        img: `/assets/home/deportation-defense.png`,
        url: "#",
      },
      {
        value: "3",
        content:
          "O-1 Visa Introducing international opportunities & strategic investment solutions, we specialize in empowering businesses and individuals to explore the vast potential of foreign markets. With deep expertise, tailored strategies, and unwavering commitment, we facilitate your journey to expand investment horizons across borders. TurnAbroad will diversify your business portfolio and help you navigate the intricate world of foreign investment.",
        img: `/assets/home/deportation-defense.png`,
        url: "#",
      },

      {
        value: "4",
        content:
          "EB-1 Visa Introducing international opportunities & strategic investment solutions, we specialize in empowering businesses and individuals to explore the vast potential of foreign markets. With deep expertise, tailored strategies, and unwavering commitment, we facilitate your journey to expand investment horizons across borders. TurnAbroad will diversify your business portfolio and help you navigate the intricate world of foreign investment.",
        img: `/assets/home/deportation-defense.png`,
        url: "#",
      },
    ],
  };
  return (
    <SectionLayout bg="bg-white">
      <h2
        className={`text-stone-950 font-bold text-4xl mt-5 mb-3 text-center ${bitter.className}`}
      >
        Humanitarian Immigration
      </h2>

      <div className="flex justify-center">
        <div className="flex w-full flex-col mt-10">
          <DoubleOneTabSection tabsData={tabsData} />
        </div>
      </div>
    </SectionLayout>
  );
};

export default HumanitarianImmigration;
