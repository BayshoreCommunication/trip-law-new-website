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
    title: 'Step 1: Free Case Review Within 24 Hours',
    description:
      'The process begins with a detailed discussion about the traffic stop, arrest and chemical testing. Clients also share every document received from law enforcement and the court. Trip Law reviews immediate deadlines, explains the criminal process and discusses the next recommended steps. Early case evaluation often identifies issues requiring prompt attention.',
  },
  {
    number: '02',
    title: 'Step 2: Evidence and Police Report Analysis',
    description:
      'The legal team collects every available report, video recording, witness statement and testing document. Each item receives careful review before determining the strongest defense strategy. Special attention focuses upon traffic stop justification, investigation procedures, field sobriety testing and chemical evidence. Small inconsistencies sometimes become valuable defense issues later.',
  },
  {
    number: '03',
    title: 'Step 3: Pretrial Motions and Negotiation',
    description:
      'After reviewing the evidence, Trip Law prepares appropriate pretrial motions whenever legal issues exist. Those motions may challenge evidence or address procedural concerns before trial. The firm also communicates with prosecutors regarding possible case resolution when appropriate. Every recommendation considers the client\'s goals alongside the available evidence.',
  },
  {
    number: '04',
    title: 'Step 4: Trial Defense or Case Resolution',
    description:
      'Some DUI cases resolve before trial through negotiated agreements supported by the clear evidence. Others require courtroom litigation because factual or legal disputes remain totally unresolved by us. Trip Law prepares each case for either outcome while protecting the client rights throughout every stage of the proceedings. We work hard to ensure you understand every step we take while defending you.',
  },
];

const WhatToExpectSection = ({
  tagline = 'ORGANIZED DEFENSE PROCESS',
  title = 'Our DUI Defense Process for Lakeland Clients',
  description = 'A successful defense follows an organized process. We start early preparation for our defense strategy to identify issues and prevent them become larger legal problems.',
  heroImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/why-choose-1.png',
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
              alt="DUI Defense Process"
              fill
              quality={90}
              className="object-cover object-center"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
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
