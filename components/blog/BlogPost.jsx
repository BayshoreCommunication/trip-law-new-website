import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Image from "next/image";
import { blogData } from "@/config/data";
import MotionEffect from "../motion/MotionEffect";

const BlogPost = () => {
  return (
    <SectionLayout bg="bg-black">
      <MotionEffect effect="fade-down" duration="2000">
        <h2 className="mb-4 text-3xl tracking-normal font-bold text-white text-left">
          Recent Blog Post
        </h2>
      </MotionEffect>
      <MotionEffect effect="fade-right" duration="2000">
        <hr className="w-full h-[1px] mx-auto my-8 bg-gray-200 border-0 rounded md:my-5" />
      </MotionEffect>
      <div className="grid gird-col-1 sm:grid-cols-3 gap-12 mb-10">
        <div className="">
          <MotionEffect effect="fade-right" duration="2000">
            <Image
              width={2000}
              height={300}
              src={"/assets/blogs/blog-post-main.svg"}
              alt="about img"
              className=""
            />

            <p className="font-thin text-[1rem] text-white text-left italic mt-2">
              20 Jan, 2014
            </p>
            <h2 className="text-2xl tracking-normal font-bold text-[#D5AD45] text-left mb-2">
              Microsoft Event Planning
            </h2>
            <p className="font-normal text-[1rem] text-white mb-8 text-justify">
              Demo Digital Xperience Group (DXG), a pioneering division of WLJ
              Consulting, is a premier partner in transforming events into
              unforgettable experiences. With our roots firmly planted in the
              event hospitality industry. We pride ourselves on elevating the
              digital and production quality of in-person, virtual, and hybrid
              events.
            </p>
            <a
              href="#"
              className="py-3 px-8 text-normal font-medium text-white focus:outline-none rounded-full border border-white hover:bg-white hover:text-black focus:ring-1 focus:ring-gray-200 tracking-wider"
            >
              Read More
            </a>
          </MotionEffect>
        </div>
        <div className="col-span-2">
          {blogData.blogs.map((item, index) => (
            <MotionEffect effect="fade-left" duration="2000">
              <div className=" flex items-center gap-6 mb-8" key={index}>
                <Image
                  width={180}
                  height={100}
                  src={"/assets/blogs/blog-post1.svg"}
                  alt="about img"
                  className=""
                />
                <div>
                  <p className="font-thin text-[.8rem] text-white text-left italic mt-2">
                    {item.date}
                  </p>
                  <h2 className="text-xl tracking-normal font-bold text-[#D5AD45] text-left mb-2">
                    {item.title}
                  </h2>
                  <p className="font-normal text-[.8rem] text-white mb-6 text-justify sm:line-clamp-5 line-clamp-2">
                    {item.dec}
                  </p>
                  <a
                    href={item.link}
                    className="py-3 px-5 text-normal font-medium text-white focus:outline-none rounded-full border border-white hover:bg-white hover:text-black focus:ring-1 focus:ring-gray-200 tracking-wider"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </MotionEffect>
          ))}
        </div>
      </div>
      <MotionEffect effect="fade-right" duration="2000">
        <hr className="w-full h-[1px] mx-auto my-2 bg-gray-200 border-0 rounded md:my-5" />
      </MotionEffect>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 justify-between items-start mt-16">
        <MotionEffect effect="fade-right" duration="2000">
          <div>
            <h2 className="mb-4 text-4xl tracking-normal font-bold text-white text-left">
              Create a beautiful event platform <br /> services
            </h2>
            <div className="mt-8">
              <p className="font-normal text-[1rem] text-white mb-8 text-justify">
                Demo Digital Xperience Group (DXG), a pioneering division of WLJ
                Consulting, is a premier partner in transforming events into
                unforgettable experiences. With our roots firmly planted in the
                event hospitality industry. We pride ourselves on elevating the
                digital and production quality of in-person, virtual, and hybrid
                events. Demo Digital Xperience Group (DXG), a pioneering
                division of WLJ Consulting, is a premier partner in transforming
                events Consulting, is a premier partner in transforming events
                into unforgettable experiences.is a premier partner in
                transforming events into unforgettable experiences. With our
                roots firmly planted in the event hospitality industry. We pride
                ourselves on elevating the digital and production quality of
                in-person, virtual, and hybrid events. Demo Digital Xperience
                Group (DXG), a pioneering division of WLJ Consulting, is a
                premier partner in transforming event into unforgettable
                experiences. With our roots firmly planted in the event
                hospitality industry. We pride ourselves on .
              </p>
            </div>
            <a
              href="#"
              className="py-3 px-8 text-normal font-medium text-white focus:outline-none rounded-full border border-white hover:bg-white hover:text-black focus:ring-1 focus:ring-gray-200 tracking-wider"
            >
              Read More
            </a>
          </div>
        </MotionEffect>
        <MotionEffect effect="fade-left" duration="2000">
          <div className="">
            <Image
              width={800}
              height={300}
              src={"/assets/blogs/live.svg"}
              alt="about img"
              className=""
            />
          </div>
        </MotionEffect>
      </div>
      <MotionEffect effect="fade-right" duration="2000">
        <hr className="w-full h-[1px] mx-auto my-2 bg-gray-200 border-0 rounded md:my-5" />
      </MotionEffect>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-10">
        {blogData.others.map((item, index) => (
          <MotionEffect effect="fade-up" duration="2000">
            <div className="" key={index}>
              <Image
                width={500}
                height={300}
                src={item.url}
                alt="about img"
                className=""
              />
              <h2 className="text-2xl tracking-normal font-bold text-[#D5AD45] text-left mb-2">
                {item.title}
              </h2>
              <p className="font-normal text-[1rem] text-white mb-8 text-justify">
                {item.dec}
              </p>
              <a
                href={item.link}
                className="py-3 px-8 text-normal font-medium text-white focus:outline-none rounded-full border border-white hover:bg-white hover:text-black focus:ring-1 focus:ring-gray-200 tracking-wider "
              >
                Read More
              </a>
            </div>
          </MotionEffect>
        ))}
      </div>
    </SectionLayout>
  );
};

export default BlogPost;
