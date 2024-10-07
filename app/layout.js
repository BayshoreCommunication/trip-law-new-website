import { Mulish } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import MainNavbar from "@/components/MainNavbar";
import Footer from "@/components/Footer";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://trip-law-new-website.vercel.app"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <Providers>
          <div className="overflow-x-hidden text-black bg-white">
            <MainNavbar />
            {children}
            <Analytics />
            <SpeedInsights />
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
