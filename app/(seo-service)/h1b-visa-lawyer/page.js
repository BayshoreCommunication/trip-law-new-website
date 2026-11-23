import {
  HeroSection,
  EligibilitySection,
  PathwaysSection,
  DocumentsSection,
  HighRiskCasesSection,
  DenialReasonsSection,
  ProcessTimelineSection,
  ProvenProcessSection,
  BenefitsSection,
  PreparationSection,
  FeesWaiverSection,
  WhyChooseUsSection,
  IndustryServicesSection,
  ExpectationsTimelineSection,
  ComparisonSection,
  PracticeAreasCitiesSection,
  TestimonialsSection,
  FinalCtaSection,
  FaqSection,
  H1B_IMAGE_METADATA,
} from '@/components/seo-service/h1b-visa-lawyer';

const CANONICAL_URL = 'https://www.trip-law.com/h1b-visa-lawyer';
const META_TITLE = 'H1B Visa Lawyer for Employers and Foreign Workers';
const META_DESCRIPTION =
  'Trip Law offers H1B visa consulting for employers, foreign workers and dependents. Get petition guidance across industries and occupations.';

const {
  heroFeature,
  heroBg,
  documentsChecklist,
  subtleWatermarkBg,
  attorneyConsultation,
  ctaOfficeBg,
} = H1B_IMAGE_METADATA;

const schemaImages = [
  ['#hero-image', heroFeature],
  ['#documents-image', documentsChecklist],
  ['#cta-attorney-image', attorneyConsultation],
  ['#courthouse-bg-image', heroBg],
  ['#watermark-bg-image', subtleWatermarkBg],
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
        url: `https://www.trip-law.com${heroFeature.src}`,
        width: heroFeature.width,
        height: heroFeature.height,
        alt: heroFeature.alt,
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
        url: `https://www.trip-law.com${heroFeature.src}`,
        width: heroFeature.width,
        height: heroFeature.height,
        alt: heroFeature.alt,
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

const h1bSchema = {
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
          name: 'H1B Visa Lawyer for Employment Based Immigration',
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
        '@id': `${CANONICAL_URL}#hero-image`,
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
        `https://www.trip-law.com${heroFeature.src}`,
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
      serviceType: 'H1B Visa Lawyer for Employment Based Immigration',
      areaServed: {
        '@type': 'Country',
        name: 'United States',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.4',
        reviewCount: '62',
        bestRating: '5',
        worstRating: '1',
      },
    },
    ...schemaImages,
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL_URL}#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can I change employers while on H1B?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes, AC21 portability lets you begin work once USCIS receives the new employer's petition. Your H1B status must be valid when the new petition is filed. Workers already counted against the cap skip the lottery when they change employers.",
          },
        },
        {
          '@type': 'Question',
          name: 'How long can I stay in H1B status?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Six years in total, granted in increments of up to three years. Extensions beyond six years exist when a green card case is underway. Time spent outside the United States can be recaptured and added back later.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does H1B lead to a green card?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'H1B allows dual intent, so your employer can sponsor you while you work. Most cases run through PERM labor certification, an I 140 petition and adjustment of status. Wait times depend on your country of birth and your job category.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can my family come with me on H1B?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Spouses and unmarried children under age 21 qualify for H 4 dependent status. Children can attend school in the United States while the worker holds status. Some spouses qualify for work authorization after an I 140 approval or AC21 extension.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long is my H1B valid after approval?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The I 797 shows your approved period, up to three years per petition. The visa stamp may differ in length because reciprocity rules vary by country. Your I 797 dates control how long you can work for the sponsoring employer.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I work for two employers on H1B?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, you can work for two employers when each files a separate petition. Both petitions must disclose the other job and describe clearly distinct duties. Cap subject concurrent cases need careful timing because registration and selection rules still apply.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I switch from F 1 to H1B?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, a selected registration lets the employer request a change of status here. Cap gap rules can extend your work authorization while the petition is pending.',
          },
        },
      ],
    },
  ],
};

export default function H1bVisaLawyerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(h1bSchema) }}
      />
      <main className="min-h-screen bg-white">
        <HeroSection />
        <EligibilitySection />
        <PathwaysSection />
        <DocumentsSection />
        <HighRiskCasesSection />
        <DenialReasonsSection />
        <ProcessTimelineSection />
        <ProvenProcessSection />
        <BenefitsSection />
        <PreparationSection />
        <FeesWaiverSection />
        <WhyChooseUsSection />
        <IndustryServicesSection />
        <ExpectationsTimelineSection />
        <ComparisonSection />
        <PracticeAreasCitiesSection />
        <TestimonialsSection />
        <FinalCtaSection />
        <FaqSection />
      </main>
    </>
  );
}
