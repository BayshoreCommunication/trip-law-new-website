'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const DocumentsSection = ({
  tagline = 'APPLICATION CHECKLIST',
  titlePrefix = 'Which Documents You Need for a ',
  titleHighlight = 'EB3 Visa Application',
  description = 'Applying for EB 3 requires gathering very detailed documentation from both the employer and the worker.',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/documents-bg.png',
  documents = [
    {
      title: 'Prevailing Wage and Recruitment Records',
      desc: 'Prevailing wage determinations require formal wage requests submitted directly to labor authorities. Recruitment documentation must include copies of newspaper advertisements, job postings and notices. Employers must archive detailed recruitment reports outlining candidate evaluation outcomes for audit files. Precise recordkeeping protects employers against formal administrative labor certification audits by federal agencies.',
    },
    {
      title: 'Proof of Ability to Pay Offered Wage',
      desc: 'Employers must submit annual reports, federal tax returns or audited financial statements. Financial records must demonstrate net income exceeding offered wages continuously since priority dates. Payroll documentation showing actual wages paid to beneficiaries fulfills financial proof requirements. Inability to demonstrate financial capacity causes immediate denial of submitted foreign worker petitions.',
    },
    {
      title: 'Degrees, Transcripts & Credential Evaluations',
      desc: 'Professional petitions require official university diplomas alongside comprehensive academic transcript records. Foreign academic credentials require formal evaluation reports from recognized independent credential evaluation services. Evaluations must explicitly establish equivalence to United States regional baccalaureate degree standards. Incomplete academic documentation prompts extensive evidence requests from reviewing federal immigration officers.',
    },
    {
      title: 'Experience Letters & Employment History',
      desc: 'Skilled worker petitions require detailed employment verification letters from former company management officials. Verification letters must detail precise job titles, duties, dates and weekly hours worked. Affidavits from previous colleagues supplement official corporate documentation when original employers have closed. Generic reference letters lack required specificity and frequently trigger formal immigration agency rejections.',
    },
    {
      title: 'Approved PERM or Uncertified ETA 9089 for Schedule A',
      desc: 'Certified Form ETA 9089 establishes completed labor market testing through labor department channels. Schedule A petitions include uncertified forms submitted directly to federal immigration processing centers. Postings on employer physical premises remain mandatory prior to submitting Schedule A applications. Certified labor forms remain valid for one hundred eighty days following initial approval.',
    },
    {
      title: 'Adjustment of Status Documents',
      desc: 'Domestic applicants must submit birth certificates, valid passports and current immigration approval notices. Medical examination forms completed by designated civil surgeons must accompany adjustment filings. Proof of continuous lawful nonimmigrant presence inside America remains essential for approval decisions. Marriage certificates and dependent birth records establish eligibility for accompanying family members.',
    },
  ],
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#F8FAFC] text-slate-800 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={bgImage}
          alt="Documents Section Background"
          fill
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
