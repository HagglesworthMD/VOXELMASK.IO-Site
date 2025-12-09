import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "VoxelMask - Securing Medical Data. One Voxel at a Time.",
  description: "Open-source DICOM de-identification engine. Anonymize medical images locally with HIPAA Safe Harbor compliance, forensic audit trails, and a universal HTML5 viewer.",
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
