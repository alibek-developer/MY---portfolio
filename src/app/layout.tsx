import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Alibek Allaberganov — Frontend Developer & AI Enthusiast",
  description:
    "Portfolio of Alibek Allaberganov, a frontend developer from Khorezm who builds modern websites, mobile apps, and AI-powered products.",
  keywords: [
    "Alibek Allaberganov",
    "Frontend Developer",
    "React",
    "Next.js",
    "Portfolio",
    "AI Enthusiast",
  ],
  authors: [{ name: "Alibek Allaberganov" }],
  openGraph: {
    title: "Alibek Allaberganov — Frontend Developer & AI Enthusiast",
    description:
      "I build modern websites, mobile apps, and AI-powered products using modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800;12..96,900&family=DM+Sans:wght@400;500;700;800&family=Instrument+Sans:wght@400;500;600&family=Outfit:wght@400;500;600;700&family=Syne:wght@600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
