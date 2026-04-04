import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Isaac Winner | Senior Full-stack Developer",
  description:
    "Senior Full-stack Developer and a seasoned Builder with 4+ years of experience. Building production-ready software products with clean UX and resilient back-end systems.",
  metadataBase: new URL("https://cyberwon.vercel.app"),
  openGraph: {
    title: "Isaac Winner | Senior Full-stack Developer",
    description:
      "Senior Full-stack Developer and a seasoned Builder with 4+ years of experience. Building production-ready software products with clean UX and resilient back-end systems.",
    url: "https://cyberwon.vercel.app",
    siteName: "Isaac Winner | Software Developer",
    images: [
      {
        url: "https://res.cloudinary.com/dw30uzdxp/image/upload/v1757326846/1757326829303_zqu37j.jpg",
        width: 1200,
        height: 630,
        alt: "Isaac Winner | Senior Full-stack Developer",
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
