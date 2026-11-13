import type { Metadata } from 'next';
import { DM_Serif_Display, Source_Sans_3 } from 'next/font/google';
import './globals.css';

const display = DM_Serif_Display({ subsets: ['latin'], weight: '400', variable: '--font-display' });
const body = Source_Sans_3({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = {
  title: 'Paper & Form — A little more considered',
  description: 'Thoughtfully designed notebooks, writing tools, and paper goods for the everyday ritual of putting pen to paper.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
