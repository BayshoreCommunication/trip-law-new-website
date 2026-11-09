'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

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

const PathwaysSection = ({
  tagline = 'QUALIFYING CRIMINAL ACTIVITIES',
  title = 'Which Crimes are Qualifying Criminal Activities for U Visa?',
  description = 'Federal law recognizes specific qualifying criminal activities under the Victims of Trafficking and Violence Protection Act. You may qualify for U nonimmigrant status if you were a victim of any of the following offenses:',
  crimes = qualifyingCrimes,
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/pathways-bg.png',
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#061224] text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={bgImage}
          alt="U Visa Qualifying Crimes Background"
          fill
          sizes="100vw"
          quality={90}
          className="object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030914] via-[#061224]/90 to-[#030914]" />
      </div>

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-red-500 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
            {tagline}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            {title}
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* Crimes Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {crimes.map((crime, idx) => (
            <motion.div
              key={idx}
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

        {/* Informational Callout */}
        <div className="mt-12 max-w-3xl mx-auto bg-red-950/30 border border-red-700/40 rounded-2xl p-6 text-center text-slate-300 text-sm sm:text-base leading-relaxed">
          <strong className="text-white">Note:</strong> Qualifying activities also include attempt, conspiracy, or solicitation to commit any of the above crimes, as well as substantially similar offenses under federal, state, or local criminal laws.
        </div>
      </div>
    </section>
  );
};

export default PathwaysSection;

