'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultSteps = [
  {
    stepNumber: 'Step 1',
    title: 'Determine Your Path',
    description:
      'We analyze your current immigration status thoroughly to choose the ideal filing strategy. A lawyer determines if you should use adjustment or consular processing pathways. We prepare customized immigration petitions focusing on the specific needs of your family situations.',
  },
  {
    stepNumber: 'Step 2',
    title: 'Obtain Required Documents',
    description:
      'Our administrative team provides a comprehensive checklist of every document you need. A lawyer reviews your financial records to ensure you meet income guidelines. We help you obtain certified translations for any foreign language birth certificates.',
  },
  {
    stepNumber: 'Step 3',
    title: 'Compile the Petition Package',
    description:
      'Our legal team assembles forms including the Form I-130 Petition for Alien Relative. Lawyers complete the Form I-130A Supplemental Information and Form I-485 application accurately. We also integrate the Form I-864 Affidavit of Support and Form I-693 perfectly.',
  },
  {
    stepNumber: 'Step 4',
    title: 'File Optional Work and Travel Forms',
    description:
      'Filing extra applications allows the foreign spouse to work and travel freely. Your attorney can file Form I-765 for an Employment Authorization Document safely. Additionally we prepare Form I-131 for an Advance Parole travel document simultaneously.',
  },
  {
    stepNumber: 'Step 5',
    title: 'Attend Biometrics Appointment',
    description:
      'The government requires applicants’ fingerprints be taken and background check be performed before approving any petition. An attorney explains what to expect during this quick official appointment beforehand. Our staff tracks your scheduling notice to ensure no dates are missed.',
  },
  {
    stepNumber: 'Step 6',
    title: 'Prepare for and Attend Green Card Interview',
    description:
      'Couples must undergo rigorous preparation before meeting with local federal immigration officers. Your legal representative can attend the final interview with you in Florida. We ensure the questioning remains fair and professionally managed from start to finish.',
  },
  {
    stepNumber: 'Step 7',
    title: 'Issue Green Card',
    description:
      'The federal agency will issue the official card after a successful review. The attorney verifies that your physical card contains correct dates and names. We then help you plan for the future removal of marital status conditions.',
  },
];

const WhatToExpectSection = ({
  tagline = 'STEP-BY-STEP PROCESS',
  title = 'What to Expect When You Work With Trip Law For Marriage Based Green Card',
  description = 'Every marriage green card case follows a set legal framework. However your specific life history determines the exact documents, strategies and evidence your file needs. Trip Law ensure your file stays perfectly organized and compliant with current USCIS rules.',
  steps = defaultSteps,
}) => {
  return (
    <section className="w-full py-16 lg:py-24 bg-[#FAFBFD] text-slate-800 overflow-hidden">
      <div className="w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[2px] w-12 sm:w-16 bg-red-700 rounded-full" />
            <span className="text-red-700 font-bold text-xs sm:text-sm tracking-widest uppercase">
              {tagline}
            </span>
            <span className="text-red-700 font-bold text-xs sm:text-sm">★</span>
            <div className="h-[2px] w-12 sm:w-16 bg-red-700 rounded-full" />
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1829] tracking-tight mb-4 ${bitter.className}`}>
            {title}
          </h2>

          <p className="text-slate-600 font-normal text-base sm:text-lg max-w-3xl leading-relaxed">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:border-red-700/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-red-700 text-white font-bold text-xs rounded-full uppercase tracking-wider">
                    {item.stepNumber}
                  </span>
                  <h3 className={`text-lg font-bold text-[#0B1829] ${bitter.className}`}>
                    {item.title}
                  </h3>
                </div>
                <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatToExpectSection;
