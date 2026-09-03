'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const ProvenProcessSection = ({
  tagline = 'ATTORNEY-GUIDED PROCESS',
  title = "Trip Law's Proven L1 Visa Process for Florida Clients",
  description = 'Our L1 process keeps each stage organized. We handle the legal paperwork carefully while keeping you informed about every required step.',
  steps = [
    {
      step: 'Step 1',
      title: 'Eligibility Review and L1 Case Strategy',
      desc: 'We begin with a detailed assessment of your corporate structure and the employee’s background. In a strategy session, we identify whether L 1A or L 1B is appropriate and we plan the best approach. If needed, we discuss alternatives (e.g. blanket petition vs. individual filing). At this stage, we also note any issues (such as remote work or prior visas) and plan how to address them.',
    },
    {
      step: 'Step 2',
      title: 'Evidence Collection and Document Preparation',
      desc: 'We then gather all necessary documents. For the employer, this includes evidence of the U.S. and foreign companies’ operations, ownership and finances. For the beneficiary, we assemble proof of prior employment, education and expertise. Our team helps draft a strong business plan if your case involves a new office. Throughout this step, we ensure every piece of evidence directly supports USCIS requirements.',
    },
    {
      step: 'Step 3',
      title: 'Paralegal Prepared Forms and Petition Paperwork',
      desc: 'Our attorney personally prepare the petition. Our paralegal fill out Form I-129 and any associated forms (such as I-907 for premium processing) with careful attention to detail. Every fact in the forms is cross checked against the evidence. We draft a legal memorandum or petition letter articulating your case’s merits. You will review and sign all documents, but we do the form filling on your behalf – the only tasks you need are providing signatures and documents we request.',
    },
    {
      step: 'Step 4',
      title: 'USCIS Filing and Case Tracking',
      desc: 'Once the petition is ready, we file it with USCIS (either via mail or electronically as appropriate) and pay the filing fees. We provide you a receipt notice and set up monitoring. As your case moves through USCIS, we track updates in real time.',
    },
    {
      step: 'Step 5',
      title: 'Consular or Status Processing',
      desc: 'If your employee is applying in the U.S., we coordinate any necessary change of status filings (Form I-539 for dependents, for example). If abroad, once USCIS approves, we guide you through consular processing logistics.',
    },
    {
      step: 'Step 6',
      title: 'Interview Preparation',
      desc: 'After USCIS approval, our work continues through the consular interview or admission process. We prepare the beneficiary and family with interview coaching (see above) and finalize any visa paperwork.',
    },
    {
      step: 'Step 7',
      title: 'Approval Follow Up',
      desc: 'Once the visa is issued, we assist with arrival compliance, such as checking the I-94 admission. If you’re on track for a green card, we start planning the EB-1C petition. Our follow up never stops until your employee is happily settled in the U.S. and your file is audit ready.',
    },
    {
      step: 'Step 8',
      title: 'Assist With L2 Family Integration',
      desc: 'We don’t just stop at your employee. We help their spouse and children integrate. This includes filing the L 2 visa applications and the spouse’s work authorization (EAD). We advise on timing for the spouse’s I-765 so they can start working as soon as possible and we help the family apply for Social Security numbers.',
    },
    {
      step: 'Final Step',
      title: 'Guide to Green Card Pathway',
      desc: 'Finally we guide you through the transition to permanent residency. For qualifying executives and managers, we prepare the EB-1C immigrant petition in right time. We map out how continued L 1 status and EB-1C filing will align. We advise on concurrent filing or consular processing. Our goal is to make your talent’s journey to green card and ensure long term leadership retention in Florida.',
    },
  ],
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#030914] text-white overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
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
