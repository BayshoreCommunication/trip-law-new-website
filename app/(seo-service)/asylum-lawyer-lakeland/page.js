import {
  HeroSection,
  EligibilitySection,
  LegalAssistanceSection,
  PathwaysSection,
  DocumentsSection,
  PreparationSection,
  ApplicationProcessSection,
  InterviewHearingPrepSection,
  DenialReasonsSection,
  HighRiskCasesSection,
  ProcessTimelineSection,
  BenefitsSection,
  ReliefOptionsSection,
  FeesWaiverSection,
  WhyChooseUsSection,
  ProvenProcessSection,
  ComparisonSection,
  TestimonialsSection,
  PracticeAreasCitiesSection,
  FinalCtaSection,
  FaqSection,
} from '@/components/seo-service/asylum-lawyer-lakeland';

export const metadata = {
  title: 'Asylum Lawyer Lakeland, FL | Trip Law',
  description:
    'Trip Law helps asylum applicants in Lakeland review eligibility, meet filing deadlines and prepare supporting evidence. Call us (863) 599 6735.',
  alternates: {
    canonical: '/asylum-lawyer-lakeland',
  },
  openGraph: {
    title: 'Asylum Lawyer Lakeland, FL | Trip Law',
    description:
      'Trip Law helps asylum applicants in Lakeland review eligibility, meet filing deadlines and prepare supporting evidence. Call us (863) 599 6735.',
    url: '/asylum-lawyer-lakeland',
    siteName: 'Trip Law Immigration Law Firm',
    images: [
      {
        url: '/assets/seo-service/asylum-lawyer-lakeland/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Lakeland Asylum Lawyer - Dedicated Asylum Representation at Trip Law',
        type: 'image/webp',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asylum Lawyer Lakeland, FL | Trip Law',
    description:
      'Trip Law helps asylum applicants in Lakeland review eligibility, meet filing deadlines and prepare supporting evidence. Call us (863) 599 6735.',
    images: [
      {
        url: '/assets/seo-service/asylum-lawyer-lakeland/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Lakeland Asylum Lawyer - Dedicated Asylum Representation at Trip Law',
      },
    ],
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

export default function AsylumLawyerLakelandPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection
        locationTitle="LAKELAND ASYLUM LAWYER"
        mainHeading="Lakeland Asylum Lawyer"
        description="Seeking asylum in the United States protects individuals who have faced or fear facing persecution in their home country. The asylum application process is complex, strictly regulated and governed by strict deadlines. Whether you are applying affirmatively through USCIS or defensively in immigration court, experienced legal counsel helps you present a well documented claim. At Trip Law, Attorney Hardam Tripathi and our team guide asylum applicants in Lakeland, throughout Polk County and across Central Florida through every stage of their case."
        ctaText="Contact our office today to schedule a confidential consultation regarding your asylum eligibility."
        consultationLink="/appointment"
        eligibilityLink="tel:8635996735"
        experienceYears={15}
        bgImage="/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/hero-bg.png"
      />

      <EligibilitySection
        title="Asylum Eligibility Requirements: Who Qualifies?"
        subtitleBold="Did you face or do you fear serious harm in your home country? You may qualify for asylum. You can apply for asylum affirmatively with USCIS. If you face removal proceedings, you can apply defensively with the immigration court."
        description="You must be physically present in the United States or at a port of entry to apply. However you must meet several other requirements to qualify."
        bgImage="/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/eligibility-bg.png"
      />

      <LegalAssistanceSection
        tagline="LEGAL GUIDANCE & REPRESENTATION"
        title="How Our Asylum Lawyer Helps With Your Case?"
        description="Asylum is a highly scrutinized immigration benefit. Submitting Form I 589 with missing evidence, inconsistent statements or unaddressed past immigration violations can harm your claim. Trip Law provides comprehensive representation across the entire asylum process:"
      />

      <PathwaysSection
        tagline="TIME-SENSITIVE STATUTORY DEADLINE"
        title="One Year Asylum Filing Rule and Possible Exceptions"
        description="Under Section 208(a)(2)(B) of the Immigration and Nationality Act, an applicant must file for asylum within one year of their last arrival in the United States. Missing this deadline generally bars an individual from receiving asylum, though exceptions exist under Section 208(a)(2)(D):"
        bgImage="/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/pathways-bg.png"
      />

      <DocumentsSection
        tagline="DOCUMENTATION & EVIDENCE CHECKLIST"
        title="What Evidence Can Support an Asylum Application?"
        description="Corroborating evidence is critical under the REAL ID Act of 2005. While an applicant's credible testimony can suffice in rare circumstances, immigration judges and asylum officers generally require corroborating evidence whenever reasonably available:"
        bgImage="/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/documents-bg.png"
      />

      <PreparationSection
        tagline="TWO ASYLUM PATHWAYS"
        title="When to Apply Affirmative vs. Defensive Asylum Processes"
        description="The asylum process in the United States follows two distinct paths depending on whether you are currently in removal (deportation) proceedings:"
      />

      <ApplicationProcessSection
        tagline="STEP-BY-STEP APPLICATION WORKFLOW"
        title="How Asylum Application Process Works"
        description="The asylum process follows structured steps. A complete filing and thorough preparation at each stage help avoid unnecessary delays:"
      />

      <InterviewHearingPrepSection
        tagline="COMPREHENSIVE TESTIMONY PREPARATION"
        title="How We Prepare You for an Asylum Interview or Immigration Court Hearing"
        description="Testifying about traumatic events in your past is stressful. Inconsistencies between your testimony, your written declaration and your supporting evidence are among the leading causes of asylum denials. Trip Law conducts rigorous mock interviews and hearing prep sessions:"
      />

      <DenialReasonsSection
        badgeText="COMMON APPLICATION PITFALLS"
        title="Why Asylum Applications Get Rejected, Denied or Referred to Court"
        description="Understanding why asylum cases fail helps applicants avoid critical mistakes. Common reasons for rejection, denial or referral to immigration court include:"
        bgImage="/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/denial-reasons-bg.png"
      />

      <HighRiskCasesSection
        badgeText="COMPLEX MATTERS & RELIEF"
        title="Complex Asylum Cases and Legal Barriers We Handle"
        description="Certain circumstances add legal complexity to an asylum case. Our firm represents clients facing challenging issues:"
      />

      <ProcessTimelineSection
        badgeText="TIMELINE & ADJUDICATION EXPECTATIONS"
        title="Asylum Processing Time and Common Delays"
        subtitle="Asylum processing timelines vary substantially depending on whether your case is affirmative (USCIS) or defensive (EOIR immigration court), as well as backlog conditions at the local asylum office or court."
      />

      <BenefitsSection
        tagline="POST-APPROVAL RELIEF & STABILITY"
        title="Benefits After Asylum Approval"
        description="An approval of asylum grants significant immigration benefits and federal protections under United States law:"
      />

      <ReliefOptionsSection
        tagline="ALTERNATIVE FORMS OF PROTECTION"
        title="Asylum vs. Withholding of Removal and Convention Against Torture Protection"
        description="Asylum isn't the only way to escape deportation to a dangerous country. Withholding of removal and protection under the Convention Against Torture are alternative types of relief, with a separate and distinct legal standard for each. Our lawyer considered all three options together, because one case often is eligible for more than one form of relief."
      />

      <FeesWaiverSection
        tagline="TRANSPARENT LEGAL COSTS & FILING FEES"
        title="Asylum Lawyer Fees and Application Costs"
        description="Understanding the costs involved in an asylum case helps you plan your legal budget. Below is an overview of government filing fees and legal fee considerations:"
      />

      <WhyChooseUsSection
        tagline="WHY CHOOSE TRIP LAW"
        title="Why Choose Trip Law for Asylum Representation"
        description="Asylum cases are complex. You require an experienced immigration attorney with a deep knowledge of federal law and immigration regulations."
      />

      <ProvenProcessSection
        tagline="OUR LEGAL PROCESS"
        title="What to Expect When You Hire Trip Law"
        description="All asylum cases follow a similar process even though no two cases are the same. Below is the typical timeline for what takes place once you hire our firm."
      />

      <ComparisonSection
        tagline="FIRM DIFFERENTIATION"
        title="What Makes Trip Law Apart From Other Law Firms"
        subtitle="Comparison Factor | Trip Law | Typical General Practice Firm"
      />

      <TestimonialsSection
        tagline="CLIENT EXPERIENCES"
        title="What Clients Say About Trip Law"
        description="Authentic reviews from clients who trusted Attorney Hardam Tripathi and the Trip Law team with their immigration and residency cases:"
      />

      <PracticeAreasCitiesSection
        tagline="CENTRAL FLORIDA & NATIONWIDE SERVICE"
        title="Our Office Location"
        description="Trip Law's main office is centrally located in Lakeland, Florida. We represent asylum applicants throughout Polk County, Hillsborough County, Orange County, Osceola County and across the United States in federal immigration matters."
        address="1820 Florida Ave S, Suite C, Lakeland, FL 33803"
        phone="(863) 599-6735"
        website="www.trip-law.com"
        email="info@trip-law.com"
      />

      <FinalCtaSection
        tagline="SCHEDULE YOUR CONFIDENTIAL CONSULTATION"
        title="Speak With an Asylum Lawyer in Lakeland"
        subtitle="Facing persecution in your home country and seeking asylum in the United States requires urgent, experienced legal guidance. Contact Trip Law today to schedule a confidential consultation with Attorney Hardam Tripathi."
        phone="(863) 599-6735"
        email="info@trip-law.com"
        website="www.trip-law.com"
        address="1820 Florida Ave S, Suite C, Lakeland, FL 33803"
        primaryBtnText="Call (863) 599-6735"
        secondaryBtnText="Book Your Consultation"
        consultationLink="/appointment"
        rightImage="/assets/seo-service/trip-law.jpeg"
        rightImageAlt="Contact Attorney Hardam Tripathi - Lakeland Asylum Lawyer"
        rightImageTitle="Contact Attorney Hardam Tripathi - Lakeland Asylum Lawyer"
        bgImage="/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/cta-bg.png"
      />

      <FaqSection
        tagline="FREQUENTLY ASKED QUESTIONS"
        title="Frequently Asked Questions About Asylum"
        description="Get answers to common legal questions regarding employment authorization, family members, international travel, hearings, and interview representation for asylum cases."
        consultationLink="/appointment"
        bgImage="/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/hero-bg.png"
      />
    </main>
  );
}

