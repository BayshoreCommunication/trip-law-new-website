'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultTestimonials = [
  {
    author: 'Michael McClelland',
    text: 'I want to Thank Trip for all he has done in helping get my Application For Permanent Residence Approved by the U.S. Immigration Service. I was dealt with in a very friendly, caring way by Trip. He explained all procedures to me, fully and in a very friendly way, regarding my application and Encouraged me through all form filling. I would recommend Trip to anyone going through an Immigration situation. Thank you Trip for your friendship and support.',
    rating: 5,
  },
  {
    author: 'Shaw',
    text: 'I have Trip and his team representing my wife case for her visa and green card and I am more than pleased and satisfied with the service Trip and the team have served us best immigration lawyer in town from knowledge to helping you in every step along the process they did a fantastic job and more my wife is on her way her to the U.S. thank to Trip and his team.',
    rating: 5,
  },
  {
    author: 'Purab Patel',
    text: 'One of the best immigration lawyers I have ever met. Tripathy made everything very easy and helped us to gain US citizenship. Very friendly, professional & knowledgeable lawyer. Thank you very much. I wish I could give more than 5 stars.',
    rating: 5,
  },
  {
    author: 'Samuel Bissu',
    text: 'Attorney Tripathy helped me and my family get an E 2 visa. Every step of the way we were successful because of Trip’s attention to detail on every form we sent. He got the job done!',
    rating: 5,
  },
];

const TestimonialsSection = ({
  tagline = 'CLIENT TESTIMONIALS',
  title = 'What Clients Say About Trip Law',
  description = 'Hear directly from clients who trusted Attorney Hardam Tripathi and the Trip Law team with their immigration and residency cases.',
  testimonials = defaultTestimonials,
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
        </div>

        {/* 4 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#0B1829] border border-slate-700/60 rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 italic whitespace-pre-line">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>
              <div className="border-t border-slate-800 pt-4 font-bold text-white text-base">
                — {item.author}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

