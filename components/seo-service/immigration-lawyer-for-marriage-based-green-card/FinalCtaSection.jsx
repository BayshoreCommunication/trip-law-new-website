'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const FinalCtaSection = ({
  tagline = 'GET STARTED TODAY',
  title = 'Start Your Marriage Based Green Card Application With Trip Law Today',
  description = "Do not navigate the stressful federal immigration system without professional legal support. Our dedicated Florida law firm is ready to protect your family's future. Contact an experienced immigration lawyer for marriage based green card cases right now. Schedule your initial strategy consultation with our skilled legal team this week.",
  consultationLink = '/appointment',
  consultationText = 'SCHEDULE CONSULTATION',
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-slate-950 text-white overflow-hidden">
      <div className="w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl mx-auto text-center flex flex-col items-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[2px] w-12 sm:w-16 bg-red-700 rounded-full" />
            <span className="text-red-500 font-bold text-xs sm:text-sm tracking-widest uppercase">
              {tagline}
            </span>
            <span className="text-red-500 font-bold text-xs sm:text-sm">★</span>
            <div className="h-[2px] w-12 sm:w-16 bg-red-700 rounded-full" />
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-tight ${bitter.className}`}>
            {title}
          </h2>

          <p className="text-slate-300 font-normal text-base sm:text-lg md:text-xl leading-relaxed mb-10 max-w-3xl">
            {description}
          </p>

          <Link
            href={consultationLink}
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-red-700 hover:bg-red-800 text-white font-bold text-base sm:text-lg tracking-wider uppercase rounded-full shadow-2xl shadow-red-900/50 transition-all duration-300 transform hover:-translate-y-1"
          >
            <svg
              className="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>{consultationText}</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
