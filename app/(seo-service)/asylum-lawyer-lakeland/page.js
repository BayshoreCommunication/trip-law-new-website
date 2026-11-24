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
  PracticeAreasCitiesSection,
  TestimonialsSection,
  FinalCtaSection,
  FaqSection,
  ASYLUM_IMAGE_METADATA,
} from '@/components/seo-service/asylum-lawyer-lakeland';
import ScheduleConsultationCta from '@/components/shared/ScheduleConsultationCta';

const CANONICAL_URL = 'https://www.trip-law.com/asylum-lawyer-lakeland';
const META_TITLE = 'Asylum Lawyer Lakeland, FL | Trip Law';
const META_DESCRIPTION =
  'Trip Law helps asylum applicants in Lakeland review eligibility, meet filing deadlines and prepare supporting evidence. Call us (863) 599 6735.';

const {
  ogFeature,
  heroBg,
  eligibilityPathwaysBg,
  documentsDenialBg,
  attorneyConsultation,
  ctaOfficeBg,
} = ASYLUM_IMAGE_METADATA;

const schemaImages = [
  ['#og-image', ogFeature],
  ['#courthouse-bg-image', heroBg],
  ['#eligibility-backdrop-image', eligibilityPathwaysBg],
  ['#documents-backdrop-image', documentsDenialBg],
  ['#cta-attorney-image', attorneyConsultation],
  ['#cta-office-bg-image', ctaOfficeBg],
].map(([fragment, imgMeta]) => ({
  '@type': 'ImageObject',
  '@id': `${CANONICAL_URL}${fragment}`,
  contentUrl: `https://www.trip-law.com${imgMeta.src}`,
  url: `https://www.trip-law.com${imgMeta.src}`,
  name: imgMeta.title,
  caption: imgMeta.alt,
  description: imgMeta.description,
  width: imgMeta.width,
  height: imgMeta.height,
  encodingFormat: 'image/webp',
}));

export const metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: CANONICAL_URL,
    siteName: 'Trip Law',
    images: [
      {
        url: `https://www.trip-law.com${ogFeature.src}`,
        width: ogFeature.width,
        height: ogFeature.height,
        alt: ogFeature.alt,
        type: 'image/webp',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: [
      {
        url: `https://www.trip-law.com${ogFeature.src}`,
        width: ogFeature.width,
        height: ogFeature.height,
        alt: ogFeature.alt,
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

const asylumSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL_URL}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.trip-law.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Lakeland Asylum Lawyer',
          item: CANONICAL_URL,
        },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL_URL}#webpage`,
      url: CANONICAL_URL,
      name: META_TITLE,
      description: META_DESCRIPTION,
      inLanguage: 'en-US',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://www.trip-law.com/#website',
        url: 'https://www.trip-law.com/',
        name: 'Trip Law',
      },
      mainEntity: {
        '@id': `${CANONICAL_URL}#legalservice`,
      },
      primaryImageOfPage: {
        '@id': `${CANONICAL_URL}#og-image`,
      },
      breadcrumb: {
        '@id': `${CANONICAL_URL}#breadcrumb`,
      },
    },
    {
      '@type': ['LegalService', 'Attorney'],
      '@id': `${CANONICAL_URL}#legalservice`,
      name: 'Trip Law',
      url: CANONICAL_URL,
      telephone: '+1-863-599-6735',
      email: 'info@triplaw.com',
      image: [
        `https://www.trip-law.com${ogFeature.src}`,
        `https://www.trip-law.com${attorneyConsultation.src}`,
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1820 Florida Ave S, Ste. C',
        addressLocality: 'Lakeland',
        addressRegion: 'FL',
        postalCode: '33803',
        addressCountry: 'US',
      },
      founder: {
        '@type': 'Person',
        name: 'Hardam Tripathi',
      },
      serviceType: 'Lakeland Asylum Lawyer',
      areaServed: {
        '@type': 'Country',
        name: 'United States',
      },
    },
    ...schemaImages,
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL_URL}#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can I Work While My Asylum Application Is Pending?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, after 180 days of filing the I 589, you can request an Employment Authorization Document.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can My Spouse and Children Be Included in My Asylum Case?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, you can list your spouse and unmarried children under 21 as derivatives on your application.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I Travel Outside the United States While My Asylum Case Is Pending?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Traveling outside the country is a serious risk to your case, so most applicants should refrain from that until you get a decision on your case.',
          },
        },
        {
          '@type': 'Question',
          name: 'What Happens if I Miss an Asylum Interview or Court Hearing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Failure to appear at your interview or interview notice can result in a denial or a removal order unless you can prove you had a good, documented reason for not showing up.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I Change My Address After Filing Form I 589?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, you are required to notify USCIS/immigration court of a change of address in five days.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I Move to the U.S. While My Asylum Case Is Pending?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'While you can move to the U.S., you do have to immediately change your address with USCIS or the court.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I Apply for Asylum After Entering the United States Without Inspection?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, the way you entered into the country does not preclude your being able to claim asylum.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I Need an Attorney for an Asylum Interview?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You are not required to have an attorney, but an attorney will help you prepare your statement and organize your evidence for the best possible presentation of your case.',
          },
        },
      ],
    },
  ],
};

export default function AsylumLawyerLakelandPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(asylumSchema) }}
      />
      <main className="min-h-screen bg-white">
        <HeroSection />
        <EligibilitySection />
        <LegalAssistanceSection />
        <PathwaysSection />
        <ScheduleConsultationCta />
        <DocumentsSection />
        <PreparationSection />
        <ApplicationProcessSection />
        <ScheduleConsultationCta />
        <InterviewHearingPrepSection />
        <DenialReasonsSection />
        <HighRiskCasesSection />
        <ScheduleConsultationCta />
        <ProcessTimelineSection />
        <BenefitsSection />
        <ReliefOptionsSection />
        <ScheduleConsultationCta />
        <FeesWaiverSection />
        <WhyChooseUsSection />
        <ProvenProcessSection />
        <ScheduleConsultationCta />
        <ComparisonSection />
        <PracticeAreasCitiesSection />
        <TestimonialsSection />
        <FinalCtaSection />
        <FaqSection />
      </main>
    </>
  );
}
