'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const DocumentsSection = ({
  tagline = 'APPLICATION CHECKLIST',
  titlePrefix = 'Documents Needed for an ',
  titleHighlight = 'O-1 Visa Application',
  description = 'How strong a petition looks usually comes down to how well the paperwork is put together. The categories below matter most.',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/documents-bg.png',
  documents = [
    {
      title: 'Valid Passport and Immigration Documents',
      desc: 'A passport valid for at least six months past the requested stay is standard. Earlier immigration documents, visa stamps, and prior USCIS approvals help round out the record.',
    },
    {
      title: 'Form I-129 and Supporting Petition Materials',
      desc: 'Form I-129 sits at the center of the filing. The employer or agent submits it with the right classification supplement, supporting evidence, and fees attached. Small mistakes here cause more delays than people expect.',
    },
    {
      title: 'Awards and Professional Recognition',
      desc: 'Prizes and honors with genuine national or international weight tend to carry the most direct value. The main point is showing clearly why the award actually matters within that field.',
    },
    {
      title: 'Published Material About the Applicant',
      desc: "Articles or features covering the applicant's work in respected trade publications can satisfy this criterion, as long as the coverage focuses on the applicant rather than a passing mention.",
    },
    {
      title: 'Evidence of Judging the Work of Others',
      desc: 'Serving as a judge, panelist, or reviewer, whether for grant panels, competitions, or academic peer review, can count here once it is documented well.',
    },
    {
      title: 'Evidence of Original Contributions',
      desc: 'Work that has been widely adopted, cited, or recognized by others in the field can exhibit contributions of major significance. Routine day-to-day output will not clear this bar on its own.',
    },
    {
      title: 'Scholarly Articles and Professional Publications',
      desc: 'Publishing in respected journals or major industry outlets can satisfy one of the O-1A criteria. Citation records, when available, add extra weight.',
    },
    {
      title: 'Memberships Requiring Outstanding Achievements',
      desc: 'Belonging to an association that only accepts members based on demonstrated achievement can support your case. A standard professional membership without that bar generally will not.',
    },
    {
      title: 'High Salary or Compensation Evidence',
      desc: 'Compensation well above what others in the field typically earn can support this criterion, usually alongside comparative data showing the gap.',
    },
    {
      title: 'Employment Contracts or Offer Letters',
      desc: 'Contracts or offer letters spelling out the proposed U.S. employment need to be part of the filing. They confirm the petitioner-beneficiary relationship and show that real work has been arranged.',
    },
    {
      title: 'Recommendation and Expert Letters',
      desc: 'Letters from well-known experts are more powerful than anything else, but if the letters are more than superficial. The most robust ones refer to specific achievements and the reason why the work displays a true act of extraordinary ability.',
    },
    {
      title: 'Advisory Opinion or Consultation',
      desc: "Certain classifications, O-1B filings in the arts and entertainment world especially, require an advisory opinion from a relevant peer group or organization. That opinion reflects an outside assessment of the applicant's qualifications.",
    },
    {
      title: 'Evidence of Planned U.S. Activities',
      desc: "An itinerary or description of planned events and projects rounds out the filing. It confirms the work fits within the applicant's area of extraordinary ability rather than drifting outside it.",
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
