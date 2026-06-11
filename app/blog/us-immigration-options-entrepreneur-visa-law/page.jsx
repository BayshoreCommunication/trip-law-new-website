import PageHeroSection from "@/components/shared/PageHeroSection";
import UsImmigrationOptionsEntrepreneur from "@/components/static-blogs/blogs/us-immigration-options-entrepreneur";
import {
  ENTREPRENEUR_CANONICAL_URL,
  ENTREPRENEUR_FEATURE_IMAGE,
  ENTREPRENEUR_FEATURE_IMAGE_ALT,
  ENTREPRENEUR_META_DESCRIPTION,
  ENTREPRENEUR_META_TITLE,
} from "@/components/static-blogs/blogs/entrepreneurVisaMeta";
import GetAllPostData from "@/lib/GetAllPostData";

const featureImageUrl = `https://www.trip-law.com${ENTREPRENEUR_FEATURE_IMAGE}`;

export const metadata = {
  title: `${ENTREPRENEUR_META_TITLE} | Trip Law`,
  description: ENTREPRENEUR_META_DESCRIPTION,
  alternates: {
    canonical: ENTREPRENEUR_CANONICAL_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: ENTREPRENEUR_META_TITLE,
    description: ENTREPRENEUR_META_DESCRIPTION,
    images: [
      {
        url: featureImageUrl,
        width: 750,
        height: 383,
        alt: ENTREPRENEUR_FEATURE_IMAGE_ALT,
      },
    ],
    url: ENTREPRENEUR_CANONICAL_URL,
    type: "article",
    siteName: "Trip Law",
  },
  twitter: {
    card: "summary_large_image",
    title: ENTREPRENEUR_META_TITLE,
    description: ENTREPRENEUR_META_DESCRIPTION,
    images: [featureImageUrl],
  },
};

export default async function EntrepreneurVisaPage() {
  const allBlogsData = await GetAllPostData();

  return (
    <>
      <PageHeroSection image="/assets/hero-img/blog.jpg" titleH2="Blog" />
      <UsImmigrationOptionsEntrepreneur allBlogsData={allBlogsData} />
    </>
  );
}
