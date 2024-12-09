import React from "react";
import { servicesData } from "@/config/data";
import parse from "html-react-parser";
import { Link } from "@nextui-org/react";
import SectionLayout from "@/components/shared/SectionLayout";
import SideServicesCard from "@/components/services/SideServicesCard";
import PageHeroSection from "@/components/shared/PageHeroSection";
import CardMotion from "@/components/motion/CardMotion";
import Head from "next/head";
import { notFound } from "next/navigation";

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

// export const metadata = {
//   title: "What Immigration Services Does TripLaw Offer",
//   description:
//     "Explore TripLaw's comprehensive immigration services, including visas, green cards, citizenship, and more. Find the right solution for your situation",
// };

export const generateMetadata = ({ params }) => {
  const servicesDetails = servicesData?.filter(
    (service) => service.slug === params.slug
  );

  if (!servicesDetails || servicesDetails.length === 0) {
    notFound();
  }
  //console.log(servicesDetails);
  return {
    title:
      servicesDetails[0]?.title ||
      "What Immigration Services Does TripLaw Offer",
    description:
      servicesDetails[0]?.sortTitle.slice(0, 200) ||
      "Explore TripLaw's comprehensive immigration services, including visas, green cards, citizenship, and more. Find the right solution for your situation",
    openGraph: {
      title:
        servicesDetails[0]?.title ||
        "What Immigration Services Does TripLaw Offer",
      description:
        servicesDetails[0]?.sortTitle.slice(0, 200) ||
        "Explore TripLaw's comprehensive immigration services, including visas, green cards, citizenship, and more. Find the right solution for your situation",
      images: [
        {
          url: servicesDetails[0]?.icon,
          width: 1200,
          height: 800,
          alt: servicesDetails[0]?.title,
        },
      ],
      siteName: "TripLaw",
      type: "article",
      locale: "en_US",
      url: `https://www.trip-law.com/services/${servicesDetails[0]?.slug}`,
    },
  };
};

const page = async ({ params }) => {
  const servicesDetails = servicesData?.filter(
    (service) => service.slug === params.slug
  );

  if (!servicesDetails || servicesDetails.length === 0) {
    notFound();
  }

  return (
    <>
      <style>{css}</style>
      <PageHeroSection
        image={"/assets/services/hero-banner.png"}
        titleH2={"Services"}
      />
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
          <h1 className="mb-4 text-3xl font-bold tracking-normal text-left text-[#1B2639]">
            {servicesDetails[0]?.title}
          </h1>

          <hr className="w-full h-[1px] mx-auto my-8 bg-[#1B2639] border-0 rounded md:my-5" />

          <div className="grid gap-12 mb-10 gird-col-1 sm:grid-cols-3">
            {servicesDetails?.map((services, index) => (
              <div className="col-span-2">
                <div className="mt-5 text-base">{parse(services?.dece)}</div>
              </div>
            ))}

            <div className="col-span-2 sm:col-span-1 h-[100%] md:h-[1600px] overflow-y-scroll overflow-x-hidden hidden md:block">
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
