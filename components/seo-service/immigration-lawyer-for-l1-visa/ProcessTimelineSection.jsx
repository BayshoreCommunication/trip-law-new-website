'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const ProcessTimelineSection = ({
  badgeText = 'PROCESS TIMELINE',
  title = 'How Long You Should Expect For L1 Visa Application Processing in Florida',
  subtitle = 'Processing times can vary considerably and depend on the petition’s path. These are general guidelines:',
  timelineItems = [
    {
      step: 'Stage 1',
      title: 'Standard USCIS Processing Timeline',
      desc: 'Standard processing for Form I-129 petitions currently ranges between two to six months. USCIS Service Centers process cases based on regional workload distributions and petition filing volumes. You receive Form I-797C receipt notices to track petition status updates online through USCIS. We track your case continuously to ensure government processing timelines remain on schedule.',
    },
    {
      step: 'Stage 2',
      title: 'Premium Processing With Form I-907',
      desc: 'For an extra fee USCIS guarantees an initial response within 15 calendar days. Premium processing accelerates initial government decisions without altering strict statutory legal approval standards. If USCIS issues an RFE, 15 business day processing clock pauses until your response arrives. We recommend premium processing for clients facing tight corporate start dates or travel schedules.',
    },
    {
      step: 'Stage 3',
      title: 'Consular Processing Timeline by Country',
      desc: 'Once USCIS approves the petition, foreign beneficiaries must schedule a consular visa interview. Consular interview wait times vary significantly across foreign countries from two weeks to months. Beneficiaries complete Form DS 160 and pay MRV application fees before attending consular appointments. Our team assists candidates with local embassy scheduling and interview preparation across all posts.',
    },
  ],
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#061224] text-white overflow-hidden">
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
            {subtitle}
          </p>
        </div>

        <div className="flex flex-col gap-6 max-w-5xl mx-auto">
          {timelineItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#0B1829] border border-slate-700/60 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-start shadow-xl"
            >
              <div className="flex-shrink-0 px-4 py-2 bg-red-700 text-white font-bold text-sm tracking-wider uppercase rounded-lg">
                {item.step}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className={`text-xl sm:text-2xl font-bold text-white ${bitter.className}`}>
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

export default ProcessTimelineSection;
