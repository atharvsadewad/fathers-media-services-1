import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes"; // ✅ ADD THIS
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageWrapper from "@/components/PageWrapper";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fathersmedia.in"),

  title: {
    default: "Father's Media | Digital Marketing & Branding Agency",
    template: "%s | Father's Media",
  },

  description:
    "Father's Media is a Pune-based digital marketing, branding, SEO, web development and content strategy agency helping businesses build brands online.",

  keywords: [
    "Digital Marketing Agency Pune",
    "SEO Services Pune",
    "Branding Agency Pune",
    "Social Media Marketing",
    "Web Development",
    "Content Marketing",
    "Father's Media",
  ],

  openGraph: {
    title: "Father's Media",
    description:
      "Digital marketing, branding, SEO and web development services.",
    url: "https://fathersmedia.in",
    siteName: "Father's Media",
    locale: "en_IN",
    type: "website",
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
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body>
          <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Father's Media",
        url: "https://fathersmedia.in",
        logo: "https://fathersmedia.in/logo.png",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Pune",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
      }),
    }}
  />
        
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <CursorGlow />
          <WhatsAppFloat />
          <PageWrapper>
            {children}
          </PageWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}

