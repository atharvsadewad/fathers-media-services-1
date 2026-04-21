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
  title: "Father's Media | Digital Marketing Agency",
  description:
    "We craft cinematic digital experiences that captivate audiences and define brands for a generation.",
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
