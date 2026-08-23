import PageHeroSection from "@/components/shared/PageHeroSection";
import PetitionerDiesWhileGreenCardCasePending from "@/components/static-blogs/blogs/petitioner-dies-while-green-card-case-pending";
import {
  PETITIONER_DIES_CANONICAL_URL,
  PETITIONER_DIES_FEATURE_IMAGE,
  PETITIONER_DIES_FEATURE_IMAGE_ALT,
  PETITIONER_DIES_META_DESCRIPTION,
  PETITIONER_DIES_META_TITLE,
  PETITIONER_DIES_SLUG,
} from "@/components/static-blogs/blogs/petitionerDiesWhileGreenCardCasePendingMeta";
import GetAllPostData from "@/lib/GetAllPostData";

const canonicalUrl = `https://www.trip-law.com/blog/${PETITIONER_DIES_SLUG}`;
const featureImageUrl = `https://www.trip-law.com${PETITIONER_DIES_FEATURE_IMAGE}`;

export const metadata = {
  title: `${PETITIONER_DIES_META_TITLE} | Trip Law`,
  description: PETITIONER_DIES_META_DESCRIPTION,
  alternates: {
    canonical: canonicalUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: PETITIONER_DIES_META_TITLE,
    description: PETITIONER_DIES_META_DESCRIPTION,
    images: [
      {
        url: featureImageUrl,
        width: 1000,
        height: 510,
        alt: PETITIONER_DIES_FEATURE_IMAGE_ALT,
      },
    ],
    url: canonicalUrl,
    type: "article",
    siteName: "Trip Law",
  },
  twitter: {
    card: "summary_large_image",
    title: PETITIONER_DIES_META_TITLE,
    description: PETITIONER_DIES_META_DESCRIPTION,
    images: [featureImageUrl],
  },
};

export default async function PetitionerDiesWhileGreenCardCasePendingPage() {
  const allBlogsData = await GetAllPostData();

  return (
    <>
      <PageHeroSection image="/assets/hero-img/blog.jpg" titleH2="Blog" />
      <PetitionerDiesWhileGreenCardCasePending allBlogsData={allBlogsData} />
    </>
  );
}
