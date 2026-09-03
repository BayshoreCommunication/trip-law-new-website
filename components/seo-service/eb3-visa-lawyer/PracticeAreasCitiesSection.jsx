'use client';
import React from 'react';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const PracticeAreasCitiesSection = ({
  tagline = 'PRACTICE AREAS & LOCATIONS',
  title = 'Immigration Cases We Handle Across Lakeland, FL',
  description = 'We handle a wide range of immigration matters for individuals, families and businesses throughout Lakeland, FL. Our attorneys provide personalized legal guidance based on your immigration goals and circumstances.',
  address = '1820 Florida Ave S, Ste. C, Lakeland, FL 33803',
  phone = '(863)-599-6735',
  email = 'info@trip-law.com',
  employmentImmigration = [
    'H1B Visa',
    'L-1 Visa',
    'O-1 Visa',
    'EB-1 Visa',
    'EB-2 Visa',
    'EB-3 Visa',
    'E2 Treaty Visa',
  ],
  familyHumanitarian = [
    'Green Card',
    'Green Card Through Marriage',
    'Green Card Through Immediate Relative',
    'Green Card Through Consular Processing',
    'Naturalization & Citizenship',
    'Asylum',
    'U Visa',
    'T Visa',
    'VAWA',
    'Deportation Defense (Bond, Master Calendar, Individual Hearings, Waivers)',
  ],
  cities = [
    'Downtown Lakeland',
    'Dixieland',
    'Lake Hollingsworth',
    'Cleveland Heights',
    'Lake Morton',
    'Beacon Hill',
    'Grasslands',
    'South Lake Morton',
    'Southwest Lakeland',
    'North Lakeland',
    'East Lakeland',
    'West Lakeland',
    'Lakeland Highlands',
    'Kathleen',
    'Crystal Lake',
    'Highland City',
    'Bartow',
    'Winter Haven',
    'Plant City',
    'Tampa',
    'Orlando',
    'Clearwater',
    'St. Petersburg',
    'Brandon',
    'Riverview',
    'Wesley Chapel',
    'Sarasota',
    'Fort Myers',
    'Naples',
    'Jacksonville',
    'Miami',
    'Fort Lauderdale',
  ],
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#0B1829] text-white overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-red-500 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
            {tagline}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            {title}
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-[#091424] border border-slate-700/60 rounded-2xl p-6 sm:p-8">
            <h3 className={`text-xl font-bold text-red-500 mb-4 ${bitter.className}`}>
              Employment Based Immigration
            </h3>
            <ul className="flex flex-col gap-3">
              {employmentImmigration.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm sm:text-base">
                  <span className="text-red-500 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#091424] border border-slate-700/60 rounded-2xl p-6 sm:p-8">
            <h3 className={`text-xl font-bold text-red-500 mb-4 ${bitter.className}`}>
              Family & Humanitarian Cases
            </h3>
            <ul className="flex flex-col gap-3">
              {familyHumanitarian.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm sm:text-base">
                  <span className="text-red-500 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#091424] border border-slate-700/60 rounded-2xl p-6 sm:p-8">
            <h3 className={`text-xl font-bold text-red-500 mb-4 ${bitter.className}`}>
              Lakeland Neighborhoods & Areas We Serve
            </h3>
            <div className="flex flex-wrap gap-2 mb-6 max-h-[220px] overflow-y-auto custom-scrollbar">
              {cities.map((city, idx) => (
                <span key={idx} className="px-3 py-1 bg-slate-800 text-slate-200 rounded-full text-xs sm:text-sm border border-slate-700">
                  {city}
                </span>
              ))}
            </div>

            <div className="border-t border-slate-800 pt-4 flex flex-col gap-2 text-xs sm:text-sm text-slate-300">
              <div><strong className="text-white">Address:</strong> {address}</div>
              <div><strong className="text-white">Phone:</strong> <a href={`tel:${phone.replace(/[^0-9]/g, '')}`} className="hover:text-red-400">{phone}</a></div>
              <div><strong className="text-white">Email:</strong> <a href={`mailto:${email}`} className="hover:text-red-400">{email}</a></div>
            </div>

            {/* Google Map Embed */}
            <div className="mt-6 rounded-2xl overflow-hidden border border-slate-700/80 h-[200px] w-full shadow-inner">
              <iframe
                title="Trip Law Lakeland Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3523.5188612151624!2d-81.95662768493196!3d27.97805598268153!2m3!1f0!f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd396b27e1d5eb%3A0x6b7fa579294e5e41!2s1820%20Florida%20Ave%20S%20ste%20c%2C%20Lakeland%2C%20FL%2033803!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasCitiesSection;
