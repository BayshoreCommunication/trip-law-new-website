import React from "react";
import Image from "next/image";
import { blogData, servicesData } from "@/config/data";
import GetAllPostData from "@/lib/GetAllPostData";
import parse from "html-react-parser";
import { Link } from "@nextui-org/react";
import MotionEffect from "@/components/motion/MotionEffect";
import SectionLayout from "@/components/shared/SectionLayout";
import HeroSection from "@/components/blog/HeroSection";
import SideServicesCard from "@/components/services/SideServicesCard";
import PageHeroSection from "@/components/shared/PageHeroSection";

const css = `
  h1{
    padding-top: 10px;
    font-size: 40px;
    padding-bottom: 10px;
    line-height: 100px;
  }
  h2{
    padding-top: 10px;
    font-size: 25px;
    padding-bottom: 10px;
    line-height: 100px;

  }
  p{
    padding-top: 6px;
    padding-bottom: 6px;
  }
  ul{
    list-style-type: disc;
    margin-left: 30px;

  }
  br{
    padding-top: 6px;
    padding-bottom: 6px;
}

`;

const page = async ({ params }) => {
  const servicesDetails = servicesData?.filter(
    (service) => service.slug === params.slug
  );

  return (
    <>
      <style>{css}</style>
      <PageHeroSection
        image={
          "bg-[url('/assets/services/hero-banner.png')] bg-cover bg-center"
        }
        title={"Services"}
      />
      <SectionLayout bg="bg-white">
        <MotionEffect effect="fade-right" duration="2000">
          <h2 className="mb-4 text-3xl font-bold tracking-normal text-left text-[#1B2639]">
            {servicesDetails[0]?.title}
          </h2>
        </MotionEffect>
        <MotionEffect effect="fade-right" duration="2000">
          <hr className="w-full h-[1px] mx-auto my-8 bg-[#1B2639] border-0 rounded md:my-5" />
        </MotionEffect>
        <div className="grid gap-12 mb-10 gird-col-1 sm:grid-cols-3">
          {servicesDetails?.map((services, index) => (
            <div className="col-span-2">
              <MotionEffect effect="fade-right" duration="2000">
                <div className="mt-5 text-base">{parse(services?.dece)}</div>
              </MotionEffect>
            </div>
          ))}

          <div className="col-span-2 sm:col-span-1 h-[100%] md:h-[700px] overflow-y-scroll overflow-x-hidden">
            {servicesData?.map((el, index) => (
              <Link href={`/services/${el?.slug}`}>
                <MotionEffect effect={"fade-up"} duration={"2000"}>
                  <SideServicesCard serversData={el} />
                </MotionEffect>
              </Link>
            ))}
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default page;
