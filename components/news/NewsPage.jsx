import React from "react";
import Image from "next/image";
import SectionLayout from "@/components/shared/SectionLayout";
import { Link } from "@nextui-org/react";
import CardMotion from "@/components/motion/CardMotion";
import { newsData } from "@/config/data";

// Simulate fetching news data

const NewsPage = () => {
  const newsPostData = newsData; // Assign data directly

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
            Recent News
          </h2>

          <hr className="w-full h-[1px] mx-auto mt-4 mb-4 md:mb-8 bg-[#1B2639] border-0 rounded " />

          <div className="grid gap-0 mb-10 md:gap-12 gird-col-1 sm:grid-cols-2">
            {newsPostData
              ?.filter((news, no) => news.published === true && no === 0)
              ?.map((blogs, index) => (
                <div className="flex-1" key={index}>
                  <Link
                    href={blogs?.link || "javascript:void(0)"}
                    target="_blank"
                  >
                    <div>
                      <Image
                        width={1800}
                        height={300}
                        src={blogs?.url}
                        alt={blogs?.title}
                        className="bg-center bg-cover"
                      />

                      <p className="text-[1rem] text-black text-left italic mt-2">
                        {postDate(blogs?.createdAt)}
                      </p>
                      <h2 className="text-xl md:text-2xl tracking-normal font-bold text-[#1B2639] text-left mt-2 mb-4 ">
                        {blogs?.title}
                      </h2>
                      <div className="font-normal text-[1rem] text-black mb-5 line-clamp-6">
                        {blogs?.dec}
                      </div>
                      <div className="flex justify-start">
                        <button
                          type="button"
                          className="text-white bg-[#1B2639] hover:bg-[#162030] font-medium text-sm md:text-lg px-4 py-2 me-2 mb-2 focus:outline-none rounded-md"
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}

            <div className="flex-1 h-[100%] md:h-[590px] overflow-y-scroll overflow-x-hidden ">
              {newsPostData
                ?.filter((pub, no) => pub.published === true && no !== 0)
                ?.map((blogs, index) => (
                  <Link
                    className="flex items-center gap-6 mb-8"
                    key={index}
                    href={blogs?.link || "javascript:void(0)"}
                    target="_blank"
                  >
                    <Image
                      width={180}
                      height={180}
                      src={blogs?.url}
                      alt={blogs?.title}
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
                        {blogs?.dec}
                      </div>
                      <div className="flex justify-start">
                        <button
                          type="button"
                          className="text-white bg-[#1B2639] hover:bg-[#162030] font-medium text-sm md:text-lg px-4 py-2 me-2 mb-2 focus:outline-none rounded-md"
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
      </SectionLayout>
    </>
  );
};

export default NewsPage;
