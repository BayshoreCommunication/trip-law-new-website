import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Image from "next/image";
import MotionEffect from "../motion/MotionEffect";

const SuccessStories = () => {
  return (
    <SectionLayout bg="bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 justify-between items-center">
        <div className="">
          <MotionEffect effect="fade-right" duration="2000">
            <Image
              width={2000}
              height={300}
              src={"/assets/services/service-pic.svg"}
              alt="about img"
              className="rounded-tl-[100px]"
            />
          </MotionEffect>
        </div>
        <MotionEffect effect="fade-left" duration="2000">
          <div>
            <h2 className="mb-4 text-2xl sm:text-3xl tracking-normal font-bold text-white text-center sm:text-left leading-normal">
              Success Stories: Your Ambition, Our Commitment
            </h2>
            <div className="mt-12">
              <ul class="space-y-4 text-left text-gray-500 dark:text-gray-400">
                {/* <li class="flex items-start rtl:space-x-reverse text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    class="flex-shrink-0 w-7 h-7 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>

                  <span className="text-justify text-lg">
                    <strong className="font-bold">
                      Real Results, Real Businesses:{" "}
                    </strong>
                    Our track record speaks for itself. We take pride in the
                    multitude of success stories written in collaboration with
                    our clients. From small firms to large enterprises, our
                    strategies have proven effective across the board.
                  </span>
                </li> */}
                <li class="flex items-start space-x-3 rtl:space-x-reverse text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    class="flex-shrink-0 w-7 h-7 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>

                  <span className="text-center md:text-left text-lg">
                    <strong className="font-bold">
                      Real Results, Real Businesses:{" "}
                    </strong>
                    Our track record speaks for itself. We take pride in the
                    multitude of success stories written in collaboration with
                    our clients. From small firms to large enterprises, our
                    strategies have proven effective across the board.
                  </span>
                </li>

                <li class="flex items-start space-x-3 rtl:space-x-reverse text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    class="flex-shrink-0 w-7 h-7 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>

                  <span className="text-center md:text-left text-lg">
                    <strong className="font-bold">
                      Client-Centric Success:{" "}
                    </strong>
                    Each success story is a testament to our client-centric
                    approach. We celebrate the achievements of our clients as
                    our own, showcasing the possibilities when ambition meets
                    the right guidance.
                  </span>
                </li>
                <li class="flex items-start space-x-3 rtl:space-x-reverse text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    class="flex-shrink-0 w-7 h-7 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>

                  <span className="text-center md:text-left text-lg">
                    <strong className="font-bold">
                      Continuous Evolution:{" "}
                    </strong>
                    In a rapidly changing industry, our clients' successes are
                    beacons of our ability to evolve and adapt, continually
                    offering relevant, impactful solutions.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </MotionEffect>
      </div>
    </SectionLayout>
  );
};

export default SuccessStories;
