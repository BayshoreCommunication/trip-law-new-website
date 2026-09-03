'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const FeesWaiverSection = ({
  tagline = '2026 USCIS FEES & COSTS',
  title = 'EB-2 Green Card Fees and Costs for 2026 Applicants',
  description = 'These figures reflect current government fees as of August 2026. Confirm everything against official USCIS and State Department sources before filing, since amounts do change.',
  fees = [
    {
      title: 'PERM Labor Certification Costs',
      desc: "PERM itself doesn't carry a government filing fee, but the employer covers recruitment costs, job postings, advertising, and related expenses. Attorney fees for managing this process sit separately and depend on how complex the case is.",
    },
    {
      title: 'Form I-140 Filing Fee',
      desc: 'Currently $715 for paper filing. Self-petitioning NIW applicants also owe a $300 Asylum Program Fee under the current rule. Employers with 25 or fewer full-time equivalent employees pay a reduced surcharge, and qualifying nonprofits may be exempt entirely.',
    },
    {
      title: 'Premium Processing Fee',
      desc: '$2,965 as of March 1, 2026, filed on Form I-907. Standard EB-2 petitions get a decision within 15 business days under premium processing. NIW petitions run up to 45 business days. This speeds up USCIS review only.',
    },
    {
      title: 'Form I-485 Adjustment of Status Fee',
      desc: 'Currently $1,440 per adult applicant, which includes the biometrics fee. Children under 14 filing concurrently with a parent pay $950. Separate fees apply if you also file Form I-765 ($260-$520 depending on situation) or Form I-131 ($630).',
    },
    {
      title: 'Consular Processing Fees',
      desc: "The Immigrant Visa Application processing fee sits at $345 per applicant, paid through the National Visa Center. There's also the $220 USCIS Immigrant Fee paid after visa issuance, plus medical exam fees set by local panel physicians.",
    },
  ],
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#F8FAFC] text-slate-800 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        {/* Section Header */}
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

        {/* Fees Cards Grid */}
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
