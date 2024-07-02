import React from 'react';
import Image from 'next/image';
import GetAllPostData from '@/lib/GetAllPostData';
import parse from 'html-react-parser';
import { Link } from '@nextui-org/react';
import SectionLayout from '@/components/shared/SectionLayout';
import HeroSection from '@/components/blog/HeroSection';
import CardMotion from '@/components/motion/CardMotion';
import Head from 'next/head';

const css = `
 h1, h2, p, br, nav {
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: normal;
}

h1 {
  font-size: 40px;
}

h2 {
  font-size: 25px;
}

p, br {
  padding-top: 6px;
  padding-bottom: 6px;
}

ul {
  list-style-type: disc;
  margin-left: 30px;
}
`;

const page = async ({ params }) => {
  const blogPostData = await GetAllPostData();

  const blogDetails = blogPostData?.data?.filter(
    (blogs) => blogs.slug === params.slug,
  );

  const postDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    return formattedDate;
  };

  return (
    <>
      <Head>
        <title>{blogDetails[0]?.title}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content={blogDetails[0]?.title} />
      </Head>
      <style>{css}</style>
      <HeroSection />
      <SectionLayout bg='bg-white'>
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
          <h2 className='mb-4 text-3xl font-bold tracking-normal text-left text-[#1B2639]'>
            {blogDetails[0]?.title}
          </h2>

          <hr className='w-full h-[1px] mx-auto my-8 bg-[#1B2639] border-0 rounded md:my-5' />

          <div className='grid gap-12 mb-10 gird-col-1 sm:grid-cols-3'>
            {blogDetails?.map((blogs, index) => (
              <div className='col-span-2'>
                <Image
                  width={1000}
                  height={300}
                  src={blogs?.featuredImage?.image?.url}
                  alt={blogs?.featuredImage?.altText}
                  className='w-full h-auto bg-center bg-cover'
                />

                <p className='text-[1rem] text-black text-left italic mt-8'>
                  {postDate(blogs?.createdAt)}
                </p>
                <div className='mt-5 text-base'>{parse(blogs?.body)}</div>
              </div>
            ))}

            <div className='col-span-2 sm:col-span-1 h-[100%] md:h-[1000px] overflow-y-scroll overflow-x-hidden '>
              {blogPostData?.data
                ?.filter((pub, no) => pub.published === true)
                ?.map((blogs, index) => (
                  <Link
                    className='flex items-center gap-6 mb-4 '
                    key={index}
                    href={`/blog/${blogs?.slug}`}
                  >
                    <Image
                      width={180}
                      height={180}
                      src={blogs?.featuredImage?.image?.url}
                      alt={blogs?.featuredImage?.altText}
                      className='bg-center bg-cover'
                    />
                    <div>
                      <div className='text-[1rem] text-black text-left italic mt-0'>
                        {postDate(blogs?.createdAt)}
                      </div>
                      <div className='text-md tracking-normal font-bold text-[#1B2639] text-left mb-0 line-clamp-2'>
                        {blogs?.title}
                      </div>
                      <div className='font-normal text-[.8rem] text-black mb-4 text-justify sm:line-clamp-1 line-clamp-1 h-6'>
                        {parse(blogs?.body)}
                      </div>
                      <button
                        type='button'
                        class='text-white bg-[#1B2639] hover:bg-[#162030] font-medium text-base px-3 py-1.5 me-2 mb-2 focus:outline-none rounded-md'
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
