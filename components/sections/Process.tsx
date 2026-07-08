'use client';

import { motion } from 'motion/react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Process() {
  const { language } = useLanguage();

  const stepsData = {
    ms: [
      { num: '01', title: 'Penemuan', desc: 'Memahami matlamat perniagaan anda, khalayak sasaran, dan keperluan projek.' },
      { num: '02', title: 'Perancangan', desc: 'Mencipta senibina, peta tapak, dan memilih tindanan teknologi yang optimum.' },
      { num: '03', title: 'Reka Bentuk UI', desc: 'Menghasilkan rangka wayar premium, berfokuskan penukaran dan reka bentuk visual.' },
      { num: '04', title: 'Pembangunan', desc: 'Menterjemah reka bentuk ke dalam kod yang bersih, pantas, dan dioptimumkan untuk SEO.' },
      { num: '05', title: 'Pengujian', desc: 'QA yang ketat merentasi peranti, pelayar, dan pengauditan prestasi.' },
      { num: '06', title: 'Pelancaran', desc: 'Pengerahan yang lancar, penghijrahan, dan pemeriksaan persekitaran langsung akhir.' },
      { num: '07', title: 'Sokongan', desc: 'Penyelenggaraan berterusan, kemas kini keselamatan, dan pemantauan prestasi.' }
    ],
    en: [
      { num: '01', title: 'Discovery', desc: 'Understanding your business goals, target audience, and project requirements.' },
      { num: '02', title: 'Planning', desc: 'Creating architecture, sitemaps, and selecting the optimal technology stack.' },
      { num: '03', title: 'UI Design', desc: 'Crafting premium, conversion-focused wireframes and visual designs.' },
      { num: '04', title: 'Development', desc: 'Translating designs into clean, fast, and SEO-optimized code.' },
      { num: '05', title: 'Testing', desc: 'Rigorous QA across devices, browsers, and performance auditing.' },
      { num: '06', title: 'Launch', desc: 'Seamless deployment, migration, and final live environment checks.' },
      { num: '07', title: 'Support', desc: 'Ongoing maintenance, security updates, and performance monitoring.' }
    ]
  };

  const texts = {
    ms: { title: 'Proses Pembangunan', subtitle: 'Rangka kerja terbukti untuk menyampaikan produk digital yang berjaya.' },
    en: { title: 'Development Process', subtitle: 'A proven framework for delivering successful digital products.' }
  };

  const steps = stepsData[language];
  const t = texts[language];

  return (
    <section id="process" className="py-32 relative bg-secondary/50 border-y border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h2>
          <p className="text-slate-400">{t.subtitle}</p>
        </div>

        <div className="relative">
          {/* Horizontal line for desktop */}
          <div className="hidden md:block absolute top-[4.5rem] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent"></div>
          
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-y-12 md:gap-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={`${language}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative w-full md:w-1/3 lg:w-1/4 px-4 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full glass border border-white/20 flex items-center justify-center text-xl font-bold font-display text-white mb-6 relative z-10 group-hover:bg-white group-hover:text-primary transition-colors duration-300 shadow-[0_0_30px_rgba(6,182,212,0)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
