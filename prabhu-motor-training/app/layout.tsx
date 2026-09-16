import type { Metadata } from 'next';
import { Inter, Barlow_Condensed, Noto_Sans_Devanagari } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';
import JsonLd from '@/components/JsonLd';
import { business } from '@/lib/business';

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const display = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const devanagari = Noto_Sans_Devanagari({
  subsets: ['devanagari'],
  weight: ['400', '600'],
  variable: '--font-devanagari',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: `${business.name} | Driving School in Ayodhya`,
    template: `%s | ${business.shortName}`,
  },
  description:
    'Government-recognized motor training school in Ayodhya offering HMV, LMV and E-Rickshaw driving training.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${body.variable} ${display.variable} ${devanagari.variable} font-body antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <JsonLd />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
