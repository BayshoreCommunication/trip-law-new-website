import Image from "next/image";
import { Bitter } from "next/font/google";
import CardMotion from "../motion/CardMotion";
import ScondayButton from "./ScondayButton";
import SectionLayout from "./SectionLayout";

const bitter = Bitter({ subsets: ["latin"] });

/**
 * Shared consultation CTA block sourced directly from the main homepage ScheduleSection.
 */
export function ConsultationCtaContent() {
  return (
    <div className="flex flex-col-reverse items-center gap-8 md:flex-row">
      <div className="flex-1">
        <CardMotion
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1.1,
            },
          }}
          initial={{
            opacity: 0,
            x: -100,
          }}
        >
          <div className="">
            <h2
              className={`text-stone-950 font-bold text-2xl md:text-4xl mt-5 mb-0.5 text-center md:text-left ${bitter.className}`}
            >
              You Can Get A Consultation <br /> From Hardam Tripathi, Esq.
            </h2>
            <div className="flex items-center justify-center md:justify-start">
              <hr className="h-[2px] my-0 bg-stone-950 border-0 w-28 mt-2 mb-4 " />
            </div>

            <p className="mb-4 text-lg text-center text-stone-950 md:text-left">
              Using our interactive simulator, you can find out your options of
              moving abroad. We offer a diverse database of mentorship programs
              that will prepare you to be able to succeed in your journey
              abroad.
            </p>
            <div className="flex justify-center mt-8 md:justify-start">
              <ScondayButton
                title={"Schedule Consultation"}
                link={"/appointment"}
                style={"bg-[#1B2639] text-white"}
                radius={"sm"}
              />
            </div>
          </div>
        </CardMotion>
      </div>
      <div className="flex-1">
        <CardMotion
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1.1,
            },
          }}
          initial={{
            opacity: 0,
            x: 100,
          }}
        >
          <div className="flex items-center justify-center">
            <Image
              src="/assets/home/Consultation.png"
              alt="about-image"
              className=""
              rel="preload"
              height={300}
              width={1200}
            />
          </div>
        </CardMotion>
      </div>
    </div>
  );
}

/**
 * Standalone Consultation CTA section matching the homepage ScheduleSection design.
 */
const ScheduleConsultationCta = () => {
  return (
    <SectionLayout bg="bg-[#F1F5FA] ">
      <ConsultationCtaContent />
    </SectionLayout>
  );
};

export default ScheduleConsultationCta;
