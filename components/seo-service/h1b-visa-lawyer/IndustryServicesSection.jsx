'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultIndustries = [
  {
    title: 'Technology and Software',
    desc: 'Software roles draw close scrutiny of duties, degree fields and wage levels. We describe architecture, systems and security work in precise technical detail for reviewers. Degree fields outside computer science need a documented link to the duties. Titles such as senior engineer must match the actual level of responsibility.',
  },
  {
    title: 'Healthcare',
    desc: 'Physicians, physical therapists and pharmacists often need state licensing alongside H1B approval. Staff nursing roles qualify only in limited cases, so we review each position first. We time credential evaluations and licensing steps ahead of the petition filing date. Hospitals affiliated with universities may qualify as cap exempt, so lottery risk disappears.',
  },
  {
    title: 'Finance and Accounting',
    desc: 'Accountants, actuaries and analysts usually qualify when the duties require specialized coursework. Wage disputes arise often because market pay can exceed the DOL benchmark. We support above benchmark offers with compensation surveys and peer pay data from comparable firms. Job titles must reflect real seniority, since inflated titles draw questions from reviewers.',
  },
  {
    title: 'Engineering and Manufacturing',
    desc: 'Engineers qualify readily, though plant and technician roles often need extra proof. Roles filled with a two year technical certificate rarely meet the degree standard. We look for cap exempt options first, then prepare the strongest cap registration. Wage level planning matters in every sector, since higher levels earn more lottery entries.',
  },
  {
    title: 'Consulting and Management',
    desc: 'Generic business titles face tough questions about the degree requirement and specialty field. We tie each role to analysis, modeling or industry expertise taught in degree programs. Management titles need proof the job demands a specialized degree beyond general experience.',
  },
];

const IndustryServicesSection = ({
  tagline = 'INDUSTRY-SPECIFIC EXPERTISE',
  title = 'H1B Visa Lawyer Services by Industry',
  description = 'Each industry brings its own USCIS pressure points, so we tailor the petition.',
  industries = defaultIndustries,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#F8FAFC] text-slate-800 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {industries.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-700/10 text-red-700 flex items-center justify-center font-bold text-base mb-5">
                  {idx + 1}
                </div>
                <h3 className={`text-xl font-bold text-[#0B1829] mb-3 leading-snug ${bitter.className}`}>
                  {item.title}
                </h3>
                <div className="h-[2px] w-12 bg-red-700 rounded-full mb-4" />
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

export default IndustryServicesSection;

