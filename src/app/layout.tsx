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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
