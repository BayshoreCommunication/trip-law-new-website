import { Mulish, Bitter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import MainNavbar from '@/components/MainNavbar';
import Footer from '@/components/Footer';
const bitter = Bitter({ subsets: ['latin'] });
const mulish = Mulish({ subsets: ['latin'] });

export const metadata = {
  title:
    'Florida Immigration Lawyer Firm || USA Immigration Attorney Hardam Tripathi, Esq.',
  description:
    'Florida Immigration Law Services Call our local Immigration office for your Green Card, Naturalization or Investor Visa.',
  metadataBase: new URL('https://trip-law-new-website.vercel.app'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-USA',
    },
  },
  openGraph: {
    images: '/opengraph-image.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={mulish.className}>
        <Providers>
          <div className='text-black bg-white overflow-x-hidden'>
            <MainNavbar />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
