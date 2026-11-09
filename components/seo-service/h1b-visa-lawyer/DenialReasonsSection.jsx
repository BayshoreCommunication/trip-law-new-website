'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultReasons = [
  {
    title: 'Incomplete or Contradictory LCA Filings',
    desc: 'The LCA and the petition must tell the same story about the job. A title mismatch, wage mismatch or missing worksite notice invites a Request for Evidence. We compare every field across the LCA, the I 129 and the offer letter.',
  },
  {
    title: 'Weak Job Descriptions',
    desc: 'A vague duty list leaves USCIS guessing whether the role requires a degree. For example, "Develops software applications" or "Manages accounts". Specific duties, required knowledge and a direct link to the degree win reviews. We write each description with the hiring manager before the LCA is filed.',
  },
  {
    title: 'Prior Overstays and Status Violations',
    desc: 'Prior overstays and status violations surface during every USCIS and consular background review. Concealment makes the problem worse, so we disclose the history with context. We attach proof of restored status and evidence of steady compliance since.',
  },
];

const DenialReasonsSection = ({
  badgeText = 'H1B RISKS & PREVENTABLE MISTAKES',
  title = 'Why H1B Applications Get Denied or Delayed',
  description = 'One common problem we found is that petitions contain three different versions of the same job. It happens due to documents prepared separately by HR, the worker and legal counsel. Our h1b visa lawyer Hardam Tripathi screened each case for any problems below.',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/denial-reasons-bg.png',
  reasons = defaultReasons,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#F8FAFC] text-slate-800 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={bgImage}
          alt="Why H1B Applications Get Denied or Delayed Background"
          fill
          sizes="100vw"
          quality={90}
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-slate-50/75" />
      </div>

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-red-700 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
            {badgeText}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1829] tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            {title}
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            One common problem we found is that petitions contain three different versions of the same job. It happens due to documents prepared separately by HR, the worker and legal counsel. Our{' '}
            <Link href="/h1b-visa-lawyer" className="text-red-700 font-semibold hover:underline">
              h1b visa lawyer
            </Link>{' '}
            Hardam Tripathi screened each case for any problems below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-7 sm:p-8 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-700/10 text-red-700 flex items-center justify-center font-bold text-lg mb-6">
                  {idx + 1}
                </div>
                <h3 className={`text-xl font-bold text-[#0B1829] mb-3 leading-snug ${bitter.className}`}>
                  {item.title}
                </h3>
                <div className="h-[2px] w-12 bg-red-700 rounded-full mb-4" />
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DenialReasonsSection;
