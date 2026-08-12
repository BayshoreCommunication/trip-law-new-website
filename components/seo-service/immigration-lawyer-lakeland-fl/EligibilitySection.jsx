'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultEligibilityLeft = [
  'Determine the visa or immigration path that suits your situation and future goals.',
  'Review your personal immigration history to ensure there are no bars to immigration or past violations.',
  'Assemble the evidentiary documentation necessary to establish eligibility for your chosen immigration benefit.',
];

const defaultEligibilityRight = [
  'Verify that your current non-immigrant status permits the specific adjustment or application you intend to submit.',
  'Assess your capacity to meet the financial sponsorship obligations or filing fee structures mandated by the government for your case type.',
];

const EligibilitySection = ({
  title = 'Ready to Start Your Immigration Case? Check Your Eligibility First',
  subtitleBold = 'Are you sure your application meets every federal immigration standard?',
  description = 'Our immigration lawyer lakeland fl at Trip Law guides applicants through initial case evaluation to final USCIS approval. We review your full history and evidence before federal officers do.',
  cardTitle = 'Essential Immigration Eligibility Checklist',
  cardSubtitle = 'Before submitting any petition to USCIS, confirm these core requirements:',
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
            alt="Immigration Lawyer Lakeland FL Eligibility Background"
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
                CASE ELIGIBILITY CHECK
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
