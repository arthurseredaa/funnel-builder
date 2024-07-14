import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import { FC, ReactNode } from 'react';

import Header from '@/components/custom/Header';

import './globals.scss';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Funnel Builder',
  description: 'The progressive tool that let you generate more revenue',
};

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <ClerkProvider>
    <html lang="en" className="dark">
      <body className={fontSans.className}>
        <Header />
        {children}
      </body>
    </html>
  </ClerkProvider>
);

export default RootLayout;
