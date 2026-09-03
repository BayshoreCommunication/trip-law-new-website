'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const ProcessTimelineSection = ({
  badgeText = 'PROCESS TIMELINE',
  title = 'How Long You Should Expect for an O-1 Visa Application',
  subtitle = 'O-1 cases move through some stages. The total timeline depends on preparation, USCIS workload, whether premium processing gets used, and whether consular processing follows afterward.',
  timelineItems = [
    {
      step: 'Stage 1',
      title: 'Petition Preparation and Evidence Collection',
      desc: 'This stage depends largely on case complexity and how fast documentation, particularly expert letters and advisory opinions, can be gathered. Cases that start organized tend to move noticeably faster.',
    },
    {
      step: 'Stage 2',
      title: 'USCIS Petition Receipt',
      desc: 'After filing, USCIS sends a receipt notice confirming the petition is in the system. That notice includes a priority date and receipt number for tracking progress.',
    },
    {
      step: 'Stage 3',
      title: 'Standard USCIS Adjudication',
      desc: "The standard processing times change frequently and are posted on USCIS' website. They are subject to change with workload and staffing, so it's worth taking a few minutes and checking with USCIS first before filing.",
    },
    {
      step: 'Stage 4',
      title: 'Premium Processing',
      desc: 'Premium processing is available for O-1 filings on Form I-129. For petitions postmarked on or after March 1, 2026, with USCIS committing to a decision within 15 business days. If USCIS misses the window, the fee gets refunded and the case still moves forward on an expedited basis.',
    },
    {
      step: 'Stage 5',
      title: 'Consular Visa Processing',
      desc: 'People who have been granted a petition who live overseas will still need to go through the consular processing process at the U.S. Embassy or Consulate. Appointments can take a long time at various locations and depending on current demand, so check in early for a better chance of getting an appointment.',
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
