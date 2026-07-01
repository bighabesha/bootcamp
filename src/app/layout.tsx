import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Big Habesha | Content Creator Bootcamp 2026",
  description: "Become a content creator in just 5 days. Learn personal branding, video editing (CapCut), algorithms, and build your 90-day action plan with Big Habesha.",
  keywords: [
    "Big Habesha",
    "Content Creator",
    "Bootcamp 2026",
    "YouTube course",
    "TikTok growth",
    "Facebook growth",
    "Video Editing",
    "CapCut tutorial",
    "Audience Growth",
    "Ethiopia content creators"
  ],
  authors: [{ name: "Big Habesha" }],
  openGraph: {
    title: "Big Habesha | Content Creator Bootcamp 2026",
    description: "Learn how to create professional content, grow your audience, and build real opportunities on YouTube, TikTok, and Facebook in 5 days.",
    url: "https://learn.bighabeshashop.com",
    siteName: "Big Habesha Bootcamp",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Big Habesha | Content Creator Bootcamp 2026",
    description: "Become a content creator in just 5 days. Start your journey with real-world creator experience.",
  },
  alternates: {
    canonical: "https://learn.bighabeshashop.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-brand-yellow selection:text-black`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
