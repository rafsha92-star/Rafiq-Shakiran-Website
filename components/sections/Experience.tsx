'use client';

import { motion } from 'motion/react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Experience() {
  const { language } = useLanguage();

  const experiencesData = {
    ms: [
      {
        role: 'Pakar IT & Sistem',
        company: 'Global Genius Consultant Sdn Bhd',
        period: '2019 - Kini',
        desc: 'Mengurus keseluruhan infrastruktur IT dan sistem syarikat. Membangun dan menyelenggara laman web korporat, mengendalikan platform e-dagang (Onpay, Shopify), dan mengetuai inisiatif pemasaran digital (WhatsApp & Pemasaran E-mel).',
        tech: ['WordPress', 'Shopify', 'Onpay', 'Sokongan IT', 'Pemasaran Digital']
      },
      {
        role: 'Pembangun Sistem & Pentadbir Pelayan',
        company: 'IIUM Advanced Technologies Sdn Bhd',
        period: '2016 - 2017',
        desc: 'Membangunkan Sistem Pengurusan Kolej (CMS) untuk IIUM ICCE dan Kolej Islam Antarabangsa. Membina sistem perpustakaan KOHA, sistem akademik, dan portal pelajar. Mentadbir pelayan Ubuntu & Windows dan mereka bentuk laman web korporat.',
        tech: ['WordPress', 'PHP', 'MySQL', 'Ubuntu Server', 'Windows Server']
      }
    ],
    en: [
      {
        role: 'IT & System Specialist',
        company: 'Global Genius Consultant Sdn Bhd',
        period: '2019 - Present',
        desc: 'Managing overall IT infrastructure and company systems. Developing and maintaining the corporate website, handling e-commerce platforms (Onpay, Shopify), and leading digital marketing initiatives (WhatsApp & Email Marketing).',
        tech: ['WordPress', 'Shopify', 'Onpay', 'IT Support', 'Digital Marketing']
      },
      {
        role: 'System Developer & Server Administrator',
        company: 'IIUM Advanced Technologies Sdn Bhd',
        period: '2016 - 2017',
        desc: 'Developed the College Management System (CMS) for IIUM ICCE and International Islamic College. Built the KOHA library system, academic systems, and student portals. Administered Ubuntu & Windows servers and designed the corporate website.',
        tech: ['WordPress', 'PHP', 'MySQL', 'Ubuntu Server', 'Windows Server']
      }
    ]
  };

  const texts = {
    ms: 'Pengalaman Profesional',
    en: 'Professional Experience'
  };

  const experiences = experiencesData[language];
  const title = texts[language];

  return (
    <section id="experience" className="py-32 relative bg-primary">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center"
        >
          {title}
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${language}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-5 md:gap-8 items-start relative">
                
                {/* Timeline line & dot */}
                <div className="absolute left-0 md:left-[20%] w-[1px] h-full bg-white/10 top-2 -ml-px md:ml-0 md:translate-x-[-0.5px]"></div>
                <div className="absolute left-0 md:left-[20%] w-3 h-3 rounded-full bg-accent-cyan top-2 -translate-x-[5px] md:-translate-x-[5.5px] shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>

                <div className="md:col-span-1 mb-2 md:mb-0 md:text-right pt-1 pr-6">
                  <span className="text-accent-cyan font-mono text-sm font-bold">{exp.period}</span>
                </div>
                
                <div className="md:col-span-4 glass p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                  <h4 className="text-slate-400 font-medium mb-4">{exp.company}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {exp.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t, i) => (
                      <span key={i} className="text-xs font-mono text-slate-500 bg-white/5 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
