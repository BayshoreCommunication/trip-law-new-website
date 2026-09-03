'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const DenialReasonsSection = ({
  badgeText = 'L-1 RISKS & DELAYS',
  title = 'Common Reason L1 Visa Applicants Get Denied or Delayed',
  description = 'Understanding these pitfalls helps to prevent any denial or delayed issue while applying work visa.',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/denial-reasons-bg.png',
  reasons = [
    {
      title: 'Lack of Proof for Corporate Relationship',
      desc: 'Incomplete corporate records connecting foreign and domestic entities remain a leading cause of denial. USCIS rejects petitions when ownership ties rely on unverified verbal agreements or missing documentation. We resolve ownership gaps by compiling certified stock ledgers, capitalization records and tax returns. A complete ownership audit ensures your petition satisfies all federal statutory relationship standards.',
    },
    {
      title: 'Missing Foreign Employment Records',
      desc: 'Failing to prove twelve continuous months of foreign employment leads to immediate petition rejection. Inconsistencies between payroll summaries, tax documents and resume work history raise immediate red flags. We audit candidate employment files to resolve date discrepancies before submitting official government paperwork. Thorough employment verification guarantees that your foreign worker meets strict statutory eligibility rules.',
    },
    {
      title: 'Job Duties Failed to Meet L1A Standards',
      desc: 'USCIS routinely denies L1A petitions when candidates spend significant working time on operational labor. First line supervisors who manage nonprofessional workers without executive authority fail to qualify as managers. We establish that your manager directs professional staff or controls essential corporate functions independently. Clear duty differentiation protects your managerial transfers from the common first line supervisor trap.',
    },
    {
      title: 'Generic Job Descriptions',
      desc: 'Submitting generic human resource job descriptions creates significant risks during government petition reviews. Vague duty listings fail to prove high level executive decision making or specialized domain expertise. Our team writes detailed role summaries with precise percentage time allocations for each duty. Specific duty descriptions provide clear proof that satisfies strict federal visa adjudication standards.',
    },
    {
      title: 'Insufficiently Specialized Knowledge Claims',
      desc: 'L1B claims fail when employers submit generalized assertions instead of technical supporting documentation. Adjudicators require proof that candidate knowledge is truly unique within your specific business sector. We collect custom process guides, software codebase samples and proprietary product development schematics. Comprehensive technical evidence establishes why your employee is irreplaceable for domestic corporate operations.',
    },
    {
      title: 'Inadequate Business Plans for New Office',
      desc: 'Weak business plans with unrealistic growth projections trigger immediate new office petition denials. USCIS requires clear proof that your Florida office will support executive oversight within one year. We collaborate with professional financial analysts to build credible five year Florida business expansion plans. Thorough economic forecasting ensures that your new office filing passes rigorous government review.',
    },
    {
      title: 'Incomplete Form I-129 Filings and Evidence',
      desc: 'USCIS policy allows officers to deny incomplete benefit filings without first issuing an RFE. Missing filing fee checks, uncertified foreign translations or unexecuted lease contracts cause instant rejections. Our legal team conducts exhaustive document reviews before submitting any petition paperwork to USCIS. Meticulous preparation protects your corporate application from unnecessary delays or sudden administrative denials.',
    },
  ],
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#F8FAFC] text-slate-800 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={bgImage}
          alt="Denial Reasons Background"
          fill
          quality={90}
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-slate-50/80" />
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
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-red-100 text-red-700 font-bold flex items-center justify-center text-sm flex-shrink-0">
                    ✕
                  </div>
                  <h3 className={`text-base sm:text-lg font-bold text-[#0B1829] leading-snug ${bitter.className}`}>
                    {item.title}
                  </h3>
                </div>
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
