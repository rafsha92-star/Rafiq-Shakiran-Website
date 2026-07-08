'use client';

import { motion } from 'motion/react';
import { Monitor, ShoppingCart, Paintbrush, Gauge, ShieldCheck, HardDrive, Wrench, Bot } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Services() {
  const { language } = useLanguage();

  const servicesData = {
    ms: [
      { icon: Monitor, title: 'Pembangunan WP Tersuai', description: 'Laman web korporat & perniagaan dibina dari awal disesuaikan dengan identiti jenama anda.', benefits: ['Responsif', 'Boleh Dikalakan', 'Sedia SEO'] },
      { icon: ShoppingCart, title: 'Penyelesaian WooCommerce', description: 'Kedai dalam talian berprestasi tinggi yang direka untuk pengalaman membeli-belah dan jualan yang optimum.', benefits: ['Daftar Keluar Selamat', 'Penyegerakan Inventori', 'Pantas'] },
      { icon: Paintbrush, title: 'Reka Bentuk Semula', description: 'Memodenkan laman web yang lapuk menjadi aset digital premium yang membina kepercayaan.', benefits: ['UX Lebih Baik', 'Penukaran Lebih Tinggi', 'UI Moden'] },
      { icon: Gauge, title: 'Pengoptimuman Kelajuan', description: 'Pengoptimuman teknikal mendalam untuk memastikan laman web anda dimuat serta-merta dan melepasi Core Web Vitals.', benefits: ['90+ Lighthouse', 'Kadar Lantunan Rendah', 'SEO Lebih Baik'] },
      { icon: ShieldCheck, title: 'Keselamatan & Penyelenggaraan', description: 'Perlindungan proaktif, kemas kini berkala, dan pemantauan berterusan untuk memastikan perniagaan anda selamat.', benefits: ['Perlindungan Hasad', 'Sandaran Harian', 'Masa Hidup'] },
      { icon: HardDrive, title: 'Penghijrahan & Pengehosan', description: 'Penghijrahan sifar masa henti yang lancar dan konfigurasi pengehosan awan premium.', benefits: ['Sifar Kehilangan Data', 'Tetapan Cloudflare', 'SSL'] },
      { icon: Wrench, title: 'Pembaikan Pepijat & Sokongan', description: 'Penyelesaian masalah teknikal pakar untuk isu kompleks WordPress, PHP, atau pangkalan data.', benefits: ['Penyelesaian Pantas', 'Pembaikan Punca Masalah', 'Boleh Dipercayai'] },
      { icon: Bot, title: 'AI & Automasi', description: 'Mengintegrasikan ChatGPT, chatbot pintar, dan automasi perniagaan ke dalam aliran kerja anda.', benefits: ['Bot Sokongan 24/7', 'Penjanaan Prospek', 'Kecekapan'] }
    ],
    en: [
      { icon: Monitor, title: 'Custom WP Development', description: 'Corporate & Business websites built from the ground up tailored to your brand identity.', benefits: ['Responsive', 'Scalable', 'SEO Ready'] },
      { icon: ShoppingCart, title: 'WooCommerce Solutions', description: 'High-converting online stores engineered for optimal shopping experiences and sales.', benefits: ['Secure Checkouts', 'Inventory Sync', 'Fast'] },
      { icon: Paintbrush, title: 'Website Redesign', description: 'Modernizing outdated websites into premium, trust-building digital assets.', benefits: ['Better UX', 'Higher Conversion', 'Modern UI'] },
      { icon: Gauge, title: 'Speed Optimization', description: 'Deep technical optimization to ensure your site loads instantly and passes Core Web Vitals.', benefits: ['90+ Lighthouse', 'Lower Bounce Rate', 'Better SEO'] },
      { icon: ShieldCheck, title: 'Security & Maintenance', description: 'Proactive protection, regular updates, and continuous monitoring to keep your business safe.', benefits: ['Malware Protection', 'Daily Backups', 'Uptime'] },
      { icon: HardDrive, title: 'Migration & Hosting', description: 'Seamless zero-downtime migrations and premium cloud hosting configuration.', benefits: ['Zero Data Loss', 'Cloudflare Setup', 'SSL'] },
      { icon: Wrench, title: 'Bug Fixes & Support', description: 'Expert technical troubleshooting for complex WordPress, PHP, or database issues.', benefits: ['Fast Resolution', 'Root Cause Fix', 'Reliable'] },
      { icon: Bot, title: 'AI & Automation', description: 'Integrating ChatGPT, intelligent chatbots, and business automation into your workflow.', benefits: ['24/7 Support Bot', 'Lead Gen', 'Efficiency'] }
    ]
  };

  const texts = {
    ms: { badge: 'Kepakaran Saya', title1: 'Penyelesaian komprehensif untuk', title2: 'perniagaan moden.' },
    en: { badge: 'My Expertise', title1: 'Comprehensive solutions for', title2: 'modern businesses.' }
  };

  const services = servicesData[language];
  const t = texts[language];

  return (
    <section id="services" className="py-32 relative bg-secondary/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent-cyan font-medium tracking-wider uppercase text-sm mb-4 block"
          >
            {t.badge}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {t.title1} <span className="text-slate-500">{t.title2}</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={`${language}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-2xl bg-gradient-hover border border-white/10 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-accent-cyan/20 transition-colors duration-300">
                <service.icon size={24} className="text-slate-300 group-hover:text-accent-cyan transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="text-xs text-slate-500 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent-blue/50"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
