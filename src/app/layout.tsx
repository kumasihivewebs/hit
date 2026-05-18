import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HiT - Hive Institute of Technology",
  description:
    "Practical technology education for Africa's future. Engineering, AI, robotics, and innovation.",
  keywords: [
    "technology",
    "education",
    "engineering",
    "AI",
    "robotics",
    "startup",
    "Africa",
  ],
  authors: [{ name: "HiT" }],
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 text-white antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
