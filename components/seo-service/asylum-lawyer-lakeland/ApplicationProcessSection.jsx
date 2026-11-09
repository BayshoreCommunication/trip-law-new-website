'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultSteps = [
  {
    step: 'Step 1',
    title: 'Filing Form I 589',
    desc: 'Your case will be started by submitting Form I 589 to USCIS or an immigration court. The form requires information about your background, immigration history and persecution you have been subjected to. At this stage, you will submit your personal statement and supporting documents. You will get a receipt notice from USCIS or the court upon filing your case.',
  },
  {
    step: 'Step 2',
    title: 'Biometrics and Background Checks',
    desc: 'The USCIS will schedule a biometrics appointment soon after your application. The officer at a local Application Support Center will take your fingerprints and photograph. These are run through various security checks in federal databases. A favorable security clearance helps in advancing your case without delay. In case of a bad record, it leads to further screening and delays in processing.',
  },
  {
    step: 'Step 3',
    title: 'Preparation for Asylum Hearing or Court Proceedings',
    desc: 'Proper preparation is the key for a strong case. We match your declaration against the evidence, one point at a time. We conduct practice interviews or mock cross examinations based on the type of case. Affirmative cases are prepared for an interview with a USCIS asylum officer. Defensive cases are prepared for an immigration judge at the Orlando Immigration Court along with a government lawyer.',
  },
  {
    step: 'Step 4',
    title: 'Going to the Interview or Hearing',
    desc: 'In the affirmative process, the asylum officer will ask about your background, your fear and the facts in your written statement. Your interview will last for one to two hours and if needed, an interpreter will be provided for you. In the defensive process, you give your testimony under oath in your individual hearing. The judge will question you and a government attorney will cross examine your testimony and documents.',
  },
  {
    step: 'Step 5',
    title: 'Final Decision and Next Steps',
    desc: "USCIS will send you a decision regarding your interview in writing. Usually, this may happen within a few weeks, although wait times differ greatly among offices. The immigration judge usually gives his decision at the end of the hearing. Sometimes he gives a written decision later on. You'll be granted asylum status and allowed to file for a green card after one year in case of approval. There are still other options if the decision goes the other way.",
  },
];

const ApplicationProcessSection = ({
  tagline = '5-STEP APPLICATION WORKFLOW',
  title = 'How Asylum Application Process Works',
  description = 'The process of filing for asylum consists of five steps from submission to final adjudication. Usually, the sequence remains the same for everyone, although the timing may vary based on the workload of the local office. This is how your case will proceed once it is filed.',
  steps = defaultSteps,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#030914] text-white overflow-hidden">
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
            {description}
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {steps.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#091424] border border-slate-700/60 hover:border-red-700/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div>
                <div className="inline-block px-3 py-1 bg-red-700 text-white font-bold text-xs tracking-wider uppercase rounded mb-4">
                  {item.step}
                </div>
                <h3 className={`text-xl font-bold text-white mb-3 ${bitter.className}`}>
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

export default ApplicationProcessSection;

