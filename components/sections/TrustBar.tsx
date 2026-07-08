'use client';

import { motion } from 'motion/react';
import { CheckCircle2, Zap, Shield, Smartphone, Award, Search, Headphones } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function TrustBar() {
  const { language } = useLanguage();

  const badges = {
    ms: [
      { icon: Award, label: 'Pembangun WP Profesional' },
      { icon: Search, label: 'Mesra SEO' },
      { icon: Smartphone, label: 'Responsif Mudah Alih' },
      { icon: Zap, label: 'Pemuatan Pantas' },
      { icon: Shield, label: 'Sangat Selamat' },
      { icon: Zap, label: 'Integrasi AI' },
      { icon: Headphones, label: 'Sokongan Boleh Dipercayai' },
    ],
    en: [
      { icon: Award, label: 'Professional WP Developer' },
      { icon: Search, label: 'SEO Optimized' },
      { icon: Smartphone, label: 'Mobile Responsive' },
      { icon: Zap, label: 'Fast Loading' },
      { icon: Shield, label: 'Highly Secure' },
      { icon: Zap, label: 'AI Integration' },
      { icon: Headphones, label: 'Reliable Support' },
    ]
  };

  const currentBadges = badges[language];

  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02]">
      <div className="container mx-auto px-6 overflow-hidden">
        {/* We use a simple flex wrap for standard display, could be a marquee */}
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4">
          {currentBadges.map((badge, index) => (
            <motion.div
              key={`${language}-${index}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group cursor-default"
            >
              <badge.icon size={18} className="text-accent-cyan group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium tracking-wide">{badge.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
