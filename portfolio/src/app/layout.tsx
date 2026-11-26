import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Antonio, Inter } from "next/font/google";
import AnimatedLanesBackground from "@/components/ui/AnimatedLanesBackground";
import Snoopy from "@/components/snoopy/WavingCorner"

const antonio = Antonio({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-antonio",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

const description =
  "Batuhan Sencer is a research assistant at Texas Tech University's DISCL lab working on HPC operations, energy-aware ML systems, and knowledge distillation for LLMs.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.batuhansencer.com"),
  title: "Batuhan Sencer | Research Assistant & CS Student",
  description,
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Batuhan Sencer",
    title: "Batuhan Sencer | Research Assistant & CS Student",
    description,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Batuhan Sencer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Batuhan Sencer | Research Assistant & CS Student",
    description,
    images: ["/og.jpg"],
  },
  verification: {
    google: "NKzBKxUmxJN5G6mQTU_qBwD8EFiEub0oXnRqJiIRNpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${antonio.variable} ${inter.variable}`}>
      <body className="bg-[#2f2f2f] text-white">
        <AnimatedLanesBackground />
        {children}
        <Snoopy />
        <Analytics />
      </body>
    </html>
  );
}
