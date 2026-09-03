'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const PreparationSection = ({
  tagline = 'ATTORNEY PREPARATION',
  title = 'How an Immigration Lawyer Prepares EB-2 Applicants for USCIS Review',
  description = 'Preparing an EB-2 case requires more than meeting basic eligibility requirements. An immigration lawyer reviews each part of the case to build a clear, well-supported petition for USCIS review.',
  prepSteps = [
    {
      title: 'Selecting the Appropriate EB-2 Pathway',
      desc: "Everything starts with picking the right pathway, and that's a legal call. An attorney looks at your education, work history, achievements, and immigration situation to figure out whether advanced degree, exceptional ability, employer sponsorship, or NIW gives you the strongest, most efficient case. Choosing wrong after months of prep work is an expensive mistake, and a proper legal review up front avoids it.",
    },
    {
      title: 'Evaluating Education and Professional Experience',
      desc: 'Once the pathway is set, the attorney digs into what will actually support it. Credential evaluations and field alignment for advanced degree cases. Careful review of employment records for progressive experience. For exceptional ability, checking the applicant against all 6 USCIS criteria to see where the evidence is solid and where more is needed.',
    },
    {
      title: 'Building the PERM Strategy',
      desc: 'For employer-sponsored cases, the attorney advises on the job description, minimum qualifications, the recruitment itself, and how results get documented. Small mistakes in how a position is written up, or how recruitment runs, can trigger a DOL audit or an outright denial. Getting this right before recruitment starts saves a lot of trouble later.',
    },
    {
      title: 'Developing the I-140 Petition',
      desc: 'The I-140 petition is really the backbone of the whole case. The attorney organizes the evidence around the specific legal elements being claimed, drafts the cover letter or brief, and checks the whole filing for consistency. A well-built I-140 lays things out clearly enough that USCIS officers can follow it without friction, which cuts down on RFEs.',
    },
    {
      title: 'Strengthening National Interest Waiver Evidence',
      desc: "A strong professional record isn't enough on its own for NIW. It needs a legal argument built around it. The attorney works with the applicant to nail down the proposed work in concrete terms, finds objective sources showing national importance, and makes the case for why this applicant specifically is positioned to carry it out. Recommendation letters, publications, expert declarations, all coordinated around that argument rather than just tossed in.",
    },
    {
      title: 'Preparing for Requests for Evidence',
      desc: 'Even solid petitions sometimes get an RFE. A good attorney anticipates where a particular case is likely to draw scrutiny and has extra documentation ready. When an RFE does show up, the response needs to hit every USCIS concern directly and on time. A targeted, well-documented response beats a general resubmission every time.',
    },
  ],
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#F8FAFC] text-slate-800 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-red-700 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
            {tagline}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1829] tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            {title}
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* Prep Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prepSteps.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-700/10 border border-red-700/30 flex items-center justify-center text-red-700 font-bold mb-4">
                  0{idx + 1}
                </div>
                <h3 className={`text-lg font-bold text-[#0B1829] mb-3 ${bitter.className}`}>
                  {item.title}
                </h3>
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

export default PreparationSection;
