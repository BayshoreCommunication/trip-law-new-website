import SectionLayout from "../shared/SectionLayout";
import { Button } from "@nextui-org/react";
import { Mulish, Bitter } from "next/font/google";
import MotionEffect from "../motion/MotionEffect";
import { SingleTabSection } from "../shared/SingleTabSection";
import { DoubleTabSection } from "../shared/DoubleTabSection";

const bitter = Bitter({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });

const FamilyBasedImmigration = () => {
  let tabsData = [
    {
      value: "1",
      label: `<p>Green Card </br>Through Marriage</p>`,
      slug: "green-card-through-marriage",
      content:
        "1 Introducing international opportunities & strategic investment solutions, we specialize in empowering businesses and individuals to explore the vast potential of foreign markets. With deep expertise, tailored strategies, and unwavering commitment, we facilitate your journey to expand investment horizons across borders. TurnAbroad will diversify your business portfolio and help you navigate the intricate world of foreign investment.",
      img: "",
    },
    {
      value: "2",
      label: `<p>Green Card </br>Immediate Relative</p>`,
      slug: "green-card-immediate-relative",
      content:
        "2 Introducing international opportunities & strategic investment solutions, we specialize in empowering businesses and individuals to explore the vast potential of foreign markets. With deep expertise, tailored strategies, and unwavering commitment, we facilitate your journey to expand investment horizons across borders. TurnAbroad will diversify your business portfolio and help you navigate the intricate world of foreign investment.",
      img: "",
    },
    {
      value: "3",
      label: `<p>Green Card Through </br>Consular Processing</p>`,
      slug: "green-card-thrugh-consular-processing",
      content:
        "3 Introducing international opportunities & strategic investment solutions, we specialize in empowering businesses and individuals to explore the vast potential of foreign markets. With deep expertise, tailored strategies, and unwavering commitment, we facilitate your journey to expand investment horizons across borders. TurnAbroad will diversify your business portfolio and help you navigate the intricate world of foreign investment.",
      img: `/assets/home/familyImmigration.png`,
    },
  ];

  return (
    <SectionLayout bg="bg-white">
      <h2
        className={`text-stone-950 font-bold text-4xl mt-5 mb-3 text-center ${bitter.className}`}
      >
        Family-Based Immigration:
      </h2>
      <div className="flex justify-center">
        <div className="flex w-full flex-col mt-10">
          <SingleTabSection tabsData={tabsData} />
        </div>
      </div>
    </SectionLayout>
  );
};

export default FamilyBasedImmigration;
