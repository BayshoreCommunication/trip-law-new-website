'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultTestimonials = [
  {
    author: 'Pinkesh Patel',
    text: "Trip is a great lawyer and the staff is excellent. They did my wife's EAD and it was very fast and efficient.",
    rating: 5,
  },
  {
    author: 'Mir Al-Masud',
    text: "We had an outstanding experience working with Trip Law Firm for our parent's green card application. From start to finish, the team was professional, supportive and incredibly attentive to every detail. They took time to clearly explain the entire process, kept us informed at every step and responded quickly whenever we had questions.\nWhat stood out most was their genuine care and empathy. They understood how important this was for our family and handled the case with the highest level of diligence and compassion. Thanks to their expertise, the application process was smooth, stress free and successful.\nI’m truly grateful for their exceptional service and would highly recommend Trip Law Firm to anyone seeking reliable and trustworthy immigration support.",
    rating: 5,
  },
  {
    author: 'Chandara Chea',
    text: 'Trip and his team have been professional in helping both my sister in law and mom’s immigration case. Overall, the firm is very knowledgeable and professional in all they do. Miscommunication happens from time to time but overall I am satisfied with service. My sister in law has successfully passed her interview and will be heading to the US in the near future. Next up is my mom’s case. Hopefully the same outcome will follow through. Thank you for your help thus far.',
    rating: 5,
  },
  {
    author: 'Shaw',
    text: 'I have Trip and his team representing my wife case for her visa and green card and I am more than pleased and satisfied with the service Trip and the team have served us best immigration lawyer in town from knowledge to helping you in every step along the process they did a fantastic job and more my wife is on her way her to the U.S. thank to Trip and his team.',
    rating: 5,
  },
];

const TestimonialsSection = ({
  tagline = 'CLIENT TESTIMONIALS',
  title = 'What Clients Say About Trip Law',
  description = 'Read real client feedback and experiences from individuals and families supported through life-changing immigration cases by Attorney Hardam Tripathi.',
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

