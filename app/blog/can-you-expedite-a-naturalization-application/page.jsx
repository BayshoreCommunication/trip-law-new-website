import PageHeroSection from "@/components/shared/PageHeroSection";
import CanYouExpediteANaturalizationApplication from "@/components/static-blogs/blogs/can-you-expedite-a-naturalization-application";
import {
  EXPEDITE_NATURALIZATION_ARTICLE_TITLE,
  EXPEDITE_NATURALIZATION_CANONICAL_URL,
  EXPEDITE_NATURALIZATION_FEATURE_IMAGE,
  EXPEDITE_NATURALIZATION_FEATURE_IMAGE_ALT,
  EXPEDITE_NATURALIZATION_META_DESCRIPTION,
  EXPEDITE_NATURALIZATION_META_TITLE,
} from "@/components/static-blogs/blogs/canYouExpediteANaturalizationApplicationMeta";
import GetAllPostData from "@/lib/GetAllPostData";

const canonicalUrl = EXPEDITE_NATURALIZATION_CANONICAL_URL;
const featureImageUrl = `https://www.trip-law.com${EXPEDITE_NATURALIZATION_FEATURE_IMAGE}`;

export const metadata = {
  title: `${EXPEDITE_NATURALIZATION_META_TITLE} | Trip Law`,
  description: EXPEDITE_NATURALIZATION_META_DESCRIPTION,
  alternates: {
    canonical: canonicalUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: EXPEDITE_NATURALIZATION_META_TITLE,
    description: EXPEDITE_NATURALIZATION_META_DESCRIPTION,
    images: [
      {
        url: featureImageUrl,
        width: 1000,
        height: 510,
        alt: EXPEDITE_NATURALIZATION_FEATURE_IMAGE_ALT,
      },
    ],
    url: canonicalUrl,
    type: "article",
    siteName: "Trip Law",
  },
  twitter: {
    card: "summary_large_image",
    title: EXPEDITE_NATURALIZATION_META_TITLE,
    description: EXPEDITE_NATURALIZATION_META_DESCRIPTION,
    images: [featureImageUrl],
  },
};

export default async function CanYouExpediteANaturalizationApplicationPage() {
  const allBlogsData = await GetAllPostData();
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: EXPEDITE_NATURALIZATION_ARTICLE_TITLE,
    description: EXPEDITE_NATURALIZATION_META_DESCRIPTION,
    image: featureImageUrl,
    mainEntityOfPage: canonicalUrl,
    datePublished: "2026-10-14",
    dateModified: "2026-10-14",
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
      <CanYouExpediteANaturalizationApplication allBlogsData={allBlogsData} />
    </>
  );
}
