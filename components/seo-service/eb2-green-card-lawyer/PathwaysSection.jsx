'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const PathwaysSection = ({
  tagline = 'EB-2 GREEN CARD PATHWAYS',
  title = 'Special Paths to an EB-2 Green Card for Qualified Professionals',
  subtitle1 = 'EB-2 eligibility can be established through different pathways, depending on your qualifications and the requirements of the position.',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/pathways-bg.png',
  pathways = [
    {
      title: 'EB-2 Through an Advanced Degree',
      desc: 'This is the pathway most people picture when they think of EB-2. Professionals with a U.S. master’s degree or higher, or its foreign equivalent, may qualify for EB-2 classification when the position requires an advanced degree. A doctorate makes the case stronger, but a master\'s is enough as long as it\'s documented properly and evaluated where needed.',
    },
    {
      title: "EB-2 Through a Bachelor's Degree and Progressive Experience",
      desc: "A bachelor's plus 5 years of progressive experience can work instead. USCIS wants to see growth, not five years of doing the same thing on repeat. Promotion letters, expanded job duties, that kind of paper trail is more important here than people expect.",
    },
    {
      title: 'EB-2 Through Exceptional Ability',
      desc: 'If neither degree pathway fits, exceptional ability might. USCIS checks this against 6 criteria, and you need at least 3. That said, hitting the minimum threshold and building a persuasive case are 2 different things. Academic records, licenses, published work, salary data that shows you\'re earning above your peers, recognition from people in your field. All of it helps paint the picture.',
    },
    {
      title: 'EB-2 With PERM Labor Certification',
      desc: 'Most employer-sponsored EB-2 cases need a PERM labor certification from the Department of Labor before Form I-140 ever gets filed. The employer has to recruit for the role first and show, on paper, that no qualified U.S. worker applied. There\'s a specific process for this, and Form ETA-9089 has to reflect it accurately. Get a step wrong here and the whole thing can restart from scratch.',
    },
    {
      title: 'EB-2 National Interest Waiver',
      desc: 'The NIW carves out an exception inside EB-2. No employer and PERM is needed here. Instead, you have to show your proposed work has real merit and national importance, that you\'re positioned to actually carry it out, and that skipping the standard requirements benefits the country on balance. This test comes from a case called Matter of Dhanasar, and USCIS still applies it today.',
    },
    {
      title: 'Self-Petitioning Through a National Interest Waiver',
      desc: 'Here\'s what makes NIW appealing in practice. You file Form I-140 yourself and you don\'t need any sponsorship. Researchers, physicians, engineers, scientists, and founders tend to use this route most. Building a strong self-petition means defining your proposed work precisely, tying it to something objectively important, and showing why you specifically are the right person to do it.',
    },
    {
      title: 'Adjustment of Status Through EB-2',
      desc: 'If you\'re already in the U.S. in valid status, and a visa number is available under the Visa Bulletin, you may be able to file Form I-485 without leaving the country. You can stay put while USCIS works through the case. Many applicants also file Form I-765 for work authorization and Form I-131 for advance parole at the same time, which gives some breathing room during processing.',
    },
    {
      title: 'Consular Processing Through EB-2',
      desc: 'Once I-140 is approved and your priority date is current, the National Visa Center takes over the documentation before the State Department schedules your interview. Pass that interview and you get an immigrant visa, which lets you enter the U.S. as a permanent resident.',
    },
  ],
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#061224] text-white overflow-hidden">
      {/* Background Image */}
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
        {/* Section Header */}
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

        {/* Pathways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
