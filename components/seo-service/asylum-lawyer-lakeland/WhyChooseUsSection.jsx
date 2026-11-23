'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const features = [
  {
    title: 'Attorney History and Federal Experience',
    renderDesc: () => (
      <span>
        <Link
          href="/about"
          className="text-red-400 hover:text-red-300 underline decoration-red-400/50 font-medium"
        >
          Hardam Tripathi
        </Link>{' '}
        earned his Juris Doctorate from Western Michigan University and his Master&apos;s in Policy from the University of Florida. He has also held several jobs in the federal government, including with the U.S. Air Force JAG Corps, the DEA and the ATF. He was also employed by the U.S. Department of State and the U.S. Attorney&apos;s Office, providing him firsthand knowledge of government process, which is invaluable on federal agency asylum cases.
      </span>
    ),
  },
  {
    title: 'Nationwide Immigration Practice',
    renderDesc: () => (
      <span>
        Trip Law handles immigration and nationality law throughout all fifty states as well as U.S. territories – under federal jurisdiction. We also handle immigration cases at Embassies and Consulates abroad.
      </span>
    ),
  },
  {
    title: 'Focus on Asylum and Humanitarian Law',
    renderDesc: () => (
      <span>
        We focus on business immigration, family based immigration and humanitarian based immigration, with special expertise in the field of asylum. We defend those who are persecuted in their homelands because of race, religion, nationality, political opinion or membership in a particular social group. Our attorneys emphasize their asylum cases on the particular protected ground that applies to you.
      </span>
    ),
  },
  {
    title: 'Communication and Case Management',
    renderDesc: () => (
      <span>
        You have a right to get straightforward answers about the status of your case, not being in the dark between filings. We explain to you step by step what is happening with your case, what forms we are preparing, the deadline for each form and what documents are needed.
      </span>
    ),
  },
  {
    title: 'Consultation and Payment Options',
    renderDesc: () => (
      <span>
        Before you commit to anything, we will go over your circumstances in a free, no obligation consultation. There are payment plan options available if you are worried about affording representation.
      </span>
    ),
  },
  {
    title: 'Professional Standing',
    renderDesc: () => (
      <span>
        About the authorAttorney Tripathi is a current member of the American Immigration Lawyers Association, the nation&apos;s primary professional organization for immigration attorneys. This indicates a commitment to stay current on current immigration law and practice.
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
            Why Choose Trip Law for Asylum Representation
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Asylum cases are complex. You require an experienced immigration attorney with a deep knowledge of federal law and immigration regulations.
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
