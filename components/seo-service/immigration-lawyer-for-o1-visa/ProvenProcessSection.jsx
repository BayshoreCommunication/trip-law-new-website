'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const ProvenProcessSection = ({
  tagline = 'ATTORNEY-GUIDED PROCESS',
  title = "TripLaw's Proven O-1 Visa Application Process",
  description = 'Every immigration lawyer for O-1 visa engagement at TripLaw follows a structured process with the attorney involved at every stage.',
  steps = [
    {
      step: 'Step 1',
      title: 'Eligibility Review and Case Assessment',
      desc: "It begins with a close look at the applicant's professional background, immigration history, and planned activities in the United States. The attorney evaluates whether the record supports a petition, flags anything concerning early, and explains honestly what the process will actually involve.",
    },
    {
      step: 'Step 2',
      title: 'O-1 Classification Selection',
      desc: 'From there, the attorney determines the right classification. O-1A for sciences, education, business, or athletics. O-1B for the arts, or for motion picture and television work. Getting this right matters, since each category carries its own evidentiary standard for the entire petition.',
    },
    {
      step: 'Step 3',
      title: 'Evidence Mapping and Case Planning',
      desc: "The attorney reviews the applicant's documentation against the applicable criteria and builds a written plan covering which criteria will be addressed, what evidence will be submitted, and what still needs to be gathered.",
    },
    {
      step: 'Step 4',
      title: 'Petition Preparation and Document Collection',
      desc: 'TripLaw coordinates preparation of the full package, including Form I-129, the support memorandum, all evidentiary exhibits, any required advisory opinion, and the applicable fees. The attorney reviews everything before it goes out.',
    },
    {
      step: 'Step 5',
      title: 'USCIS Filing and Case Monitoring',
      desc: 'Once finalized, TripLaw files with USCIS and confirms receipt. The attorney tracks the case as it moves through the system and keeps clients updated along the way.',
    },
    {
      step: 'Step 6',
      title: 'RFE and USCIS Response Preparation',
      desc: 'If a Request for Evidence comes back, TripLaw prepares a thorough written response addressing each issue directly, filed within the USCIS deadline.',
    },
    {
      step: 'Step 7',
      title: 'Consular Processing or Status Approval',
      desc: 'For applicants abroad, TripLaw helps with consular processing after approval, including the DS-160 application, the visa fee, and interview preparation. For applicants already in the United States, the attorney explains the path to O-1 status.',
    },
    {
      step: 'Step 8',
      title: 'Final Decision and Next Immigration Steps',
      desc: 'Once the decision comes through, the attorney walks the client through what it means, explains the authorized terms, and talks through what comes next. That might be an extension, O-3 status for family members, or longer-term planning.',
    },
  ],
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#030914] text-white overflow-hidden">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {steps.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#091424] border border-slate-700/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="inline-block px-3 py-1 bg-red-700 text-white font-bold text-xs tracking-wider uppercase rounded mb-4">
                  {item.step}
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

export default ProvenProcessSection;
