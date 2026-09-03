'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const FeesWaiverSection = ({
  tagline = '2026 USCIS FEES & COSTS',
  title = 'L1 Visa Filing Fees and USCIS Costs for 2026 Applicants',
  description = 'Government fees are set by federal law and can change without notice. Official USCIS or Department of State rates at the time of your filing always take precedence.',
  fees = [
    {
      title: 'Form I-129 Base Filing Fee',
      desc: '$1,385 for standard large employers (more than 25 full time employees). Or a reduced rate of $695 for small employers (25 or fewer full time employees) and qualifying nonprofits.',
    },
    {
      title: 'Asylum Program Fee',
      desc: 'An added $600 for large employers or $300 for small employers. Registered 501(c)(3) nonprofits are completely exempt ($0) from this fee.',
    },
    {
      title: 'Fraud Prevention & Detection Fee',
      desc: 'A flat and mandatory fee of $500 applied to all corporate initial petitions or change of employer filings.',
    },
    {
      title: 'Public Law 114-113 Statutory Fee',
      desc: 'An additional $4,500 fee applies only if the sponsoring company employs 50 or more people in the U.S. and over 50% of those employees hold H-1B or L1 status.',
    },
    {
      title: 'DS 160 Visa Application (MRV) Fee',
      desc: '$205 per applicant paid online to the U.S. Department of State. This applies to the primary executive/manager and to each L2 spouse or dependent child.',
    },
    {
      title: 'Visa Integrity Fee',
      desc: 'A mandatory and nonwaivable federal processing charge of $250 per principal applicant.',
    },
    {
      title: 'Border Crossing I-94 Fee',
      desc: 'An operational travel arrival fee of $24 per traveler due at the U.S. Port of Entry.',
    },
    {
      title: 'Visa Reciprocity or Issuance Fee',
      desc: 'Varies from $0 to several hundred dollars strictly based on the applicant’s country of citizenship.',
    },
    {
      title: 'Premium Processing of Form I-907',
      desc: 'An optional $2,965 fee that forces USCIS to review and issue an adjudicative decision within 15 business days.',
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
