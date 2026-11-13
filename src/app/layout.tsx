import type { Metadata } from "next";
import { IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});
const heading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});
export const metadata: Metadata = {
  title: "Calculator",
  description: "A simple calculator for everyday arithmetic.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${body.variable} ${heading.variable}`}>
      <body className="m-0 bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
