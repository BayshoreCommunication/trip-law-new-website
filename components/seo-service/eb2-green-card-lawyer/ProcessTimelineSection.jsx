'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const ProcessTimelineSection = ({
  badgeText = 'PROCESS TIMELINE',
  title = 'How Long You Should Expect for an EB-2 Green Card Application',
  subtitle = 'Multiple agencies, multiple stages, and the total time depends on your pathway, your country of birth, and how busy each agency happens to be. What follows is all about a general sense of the process.',
  timelineItems = [
    {
      step: 'Stage 1',
      title: 'PERM Labor Certification Stage',
      desc: 'For employer-sponsored cases needing PERM, this starts with supervised recruitment, then Form ETA-9089 goes to the Department of Labor (DOL). Processing here has ranged anywhere from several months to well over a year, depending on workload. Audits, which the DOL can trigger on any application, can add more time to the process. Since this all happens before I-140 gets filed, delays here push everything back.',
    },
    {
      step: 'Stage 2',
      title: 'Form I-140 Petition Stage',
      desc: 'Once PERM clears, or right away for NIW cases, Form I-140 goes to USCIS. Standard processing has run from several months to over a year, depending on the service center. Premium processing is available for most EB-2 filings, NIW included. As of March 1, 2026, that fee sits at $2,965, filed on Form I-907. Standard EB-2 cases under premium processing get a decision in 15 business days. NIW cases take up to 45 business days.',
    },
    {
      step: 'Stage 3',
      title: 'Priority Date Waiting Period',
      desc: 'An approved I-140 sets your priority date, either the date USCIS received the I-140 for NIW cases, or the date DOL accepted the PERM filing for employer-sponsored ones. Before the final stage can start, that date has to be current on the Visa Bulletin. Most countries see EB-2 dates that are already current. India and China face real backlogs, sometimes stretching years. Check the Visa Bulletin monthly once I-140 is approved, and keep checking.',
    },
    {
      step: 'Stage 4',
      title: 'Adjustment of Status or Consular Processing',
      desc: "Once your date is current, you move into the last stage, either I-485 if you're in the U.S., or consular processing if you're completing things abroad. Each has its own timeline. Adjustment involves biometrics, background checks, sometimes an interview. Consular processing runs through the National Visa Center before the actual visa interview at an embassy or consulate.",
    },
    {
      step: 'Stage 5',
      title: 'Final Green Card Decision',
      desc: 'Start to finish, employer-sponsored cases without backlog issues typically run 2 to 3 years. Applicants from high-demand countries waiting on a current priority date can face a decade or more. NIW cases from countries without backlogs often move faster, since PERM gets skipped entirely. Nobody can promise a specific timeframe. Check current USCIS processing times and the latest Visa Bulletin regularly throughout the case.',
    },
  ],
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#061224] text-white overflow-hidden">
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
            {subtitle}
          </p>
        </div>

        {/* Timeline Items */}
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
