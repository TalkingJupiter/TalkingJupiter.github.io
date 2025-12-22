import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
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

export const metadata = {
  title: "Batuhan Sencer | Research Assistant & CS Student",
  verification: {
    google: "NKzBKxUmxxJN5G6mQTU_qBwD8EFiEub0oXnRqJiIRNpg",
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
        <Analytics />
      </body>
    </html>
  );
}
