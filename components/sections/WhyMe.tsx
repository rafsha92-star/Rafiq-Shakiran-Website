'use client';

import { motion } from 'motion/react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function WhyMe() {
  const { language } = useLanguage();

  const reasonsData = {
    ms: [
      { title: 'Berfokuskan Perniagaan', desc: 'Saya bukan sekadar membina laman web; saya membina aset digital yang menjana prospek dan memacu hasil.' },
      { title: 'Senibina Bersih', desc: 'Kod yang boleh diselenggara, boleh dikalakan, dan berstruktur cantik yang tahan ujian masa.' },
      { title: 'Dioptimumkan SEO', desc: 'Dibina dengan amalan terbaik SEO teknikal untuk memastikan keterlihatan tinggi di carian Google.' },
      { title: 'Pantas Sepantas Kilat', desc: 'Direka untuk masa muatan sub-saat untuk mengurangkan kadar lantunan dan meningkatkan UX.' },
      { title: 'Utamakan Mudah Alih', desc: 'Reka bentuk responsif sempurna yang kelihatan dan berfungsi dengan baik pada setiap peranti.' },
      { title: 'Rakan Kongsi Boleh Dipercayai', desc: 'Komunikasi jelas, penyampaian tepat pada masanya, dan sokongan jangka panjang yang boleh anda harapkan.' }
    ],
    en: [
      { title: 'Business-Focused', desc: 'I do not just build websites; I build digital assets that generate leads and drive revenue.' },
      { title: 'Clean Architecture', desc: 'Maintainable, scalable, and beautifully structured code that stands the test of time.' },
      { title: 'SEO Optimized', desc: 'Built with technical SEO best practices to ensure high visibility on Google search.' },
      { title: 'Lightning Fast', desc: 'Engineered for sub-second load times to reduce bounce rates and improve UX.' },
      { title: 'Mobile First', desc: 'Flawless responsive design that looks and functions perfectly on every device.' },
      { title: 'Reliable Partner', desc: 'Clear communication, dead-on delivery, and long-term support you can depend on.' }
    ]
  };

  const texts = {
    ms: { title1: 'Kenapa pelanggan', title2: 'memilih saya.', subtitle: 'Menyampaikan kecemerlangan melalui penguasaan teknikal dan pemikiran perniagaan strategik.' },
    en: { title1: 'Why clients', title2: 'choose me.', subtitle: 'Delivering excellence through technical mastery and strategic business thinking.' }
  };

  const reasons = reasonsData[language];
  const t = texts[language];

  return (
    <section className="py-24 relative bg-primary overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-blue/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-16 md:w-2/3">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t.title1} <span className="text-accent-blue font-serif italic font-light tracking-wide">{t.title2}</span>
          </h2>
          <p className="text-slate-400 text-lg">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={`${language}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-accent-blue before:to-transparent"
            >
              <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
