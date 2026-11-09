'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultRequirements = [
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

const EligibilitySection = ({
  tagline = 'U VISA ELIGIBILITY REQUIREMENTS',
  title = 'U Visa Eligibility Requirements: Who Qualifies?',
  description = 'Did you suffer physical and mental harm from a qualifying crime in the United States? You may qualify for U nonimmigrant status. Congress established the U nonimmigrant visa under the Victims of Trafficking and Violence Protection Act. It’s to strengthen law enforcement investigative capacity. Also provide humanitarian protection to crime victims. However there are a few more requirements you need to be eligible.',
  requirements = defaultRequirements,
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/eligibility-bg.png',
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#F8FAFC] text-slate-800 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={bgImage}
          alt="U Visa Eligibility Background"
          fill
          sizes="100vw"
          quality={90}
          className="object-cover object-center opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC]/90 via-[#F8FAFC]/95 to-[#F8FAFC]" />
      </div>

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-red-700 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
            {tagline}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1829] tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            {title}
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* Requirements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {requirements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-700/10 border border-red-700/30 flex items-center justify-center text-red-700 font-bold mb-4">
                  0{idx + 1}
                </div>
                <h3 className={`text-lg font-bold text-[#0B1829] mb-2 ${bitter.className}`}>
                  Requirement 0{idx + 1}
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {item}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Context Banner */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-md text-center max-w-4xl mx-auto">
          <p className="text-slate-700 text-base leading-relaxed">
            Unsure if your experience satisfies the qualifying criteria? Our{' '}
            <Link href="/u-visa-immigration-lawyer" className="text-red-700 font-semibold hover:underline">
              U Visa immigration lawyer
            </Link>{' '}
            conducts a thorough assessment of police records, personal statements, and waiver needs to establish statutory eligibility.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;

