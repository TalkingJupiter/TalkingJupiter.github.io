import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { Antonio, Inter } from "next/font/google";
import AnimatedLanesBackground from "@/components/ui/AnimatedLanesBackground";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${antonio.variable} ${inter.variable}`}>
      <body>
        <AnimatedLanesBackground />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
