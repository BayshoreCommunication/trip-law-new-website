'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const FinalCtaSection = ({
  tagline = 'GET STARTED TODAY',
  titlePrefix = 'Start Your ',
  titleHighlight = 'US Citizenship',
  titleSuffix = ' Application With Trip Law Today',
  description = 'USCIS controls your eligibility timeline, so every day counts. Call Trip Law today to get your case reviewed by a licensed attorney. We help you file your N-400 with total confidence. Know exactly what is in your record before officer does.',
  phone = '(863)-599-6735',
  consultationLink = '/appointment',
  rightImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/why-choose-1.png',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/cta-bg.png',
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#FAF7F2] text-slate-800 overflow-hidden">
      
      {/* Next.js Full Section Background Image with Light Soft Overlay */}
      {bgImage && (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <Image
            src={bgImage}
            alt="Section Background"
            fill
            quality={90}
            priority
            className="object-cover object-center opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2]/85 via-[#FAF7F2]/75 to-[#FAF7F2]/90" />
        </div>
      )}

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        
        {/* Main 2-Column Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Left Column Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Tagline Divider */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-8 bg-red-700/60 rounded-full" />
              <div className="text-red-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l9-4 9 4M3 6v14a1 1 0 001 1h16a1 1 0 001-1V6M3 6l9 6 9-6M12 12v9" />
                </svg>
              </div>
              <div className="h-[2px] w-8 bg-red-700/60 rounded-full" />
            </div>

            {/* Main Title */}
            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B1829] tracking-tight leading-[1.15] mb-6 ${bitter.className}`}>
              {titlePrefix}
              <span className="text-red-700 font-bold">
                {titleHighlight}
              </span>
              {titleSuffix}
            </h2>

            {/* Description */}
            <p className="text-slate-700 text-base sm:text-lg lg:text-xl font-normal leading-relaxed mb-8 max-w-2xl">
              {description}
            </p>
          </motion.div>

          {/* Right Column Image Block: U.S. Citizenship Application Booklet / Folder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Image Card Container with Soft Shadow & Ambient Lighting */}
            <div className="relative w-full max-w-[540px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/70 border-4 border-white/80 group">
              <Image
                src={rightImage}
                alt="Start Your U.S. Citizenship Application with Trip Law"
                fill
                quality={95}
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Subtle Gradient Edge Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1829]/20 via-transparent to-white/10 pointer-events-none" />

              {/* Decorative Floating Seal Badge */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-red-700/20 shadow-lg flex items-center gap-2">
                <span className="text-xl">🇺🇸</span>
                <div>
                  <div className="text-[11px] font-bold text-[#0B1829]">Form N-400 Ready</div>
                  <div className="text-[9px] text-red-700 font-semibold uppercase">USCIS Qualified</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Floating Contact & CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="w-full bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-xl shadow-slate-200/50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 items-center"
        >
          {/* Call Box */}
          <div className="lg:col-span-4 flex items-center gap-4 border-b sm:border-b-0 lg:border-r border-slate-200/80 pb-4 sm:pb-0 lg:pr-6">
            <div className="w-12 h-12 rounded-full bg-red-700/10 border border-red-700/20 flex items-center justify-center text-red-700 flex-shrink-0 shadow-sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Call Us Today</span>
              <a href={`tel:${phone.replace(/[^0-9]/g, '')}`} className="text-xl sm:text-2xl font-bold text-[#0B1829] hover:text-red-700 transition-colors">
                {phone}
              </a>
            </div>
          </div>

          {/* Free Case Review Box */}
          <div className="lg:col-span-4 flex items-center gap-4 border-b lg:border-b-0 lg:border-r border-slate-200/80 pb-4 lg:pb-0 lg:pr-6">
            <div className="w-12 h-12 rounded-2xl bg-red-700/10 border border-red-700/20 flex items-center justify-center text-red-700 flex-shrink-0 shadow-sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <div className={`text-base sm:text-lg font-bold text-[#0B1829] ${bitter.className}`}>
                Free Case Review
              </div>
              <div className="text-xs text-slate-600 font-medium">
                Speak with a Licensed Attorney
              </div>
            </div>
          </div>

          {/* Schedule Consultation Button */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <Link
              href={consultationLink}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-bold text-sm sm:text-base tracking-wider uppercase rounded-xl shadow-lg shadow-red-900/30 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Schedule Consultation</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default FinalCtaSection;
