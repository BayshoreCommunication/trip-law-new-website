'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const WhyChooseUsSection = ({
  tagline = 'WHY CLIENTS CHOOSE TRIPLAW',
  title = 'Why Florida Employers and Workers Choose Trip Law for EB3 Visas',
  description = 'Trip Law maintains an unyielding commitment to direct legal supervision across all client cases. Lead Attorney Hardam Tripathi brings extensive legal experience gained within federal agencies.',
  features = [
    {
      title: 'Direct Licensed Attorney Supervision',
      desc: 'Attorney Hardam Tripathi personally oversees every EB-3 case filed through our firm, ensuring meticulous legal analysis and audit protection.',
    },
    {
      title: 'Federal Legal Agency Experience',
      desc: "Attorney Tripathi's background in federal agencies provides unique insight into government regulatory enforcement and evidentiary review.",
    },
    {
      title: 'Proven PERM Labor Certification Strategy',
      desc: 'We craft precise, wage-compliant job specifications designed to pass Department of Labor recruitment audits without costly re-filings.',
    },
    {
      title: 'Balanced Employer & Beneficiary Advocacy',
      desc: 'We align both sponsoring employer and foreign worker interests under a single unified legal strategy to achieve permanent residency.',
    },
    {
      title: 'Extensive RFE and Audit Defense',
      desc: 'Our firm prepares comprehensive legal briefs supported by verified evidence to overcome complex government RFEs and DOL audits.',
    },
  ],
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#061224] text-white overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-red-500 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
            {tagline}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            {title}
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#0B1829] border border-slate-700/60 hover:border-red-700/60 rounded-2xl p-7 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-700/20 border border-red-700/40 flex items-center justify-center text-red-500 font-bold text-lg mb-5">
                  ★
                </div>
                <h3 className={`text-xl font-bold text-white mb-3 ${bitter.className}`}>
                  {item.title}
                </h3>
                <p className="text-slate-300 text-base leading-relaxed">
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
