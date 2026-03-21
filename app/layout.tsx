import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Isaac Winner | Software Developer",
  description:
    "Senior software developer and conversion strategist with 5+ years experience. Building high-converting sales pages and funnels for SMEs, creators, and marketers.",
  metadataBase: new URL("https://winmarketing.metavatechhq.com"),
  openGraph: {
    title: "Turn Your Traffic Into Cash With Productized Sales Pages",
    description:
      "You already have the traffic. Stop wasting it on weak pages. I build high-converting sales pages, funnels, and e-commerce stores, engineered for Nigerian SMEs, creators, and marketers.",
    url: "https://winmarketing.metavatechhq.com",
    siteName: "Isaac Winner | Software Developer",
    images: [
      {
        url: "https://res.cloudinary.com/dw30uzdxp/image/upload/v1757330251/Developer_hbmqqn.webp",
        width: 1200,
        height: 630,
        alt: "Isaac Winner | Software Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
