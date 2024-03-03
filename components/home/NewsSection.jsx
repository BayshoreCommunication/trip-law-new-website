"use client";
import React from "react";
import SectionLayout from "../shared/SectionLayout";
import CardMotion from "../motion/CardMotion";
import ImageMotion from "../motion/ImageMotion";
import MotionEffect from "../motion/MotionEffect";
import { Mulish, Bitter } from "next/font/google";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { articlesInfo } from "@/config/data";
import BlackButton from "../shared/BlackButton";
const bitter = Bitter({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });

const NewsSection = () => {
  const list = [
    {
      title: "Waivers",
      img: "/assets/home/blogone.png",
      price: "April 28, 2021",
    },
    {
      title: "Do You Need an Immigration Lawyer for naturalization",
      img: "/assets/home/blogtwo.png",
      price: "April 28, 2021",
    },
    {
      title: "How can i contact an immigration lawyer for free",
      img: "/assets/home/blogthree.png",
      price: "April 28, 2021",
    },
  ];
  return (
    <SectionLayout bg="bg-slate-50 ">
      <div className="space-y-14">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          {/* <MotionEffect effect="fade-right" duration="2000"> */}
          <div className="">
            <h2 className="text-stone-950 font-bold text-base">News</h2>
            <hr class="h-[2px] my-0 bg-stone-950 border-0 w-4"></hr>
            <h2
              className={`text-stone-950 font-bold text-5xl mt-5 mb-4 text-center md:text-left ${bitter.className}`}
            >
              News
            </h2>
          </div>
          {/* </MotionEffect> */}

          <div className="flex justify-end">
            <BlackButton title={"View All"} link={"/"} style={"rounded-none"} />
          </div>
        </div>
        <div className="gap-2 grid grid-cols-1 sm:grid-cols-3">
          {list.map((item, index) => (
            <Card
              shadow="sm"
              radius="none"
              key={index}
              isPressable
              onPress={() => console.log("item pressed")}
            >
              <CardBody className=" p-0">
                <Image
                  shadow="none"
                  radius="none"
                  width="100%"
                  alt={item.title}
                  className="w-full object-cover h-[300px]"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="text-small block text-left">
                <h2 className="text-default-500 text-lg font-bold block line-clamp-1">
                  {item.title}
                </h2>
                <p className="text-default-500 block">{item.price}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};

export default NewsSection;
