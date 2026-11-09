'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultBenefits = [
  {
    title: 'Temporary Immigration Status',
    desc: (
      <>
        When you get approval for U nonimmigrant status, you can stay in the United States legally. This temporary stay usually lasts up to four years. Though you can request extensions under certain rules. Yet you’ll not grant lawful permanent residence or U.S. citizenship. But our{' '}
        <Link
          href="/immigration-lawyer-for-citizenship-lakeland"
          className="text-red-400 hover:text-red-300 underline font-medium"
        >
          immigration lawyer for citizenship
        </Link>{' '}
        can help you with this step.
      </>
    ),
  },
  {
    title: 'Employment Authorization',
    desc: 'U visa holders receive unrestricted work authorization (an EAD card). This EAD permits legal employment and Social Security number issuance. Some applicants may qualify for employment authorization after a favorable bona fide determination and deferred action. However eligibility depends on USCIS procedures and the individual case.',
  },
  {
    title: 'Eligibility for Certain Family Members',
    desc: 'Eligible U Visa principals may petition for qualifying family members. Includes a spouse or unmarried children under 21. For some principals under age 21, eligible family members may also include parents and unmarried siblings under 18.',
  },
  {
    title: 'Applying for a Green Card After U Status',
    desc: 'Some U nonimmigrants may apply for lawful permanent residence. For this you need to file Form I 485 after meeting the applicable requirements. However under INA § 245(m), U visa holders must maintain three years of continuous presence in the U.S. Other requirements apply. For example continued eligibility. Also no unreasonable refusal to assist with the qualifying criminal investigation or prosecution.',
  },
  {
    title: 'Continuing Immigration Obligations',
    desc: 'Keep your contact information current with USCIS. Attend required appointments. Respond to official notices and retain copies of filed documents. So you have maintained a continuous presence. You cannot leave the country for more than 90 days at one single time. Your total time outside the country cannot exceed 180 days overall. If your address changes, report directly to USCIS.',
  },
];

const BenefitsSection = ({
  tagline = 'U VISA STATUS ADVANTAGES',
  title = 'Benefits of U Visa Approval',
  description = "U nonimmigrant status offers temporary lawful status. Also some immigration benefits to eligible crime victims. The specific benefits depend on the status granted and the applicant's circumstances.",
  benefits = defaultBenefits,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#030914] text-white overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        {/* Section Header */}
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

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#091424]/90 border border-slate-700/60 hover:border-red-700/60 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-700/20 border border-red-700/40 flex items-center justify-center text-red-500 font-bold mb-4">
                  ✓
                </div>
                <h3 className={`text-xl font-bold text-white mb-3 ${bitter.className}`}>
                  {item.title}
                </h3>
                <div className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

