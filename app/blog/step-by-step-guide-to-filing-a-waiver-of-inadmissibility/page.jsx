import PageHeroSection from "@/components/shared/PageHeroSection";
import WaiverOfInadmissibilityGuide from "@/components/static-blogs/blogs/step-by-step-guide-to-filing-a-waiver-of-inadmissibility";
import {
  WAIVER_GUIDE_ARTICLE_TITLE,
  WAIVER_GUIDE_FEATURE_IMAGE,
  WAIVER_GUIDE_FEATURE_IMAGE_ALT,
  WAIVER_GUIDE_META_DESCRIPTION,
  WAIVER_GUIDE_META_TITLE,
  WAIVER_GUIDE_SLUG,
} from "@/components/static-blogs/blogs/waiverOfInadmissibilityMeta";
import GetAllPostData from "@/lib/GetAllPostData";

const canonicalUrl = `https://www.trip-law.com/blog/${WAIVER_GUIDE_SLUG}`;
const featureImageUrl = `https://www.trip-law.com${WAIVER_GUIDE_FEATURE_IMAGE}`;

export const metadata = {
  title: `${WAIVER_GUIDE_META_TITLE} | Trip Law`,
  description: WAIVER_GUIDE_META_DESCRIPTION,
  alternates: {
    canonical: canonicalUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: WAIVER_GUIDE_META_TITLE,
    description: WAIVER_GUIDE_META_DESCRIPTION,
    images: [
      {
        url: featureImageUrl,
        width: 1000,
        height: 510,
        alt: WAIVER_GUIDE_FEATURE_IMAGE_ALT,
      },
    ],
    url: canonicalUrl,
    type: "article",
    siteName: "Trip Law",
  },
  twitter: {
    card: "summary_large_image",
    title: WAIVER_GUIDE_META_TITLE,
    description: WAIVER_GUIDE_META_DESCRIPTION,
    images: [featureImageUrl],
  },
};

export default async function WaiverOfInadmissibilityGuidePage() {
  const allBlogsData = await GetAllPostData();
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: WAIVER_GUIDE_ARTICLE_TITLE,
    description: WAIVER_GUIDE_META_DESCRIPTION,
    image: featureImageUrl,
    mainEntityOfPage: canonicalUrl,
    datePublished: "2026-06-29",
    dateModified: "2026-06-29",
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
      <WaiverOfInadmissibilityGuide
        allBlogsData={allBlogsData}
      />
    </>
  );
}
