'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';
import { U_VISA_IMAGE_METADATA } from './uVisaImagesMeta';

const bitter = Bitter({ subsets: ['latin'] });

const requirements = [
  'You must have been a victim of a qualifying crime.',
  'You must have severely suffered physical or mental abuse from the criminal activity.',
  'You must possess specific, detailed knowledge of the facts and circumstances of the crime.',
  'Special rules may apply for being unable to provide information because of underage (below 16) and incapacity.',
  'You may be eligible for a U Visa if you are the parent of a child victim.',
  'You must have been helpful, currently helpful or likely to be helpful to police officers, county sheriffs, prosecutors, judges or other investigative authorities.',
  'The criminal activity generally must have occurred in the United States or its territories or violated U.S. law.',
  'Your petition generally must include a properly completed Form I 918, Supplement B. Also need a signature from an authorized certifying official.',
  'You must be legally admissible or obtain a discretionary waiver of inadmissibility for past criminal or immigration violation history.',
];

const EligibilitySection = () => {
  const { eligibilityPathwaysBg } = U_VISA_IMAGE_METADATA;

  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#F8FAFC] text-slate-800 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={eligibilityPathwaysBg.src}
          alt={eligibilityPathwaysBg.alt}
          title={eligibilityPathwaysBg.title}
          fill
          sizes="100vw"
          quality={80}
          className="object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-slate-50/60" />
      </div>

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1829] tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            U Visa Eligibility Requirements: Who Qualifies?
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
            Did you suffer physical and mental harm from a qualifying crime in the United States? You may qualify for U nonimmigrant status. Congress established the U nonimmigrant visa under the Victims of Trafficking and Violence Protection Act. It’s to strengthen law enforcement investigative capacity. Also provide humanitarian protection to crime victims.
          </p>
          <p className="text-slate-700 font-medium text-base sm:text-lg leading-relaxed">
            However there are a few more requirements you need to be eligible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {requirements.map((item, idx) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-red-700 text-white flex items-center justify-center mt-0.5 shadow-sm shadow-red-700/30">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;
