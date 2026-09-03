'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const PathwaysSection = ({
  tagline = 'O-1 VISA PATHWAYS',
  title = 'Special Paths to an O-1 Visa for Extraordinary Ability Professionals',
  subtitle1 = 'Different O-1 cases follow different scripts. The category is broken down into two tracks by the U.S. Citizenship and Immigration Services (USCIS), O-1A and O-1B. The right track depends on the applicant’s professional history,field, and how the petition gets structured.',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/pathways-bg.png',
  pathways = [
    {
      title: 'O-1A for Sciences, Education, Business, and Athletics',
      desc: "O-1A applies to people working in the sciences, education, business, or athletics. USCIS weighs these petitions against eight criteria. An applicant needs either a major internationally recognized award or evidence meeting at least three of those eight. The evidence pool is broad. Awards, selective memberships, published coverage, judging others' work, original contributions that moved the field forward, scholarly writing, a critical role at a respected organization, or a salary well above the norm can all factor in, depending on the case.",
    },
    {
      title: 'O-1B for Individuals in the Arts',
      desc: 'Typical supporting evidence consists of published reviews, actual media attention, starring in a significant production, and remuneration based on true level, as well as awards from established institutions or colleagues.',
    },
    {
      title: 'O-1B for Motion Picture and Television Professionals',
      desc: 'Film and television work gets measured differently. Instead of distinction, USCIS looks for a record of extraordinary achievement, a higher bar than the general arts standard. That usually means documented success across productions, recognition within the industry, and a professional standing that clearly outpaces peers.',
    },
    {
      title: 'O-1 Petition Through a U.S. Employer',
      desc: 'A U.S. employer sponsoring the case directly becomes the petitioner and takes on the job of filing Form I-129. They need to spell out the terms of employment and describe the actual work involved.',
    },
    {
      title: 'O-1 Petition Through a U.S. Agent',
      desc: "Not everyone works for one employer. Someone managing several engagements can file through a U.S. agent, who might be the applicant's actual employer, someone authorized to represent that employer, or someone authorized to represent both sides. The petition still needs a clear itinerary and an explanation of how the arrangement works.",
    },
    {
      title: 'O-1 Visa for Internationally Recognized Professionals',
      desc: 'Some of the applicants come with their own self-assurance. A Nobel Prize, an Olympic medal or a similar prestigious international accolade. Such accomplishment is sufficient on its own merits without the other criteria that a lot of other candidates use.',
    },
    {
      title: 'O-1 Eligibility Based on Sustained Acclaim',
      desc: 'The majority of applicants submit their case in a different manner. They are not about to be seen as one single prize, but rather a string of awards they have acquired over many years and many awards of sustained national or international acclaim. USCIS takes into account the entire package, and a good record over a number of criteria can be as significant as one great record.',
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
