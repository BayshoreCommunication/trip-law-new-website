'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultTestimonials = [
  {
    author: 'Purab Patel',
    quote:
      'One of the best immigration lawyers I have ever met. Tripathy made everything very easy and helped us gain U.S. citizenship. Very friendly, professional, and knowledgeable lawyer. Thank you very much. I wish I could give more than 5 stars.',
  },
  {
    author: 'Taylor Made',
    quote:
      'My husband was able to obtain his citizenship thanks to Trip and his team! We are very thankful for their help, dedication, and support throughout the entire process. They truly care about their clients.',
  },
  {
    author: 'Clifton Brown',
    quote:
      'My experience with Trip Law was a good one. The lawyer is excellent in terms of case preparation and communication. My case was approved within 10 months. I would definitely recommend this firm to anyone in need of immigration assistance.',
  },
  {
    author: 'Chandara Chea',
    quote:
      'Trip and his team have been professional in helping both my sister-in-law and my mother with their immigration cases. Overall, the firm is very knowledgeable and professional. While minor miscommunication happened at times, I am very satisfied with the service. My sister-in-law successfully passed her interview and will be heading to the U.S. soon. Next up is my mom’s case. Thank you for all your help so far.',
  },
  {
    author: 'Tanjia Mou',
    quote:
      'I’m very grateful to Mr. Trip and his team for their support throughout my IR-1 visa process. They were always professional, patient, and attentive, providing video guidance and helping me prepare for my interview. They carefully ensured all my documents were in order and kept me informed at every step. I truly appreciate their dedication and highly recommend Mr. Trip for anyone seeking assistance with immigration matters.',
  },
];

const TestimonialsSection = ({
  tagline = 'CLIENT REVIEWS & TESTIMONIALS',
  title = 'What Florida Clients Are Saying About Trip Law',
  testimonials = defaultTestimonials,
}) => {
  return (
    <section className="w-full py-16 lg:py-24 bg-white text-slate-800 overflow-hidden">
      <div className="w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[2px] w-12 sm:w-16 bg-red-700 rounded-full" />
            <span className="text-red-700 font-bold text-xs sm:text-sm tracking-widest uppercase">
              {tagline}
            </span>
            <span className="text-red-700 font-bold text-xs sm:text-sm">★</span>
            <div className="h-[2px] w-12 sm:w-16 bg-red-700 rounded-full" />
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1829] tracking-tight mb-4 ${bitter.className}`}>
            {title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:border-red-700/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-4 text-amber-500 text-lg">
                  ★★★★★
                </div>
                <p className="text-slate-700 text-sm sm:text-base font-normal leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>
              <div className="border-t border-slate-200 pt-4">
                <span className="font-bold text-[#0B1829] text-base">
                  — {item.author}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
