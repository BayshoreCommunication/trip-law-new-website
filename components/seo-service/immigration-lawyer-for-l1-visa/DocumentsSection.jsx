'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const DocumentsSection = ({
  tagline = 'APPLICATION CHECKLIST',
  titlePrefix = 'Which Documents You Need for an ',
  titleHighlight = 'L1 Visa Application',
  description = 'Successful L1 petitions depend on thorough documentation of corporate relationship and beneficiary’s role. Our firm helps compile and organize all required evidence:',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/documents-bg.png',
  documents = [
    {
      title: 'Employment Verification From Foreign Office',
      desc: "You must provide official employment verification proving continuous overseas service for twelve full months. We assemble official HR verification letters detailing exact employment start dates and job responsibilities. Supporting evidence includes foreign tax receipts, corporate payroll summaries and official monthly wage statements. Proper foreign documentation ensures USCIS officers quickly accept your candidate's qualifying work history.",
    },
    {
      title: 'Corporate Relationship and Ownership Evidence',
      desc: 'Proving qualifying ownership requires submitting complete incorporation and corporate formation filings for both entities. We collect share certificates, stock ledgers, capital contributions and operating agreements from both companies. Recent corporate income tax returns and annual balance sheets establish active foreign business operations. Clear financial records eliminate doubts about common ownership between foreign and Florida branches.',
    },
    {
      title: 'Beneficiary Employment and Qualification Records',
      desc: 'Your candidate must supply educational credentials, professional resumes and official degree evaluations for review. We review candidate background credentials to verify their educational standards match proposed role duties. Training certificates and specialized awards help demonstrate advanced corporate knowledge to federal evaluators. Complete qualification packages protect your application from delays caused by initial evidentiary gaps.',
    },
    {
      title: 'Job Description and Org Charts',
      desc: 'USCIS demands detailed organizational charts displaying complete reporting hierarchies for foreign and U.S. entities. Charts must list employee names, official job titles, educational levels and specific direct reporting lines. We structure position descriptions with explicit percentage breakdowns for every assigned daily operational task. Clear organizational structures confirm that your employee operates as a high level executive or manager.',
    },
    {
      title: 'Managerial or Specialized Knowledge Evidence',
      desc: 'You need clear evidence showing the candidate makes high level decisions or controls proprietary technical systems. Executive evidence includes board resolutions, expenditure authority limits and strategic policy direction documents. Specialized knowledge filings require proprietary code samples, custom software manuals or internal process designs. Our team highlights specialized duties to prevent common adjudicative misunderstandings during petition review.',
    },
    {
      title: 'Proof of Business Operations and Physical Premises',
      desc: 'USCIS mandates solid proof of physical commercial office space for all Florida business operations. We collect signed commercial lease contracts, floor plans and photographs displaying active business signage. Active business operations are proven through corporate bank statements, client invoices and utility receipts. Thorough lease evidence prevents immediate petition rejections based on virtual office address space.',
    },
    {
      title: 'Additional Documents for New Office Petitions',
      desc: 'New office filings require detailed corporate expansion plans outlining expected business growth across Florida. You must supply comprehensive five year financial projections and initial capital investment bank transfers. Evidence must show that the U.S. location can support managerial oversight within twelve months. We help you assemble bulletproof commercial evidence to secure your initial one year approval.',
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
