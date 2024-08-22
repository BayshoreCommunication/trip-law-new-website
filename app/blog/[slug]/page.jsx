import Image from 'next/image';
import GetAllPostData from '@/lib/GetAllPostData';
import parse from 'html-react-parser';
import SectionLayout from '@/components/shared/SectionLayout';
import HeroSection from '@/components/blog/HeroSection';
import CardMotion from '@/components/motion/CardMotion';
import Head from 'next/head';
import Link from 'next/link';

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
          <h2 className='mb-0 md:mb-4 text-xl md:text-3xl font-bold tracking-normal text-left text-[#1B2639]'>
            {blogDetails[0]?.title}
          </h2>

          <hr className='w-full h-[1px] mx-auto mt-0 mb-6 bg-[#1B2639] border-0 rounded ' />

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

                <p className='text-[.9rem] md:text-[1rem] text-black text-left italic mt-4 '>
                  {postDate(blogs?.createdAt)}
                </p>
                <div className='mt-2 text-md'>{parse(blogs?.body)}</div>
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
                      <div className='text-[0.8rem] md:text-[.8rem] text-black text-left italic mt-0'>
                        {postDate(blogs?.createdAt)}
                      </div>
                      <div className='text-md font-bold text-[#1B2639] text-left line-clamp-2'>
                        {blogs?.title}
                      </div>
                      <div className='font-normal text-[.8rem] text-black mb-2 md:mb-4 line-clamp-1 h-6'>
                        {parse(blogs?.body)}
                      </div>
                      <button
                        type='button'
                        class='text-white bg-[#1B2639] hover:bg-[#162030] font-medium text-sm md:text-lg px-3 py-1.5 me-2 focus:outline-none rounded-md'
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
