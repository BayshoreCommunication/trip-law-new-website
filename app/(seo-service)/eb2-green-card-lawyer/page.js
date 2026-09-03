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
} from '@/components/seo-service/eb2-green-card-lawyer';

export const metadata = {
  title: 'EB2 Green Card Lawyer | Immigration Services',
  description:
    'An EB2 green card lawyer can assist with petition preparation, and the immigration process for professionals seeking permanent residence in the U.S.',
  alternates: {
    canonical: '/eb2-green-card-lawyer',
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

export default function Eb2GreenCardLawyerPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection
        locationTitle="EB2 GREEN CARD LAWYER"
        mainHeading="EB2 Green Card Lawyer, Guidance for U.S. Green Card Journey"
        description="Three roads lead to an EB-2 green card. An advanced degree. Exceptional ability in the sciences, arts, or business, or a National Interest Waiver, built around work that genuinely matters to the country. Pick the wrong one and you lose months, sometimes longer. An experienced EB2 Green Card Lawyer at TripLaw looks at your background first, tells you honestly which route fits, and then carries the petition from that first filing to the final decision."
        bgImage="/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/hero-bg.png"
        consultationLink="/appointment"
        eligibilityLink="tel:(863)-599-6735"
        experienceYears={15}
      />

      <EligibilitySection
        title="Ready to Apply for an EB-2 Green Card? Check Your Eligibility First"
        description="Before applying, confirm that your education and professional experience meet the requirements for an EB-2 Green Card."
        bgImage="/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/eligibility-bg.png"
      />

      <PathwaysSection
        tagline="EB-2 GREEN CARD PATHWAYS"
        title="Special Paths to an EB-2 Green Card for Qualified Professionals"
        subtitle1="EB-2 eligibility can be established through different pathways, depending on your qualifications and the requirements of the position."
        bgImage="/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/pathways-bg.png"
      />

      <DocumentsSection
        tagline="APPLICATION CHECKLIST"
        titlePrefix="Documents Needed for an "
        titleHighlight="EB-2 Green Card Application"
        description="Before you begin filing for an EB-2 Green Card, collect the following supporting documents:"
        bgImage="/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/documents-bg.png"
      />

      <HighRiskCasesSection
        badgeText="COMPLEX & HIGH-RISK CASES"
        title="How Complex and High-Risk EB-2 Cases Affect Green Card Applications"
        description="Some things in an applicant's background can shift the whole trajectory of a case. Better to know about them early and plan around them, rather than have USCIS discover them through a Request for Evidence (RFE) or a denial."
      />

      <DenialReasonsSection
        badgeText="EB-2 RISKS & DELAYS"
        title="Why EB-2 Green Card Applications Get Denied or Delayed Without an Immigration Lawyer"
        description="Some denials happen due to specific problems that an experienced EB-2 attorney would have flagged before the petition ever reached USCIS."
        bgImage="/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/denial-reasons-bg.png"
      />

      <ProcessTimelineSection
        badgeText="PROCESS TIMELINE"
        title="How Long You Should Expect for an EB-2 Green Card Application"
        subtitle="Multiple agencies, multiple stages, and the total time depends on your pathway, your country of birth, and how busy each agency happens to be. What follows is all about a general sense of the process."
      />

      <PreparationSection
        tagline="ATTORNEY PREPARATION"
        title="How an Immigration Lawyer Prepares EB-2 Applicants for USCIS Review"
        description="Preparing an EB-2 case requires more than meeting basic eligibility requirements. An immigration lawyer reviews each part of the case to build a clear, well-supported petition for USCIS review."
      />

      <BenefitsSection
        tagline="EB-2 GREEN CARD BENEFITS"
        title="What You Gain When Your EB-2 Green Card Is Approved"
        description="Once your EB-2 green card is approved, you gain a more secure immigration status with greater freedom in your personal and professional life."
      />

      <FeesWaiverSection
        tagline="2026 USCIS FEES & COSTS"
        title="EB-2 Green Card Fees and Costs for 2026 Applicants"
        description="These figures reflect current government fees as of August 2026. Confirm everything against official USCIS and State Department sources before filing, since amounts do change."
      />

      <WhyChooseUsSection
        tagline="WHY CLIENTS CHOOSE TRIPLAW"
        title="Why Clients Choose TripLaw for EB-2 Green Card Cases"
        description="TripLaw provides experienced legal representation and personal attention throughout the EB-2 green card process."
      />

      <ComparisonSection
        title="What Sets TripLaw's EB-2 Representation Apart"
        subtitle="What’s important in an EB-2 Case"
      />

      <ProvenProcessSection
        tagline="ATTORNEY-GUIDED PROCESS"
        title="TripLaw's Proven EB-2 Green Card Application Process"
        description="Working with an experienced EB2 Green Card Lawyer means an attorney stays involved at every stage, from the first review through the final decision."
        heroImage="/assets/seo-service/trip-law.jpeg"
        heroImageAlt="Attorney Hardam Tripathi Assisting EB-2 Green Card Applicants"
        heroImageTitle="Attorney-Guided EB-2 Application Process"
        consultationLink="/appointment"
      />

      <TestimonialsSection
        tagline="LICENSED ATTORNEY ON EVERY CASE"
        title="TripLaw Puts a Licensed Attorney on Every EB-2 Green Card Case"
        description="Attorney Hardam Tripathi handles every EB-2 case at TripLaw directly. He's a licensed EB2 green card lawyer with genuine federal legal experience and specialized training behind him. That federal background carries real weight in EB-2 and NIW work, where knowing how federal agencies actually operate, and what they look for, tends to produce stronger petitions. Tripathi is an active AILA member and regularly speaks with members of Congress about immigrant communities, including veterans and people displaced by conflict abroad."
        licensingNote="One note worth being clear about: Tripathi isn't licensed in Florida. He practices under his District of Columbia and Wisconsin licenses, extended nationwide through federal jurisdiction."
        testimonialsTitle="What TripLaw's Immigration Clients Are Saying"
      />

      <PracticeAreasCitiesSection
        tagline="PRACTICE AREAS & LOCATIONS"
        title="Practice Areas and Cities TripLaw Handles Across Florida"
        description="Comprehensive legal services. Statewide representation. Local knowledge you can trust."
        address="1820 Florida Ave S, Ste. C, Lakeland, FL 33803"
        phone="(863)-599-6735"
        email="info@trip-law.com"
      />

      <FinalCtaSection
        tagline="GET STARTED TODAY"
        title="Start Your EB-2 Green Card Case With TripLaw Today"
        description="Advanced degree, exceptional ability, or work that genuinely serves the national interest, whichever fits you, TripLaw is ready to look at your qualifications and lay out the options. Talk through your education, experience, immigration history, and goals with Attorney Tripathi."
        phone="(863)-599-6735"
        email="info@trip-law.com"
        website="www.trip-law.com"
        address="1820 Florida Ave S, Ste. C, Lakeland, FL 33803"
        consultationLink="/appointment"
        rightImage="/assets/seo-service/trip-law.jpeg"
        rightImageAlt="Start Your EB-2 Green Card Case With TripLaw Today"
        rightImageTitle="Start Your EB-2 Green Card Application Today"
        bgImage="/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/cta-bg.png"
      />

      <FaqSection
        tagline="EB-2 GREEN CARD LAWYER"
        title="EB-2 Green Card Lawyer Frequently Asked Questions"
        description="Answers to common questions about the EB-2 green card and National Interest Waiver process."
        consultationLink="/appointment"
        bgImage="/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/hero-bg.png"
        passportImage="/assets/seo-service/trip-law.jpeg"
        passportImageAlt="EB-2 Green Card Lawyer Answering Questions"
        passportImageTitle="EB-2 Green Card & NIW FAQ Legal Guidance"
        ctaBgImage="/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/services-bg.png"
      />
    </main>
  );
}
