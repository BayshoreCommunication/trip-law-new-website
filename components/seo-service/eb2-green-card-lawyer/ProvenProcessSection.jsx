'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const ProvenProcessSection = ({
  tagline = 'ATTORNEY-GUIDED PROCESS',
  title = "TripLaw's Proven EB-2 Green Card Application Process",
  description = 'Working with an experienced EB2 Green Card Lawyer means an attorney stays involved at every stage, from the first review through the final decision.',
  heroImage = '/assets/seo-service/trip-law.jpeg',
  heroImageAlt = 'Attorney Hardam Tripathi Assisting EB-2 Green Card Applicants',
  heroImageTitle = 'Attorney-Guided EB-2 Application Process',
  consultationLink = '/appointment',
  steps = [
    {
      step: 'Step 1',
      title: 'Eligibility Review and Case Assessment',
      desc: 'Tripathi looks at your education, work history, immigration record, and goals to figure out whether EB-2 fits and which category gives you the best shot.',
    },
    {
      step: 'Step 2',
      title: 'EB-2 Pathway Selection',
      desc: 'Based on that review, he picks the strongest route, advanced degree, exceptional ability, employer-sponsored PERM, or NIW, and walks you through the reasoning so you actually understand the decision.',
    },
    {
      step: 'Step 3',
      title: 'Education and Experience Evaluation',
      desc: "The specific documents that will support your case get evaluated here, credential evaluations, employment letters, achievement records. Any gaps or weak spots surface now, while there's still time to fix them.",
    },
    {
      step: 'Step 4',
      title: 'PERM or NIW Strategy Development',
      desc: 'Employer-sponsored cases move into PERM strategy with the employer, covering job descriptions, recruitment, and documentation. NIW cases go the other direction, defining the proposed endeavor and building the supporting argument.',
    },
    {
      step: 'Step 5',
      title: 'I-140 Petition Preparation and Filing',
      desc: 'Form I-140 and everything supporting it gets prepared and checked for consistency before it goes to USCIS. The petition is built so the reviewing officer can follow it without extra digging. Premium processing gets considered where the timeline calls for it.',
    },
    {
      step: 'Step 6',
      title: 'Priority Date and Visa Availability Monitoring',
      desc: 'After I-140 approval, Tripathi tracks the monthly Visa Bulletin and lets you know when your date is coming up. This shapes when I-485 or consular processing should start, and when to time any concurrent I-765 or I-131 filings.',
    },
    {
      step: 'Step 7',
      title: 'Adjustment of Status or Consular Processing',
      desc: 'Once your date is current, TripLaw walks you through I-485 adjustment or the immigrant visa process abroad, prepping the filing, coordinating documents, and explaining what to expect at biometrics or the consular interview.',
    },
    {
      step: 'Step 8',
      title: 'Final Decision and Permanent Residence',
      desc: "After approval, TripLaw covers what comes next, travel considerations, employment flexibility, conditional residence issues if they apply, and eventually the path toward naturalization. The relationship doesn't end when the green card shows up.",
    },
  ],
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#030914] text-white overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-red-500 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
            {tagline}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            {title}
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* Steps List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {steps.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#091424] border border-slate-700/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="inline-block px-3 py-1 bg-red-700 text-white font-bold text-xs tracking-wider uppercase rounded mb-4">
                  {item.step}
                </div>
                <h3 className={`text-xl font-bold text-white mb-3 ${bitter.className}`}>
                  {item.title}
                </h3>
                <p className="text-slate-300 text-base leading-relaxed">
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

export default ProvenProcessSection;
