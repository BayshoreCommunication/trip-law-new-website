import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Image from "next/image";
import MotionEffect from "../motion/MotionEffect";

const WhatSection = () => {
  return (
    <SectionLayout bg="bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 justify-between items-center">
        <div>
          <MotionEffect effect="fade-up" duration="2000">
            <h2 className="mb-4 text-3xl tracking-normal font-bold text-white text-center sm:text-left leading-normal">
              10X Tax Pro Expertise in Scaling: Your Custom Blueprint for
              Success
            </h2>
          </MotionEffect>

          <div className="mt-12">
            <ul class="space-y-4 text-left text-gray-500 dark:text-gray-400">
              <MotionEffect effect="fade-up" duration="2000">
                <li class="flex items-start space-x-3 rtl:space-x-reverse text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    class="flex-shrink-0 w-7 h-7 text-[#D5AD45]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>

                  <span className="text-center md:text-left text-lg">
                    <strong className="font-bold">
                      Tailored Growth Strategies:{" "}
                    </strong>
                    Our seasoned experts bring a wealth of industry knowledge,
                    offering tailored strategies that fit your business's
                    specific needs. We understand that each tax business has its
                    unique trajectory, and we're here to ensure your path leads
                    to exponential growth.
                  </span>
                </li>
              </MotionEffect>

              <MotionEffect effect="fade-up" duration="2000">
                <li class="flex items-start space-x-3 rtl:space-x-reverse text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    class="flex-shrink-0 w-7 h-7 text-[#D5AD45]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>

                  <span className="text-center md:text-left text-lg">
                    <strong className="font-bold">
                      Innovative Tools and Resources:{" "}
                    </strong>
                    Scaling requires more than ambition; it demands the right
                    tools. We equip you with cutting-edge technology and
                    resources to streamline operations, increase efficiency, and
                    maximize profitability.
                  </span>
                </li>
              </MotionEffect>

              <MotionEffect effect="fade-up" duration="2000">
                <li class="flex items-start space-x-3 rtl:space-x-reverse text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    class="flex-shrink-0 w-7 h-7 text-[#D5AD45]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>

                  <span className="text-center md:text-left text-lg">
                    <strong className="font-bold">
                      Continuous Support and Guidance:{" "}
                    </strong>
                    As you grow, our support evolves with you. We provide
                    ongoing guidance, ensuring you navigate the complexities of
                    scaling with confidence and clarity.
                  </span>
                </li>
              </MotionEffect>

              <MotionEffect effect="fade-up" duration="2000">
                <li class="flex items-start space-x-3 rtl:space-x-reverse text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    class="flex-shrink-0 w-7 h-7 text-[#D5AD45]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>

                  <span className="text-center md:text-left text-lg">
                    <strong className="font-bold">
                      Continuous Support and Guidance:{" "}
                    </strong>
                    As you grow, our support evolves with you. We provide
                    ongoing guidance, ensuring you navigate the complexities of
                    scaling with confidence and clarity.
                  </span>
                </li>
              </MotionEffect>
            </ul>
          </div>
        </div>
        <MotionEffect effect="fade-left" duration="2000">
          <div className="">
            <Image
              width={800}
              height={500}
              src={"/assets/services/service-pic.svg"}
              alt="about img"
              className="rounded-tr-[100px]"
            />
          </div>
        </MotionEffect>
      </div>

      <MotionEffect effect="fade-up" duration="2000"></MotionEffect>
      <h1 className="mb-4 text-4xl tracking-normal font-black text-white text-center  mt-32">
        What We Do?
      </h1>
      <MotionEffect effect="fade-up" duration="2000"></MotionEffect>
      <p className="font-normal text-lg text-white mb-8 text-center">
        A client-centric approach can lead to increased client satisfaction,
        loyalty, and advocacy, and is often a key differentiator <br /> in
        competitive markets. Businesses that successfully implement this
        approach typically see higher client retention rates,
        <br /> enhanced brand reputation, and ultimately, improved business
        performance.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16  mt-10">
        <div>
          <div className="mt-12">
            <ul class="space-y-4 text-left text-gray-500 dark:text-gray-400">
              <MotionEffect effect="fade-up" duration="2000">
                <li class="flex items-start space-x-3 rtl:space-x-reverse text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    class="flex-shrink-0 w-7 h-7 text-[#D5AD45]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                  <span className="text-center md:text-left text-lg">
                    <strong className="font-bold">
                      Tailored Growth Strategies:{" "}
                    </strong>
                    Our seasoned experts bring a wealth of industry knowledge,
                    offering tailored strategies that fit your business's
                    specific needs. We understand that each tax business has its
                    unique trajectory, and we're here to ensure your path leads
                    to exponential growth.
                  </span>
                </li>
              </MotionEffect>

              <MotionEffect effect="fade-up" duration="2000">
                <li class="flex items-start space-x-3 rtl:space-x-reverse text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    class="flex-shrink-0 w-7 h-7 text-[#D5AD45]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>

                  <span className="text-center md:text-left text-lg">
                    <strong className="font-bold">
                      Innovative Tools and Resources:{" "}
                    </strong>
                    Scaling requires more than ambition; it demands the right
                    tools. We equip you with cutting-edge technology and
                    resources to streamline operations, increase efficiency, and
                    maximize profitability.
                  </span>
                </li>
              </MotionEffect>

              <MotionEffect effect="fade-up" duration="2000">
                <li class="flex items-start space-x-3 rtl:space-x-reverse text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    class="flex-shrink-0 w-7 h-7 text-[#D5AD45]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>

                  <span className="text-center md:text-left text-lg">
                    <strong className="font-bold">
                      Continuous Support and Guidance:{" "}
                    </strong>
                    As you grow, our support evolves with you. We provide
                    ongoing guidance, ensuring you navigate the complexities of
                    scaling with confidence and clarity.
                  </span>
                </li>
              </MotionEffect>

              <MotionEffect effect="fade-up" duration="2000">
                <li class="flex items-start space-x-3 rtl:space-x-reverse text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    class="flex-shrink-0 w-7 h-7 text-[#D5AD45]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>

                  <span className="text-center md:text-left text-lg">
                    <strong className="font-bold">
                      Continuous Support and Guidance:{" "}
                    </strong>
                    As you grow, our support evolves with you. We provide
                    ongoing guidance, ensuring you navigate the complexities of
                    scaling with confidence and clarity.
                  </span>
                </li>
              </MotionEffect>
            </ul>
          </div>
        </div>
        <div className="">
          <div className="mt-12">
            <ul class="space-y-4 text-left text-gray-500 dark:text-gray-400">
              <MotionEffect effect="fade-up" duration="2000">
                <li class="flex items-start space-x-3 rtl:space-x-reverse text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    class="flex-shrink-0 w-7 h-7 text-[#D5AD45]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>

                  <span className="text-center md:text-left text-lg">
                    <strong className="font-bold">
                      Tailored Growth Strategies:{" "}
                    </strong>
                    Our seasoned experts bring a wealth of industry knowledge,
                    offering tailored strategies that fit your business's
                    specific needs. We understand that each tax business has its
                    unique trajectory, and we're here to ensure your path leads
                    to exponential growth.
                  </span>
                </li>
              </MotionEffect>

              <MotionEffect effect="fade-up" duration="2000">
                <li class="flex items-start space-x-3 rtl:space-x-reverse text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    class="flex-shrink-0 w-7 h-7 text-[#D5AD45]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>

                  <span className="text-center md:text-left text-lg">
                    <strong className="font-bold">
                      Innovative Tools and Resources:{" "}
                    </strong>
                    Scaling requires more than ambition; it demands the right
                    tools. We equip you with cutting-edge technology and
                    resources to streamline operations, increase efficiency, and
                    maximize profitability.
                  </span>
                </li>
              </MotionEffect>

              <MotionEffect effect="fade-up" duration="2000">
                <li class="flex items-start space-x-3 rtl:space-x-reverse text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    class="flex-shrink-0 w-7 h-7 text-[#D5AD45]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>

                  <span className="text-center md:text-left text-lg">
                    <strong className="font-bold">
                      Continuous Support and Guidance:{" "}
                    </strong>
                    As you grow, our support evolves with you. We provide
                    ongoing guidance, ensuring you navigate the complexities of
                    scaling with confidence and clarity.
                  </span>
                </li>
              </MotionEffect>

              <MotionEffect effect="fade-up" duration="2000">
                <li class="flex items-start space-x-3 rtl:space-x-reverse text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    class="flex-shrink-0 w-7 h-7 text-[#D5AD45]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>

                  <span className="text-center md:text-left text-lg">
                    <strong className="font-bold">
                      Continuous Support and Guidance:{" "}
                    </strong>
                    As you grow, our support evolves with you. We provide
                    ongoing guidance, ensuring you navigate the complexities of
                    scaling with confidence and clarity.
                  </span>
                </li>
              </MotionEffect>
            </ul>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default WhatSection;
