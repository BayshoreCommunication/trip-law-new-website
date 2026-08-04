'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

// 6 Denial Reasons from Google Doc
const defaultReasons = [
  {
    id: 'trips',
    title: 'Longer Trips Can Break Continuous Residence',
    description:
      "Any single trip abroad lasting more than six months creates a presumption of broken residence. USCIS requires documentation to confirm applicant's intent to return and maintain U.S. residence. Applicants can rebut this presumption with employment records, family ties and tax filings. Form N-470 can protect continuous residence for applicants who must work abroad for U.S. employers. It must be filed before departure from United States.",
    icon: (
      <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    id: 'selective-service',
    title: 'Selective Service Non Registration',
    description:
      'Male applicants who resided in the U.S. between ages 18 and 26 must have registered. Failure to register creates a statutory good moral character bar under INA section 316. USCIS cross references Selective Service records during background check phase of every N-400. If the failure was knowing and willful, it can permanently disqualify the applicant from naturalization. Applicants who missed registration and are now over 31 carry a permanent record entry.',
    icon: (
      <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h3" />
      </svg>
    ),
  },
  {
    id: 'criminal',
    title: 'Undisclosed Criminal History In Hillsborough Or Pinellas County',
    description:
      'USCIS runs federal background checks. This includes Hillsborough and Pinellas County court records. Any omission of an arrest, dismissed charge or civil infraction triggers federal fraud review. Florida state expungements do not seal records from USCIS since the agency operates under federal standards. Arrests with no charges or acquittals must still be disclosed on Form N-400. An attorney reviews the full criminal record before applying for naturalization.',
    icon: (
      <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V10M5 21V10M3 10l9-7 9 7M4 21h16M9 21v-7a1 1 0 011-1h4a1 1 0 011 1v7" />
      </svg>
    ),
  },
  {
    id: 'tax-gaps',
    title: 'Irs Tax Record Gaps',
    description:
      'USCIS mandates applicants confirm filing federal tax returns for all years. Missing returns or unfiled FBARs for foreign accounts over ten thousand dollars raise compliance flags. Large unpaid tax balances can be treated as failure to meet USCIS financial obligations. That finding affects USCIS “five year period” evaluation for good moral character. IRS transcripts should be reviewed before filing for compliance.',
    icon: (
      <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: 'employment-gaps',
    title: 'Incomplete 5 Year Address And Employment History',
    description:
      'Form N-400 Part 7 requires a complete five year address history without any unexplained gaps. Part 8 requires every employer, job title and supervisor for the same five year period. USCIS cross checks this history against Social Security and IRS employment records for consistency. Discrepancies trigger a Request for Evidence. This request adds three to six months to processing time. Self employed applicants must document business name, address and income records.',
    icon: (
      <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'immigration-violations',
    title: 'Prior Immigration Violations Left Without Legal Framing',
    description:
      "Unlawful presence entries, visa overstays and closed removal orders appear in federal immigration records. USCIS adjudicators review these records and apply the strictest interpretation without attorney context. Some violations carry statutory exceptions or affirmative defenses visible only through legal review. Attorney's brief differentiates between naturalization bar violations and defensible ones.",
    icon: (
      <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l9-4 9 4M3 6v14a1 1 0 001 1h16a1 1 0 001-1V6M3 6l9 6 9-6M12 12v9" />
      </svg>
    ),
  },
];

// Feature Pill Tags for Left Column
const defaultTags = [
  { label: 'Robust Security', icon: '🔒' },
  { label: 'Customizable', icon: '⚙️' },
  { label: 'Accessibility', icon: '♿' },
  { label: 'Automated Efficiency', icon: '⚡' },
  { label: 'Centralized Data', icon: '💾' },
];

const DenialReasonsSection = ({
  badgeText = 'CITIZENSHIP RISKS',
  title = 'Why Citizenship Applicants Get Denied or Delayed Without Immigration Lawyer In Lakeland, Florida',
  description = 'USCIS denies and delays naturalization applications for identifiable, preventable reasons. An immigration lawyer for citizenship in Lakeland reviews files to prevent any denial.',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/denial-reasons-bg.png',
  tags = defaultTags,
  reasons = defaultReasons,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-16 bg-[#FAFBFD] text-slate-800 overflow-hidden">
      {/* Next.js Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={bgImage}
          alt="Citizenship Risks Background Image"
          fill
          quality={90}
          priority
          className="object-cover object-center"
        />
        {/* Soft light overlay for text contrast */}
        <div className="absolute inset-0 bg-white/75" />
      </div>

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column Outer Wrapper (Sticky ONLY on desktop lg: screens) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="flex flex-col items-start text-left pt-0"
            >
              {/* Pill Tagline Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-700/10 border border-red-700/30 text-red-700 font-bold text-xs tracking-wider uppercase mb-4">
                <svg className="w-4 h-4 text-red-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>{badgeText}</span>
              </div>

              {/* Main Title */}
              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1829] tracking-tight leading-[1.18] mb-4 ${bitter.className}`}>
                {title}
              </h2>

              {/* Red Accent Line */}
              <div className="h-[3px] w-16 bg-red-700 rounded-full mb-6" />

              {/* Description */}
              <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed mb-8">
                {description}
              </p>

              {/* Feature Pill Tags */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                {tags.map((tag, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200/90 shadow-sm text-xs sm:text-sm font-semibold text-slate-700 hover:border-red-700/40 hover:text-red-700 transition-colors"
                  >
                    <span className="text-xs">{tag.icon}</span>
                    <span>{tag.label}</span>
                  </div>
                ))}
              </div>

            </motion.div>
          </div>

          {/* Right Column: Connected Stepper List with Logo, Bars, and Center Dots */}
          <div className="lg:col-span-7 flex flex-col gap-0 relative">
            
            {reasons.map((item, idx) => {
              const isLast = idx === reasons.length - 1;
              return (
                <motion.div
                  key={item.id || idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
                  className="relative flex items-start gap-6 group"
                >
                  {/* Left Stepper Column: Icon Circle + Connecting Bar + Dot */}
                  <div className="flex flex-col items-center flex-shrink-0 relative z-10">
                    
                    {/* Circular Logo/Icon Badge */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border-2 border-red-700/30 group-hover:border-red-700 shadow-md flex items-center justify-center group-hover:bg-red-700 group-hover:text-white transition-all duration-300">
                      {item.icon ? (
                        React.cloneElement(item.icon, {
                          className: 'w-6 h-6 sm:w-7 sm:h-7 text-red-700 group-hover:text-white transition-colors duration-300',
                        })
                      ) : null}
                    </div>

                    {/* Connecting Vertical Line & Dot (if not last item) */}
                    {!isLast && (
                      <div className="flex flex-col items-center my-2">
                        {/* Top vertical bar segment */}
                        <div className="w-[2px] h-6 bg-red-700/30 group-hover:bg-red-700/60 transition-colors" />
                        {/* Center Dot */}
                        <div className="w-2.5 h-2.5 rounded-full bg-red-700 shadow-sm" />
                        {/* Bottom vertical bar segment */}
                        <div className="w-[2px] h-6 bg-red-700/30 group-hover:bg-red-700/60 transition-colors" />
                      </div>
                    )}
                  </div>

                  {/* Right Content Block (Flush top alignment) */}
                  <div className={`flex-1 pt-0 ${!isLast ? 'pb-8 border-b border-slate-200/60' : 'pb-2'}`}>
                    <h3 className={`text-xl sm:text-2xl font-bold text-[#0B1829] mb-2 group-hover:text-red-700 transition-colors duration-300 ${bitter.className}`}>
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
};

export default DenialReasonsSection;
