import type { Metadata } from "next";
import { Playfair_Display, Inter, Noto_Serif_Devanagari } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const devanagari = Noto_Serif_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ECHOES OF GITA — Wisdom, Just a Tap Away",
  description: "Explore timeless teachings from the Bhagavad Gita and discover how they relate to the real questions, decisions, and stress of modern daily life. Powered by Google Gemini AI & RAG Verse Engine.",
  keywords: ["Bhagavad Gita", "Gita AI", "Echoes of Gita", "Mahabharata", "Bhishma Parva", "Karma Yoga", "Wisdom", "Krishna", "Arjuna"],
  authors: [{ name: "Echoes of Gita Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${devanagari.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#fbf9f4] text-slate-900 antialiased selection:bg-amber-200 selection:text-amber-900 font-sans">
        {children}
      </body>
    </html>
  );
}
