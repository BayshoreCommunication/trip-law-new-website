
import React from "react";
import SectionLayout from "../shared/SectionLayout";

import { Button } from "@nextui-org/react";

import { Mulish, Bitter } from "next/font/google";
import MotionEffect from "../motion/MotionEffect";
import { SingleTabSection } from "../shared/SingleTabSection";
import { DoubleTabSection } from "../shared/DoubleTabSection";
import { Tabs } from "../shared/CustomTab/Tabs";

const bitter = Bitter({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });

const FamilyBasedImmigration = () => {
  let tabsData = [
    {
      value: "1",
      label: `<p>Green Card </br>Through Marriage</p>`,
      content:
        "1 Introducing international opportunities & strategic investment solutions, we specialize in empowering businesses and individuals to explore the vast potential of foreign markets. With deep expertise, tailored strategies, and unwavering commitment, we facilitate your journey to expand investment horizons across borders. TurnAbroad will diversify your business portfolio and help you navigate the intricate world of foreign investment.",
      img: "",
    },
    {
      value: "2",
      label: `<p>Green Card </br>Immediate Relative</p>`,
      content:
        "2 Introducing international opportunities & strategic investment solutions, we specialize in empowering businesses and individuals to explore the vast potential of foreign markets. With deep expertise, tailored strategies, and unwavering commitment, we facilitate your journey to expand investment horizons across borders. TurnAbroad will diversify your business portfolio and help you navigate the intricate world of foreign investment.",
      img: "",
    },
    {
      value: "3",
      label: `<p>Green Card Through </br>Consular Processing</p>`,
      content:
        "3 Introducing international opportunities & strategic investment solutions, we specialize in empowering businesses and individuals to explore the vast potential of foreign markets. With deep expertise, tailored strategies, and unwavering commitment, we facilitate your journey to expand investment horizons across borders. TurnAbroad will diversify your business portfolio and help you navigate the intricate world of foreign investment.",
      img: `/assets/home/familyImmigration.png`,
    },
  ];

  let tabsData2 = [
    {
      value: "4",
      label: `<p>Green Card </br>Through Marriage 4</p>`,
      content:
        "1 Introducing international opportunities & strategic investment solutions, we specialize in empowering businesses and individuals to explore the vast potential of foreign markets. With deep expertise, tailored strategies, and unwavering commitment, we facilitate your journey to expand investment horizons across borders. TurnAbroad will diversify your business portfolio and help you navigate the intricate world of foreign investment.",
      img: "",
    },
    {
      value: "5",
      label: `<p>Green Card </br>Immediate Relative 5</p>`,
      content:
        "2 Introducing international opportunities & strategic investment solutions, we specialize in empowering businesses and individuals to explore the vast potential of foreign markets. With deep expertise, tailored strategies, and unwavering commitment, we facilitate your journey to expand investment horizons across borders. TurnAbroad will diversify your business portfolio and help you navigate the intricate world of foreign investment.",
      img: "",
    },
    {
      value: "6",
      label: `<p>Green Card </br>Through Consular Processing 6</p>`,
      content:
        "3 Introducing international opportunities & strategic investment solutions, we specialize in empowering businesses and individuals to explore the vast potential of foreign markets. With deep expertise, tailored strategies, and unwavering commitment, we facilitate your journey to expand investment horizons across borders. TurnAbroad will diversify your business portfolio and help you navigate the intricate world of foreign investment.",
      img: `/assets/home/familyImmigration.png`,
    },
  ];

  return (
    <SectionLayout bg="bg-white">
      <h2
        className={`text-stone-950 font-bold text-4xl mt-5 mb-3 text-center ${bitter.className}`}
      >
        Family-Based Immigration:
      </h2>
      <div className="flex justify-center">
        <div className="flex w-full flex-col mt-10">
          <SingleTabSection tabsData={tabsData} />
          {/* <MotionEffect effect="fade-up" duration="2000">
            {tabsData?.map((el, index) => {
              if (el.id === selected) {
                return (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center mt-24">
                    <div className="">
                      <p className="mb-4 text-lg text-stone-950 text-center md:text-left">
                        {el.content}
                      </p>
                      <div className="flex justify-center mt-8 md:justify-start">
                        <button
                          type="button"
                          class="text-white bg-[#1B2639] hover:bg-[#162030] focus:ring-4 focus:ring-blue-300 font-medium  text-lg px-8 py-2.5 me-6 mb-2 focus:outline-none rounded-md"
                        >
                          Learn more
                        </button>
                      </div>
                    </div>

                    <div className="col-span-2">
                      <div className="flex justify-center items-center">
                        <Image
                          width={1000}
                          height={400}
                          src={"/assets/home/familyImmigration.png"}
                          alt="about img"
                        />
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </MotionEffect> */}
        </div>
      </div>
    </SectionLayout>
  );
};

export default FamilyBasedImmigration;
