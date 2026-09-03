'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const DocumentsSection = ({
  tagline = 'APPLICATION CHECKLIST',
  titlePrefix = 'Documents Needed for an ',
  titleHighlight = 'EB-2 Green Card Application',
  description = 'Before you begin filing for an EB-2 Green Card, collect the following supporting documents:',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/documents-bg.png',
  documents = [
    {
      title: 'Academic Degrees and Transcripts',
      desc: "Official transcripts and degree certificates from every relevant school. For the advanced degree route, the degree has to connect directly to the position. A diploma by itself usually isn't enough without the transcript behind it.",
    },
    {
      title: 'Educational Equivalency Documentation',
      desc: "Foreign degrees need evaluation from a recognized credential service to establish U.S. equivalency. USCIS won't do this evaluation itself. Most advanced degree cases built on foreign education need a formal report showing equivalency to a U.S. master's or higher.",
    },
    {
      title: 'Employment Verification Letters',
      desc: "Letters from current and past employers laying out job titles, dates, duties, and pay. If you're relying on progressive experience, these letters need to actually show how your role grew.",
    },
    {
      title: 'Progressive Work Experience Evidence',
      desc: 'Promotion records, performance reviews, org charts, anything that shows real advancement over time. This carries extra weight when a bachelor\'s degree plus 5 years is standing in for an advanced degree.',
    },
    {
      title: 'Professional Licenses and Certifications',
      desc: 'Active licenses, board certifications, state credentials tied to your field. Especially relevant in regulated fields like medicine, engineering, law, and architecture.',
    },
    {
      title: 'Exceptional Ability Evidence',
      desc: 'This means hitting at least 3 of 6 USCIS criteria, with real evidence behind each. Published articles, citations, media coverage, awards, salary comparisons, and letters from recognized people in your industry all factor in.',
    },
    {
      title: 'Employer Job Offer and Position Details',
      desc: "Employer-sponsored cases need a permanent, full-time offer in a qualifying role. Usually this comes through as a support letter describing the position, its minimum requirements, and the employer's intent to hire you on a permanent basis.",
    },
    {
      title: 'PERM Labor Certification Documents',
      desc: "When PERM applies, the approved ETA-9089 from the Department of Labor gets filed alongside Form I-140. Certification is only good for 180 days from the date it's issued.",
    },
    {
      title: 'Form ETA-9089 Documentation',
      desc: "The recruitment records behind the PERM application, job postings, applicant evaluations, the employer's written recruitment report, all of it. USCIS doesn't see these directly, but the Department of Labor can audit them, so employers need to keep everything on file.",
    },
    {
      title: 'Form I-140 Petition Materials',
      desc: 'Form I-140 is the main petition. It needs supporting documentation that proves your qualifications under whichever EB-2 standard applies and where relevant, proof the employer can actually pay the offered wage.',
    },
    {
      title: 'National Interest Waiver Supporting Evidence',
      desc: 'NIW cases need a detailed written argument addressing all three Dhanasar prongs. That usually means documentation of the proposed work, evidence of its national importance, publications, citations, expert letters, institutional support, and material establishing your professional standing.',
    },
    {
      title: 'Form I-485 and Adjustment of Status Documents',
      desc: 'The adjustment package includes Form I-485, plus Form I-765 and Form I-131 where applicable. Add photos, immigration history records, and whatever else the current USCIS instructions require.',
    },
    {
      title: 'Civil and Medical Examination Records',
      desc: 'Adjustment applicants need a medical exam from a USCIS-designated civil surgeon, documented on Form I-693 and submitted within its validity window. Consular applicants go through a separate exam arranged through the embassy or consulate.',
    },
  ],
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#F8FAFC] text-slate-800 overflow-hidden">
      {/* Background Image */}
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
        {/* Section Title */}
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

        {/* Document Cards Grid */}
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
