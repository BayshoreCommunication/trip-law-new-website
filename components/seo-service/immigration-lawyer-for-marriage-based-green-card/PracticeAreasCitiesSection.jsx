'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const PracticeAreasCitiesSection = ({
  tagline = 'PRACTICE AREAS & LOCATIONS',
  title = 'Practice Areas and Cities Trip Law Handles Across Florida',
  description = 'Comprehensive legal services. Statewide representation. Local knowledge you can trust.',
  address = '1820 Florida Ave S, Ste. C, Lakeland, FL 33803',
  phone = '(863)-599-6735',
  email = 'info@trip-law.com',
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#FAFBFD] text-slate-800 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        
        {/* Section Top Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center text-center mb-14 sm:mb-16"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-red-700 font-bold text-xs sm:text-sm tracking-widest uppercase">
              {tagline}
            </span>
            <div className="h-[2px] w-12 bg-red-700 rounded-full" />
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1829] tracking-tight max-w-4xl leading-[1.18] mb-4 ${bitter.className}`}>
            {title}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-normal max-w-2xl leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Office Location & Google Maps Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left Column: Google Maps Embed Iframe (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 min-h-[350px] lg:min-h-[420px] relative order-2 lg:order-1"
          >
            <iframe
              title="Trip Law Lakeland Office Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3523.5188612151624!2d-81.95662768493196!3d27.97805598268153!2m3!1f0!f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd396b27e1d5eb%3A0x6b7fa579294e5e41!2s1820%20Florida%20Ave%20S%20ste%20c%2C%20Lakeland%2C%20FL%2033803!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </motion.div>

          {/* Right Column: Contact Details Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 bg-[#0B1829] text-white rounded-3xl p-6 sm:p-9 shadow-2xl border border-slate-800 flex flex-col justify-between order-1 lg:order-2"
          >
            <div>
              <span className="text-xs font-bold text-red-400 uppercase tracking-widest bg-red-700/20 px-3.5 py-1 rounded-full border border-red-500/30 inline-block mb-4">
                FLORIDA OFFICE LOCATION
              </span>
              <h3 className={`text-2xl sm:text-3xl font-bold text-white mb-6 ${bitter.className}`}>
                Lakeland Main Office
              </h3>

              <div className="space-y-6 text-sm sm:text-base text-slate-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-red-400 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-white mb-0.5">Address</div>
                    <p className="text-slate-300 leading-snug">{address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-red-400 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-white mb-0.5">Phone</div>
                    <a href={`tel:${phone.replace(/[^0-9]/g, '')}`} className="text-slate-300 hover:text-red-400 transition-colors">
                      {phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-red-400 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-white mb-0.5">Email</div>
                    <a href={`mailto:${email}`} className="text-slate-300 hover:text-red-400 transition-colors">
                      {email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-700/80 mt-6">
              <Link
                href="/appointment"
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-red-700 hover:bg-red-800 text-white font-bold text-sm uppercase rounded-xl transition-colors"
              >
                <span>Schedule Office Visit</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default PracticeAreasCitiesSection;
