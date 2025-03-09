import Footer from "@/components/Footer";
import MainNavbar from "@/components/MainNavbar";
import { Mulish } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

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
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
