import PageHeroSection from "@/components/shared/PageHeroSection";
import CanYouChangeYourNameDuringNaturalization from "@/components/static-blogs/blogs/can-you-change-your-name-during-naturalization";
import {
  CAN_YOU_CHANGE_YOUR_NAME_DURING_NATURALIZATION_ARTICLE_TITLE,
  CAN_YOU_CHANGE_YOUR_NAME_DURING_NATURALIZATION_CANONICAL_URL,
  CAN_YOU_CHANGE_YOUR_NAME_DURING_NATURALIZATION_FEATURE_IMAGE,
  CAN_YOU_CHANGE_YOUR_NAME_DURING_NATURALIZATION_FEATURE_IMAGE_ALT,
  CAN_YOU_CHANGE_YOUR_NAME_DURING_NATURALIZATION_META_DESCRIPTION,
  CAN_YOU_CHANGE_YOUR_NAME_DURING_NATURALIZATION_META_TITLE,
} from "@/components/static-blogs/blogs/canYouChangeYourNameDuringNaturalizationMeta";
import GetAllPostData from "@/lib/GetAllPostData";

const canonicalUrl = CAN_YOU_CHANGE_YOUR_NAME_DURING_NATURALIZATION_CANONICAL_URL;
const featureImageUrl = `https://www.trip-law.com${CAN_YOU_CHANGE_YOUR_NAME_DURING_NATURALIZATION_FEATURE_IMAGE}`;

export const metadata = {
  title: `${CAN_YOU_CHANGE_YOUR_NAME_DURING_NATURALIZATION_META_TITLE} | Trip Law`,
  description: CAN_YOU_CHANGE_YOUR_NAME_DURING_NATURALIZATION_META_DESCRIPTION,
  alternates: {
    canonical: canonicalUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: CAN_YOU_CHANGE_YOUR_NAME_DURING_NATURALIZATION_META_TITLE,
    description: CAN_YOU_CHANGE_YOUR_NAME_DURING_NATURALIZATION_META_DESCRIPTION,
    images: [
      {
        url: featureImageUrl,
        width: 1000,
        height: 510,
        alt: CAN_YOU_CHANGE_YOUR_NAME_DURING_NATURALIZATION_FEATURE_IMAGE_ALT,
      },
    ],
    url: canonicalUrl,
    type: "article",
    siteName: "Trip Law",
  },
  twitter: {
    card: "summary_large_image",
    title: CAN_YOU_CHANGE_YOUR_NAME_DURING_NATURALIZATION_META_TITLE,
    description: CAN_YOU_CHANGE_YOUR_NAME_DURING_NATURALIZATION_META_DESCRIPTION,
    images: [featureImageUrl],
  },
};

export default async function CanYouChangeYourNameDuringNaturalizationPage() {
  const allBlogsData = await GetAllPostData();
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: CAN_YOU_CHANGE_YOUR_NAME_DURING_NATURALIZATION_ARTICLE_TITLE,
    description: CAN_YOU_CHANGE_YOUR_NAME_DURING_NATURALIZATION_META_DESCRIPTION,
    image: featureImageUrl,
    mainEntityOfPage: canonicalUrl,
    datePublished: "2026-09-07",
    dateModified: "2026-09-07",
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
      <CanYouChangeYourNameDuringNaturalization allBlogsData={allBlogsData} />
    </>
  );
}
