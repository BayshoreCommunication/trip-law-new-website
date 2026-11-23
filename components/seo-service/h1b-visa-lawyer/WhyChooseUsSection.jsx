'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const pillars = [
  {
    title: 'A Track Record You Can Verify',
    desc: 'Trip Law has filed quite a few H1B petitions for US employers since 2020. Clients rate Trip Law 4.4 out of 5 on Google, across 62 reviews. Read them before you book.',
  },
  {
    title: 'Both Sides of the Filing',
    desc: "Employers get compliance reviews, LCA strategy, RFE responses, amendments and extension tracking. Workers get eligibility reviews, stamping guidance, family planning and green card strategy. Handling both sides keeps records consistent. A start date on the employer's forms matches the start date on the worker's forms.",
  },
  {
    title: 'A Practice That Covers Your Next Step',
    desc: 'Our practice spans business immigration, family based cases, citizenship, asylum and deportation defense. Plans change. A worker may move toward a green card or a family petition and the firm already knows the history.',
  },
  {
    title: 'Direct Communication and Easy Booking',
    desc: "You'll talk to your attorney, not a call center. Our office is open Monday through Friday, 7 a.m. to 7 p.m., so you can reach us before or after work. You can also book a consultation online.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#FAFBFD] text-slate-800 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1829] tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            Why Employers and Foreign Workers Choose Hardam Tripathi as Their H1B Visa Lawyer
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            US companies hire H1B workers in healthcare, technology, engineering, finance and education. Every case depends on the industry, the job and the deadline. We build each filing around those facts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {pillars.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white border border-slate-200 hover:border-red-700/50 rounded-2xl p-7 sm:p-9 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-700/10 border border-red-700/30 flex items-center justify-center text-red-700 font-bold text-lg mb-6">
                  ★
                </div>
                <h3 className={`text-xl sm:text-2xl font-bold text-[#0B1829] mb-3 ${bitter.className}`}>
                  {item.title}
                </h3>
                <div className="h-[2px] w-12 bg-red-700 rounded-full mb-4" />
                <p className="text-slate-600 text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
