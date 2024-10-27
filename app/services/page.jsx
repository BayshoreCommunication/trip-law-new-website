import CardMotion from "@/components/motion/CardMotion";
import ServiceCard from "@/components/services/ServiceCard";
import PageHeroSection from "@/components/shared/PageHeroSection";
import SectionLayout from "@/components/shared/SectionLayout";
import { servicesData } from "@/config/data";
import Head from "next/head";
import Link from "next/link";

export const metadata = {
  title: "Comprehensive U.S. Immigration Services | Green Cards, Visas & Asylum",
  description:
    "Explore Trip Law's wide range of U.S. immigration services, including Green Cards, family sponsorship, employment-based visas (H-1B, EB-1, L-1), asylum,Citizenship,U visas, and more. Our Florida-based attorneys are dedicated to helping you through every step of your immigration journey.",
};

const page = () => {
  return (
    <div>
      <PageHeroSection
        image={"/assets/hero-img/services.jpg"}
        title={"Services"}
      />
      <SectionLayout bg="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-5 items-center justify-between">
          {servicesData?.map((el, index) => (
            <Link href={`/services/${el?.slug}`}>
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
                <ServiceCard serversData={el} />
              </CardMotion>
            </Link>
          ))}
        </div>
      </SectionLayout>
    </div>
  );
};

export default page;
