import PageHeroSection from "@/components/shared/PageHeroSection";
import VisaOverstayArticle from "@/components/static-blogs/blogs/VisaOverstayArticle";
import GetAllPostData from "@/lib/GetAllPostData";

export const metadata = {
  title: "U.S. Visa Overstay, Risks and Solutions | Trip Law",
  description:
    "Find out what happens after a U.S. visa overstay and explore ways to fix it, including waivers and family based options.",
  openGraph: {
    title: "U.S. Visa Overstay, Risks and Solutions",
    description:
      "Find out what happens after a U.S. visa overstay and explore ways to fix it, including waivers and family based options.",
    images: ["/assets/home/waviersone.png"],
    url: "https://www.trip-law.com/blog/visa-overstay",
    type: "article",
    siteName: "Trip Law",
  },
};

export default async function VisaOverstayPage() {
  const allBlogsData = await GetAllPostData();

  return (
    <>
      <PageHeroSection image="/assets/hero-img/blog.jpg" titleH2="Blog" />
      <VisaOverstayArticle allBlogsData={allBlogsData} />
    </>
  );
}
