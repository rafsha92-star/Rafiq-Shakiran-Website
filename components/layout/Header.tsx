'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const navLinks = {
  en: [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'Experience', href: '#experience' },
  ],
  ms: [
    { name: 'Perkhidmatan', href: '#services' },
    { name: 'Hasil Kerja', href: '#work' },
    { name: 'Proses', href: '#process' },
    { name: 'Pengalaman', href: '#experience' },
  ]
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = navLinks[language];
  const hireMeText = language === 'ms' ? 'Upah Saya' : 'Hire Me';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 glass shadow-lg' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link href="/" className="relative z-50 group">
          <span className="font-display font-bold text-2xl tracking-tighter text-white">
            W<span className="text-accent-cyan">P</span>.
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-4 border-l border-white/20 pl-4">
            <button
              onClick={() => setLanguage(language === 'ms' ? 'en' : 'ms')}
              className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              <Globe size={16} />
              <span className="uppercase">{language === 'ms' ? 'EN' : 'MS'}</span>
            </button>
            <Link
              href="#contact"
              className="px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white font-medium text-sm hover:bg-white hover:text-primary transition-all duration-300"
            >
              {hireMeText}
            </Link>
          </div>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-4 md:hidden relative z-50">
          <button
            onClick={() => setLanguage(language === 'ms' ? 'en' : 'ms')}
            className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            <Globe size={16} />
            <span className="uppercase">{language === 'ms' ? 'EN' : 'MS'}</span>
          </button>
          <button
            className="text-slate-300 hover:text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 z-40 bg-primary/95 backdrop-blur-xl flex items-center justify-center"
            >
              <nav className="flex flex-col items-center gap-8">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-display font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 px-8 py-4 rounded-full bg-white text-primary font-bold text-lg"
                >
                  {hireMeText}
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
