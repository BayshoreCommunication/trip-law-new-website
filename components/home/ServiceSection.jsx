import React from "react";
import SectionLayout from "../shared/SectionLayout";
import { Bitter } from "next/font/google";
import CardMotion from "../motion/CardMotion";
import ScondayButton from "../shared/ScondayButton";
import Image from "next/image";

const bitter = Bitter({ subsets: ["latin"] });

const ServiceSection = () => {
  const serviceData = [
    {
      icon: "/assets/home/icon/waivers.png",
      bg: "bg-[url('/assets/home/waivertwo.png')]",
      title: "Waivers",
      dec: "We can help you sort through all the confusing waiver rules and build a strong case to get your application approved.",
    },
    {
      icon: "/assets/home/icon/e2-treaty-visas.png",
      bg: "bg-[url('/assets/home/e2-employees.png')]",
      title: "E2 Treaty Visas",
      dec: "We can simplify the E2 Treaty Visa process, ensuring all papers, documents, and waivers are met for your investment in the USA",
    },
    {
      icon: "/assets/home/icon/citizenship.png",
      bg: "bg-[url('/assets/home/waviersone.png')]",
      title: "Citizenship",
      dec: "Our team will be with you each step of getting citizenship and help you meet the eligibility criteria for a successful application.",
    },
    {
      icon: "/assets/home/icon/naturalization-citizenship.png",
      bg: "bg-[url('/assets/home/citizenshipbg.png')]",
      title: "Naturalization & Citizenship",
      dec: "We walk you through the entire naturalization process and prepare all your legal documents, proofs, and citizenship interviews and exams.",
    },
    {
      icon: "/assets/home/icon/asylum.png",
      bg: "bg-[url('/assets/home/waivertwo.png')]",
      title: "Asylum",
      dec: "Our years of experienced attorneys will build a strong asylum case by presenting compelling evidence for your safety and protection.",
    },
    {
      icon: "/assets/home/icon/green-card.png",
      bg: "bg-[url('/assets/home/e2-tready-visas.png')]",
      title: "Green Card",
      dec: "We can guide you through the Green Card application process, ensuring all the requirements are met for smooth approval.",
    },
  ];
  return (
    <SectionLayout bg="bg-[#1B2639]">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
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
            <div className="">
              <h2
                className={`text-stone-50 font-bold text-3xl md:text-5xl mt-5 mb-4 text-center md:text-left ${bitter.className}`}
              >
                Additional Services
              </h2>
            </div>
          </CardMotion>
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
            <div className="flex justify-end invisible md:visible ">
              <ScondayButton
                title={"View All"}
                link={"/services"}
                style={"bg-slate-50 text-black"}
                radius={"none"}
              />
            </div>
          </CardMotion>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-start mt-[-20px] md:mt-12">
          {serviceData.map((item, index) => (
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
              <div
                className={`flex text-center bg-cover h-[300px] items-center ${item.bg}`}
              >
                <div class="p-6 items-start">
                  <div className="bg-[#1B2639] p-3 rounded-full bg-opacity-25 flex justify-center items-center mx-auto w-[60px] h-[60px]">
                    <Image
                      width={45}
                      height={45}
                      src={item.icon}
                      alt={item.title}
                      className="flex justify-center mx-auto"
                    />
                  </div>
                  <h2
                    className={`text-stone-50 font-semibold text-xl mt-5 mb-4 text-center ${bitter.className}`}
                  >
                    {item.title}
                  </h2>
                  <p className="font-thin text-[1rem] text-white text-center">
                    {item.dec}
                  </p>
                </div>
              </div>
            </CardMotion>
          ))}
        </div>

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
          <div className="flex justify-center visible md:invisible mt-12 md:mt-[-60px]">
            <ScondayButton
              title={"View All"}
              link={"/services"}
              style={"bg-slate-50 text-black"}
              radius={"none"}
            />
          </div>
        </CardMotion>
      </div>
    </SectionLayout>
  );
};

export default ServiceSection;
