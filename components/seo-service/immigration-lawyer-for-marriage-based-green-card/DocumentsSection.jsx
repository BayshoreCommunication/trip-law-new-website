'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultDocuments = [
  {
    title: 'Form I-130, Petition for Alien Relative',
    description:
      'The American citizen or permanent resident sponsor must file this foundational family petition. It officially establishes the legal relationship between the two married individuals to the government. When the form is accepted you will receive USCIS Notice of Action.',
  },
  {
    title: 'Form I-485, Adjustment of Status',
    description:
      'The foreign spouse submits this specific application to register permanent residence within America. It can only be utilized if the applicant is physically inside the country. This form changes your temporary status into a permanent lawful resident status seamlessly.',
  },
  {
    title: 'Form I-864, Affidavit of Support',
    description:
      'The sponsor must demonstrate sufficient financial resources to support the foreign spouse completely. This document ensures the applicant will not violate the strict Public Charge Rule. You must provide recent tax returns and employment verification letters with this form.',
  },
  {
    title: 'Form I-693, Medical Examination',
    description:
      'A designated civil surgeon must perform a thorough medical examination of the applicant. This form proves you do not have any dangerous communicable health conditions. The doctor will seal the results in a secure envelope for the government.',
  },
  {
    title: 'Forms I-765 & I-131 (Optional)',
    description:
      'These optional forms provide employment authorization and travel permission while your case pends. They allow the foreign spouse to work legally and travel outside the country. You must pay separate government filing fees for these specific benefits in 2026.',
  },
  {
    title: 'Proof of Sponsor Status',
    description:
      'Before USCIS even looks at your relationship, the sponsor has to legally prove they are a U.S. citizen or green card holder. You can easily prove this through sending a clean, readable copy of a U.S. passport, a naturalization certificate, a birth certificate, or both sides of a permanent resident card.',
  },
  {
    title: "Foreign Spouse's Birth Certificate",
    description:
      'Immigrant spouse must provide a certified copy of their original birth certificate. USCIS verifies spouse’s identity, parents\' names and details of official civil registration. You must attach certified English translation if the document is not English. Find alternative evidence if no official birth record exists in your home country.',
  },
  {
    title: 'Marriage Certificate',
    description:
      'You must submit a legal marriage certificate from the civil registry office directly. Traditional or religious certificates are generally not accepted without official government registration. The document must clearly show the date and specific location of your wedding.',
  },
  {
    title: 'Identity & Entry Documents',
    description:
      'The foreign spouse needs to show proof of their legal entry into America. This includes copies of their passport pages and the electronic I-94 travel record. Any previous visa documentation must also be included in your final submission package.',
  },
  {
    title: 'Passport style Photos',
    description:
      'Both spouses must provide recent identical color photographs taken within thirty days. These pictures must meet specific government dimensions and background color requirements exactly. Write the full name of each person lightly on the back of these photos.',
  },
  {
    title: 'Financial Commingling',
    description:
      'Couples must demonstrate that they share financial assets and responsibilities together transparently. You can submit joint bank statements showing regular monthly activity and utility bills. Credit card statements with both names also prove shared financial accounts successfully.',
  },
  {
    title: 'Joint Residency',
    description:
      'Living under the same roof is a strong proof for marriage based green card case. You need to show your marriage is active through living together in same physical home. Provide copies of your signed residential lease or property deed showing both names. Driver\'s licenses showing identical home address provide strong proof of cohabitation.',
  },
  {
    title: 'Life Documentation',
    description:
      'This category includes legal documents that name your spouse as a primary beneficiary. You should provide copies of health insurance policies or active retirement accounts. Last wills and testaments also demonstrate deep commitment to your shared future life.',
  },
  {
    title: 'Relationship History',
    description:
      'A clear timeline helps USCIS officer see how your love story naturally unfolded over time. You can include photos from your wedding, vacations and family gatherings with other people. Brief written statements from friends can also support your romantic history timeline.',
  },
];

const DocumentsSection = ({
  tagline = 'APPLICATION CHECKLIST',
  title = 'Documents Needed for a Marriage Based Green Card Application',
  description = 'Official government agencies require extensive evidence to verify your relationship and financial security.',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/documents-bg.png',
  documents = defaultDocuments,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-white text-slate-800 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={bgImage}
          alt="Documents Background"
          fill
          quality={90}
          className="object-cover object-center opacity-30"
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
          {documents.map((doc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:border-red-700/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-red-700/10 border border-red-700/30 flex items-center justify-center text-red-700 font-bold text-sm">
                    📁
                  </div>
                  <h3 className={`text-lg font-bold text-[#0B1829] ${bitter.className}`}>
                    {doc.title}
                  </h3>
                </div>
                <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
                  {doc.description}
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
