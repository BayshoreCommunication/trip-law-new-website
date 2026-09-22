import PageHeroSection from "@/components/shared/PageHeroSection";
import PermLaborCertificationExplainedForBeginners from "@/components/static-blogs/blogs/perm-labor-certification-explained-for-beginners";
import {
  PERM_LABOR_CERTIFICATION_EXPLAINED_FOR_BEGINNERS_CANONICAL_URL,
  PERM_LABOR_CERTIFICATION_EXPLAINED_FOR_BEGINNERS_FEATURE_IMAGE,
  PERM_LABOR_CERTIFICATION_EXPLAINED_FOR_BEGINNERS_FEATURE_IMAGE_ALT,
  PERM_LABOR_CERTIFICATION_EXPLAINED_FOR_BEGINNERS_META_DESCRIPTION,
  PERM_LABOR_CERTIFICATION_EXPLAINED_FOR_BEGINNERS_META_TITLE,
  PERM_LABOR_CERTIFICATION_EXPLAINED_FOR_BEGINNERS_SLUG,
} from "@/components/static-blogs/blogs/permLaborCertificationExplainedForBeginnersMeta";
import GetAllPostData from "@/lib/GetAllPostData";

const canonicalUrl = `https://www.trip-law.com/blog/${PERM_LABOR_CERTIFICATION_EXPLAINED_FOR_BEGINNERS_SLUG}`;
const featureImageUrl = `https://www.trip-law.com${PERM_LABOR_CERTIFICATION_EXPLAINED_FOR_BEGINNERS_FEATURE_IMAGE}`;

export const metadata = {
  title: `${PERM_LABOR_CERTIFICATION_EXPLAINED_FOR_BEGINNERS_META_TITLE} | Trip Law`,
  description: PERM_LABOR_CERTIFICATION_EXPLAINED_FOR_BEGINNERS_META_DESCRIPTION,
  alternates: {
    canonical: canonicalUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: PERM_LABOR_CERTIFICATION_EXPLAINED_FOR_BEGINNERS_META_TITLE,
    description: PERM_LABOR_CERTIFICATION_EXPLAINED_FOR_BEGINNERS_META_DESCRIPTION,
    images: [
      {
        url: featureImageUrl,
        width: 1000,
        height: 510,
        alt: PERM_LABOR_CERTIFICATION_EXPLAINED_FOR_BEGINNERS_FEATURE_IMAGE_ALT,
      },
    ],
    url: canonicalUrl,
    type: "article",
    siteName: "Trip Law",
  },
  twitter: {
    card: "summary_large_image",
    title: PERM_LABOR_CERTIFICATION_EXPLAINED_FOR_BEGINNERS_META_TITLE,
    description: PERM_LABOR_CERTIFICATION_EXPLAINED_FOR_BEGINNERS_META_DESCRIPTION,
    images: [featureImageUrl],
  },
};

export default async function PermLaborCertificationExplainedForBeginnersPage() {
  const allBlogsData = await GetAllPostData();

  return (
    <>
      <PageHeroSection image="/assets/hero-img/blog.jpg" titleH2="Blog" />
      <PermLaborCertificationExplainedForBeginners allBlogsData={allBlogsData} />
    </>
  );
}
