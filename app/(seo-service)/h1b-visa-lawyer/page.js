import {
  HeroSection,
  EligibilitySection,
  PathwaysSection,
  DocumentsSection,
  HighRiskCasesSection,
  DenialReasonsSection,
  ProcessTimelineSection,
  PreparationSection,
  BenefitsSection,
  FeesWaiverSection,
  WhyChooseUsSection,
  ComparisonSection,
  ProvenProcessSection,
  TestimonialsSection,
  PracticeAreasCitiesSection,
  FinalCtaSection,
  FaqSection,
} from '@/components/seo-service/h1b-visa-lawyer';

export const metadata = {
  title: 'H1B Visa Lawyer for Employers and Foreign Workers',
  description:
    'Trip Law offers H1B visa consulting for employers, foreign workers and dependents. Get petition guidance across industries and occupations.',
  alternates: {
    canonical: '/h1b-visa-lawyer',
  },
  openGraph: {
    title: 'H1B Visa Lawyer for Employers and Foreign Workers',
    description:
      'Trip Law offers H1B visa consulting for employers, foreign workers and dependents. Get petition guidance across industries and occupations.',
    url: '/h1b-visa-lawyer',
    siteName: 'Trip Law Immigration Law Firm',
    images: [
      {
        url: '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/hero-bg.png',
        width: 1200,
        height: 630,
        alt: 'H1B Visa Lawyer for Employment Based Immigration at Trip Law',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'H1B Visa Lawyer for Employers and Foreign Workers',
    description:
      'Trip Law offers H1B visa consulting for employers, foreign workers and dependents. Get petition guidance across industries and occupations.',
    images: ['/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/hero-bg.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

export default function H1bVisaLawyerPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection
        locationTitle="H1B VISA LAWYER IN FLORIDA"
        mainHeading="H1B Visa Lawyer for Employment Based Immigration"
        description="Every year more than 450,000 H1B petitions reach USCIS. Unfortunately about 3% of first time petitions get denied or rejected due to missing information or wrong fees like mistakes. On top of that, since July 10, 2026, a bad signature can cost you the whole fee. But when you hire an h1b visa lawyer, you reduce the chances of being on that denied list and get a better chance to be in the 85,000 visa cap. We make your filings a lot easier because we do the form work on your behalf. We represent both employers and foreign workers. We review eligibility, RFE response, approval and post approval support."
        ctaText="Book a consultation today and we'll review your case within 24 hours."
        bgImage="/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/hero-bg.png"
        consultationLink="/appointment"
        consultationText="SCHEDULE CONSULTATION"
        eligibilityLink="tel:(863)-599-6735"
        eligibilityText="(863)-599-6735"
        experienceYears={15}
      />

      <EligibilitySection
        title="H1B Visa Requirements: Do You Qualify?"
        description="Have you met every H1B requirement USCIS checks before it approves a petition? USCIS reviews the job, the degree, the wage and the employer behind the offer. Our h1b visa lawyer tests each requirement early, then builds the petition around them."
        bgImage="/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/eligibility-bg.png"
      />

      <PathwaysSection
        tagline="H1B VISA PROCESS STAGES"
        title="How the H1B Visa Process Works"
        subtitle1="An h1b case moves through 5 stages. Each stage has a different purpose. An error early in the process can create problems later."
        bgImage="/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/pathways-bg.png"
      />

      <DocumentsSection
        tagline="APPLICATION CHECKLIST"
        titlePrefix="Which Documents You Need for an "
        titleHighlight="H1B Visa Application"
        description="Organized documents make the petition easier to review and harder to challenge. We collect documents from the employer and the worker before filing."
        bgImage="/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/documents-bg.png"
      />

      <HighRiskCasesSection
        badgeText="COMPLEX CASES WE HANDLE"
        title="Complex H1B Cases We Handle"
        description="Some H 1B cases are difficult. It’s because the employment structure, business history, prior immigration record or worker profile creates questions. Our h1b immigration lawyer Hardam Tripathi plans around each one from the first consultation."
      />

      <DenialReasonsSection
        badgeText="H1B RISKS & PREVENTABLE MISTAKES"
        title="Why H1B Applications Get Denied or Delayed"
        description="One common problem we found is that petitions contain three different versions of the same job. It happens due to documents prepared separately by HR, the worker and legal counsel. Our h1b visa lawyer Hardam Tripathi screened each case for any problems below."
        bgImage="/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/denial-reasons-bg.png"
      />

      <ProcessTimelineSection
        badgeText="PROCESS TIMELINE"
        title="H1B Processing Timeline"
        subtitle="Timelines shift with USCIS workload, so we confirm current ranges at your consultation."
      />

      <PreparationSection
        tagline="FILING DECISION GUIDE"
        title="When to Apply For H1B Amendment vs. New Petition"
        description="Changes to the job can require a new filing, so check before you act."
      />

      <BenefitsSection
        tagline="H-1B STATUS & NEXT STEPS"
        title="What to Expect After H1B Approval"
        description="Approval triggers a short list of decisions about travel, start dates and long term plans."
      />

      <FeesWaiverSection
        tagline="USCIS & DOL FEES"
        title="H1B Costs and Government Fees"
        description="Government fees depend on employer size and several apply to every petition. However if you have 50 or more employees in the U.S. and hold H 1B or L 1 visas, you owe an extra $4,000 under Public Law 114 113. It applies to initial filings and transfers. Plan for it in your budget before you file."
      />

      <WhyChooseUsSection
        tagline="WHY CLIENTS CHOOSE TRIPLAW"
        title="Why Employers and Foreign Workers Choose Hardam Tripathi as Their H1B Visa Lawyer"
        description="US companies hire H1B workers in healthcare, technology, engineering, finance and education. Every case depends on the industry, the job and the deadline. We build each filing around those facts."
      />

      <ComparisonSection
        title="Trip Law vs. Other Legal Firms"
        subtitle="Compare your options on the points below, because each one affects the outcome."
      />

      <ProvenProcessSection
        tagline="ATTORNEY-GUIDED PROCESS"
        title="How Trip Law Handles Your H1B Case From Start to Finish"
        description="We run every H1B case through seven steps, each with a clear deliverable."
      />

      <TestimonialsSection
        tagline="LICENSED ATTORNEY ON EVERY CASE"
        title="Trip Law Puts a Licensed Attorney on Every Florida Work Visa Case"
        description="Trip Law maintains an unyielding commitment to direct legal supervision across all client cases. Lead Attorney Hardam Tripathi brings extensive legal experience gained within federal agencies. His qualifications include a Juris Doctorate, Policy Masters and Business Marketing degrees. Prior government service provides unique insight into federal regulatory compliance and enforcement practices. Assigning dedicated attorneys ensures accurate preparation and detailed evidence review for every petition. Florida businesses and foreign workers benefit from institutional legal knowledge and relentless advocacy."
        testimonialsTitle="What Employers and Workers Say About Trip Law"
      />

      <PracticeAreasCitiesSection
        tagline="PRACTICE AREAS & LOCATIONS"
        title="Other Employment Visa Categories We Handle"
        description="Comprehensive legal services. Statewide representation. Local knowledge you can trust."
        address="1820 Florida Ave S, Ste. C, Lakeland, FL 33803"
        phone="(863) 599 6735"
        email="info@trip-law.com"
      />

      <FinalCtaSection
        tagline="GET STARTED TODAY"
        title="Start Your H1B Case With an Immigration Lawyer Today"
        description="Employers can schedule a strategy call to plan registration, wage levels and filing dates. Workers can request an eligibility assessment covering status, travel, family and green card options. Call (863) 599 6735 or use the form and we'll respond within 24 Hours."
        phone="(863)-599-6735"
        email="info@trip-law.com"
        website="www.trip-law.com"
        address="1820 Florida Ave S, Ste. C, Lakeland, FL 33803"
        consultationLink="/appointment"
        employerBtnText="Schedule an Employer Strategy Call"
        workerBtnText="Request a Worker Eligibility Assessment"
        workerBtnLink="/appointment"
        rightImage="/assets/seo-service/trip-law.jpeg"
        rightImageAlt="Start Your H1B Process With Trip Law Today"
        rightImageTitle="Start Your H1B Process With Trip Law Today"
        bgImage="/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/cta-bg.png"
      />

      <FaqSection
        tagline="H1B VISA LAWYER"
        title="Frequently Asked Questions"
        description="Answers to common questions about H1B specialty occupation visas, cap registration, job portability, and green card pathways."
        consultationLink="/appointment"
        bgImage="/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/hero-bg.png"
      />
    </main>
  );
}
