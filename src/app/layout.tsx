import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";
const urbanistSans = Urbanist({
  variable: "--font-urbanist-sans",
  subsets: ["latin"],
});

const urbanistMono = Urbanist({
  variable: "--font-urbanist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muzammil Abbas - Portfolio",
  description: "Portfolio of Muzammil Abbas, a software developer specializing in web development and open-source contributions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://www.linkedin.com" />
      </head>
      <body
        className={`${urbanistSans.variable} ${urbanistMono.variable} antialiased`}
      >
        <PerformanceOptimizer />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
