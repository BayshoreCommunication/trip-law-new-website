import HeroSection from "@/components/blog/HeroSection";
import CardMotion from "@/components/motion/CardMotion";
import BlogCard from "@/components/shared/BlogCard";
import Pagination from "@/components/shared/Pagination";
import SectionLayout from "@/components/shared/SectionLayout";
import {
  VISA_OVERSTAY_DESCRIPTION,
  VISA_OVERSTAY_FEATURE_IMAGE,
  VISA_OVERSTAY_FEATURE_IMAGE_ALT,
  VISA_OVERSTAY_TITLE,
} from "@/components/static-blogs/blogs/visaOverstayMeta";
import GetAllPostData from "@/lib/GetAllPostData";

const staticBlogs = [
  {
    slug: "visa-overstay",
    title: VISA_OVERSTAY_TITLE,
    body: VISA_OVERSTAY_DESCRIPTION,
    createdAt: "2026-05-10",
    published: true,
    featuredImage: {
      image: {
        url: VISA_OVERSTAY_FEATURE_IMAGE,
      },
      altText: VISA_OVERSTAY_FEATURE_IMAGE_ALT,
    },
  },
];

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
  const publishedBlogs = [
    ...(currentPage === 1 ? staticBlogs : []),
    ...(blogPostData?.data?.filter((pub) => pub.published === true) || []),
  ];

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
            {publishedBlogs?.map((blog, index) => (
              <div key={index} className="h-full">
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>

          {/* No blogs message */}
          {publishedBlogs.length === 0 && (
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
