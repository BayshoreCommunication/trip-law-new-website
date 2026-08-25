'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultSteps = [
  {
    number: '01',
    title: 'Step 1. Initial Case Evaluation',
    description:
      'We review your nationality, target business, and available investment in one consultation. This tells you early whether E2 fits your situation or another visa serves you better.',
  },
  {
    number: '02',
    title: 'Step 2. Business Structure and Investment Planning',
    description:
      'We help structure your investment, entity, and ownership records correctly from day one. This step heads off documentation gaps that cause delays later.',
  },
  {
    number: '03',
    title: 'Step 3. Business Plan and Financial Projections',
    description:
      'Our team builds a business plan with realistic five year projections tailored to your industry. This document becomes the backbone of your entire application.',
  },
  {
    number: '04',
    title: 'Step 4. Document Collection and Funds Source Tracing',
    description:
      'We gather every required document and trace your investment funds back to their source. This step closes the gaps that most often trigger an RFE.',
  },
  {
    number: '05',
    title: 'Step 5. Filing With USCIS or the Consulate',
    description:
      'We file Form I-129 or prepare your DS-160 package, depending on your location. Every filing gets checked against current USCIS and State Department standards before submission.',
  },
  {
    number: '06',
    title: 'Step 6. Interview Preparation',
    description:
      'We run mock interviews and business plan defense sessions ahead of your actual appointment. You\'ll walk in knowing exactly what to expect.',
  },
  {
    number: '07',
    title: 'Step 7. Approval and Renewal Planning',
    description:
      'Once approved, we map out your renewal timeline and ongoing compliance requirements. You\'ll track what matters long before your next filing comes due.',
  },
];

const WhatToExpectSection = ({
  tagline = 'ATTORNEY-GUIDED PROCESS',
  title = 'Trip Law\'s Proven E2 Visa Application Process for Florida Clients',
  description = 'Systematic preparation minimizes execution risk and ensures orderly submission to federal immigration authorities. We walk alongside you through every analytical milestone to achieve optimal processing results.',
  heroImage = '/assets/seo-service/trip-law.jpeg',
  ctaBgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/hero-bg.png',
  consultationLink = '/appointment',
  steps = defaultSteps,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#FCFDFE] text-slate-800 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-red-700 font-bold text-xs sm:text-sm tracking-widest uppercase">
                {tagline}
              </span>
              <div className="h-[2px] w-12 bg-red-700 rounded-full" />
            </div>

            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1829] tracking-tight leading-[1.18] mb-4 ${bitter.className}`}>
              {title}
            </h2>

            <div className="h-[3px] w-16 bg-red-700 rounded-full mb-6" />

            <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed mb-8">
              {description}
            </p>

            <Link
              href={consultationLink}
              className="inline-flex items-center gap-3 px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-bold text-sm sm:text-base tracking-wider uppercase rounded-full shadow-xl shadow-red-900/30 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Get Started Today</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-6 relative h-[380px] sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100"
          >
            <Image
              src={heroImage}
              alt="Proven E2 Process"
              fill
              quality={90}
              className="object-cover object-center"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
              className="bg-white rounded-3xl p-7 sm:p-8 shadow-xl shadow-slate-200/70 border border-slate-100 flex flex-col justify-start text-left hover:shadow-2xl hover:border-red-700/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-red-700 text-white flex items-center justify-center font-bold text-lg mb-5 shadow-lg shadow-red-900/20">
                {step.number}
              </div>

              <h3 className={`text-xl font-bold text-[#0B1829] mb-3 ${bitter.className}`}>
                {step.title}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatToExpectSection;
