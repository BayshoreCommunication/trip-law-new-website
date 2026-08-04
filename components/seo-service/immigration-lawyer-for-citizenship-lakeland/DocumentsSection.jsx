'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

// 14 Application Document Cards from Google Doc
const defaultDocuments = [
  {
    number: '01',
    title: 'Green Card copy',
    description:
      'You must submit a clear photocopy of both sides of your permanent resident card. Provide the official receipt notice if your physical card is currently expired or lost. The immigration agency requires this proof to verify your lawful permanent resident status. Make sure the copies show your photo and card expiration date very clearly.',
    link: '/appointment',
  },
  {
    number: '02',
    title: 'Filing fee/payment information',
    description:
      'Applicants must include the exact government fees using a personal check or money order. You can also authorize a direct credit card payment by filling out Form G-1450. Agency might reject your naturalization paperwork for incorrect payment amount. Always double check current fee schedule on the official government portal.',
    link: '/appointment',
  },
  {
    number: '03',
    title: 'Passport photos',
    description:
      'Applicants living overseas must provide two identical color passport photographs taken very recently. Add your name and alien registration number on back of each photo. Do not wear a hat or dark glasses because they cover up your face. USCIS will not accept your application if the photos are old or the printing is not good.',
    link: '/appointment',
  },
  {
    number: '04',
    title: 'Form G-28',
    description:
      "Your selected legal representative submits this specific document to notify USCIS of their appearance. It establishes that an eligible attorney handles communication regarding your active citizenship case. The agency sends all official notices directly to your legal team after processing it. You don't need this form if you choose to handle your application alone.",
    link: '/appointment',
  },
  {
    number: '05',
    title: 'Name change documents',
    description:
      'Send an official marriage certificate or court order if your legal name changed. This ensures your naturalization certificate correctly reflects your current legal identity across records. The federal government requires legal proof for every variation from your original green card. You must upload certified copies instead of simple typed statements or unsigned notes.',
    link: '/appointment',
  },
  {
    number: '06',
    title: "Marriage and spouse's citizenship documents",
    description:
      "Provide your official marriage certificate alongside solid proof of your partner's American citizenship status. You must also show shared bank accounts or leases covering three full years. The officers review these items to verify your marital relationship is completely genuine. Couples often submit utility bills and family photos to strengthen their naturalization case.",
    link: '/appointment',
  },
  {
    number: '07',
    title: 'Previous marriage termination documents',
    description:
      'Submit certified divorce decrees or death certificates to prove all prior marriages ended. The government checks these records to confirm your current marriage is entirely lawful. Failing to provide legal termination proofs can cause lengthy delays for your application. Gather these court documents early because obtaining them from archives takes several weeks.',
    link: '/appointment',
  },
  {
    number: '08',
    title: 'Military documents',
    description:
      'Request this certified form from your military branch to prove your honorable service. The military component must verify your enlistment periods before you file the application. This documentation allows service members to bypass certain standard residency requirements for citizenship. Ensure an authorized military officer signs paperwork.',
    link: '/appointment',
  },
  {
    number: '09',
    title: 'Evidence of continuous residence',
    description:
      'Show tax returns or housing receipts if you traveled outside America recently. These documents establish that you maintained your primary home during extended foreign travel. Absences longer than six months trigger intense scrutiny from the reviewing immigration officers. You can submit employment letters to prove your ties remained inside the country.',
    link: '/appointment',
  },
  {
    number: '10',
    title: 'Child or spousal support documents',
    description:
      'Provide direct evidence that you regularly pay all required financial family support obligations. Include cancelled checks or court records to prove your good moral character trait. The government evaluates your financial responsibility toward your dependents during the review process. Missing payments can result in an immediate denial of your American citizenship application.',
    link: '/appointment',
  },
  {
    number: '11',
    title: 'Arrest or court records',
    description:
      'Send certified copies of all police reports regarding any past legal issues nationwide. You must disclose every single incident even if the charges were completely dismissed. Obtain certified final dispositions from the court clerk where your case was handled. Hiding your criminal history guarantees an automatic rejection for lack of good character.',
    link: '/appointment',
  },
  {
    number: '12',
    title: 'IRS tax documents',
    description:
      "Don't forget certified tax transcripts if you owe money or filed joint returns. Showing consistent filings proves you respect federal laws and fulfill your civic duties. You must provide copies of your official payment plans if you owe taxes. The agency checks your federal tax history for the past five full years.",
    link: '/appointment',
  },
  {
    number: '13',
    title: 'Disability waiver',
    description:
      'A licensed medical doctor must complete this form for physical disability waivers. The clinical expert explains why your condition prevents you from learning basic English. The government carefully evaluates the specific medical diagnoses listed on your official paperwork. Make sure the physician provides detailed explanations regarding your cognitive or physical limitations.',
    link: '/appointment',
  },
  {
    number: '14',
    title: 'Selective Service Status Information Letter',
    description:
      "Male applicants who didn't register for the draft always need this official letter. You must request it directly from the agency to explain your registration status. This requirement applies to men who lived in America between eighteen and twenty-six. Failing to register requires a detailed written explanation showing it wasn't willful.",
    link: '/appointment',
  },
];

const DocumentsSection = ({
  tagline = 'APPLICATION CHECKLIST',
  titlePrefix = 'Documents Needed for a ',
  titleHighlight = 'American Citizenship Application',
  description = 'Before you begin filing for the entity requirements of Form N-400, collect the following supporting documents:',
  buttonText = 'Need Help Getting Started?',
  buttonLink = '/appointment',
  trustBadgeText = 'Proper documentation today helps ensure a smoother citizenship journey tomorrow.',
  bannerTitle = 'Not Sure Which Documents Apply to Your Case?',
  bannerDescription = 'Every citizenship application is different. Our attorneys review your immigration history and help you prepare the exact documentation required before filing your Form N-400.',
  bannerButtonText = 'Schedule a Consultation',
  bannerButtonLink = '/appointment',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/documents-bg.png',
  documents = defaultDocuments,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#F8FAFC] text-slate-800">
      {/* Next.js Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={bgImage}
          alt="Documents Needed Background Image"
          fill
          quality={90}
          priority
          className="object-cover object-center"
        />
        {/* Soft light overlay for text contrast */}
        <div className="absolute inset-0 bg-white/70" />
      </div>

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        
        {/* Main Grid: Left Column Sticky Top & Right Column Scrollable Document Cards starting at same top alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column Outer Wrapper (Sticky ONLY on desktop lg: screens) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="flex flex-col items-start text-left pt-0"
            >
            {/* Tagline Subtitle */}
            <div className="flex flex-col items-start gap-2 mb-4">
              <span className="text-red-700 font-bold text-xs sm:text-sm tracking-widest uppercase">
                {tagline}
              </span>
              <div className="h-[3px] w-14 bg-red-700 rounded-full" />
            </div>

            {/* Main Title with Highlighted Text */}
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1829] tracking-tight leading-[1.2] mb-6 ${bitter.className}`}>
              {titlePrefix}
              <span className="text-red-700 block mt-1">{titleHighlight}</span>
            </h2>

            {/* Section Description */}
            <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed mb-8">
              {description}
            </p>

            {/* Action CTA Button */}
            <Link
              href={buttonLink}
              className="inline-flex items-center gap-3 px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-bold text-sm sm:text-base tracking-wider uppercase rounded-full shadow-xl shadow-red-900/30 transition-all duration-300 transform hover:-translate-y-0.5 mb-8"
            >
              <span>{buttonText}</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            {/* Trust Shield Note */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-red-700/5 border border-red-700/20 max-w-md">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-700/10 flex items-center justify-center text-red-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="text-slate-700 text-xs sm:text-sm font-medium leading-snug">
                {trustBadgeText}
              </p>
            </div>
          </motion.div>
        </div>

          {/* Right Column (Scrollable Grid of 6 Document Cards) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {documents.map((doc, idx) => (
                <motion.div
                  key={doc.number || idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
                  className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/70 border border-slate-100 hover:border-red-700/40 flex flex-col items-start hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group relative"
                >
                  {/* Top Header with Number Pill */}
                  <div className="flex items-center justify-between w-full mb-6">
                    <span className="text-red-700 font-mono font-bold text-sm bg-red-700/10 px-3.5 py-1 rounded-full border border-red-700/20">
                      {doc.number}
                    </span>
                  </div>

                  {/* Circular Icon Container */}
                  <div className="w-16 h-16 rounded-full bg-red-700/10 border border-red-700/20 flex items-center justify-center mb-6 group-hover:bg-red-700 group-hover:text-white transition-colors duration-300">
                    {doc.icon ? (
                      React.cloneElement(doc.icon, {
                        className: 'w-8 h-8 text-red-700 group-hover:text-white transition-colors duration-300',
                      })
                    ) : (
                      <svg className="w-8 h-8 text-red-700 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    )}
                  </div>

                  {/* Card Title */}
                  <h3 className={`text-xl font-bold text-[#0B1829] mb-3 group-hover:text-red-700 transition-colors duration-300 ${bitter.className}`}>
                    {doc.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed mb-6 flex-grow">
                    {doc.description}
                  </p>

                  {/* Learn More Link */}
                  <Link
                    href={doc.link}
                    className="inline-flex items-center gap-2 text-red-700 font-bold text-sm tracking-wide uppercase hover:text-red-800 transition-colors duration-200"
                  >
                    <span>Learn More</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Full-Width Bottom Dark Navy Banner (Spans Full Container Width Below Grid) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative w-full mt-12 lg:mt-16 bg-[#081324] rounded-3xl p-6 sm:p-9 md:p-10 border border-slate-700/80 shadow-2xl shadow-black/50 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Subtle background glow */}
          <div className="absolute right-0 bottom-0 w-80 h-80 bg-red-700/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left Content with Scales Icon */}
          <div className="flex items-center gap-5 sm:gap-6 z-10">
            <div className="flex-shrink-0 w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-red-700/15 border border-red-700/30 flex items-center justify-center text-red-700">
              <svg className="w-8 h-8 sm:w-9 sm:h-9" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                {/* Scales of Justice Icon */}
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l9-4 9 4M3 6v14a1 1 0 001 1h16a1 1 0 001-1V6M3 6l9 6 9-6M12 12v9" />
              </svg>
            </div>
            <div>
              <h4 className={`text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1.5 ${bitter.className}`}>
                {bannerTitle}
              </h4>
              <p className="text-slate-300 text-sm sm:text-base font-normal max-w-2xl leading-relaxed">
                {bannerDescription}
              </p>
            </div>
          </div>

          {/* Right CTA Button */}
          <div className="z-10 flex-shrink-0 w-full md:w-auto">
            <Link
              href={bannerButtonLink}
              className="inline-flex items-center justify-center gap-3 w-full md:w-auto px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-bold text-sm sm:text-base tracking-wider uppercase rounded-full shadow-xl shadow-red-900/40 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>{bannerButtonText}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default DocumentsSection;
