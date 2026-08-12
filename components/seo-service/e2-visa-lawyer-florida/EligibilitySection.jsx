'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultEligibilityLeft = [
  'You need citizenship in a country with an active E2 treaty.',
  'You share the same nationality as the principal investor or owning entity when applying as an essential employee.',
  'You are committing a substantial capital amount and investing "at-risk" funds.',
];

const defaultEligibilityRight = [
  'You need 50% ownership or operational control to run the business.',
  'The enterprise must be non-marginal to earn more than a bare living for your household.',
  'You can apply at a consulate abroad or change status from inside the U.S.',
];

const EligibilitySection = ({
  title = 'Ready to Apply for an E2 Visa? Check Your Eligibility First',
  subtitleBold = 'Are you sure your treaty investor application meets every federal standard?',
  description = 'Our e2 visa lawyer florida at Trip Law guides international entrepreneurs from initial business structure to final visa approval. We review your capital source, ownership structure, and business plan before immigration officers do.',
  cardTitle = 'E2 Visa Core Eligibility Requirements',
  cardSubtitle = 'Key criteria every treaty investor must satisfy:',
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
            alt="E2 Visa Eligibility Background"
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
                ELIGIBILITY REQUIREMENTS
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
