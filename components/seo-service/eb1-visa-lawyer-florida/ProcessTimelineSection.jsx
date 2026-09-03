'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const ProcessTimelineSection = ({
  badgeText = 'PROCESS TIMELINE',
  title = 'How Long You Should Expect for an EB-1 Visa Application',
  subtitle = 'Timelines shift depending on the case, the evidence gathered, the service center handling it, and current visa availability. Even so, most cases move through a fairly predictable set of stages.',
  timelineItems = [
    {
      step: 'Stage 1',
      title: 'Evidence Collection and Petition Preparation',
      desc: 'This is almost always the longest stretch of the whole process. How much documentation you already have on hand makes the biggest difference, since gathering letters, records, and proof of recognition from scratch simply takes time. Applicants who start organizing early, sometimes months before they plan to file, tend to move through this stage far more smoothly than those who wait until the last minute and scramble.',
    },
    {
      step: 'Stage 2',
      title: 'Form I-140 Filing and USCIS Receipt',
      desc: "Once the petition goes in, USCIS sends back a receipt notice confirming the case is officially in the system, along with a receipt number for tracking. That same notice comes in handy again if you later file something related, like a premium processing upgrade. Keep it somewhere safe. You'll likely need to reference it more than once.",
    },
    {
      step: 'Stage 3',
      title: 'Standard USCIS Adjudication',
      desc: 'Standard processing times vary quite a bit by service center and current case volume, and USCIS updates its published figures on a regular basis. Some categories move faster than others depending on where backlogs currently sit, so checking current processing times before setting expectations is worthwhile. Even the published figures are estimates, not guarantees, so leave some room for things to shift.',
    },
    {
      step: 'Stage 4',
      title: 'Premium Processing',
      desc: 'Eligible EB-1 petitioners can pay extra for premium processing to get a faster, guaranteed response window from USCIS. It guarantees a timely decision, or at minimum a Request for Evidence, within the promised window. For applicants under real time pressure, that certainty alone often justifies the cost.',
    },
    {
      step: 'Stage 5',
      title: 'Visa Availability and Priority Date',
      desc: "Even after the I-140 gets approved, there's still a wait for a current priority date under the monthly Visa Bulletin before the next stage can begin. For most EB-1 applicants that movement happens quickly, though backlogs can appear depending on country of birth and category. Checking the bulletin each month helps applicants plan with realistic expectations instead of guessing.",
    },
    {
      step: 'Stage 6',
      title: 'Adjustment of Status or Consular Processing',
      desc: "The final stretch depends heavily on whether you're already in the United States or wrapping things up abroad through a consulate. Each path carries its own procedural requirements, appointment scheduling, and typical wait times. Picking the right one for your situation can genuinely change how quickly the whole case wraps up.",
    },
  ],
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#061224] text-white overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-red-500 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
            {badgeText}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            {title}
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-col gap-6 max-w-5xl mx-auto">
          {timelineItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#0B1829] border border-slate-700/60 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-start shadow-xl"
            >
              <div className="flex-shrink-0 px-4 py-2 bg-red-700 text-white font-bold text-sm tracking-wider uppercase rounded-lg">
                {item.step}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className={`text-xl sm:text-2xl font-bold text-white ${bitter.className}`}>
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

export default ProcessTimelineSection;
