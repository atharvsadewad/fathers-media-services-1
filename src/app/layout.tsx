import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ===== FONT CONFIGURATION ===== */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

/* ===== SEO OPTIMIZED METADATA ===== */
export const metadata: Metadata = {
  metadataBase: new URL("https://fathersmedia.in"),
  title: {
    default: "Father’s Media | Best Digital Marketing & Branding Agency in Pune",
    template: "%s | Father’s Media",
  },
  description:
    "Father’s Media is a digital marketing and branding agency in Pune offering social media management, SEO, website development, and paid ads to help your business grow online.",
  keywords: [
    "digital marketing agency Pune",
    "branding agency India",
    "social media marketing",
    "SEO services",
    "web development company",
    "content creation agency",
    "influencer marketing",
    "paid ads agency",
    "media agency Pune",
    "marketing strategy firm",
    "Father’s Media",
  ],
  authors: [{ name: "Father’s Media", url: "https://fathersmedia.in" }],
  openGraph: {
    title: "Father’s Media – Building Brands Online",
    description:
      "Leading marketing agency in Pune — offering SEO, branding, social media management, and paid ads for startups and businesses.",
    url: "https://fathersmedia.in",
    siteName: "Father’s Media",
    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 1200,
        height: 630,
        alt: "Father’s Media Branding",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Father’s Media – Digital Marketing & Branding Experts",
    description:
      "Grow your brand online with Father’s Media — social media, SEO, content, and paid ads experts.",
    images: ["/web-app-manifest-192x192.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: "https://fathersmedia.in" },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
};

/* ===== ROOT LAYOUT ===== */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${dmSans.variable}
          ${geistSans.variable}
          ${geistMono.variable}
          font-sans antialiased
          bg-[var(--background)] text-[var(--foreground)]
        `}
      >
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>

        {/* ===== LOCAL BUSINESS SCHEMA (JSON-LD) ===== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Father’s Media",
              image: "https://fathersmedia.in/web-app-manifest-512x512.png",
              "@id": "https://fathersmedia.in",
              url: "https://fathersmedia.in",
              telephone: "+91 9112059735",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Pune, Maharashtra",
                addressLocality: "Pune",
                postalCode: "411001",
                addressCountry: "IN",
              },
              openingHours: "Mo-Sa 09:00-19:00",
              sameAs: [
                "https://www.instagram.com/fathers_media",
                "https://www.linkedin.com/company/fathersmedia",
              ],
              description:
                "Father’s Media is a top digital marketing and branding agency in Pune specializing in social media management, SEO, paid ads, and content creation.",
            }),
          }}
        />
      </body>
    </html>
  );
}
