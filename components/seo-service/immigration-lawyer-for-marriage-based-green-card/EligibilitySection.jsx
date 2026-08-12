'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultRequirements = [
  'Your marriage must be legally recognized in the jurisdiction where it was performed.',
  'You must prove that your marriage is genuine (Bona Fide) and not for immigration.',
  'The petitioning partner must hold either American citizenship or lawful permanent resident status.',
  'Green card holders can sponsor their spouses through the specific family preference category.',
  'The sponsor must earn enough income to meet the federal poverty guidelines completely.',
  'The foreign spouse must maintain or properly adjust their legal standing within America.',
  'The applicant must not have any serious criminal records or severe immigration violations.',
];

const EligibilitySection = ({
  title = 'Are You Eligible To Apply? Check Requirement For Marriage Based Green Card',
  requirements = defaultRequirements,
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/eligibility-bg.png',
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-white text-slate-800 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={bgImage}
          alt="Eligibility Background"
          fill
          quality={90}
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-white/80" />
      </div>

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[2px] w-12 sm:w-16 bg-red-700 rounded-full" />
            <span className="text-red-700 font-bold text-xs sm:text-sm tracking-widest uppercase">
              ELIGIBILITY REQUIREMENTS
            </span>
            <span className="text-red-700 font-bold text-xs sm:text-sm">★</span>
            <div className="h-[2px] w-12 sm:w-16 bg-red-700 rounded-full" />
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1829] tracking-tight mb-4 ${bitter.className}`}>
            {title}
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {requirements.map((req, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-red-700/40 transition-all duration-300 flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-700/10 border border-red-700/30 flex items-center justify-center text-red-700 font-bold text-sm">
                ✓
              </div>
              <p className="text-slate-700 text-base leading-relaxed font-medium">
                {req}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;
