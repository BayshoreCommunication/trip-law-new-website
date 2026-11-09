'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultCases = [
  {
    title: 'Prior Deportation or Removal Orders',
    desc: 'Active removal order and deportation can affect your immigration position. You may have to apply for discretionary waivers under INA § 212(d)(14). You can submit it with Form I 212 to ask for permission to reapply for admission. We review your history. We’ll suggest you bring copies of removal orders, hearing notices and prior applications. If you have any communication with immigration authorities, bring records of them too.',
  },
  {
    title: 'Previous Immigration Violations or Unlawful Presence',
    desc: 'Illegal entries, overstays and misrepresentations can affect your admissibility. These immigration violations often require you to submit additional documentation. You may get a waiver using form I 192. However, an unlawful immigration status does not cancel your U Visa eligibility.',
  },
  {
    title: 'Criminal History and Inadmissibility Issues',
    desc: 'Arrests, charges, convictions, immigration fraud allegations or other crimes can create barriers for petitioning. Therefore we carefully review all your criminal history. The good part is broad discretionary standards allow USCIS to waive most criminal grounds in the public interest. So you have to provide us with complete and accurate information about prior incidents. An old charge or dismissed case can still require analysis. We suggest not to omit records based on an assumption about their importance.',
  },
  {
    title: 'Delayed Crime Reporting or Limited Documentation',
    desc: 'Some victims do not report a crime immediately. It’s because they experience fear, trauma, threats and language barriers. Another issue they worried about most is financial dependence or unexpected immigration consequences. A delayed report or incomplete agency file requires careful evidence review. We can assess the explanation for the delay. We check for existing official records and supporting documents.',
  },
  {
    title: 'Certification Challenges',
    desc: "An agency can decline a certification request. They even request more information or question its authority to sign. The certifying agency has control over completing Supplement B. in this case we engage in administrative outreach or check parallel legal options. We review the reason for a refusal and the agency's procedure. Then we decide if another agency with a proper connection to the matter can sign the certificate.",
  },
  {
    title: 'Complicated Family or Derivative Petitions',
    desc: "A qualifying family member generally needs the appropriate petition and supporting documentation. Age, marital status, the principal applicant's circumstances and timing can affect eligibility. We review family relationships and filing requirements separately. It includes any need for Form I 918, Supplement A.",
  },
];

const HighRiskCasesSection = ({
  badgeText = 'COMPLEX CASES & WAIVERS',
  title = 'Complex U Visa Cases and Legal Barriers We Handle',
  description = 'Some cases require additional planning because an applicant has a prior removal order, limited evidence, difficult immigration history or family members with separate eligibility questions. These issues deserve individual review before a filing strategy is selected.',
  cases = defaultCases,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#040B17] text-white overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-red-500 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
            {badgeText}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            {title}
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* 6 Barrier Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#091424] border border-slate-700/60 hover:border-red-700/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-700/20 border border-red-700/40 flex items-center justify-center text-red-500 font-bold mb-4">
                  0{idx + 1}
                </div>
                <h3 className={`text-xl font-bold text-white mb-3 ${bitter.className}`}>
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
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

export default HighRiskCasesSection;

