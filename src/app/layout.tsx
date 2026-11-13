import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const calculatorFont = Plus_Jakarta_Sans({
  variable: '--font-calculator',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Calculator',
  description: 'A simple calculator for everyday arithmetic, with keyboard support.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${calculatorFont.variable} antialiased`}>
      <body className="bg-background m-0">{children}</body>
    </html>
  );
}
