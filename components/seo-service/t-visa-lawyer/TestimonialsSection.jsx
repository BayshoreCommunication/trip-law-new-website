'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultTestimonials = [
  {
    author: 'Purab Patel',
    text: 'One of the best immigration lawyers I have ever met. Tripathy made everything very easy and helped us to gain US citizenship. Very friendly, professional & knowledgeable lawyer. Thank you very much. I wish I could give more than 5 stars.',
    rating: 5,
  },
  {
    author: 'P R',
    text: 'Very nice job!! Tripathi sir feels like a member of my family. It is very easy and fast to fill out all my documents with me and my husband. Highly recommend for citizen process less than 3 months I will keep give him next my project\nThank you for supporting us!!',
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
    author: 'Michael McClelland',
    text: 'I want to Thank Trip for all he has done in helping get my Application For Permanent Residence Approved by the U.S. Immigration Service. I was dealt with in a very friendly, caring way by Trip. He explained all procedures to me, fully and in a very friendly way, regarding my application and Encouraged me through all form filling. I would recommend Trip to anyone going through an Immigration situation. Thank you Trip for your friendship and support.',
    rating: 5,
  },
];

const TestimonialsSection = ({
  tagline = 'CLIENT EXPERIENCES',
  title = 'What Clients Say About Trip Law',
  description = 'Read genuine client reviews and experiences from individuals and families supported by Attorney Hardam Tripathi and the Trip Law team.',
  testimonials = defaultTestimonials,
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#0B1829] border border-slate-700/60 rounded-2xl p-6 sm:p-7 shadow-xl flex flex-col justify-between"
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

