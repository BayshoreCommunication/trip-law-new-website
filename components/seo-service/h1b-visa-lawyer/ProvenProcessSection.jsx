'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const steps = [
  {
    title: 'Step 1: Pre Filing Case Review',
    desc: 'We meet with the employer and the worker, together or in separate sessions. We test eligibility, flag risks and recommend a filing path in writing. You get an honest assessment, even when the answer is to wait.',
  },
  {
    title: 'Step 2: Documents and LCA Preparation',
    desc: 'We send a tailored checklist and collect records from both the employer and worker. Next we rewrite the job description and pull the prevailing wage from DOL data. Then we file the LCA and monitor certification through the DOL portal.',
  },
  {
    title: 'Step 3: Petition Preparation and Filing',
    desc: 'We prepare Form I 129, the H supplements, the support letter and organized exhibits. An indexed exhibit set lets the officer find each answer in seconds. You receive the USCIS receipt notice and a realistic decision timeline for planning.',
  },
  {
    title: 'Step 4: Case Monitoring and RFE Response',
    desc: 'We track the case daily and alert both parties after every status change. If USCIS issues an RFE, we start the response immediately and file it early.',
  },
  {
    title: 'Step 5: Approval and Next Steps',
    desc: 'We review each Form I 797 for errors on the day it arrives. Then we confirm the start date and explain work authorization conditions to both parties.',
  },
  {
    title: 'Step 6: Visa Stamping or Change of Status Support',
    desc: 'Workers abroad receive a document list, DS 160 guidance and interview preparation for their consulate. Workers inside the U.S. receive guidance on status, travel and re entry timing.',
  },
  {
    title: 'Step 7: Extensions, Amendments and Transfers',
    desc: 'We calendar your expiration date and open the extension file six months early. Role changes, new worksites and employer changes each receive a filing recommendation.',
  },
];

const ProvenProcessSection = () => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#FAFBFD] text-slate-800 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1829] tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            How Trip Law Handles Your H1B Case From Start to Finish
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We run every H1B case through seven steps, each with a clear deliverable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {steps.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className={`bg-white border border-slate-200/80 hover:border-red-700/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-300 ${
                idx === 6 ? 'md:col-span-2' : ''
              }`}
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-700/10 border border-red-700/30 flex items-center justify-center text-red-700 font-bold text-base mb-5">
                  0{idx + 1}
                </div>
                <h3 className={`text-xl font-bold text-[#0B1829] mb-3 ${bitter.className}`}>
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

export default ProvenProcessSection;
