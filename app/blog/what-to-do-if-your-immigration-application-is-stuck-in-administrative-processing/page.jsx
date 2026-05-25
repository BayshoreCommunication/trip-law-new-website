import PageHeroSection from "@/components/shared/PageHeroSection";
import AdministrativeProcessingArticle from "@/components/static-blogs/blogs/what-to-do-If-your-immigration-application-Is-stuck-in-administrative-processing";
import {
  ADMIN_PROCESSING_ARTICLE_TITLE,
  ADMIN_PROCESSING_FEATURE_IMAGE,
  ADMIN_PROCESSING_FEATURE_IMAGE_ALT,
  ADMIN_PROCESSING_META_DESCRIPTION,
  ADMIN_PROCESSING_META_TITLE,
  ADMIN_PROCESSING_SLUG,
} from "@/components/static-blogs/blogs/administrativeProcessingMeta";
import GetAllPostData from "@/lib/GetAllPostData";

const canonicalUrl = `https://www.trip-law.com/blog/${ADMIN_PROCESSING_SLUG}`;
const featureImageUrl = `https://www.trip-law.com${ADMIN_PROCESSING_FEATURE_IMAGE}`;

export const metadata = {
  title: `${ADMIN_PROCESSING_META_TITLE} | Trip Law`,
  description: ADMIN_PROCESSING_META_DESCRIPTION,
  alternates: {
    canonical: canonicalUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: ADMIN_PROCESSING_META_TITLE,
    description: ADMIN_PROCESSING_META_DESCRIPTION,
    images: [
      {
        url: featureImageUrl,
        width: 1000,
        height: 510,
        alt: ADMIN_PROCESSING_FEATURE_IMAGE_ALT,
      },
    ],
    url: canonicalUrl,
    type: "article",
    siteName: "Trip Law",
  },
  twitter: {
    card: "summary_large_image",
    title: ADMIN_PROCESSING_META_TITLE,
    description: ADMIN_PROCESSING_META_DESCRIPTION,
    images: [featureImageUrl],
  },
};

export default async function AdministrativeProcessingPage() {
  const allBlogsData = await GetAllPostData();
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: ADMIN_PROCESSING_ARTICLE_TITLE,
    description: ADMIN_PROCESSING_META_DESCRIPTION,
    image: featureImageUrl,
    mainEntityOfPage: canonicalUrl,
    datePublished: "2026-05-25",
    dateModified: "2026-05-25",
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
      <AdministrativeProcessingArticle allBlogsData={allBlogsData} />
    </>
  );
}
