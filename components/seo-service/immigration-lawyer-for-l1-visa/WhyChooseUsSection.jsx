'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const WhyChooseUsSection = ({
  tagline = 'WHY FLORIDA BUSINESSES CHOOSE TRIPLAW',
  title = 'Why Florida Businesses Choose Trip Law for L1 Visa Process',
  description = 'Immigrant business choose us as their immigration lawyer for l1 visa due to our exceptional local expertise and client care and lots of positive google review.',
  features = [
    {
      title: 'Access to Licensed Attorneys for Every Case',
      desc: 'At Trip Law, you work directly with experienced immigration attorneys rather than nonattorney staff. Our licensed attorneys Hardam Tripathi handle every step of petition preparation, legal review and filing process. Direct communication guaranties your questions get answered quickly. In addition we provide accurate and personalized legal guidance. Dedicated legal representation gives you confidence and peace of mind throughout the application.',
    },
    {
      title: "Experience With Lakeland's Employers",
      desc: "We provide specialized corporate immigration counsel for Lakeland's thriving manufacturing and industrial logistics sector. Logistics companies rely on our firm to transfer supply chain directors and engineers. We tailor petitions to match Central Florida's regional commercial demands and operational models. Our industry expertise helps local employers expand operations smoothly across the I-4 corridor.",
    },
    {
      title: 'Business Focused Counsel for Work Visa Expansion',
      desc: 'We approach every L1 visa petition from a practical business and growth perspective. Our team aligns your immigration timeline with corporate leasing, hiring and revenue goals. We collaborate with your executives to build defensible corporate structures and duty descriptions. Strategic legal planning ensures your commercial expansion into Florida achieves long term financial success.',
    },
    {
      title: 'Comprehensive Case Management with Flat Fees',
      desc: 'Trip Law provides transparent flat fee pricing so you avoid unexpected legal cost increases. We manage your entire case from initial document gathering through final visa approval. Our team handles business plans, state corporate filings, USCIS paperwork and consular preparations. Comprehensive case management lets you focus on running your business while we handle immigration.',
    },
    {
      title: 'Expertise in Complex RFEs and USCIS Issues',
      desc: "Our firm specializes in successfully resolving complex Requests for Evidence and petition challenges. We audit prior application rejections to identify and correct critical evidentiary vulnerabilities quickly. Our attorneys prepare rigorous legal briefs supported by expert opinions and corporate evidence. Proven legal experience overcoming government objections protects your company's overall investment and expansion goals.",
    },
  ],
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#061224] text-white overflow-hidden">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#0B1829] border border-slate-700/60 hover:border-red-700/60 rounded-2xl p-7 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-700/20 border border-red-700/40 flex items-center justify-center text-red-500 font-bold text-lg mb-5">
                  ★
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

export default WhyChooseUsSection;
