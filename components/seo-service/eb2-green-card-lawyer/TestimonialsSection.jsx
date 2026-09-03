'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const TestimonialsSection = ({
  tagline = 'LICENSED ATTORNEY ON EVERY CASE',
  title = 'TripLaw Puts a Licensed Attorney on Every EB-2 Green Card Case',
  description = "Attorney Hardam Tripathi handles every EB-2 case at TripLaw directly. He's a licensed EB2 green card lawyer with genuine federal legal experience and specialized training behind him. That federal background carries real weight in EB-2 and NIW work, where knowing how federal agencies actually operate, and what they look for, tends to produce stronger petitions. Tripathi is an active AILA member and regularly speaks with members of Congress about immigrant communities, including veterans and people displaced by conflict abroad.",
  licensingNote = "One note worth being clear about: Tripathi isn't licensed in Florida. He practices under his District of Columbia and Wisconsin licenses, extended nationwide through federal jurisdiction.",
  testimonialsTitle = "What TripLaw's Immigration Clients Are Saying",
  testimonials = [
    {
      author: 'Shaw',
      text: "Trip and his team represented my wife for her visa and green card, and I couldn't be more pleased with their service. They are truly the best immigration lawyers in town. From their deep knowledge of the law to guiding us through every single step, they did a fantastic job. Because of them, my wife is finally on her way to the U.S.. A huge thank you to Trip and the entire team!",
      rating: 5,
    },
    {
      author: 'Lubna Rihani',
      text: 'I highly recommend this law firm! Trip and his team helped me get my green card incredibly fast. Throughout the entire process, Trip was exceptionally supportive and understanding. Thank you so much for genuinely caring about me and my family.',
      rating: 5,
    },
    {
      author: 'Gian Royano',
      text: 'Attorney Trip has an amazing team! They made the entire process so easy, and I received my citizenship in what felt like record time. I will definitely be recommending him to all my family and friends.',
      rating: 5,
    },
  ],
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#061224] text-white overflow-hidden">
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
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
            {description}
          </p>
          {licensingNote && (
            <p className="text-slate-400 text-sm sm:text-base italic leading-relaxed bg-[#0B1829] p-4 rounded-xl border border-slate-700/60 max-w-3xl">
              {licensingNote}
            </p>
          )}
        </div>

        {/* Testimonials Block */}
        <div className="mt-12">
          <h3 className={`text-2xl sm:text-3xl font-bold text-center text-white mb-8 ${bitter.className}`}>
            {testimonialsTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#0B1829] border border-slate-700/60 rounded-2xl p-6 sm:p-7 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <span key={i} className="text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 italic">
                    "{item.text}"
                  </p>
                </div>
                <div className="border-t border-slate-800 pt-4 font-bold text-white text-base">
                  — {item.author}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
