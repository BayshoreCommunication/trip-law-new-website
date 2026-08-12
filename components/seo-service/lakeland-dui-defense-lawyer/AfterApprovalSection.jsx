'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultBenefits = [
  {
    title: 'Complete Court-Ordered Penalties',
    description:
      'Fulfill all court ordered penalties following a DUI conviction or a negotiated resolution is important. Penalties may include jail time, community service, probation and fines. You can avoid probation violations and hearings through completing all tasks within deadline. Courts expect full compliance with every condition listed in the final judgment.',
    icon: (
      <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Complete DUI School Requirements',
    description:
      'Florida frequently requires DUI school before restoring full driving privileges after qualifying cases. The required program depends upon the driver\'s record and the specific court order. Program completion certificates must reach the proper agencies before license reinstatement continues. Delays often extend suspension periods even after every other requirement finishes.',
    icon: (
      <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
      </svg>
    ),
  },
  {
    title: 'Resolve Any Administrative License Suspension',
    description:
      'The criminal case and administrative license suspension remain separate under Florida law. Finishing one process does not automatically resolve the other. Drivers should confirm every DHSMV requirement before assuming driving privileges have returned. Outstanding administrative issues may continue even after the criminal court closes the case.',
    icon: (
      <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2v4a2 2 0 01-2 2H9a2 2 0 01-2-2V9a2 2 0 012-2h6z" />
      </svg>
    ),
  },
  {
    title: 'License Reinstatement Steps With the DHSMV',
    description:
      'License reinstatement usually requires satisfying every court order and DHSMV condition before approval. Drivers may also need proof of DUI school completion and insurance documentation fees. Some drivers must install an ignition interlock device before receiving restricted driving privileges. The exact requirements depend upon the offense history and court order.',
    icon: (
      <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 01-2-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'DUI Record Sealing and Expungement',
    description:
      'Many drivers ask whether a DUI conviction can disappear from their criminal history. Florida law places strict limits on sealing and expungement eligibility for DUI cases. A DUI conviction generally can\'t be sealed because it requires adjudication of guilt. Some reduced charges, such as qualifying reckless driving cases with withheld adjudication, may create different eligibility rules depending upon the final disposition. Trip Law reviews the final outcome carefully before discussing available record relief options.',
    icon: (
      <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

const AfterApprovalSection = ({
  tagline = 'AFTER CASE RESOLUTION',
  title = 'What To Expect After Resolved DUI Case',
  subtitle = 'Completing every obligation on time helps restore driving privileges and prevents additional penalties. Trip Law continues guiding clients through the final stages so every requirement receives proper attention.',
  benefits = defaultBenefits,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#FAFBFD] text-slate-800 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center text-center mb-14 sm:mb-16"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-red-700 font-bold text-xs sm:text-sm tracking-widest uppercase">
              {tagline}
            </span>
            <div className="h-[2px] w-12 bg-red-700 rounded-full" />
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1829] tracking-tight max-w-4xl leading-[1.18] mb-4 ${bitter.className}`}>
            {title}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-normal max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {benefits.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
              className="bg-white rounded-3xl p-7 sm:p-8 shadow-xl shadow-slate-200/70 border border-slate-100 flex flex-col items-start text-left hover:shadow-2xl hover:border-red-700/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-red-700/10 border border-red-700/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              <h3 className={`text-xl font-bold text-[#0B1829] mb-3 group-hover:text-red-700 transition-colors duration-300 ${bitter.className}`}>
                {item.title}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AfterApprovalSection;
