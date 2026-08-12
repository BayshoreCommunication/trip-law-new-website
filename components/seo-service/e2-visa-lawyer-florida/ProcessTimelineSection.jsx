'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultTimelineItems = [
  {
    number: '01',
    title: 'Consular Processing Timelines',
    description:
      'Applying at U.S. Consulate usually takes two to four months. The time you have to wait really depends on the consulate you go to. Some consulates are very busy so they are slower. The smaller ones are usually faster. Interview scheduling adds its own delay on top of document review. Extra time built into your plans ahead of a move pays off.',
    badge: '2 to 4 Months',
  },
  {
    number: '02',
    title: 'USCIS Change of Status Timelines',
    description:
      'Standard I-129 processing runs two to eight months without premium processing. Service centers handle volume differently, so timelines shift across the year. Your case stays pending until USCIS issues a decision, one way or the other. Travel abroad during this window ends your pending E2 status.',
    badge: '2 to 8 Months',
  },
  {
    number: '03',
    title: 'Domestic Change of Status',
    description:
      'Entrepreneurs already residing inside the United States can file directly with federal agencies. Standard domestic processing for this specific adjustment takes two to four months total. This path doesn\'t provide a travel stamp but updates your legal residency status.',
    badge: '2 to 4 Months',
  },
  {
    number: '04',
    title: 'Premium Processing Option',
    description:
      'Premium processing guarantees a decision, RFE or denial within 15 business days. This option applies only to I-129 filings inside the U.S. Approval odds stay the same either way. Only the speed of the answer changes. Investors facing a tight deadline often find the added fee worth paying.',
    badge: '15 Business Days',
  },
];

const ProcessTimelineSection = ({
  badgeText = 'PROCESS TIMELINE',
  title = 'How Long You Should Expect E2 Visa Application Processing to Take',
  subtitle = 'The treaty investor classification does not lead directly to American naturalization or citizenship. Investors must transition through specific permanent residency pathways.',
  items = defaultTimelineItems,
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
              {badgeText}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/70 border border-slate-100 flex flex-col justify-between text-left hover:shadow-2xl hover:border-red-700/30 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-3xl font-bold text-red-700 ${bitter.className}`}>
                    {item.number}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-700/10 border border-red-700/20 px-3.5 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>

                <h3 className={`text-xl sm:text-2xl font-bold text-[#0B1829] mb-3 ${bitter.className}`}>
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
                  {item.description}
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
