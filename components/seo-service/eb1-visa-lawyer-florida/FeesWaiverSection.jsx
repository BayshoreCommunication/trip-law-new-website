'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const FeesWaiverSection = ({
  tagline = '2026 USCIS FEES & COSTS',
  title = 'EB-1 Visa Fees and Costs for 2026 Applicants',
  description = 'Filing an EB-1 application involves several distinct federal government costs, and knowing them upfront helps applicants budget realistically for the whole process.',
  fees = [
    {
      title: 'Form I-140 Filing Fee',
      desc: 'The current USCIS filing fee for Form I-140 is $715.',
    },
    {
      title: 'Premium Processing Fee',
      desc: 'The current fee for eligible EB-1 Form I-140 petitions using premium processing is $2,805.',
    },
    {
      title: 'Form I-485 Fees',
      desc: 'The adjustment of status filing fee for applicants completing the process inside the United States is $1,440 for applicants aged fourteen and older.',
    },
    {
      title: 'Medical Examination Costs',
      desc: 'Immigration medical examination fees are generally separate from USCIS filing fees and are paid directly to the authorized civil surgeon performing the exam.',
    },
    {
      title: 'Immigrant Visa Processing Fees',
      desc: 'Applicants completing consular processing abroad must pay the applicable Department of State fee, currently $345.',
    },
    {
      title: 'USCIS Immigrant Fee',
      desc: 'A separate USCIS immigrant fee of $235 generally applies to consular immigrant visa processing to produce the physical green card.',
    },
    {
      title: 'Attorney Fees',
      desc: 'Legal fees depend on the specific EB-1 category, the volume of evidence required, accompanying family applications, and the overall complexity of the case.',
    },
  ],
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#F8FAFC] text-slate-800 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-red-700 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
            {tagline}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1829] tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            {title}
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fees.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-700/10 border border-red-700/30 flex items-center justify-center text-red-700 font-bold mb-4">
                  $
                </div>
                <h3 className={`text-lg font-bold text-[#0B1829] mb-3 ${bitter.className}`}>
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
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

export default FeesWaiverSection;
