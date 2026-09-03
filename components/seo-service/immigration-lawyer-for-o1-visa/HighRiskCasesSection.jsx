'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const HighRiskCasesSection = ({
  badgeText = 'COMPLEX & HIGH-RISK CASES',
  title = 'How Complex and High-Risk O-1 Cases Affect Visa Applications',
  description = "Not everyone comes into this process with a clean record. The review of a petition can be influenced by any issues that may have arisen with USCIS, visa issues or other legal concerns. It's better to be aware of those risks before you file, rather than after.",
  riskCases = [
    {
      title: 'Previous USCIS Petition Denials',
      desc: "Denial of a previous petition does preserve a record that can be considered on a subsequent petition. It's important to clearly understand the reason for the previous denial and to address it directly in this instance.",
    },
    {
      title: 'Previous Visa Refusals',
      desc: 'If a previous visa application was denied, for any reason, it may be required to be provided on the DS-160 and may impact the evaluation of the current visa application. The main point is what actually happened prior to that earlier denial.',
    },
    {
      title: 'Immigration Status Violations',
      desc: 'Working without authorization or stepping outside the terms of a prior visa can complicate things considerably. It will not automatically rule out an O-1 filing, but it calls for a closer look before moving forward.',
    },
    {
      title: 'Unlawful Presence in the United States',
      desc: 'Accrued unlawful presence can trigger 3 year or 10 year bars upon departure, depending on how long it lasted. If this applies to you, the effect on consular processing and future entry needs sorting out early.',
    },
    {
      title: 'Criminal History or Inadmissibility Concerns',
      desc: 'Certain convictions or legal matters can create grounds of inadmissibility. These require a thorough legal review before filing, since they can affect entry into the United States regardless of how strong the underlying petition is.',
    },
    {
      title: 'Pending Removal or Immigration Court Proceedings',
      desc: 'Active removal proceedings before the Executive Office for Immigration Review, or a final removal order, add real complexity. USCIS and the immigration courts operate independently, so an approved O-1 petition will not automatically pause removal proceedings.',
    },
  ],
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#040B17] text-white overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {riskCases.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#091424]/90 border border-slate-700/60 hover:border-red-700/60 rounded-2xl p-6 sm:p-7 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-red-700/20 border border-red-700/40 flex items-center justify-center text-red-500 font-bold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className={`text-base sm:text-lg font-bold text-white leading-snug ${bitter.className}`}>
                  {item.title}
                </h3>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighRiskCasesSection;
