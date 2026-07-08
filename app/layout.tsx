import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

import { LanguageProvider } from '@/lib/i18n/LanguageContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'Rafiq Shakiran | Professional WordPress Web Developer',
  description: 'I design and develop modern, fast, SEO-friendly, and conversion-focused WordPress websites that help businesses build credibility, generate leads, and grow online.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-primary text-slate-200 antialiased selection:bg-cyan-500/30 selection:text-cyan-200`} suppressHydrationWarning>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
