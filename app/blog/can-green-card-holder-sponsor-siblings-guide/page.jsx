import PageHeroSection from "@/components/shared/PageHeroSection";
import CanGreenCardHolderSponsorSiblingsGuide from "@/components/static-blogs/blogs/can-green-card-holder-sponsor-siblings-guide";
import {
  CAN_GREEN_CARD_HOLDER_SPONSOR_SIBLINGS_GUIDE_CANONICAL_URL,
  CAN_GREEN_CARD_HOLDER_SPONSOR_SIBLINGS_GUIDE_FEATURE_IMAGE,
  CAN_GREEN_CARD_HOLDER_SPONSOR_SIBLINGS_GUIDE_FEATURE_IMAGE_ALT,
  CAN_GREEN_CARD_HOLDER_SPONSOR_SIBLINGS_GUIDE_META_DESCRIPTION,
  CAN_GREEN_CARD_HOLDER_SPONSOR_SIBLINGS_GUIDE_META_TITLE,
  CAN_GREEN_CARD_HOLDER_SPONSOR_SIBLINGS_GUIDE_SLUG,
} from "@/components/static-blogs/blogs/canGreenCardHolderSponsorSiblingsGuideMeta";
import GetAllPostData from "@/lib/GetAllPostData";

const canonicalUrl = `https://www.trip-law.com/blog/${CAN_GREEN_CARD_HOLDER_SPONSOR_SIBLINGS_GUIDE_SLUG}`;
const featureImageUrl = `https://www.trip-law.com${CAN_GREEN_CARD_HOLDER_SPONSOR_SIBLINGS_GUIDE_FEATURE_IMAGE}`;

export const metadata = {
  title: `${CAN_GREEN_CARD_HOLDER_SPONSOR_SIBLINGS_GUIDE_META_TITLE} | Trip Law`,
  description: CAN_GREEN_CARD_HOLDER_SPONSOR_SIBLINGS_GUIDE_META_DESCRIPTION,
  alternates: {
    canonical: canonicalUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: CAN_GREEN_CARD_HOLDER_SPONSOR_SIBLINGS_GUIDE_META_TITLE,
    description: CAN_GREEN_CARD_HOLDER_SPONSOR_SIBLINGS_GUIDE_META_DESCRIPTION,
    images: [
      {
        url: featureImageUrl,
        width: 1000,
        height: 510,
        alt: CAN_GREEN_CARD_HOLDER_SPONSOR_SIBLINGS_GUIDE_FEATURE_IMAGE_ALT,
      },
    ],
    url: canonicalUrl,
    type: "article",
    siteName: "Trip Law",
  },
  twitter: {
    card: "summary_large_image",
    title: CAN_GREEN_CARD_HOLDER_SPONSOR_SIBLINGS_GUIDE_META_TITLE,
    description: CAN_GREEN_CARD_HOLDER_SPONSOR_SIBLINGS_GUIDE_META_DESCRIPTION,
    images: [featureImageUrl],
  },
};

export default async function CanGreenCardHolderSponsorSiblingsGuidePage() {
  const allBlogsData = await GetAllPostData();

  return (
    <>
      <PageHeroSection image="/assets/hero-img/blog.jpg" titleH2="Blog" />
      <CanGreenCardHolderSponsorSiblingsGuide allBlogsData={allBlogsData} />
    </>
  );
}
