import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "VoxelMask - Research Scientist AI Sales Site",
  description: "De-identify DICOM Medical Images Locally. Privacy-first anonymization for research datasets.",
};

import { VoxelBackground } from "@/components/VoxelBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} min-h-screen bg-slate-950 text-slate-200 antialiased selection:bg-cyan-500/30 selection:text-cyan-200`}>
        <VoxelBackground />
        <div className="relative z-10">
          {children}
        </div>
        <Script src="https://app.lemonsqueezy.com/js/lemon.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
