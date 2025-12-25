import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

import StoreProvider from "@/app/store/StoreProvider";

import AppNavbar from "@/components/app-navbar";
import AppFooter from "@/components/app-footer";
import AppBreadcrumb from "@/components/app-breadcrumb";

export const metadata = {
  metadataBase: new URL('https://www.wearcollective.store'),
  title: {
    default: 'WearCollective | Sustainable & Inclusive Fashion Store',
    template: '%s | WearCollective',
  },
  description: 'Shop at WearCollective for sustainable, inclusive, and high-quality fashion. Discover curated collections for men, women, and kids that celebrate every body and expression. Your destination for ethical fashion.',
  keywords: [
    'wear collective',
    'wearcollective',
    'wear collective store',
    'wearcollective.store',
    'sustainable fashion',
    'inclusive clothing',
    'ethical fashion',
    'online fashion store',
    'men fashion',
    'women fashion',
    'kids clothing',
    'sustainable clothing',
    'inclusive fashion'
  ],
  authors: [{ name: 'WearCollective Team' }],
  creator: 'WearCollective',
  publisher: 'WearCollective',
  alternates: {
    canonical: 'https://www.wearcollective.store',
  },
  applicationName: 'WearCollective',
  openGraph: {
    title: 'WearCollective | Sustainable & Inclusive Fashion',
    description: 'Shop at WearCollective for high-quality, sustainable, and inclusive fashion pieces for everyone.',
    url: 'https://www.wearcollective.store',
    siteName: 'WearCollective',
    images: [
      {
        url: '/logo_1920x1080px.jpg',
        width: 1920,
        height: 1080,
        alt: 'WearCollective Logo - Sustainable Fashion Store',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WearCollective | Sustainable & Inclusive Fashion Store',
    description: 'Shop at WearCollective for high-quality, sustainable, and inclusive fashion for everyone.',
    images: ['/logo_1920x1080px.jpg'],
    creator: '@wearcollective',
    site: '@wearcollective',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <StoreProvider>
          <AppNavbar />
          <AppBreadcrumb />
          <main className="flex-1">
            {children}
            <Analytics />
          </main>
          <AppFooter />
        </StoreProvider>
      </body>
    </html>
  );
}
