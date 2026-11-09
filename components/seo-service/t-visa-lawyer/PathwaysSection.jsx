'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultPathways = [
  {
    title: 'Stage 1: Initial Eligibility Review and Case Assessment',
    desc: 'First, Attorney Hardam Tripathi reviews your specific situation. We check three primary criteria: details of your trafficking, your current presence in the U.S. and any urgent immigration threats. Prior removal orders, criminal records or past inconsistent filings require special attention. Our team identifies these critical issues immediately to protect you from deportation.',
  },
  {
    title: 'Stage 2: Personal Declaration and Supporting Evidence Preparation',
    desc: 'Next, we help you write your personal declaration. This document must give a completely truthful account of your trafficking experience. Our team focuses on clarity, clear timeline and consistency with your existing records. We identify any missing documents early. This allows us to gather strong alternative evidence. For example witness statements or expert medical reports to support your story.',
  },
  {
    title: 'Stage 3: Form I 914 and Applicable Supporting Applications',
    desc: 'We then prepare your core application package. Primary applicants must submit Form I 914 for T Nonimmigrant Status along with a personal statement. Depending on your background, you will need extra forms. This includes Form I 192 to waive inadmissibility, Form I 914 Supplement to protect your family members. And Form I 765 for your work permit.',
  },
  {
    title: 'Stage 4: Filing Application With USCIS',
    desc: 'Our legal team performs a rigorous quality check on your completed package. We verify all required signatures, use the latest form versions and confirm your automatic fee exemptions. We submit the complete package to USCIS and track proof of delivery. Flawless initial filing prevents administrative rejections. However USCIS may still ask for more data later.',
  },
  {
    title: 'Stage 5: USCIS Review, Bona Fide Determination and Additional Evidence Requests',
    desc: 'USCIS reviews your application for completeness and basic eligibility. Under current regulations, officers check your background results and your signed personal statement. If your case passes this step, you receive Bona Fide Determination (BFD). BFD can grant you deferred action and work permit. Yet it’s not final approval. USCIS may also issue a Request for Evidence (RFE). This step may pause your case until we reply.',
  },
  {
    title: 'Stage 6: Final Decision and Available Next Steps',
    desc: 'Finally, USCIS issues a formal decision on your application. An approval grants you official T 1 nonimmigrant status for four years. If USCIS issues denial, we immediately review the notice to choose the best remedy and meet strict appeal deadlines. Never travel outside the country and change your filings. Or assume you have permission to work without talking to Attorney Hardam Tripathi first.',
  },
];

const PathwaysSection = ({
  tagline = 'T-VISA APPLICATION STAGES',
  title = 'How Our Attorney Helps With Your T Visa Application Process',
  subtitle1 = 'The nonimmigrant visa process usually goes through 6 stages.',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/pathways-bg.png',
  pathways = defaultPathways,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#061224] text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={bgImage}
          alt="Pathways Section Background"
          fill
          sizes="100vw"
          quality={90}
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030914] via-[#061224]/90 to-[#030914]" />
      </div>

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-red-500 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
            {tagline}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            {title}
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {subtitle1}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pathways.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#0B1829]/90 border border-slate-700/60 hover:border-red-700/60 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-700/20 border border-red-700/40 flex items-center justify-center text-red-500 font-bold text-base mb-5">
                  0{idx + 1}
                </div>
                <h3 className={`text-lg sm:text-xl font-bold text-white mb-3 ${bitter.className}`}>
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

export default PathwaysSection;

