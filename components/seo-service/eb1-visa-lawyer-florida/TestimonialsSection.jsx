'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const TestimonialsSection = ({
  tagline = 'LICENSED ATTORNEY ON EVERY CASE',
  title = 'TripLaw Puts a Licensed Attorney on Every EB-1 Visa Case',
  description = 'Handling the fine details of an employment based petition takes the sharp insight of an experienced EB1 visa lawyer Florida. Attorney Hardam Tripathi brings a deep, working understanding of federal law to every client interaction he handles. Practicing U.S. immigration and nationality law nationwide through federal jurisdiction, Attorney Tripathi draws on that firsthand knowledge of how government agencies actually operate to prepare and advocate for complex EB-1 cases.',
  testimonialsTitle = "What TripLaw's Immigration Clients Are Saying",
  testimonials = [
    {
      author: 'Ohm Patel',
      text: 'My lawyer was very helpful and assisted me with every step of the process with my interview and getting my citizenship, and I would hire him again with immigration and would recommend it to other people dealing with immigration.',
      rating: 5,
    },
    {
      author: 'Chandara Chea',
      text: "Trip and his team have been professional in helping both my sister in law and mom's immigration case. Overall, the firm is very knowledgeable and professional in all they do.",
      rating: 5,
    },
    {
      author: 'Roshani Shah',
      text: 'Very knowledgeable and experienced lawyer, highly recommended. If you are in need of any kind of immigration services they are the ones without hesitation, the dedicated team will help you find the best possible solution to your case and do it with precise accuracy. I had my case approved before the general estimated time.',
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
