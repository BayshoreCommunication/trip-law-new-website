'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultDocuments = [
  {
    number: '01',
    title: 'Proof of Treaty Country Nationality',
    description:
      'A valid passport showing citizenship in an E2 treaty country covers the base requirement. Naturalized citizens should add their naturalization certificate alongside the passport. Investment through a company means the entity needs that same treaty nationality on record. Ownership records have to show that nationality clearly, in writing.',
    link: '/appointment',
  },
  {
    number: '02',
    title: 'Source of Funds Documentation',
    description:
      'USCIS and consular officers trace your investment money back to a lawful source. Bank statements, tax returns, sale agreements, and loan documents build that trail. Gifted funds need a signed gift letter plus proof of the giver\'s own funds. Gaps in this trail cause a large share of E2 denials.',
    link: '/appointment',
  },
  {
    number: '03',
    title: 'Business Plan and Financial Projections',
    description:
      'Your business plan requires reasonable revenue, staffing and growth figures for next five years. Generic templates rarely survive scrutiny, since officers compare your numbers against industry norms. The plan also has to prove the business grows past the marginal stage over time. A weak plan drags down every other part of the filing.',
    link: '/appointment',
  },
  {
    number: '04',
    title: 'Proof Investment Is Committed and At Risk',
    description:
      'Funds sitting untouched in a bank account carry little weight as a qualifying investment. Signed leases, equipment purchases, and escrow agreements tied to the business carry real weight. The money has to sit exposed to loss if the business fails. Uncommitted capital hands an officer an easy reason to deny your case.',
    link: '/appointment',
  },
  {
    number: '05',
    title: 'Business Formation and Ownership Records',
    description:
      'Articles of incorporation, an operating agreement, and ownership certificates round out this document set. These records prove who owns the business and in what percentage. They also confirm you hold the ownership or control the E2 category requires. Inconsistent numbers between filings raise questions during review.',
    link: '/appointment',
  },
];

const DocumentsSection = ({
  tagline = 'APPLICATION CHECKLIST',
  titlePrefix = 'Which Documents You Need for an ',
  titleHighlight = 'E2 Visa Application',
  description = 'Preparing a complete evidentiary packet prevents unnecessary delays during formal adjudication process. One missing document category is often enough to trigger a request for evidence.',
  buttonText = 'Need Help Getting Started?',
  buttonLink = '/appointment',
  trustBadgeText = 'Proper documentation today helps ensure a smoother E2 visa journey tomorrow.',
  bannerTitle = 'Not Sure Which Documents Apply to Your Case?',
  bannerDescription = 'Every E2 investor application is different. Our attorneys review your commercial structure and help you prepare the exact documentation required before filing your Form I-129 or DS-160.',
  bannerButtonText = 'Schedule a Consultation',
  bannerButtonLink = '/appointment',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/documents-bg.png',
  documents = defaultDocuments,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#F8FAFC] text-slate-800">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={bgImage}
          alt="Documents Needed Background Image"
          fill
          quality={90}
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="flex flex-col items-start text-left pt-0"
            >
              <div className="flex flex-col items-start gap-2 mb-4">
                <span className="text-red-700 font-bold text-xs sm:text-sm tracking-widest uppercase">
                  {tagline}
                </span>
                <div className="h-[3px] w-14 bg-red-700 rounded-full" />
              </div>

              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1829] tracking-tight leading-[1.2] mb-6 ${bitter.className}`}>
                {titlePrefix}
                <span className="text-red-700 block mt-1">{titleHighlight}</span>
              </h2>

              <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed mb-8">
                {description}
              </p>

              <Link
                href={buttonLink}
                className="inline-flex items-center gap-3 px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-bold text-sm sm:text-base tracking-wider uppercase rounded-full shadow-xl shadow-red-900/30 transition-all duration-300 transform hover:-translate-y-0.5 mb-8"
              >
                <span>{buttonText}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-red-700/5 border border-red-700/20 max-w-md">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-700/10 flex items-center justify-center text-red-700">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="text-slate-700 text-xs sm:text-sm font-medium leading-snug">
                  {trustBadgeText}
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {documents.map((doc, idx) => (
                <motion.div
                  key={doc.number || idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
                  className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/70 border border-slate-100 hover:border-red-700/40 flex flex-col items-start hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group relative"
                >
                  <div className="flex items-center justify-between w-full mb-6">
                    <span className="text-red-700 font-mono font-bold text-sm bg-red-700/10 px-3.5 py-1 rounded-full border border-red-700/20">
                      {doc.number}
                    </span>
                  </div>

                  <div className="w-16 h-16 rounded-full bg-red-700/10 border border-red-700/20 flex items-center justify-center mb-6 group-hover:bg-red-700 group-hover:text-white transition-colors duration-300">
                    <svg className="w-8 h-8 text-red-700 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>

                  <h3 className={`text-xl font-bold text-[#0B1829] mb-3 group-hover:text-red-700 transition-colors duration-300 ${bitter.className}`}>
                    {doc.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed mb-6 flex-grow">
                    {doc.description}
                  </p>

                  <Link
                    href={doc.link}
                    className="inline-flex items-center gap-2 text-red-700 font-bold text-sm tracking-wide uppercase hover:text-red-800 transition-colors duration-200"
                  >
                    <span>Learn More</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative w-full mt-12 lg:mt-16 bg-[#081324] rounded-3xl p-6 sm:p-9 md:p-10 border border-slate-700/80 shadow-2xl shadow-black/50 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="absolute right-0 bottom-0 w-80 h-80 bg-red-700/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center gap-5 sm:gap-6 z-10">
            <div className="flex-shrink-0 w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-red-700/15 border border-red-700/30 flex items-center justify-center text-red-700">
              <svg className="w-8 h-8 sm:w-9 sm:h-9" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l9-4 9 4M3 6v14a1 1 0 001 1h16a1 1 0 001-1V6M3 6l9 6 9-6M12 12v9" />
              </svg>
            </div>
            <div>
              <h4 className={`text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1.5 ${bitter.className}`}>
                {bannerTitle}
              </h4>
              <p className="text-slate-300 text-sm sm:text-base font-normal max-w-2xl leading-relaxed">
                {bannerDescription}
              </p>
            </div>
          </div>

          <div className="z-10 flex-shrink-0 w-full md:w-auto">
            <Link
              href={bannerButtonLink}
              className="inline-flex items-center justify-center gap-3 w-full md:w-auto px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-bold text-sm sm:text-base tracking-wider uppercase rounded-full shadow-xl shadow-red-900/40 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>{bannerButtonText}</span>
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

export default DocumentsSection;
