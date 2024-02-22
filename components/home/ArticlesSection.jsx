import React from "react";
import { Card, CardFooter, Image, Button, CardBody } from "@nextui-org/react";
import { articlesInfo } from "@/config/data";
import { motion } from "framer-motion";
import RevealMotion from "../motion/RevealMotion";
import MotionEffect from "../motion/MotionEffect";

const ArticlesSection = () => {
  return (
    <section className="bg-black">
      <div className="py-8 px-1 mx-auto lg:py-16 lg:px-6 space-y-14">
        <h2 className="mb-4 text-4xl tracking-normal font-bold text-white text-center">
          MOST RECENT ARTICLES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
          {articlesInfo.map((item, index) => (
            <MotionEffect effect="fade-up" duration="2000">
              <div
                className={`flex text-center bg-cover h-[300px] items-center ${item.url} `}
              >
                <div class="p-6">
                  <p className="font-thin text-[1rem] text-white text-center italic">
                    {item.date}
                  </p>
                  <hr className="w-48 h-0.5 mx-auto my-2 bg-gray-100 border-0 rounded md:my-5" />
                  <h2 className="mb-8 text-2xl tracking-normal font-bold text-white text-center">
                    {item.title}
                  </h2>
                  <a
                    href={item.link}
                    className="py-3 px-16 mb-2 text-normal font-medium text-[#D5AD45] focus:outline-none rounded-lg border border-[#D5AD45] hover:bg-[#D5AD45] hover:text-black focus:z-10 focus:ring-1 focus:ring-gray-200 tracking-wider"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </MotionEffect>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;

{
  /* <div className="bg-[url('/assets/design-img/blog3.svg')] bg-cover flex justify-center items-center w-full h-[300px]">
<div>
 <p className='font-thin text-[1rem] text-white text-center italic'>NOVEMBER 22, 2023</p>
 <hr class="w-48 h-0.5 mx-auto my-2 bg-gray-100 border-0 rounded md:my-5"/>
 <h2 className="mb-4 text-2xl tracking-normal font-bold text-white text-center">HOW TO BEAT SMALL BUSINESS
     BANKRUPTCY READ MORE</h2>          
</div>           
</div>
<div className="bg-[url('/assets/design-img/blog1.svg')] bg-cover flex justify-center items-center w-full h-[300px]">
<div>
 <p className='font-thin text-[1rem] text-white text-center italic'>NOVEMBER 22, 2023</p>
 <hr class="w-48 h-0.5 mx-auto my-2 bg-gray-100 border-0 rounded md:my-5"/>
 <h2 className="mb-4 text-2xl tracking-normal font-bold text-white text-center">HOW TO BEAT SMALL BUSINESS
     BANKRUPTCY READ MORE</h2>          
</div>           
</div>
<div className="bg-[url('/assets/design-img/blog2.svg')] bg-cover flex justify-center items-center w-full h-[300px]">
<div>
 <p className='font-thin text-[1rem] text-white text-center italic'>NOVEMBER 22, 2023</p>
 <hr class="w-48 h-0.5 mx-auto my-2 bg-gray-100 border-0 rounded md:my-5"/>
 <h2 className="mb-4 text-2xl tracking-normal font-bold text-white text-center">HOW TO BEAT SMALL BUSINESS
     BANKRUPTCY READ MORE</h2>          
</div>           
</div>
<div className="bg-[url('/assets/design-img/blog1.svg')] bg-cover flex justify-center items-center w-full h-[300px]">
<div className='mx-auto'>
 <p className='font-thin text-[1rem] text-white text-center italic'>NOVEMBER 22, 2023</p>
 <hr class="w-48 h-0.5 mx-auto my-2 bg-gray-100 border-0 rounded md:my-5"/>
 <h2 className="mb-4 text-2xl tracking-normal font-bold text-white text-center">HOW TO BEAT SMALL BUSINESS
     BANKRUPTCY READ MORE</h2>  
 <button className='inline'>demo</button>                
</div>
   
</div> */
}
