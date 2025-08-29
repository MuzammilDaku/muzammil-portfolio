import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
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
      <body
        className={`${urbanistSans.variable} ${urbanistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
