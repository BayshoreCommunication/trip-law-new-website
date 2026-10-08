import PageHeroSection from "@/components/shared/PageHeroSection";
import WhatHappensIfYouFailTheCivicsTestMoreThanOnce from "@/components/static-blogs/blogs/what-happens-if-you-fail-the-civics-test-more-than-once";
import {
  CIVICS_TEST_FAILURE_ARTICLE_TITLE,
  CIVICS_TEST_FAILURE_CANONICAL_URL,
  CIVICS_TEST_FAILURE_FEATURE_IMAGE,
  CIVICS_TEST_FAILURE_FEATURE_IMAGE_ALT,
  CIVICS_TEST_FAILURE_META_DESCRIPTION,
  CIVICS_TEST_FAILURE_META_TITLE,
} from "@/components/static-blogs/blogs/whatHappensIfYouFailTheCivicsTestMoreThanOnceMeta";
import GetAllPostData from "@/lib/GetAllPostData";

const canonicalUrl = CIVICS_TEST_FAILURE_CANONICAL_URL;
const featureImageUrl = `https://www.trip-law.com${CIVICS_TEST_FAILURE_FEATURE_IMAGE}`;

export const metadata = {
  title: `${CIVICS_TEST_FAILURE_META_TITLE} | Trip Law`,
  description: CIVICS_TEST_FAILURE_META_DESCRIPTION,
  alternates: {
    canonical: canonicalUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: CIVICS_TEST_FAILURE_META_TITLE,
    description: CIVICS_TEST_FAILURE_META_DESCRIPTION,
    images: [
      {
        url: featureImageUrl,
        width: 1000,
        height: 510,
        alt: CIVICS_TEST_FAILURE_FEATURE_IMAGE_ALT,
      },
    ],
    url: canonicalUrl,
    type: "article",
    siteName: "Trip Law",
  },
  twitter: {
    card: "summary_large_image",
    title: CIVICS_TEST_FAILURE_META_TITLE,
    description: CIVICS_TEST_FAILURE_META_DESCRIPTION,
    images: [featureImageUrl],
  },
};

export default async function WhatHappensIfYouFailTheCivicsTestMoreThanOncePage() {
  const allBlogsData = await GetAllPostData();
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: CIVICS_TEST_FAILURE_ARTICLE_TITLE,
    description: CIVICS_TEST_FAILURE_META_DESCRIPTION,
    image: featureImageUrl,
    mainEntityOfPage: canonicalUrl,
    datePublished: "2026-10-07",
    dateModified: "2026-10-07",
    author: {
      "@type": "Person",
      name: "Hardam Tripathi",
    },
    publisher: {
      "@type": "Organization",
      name: "Trip Law",
      logo: {
        "@type": "ImageObject",
        url: "https://www.trip-law.com/assets/site-logo/trip-law-logo.png",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <PageHeroSection image="/assets/hero-img/blog.jpg" titleH2="Blog" />
      <WhatHappensIfYouFailTheCivicsTestMoreThanOnce allBlogsData={allBlogsData} />
    </>
  );
}
