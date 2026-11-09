'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultReviews = [
  {
    author: 'Samuel Bissu',
    text: 'Attorney Tripathy helped me and my family get an E 2 visa. Every step of the way we were successful because of Trip’s attention to detail on every form we sent. He got the job done!',
    rating: 5,
  },
  {
    author: 'Pinkesh Patel',
    text: "Trip is a great lawyer and the staff is excellent. They did my wife's EAD and it was very fast and efficient.",
    rating: 5,
  },
  {
    author: 'Shaw',
    text: 'I have Trip and his team representing my wife case for her visa and green card and I am more than pleased and satisfied with the service Trip and the team have served us best immigration lawyer in town from knowledge to helping you in every step along the process they did a fantastic job and more my wife is on her way her to the U.S. thank to Trip and his team.',
    rating: 5,
  },
  {
    author: 'Hitendra Gosai',
    text: 'Hardam and his staff is very helpful.I would highly recommend him for immigration related problems, he is very knowledgeable in this matter.I am sure he will give you very good suggestions and guidance.Thank you so much again Hardam and his staff for all help and support.',
    rating: 5,
  },
];

const TestimonialsSection = ({
  tagline = 'LICENSED ATTORNEY ON EVERY CASE',
  title = 'Trip Law Puts a Licensed Attorney on Every Florida Work Visa Case',
  description = 'Trip Law maintains an unyielding commitment to direct legal supervision across all client cases. Lead Attorney Hardam Tripathi brings extensive legal experience gained within federal agencies. His qualifications include a Juris Doctorate, Policy Masters and Business Marketing degrees. Prior government service provides unique insight into federal regulatory compliance and enforcement practices. Assigning dedicated attorneys ensures accurate preparation and detailed evidence review for every petition. Florida businesses and foreign workers benefit from institutional legal knowledge and relentless advocacy.',
  testimonialsTitle = 'What Employers and Workers Say About Trip Law',
  reviews = defaultReviews,
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {reviews.map((item, idx) => (
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
      </div>
    </section>
  );
};

export default TestimonialsSection;
