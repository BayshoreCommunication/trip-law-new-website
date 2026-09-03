'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const DenialReasonsSection = ({
  badgeText = 'EB-1 RISKS & DELAYS',
  title = 'Why EB-1 Applications Get Denied or Delayed Without an Immigration Lawyer in Florida',
  description = 'Most denials come down to how the case was actually built and presented to USCIS, not necessarily how strong the underlying career really was.',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/denial-reasons-bg.png',
  reasons = [
    {
      title: 'Evidence Fails to Establish Extraordinary Ability',
      desc: "USCIS measures evidence against a specific set of regulatory criteria, and an impressive resume by itself usually won't clear that bar. Every claim has to map onto a recognized category like awards, publications, or original contributions. Applicants often assume their accomplishments speak for themselves, but the petition has to spell that connection out rather than leaving an officer to guess.",
    },
    {
      title: 'Professional Achievements Lack Supporting Documentation',
      desc: "No matter how grand the claim in a personal statement, if it isn't backed by real evidence, it should not be given much credence. Officers assume that for almost every statement in the file there is supporting evidence. It's one of the most common gaps in petitions filed without legal guidance.",
    },
    {
      title: 'Recognition Does Not Establish Sustained Acclaim',
      desc: 'One award or a single media mention almost never meets the sustained acclaim standard, since the whole point of that standard is a pattern across time. An early career success followed by years of ordinary output can actually weaken a case more than help it. Building a timeline of consistent recognition matters more than any one standout achievement ever does.',
    },
    {
      title: 'Incorrect EB-1 Classification Selection',
      desc: "Filing under EB-1A when the facts really point toward EB-1C can sink an otherwise strong applicant, since each category carries its own distinct legal standard. The categories aren't interchangeable, and USCIS won't reclassify a petition on its own initiative. Getting this decision right at the start avoids wasted time, wasted filing fees, and a fair amount of avoidable stress.",
    },
    {
      title: 'Multinational Employment Relationships Are Not Properly Documented',
      desc: "EB-1C cases live or die on a clearly documented corporate relationship between the foreign company and the U.S. entity. Vague statements about being part of the same corporate family don't hold up under review. USCIS wants specifics like ownership percentages, organizational charts, and often financial documentation showing the connection is real.",
    },
    {
      title: 'Form I-140 Evidence Contains Gaps',
      desc: 'Gaps or inconsistencies in the I-140 evidence are one of the most common triggers for a Request for Evidence, and RFEs can easily tack months onto a timeline. Even genuinely strong qualifications can stall out if the petition itself was assembled inconsistently. A careful first filing is almost always faster in the end than patching problems after the fact.',
    },
    {
      title: 'Priority Date or Visa Availability Issues',
      desc: "Even a well built petition can stall if priority dates and Visa Bulletin timing aren't tracked closely, particularly for applicants from countries facing longer backlogs. Missing a filing window over a misread chart adds delay that was entirely avoidable. Watching the monthly bulletin updates matters just as much as getting the paperwork right.",
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
