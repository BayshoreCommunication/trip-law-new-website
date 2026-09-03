'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const ProvenProcessSection = ({
  tagline = 'ATTORNEY-GUIDED PROCESS',
  title = "TripLaw's Proven EB-1 Visa Application Process for Florida Clients",
  description = 'Working with the right EB1 visa lawyer Florida helps turn a strong professional record into a successful petition without all the guesswork. TripLaw follows a structured process built to give every case the strongest possible foundation from day one.',
  steps = [
    {
      step: 'Step 1',
      title: 'Eligibility Review and Case Assessment',
      desc: 'We check your background against the requirements for EB-1A, EB-1B, and EB-1C before recommending any direction. This first conversation usually clarifies which category actually fits, and it sometimes rules out an assumption a client walked in with. It sets the tone for everything that comes after.',
    },
    {
      step: 'Step 2',
      title: 'EB-1 Classification Selection',
      desc: 'Once eligibility is reasonably clear, we settle on the classification that genuinely fits your evidence and career history, not just the one promising the shortest timeline. This gets decided together with the client, with a clear explanation of why one category makes more sense than another in their situation. Nothing gets left to guesswork.',
    },
    {
      step: 'Step 3',
      title: 'Professional Evidence Evaluation',
      desc: "We look closely at how strong the existing documentation already is and where the real gaps sit, comparing what a client has against what USCIS actually expects. This step often surfaces evidence a client didn't realize was relevant, or reveals exactly where additional letters or records still need gathering. It shapes the entire strategy that follows.",
    },
    {
      step: 'Step 4',
      title: 'Petition Strategy and Document Preparation',
      desc: 'We build the strategy and prepare the documents needed to present your case clearly, organizing everything around the specific criteria that apply. Each piece of evidence gets tied back to a legal standard rather than sitting loosely with no clear purpose. The goal is a petition that reads as a coherent argument, not a stack of paperwork an officer has to piece together on their own.',
    },
    {
      step: 'Step 5',
      title: 'Form I-140 Filing and Case Monitoring',
      desc: "We file Form I-140 and track it through USCIS processing, watching closely for updates or requests along the way. Clients stay genuinely in the loop rather than left wondering what's happening behind the scenes. If premium processing applies, we manage that timeline just as closely.",
    },
    {
      step: 'Step 6',
      title: 'USCIS Request for Evidence Response',
      desc: "If USCIS asks for more, we respond with exactly what's needed, on time, without padding the response with material that could muddy an otherwise clear answer. RFEs get treated seriously but calmly, since a well prepared response often resolves the case outright. Our skilled EB1 visa lawyer Florida handles the deadline pressure so the client doesn't have to carry that stress alone.",
    },
    {
      step: 'Step 7',
      title: 'Adjustment of Status or Consular Processing',
      desc: 'Depending on where you currently are, we walk you through Form I-485 or consular processing abroad and explain exactly what each path involves in practice. The right choice depends on your current location, your timeline, and your broader circumstances. We help weigh those factors together rather than defaulting automatically to whichever option is more common.',
    },
    {
      step: 'Step 8',
      title: 'Final Decision and Permanent Residence',
      desc: "Once a final decision arrives, we help you understand exactly what your new status means in practical terms, including next steps like renewing documents or starting to plan for future citizenship. The case doesn't simply end the moment approval comes through. We make sure every client knows what comes next and why it matters.",
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
