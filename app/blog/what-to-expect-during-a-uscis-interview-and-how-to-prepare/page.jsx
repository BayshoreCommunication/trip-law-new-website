import PageHeroSection from "@/components/shared/PageHeroSection";
import UscisInterviewArticle from "@/components/static-blogs/blogs/what-to-expect-during-a-USCIS-interview-and-how-to-prepare";
import {
  USCIS_INTERVIEW_ARTICLE_TITLE,
  USCIS_INTERVIEW_FEATURE_IMAGE,
  USCIS_INTERVIEW_FEATURE_IMAGE_ALT,
  USCIS_INTERVIEW_META_DESCRIPTION,
  USCIS_INTERVIEW_META_TITLE,
  USCIS_INTERVIEW_SLUG,
} from "@/components/static-blogs/blogs/uscisInterviewMeta";
import GetAllPostData from "@/lib/GetAllPostData";

const canonicalUrl = `https://www.trip-law.com/blog/${USCIS_INTERVIEW_SLUG}`;
const featureImageUrl = `https://www.trip-law.com${USCIS_INTERVIEW_FEATURE_IMAGE}`;

export const metadata = {
  title: `${USCIS_INTERVIEW_META_TITLE} | Trip Law`,
  description: USCIS_INTERVIEW_META_DESCRIPTION,
  alternates: {
    canonical: canonicalUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: USCIS_INTERVIEW_META_TITLE,
    description: USCIS_INTERVIEW_META_DESCRIPTION,
    images: [
      {
        url: featureImageUrl,
        width: 1000,
        height: 510,
        alt: USCIS_INTERVIEW_FEATURE_IMAGE_ALT,
      },
    ],
    url: canonicalUrl,
    type: "article",
    siteName: "Trip Law",
  },
  twitter: {
    card: "summary_large_image",
    title: USCIS_INTERVIEW_META_TITLE,
    description: USCIS_INTERVIEW_META_DESCRIPTION,
    images: [featureImageUrl],
  },
};

export default async function UscisInterviewPage() {
  const allBlogsData = await GetAllPostData();
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: USCIS_INTERVIEW_ARTICLE_TITLE,
    description: USCIS_INTERVIEW_META_DESCRIPTION,
    image: featureImageUrl,
    mainEntityOfPage: canonicalUrl,
    datePublished: "2026-06-07",
    dateModified: "2026-06-07",
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
      <UscisInterviewArticle allBlogsData={allBlogsData} />
    </>
  );
}
