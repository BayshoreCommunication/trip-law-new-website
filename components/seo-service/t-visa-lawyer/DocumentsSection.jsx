'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultDocuments = [
  {
    title: 'Applicant Identity',
    desc: 'You must provide available identity documents to confirm who you are. This includes your passport, birth certificate or national identity card. Any kind of reliable records can help build your case. You need to explain any differences in names, spellings or dates across these records.',
  },
  {
    title: 'Immigration Records',
    desc: 'Collect all available immigration records. Look for your Form I 94 arrival and departure records, visa documents and entry records. Gather prior immigration applications, USCIS receipt notices and immigration court documents.',
  },
  {
    title: 'Personal Declaration and Trafficking Timeline',
    desc: 'You must prepare a first person statement to explain what happened to you. Describe your recruitment process, transportation methods or harboring details. Also explain conditions you experienced, threats or coercion used against you. Events occurring after your escape or release date can help organize relevant events. This declaration allows you to list facts without forcing you to recall every single detail immediately.',
  },
  {
    title: 'Assistance Requests and Exceptions',
    desc: 'Gather relevant records of any law enforcement assistance requests you made. If you were a minor at the time of your trafficking, include information about an applicable age based exemption. Collect data regarding trauma related exceptions related to case.',
  },
  {
    title: 'Alternative Evidence of Trafficking',
    desc: 'Other credible evidence can support when official records are unavailable. Get records from shelters you stayed at, victim advocates or social service organizations. Community support providers often have logs and it helps your case. Statements from other individuals familiar with your situation can establish relevant events.',
  },
  {
    title: 'Law Enforcement Cooperation',
    desc: 'Available evidence can show your active cooperation with police. This includes your written communications with an investigating agency or records of formal interviews. Collect formal requests for assistance or documents showing your active participation in an investigation.',
  },
  {
    title: 'Employment, Financial and Communication Records',
    desc: 'Relevant records can prove your underlying exploitation. Collect your employment agreements, pay statements and work schedules. Gather debt records, bank transfers and wire receipts. Save original text messages, emails and recruitment messages. Keep any communications involving explicit threats and coercion.',
  },
  {
    title: 'Witness Statements and Affidavits',
    desc: 'Witnesses can describe your recruitment methods, harsh working conditions and specific threats. They can detail your living arrangements or notice visible changes in your personal circumstances. Each statement should clearly identify a person\'s relationship to events.',
  },
  {
    title: 'Other Corroborating Evidence',
    desc: 'Photographs, travel records and housing records add critical context to your application. Contemporaneous notes or records from service organizations provide strong support. Include items that relate directly to specific facts in your case. Avoid submitting unrelated material in large quantities just to increase package size.',
  },
  {
    title: 'Medical and Psychological Records',
    desc: 'Medical records or psychological evaluations document the impact of abuse you suffered. They show physical injuries, mental trauma, treatment plans or related long term effects. These records are not universally required for every single application.',
  },
  {
    title: 'Physical Presence and Extreme Hardship Evidence',
    desc: 'Provide records supporting connection between your current U.S. presence and trafficking circumstances. Separate evidence must also support extreme hardship you expect upon removal. This includes trafficking related risks or other relevant personal circumstances in your home country.',
  },
  {
    title: 'Inadmissibility Waiver Documents',
    desc: 'If you have potential inadmissibility concerns, you must file Form I 192 along with supporting evidence. Depending on the ground involved, your filing requires records of prior immigration events. You must obtain certified court dispositions. Write clear personal explanations. Waiver request requires an individual legal review. USCIS does not automatically grant it.',
  },
  {
    title: 'Relationship Documents for Derivative Family Members',
    desc: 'Your family applications require proof of legal relationships. Gather marriage certificates, birth certificates or formal adoption records. You must include documents explaining legal termination of prior marriages, such as divorce decrees. Additional evidence may be necessary for certain parent child relationships or unique family circumstances.',
  },
  {
    title: 'Form I 914 Supplement B (Optional)',
    desc: 'Form I 914 Supplement B is a formal declaration completed by a qualifying law enforcement agency. The document supports your T visa application by confirming your cooperation. However, it is not a mandatory form for every applicant. Absence of Supplement B does not, by itself, mean you are ineligible.',
  },
];

const DocumentsSection = ({
  tagline = 'APPLICATION CHECKLIST',
  titlePrefix = 'Which Documents You Need for a ',
  titleHighlight = 'T Visa Application',
  description = 'Evidence supports legal requirements of your case. No single document automatically guarantees your success. We submit credible alternative evidence when conventional records do not exist.',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/documents-bg.png',
  documents = defaultDocuments,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#F8FAFC] text-slate-800 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={bgImage}
          alt="Documents Section Background"
          fill
          sizes="100vw"
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

