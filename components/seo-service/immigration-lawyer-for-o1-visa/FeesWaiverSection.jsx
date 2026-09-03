'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const FeesWaiverSection = ({
  tagline = '2026 USCIS FEES & COSTS',
  title = 'O-1 Visa Fees and Costs for 2026 Applicants',
  description = 'What a case actually costs depends on the filing structure, whether premium processing gets used, and what services are needed along the way. Here are the main categories for 2026.',
  fees = [
    {
      title: 'Form I-129 Filing Fee',
      desc: 'The USCIS filing fee currently sits at $1,055 for standard employers and $530 for small employers and nonprofits that qualify for the reduced rate. Confirm these numbers directly with USCIS before filing, since government fees do change.',
    },
    {
      title: 'Premium Processing Fee',
      desc: 'For petitions postmarked on or after March 1, 2026, premium processing runs $2,965. This is optional and guarantees a decision within 15 business days.',
    },
    {
      title: 'Visa Application Fee',
      desc: 'Applicants completing processing abroad need to pay the applicable Department of State visa fee, worth confirming on their website before scheduling an interview.',
    },
    {
      title: 'Advisory Opinion Costs',
      desc: 'For O-1B classifications requiring an advisory opinion, costs vary depending on the field and which organization is involved.',
    },
    {
      title: 'Translation and Documentation Costs',
      desc: 'Documents in another language need certified translation, and costs shift based on volume and language.',
    },
    {
      title: 'Attorney Fees',
      desc: 'Legal fees depend on case complexity, how many criteria need addressing, the petitioner structure, and the scope of services involved. TripLaw provides a written, flat fee agreement upfront so clients know their costs before anything begins.',
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
