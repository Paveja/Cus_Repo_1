import type { Metadata } from "next";
import { DM_Serif_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const displayFont = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Watch — An automatic watch study",
  description:
    "Explore an automatic watch concept through thoughtful design, fine details, and illustrative specifications.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="bg-background text-foreground selection:bg-accent selection:text-accent-foreground font-sans text-base antialiased">
        <a
          href="#main-content"
          className="bg-primary text-primary-foreground focus-visible:outline-ring fixed top-4 left-4 z-50 -translate-y-24 px-6 py-3 focus:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
