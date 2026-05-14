import PageHeroSection from "@/components/shared/PageHeroSection";
import UsImmigrationOptionsEntrepreneur from "@/components/static-blogs/blogs/us-immigration-options-entrepreneur";
import {
  ENTREPRENEUR_FEATURE_IMAGE,
  ENTREPRENEUR_FEATURE_IMAGE_ALT,
  ENTREPRENEUR_META_DESCRIPTION,
  ENTREPRENEUR_META_TITLE,
  ENTREPRENEUR_SLUG,
} from "@/components/static-blogs/blogs/entrepreneurVisaMeta";
import GetAllPostData from "@/lib/GetAllPostData";

export const metadata = {
  title: `${ENTREPRENEUR_META_TITLE} | Trip Law`,
  description: ENTREPRENEUR_META_DESCRIPTION,
  openGraph: {
    title: ENTREPRENEUR_META_TITLE,
    description: ENTREPRENEUR_META_DESCRIPTION,
    images: [
      {
        url: ENTREPRENEUR_FEATURE_IMAGE,
        width: 750,
        height: 383,
        alt: ENTREPRENEUR_FEATURE_IMAGE_ALT,
      },
    ],
    url: `https://www.trip-law.com/blog/${ENTREPRENEUR_SLUG}`,
    type: "article",
    siteName: "Trip Law",
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
