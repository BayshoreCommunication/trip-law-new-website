'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultPillars = [
  {
    title: 'A Track Record You Can Verify',
    renderDesc: () => (
      <span>
        Trip Law has filed quite a few H1B petitions for US employers since 2020. Clients rate Trip Law 4.4 out of 5 on Google, across 62 reviews. Read them before you book.
      </span>
    ),
  },
  {
    title: 'Both Sides of the Filing',
    renderDesc: () => (
      <span>
        Employers get compliance reviews, LCA strategy, RFE responses, amendments and extension tracking. Workers get eligibility reviews, stamping guidance, family planning and{' '}
        <Link href="/immigration-lawyer-lakeland-fl" className="text-red-400 font-semibold hover:underline">
          green card
        </Link>{' '}
        strategy. Handling both sides keeps records consistent. A start date on the employer&apos;s forms matches the start date on the worker&apos;s forms.
      </span>
    ),
  },
  {
    title: 'A Practice That Covers Your Next Step',
    renderDesc: () => (
      <span>
        Our practice spans business immigration, family based cases,{' '}
        <Link href="/immigration-lawyer-for-citizenship-lakeland" className="text-red-400 font-semibold hover:underline">
          citizenship
        </Link>
        , asylum and deportation defense. Plans change. A worker may move toward a green card or a family petition and the firm already knows the history.
      </span>
    ),
  },
  {
    title: 'Direct Communication and Easy Booking',
    renderDesc: () => (
      <span>
        You&apos;ll talk to your attorney, not a call center. Our office is open Monday through Friday, 7 a.m. to 7 p.m., so you can reach us before or after work. You can also book a consultation online.
      </span>
    ),
  },
];

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

const WhyChooseUsSection = ({
  tagline = 'WHY CLIENTS CHOOSE TRIPLAW',
  title = 'Why Employers and Foreign Workers Choose Hardam Tripathi as Their H1B Visa Lawyer',
  description = 'US companies hire H1B workers in healthcare, technology, engineering, finance and education. Every case depends on the industry, the job and the deadline. We build each filing around those facts.',
  industryTitle = 'H1B Visa Lawyer Services by Industry',
  industryDesc = 'Each industry brings its own USCIS pressure points, so we tailor the petition.',
  pillars = defaultPillars,
  industries = defaultIndustries,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#061224] text-white overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        
        {/* Part 1: Core Reasons */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-red-500 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
            {tagline}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            {title}
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            US companies hire H1B workers in healthcare, technology, engineering, finance and education. Every case depends on the industry, the job and the deadline. We build each filing around those facts. Work with an experienced{' '}
            <Link href="/h1b-visa-lawyer" className="text-red-400 font-semibold hover:underline">
              H1B visa lawyer
            </Link>{' '}
            for comprehensive petition preparation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto mb-20">
          {pillars.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#0B1829] border border-slate-700/60 hover:border-red-700/60 rounded-2xl p-7 sm:p-9 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-700/20 border border-red-700/40 flex items-center justify-center text-red-500 font-bold text-lg mb-6">
                  ★
                </div>
                <h3 className={`text-xl sm:text-2xl font-bold text-white mb-3 ${bitter.className}`}>
                  {item.title}
                </h3>
                <div className="h-[2px] w-12 bg-red-700 rounded-full mb-4" />
                <p className="text-slate-300 text-base leading-relaxed">
                  {item.renderDesc ? item.renderDesc() : item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Part 2: Industry Services */}
        <div className="pt-10 border-t border-slate-800">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            <span className="text-red-500 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
              INDUSTRY-SPECIFIC EXPERTISE
            </span>
            <h3 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
              {industryTitle}
            </h3>
            <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {industryDesc}
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
                className="bg-[#0B1829] border border-slate-700/60 hover:border-red-700/60 rounded-2xl p-7 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-red-700/20 text-red-500 border border-red-700/30 flex items-center justify-center font-bold text-base mb-5">
                    0{idx + 1}
                  </div>
                  <h4 className={`text-xl font-bold text-white mb-3 ${bitter.className}`}>
                    {item.title}
                  </h4>
                  <div className="h-[2px] w-12 bg-red-700 rounded-full mb-4" />
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;
