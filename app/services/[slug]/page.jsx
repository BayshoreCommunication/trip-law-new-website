import React from 'react';
import { servicesData } from '@/config/data';
import parse from 'html-react-parser';
import { Link } from '@nextui-org/react';
import SectionLayout from '@/components/shared/SectionLayout';
import SideServicesCard from '@/components/services/SideServicesCard';
import PageHeroSection from '@/components/shared/PageHeroSection';
import CardMotion from '@/components/motion/CardMotion';
import Head from 'next/head';

const css = `
  h1{
    font-size: 40px;
    font-weight: 900;
    padding-top: 10px;
  }
  h2{
    padding-top: 10px;
    font-size: 26px;
    font-weight: 700;
  }
  p{
    padding-top: 2px;
    padding-bottom: 2px;
  }
  ul{
    list-style-type: disc;
    margin-left: 30px;
    
  }
  li{
    padding-top: 5px;
    padding-bottom: 5px;
  }
  br{
    padding-top: 1px;
    padding-bottom: 1px;
}
nav{
  padding-top: 12px;
}

`;

const page = async ({ params }) => {
  const servicesDetails = servicesData?.filter(
    (service) => service.slug === params.slug,
  );

  return (
    <>
      <Head>
        <title>{servicesDetails[0]?.title}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='' />
      </Head>
      <style>{css}</style>
      <PageHeroSection
        image={'/assets/services/hero-banner.png'}
        title={'Services'}
      />
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
            {servicesDetails[0]?.title}
          </h2>

          <hr className='w-full h-[1px] mx-auto my-8 bg-[#1B2639] border-0 rounded md:my-5' />

          <div className='grid gap-12 mb-10 gird-col-1 sm:grid-cols-3'>
            {servicesDetails?.map((services, index) => (
              <div className='col-span-2'>
                <div className='mt-5 text-base'>{parse(services?.dece)}</div>
              </div>
            ))}

            <div className='col-span-2 sm:col-span-1 h-[100%] md:h-[1600px] overflow-y-scroll overflow-x-hidden hidden md:block'>
              {servicesData?.map((el, index) => (
                <Link href={`/services/${el?.slug}`} key={index}>
                  <SideServicesCard serversData={el} />
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
