import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Father’s Media",
  description: "Father’s Media website",
  other: {
    "msvalidate.01": "585B5BF5E4A023F0F9AA46BCBA29EED7", // paste your code here
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://fathersmedia.in"), // ✅ your real domain
  title: {
    default: "Father’s Media",
    template: "%s | Father’s Media",
  },
  description:
    "Father’s Media is a modern social media and marketing agency helping brands grow through strategy, content, paid ads, and influencers.",
  keywords: [
    "Social Media Agency",
    "Marketing Agency",
    "Branding",
    "Influencer Marketing",
    "Paid Ads",
    "Content Creation",
    "Father’s Media",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
    other: [
      { rel: "manifest", url: "/site.webmanifest" }, // optional manifest file
    ],
  },
  openGraph: {
    title: "Father’s Media – Building Brands Online",
    description:
      "Father’s Media helps businesses grow with social media management, branding, content, paid ads, and influencer marketing.",
    url: "https://fathersmedia.in",
    siteName: "Father’s Media",
    images: [
      {
        url: "/web-app-manifest-512x512.png", // ✅ your large PWA image
        width: 1200,
        height: 630,
        alt: "Father’s Media",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Father’s Media – Building Brands Online",
    description:
      "Modern social media and marketing agency for ambitious brands.",
    images: ["/web-app-manifest-192x192.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://fathersmedia.in",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
