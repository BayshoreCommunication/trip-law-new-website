'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const HighRiskCasesSection = ({
  badgeText = 'COMPLEX & HIGH-RISK CASES',
  title = 'Which Complex and High Risk Situations Can Affect L1 Visa Applications',
  description = 'Some circumstances make L1 petitions more probable to trigger RFEs or denials. We flag these ahead of time and plan accordingly.',
  riskCases = [
    {
      title: 'New Office Petitions With Limited History',
      desc: 'Newly established Florida offices face heightened scrutiny because they lack an extended operating history. Adjudicators carefully evaluate whether your foreign company maintains sufficient funds for domestic operations. We present detailed capital movement records and client contracts to validate immediate commercial viability. A well prepared petition ensures your new branch obtains legal approval without unnecessary delays.',
    },
    {
      title: 'L1B Specialization Challenges & Denials Risks',
      desc: "USCIS frequently challenges L1B petitions by claiming specialized skills represent standard industry knowledge. Receiving a Request for Evidence can stall your key employee's transfer for months. We counter these challenges by providing proprietary technical manuals, patents and system schematics. Our detailed filings prove that training a domestic worker would be prohibitively time consuming.",
    },
    {
      title: 'Ownership Disputes Between Entities',
      desc: 'Corporate ownership ambiguities can jeopardize visa petitions when equity structures are divided complexly. USCIS requires uninterrupted evidence showing that the foreign entity retains actual business control. We review partnership agreements, stock voting rights and holding company documentation to resolve disputes. Establishing clear legal control prevents unexpected petition rejections during strict government reviews.',
    },
    {
      title: 'Blanket Petition Denials',
      desc: 'Consular officers can deny individual transferees under an approved corporate blanket petition program. Denials often occur when interviewers feel individual duties lack sufficient managerial or specialized depth. When a blanket visa is refused, we quickly refile an individual petition directly with USCIS. Individual filings allow us to present much more comprehensive evidence supporting candidate qualifications.',
    },
    {
      title: 'Small or Sole Shareholder Foreign Entity',
      desc: 'Petitions for foreign sole shareholders trigger heightened scrutiny regarding potential self sponsorship and labor. USCIS evaluates whether the owner performs routine operational work rather than high level executive direction. We demonstrate that foreign operations continue under independent managers while the owner moves to Florida. Proper corporate structuring protects small business owners from common operational labor denial findings.',
    },
    {
      title: 'Remote Work Policies Disqualifications',
      desc: 'Virtual office arrangements, mailbox addresses and residential working setups lead directly to USCIS petition rejections. Federal regulations mandate that employers secure real physical commercial space prior to filing petitions. We review your Florida commercial lease terms to verify compliance with government physical space rules. Ensuring valid commercial premises prevents unexpected requests for evidence regarding your physical location.',
    },
    {
      title: 'Foreign Office Ceasing Operations',
      desc: "The foreign parent or affiliate must remain active throughout the beneficiary's entire U.S. visa stay. If foreign operations shut down or enter liquidation, your transferee's legal status terminates automatically. We help companies maintain ongoing foreign operational compliance through active client contracts and payroll. Maintaining two active entities safeguards your corporate transfer and future permanent residency applications.",
    },
    {
      title: 'Prior Visa Refusals or Violations',
      desc: 'Past nonimmigrant visa denials or status overstays complicate future consular processing for foreign candidates. Although L1 visas allow dual intent, prior immigration violations require formal legal clarification. Our attorneys prepare legal memorandums addressing past immigration records to prevent unexpected processing delays. Proper historical disclosure protects your enterprise from fraud allegations during final visa interviews.',
    },
  ],
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#040B17] text-white overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-red-500 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
            {badgeText}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            {title}
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {riskCases.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#091424]/90 border border-slate-700/60 hover:border-red-700/60 rounded-2xl p-6 sm:p-7 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-red-700/20 border border-red-700/40 flex items-center justify-center text-red-500 font-bold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className={`text-base sm:text-lg font-bold text-white leading-snug ${bitter.className}`}>
                  {item.title}
                </h3>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighRiskCasesSection;
