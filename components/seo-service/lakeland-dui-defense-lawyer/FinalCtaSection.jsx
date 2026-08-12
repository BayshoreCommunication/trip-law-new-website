'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const FinalCtaSection = ({
  tagline = 'GET STARTED TODAY',
  titlePrefix = 'Talk to a ',
  titleHighlight = 'Lakeland DUI Defense Lawyer',
  titleSuffix = ' Before Your Court Date',
  description = 'Every single day matters after a DUI arrest because legal deadlines begin immediately. You shouldn\'t wait until your first court appearance to plan your defense. Waiting limits your options regarding your driver license and future defense. Our lakeland dui defense lawyer at Trip Law reviews the arrest, explains your charges, and evaluates available evidence. We prepare a strong defense based specifically upon your unique and complex situation. Schedule a confidential consultation today to begin protecting your rights against serious charges.',
  phone = '(863)-599-6735',
  consultationLink = '/appointment',
  rightImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/why-choose-1.png',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/cta-bg.png',
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#0B1829] text-white overflow-hidden">
      {bgImage && (
        <div className="absolute inset-0 pointer-events-none z-0">
          <Image
            src={bgImage}
            alt="CTA Section Background"
            fill
            quality={90}
            priority
            className="object-cover object-center opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1829] via-[#0B1829]/90 to-[#0B1829]/75" />
        </div>
      )}

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-red-500 font-bold text-xs sm:text-sm tracking-widest uppercase">
                {tagline}
              </span>
              <div className="h-[2px] w-12 bg-red-700 rounded-full" />
            </div>

            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15] mb-6 ${bitter.className}`}>
              {titlePrefix}
              <span className="text-red-500">{titleHighlight}</span>
              {titleSuffix}
            </h2>

            <p className="text-slate-200 text-base sm:text-lg font-normal leading-relaxed mb-8 max-w-2xl">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full sm:w-auto">
              <Link
                href={consultationLink}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-bold text-sm sm:text-base tracking-wider uppercase rounded-full shadow-xl shadow-red-900/40 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Schedule Consultation</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              <a
                href={`tel:${phone.replace(/[^0-9]/g, '')}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base tracking-wider uppercase rounded-full transition-all duration-300"
              >
                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call {phone}</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 relative h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-slate-700/80"
          >
            <Image
              src={rightImage}
              alt="Lakeland DUI Defense Lawyer Call To Action"
              fill
              quality={90}
              className="object-cover object-center"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
