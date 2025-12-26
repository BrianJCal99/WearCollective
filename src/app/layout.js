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
    default: 'WEARCOLLECTIVE | Sustainable & Inclusive Fashion Store',
    template: '%s | WEARCOLLECTIVE',
  },
  description: 'Shop at WEARCOLLECTIVE for sustainable, inclusive, and high-quality fashion. Discover curated collections for men, women, and kids that celebrate every body and expression. Your destination for ethical fashion.',
  keywords: [
    'wearcollective.store',
    'wearcollective',
    'wearcollective store',
    'wear collective',
    'wear collective store',
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
  authors: [{ name: 'WEARCOLLECTIVE Team' }],
  creator: 'WEARCOLLECTIVE',
  publisher: 'WEARCOLLECTIVE',
  alternates: {
    canonical: 'https://www.wearcollective.store',
  },
  applicationName: 'WEARCOLLECTIVE',
  openGraph: {
    title: 'WEARCOLLECTIVE | Sustainable & Inclusive Fashion',
    description: 'Shop at WEARCOLLECTIVE for high-quality, sustainable, and inclusive fashion pieces for everyone.',
    url: 'https://www.wearcollective.store',
    siteName: 'WEARCOLLECTIVE',
    icons: {
      icon: 'https://www.wearcollective.store/favicon.ico',
      shortcut: 'https://www.wearcollective.store/favicon.ico',
    },
    images: [
      {
        url: 'https://www.wearcollective.store/WearCollective_Logo_2100x2100.png',
        width: 2100,
        height: 2100,
        alt: 'WEARCOLLECTIVE Logo - Sustainable Fashion Store',
      },
      {
        url: 'https://www.wearcollective.store/WearCollective_Logo_1920x1080.png',
        width: 1920,
        height: 1080,
        alt: 'WEARCOLLECTIVE Logo - Sustainable Fashion Store',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WEARCOLLECTIVE | Sustainable & Inclusive Fashion Store',
    description: 'Shop at WEARCOLLECTIVE for high-quality, sustainable, and inclusive fashion for everyone.',
    images: [
      {
        url: 'https://www.wearcollective.store/WearCollective_Logo_2100x2100.png',
        width: 2100,
        height: 2100,
        alt: 'WEARCOLLECTIVE Logo - Sustainable Fashion Store',
      },
      {
        url: 'https://www.wearcollective.store/WearCollective_Logo_1920x1080.png',
        width: 1920,
        height: 1080,
        alt: 'WEARCOLLECTIVE Logo - Sustainable Fashion Store',
      }
    ],
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
