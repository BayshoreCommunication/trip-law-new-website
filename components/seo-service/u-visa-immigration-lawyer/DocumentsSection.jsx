'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';
import { U_VISA_IMAGE_METADATA } from './uVisaImagesMeta';

const bitter = Bitter({ subsets: ['latin'] });

const evidenceItems = [
  {
    title: 'Police Reports',
    paragraphs: [
      'Police reports document the reported crime, date, location, parties involved, initial statements and investigative details. Supplemental reports may contain information absent from the first report. Sometimes reports may not describe every aspect of your experience. We review the report for relevant details, gaps. And find any need for additional supporting material.',
    ],
  },
  {
    title: 'Incident Records',
    paragraphs: [
      'Computer Aided Dispatch (CAD) logs, 911 call records, incident numbers and agency correspondence show your reporting time. These documents also prove how authorities responded to the crime. Most importantly incident records can be useful when you don’t have a complete police report. Or your initial report contains limited information.',
    ],
  },
  {
    title: 'Court Documents and Other Official Records',
    paragraphs: [
      'Court order, criminal complaints, docket entries and protective orders establish the legal context of an incident. These charging documents and hearing records also track the official timeline.',
      'Other official records can also clarify the status of a case. It includes police clearance letters, USCIS receipt, approval notices, FBI criminal history reports or Rap sheets.',
    ],
  },
  {
    title: 'Medical or Mental Health Documentation',
    paragraphs: [
      'Collect medical records, treatment notes, psychological evaluations and counseling records. This evidence supports your substantial physical or mental abuse claim. We can discuss appropriate records with you and identify potential privacy concerns.',
    ],
  },
  {
    title: 'Personal Declaration',
    paragraphs: [
      'Personal declaration is when you give a detailed affidavit written of the crime. You’ll explain the incident. Its effects on your physical or mental health. And any fear or safety concerns. Also your contact with law enforcement. Your statement should be consistent with the available evidence.',
    ],
  },
  {
    title: 'Witness Statements',
    paragraphs: [
      'Witnesses can be sworn affidavits from your family members, neighbors, coworkers or bystanders. Their statement supports parts of your account. It describes observed injuries or behavior. They can explain events surrounding the crime. Witnesses must explain their connection to the event. They must also separate their personal observation from information they heard from others.',
    ],
  },
  {
    title: 'Evidence of Helpfulness to Law Enforcement',
    paragraphs: [
      'To prove your assistance to the law, correspondence with investigators and interview records help. Additionally requests for information and other agency documents show your cooperation. So keep copies of relevant communications. Also record the dates of significant contact.',
    ],
  },
  {
    title: 'Additional Evidence Based on Your Case',
    paragraphs: [
      'Keep photographs, messages, emails and records from victim service organizations or other relevant documentation. Because these will support specific facts. We assess if there is any missing evidence or information. We then discuss legal options for obtaining additional records.',
    ],
  },
];

const DocumentsSection = () => {
  const { documentsDenialBg } = U_VISA_IMAGE_METADATA;

  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#F8FAFC] text-slate-800 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={documentsDenialBg.src}
          alt={documentsDenialBg.alt}
          title={documentsDenialBg.title}
          fill
          sizes="100vw"
          quality={80}
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-slate-50/70" />
      </div>

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1829] tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            What Evidence Can Support a U Visa Petition?
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            USCIS looks at the full record to assess a U Visa petition. Strong documentation connects the criminal activity with your harm. Credible evidence proves your knowledge of the crime and helpfulness to law enforcement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {evidenceItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
            >
              <div className="w-10 h-10 rounded-xl bg-red-700/10 border border-red-700/30 flex items-center justify-center text-red-700 font-bold mb-4 flex-shrink-0">
                0{idx + 1}
              </div>
              <h3 className={`text-lg font-bold text-[#0B1829] mb-3 ${bitter.className}`}>
                {item.title}
              </h3>
              <div className="space-y-2.5 text-slate-600 text-sm leading-relaxed">
                {item.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;
