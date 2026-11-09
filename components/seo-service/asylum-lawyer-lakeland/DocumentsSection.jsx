'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultEvidence = [
  {
    title: 'Personal Declaration and Timeline of Events',
    desc: "The personal statement or declaration, is a first hand account of the applicant's story, told in your own words. It should be written in order of events and starts with life in the home country and ends with the date of leaving. Names, places, dates and details of the people who were caused to suffer injury or threat must all be included. Immigration officers compare the statement with the applicant's interview and every detail must match up. We helped with this and double checked the dates against everything else.",
  },
  {
    title: 'Identity Documents and Travel Records',
    desc: 'ID documents identify you and where you have been before. Gather your passport, national ID, birth certificate and past visas. Your travel history will include your I 94, boarding passes and entry stamps. This is evidence of your timeline and arrival date. The dates from these documents should correspond to those on your application.',
  },
  {
    title: 'Medical Records',
    desc: 'Medical records can prove physical and psychological harm. The records of the hospital, emergency room and photographs of your injuries are very strong evidence. Psychological evaluation can explain your memory loss or constant fear. Ask each doctor to specify the cause of your injuries in the chart. We will request certified copies and translate each document written in other languages.',
  },
  {
    title: 'Witness Statements and Other Supporting Documents',
    desc: "Witness statements are ones that have been witnessed by someone who has seen the actual harm or have knowledge of the applicant. Witness statements may be given by family members, neighbours, human rights activists, the witness's name and address and their relationship to the applicant and other evidence. Supporting evidence like police reports and court papers and political organisation membership cards can further strengthen your statement.",
  },
  {
    title: 'Country Conditions and Reports on Persecution',
    desc: "The country conditions documentation should be used to support the fact that the harm that the applicant fears is reasonable. The team will seek information from the United States State Department, United Nations and reports from human rights organizations. This information will describe how the government treats the applicant's group or political opinions. It is best to file those pieces of reports that specifically relate to the applicant's claim.",
  },
  {
    title: 'Supporting Documents',
    desc: "Many applicants struggle to locate all the necessary records. Some can't get records because the home government refuses to provide them or because the records have been destroyed. Where no documents exist, the applicant can make a sworn statement as to why no record can be provided. This can be supplemented with other evidence such as affidavits or photographs. Our team helps you to demonstrate the steps you took to obtain a record.",
  },
];

const DocumentsSection = ({
  tagline = 'EVIDENCE CHECKLIST',
  title = 'What Evidence Can Support an Asylum Application?',
  description = 'USCIS and immigration judges will compare your story with the documents confirming it. Our team will help you to collect records from your home country, from the USA and from third parties. Each piece of evidence will be categorized according to its relevance to your claim.',
  evidenceItems = defaultEvidence,
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/documents-bg.png',
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#F8FAFC] text-slate-800 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={bgImage}
          alt="Asylum Evidence Background"
          fill
          sizes="100vw"
          quality={90}
          className="object-cover object-center opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC]/90 via-[#F8FAFC]/95 to-[#F8FAFC]" />
      </div>

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

        {/* Evidence Grid (6 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {evidenceItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-700/10 border border-red-700/30 flex items-center justify-center text-red-700 font-bold mb-4">
                  0{idx + 1}
                </div>
                <h3 className={`text-xl font-bold text-[#0B1829] mb-3 ${bitter.className}`}>
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

export default DocumentsSection;

