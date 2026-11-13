import type { Metadata } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import "./globals.css";
const display = Bodoni_Moda({ subsets: ["latin"], variable: "--font-display" });
const body = Jost({ subsets: ["latin"], variable: "--font-body" });
export const metadata: Metadata = {
  title: "Maison Auré — A feeling, bottled.",
  description:
    "Explore the world of Maison Auré. An imagined collection of expressive fragrances, from sunlit citrus to warm amber.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
