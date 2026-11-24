import {
  HeroSection,
  EligibilitySection,
  PathwaysSection,
  DocumentsSection,
  DenialReasonsSection,
  HighRiskCasesSection,
  ProcessTimelineSection,
  BenefitsSection,
  PreparationSection,
  WhyChooseUsSection,
  FeesWaiverSection,
  ProvenProcessSection,
  ComparisonSection,
  PracticeAreasCitiesSection,
  TestimonialsSection,
  FinalCtaSection,
  FaqSection,
  T_VISA_IMAGE_METADATA,
} from '@/components/seo-service/t-visa-lawyer';
import ScheduleConsultationCta from '@/components/shared/ScheduleConsultationCta';

const CANONICAL_URL = 'https://www.trip-law.com/t-visa-lawyer';
const META_TITLE = 'T Visa Lawyer Near Me | Human Trafficking Legal Help';
const META_DESCRIPTION =
  'Need a T Visa lawyer near me? Get confidential legal help to secure your humanitarian visa and protect your future. Speak with our attorney (863) 599-6735.';

const {
  ogFeature,
  heroBg,
  eligibilityPathwaysBg,
  documentsDenialBg,
  attorneyConsultation,
  ctaOfficeBg,
} = T_VISA_IMAGE_METADATA;

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

const tVisaSchema = {
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
          name: 'T Visa Lawyer Immigration Help for Survivors From Human Trafficking',
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
      image: [
        `https://www.trip-law.com${ogFeature.src}`,
        `https://www.trip-law.com${attorneyConsultation.src}`,
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1820 Florida Ave S, Suite C',
        addressLocality: 'Lakeland',
        addressRegion: 'FL',
        postalCode: '33803',
        addressCountry: 'US',
      },
      founder: {
        '@type': 'Person',
        name: 'Hardam Tripathi',
      },
      serviceType: 'T Visa Lawyer Immigration Help for Survivors From Human Trafficking',
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
          name: 'Must traffickers be arrested or convicted for T visa applications?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. USCIS does not require a trafficker to be arrested, charged or convicted for you to qualify for a T visa. Show you were a victim of severe trafficking and met law enforcement assistance rules.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there an annual cap on principal T 1 nonimmigrant status grants?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Congress sets an annual limit of 5,000 principal T 1 visas per fiscal year. However, USCIS rarely hits this cap, meaning qualified applicants do not face long statutory waiting list delays.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can trafficking survivors apply even after leaving a trafficking situation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. You can apply for T nonimmigrant status after escaping or leaving the trafficking environment. You must prove your current presence in the United States remains directly connected to past trafficking experience.',
          },
        },
      ],
    },
  ],
};

export default function TVisaLawyerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tVisaSchema) }}
      />
      <main className="min-h-screen bg-white">
        <HeroSection />
        <EligibilitySection />
        <PathwaysSection />
        <DocumentsSection />
        <ScheduleConsultationCta />
        <DenialReasonsSection />
        <HighRiskCasesSection />
        <ProcessTimelineSection />
        <ScheduleConsultationCta />
        <BenefitsSection />
        <PreparationSection />
        <WhyChooseUsSection />
        <ScheduleConsultationCta />
        <FeesWaiverSection />
        <ProvenProcessSection />
        <ComparisonSection />
        <ScheduleConsultationCta />
        <PracticeAreasCitiesSection />
        <TestimonialsSection />
        <FinalCtaSection />
        <FaqSection />
      </main>
    </>
  );
}
