'use client';

import { motion } from 'motion/react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const skills = [
  'WordPress', 'PHP', 'Laravel', 'MySQL', 'Elementor', 'WooCommerce', 
  'HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS',
  'Ubuntu Server', 'Windows Server', 'Shopify', 'Onpay',
  'Digital Marketing', 'SEO', 'Google Analytics', 'Canva', 'Adobe Suite'
];

export default function Skills() {
  const { language } = useLanguage();
  
  const title = language === 'ms' ? 'Senjata Teknikal' : 'Technical Arsenal';

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-white mb-12"
        >
          {title}
        </motion.h2>
        
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-5 py-2.5 rounded-full glass border border-white/10 text-sm font-medium text-slate-300 hover:text-white hover:border-accent-cyan/50 hover:bg-accent-cyan/10 transition-all cursor-default"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
