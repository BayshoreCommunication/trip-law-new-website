'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultReasons = [
  {
    title: 'Missing or Incomplete Forms',
    desc: 'If you submit an incomplete form USCIS will reject your application. For example missing signatures, incorrect answers, incomplete sections or outdated forms. Even absent required attachments can delay review or cause denial. It often happens when you do it on your own without an immigration lawyer. We check every input field in the form carefully. And help you collect every required attachment.',
  },
  {
    title: 'Insufficient Supporting Evidence',
    desc: 'Lacks enough evidence in petition to connect the reported criminal activity may lead to visa denial. Insufficient evidence will not establish your eligibility criteria. A brief report may leave important facts unexplained. Especially if the incident involved ongoing abuse or more than one event. Therefore we look for documentary support. And coherent declaration to address the legal requirements.',
  },
  {
    title: 'Problems With Law Enforcement Certification',
    desc: 'You must submit your Supplement B within six months of the official signing of it. Also ensure an authorized agency official signs the form. Otherwise USCIS will reject your filing.',
  },
  {
    title: 'Inconsistent Statements or Unresolved Eligibility Questions',
    desc: 'Inconsistencies in statements require extra government review. For example in your declaration, police reports and immigration filings. Even in Government interviews. However trauma, translation and memory issues often cause this difference in statements. These can cause rejection. If you can’t explain properly, this may harm your credibility. So we review and address all available statements carefully first.',
  },
  {
    title: 'Admissibility Issues and Waiver Concerns',
    desc: 'Some applicants have complex immigration or criminal histories. These issues require a separate legal analysis. USCIS requires a waiver request if a ground of inadmissibility applies to you. The government does not approve these waivers automatically. Our team reviews your relevant history. Then we determine if you qualify for an available waiver.',
  },
];

const DenialReasonsSection = ({
  badgeText = 'AVOIDING APPLICATION ERRORS',
  title = 'Why Do U Visa Applications Get Denied or Rejected?',
  description = 'Minor mistakes or absence of documents can lead to visa application rejection. Here are some mistakes you need to be careful of.',
  reasons = defaultReasons,
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/denial-reasons-bg.png',
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#F8FAFC] text-slate-800 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={bgImage}
          alt="Denial Reasons Background"
          fill
          sizes="100vw"
          quality={90}
          className="object-cover object-center opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC]/90 via-[#F8FAFC]/95 to-[#F8FAFC]" />
      </div>

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-red-700 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
            {badgeText}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1829] tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            {title}
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-700/10 border border-red-700/30 flex items-center justify-center text-red-700 font-bold mb-4">
                  !
                </div>
                <h3 className={`text-xl font-bold text-[#0B1829] mb-3 ${bitter.className}`}>
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Protection Callout */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-md text-center max-w-4xl mx-auto">
          <p className="text-slate-700 text-base leading-relaxed">
            Protect your future and prevent costly setbacks. Working with our experienced{' '}
            <Link href="/u-visa-immigration-lawyer" className="text-red-700 font-semibold hover:underline">
              U Visa lawyer
            </Link>{' '}
            ensures all petition forms, affidavits, and police certifications are flawlessly aligned before submission to USCIS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DenialReasonsSection;

