'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultEligibilityLeft = [
  "Share your name and driver's license along with any required ID. Additional statements may be included in officer's report and could serve as evidence later.",
  'Post bond or await your first court appearance. Release conditions vary by arrest circumstances.',
  'Write everything you remember immediately. This includes stop location, officer questions, weather, traffic and roadside tests.',
  'Find out where your vehicle was taken. Contact the towing company and gather paperwork to avoid rising storage charges.',
  'Record if you completed or refused chemical testing. Breath test results or refusals impact license suspension and legal strategy.',
];

const defaultEligibilityRight = [
  'In Florida, you have ten days to request a DHSMV review after a DUI arrest. Missing it leads to automatic license suspension.',
  "Document the arresting officer's information including officer's name, badge number and agency.",
  'Understand your temporary driving permit. It typically lasts ten days post-arrest if you qualify under Florida law.',
  'Consult with DUI attorney prior to your arraignment. Early legal advice usually provides less serious penalties and consequences.',
];

const EligibilitySection = ({
  title = "Arrested for DUI in Lakeland? Here's What to Do in the First 24 Hours",
  subtitleBold = '',
  description = "Did you refuse the breathalyzer at your Lakeland traffic stop? Florida's implied consent law triggers an automatic license suspension within ten days and Polk County courts move fast on DUI cases. Our lakeland dui defense lawyer challenges the stop, fights the suspension and protects your record from day one.",
  cardTitle = 'Immediate Action Steps After Arrest',
  cardSubtitle = 'Critical 24-hour guidelines for Lakeland DUI arrests:',
  eligibilityListLeft = defaultEligibilityLeft,
  eligibilityListRight = defaultEligibilityRight,
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/eligibility-bg.png',
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#FCFDFE] text-slate-800 overflow-hidden">
      {bgImage && (
        <div className="absolute inset-0 pointer-events-none z-0">
          <Image
            src={bgImage}
            alt="Lakeland DUI Defense Eligibility Background"
            fill
            quality={90}
            priority
            className="object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-white/70" />
        </div>
      )}

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col items-start text-left"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-red-700 font-bold text-xs sm:text-sm tracking-widest uppercase">
                FIRST 24 HOURS GUIDE
              </span>
              <div className="h-[2px] w-12 bg-red-700 rounded-full" />
            </div>

            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1829] tracking-tight leading-[1.18] mb-4 ${bitter.className}`}>
              {title}
            </h2>

            <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />

            <p className="text-slate-900 font-semibold text-base sm:text-lg mb-4 leading-relaxed">
              {subtitleBold}
            </p>

            <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
              {description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-9 md:p-10 shadow-2xl shadow-slate-200/80 border border-slate-100 flex flex-col text-left">
              <h3 className={`text-2xl sm:text-3xl font-bold text-[#0B1829] mb-2 ${bitter.className}`}>
                {cardTitle}
              </h3>
              <p className="text-red-700 font-semibold text-sm sm:text-base mb-3">
                {cardSubtitle}
              </p>
              <div className="h-[2px] w-14 bg-red-700 rounded-full mb-8" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-4">
                  {eligibilityListLeft.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-700 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 shadow-md shadow-red-900/20">
                        ✓
                      </div>
                      <span className="text-slate-700 font-medium text-xs sm:text-sm leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-4">
                  {eligibilityListRight.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-700 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 shadow-md shadow-red-900/20">
                        ✓
                      </div>
                      <span className="text-slate-700 font-medium text-xs sm:text-sm leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;
