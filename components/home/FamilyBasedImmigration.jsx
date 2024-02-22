"use client";
import React from "react";
import SectionLayout from "../shared/SectionLayout";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  CardHeader,
  Image,
} from "@nextui-org/react";
import { Button } from "@nextui-org/react";

import { Mulish, Bitter } from "next/font/google";
import MotionEffect from "../motion/MotionEffect";

const bitter = Bitter({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });

const FamilyBasedImmigration = () => {
  let tabsData = [
    {
      id: "1",
      label: "Through Marriage",
      content:
        "1 Introducing international opportunities & strategic investment solutions, we specialize in empowering businesses and individuals to explore the vast potential of foreign markets. With deep expertise, tailored strategies, and unwavering commitment, we facilitate your journey to expand investment horizons across borders. TurnAbroad will diversify your business portfolio and help you navigate the intricate world of foreign investment.",
      img: "",
    },
    {
      id: "2",
      label: "Immediate Relative",
      content:
        "2 Introducing international opportunities & strategic investment solutions, we specialize in empowering businesses and individuals to explore the vast potential of foreign markets. With deep expertise, tailored strategies, and unwavering commitment, we facilitate your journey to expand investment horizons across borders. TurnAbroad will diversify your business portfolio and help you navigate the intricate world of foreign investment.",
      img: "",
    },
    {
      id: "3",
      label: "Green Card",
      content:
        "3 Introducing international opportunities & strategic investment solutions, we specialize in empowering businesses and individuals to explore the vast potential of foreign markets. With deep expertise, tailored strategies, and unwavering commitment, we facilitate your journey to expand investment horizons across borders. TurnAbroad will diversify your business portfolio and help you navigate the intricate world of foreign investment.",
      img: `/assets/home/familyImmigration.png`,
    },
  ];

  const [selected, setSelected] = React.useState("2");

  console.log("select", selected);

  return (
    <SectionLayout bg="bg-white">
      <h2
        className={`text-stone-950 font-bold text-4xl mt-5 mb-3 text-center ${bitter.className}`}
      >
        Family-Based Immigration:
      </h2>
      <div className="flex justify-center">
        <div className="flex w-full flex-col mt-10">
          <Tabs
            aria-label="Options"
            selectedKey={selected}
            onSelectionChange={setSelected}
            radius="full"
            className="mx-auto"
          >
            {tabsData?.map((el, index) => (
              <Tab
                key={el.id}
                title={el.label}
                className="md:w-[320px] md:h-[80px] md:text-lg"
                color="primary"
              />
            ))}
          </Tabs>
          <MotionEffect effect="fade-up" duration="2000">
            {tabsData?.map((el, index) => {
              if (el.id === selected) {
                return (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center mt-24">
                    <div className="">
                      <p className="mb-4 text-lg text-stone-950 text-center md:text-left">
                        {el.content}
                      </p>
                      <button
                        type="button"
                        class="text-white bg-[#1B2639] hover:bg-[#162030] focus:ring-4 focus:ring-blue-300 font-medium  text-lg px-8 py-2.5 me-6 mb-2 focus:outline-none rounded-md"
                      >
                        Learn more
                      </button>
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
          </MotionEffect>
        </div>
      </div>
    </SectionLayout>
  );
};

export default FamilyBasedImmigration;
