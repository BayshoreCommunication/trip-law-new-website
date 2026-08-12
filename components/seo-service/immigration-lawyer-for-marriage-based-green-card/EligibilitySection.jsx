'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultEligibilityListLeft = [
  'Your marriage must be legally recognized in the jurisdiction where it was performed.',
  'You must prove that your marriage is genuine (Bona Fide) and not for immigration.',
  'The petitioning partner must hold either American citizenship or lawful permanent resident status.',
  'Green card holders can sponsor their spouses through the specific family preference category.',
];

const defaultEligibilityListRight = [
  'The sponsor must earn enough income to meet the federal poverty guidelines completely.',
  'The foreign spouse must maintain or properly adjust their legal standing within America.',
  'The applicant must not have any serious criminal records or severe immigration violations.',
];

const EligibilitySection = ({
  title = 'Are You Eligible To Apply? Check Requirement For Marriage Based Green Card',
  subtitleBold = 'Are you sure your marriage based green card application will meet all USCIS requirements?',
  description = 'USCIS requires thorough investigation of marriage authenticity and compliance with all regulations with marriage certificate. Our immigration lawyer for marriage based green card at Trip Law gets you well prepared applications to smooth the approval process.',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/eligibility-bg.png',
  cardTitle = 'Ready to Apply for Marriage Based Green Card?',
  cardSubtitle = 'Check Requirements First',
  eligibilityListLeft = defaultEligibilityListLeft,
  eligibilityListRight = defaultEligibilityListRight,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#F8FAFC] text-slate-800 overflow-hidden">
      {/* Next.js Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={bgImage}
          alt="Eligibility Section Background Image"
          fill
          quality={90}
          priority
          className="object-cover object-center"
        />
        {/* Soft light overlay */}
        <div className="absolute inset-0 bg-slate-50/40" />
      </div>

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading & Detailed Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col items-start text-left"
          >
            {/* Main Section Title */}
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1829] tracking-tight leading-[1.25] mb-4 ${bitter.className}`}>
              {title}
            </h2>

            {/* Red Accent Bar */}
            <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />

            {/* Lead Paragraph / Strong Question */}
            <p className="text-slate-900 font-semibold text-base sm:text-lg leading-relaxed mb-5">
              {subtitleBold}
            </p>

            {/* Main Description Paragraph */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              {description}
            </p>
          </motion.div>

          {/* Right Column: White Eligibility Checklist Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-7 w-full"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-9 md:p-10 shadow-2xl shadow-slate-200/90 border border-slate-100">
              
              {/* Card Titles */}
              <div className="mb-6">
                <h3 className={`text-2xl sm:text-3xl font-bold text-[#0B1829] mb-1 ${bitter.className}`}>
                  {cardTitle}
                </h3>
                <h4 className={`text-xl sm:text-2xl font-bold text-red-700 ${bitter.className}`}>
                  {cardSubtitle}
                </h4>
                <div className="h-[2px] w-14 bg-red-700 rounded-full mt-3" />
              </div>

              {/* 2-Column Checklist Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 pt-2">
                
                {/* Left Column Checklist Items */}
                <div className="flex flex-col gap-4">
                  {eligibilityListLeft.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-700 text-white flex items-center justify-center mt-0.5 shadow-sm shadow-red-700/30">
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-700 text-sm sm:text-base font-normal leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Right Column Checklist Items */}
                <div className="flex flex-col gap-4">
                  {eligibilityListRight.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-700 text-white flex items-center justify-center mt-0.5 shadow-sm shadow-red-700/30">
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-700 text-sm sm:text-base font-normal leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;
