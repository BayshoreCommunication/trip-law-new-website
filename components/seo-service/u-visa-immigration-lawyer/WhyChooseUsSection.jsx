'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const features = [
  {
    title: 'Experienced & Skilled Lawyer for Case',
    renderDesc: () => (
      <span>
        <Link
          href="/about"
          className="text-red-400 hover:text-red-300 underline decoration-red-400/50 font-medium"
        >
          Lead Attorney Hardam Tripathi
        </Link>
        , Esq. brings deep legal experience from multiple federal agencies. He served inside the U.S. Air Force JAG Corps, the Drug Enforcement Administration (DEA) and more. Tripathi earned his Juris Doctorate from Western Michigan University. He also holds a Master’s degree in Policy from the University of Florida.
      </span>
    ),
  },
  {
    title: 'U Visa Petition Preparation',
    renderDesc: () => (
      <span>
        We review your eligibility and prepare Form I 918. We organize supporting documents and help develop your personal declaration. Our work focuses on presenting your case clearly. And we address the requirements relevant to your application. We help you identify the appropriate agency. We prepare a request for Form I 918, Supplement B, within the agreed scope of our services.
      </span>
    ),
  },
  {
    title: 'Review of Immigration History',
    renderDesc: () => (
      <span>
        We carefully review your prior removal orders, visa applications and unlawful presence. We build a strong strategy for your criminal records to prevent affecting your case. We discuss whether an inadmissibility waiver or further legal review may be needed.
      </span>
    ),
  },
  {
    title: 'Clear Fees and Communication',
    renderDesc: () => (
      <span>
        Our website advertises a free, no obligation consultation and payment plan options. Before hiring us, ask about the legal fees, services included, communication procedures and attorney responsible for your case.
      </span>
    ),
  },
  {
    title: 'Honest Guidance About Your Case',
    renderDesc: () => (
      <span>
        Every U Visa petition depends on its facts, supporting evidence and USCIS review. We explain the requirements and available options. We don’t fake promising an approval or a specific processing time. Our u visa immigration lawyer Tripathi gives you realistic answers and stands by your side through every step of your legal journey.
      </span>
    ),
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#061224] text-white overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            Why Choose Trip Law?
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Trip Law, P.A. offers legal defense rooted in extensive federal service. Clients choose to work with us because we solve their complex cases with care and dedication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {features.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#0B1829] border border-slate-700/60 hover:border-red-700/60 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-700/20 border border-red-700/40 flex items-center justify-center text-red-500 font-bold text-lg mb-5">
                  ★
                </div>
                <h3 className={`text-xl font-bold text-white mb-3 ${bitter.className}`}>
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {item.renderDesc()}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
