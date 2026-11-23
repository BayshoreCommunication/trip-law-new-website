'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';
import { U_VISA_IMAGE_METADATA } from './uVisaImagesMeta';

const bitter = Bitter({ subsets: ['latin'] });

const qualifyingCrimes = [
  'Abduction',
  'Abusive Sexual Contact',
  'Blackmail',
  'Domestic Violence',
  'Extortion',
  'False Imprisonment',
  'Felonious Assault',
  'Female Genital Mutilation',
  'Hostage',
  'Incest',
  'Involuntary Servitude',
  'Kidnapping',
  'Manslaughter',
  'Murder',
  'Obstruction of Justice',
  'Peonage',
  'Perjury',
  'Prostitution',
  'Rape',
  'Sexual Assault',
  'Sexual Exploitation',
  'Servitude',
  'Slave Trade',
  'Stalking',
  'Torture',
  'Trafficking',
  'Witness Tampering',
  'Unlawful Criminal Restraint',
];

const PathwaysSection = () => {
  const { eligibilityPathwaysBg } = U_VISA_IMAGE_METADATA;

  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#061224] text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={eligibilityPathwaysBg.src}
          alt={eligibilityPathwaysBg.alt}
          title={eligibilityPathwaysBg.title}
          fill
          sizes="100vw"
          quality={80}
          className="object-cover object-center opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030914] via-[#061224]/92 to-[#030914]" />
      </div>

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            Which Crimes are Qualifying Criminal Activities for U Visa?
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {qualifyingCrimes.map((crime, idx) => (
            <motion.div
              key={crime}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.02 }}
              className="bg-[#0B1829]/90 border border-slate-700/60 hover:border-red-700/60 rounded-xl p-4 sm:p-5 flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 group"
            >
              <div className="w-8 h-8 rounded-lg bg-red-700/20 text-red-500 flex items-center justify-center font-bold text-xs flex-shrink-0 group-hover:bg-red-700 group-hover:text-white transition-colors">
                •
              </div>
              <span className="text-slate-200 text-sm sm:text-base font-semibold group-hover:text-white transition-colors">
                {crime}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PathwaysSection;
