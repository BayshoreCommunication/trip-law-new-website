'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultReasons = [
  {
    title: 'Invalid Requests for Evidence (RFEs)',
    description:
      'Missing documents will prompt the government to issue a formal request for evidence. Hiring an immigration lawyer for marriage based green card petitions prevents these disruptive requests. Officers will pause your case completely until you submit the missing information.',
  },
  {
    title: 'Notice of Intent to Deny (NOID)',
    description:
      'A notice of intent to deny is a severe warning from the agency. It is because USCIS believes the available evidence does not establish eligibility. Our experienced lawyers work quickly to respond with stronger evidence and legal analysis to save cases. You only have a limited number of days to answer this official notice.',
  },
  {
    title: 'Using Outdated Forms or Incorrect Fees',
    description:
      'USCIS frequently updates its official forms and changes its required filing fees. Experienced attorneys ensure that your package utilizes the exact current version required. Sending the wrong amount will result in immediate rejection of your entire package.',
  },
  {
    title: 'Red Flag Scrutiny',
    description:
      'Certain factors like large age gaps or short relationships trigger extra government scrutiny. Moreover language barriers, inconsistent living arrangements, prior marriage petitions or limited shared documentation cause additional questions. An immigration attorney can help prepare explanations for these potential red flags. Officers may investigate these cases much more thoroughly before granting an approval.',
  },
  {
    title: 'Failure to Meet Stricter Interview Standards',
    description:
      'Officers compare interview answers with submitted application, financial records, travel history and relationship evidence. Unprepared couples sometimes panic during intense questioning by suspicious government immigration officers. Legal counsel prepares you thoroughly so you can answer every question confidently. Minor discrepancies in your verbal vs written answers can lead to immediate denial of status.',
  },
  {
    title: 'Omitting Prior Immigration Violations',
    description:
      'Failing to disclose past overstays or unauthorized work will cause severe problems. Not mentioning removal proceedings, denied petitions or misrepresentation can also cause consequences. A knowledgeable lawyer reviews your complete history to address these issues safely. Dishonesty on federal forms can lead to a lifetime ban from America completely.',
  },
  {
    title: 'Failing the Affidavit of Support (I-864)',
    description:
      'If the primary sponsor earns insufficient income, the application cannot be approved. Lawyers calculate the household size accurately to see if joint sponsors are necessary. Errors on this financial document cause major delays in the review process.',
  },
  {
    title: 'Incomplete or Outdated Forms',
    description:
      'Leaving blank spaces on required forms can cause immediate rejection by mail. Retaining a legal professional prevents these simple administrative errors from ruining cases. Every question must be answered accurately according to current federal instructions completely.',
  },
  {
    title: 'Missing Deadlines',
    description:
      'Missing a scheduled biometrics appointment or interview will result in immediate abandonment. Law firms track these critical dates carefully to keep your case moving forward. Requesting a rescheduling requires quick action and valid excuses from the applicant.',
  },
];

const DenialReasonsSection = ({
  badgeText = 'PREVENTING DENIALS & DELAYS',
  title = 'Common Reasons Marriage Based Green Card Applications Get Denied or Delayed',
  description = 'Marriage based green card cases rarely fail due to one big error. Most delays happen either due to paperwork errors or conflicting information. Hiring immigration attorney early can prevent these common mistakes from happening in green card process.',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/denial-reasons-bg.png',
  reasons = defaultReasons,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#FAFBFD] text-slate-800 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={bgImage}
          alt="Denial Reasons Background"
          fill
          quality={90}
          className="object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-white/80" />
      </div>

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
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
              {badgeText}
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
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:border-red-700/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-red-700/10 border border-red-700/30 flex items-center justify-center text-red-700 font-bold text-sm">
                    ⚠️
                  </div>
                  <h3 className={`text-lg font-bold text-[#0B1829] ${bitter.className}`}>
                    {reason.title}
                  </h3>
                </div>
                <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
                  {reason.description}
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
