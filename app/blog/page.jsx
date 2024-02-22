import React from "react";
import Image from "next/image";
import { blogData } from "@/config/data";
import GetAllPostData from "@/lib/GetAllPostData";
import SectionLayout from "@/components/shared/SectionLayout";
import MotionEffect from "@/components/motion/MotionEffect";
import parse from "html-react-parser";
import { Link } from "@nextui-org/react";

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
    <SectionLayout bg="bg-black">
      <MotionEffect effect="fade-down" duration="2000">
        <h2 className="mb-4 text-3xl font-bold tracking-normal text-left text-white">
          Recent Blog Post
        </h2>
      </MotionEffect>
      <MotionEffect effect="fade-right" duration="2000">
        <hr className="w-full h-[1px] mx-auto my-8 bg-gray-200 border-0 rounded md:my-5" />
      </MotionEffect>
      <div className="grid gap-0 mb-10 md:gap-12 gird-col-1 sm:grid-cols-3">
        {blogPostData?.data
          ?.filter((pub, no) => pub.published === true && no === 0)
          ?.map((blogs, index) => (
            <div className="col-span-2 md:col-span-1">
              <Link href={`/blog/${blogs?.slug}`}>
                <div>
                  <MotionEffect effect="fade-right" duration="2000">
                    <Image
                      width={1800}
                      height={300}
                      src={blogs?.featuredImage?.image?.url}
                      alt={blogs?.featuredImage?.altText}
                      className="bg-center bg-cover"
                    />

                    <p className="font-thin text-[1rem] text-white text-left italic mt-2">
                      {postDate(blogs?.createdAt)}
                    </p>
                    <h2 className="text-2xl tracking-normal font-bold text-[#D5AD45] text-left mb-2 ">
                      {blogs?.title}
                    </h2>
                    <div className="font-normal text-[1rem] text-white mb-8 line-clamp-6">
                      {parse(blogs?.body)}
                    </div>
                    <button className="px-8 py-3 font-medium tracking-wider text-white border border-white rounded-full text-normal focus:outline-none hover:bg-white hover:text-black focus:ring-1 focus:ring-gray-200">
                      Read More
                    </button>
                  </MotionEffect>
                </div>
              </Link>
            </div>
          ))}

        <div className="col-span-2 h-[100%] md:h-[700px] overflow-y-scroll overflow-x-hidden ">
          {blogPostData?.data
            ?.filter((pub, no) => pub.published === true)
            ?.map((blogs, index) => (
              <MotionEffect effect="fade-left" duration="2000">
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
                    <p className="font-thin text-[.8rem] text-white text-left italic mt-2">
                      {postDate(blogs?.createdAt)}
                    </p>
                    <h2 className="text-xl tracking-normal font-bold text-[#D5AD45] mb-2">
                      {blogs?.title}
                    </h2>
                    <div className="font-normal text-[.8rem] text-white mb-4 sm:line-clamp-1 line-clamp-1">
                      {parse(blogs?.body)}
                    </div>
                    <button
                      href={`/blog/${blogs?.slug}`}
                      className="px-4 py-2 font-medium tracking-wider text-white border border-white rounded-full text-normal focus:outline-none hover:bg-white hover:text-black focus:ring-1 focus:ring-gray-200"
                    >
                      Read More
                    </button>
                  </div>
                </Link>
              </MotionEffect>
            ))}
        </div>
      </div>
      <MotionEffect effect="fade-right" duration="2000">
        <hr className="w-full h-[1px] mx-auto my-2 bg-gray-200 border-0 rounded md:my-5" />
      </MotionEffect>

      <div className="grid items-start justify-between grid-cols-1 gap-16 mt-16 lg:grid-cols-2">
        <MotionEffect effect="fade-right" duration="2000">
          <div>
            <h2 className="mb-4 text-4xl font-bold tracking-normal text-white text-center md:text-left">
              Create a beautiful event platform <br /> services
            </h2>
            <div className="mt-8">
              <p className="font-normal text-[1rem] text-white mb-8 text-center md:text-left">
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
            <div className="flex justify-center md:justify-start">
              <Link
                href="#"
                className="px-8 py-3 font-medium tracking-wider text-white border border-white rounded-full text-normal focus:outline-none hover:bg-white hover:text-black focus:ring-1 focus:ring-gray-200"
              >
                Read More
              </Link>
            </div>
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

      <div className="grid grid-cols-1 gap-10 mt-10 sm:grid-cols-3">
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
              <h2 className="text-2xl tracking-normal font-bold text-[#D5AD45] text-left mb-2  text-center md:text-left">
                {item.title}
              </h2>
              <p className="font-normal text-[1rem] text-white mb-8 text-center md:text-left">
                {item.dec}
              </p>
              <div className="flex justify-center md:justify-start">
                <Link
                  href={item.link}
                  className="px-8 py-3 font-medium tracking-wider text-white border border-white rounded-full text-normal focus:outline-none hover:bg-white hover:text-black focus:ring-1 focus:ring-gray-200 "
                >
                  Read More
                </Link>
              </div>
            </div>
          </MotionEffect>
        ))}
      </div>
    </SectionLayout>
  );
};

export default page;
