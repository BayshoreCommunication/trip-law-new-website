import { Mulish, Bitter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import MainNavbar from "@/components/MainNavbar";
import Footer from "@/components/Footer";
import Head from "next/head";
const bitter = Bitter({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });


export const metadata = {
  title: "Trip-Law",
  description: "Trip Law focuses exclusively on the practice of the immigration law of The United States. Attorney Hardam Tripathi has a broad experience of practicing U.S.",
  metadataBase: new URL("https://trip-law-new-website.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    images: "/opengraph-image.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <Providers>
          <div className="text-black bg-white overflow-x-hidden">
            <MainNavbar />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
