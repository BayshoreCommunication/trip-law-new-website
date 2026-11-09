'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultDocuments = [
  {
    title: 'EIN Confirmation Letter',
    desc: 'Every filing starts with proof the company exists. The IRS letter does that job. Keep the original on file, because USCIS asks for it again on renewals.',
  },
  {
    title: 'Articles of Incorporation or LLC Certificate',
    desc: 'Who owns the company and when was it formed? These papers answer both questions. Use the state filed copy so the details match public records exactly.',
  },
  {
    title: 'Recent Federal Tax Returns and Financial Statements',
    desc: 'Reviewers want to see money and tax returns show it. Revenue, payroll and company size over time help prove the employer can pay the offered wage. Bring the last two years if you have them.',
  },
  {
    title: 'Business License, Lease or Proof of Worksite',
    desc: "Where will the worker actually sit each day? This document answers that. If a license isn't available, a lease or utility bill can fill the gap.",
  },
  {
    title: 'Organizational Chart',
    desc: 'Picture the role inside the company. The chart shows who the worker reports to and who reports to them. Reviewers use it to judge whether the position is real.',
  },
  {
    title: 'Signed Offer Letter',
    desc: 'This letter carries more weight than most people expect. Title, duties, wage and start date must match the LCA and the petition word for word. One mismatch often brings a Request for Evidence.',
  },
  {
    title: 'Certified LCA and Prevailing Wage Data',
    desc: "The LCA is the Department of Labor's sign off on wage and job title. Keep the prevailing wage data that supports the pay. USCIS compares both against the petition.",
  },
  {
    title: 'Pay Records for Similar Employees',
    desc: 'What does the company pay its U.S. workers in the same role? DOL asks that question first. Gather comparable pay records before the LCA is filed, not after.',
  },
  {
    title: 'Recruitment Records for H1B Dependent Employers',
    desc: 'Employers that rely heavily on H1B must show they tried to hire Americans first. Job postings, applicant lists and reasons for rejection prove that effort. Keep them ready, since audits can arrive years later.',
  },
  {
    title: 'Passport Copy and Current Immigration Papers',
    desc: 'Your passport proves who you are. Your I 94, I 20 or EAD shows where your status stands today. Copy every page with a stamp or visa.',
  },
  {
    title: 'Diplomas and Official Transcripts',
    desc: 'USCIS checks the field of study against the job duties and this is where it starts. Official transcripts, sent straight from the school, carry the most weight.',
  },
  {
    title: 'Foreign Credential Evaluation',
    desc: "Does a foreign degree match a U.S. bachelor's? A credential evaluation answers that question. WES and NACES both issue these reports. Order early, because evaluations can take several weeks.",
  },
  {
    title: 'Updated Resume With Dates and Duties',
    desc: 'Your resume tells the work story in one place. Every role needs exact dates, a title and a clear list of duties. Those details must match the petition and your experience letters.',
  },
  {
    title: 'Experience Letters From Past Employers',
    desc: "Letters back up what your resume claims. A supervisor's signature on company letterhead carries real weight with reviewers. Ask for them while the manager still works there.",
  },
  {
    title: 'Professional Licenses and Certifications',
    desc: 'Some jobs require a state license before anyone can work. Certifications prove specialized skills the role calls for. Attach a copy of each active credential you hold.',
  },
  {
    title: 'Prior I 797 Notices',
    desc: 'Earlier approvals show your H1B history. USCIS tracks status through these notices. Keep every one, including those tied to former employers.',
  },
];

const DocumentsSection = ({
  tagline = 'APPLICATION CHECKLIST',
  titlePrefix = 'Which Documents You Need for an ',
  titleHighlight = 'H1B Visa Application',
  description = 'Organized documents make the petition easier to review and harder to challenge. We collect documents from the employer and the worker before filing.',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/documents-bg.png',
  documents = defaultDocuments,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#F8FAFC] text-slate-800 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={bgImage}
          alt="Documents Section Background"
          fill
          sizes="100vw"
          quality={90}
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-slate-50/70" />
      </div>

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-red-700 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
            {tagline}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1829] tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            {titlePrefix}
            <span className="text-red-700">{titleHighlight}</span>
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 6) * 0.08 }}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-red-700/10 border border-red-700/30 flex items-center justify-center text-red-700 font-bold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className={`text-base sm:text-lg font-bold text-[#0B1829] leading-snug ${bitter.className}`}>
                  {doc.title}
                </h3>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {doc.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;
