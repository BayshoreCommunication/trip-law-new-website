'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const TestimonialsSection = ({
  tagline = 'LICENSED ATTORNEY ON EVERY CASE',
  title = 'Trip Law Puts a Licensed Attorney on Every Florida L1 Visa Application',
  description = 'Attorney Hardam Tripathi leads every L1 case filed through our Lakeland office personally. Florida employers work directly with a licensed attorney. Our paralegal prepare every form you need to submit with accuracy. Our team reviews each petition twice before it ever reaches USCIS. That review process catches gaps other firms miss during a rushed filing. You get direct answers about your case timeline, your evidence and your next step. Our clients appreciate hands-on legal oversight deliverance and exceptional quality and success rate of work visa approval.',
  testimonialsTitle = 'What Florida Clients Are Saying About Trip Law',
  testimonials = [
    {
      author: 'Purab Patel',
      text: 'One of the best immigration lawyers I have ever met. Tripathy made everything very easy and helped us gain U.S. citizenship. Very friendly, professional and knowledgeable lawyer. Thank you very much. I wish I could give more than 5 stars.',
      rating: 5,
    },
    {
      author: 'Taylor Made',
      text: 'My husband was able to obtain his citizenship thanks to Trip and his team! We are very thankful for their help, dedication and support throughout the entire process. They truly care about their clients.',
      rating: 5,
    },
    {
      author: 'Clifton Brown',
      text: 'My experience with Trip Law was a good one. The lawyer is excellent in terms of case preparation and communication. My case was approved within 10 months. I would definitely recommend this firm to anyone in need of immigration assistance.',
      rating: 5,
    },
    {
      author: 'Chandara Chea',
      text: 'Trip and his team have been professional in helping both my sister-in-law and my mother with their immigration cases. Overall, the firm is very knowledgeable and professional. While minor miscommunication happened at times, I am very satisfied with the service. My sister-in-law successfully passed her interview and will be heading to the U.S. soon. Next up is my mom’s case. Thank you for all your help so far.',
      rating: 5,
    },
    {
      author: 'Tanjia Mou',
      text: 'I’m very grateful to Mr. Trip and his team for their support throughout my IR-1 visa process. They were always professional, patient and attentive, providing video guidance and helping me prepare for my interview. They carefully ensured all my documents were in order and kept me informed at every step. I truly appreciate their dedication and highly recommend Mr. Trip for anyone seeking assistance with immigration matters.',
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
