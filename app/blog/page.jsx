import HeroSection from "@/components/blog/HeroSection";
import CardMotion from "@/components/motion/CardMotion";
import Pagination from "@/components/shared/Pagination";
import SectionLayout from "@/components/shared/SectionLayout";
import GetAllPostData from "@/lib/GetAllPostData";
import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Immigration Tips, Success Stories & Legal News | Trip Law Blog",
  description:
    "Stay informed with the latest U.S. immigration law news, expert tips, and insights from Trip Law. Our blog covers Green Cards, work visas (H-1B, EB-1), asylum, family sponsorship, and more. Get valuable advice from experienced immigration attorneys to guide your journey.",
};

const page = async ({ searchParams }) => {
  // Get current page from URL params, default to 1
  const currentPage = parseInt(searchParams?.page) || 1;
  const limit = 9;

  // Fetch paginated blog data
  const blogPostData = await GetAllPostData(currentPage, limit);

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
            Blog Posts
          </h2>

          <hr className="w-full h-[1px] mx-auto mt-4 mb-8 bg-[#1B2639] border-0 rounded " />

          {/* Blog Grid */}
          <div className="grid gap-8 mb-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {blogPostData?.data
              ?.filter((pub) => pub.published === true)
              ?.map((blogs, index) => (
                <Link
                  href={`/blog/${blogs?.slug}`}
                  key={index}
                  className="flex flex-col group"
                >
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      width={600}
                      height={400}
                      src={blogs?.featuredImage?.image?.url}
                      alt={blogs?.featuredImage?.altText}
                      className="bg-center bg-cover w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <p className="text-[0.9rem] text-black text-left italic mt-3">
                    {postDate(blogs?.createdAt)}
                  </p>

                  <h3 className="text-lg md:text-xl tracking-normal font-bold text-[#1B2639] text-left mt-2 mb-3 line-clamp-2 group-hover:text-[#3a4a64] transition-colors">
                    {blogs?.title}
                  </h3>

                  <div className="font-normal text-[0.95rem] text-black mb-4 line-clamp-3 flex-1">
                    {parse(blogs?.body)}
                  </div>

                  <div className="flex justify-start">
                    <button
                      type="button"
                      className="text-white bg-[#1B2639] hover:bg-[#162030] font-medium text-sm md:text-base px-4 py-2 focus:outline-none rounded-md transition-colors"
                    >
                      Read More
                    </button>
                  </div>
                </Link>
              ))}
          </div>

          {/* No blogs message */}
          {(!blogPostData?.data || blogPostData.data.length === 0) && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No blog posts found.</p>
            </div>
          )}

          {/* Pagination Component */}
          {blogPostData?.pagination && (
            <Pagination
              currentPage={blogPostData.pagination.currentPage}
              totalPages={blogPostData.pagination.totalPages}
              hasNextPage={blogPostData.pagination.hasNextPage}
              hasPrevPage={blogPostData.pagination.hasPrevPage}
            />
          )}
        </CardMotion>
      </SectionLayout>
    </>
  );
};

export default page;
