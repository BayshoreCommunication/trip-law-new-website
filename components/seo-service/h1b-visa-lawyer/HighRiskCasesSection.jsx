'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultCases = [
  {
    title: 'New or Fast Growing Employers',
    desc: 'Young companies and startups receive extra scrutiny of their business operations and finances. We add a business plan, client contracts, funding records and an organizational chart. Heavy H1B volume or past DOL findings call for retention data and documented fixes.',
  },
  {
    title: 'Staffing Firms and Third Party Worksites',
    desc: "USCIS examines control over the work and the reality of the client position. We document the staffing firm's role in pay, supervision and reassignment of the worker. Client contracts, end client letters and statements of work back up each point.",
  },
  {
    title: 'Unused Approvals',
    desc: "An abandoned approval raises questions, so we explain the timing and the worker's intent. Each new filing addresses the earlier history directly in the cover letter.",
  },
  {
    title: 'Long Career Gaps',
    desc: 'A multi year gap in the specialty field invites doubts about current skills. We document training, certifications, freelance projects and other work completed during the gap. The hiring manager adds a declaration explaining the skills the role truly requires.',
  },
  {
    title: 'Unusual Employer Structure',
    desc: 'Shell like structures and thin business records make USCIS question the employer itself. A new company with only a virtual office faces the hardest review of all. We build a records package early, including leases, payroll, contracts and tax filings.',
  },
  {
    title: 'Concurrent Employment With Two H1B Employers',
    desc: 'Workers can hold H1B status with two employers when both file separate petitions. Both petitions must disclose the other job and each role must stand alone. Cap subject concurrent cases carry extra risk, so we plan the timing carefully.',
  },
  {
    title: 'Unusually High or Low Wages',
    desc: 'A wage far above or below the DOL benchmark draws attention from reviewers. High offers need market data, salary surveys and a clear business reason. Offers below the prevailing wage violate the LCA, so we fix wages before filing.',
  },
  {
    title: 'Export Controls and Security Clearances',
    desc: 'Employers of technology roles certify on Form I 129 whether an export license is needed. Roles tied to security clearances need a separate timeline alongside the petition. We coordinate both tracks with the employer so start dates stay realistic.',
  },
  {
    title: 'Inadmissibility Issues',
    desc: 'Past unlawful presence, criminal history or misrepresentation can block a visa at the consulate. We review your full history before the employer commits to the filing. Waivers exist for some grounds and we tell you early if one applies.',
  },
];

const HighRiskCasesSection = ({
  badgeText = 'COMPLEX CASES WE HANDLE',
  title = 'Complex H1B Cases We Handle',
  description = 'Some H 1B cases are difficult. It’s because the employment structure, business history, prior immigration record or worker profile creates questions. Our h1b immigration lawyer Hardam Tripathi plans around each one from the first consultation.',
  cases = defaultCases,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#040B17] text-white overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-red-500 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
            {badgeText}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            {title}
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Some H 1B cases are difficult. It’s because the employment structure, business history, prior immigration record or worker profile creates questions. Our{' '}
            <Link href="/h1b-visa-lawyer" className="text-red-400 font-semibold hover:underline">
              h1b immigration lawyer
            </Link>{' '}
            Hardam Tripathi plans around each one from the first consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-[#0B1829] border border-slate-800 hover:border-red-700/60 rounded-2xl p-7 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-700/20 text-red-500 border border-red-700/30 flex items-center justify-center font-bold text-base mb-5">
                  {idx + 1}
                </div>
                <h3 className={`text-xl font-bold text-white mb-3 ${bitter.className}`}>
                  {item.title}
                </h3>
                <div className="h-[2px] w-12 bg-red-700 rounded-full mb-4" />
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
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

export default HighRiskCasesSection;
