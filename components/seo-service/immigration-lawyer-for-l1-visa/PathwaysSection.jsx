'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const PathwaysSection = ({
  tagline = 'L-1 VISA PATHWAYS',
  title = 'Pathways for L1 Visa Applicants',
  subtitle1 = 'Companies can use several L 1 pathways depending on the employee’s role and the corporate structure.',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/pathways-bg.png',
  pathways = [
    {
      title: 'L1A Visa for Executives and Senior Managers',
      desc: 'The L1A classification allows foreign companies to transfer high level executives and key managers directly. Executives must primarily direct corporate policies, major organizational functions or broad business operations. Managerial roles require supervising professional employees or directing an essential operational department within your company. Initial approvals last three years for established operations, reaching a seven year statutory maximum stay.',
    },
    {
      title: 'L1B Visa for Specialized Knowledge Professionals',
      desc: 'The L1B visa supports key personnel with advanced understanding of proprietary company procedures or products. Specialized knowledge requires distinct expertise that goes beyond standard industry skills and basic training. We help businesses prove that foreign candidates hold unique operational mastery of technical systems. Approved L1B employees receive three initial years, with extensions available up to five years.',
    },
    {
      title: 'Qualifying Relationships Between U.S. and Foreign Entities',
      desc: 'To qualify for transfers, foreign and domestic businesses must share common ownership and control. Accepted enterprise relationships include parent corporations, active branch offices, subsidiaries or equal affiliate structures. We establish legal ownership through share certificates, voting rights, capitalization records and tax filings. Our team verifies that corporate ties comply fully with strict USCIS evidentiary regulations.',
    },
    {
      title: 'New Office Petition Pathway',
      desc: 'Foreign companies launching new Florida locations can utilize the dedicated new office petition framework. You must secure physical commercial space in Florida before submitting your initial visa application. New office petitions are approved for one initial year to demonstrate rapid commercial expansion. We craft robust five year business plans to outline domestic hiring schedules and revenue targets.',
    },
    {
      title: 'Eligibility for Blanket Petitions',
      desc: 'Large multinational enterprises can streamline candidate transfers using a single corporate blanket approval. Eligible companies must possess three active branches and meet specific revenue or hiring benchmarks. Transferees under blanket programs apply directly at U.S. consulates, avoiding individual state petitions. Our law firm manages blanket petitions to keep international transfers moving smoothly forward.',
    },
    {
      title: 'L1 to EB-1C Green Card Pathway',
      desc: 'L1A status provides a direct pathway toward permanent residency through the EB-1C classification. Multinational managers can bypass the lengthy Department of Labor PERM labor certification process entirely. Once your Florida branch operates actively for one year, we prepare your green card filing. This transition secures long term stability for your key executives and their immediate family members.',
    },
  ],
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#061224] text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={bgImage}
          alt="Pathways Section Background"
          fill
          quality={90}
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030914] via-[#061224]/90 to-[#030914]" />
      </div>

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
            {subtitle1}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pathways.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#0B1829]/90 border border-slate-700/60 hover:border-red-700/60 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-700/20 border border-red-700/40 flex items-center justify-center text-red-500 font-bold text-base mb-5">
                  0{idx + 1}
                </div>
                <h3 className={`text-lg sm:text-xl font-bold text-white mb-3 ${bitter.className}`}>
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
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

export default PathwaysSection;
