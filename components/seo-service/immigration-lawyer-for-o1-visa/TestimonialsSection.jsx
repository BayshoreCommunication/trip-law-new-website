'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const TestimonialsSection = ({
  tagline = 'LICENSED ATTORNEY ON EVERY CASE',
  title = 'TripLaw Puts a Licensed Attorney on Every O-1 Visa Case',
  description = "When you work with TripLaw on an O-1 case, you are working directly with Attorney Hardam Tripathi, a U.S. Immigration and Nationality Law attorney who practices across all 50 states, U.S. territories, and at U.S. Embassies and Consulates abroad. He holds a Juris Doctorate from Western Michigan University, a Master's in Policy from the University of Florida, and a Bachelor's degree in Business Management and Marketing from the University of South Florida. His career has taken him through several federal agencies, including the U.S. Air Force JAG Corps, the Drug Enforcement Administration, the Bureau of Alcohol, Tobacco, Firearms and Explosives, the U.S. Department of State, the U.S. Attorney's Office, and the Federal Defenders Office. He is licensed to practice law in the District of Columbia and the state of Wisconsin, and he practices immigration law across all 50 states and at U.S. Embassies and Consulates abroad through federal jurisdiction. He is also an active member of the American Immigration Lawyers Association. For clients looking for an immigration lawyer for O-1 visa cases backed by true federal legal experience, that background shapes every case TripLaw takes on.",
  testimonialsTitle = "What TripLaw's Immigration Clients Are Saying",
  testimonials = [
    {
      author: 'Tanjia Mou',
      text: 'I’m very grateful to Mr. Trip and his team for their support throughout my IR-1 visa process. They were always professional, patient, and attentive. They provided video guidance, helped me prepare for my interview, carefully reviewed my documents, and kept me informed at every step. I truly appreciate their dedication and highly recommend Mr. Trip to anyone seeking assistance with immigration matters.',
      rating: 5,
    },
    {
      author: 'Michael McClelland',
      text: 'I want to thank Trip for everything he did to help get my application for permanent residence approved by U.S. immigration. He treated me in a very friendly and caring way, explained the procedures clearly, and encouraged me throughout the form-filling process. I would recommend Trip to anyone going through an immigration matter. Thank you, Trip, for your friendship and support.',
      rating: 5,
    },
    {
      author: 'Samuel Bissu',
      text: 'Attorney Tripathi helped me and my family get an E-2 visa. Every step of the way, we were successful because of Trip’s attention to detail on every form we submitted. He got the job done!',
      rating: 5,
    },
  ],
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#061224] text-white overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
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
        </div>

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
