'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const PreparationSection = ({
  tagline = 'ATTORNEY PREPARATION',
  title = 'Interview and Application Preparation Strategy',
  description = 'Our legal team prepares candidates for every stage of consular review and government inspection.',
  prepSteps = [
    {
      title: 'Mock Consular Interview Sessions and Guidance',
      desc: 'We conduct realistic mock interview coaching sessions to prepare foreign candidates for consular questioning. Transferees learn how to explain executive oversight or specialized technical knowledge clearly and concisely. We coach candidates to avoid complex jargon while delivering direct answers to consular officers. Confidence during interview questioning reduces administrative processing delays at foreign embassies and consulates.',
    },
    {
      title: 'DS 160 and Petition Consistency Review',
      desc: 'Consular officers cross reference answers on Form DS 160 with the approved USCIS petition paperwork. Discrepancies in reported foreign salaries, employment start dates or duties raise immediate fraud suspicions. Our legal team conducts exhaustive audits to reconcile all DS 160 responses with Form I-129. Perfect alignment across all submitted forms protects your transferee from unexpected visa refusals.',
    },
    {
      title: 'Employee Role Explanation Preparation',
      desc: 'Candidates must articulate their precise daily operational duties and organizational reporting structure effectively. Managerial candidates should clearly describe their direct professional subordinates and high level decision making authority. Specialized knowledge workers must explain how their proprietary technical skills benefit U.S. corporate operations. Proper role preparation ensures candidates convey authority and specialized expertise during consular interviews.',
    },
    {
      title: 'Addressing Red Flags and Inadmissibility Risks',
      desc: 'Prior visa refusals, employment gaps or past overstays generate targeted questions during consular reviews. We identify potential background issues early to build clear, documented explanations before the interview. Our attorneys supply detailed legal briefs addressing complex immigration histories directly to consular posts. Proactive issue management prevents administrative holds under Section 221g or unexpected visa denials.',
    },
    {
      title: 'Interview Document Binder Assembly',
      desc: 'We assemble customized consular document binders organized for fast reference during rapid interview questioning. Binders contain Form I-797 approval notices, Form I-129 copies, corporate tax records and lease agreements. Organized evidence allows candidates to produce requested documentation immediately when asked by officers. Thorough document presentation builds strong credibility and ensures a smoother consular visa issuance.',
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
          {prepSteps.map((item, idx) => (
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
                  0{idx + 1}
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

export default PreparationSection;
