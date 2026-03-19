import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import ThemeConfigurator from "@/components/ThemeConfigurator";
import { siteConfig } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - Enterprise IT Services & SaaS Solutions`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "IT services",
    "SaaS solutions",
    "CRM platform",
    "web development",
    "mobile app development",
    "cloud solutions",
    "AI solutions",
    "digital transformation",
    "visitor management system",
    "clinic management system",
    "enterprise software",
    "Kreotek Technologies",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} - Enterprise IT Services & SaaS Solutions`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - Enterprise IT Services & SaaS Solutions`,
    description: siteConfig.description,
    creator: "@kreotek",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ThemeConfigurator />
        </ThemeProvider>
      </body>
    </html>
  );
}
