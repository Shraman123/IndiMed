import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IndiMed | Personalized Telehealth Care for India",
  description: "Clinician-guided solutions for hair loss, skincare, weight management, and holistic health tailored for Indian needs.",
  keywords: ["health", "india", "telehealth", "hair loss", "skincare", "ayurveda"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
