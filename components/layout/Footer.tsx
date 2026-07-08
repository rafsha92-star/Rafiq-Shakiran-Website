'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, Facebook } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-primary/50 border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-16">
          <div className="max-w-xs text-center md:text-left">
            <Link href="/" className="inline-block mb-4">
              <span className="font-display font-bold text-3xl tracking-tighter text-white">
                W<span className="text-accent-cyan">P</span>.
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t('footer.desc')}
            </p>
          </div>
          
          <div className="flex gap-16">
            <div>
              <h4 className="text-white font-medium mb-4">{t('footer.navTitle')}</h4>
              <ul className="flex flex-col gap-3 text-sm text-slate-400">
                <li><Link href="#services" className="hover:text-accent-cyan transition-colors">{t('nav.services')}</Link></li>
                <li><Link href="#work" className="hover:text-accent-cyan transition-colors">{t('nav.work')}</Link></li>
                <li><Link href="#process" className="hover:text-accent-cyan transition-colors">{t('nav.process')}</Link></li>
                <li><Link href="#contact" className="hover:text-accent-cyan transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">{t('footer.socialTitle')}</h4>
              <ul className="flex flex-col gap-3 text-sm text-slate-400">
                <li><a href="https://linkedin.com/in/rshakiran" target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan transition-colors flex items-center gap-2"><Linkedin size={16} /> LinkedIn</a></li>
                <li><a href="https://facebook.com/rshakiran" target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan transition-colors flex items-center gap-2"><Facebook size={16} /> Facebook</a></li>
                <li><a href="mailto:rshakiran@gmail.com" className="hover:text-accent-cyan transition-colors flex items-center gap-2"><Mail size={16} /> Email</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} NIK MUHAMAD RAFIQ SHAKIRAN. {t('footer.rights')}</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
