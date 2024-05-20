"use client";
import React from "react";
import SectionLayout from "../shared/SectionLayout";
import CardMotion from "../motion/CardMotion";
import ImageMotion from "../motion/ImageMotion";
import MotionEffect from "../motion/MotionEffect";
import { Mulish, Bitter } from "next/font/google";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import BlackButton from "../shared/BlackButton";
import ScondayButton from "../shared/ScondayButton";
import GetAllPostData from "@/lib/GetAllPostData";
import Link from "next/link";

const bitter = Bitter({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });

const NewsSection = async () => {
  const blogPostData = await GetAllPostData();

  const postDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };


  return (
    <SectionLayout bg="bg-slate-50 ">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <CardMotion
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1.1,
              },
            }}
            initial={{
              opacity: 0,
              y: 100,
            }}
          >
            <div className="">
              <h2 className="text-stone-950 font-bold text-base ">News</h2>
              <hr class="h-[2px] my-0 bg-stone-950 border-0 w-4"></hr>
              <h2
                className={`text-stone-950 font-bold text-5xl mt-5 mb-4 text-center md:text-left ${bitter.className}`}
              >
                News
              </h2>
            </div>
          </CardMotion>
          <CardMotion
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1.1,
              },
            }}
            initial={{
              opacity: 0,
              y: 100,
            }}
          >
            <div className="flex justify-end invisible md:visible">
              <ScondayButton
                title={"View All"}
                link={"/blog"}
                style={"bg-[#1B2639] text-white"}
                radius={"none"}
              />
            </div>
          </CardMotion>
        </div>
        <CardMotion
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.1,
            },
          }}
          initial={{
            opacity: 0,
            y: 100,
          }}
        >
          <div className="gap-4 grid grid-cols-1 sm:grid-cols-3 mt-0 md:mt-12">
            {blogPostData?.data
              ?.filter((pub, no) => pub.published === true && no < 3)
              ?.map((blogs, index) =>

                <Link href={`/blog/${blogs?.slug}`}>
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
                        className="w-full object-cover h-[300px]"
                        src={blogs?.featuredImage?.image?.url}
                        alt={blogs?.featuredImage?.altText}
                      />
                    </CardBody>
                    <CardFooter className="text-small block text-left">
                      <h2 className="text-default-500 text-lg font-bold line-clamp-1">
                        {blogs?.title}
                      </h2>
                      <p className="text-default-500 block">{postDate(blogs?.createdAt)}</p>
                    </CardFooter>
                  </Card>
                </Link>
              )}
          </div>
        </CardMotion>

        <CardMotion
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.1,
            },
          }}
          initial={{
            opacity: 0,
            y: 100,
          }}
        >
          <div className="flex justify-center visible md:invisible mt-12 md:mt-[-60px]">
            <ScondayButton
              title={"View All"}
              link={"/blog"}
              style={"bg-[#1B2639] text-white"}
              radius={"none"}
            />
          </div>
        </CardMotion>
      </div >
    </SectionLayout >
  );
};

export default NewsSection;
