'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultRequirements = [
  {
    title: 'Physical Presence in the United States',
    desc: 'You must already be in the U.S. or at a port of entry.',
  },
  {
    title: 'Well Founded Fear of Persecution',
    desc: 'You must show past persecution or a well founded fear of future persecution if returned to your home country.',
  },
  {
    title: 'Protected Ground',
    desc: 'The persecution must be on account of at least one of five protected grounds: race, religion, nationality, membership in a particular social group or political opinion.',
  },
  {
    title: 'Government Inability or Unwillingness',
    desc: 'The harm must be inflicted by the government of your home country or by individuals or groups the government cannot or will not control.',
  },
  {
    title: 'Inadmissibility Bars',
    desc: 'You must not be subject to any mandatory bars to asylum, including certain criminal convictions, security risks, persecution of others or the firm resettlement bar.',
  },
];

const EligibilitySection = ({
  title = 'Asylum Eligibility Requirements: Who Qualifies?',
  subtitleBold = 'Did you face or do you fear serious harm in your home country? You may qualify for asylum. You can apply for asylum affirmatively with USCIS. If you face removal proceedings, you can apply defensively with the immigration court.',
  description = 'You must be physically present in the United States or at a port of entry to apply. However you must meet several other requirements to qualify.',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/eligibility-bg.png',
  requirements = defaultRequirements,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#F8FAFC] text-slate-800 overflow-hidden">
      {/* Background Image with subtle overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={bgImage}
          alt="Asylum Eligibility Section Background Image"
          fill
          sizes="100vw"
          quality={90}
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-50/40" />
      </div>

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Subtitle & Overview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col items-start text-left"
          >
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1829] tracking-tight leading-[1.25] mb-4 ${bitter.className}`}>
              {title}
            </h2>

            <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />

            {subtitleBold && (
              <p className="text-slate-900 font-semibold text-base sm:text-lg leading-relaxed mb-5">
                {subtitleBold}
              </p>
            )}

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              {description}{' '}
              Our{' '}
              <Link href="/asylum-lawyer-lakeland" className="text-red-700 font-semibold hover:underline">
                asylum lawyer lakeland
              </Link>{' '}
              team evaluates each requirement before preparing your application.
            </p>
          </motion.div>

          {/* Right Column: Requirement Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-7 w-full"
          >
            <div className="flex flex-col gap-4">
              {requirements.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-red-700/10 border border-red-700/30 flex items-center justify-center text-red-700 font-bold shrink-0 mt-0.5">
                      0{idx + 1}
                    </div>
                    <div>
                      <h3 className={`text-lg sm:text-xl font-bold text-[#0B1829] mb-2 ${bitter.className}`}>
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;
