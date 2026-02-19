import CardMotion from "@/components/motion/CardMotion";
import PageHeroSection from "@/components/shared/PageHeroSection";
import SectionLayout from "@/components/shared/SectionLayout";
import GetAllPostData from "@/lib/GetAllPostData";
import GetBlogBySlug from "@/lib/GetBlogBySlug";
import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const css = `
 h1, h2, p, br, nav {
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: normal;
}

h1, h2 {
  font-style: blog;
}

h1 {
  font-size: 40px;
}

h2 {
  font-size: 25px;
}

p {
  font-size: 17px;
  padding-top: 6px;
  padding-bottom: 6px;
}

ul {
  list-style-type: disc;
  margin-left: 30px;
}

`;

export async function generateStaticParams() {
  try {
    const blogPostData = await GetAllPostData();
    
    if (!blogPostData?.data) {
      return [];
    }
    
    return blogPostData.data
      .filter((blog) => blog.published === true)
      .map((blog) => ({
        slug: blog.slug,
      }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export async function generateMetadata({ params }) {
  const blogDetails = await GetBlogBySlug(params.slug);

  if (!blogDetails) {
    return {
      title: "Blog not found",
      description: "No blog post available.",
    };
  }

  return {
    title: blogDetails?.title,
    description: blogDetails?.metaDescription,
    openGraph: {
      title: blogDetails?.title,
      description: blogDetails?.metaDescription,
      images: [blogDetails?.featuredImage?.image?.url],
      url: `https://www.trip-law.com/blog/${blogDetails?.slug}`,
      type: "article",
      site_name: "Trip Law",
    },
  };
}

const page = async ({ params }) => {
  const [blogDetails, allBlogsData] = await Promise.all([
    GetBlogBySlug(params.slug),
    GetAllPostData()
  ]);

  if (!blogDetails) {
    notFound();
  }

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
      <style>{css}</style>
      <PageHeroSection image={"/assets/hero-img/blog.jpg"} titleH2={"Blog"} />
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
          <h1 className="mb-0 md:mb-4 text-xl md:text-3xl font-bold tracking-normal text-left text-[#1B2639]">
            {blogDetails?.title}
          </h1>

          <hr className="w-full h-[1px] mx-auto mt-0 mb-6 bg-[#1B2639] border-0 rounded " />

          <div className="grid gap-12 mb-10 grid-cols-1 sm:grid-cols-3">
            <div className="col-span-2">
              <Image
                width={1000}
                height={300}
                src={blogDetails?.featuredImage?.image?.url}
                alt={blogDetails?.featuredImage?.altText || blogDetails?.title}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 1000px"
                className="w-full h-auto object-cover"
              />

              <p className="text-[.9rem] md:text-[1rem] text-black text-left italic mt-4 ">
                {postDate(blogDetails?.createdAt)}
              </p>
              <div className="mt-2 text-md">{parse(blogDetails?.body)}</div>
            </div>

            <div className="col-span-2 sm:col-span-1 h-[100%] md:h-[1000px] overflow-y-scroll overflow-x-hidden ">
              {allBlogsData?.data
                ?.filter((pub) => pub.published === true)
                ?.map((blogs, index) => (
                  <Link
                    className="flex items-center gap-6 mb-4 "
                    key={index}
                    href={`/blog/${blogs?.slug}`}
                  >
                    <Image
                      width={180}
                      height={180}
                      src={blogs?.featuredImage?.image?.url}
                      alt={blogs?.featuredImage?.altText || blogs?.title}
                      className="object-cover flex-shrink-0"
                      style={{ objectFit: 'cover' }}
                    />
                    <div>
                      <div className="text-[0.8rem] md:text-[.8rem] text-black text-left italic mt-0">
                        {postDate(blogs?.createdAt)}
                      </div>
                      <div className="text-md font-bold text-[#1B2639] text-left line-clamp-2">
                        {blogs?.title}
                      </div>
                      <div className="font-normal text-[.8rem] text-black mb-2 md:mb-4 line-clamp-1 h-6">
                        {parse(blogs?.body)}
                      </div>
                      <button
                        type="button"
                        class="text-white bg-[#1B2639] hover:bg-[#162030] font-medium text-sm md:text-lg px-3 py-1.5 me-2 focus:outline-none rounded-md"
                      >
                        Read More
                      </button>
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

export default page;
