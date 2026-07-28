import PageHeroSection from "@/components/shared/PageHeroSection";
import DivorceEffectsMarriageBasedImmigrationCaseArticle from "@/components/static-blogs/blogs/divorce-effects-marriage-based-immigration-case";
import {
  DIVORCE_EFFECTS_ARTICLE_TITLE,
  DIVORCE_EFFECTS_FEATURE_IMAGE,
  DIVORCE_EFFECTS_FEATURE_IMAGE_ALT,
  DIVORCE_EFFECTS_META_DESCRIPTION,
  DIVORCE_EFFECTS_META_TITLE,
  DIVORCE_EFFECTS_SLUG,
} from "@/components/static-blogs/blogs/divorceEffectsMeta";
import GetAllPostData from "@/lib/GetAllPostData";

const canonicalUrl = `https://www.trip-law.com/blog/${DIVORCE_EFFECTS_SLUG}`;
const featureImageUrl = `https://www.trip-law.com${DIVORCE_EFFECTS_FEATURE_IMAGE}`;

export const metadata = {
  title: `${DIVORCE_EFFECTS_META_TITLE} | Trip Law`,
  description: DIVORCE_EFFECTS_META_DESCRIPTION,
  alternates: {
    canonical: canonicalUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: DIVORCE_EFFECTS_META_TITLE,
    description: DIVORCE_EFFECTS_META_DESCRIPTION,
    images: [
      {
        url: featureImageUrl,
        width: 1000,
        height: 510,
        alt: DIVORCE_EFFECTS_FEATURE_IMAGE_ALT,
      },
    ],
    url: canonicalUrl,
    type: "article",
    siteName: "Trip Law",
  },
  twitter: {
    card: "summary_large_image",
    title: DIVORCE_EFFECTS_META_TITLE,
    description: DIVORCE_EFFECTS_META_DESCRIPTION,
    images: [featureImageUrl],
  },
};

export default async function DivorceEffectsMarriageBasedImmigrationCasePage() {
  const allBlogsData = await GetAllPostData();
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: DIVORCE_EFFECTS_ARTICLE_TITLE,
    description: DIVORCE_EFFECTS_META_DESCRIPTION,
    image: featureImageUrl,
    mainEntityOfPage: canonicalUrl,
    datePublished: "2026-07-28",
    dateModified: "2026-07-28",
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
      <DivorceEffectsMarriageBasedImmigrationCaseArticle
        allBlogsData={allBlogsData}
      />
    </>
  );
}
