import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Chakra_Petch, Russo_One } from 'next/font/google';
import './globals.css';

const chakraPetch = Chakra_Petch({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const russoOne = Russo_One({
  variable: '--font-display',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Tic Tac Toe — Local play',
  description: 'A polished local Tic Tac Toe match.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${chakraPetch.variable} ${russoOne.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
