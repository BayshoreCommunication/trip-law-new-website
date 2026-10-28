import PageHeroSection from "@/components/shared/PageHeroSection";
import GreenCardRenewalVsReplacementWhatsTheDifference from "@/components/static-blogs/blogs/green-card-renewal-vs-replacement-whats-the-difference";
import {
  GREEN_CARD_RENEWAL_VS_REPLACEMENT_CANONICAL_URL,
  GREEN_CARD_RENEWAL_VS_REPLACEMENT_FEATURE_IMAGE,
  GREEN_CARD_RENEWAL_VS_REPLACEMENT_FEATURE_IMAGE_ALT,
  GREEN_CARD_RENEWAL_VS_REPLACEMENT_META_DESCRIPTION,
  GREEN_CARD_RENEWAL_VS_REPLACEMENT_META_TITLE,
} from "@/components/static-blogs/blogs/greenCardRenewalVsReplacementMeta";
import GetAllPostData from "@/lib/GetAllPostData";

const canonicalUrl = GREEN_CARD_RENEWAL_VS_REPLACEMENT_CANONICAL_URL;
const featureImageUrl = `https://www.trip-law.com${GREEN_CARD_RENEWAL_VS_REPLACEMENT_FEATURE_IMAGE}`;

export const metadata = {
  title: `${GREEN_CARD_RENEWAL_VS_REPLACEMENT_META_TITLE} | Trip Law`,
  description: GREEN_CARD_RENEWAL_VS_REPLACEMENT_META_DESCRIPTION,
  alternates: {
    canonical: canonicalUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: GREEN_CARD_RENEWAL_VS_REPLACEMENT_META_TITLE,
    description: GREEN_CARD_RENEWAL_VS_REPLACEMENT_META_DESCRIPTION,
    images: [
      {
        url: featureImageUrl,
        width: 1000,
        height: 510,
        alt: GREEN_CARD_RENEWAL_VS_REPLACEMENT_FEATURE_IMAGE_ALT,
      },
    ],
    url: canonicalUrl,
    type: "article",
    siteName: "Trip Law",
  },
  twitter: {
    card: "summary_large_image",
    title: GREEN_CARD_RENEWAL_VS_REPLACEMENT_META_TITLE,
    description: GREEN_CARD_RENEWAL_VS_REPLACEMENT_META_DESCRIPTION,
    images: [featureImageUrl],
  },
};

export default async function GreenCardRenewalVsReplacementPage() {
  const allBlogsData = await GetAllPostData();

  return (
    <>
      <PageHeroSection image="/assets/hero-img/blog.jpg" titleH2="Blog" />
      <GreenCardRenewalVsReplacementWhatsTheDifference allBlogsData={allBlogsData} />
    </>
  );
}
