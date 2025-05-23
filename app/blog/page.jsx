import React from "react";
import Image from "next/image";
import { blogData } from "@/config/data";
import GetAllPostData from "@/lib/GetAllPostData";
import SectionLayout from "@/components/shared/SectionLayout";
import parse from "html-react-parser";
import { Link } from "@nextui-org/react";
import HeroSection from "@/components/blog/HeroSection";
import ScondayButton from "@/components/shared/ScondayButton";
import CardMotion from "@/components/motion/CardMotion";
import Head from "next/head";

export const metadata = {
  title: "Immigration Tips, Success Stories & Legal News | Trip Law Blog",
  description:
    "Stay informed with the latest U.S. immigration law news, expert tips, and insights from Trip Law. Our blog covers Green Cards, work visas (H-1B, EB-1), asylum, family sponsorship, and more. Get valuable advice from experienced immigration attorneys to guide your journey.",
};

const page = async () => {
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
    <>
      <HeroSection />
      <SectionLayout bg="bg-white">
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
          <h2 className="mb-0 md:mb-4 text-xl md:text-3xl font-bold tracking-normal text-left text-[#1B2639]">
            Recent Blog Post
          </h2>

          <hr className="w-full h-[1px] mx-auto mt-4 mb-4 md:mb-8 bg-[#1B2639] border-0 rounded " />

          <div className="grid gap-0 mb-10 md:gap-12 gird-col-1 sm:grid-cols-2">
            {blogPostData?.data
              ?.filter((pub, no) => pub.published === true && no === 0)
              ?.map((blogs, index) => (
                <div className="flex-1">
                  <Link href={`/blog/${blogs?.slug}`}>
                    <div>
                      <Image
                        width={1800}
                        height={300}
                        src={blogs?.featuredImage?.image?.url}
                        alt={blogs?.featuredImage?.altText}
                        className="bg-center bg-cover"
                      />

                      <p className="text-[1rem] text-black text-left italic mt-2">
                        {postDate(blogs?.createdAt)}
                      </p>
                      <h2 className="text-xl md:text-2xl tracking-normal font-bold text-[#1B2639] text-left mt-2 mb-4 ">
                        {blogs?.title}
                      </h2>
                      <div className="font-normal text-[1rem] text-black mb-5 line-clamp-6">
                        {parse(blogs?.body)}
                      </div>
                      <div className="flex justify-start">
                        <button
                          type="button"
                          class="text-white bg-[#1B2639] hover:bg-[#162030] font-medium text-sm md:text-lg px-4 py-2 me-2 mb-2 focus:outline-none rounded-md"
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}

            <div className="flex-1 h-[100%] md:h-[590px] overflow-y-scroll overflow-x-hidden ">
              {blogPostData?.data
                ?.filter((pub, no) => pub.published === true && no !== 0)
                ?.map((blogs, index) => (
                  <Link
                    className="flex items-center gap-6 mb-8"
                    key={index}
                    href={`/blog/${blogs?.slug}`}
                  >
                    <Image
                      width={180}
                      height={180}
                      src={blogs?.featuredImage?.image?.url}
                      alt={blogs?.featuredImage?.altText}
                      className="bg-center bg-cover"
                    />
                    <div>
                      <p className="text-[.8rem] md:text-[1rem] text-black text-left italic mt-2">
                        {postDate(blogs?.createdAt)}
                      </p>
                      <h2 className="text-md md:text-xl tracking-normal font-bold text-[#1B2639] md:mb-2 md:line-clamp-3 line-clamp-2">
                        {blogs?.title}
                      </h2>
                      <div className="font-normal text-[.8rem] md:text-[1.2rem] text-black mb-2 md:mb-4 sm:line-clamp-1 line-clamp-1">
                        {parse(blogs?.body)}
                      </div>
                      <div className="flex justify-start">
                        <button
                          type="button"
                          class="text-white bg-[#1B2639] hover:bg-[#162030] font-medium text-sm md:text-lg px-4 py-2 me-2 mb-2 focus:outline-none rounded-md"
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </CardMotion>
        {/* 
        <CardMotion
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1.1,
            },
          }}
          initial={{
            opacity: 0,
            x: -100,
          }}
        >
          <hr className='w-full h-[1px] mx-auto my-2 bg-[#1B2639] border-0 rounded md:my-5' />
        </CardMotion>

        <div className='flex flex-col-reverse mt-8 mb-4 lg:flex-row gap-7 md:gap-16 md:mt-10 md:mb-10'>
          <div className='flex-1'>
            <CardMotion
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 1.1,
                },
              }}
              initial={{
                opacity: 0,
                x: -100,
              }}
            >
              <h2 className='mb-4 text-2xl font-bold tracking-normal text-center md:text-4xl text-slate-900 md:text-left'>
                Create a beautiful event platform services
              </h2>
              <div className='mt-3'>
                <p className='font-normal text-[1rem] text-black mb-8 text-center md:text-left'>
                  Demo Digital Xperience Group (DXG), a pioneering division of
                  WLJ Consulting, is a premier partner in transforming events
                  into unforgettable experiences. With our roots firmly planted
                  in the event hospitality industry. We pride ourselves on
                  elevating the digital and production quality of in-person,
                  virtual, and hybrid events. Demo Digital Xperience Group
                  (DXG), a pioneering division of WLJ Consulting, is a premier
                  partner in transforming events Consulting, is a premier
                  partner in transforming events into unforgettable
                  experiences.is a premier partner in transforming events into
                  unforgettable experiences. With our roots firmly planted in
                  the event hospitality industry. We pride ourselves on
                  elevating the digital and production quality of in-person,
                  virtual, and hybrid events. Demo Digital Xperience Group
                  (DXG), a pioneering division of WLJ Consulting, is a premier
                  partner in transforming event into unforgettable experiences.
                  With our roots firmly planted in the event hospitality
                  industry. We pride ourselves on .
                </p>
              </div>
              <div className='flex justify-center md:justify-start'>
                <ScondayButton
                  title={'Read More'}
                  link={''}
                  style={'bg-[#1B2639] text-white'}
                  radius={'sm'}
                />
              </div>
            </CardMotion>
          </div>

          <div className='flex-1'>
            <CardMotion
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 1.1,
                },
              }}
              initial={{
                opacity: 0,
                x: 100,
              }}
            >
              <Image
                width={1000}
                height={500}
                src={'/assets/blogs/live.svg'}
                alt='Live image'
                className='bg-cover'
              />
            </CardMotion>
          </div>
        </div>

        <CardMotion
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1.1,
            },
          }}
          initial={{
            opacity: 0,
            x: -100,
          }}
        >
          <hr className='w-full h-[1px] mx-auto my-2 bg-[#1B2639] border-0 rounded md:my-5 hidden md:block' />
        </CardMotion>

        <div className='grid grid-cols-1 gap-10 mt-10 sm:grid-cols-3'>
          {blogData.others.map((item, index) => (
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
              <div className='' key={index}>
                <Image
                  width={500}
                  height={300}
                  src={item.url}
                  alt='about img'
                  className=''
                />
                <h2 className='text-2xl tracking-normal font-bold text-[#1B2639] mb-3 mt-2 text-center md:text-left'>
                  {item.title}
                </h2>
                <p className='font-normal text-[1rem] text-black mb-8 text-center md:text-left line-clamp-6'>
                  {item.dec}
                </p>
                <div className='flex justify-center md:justify-start'>
                  <ScondayButton
                    title={'Read More'}
                    link={''}
                    style={'bg-[#1B2639] text-white'}
                    radius={'sm'}
                  />
                </div>
              </div>
            </CardMotion>
          ))}
        </div> */}
      </SectionLayout>
    </>
  );
};

export default page;
