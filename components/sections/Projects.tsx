'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowUpRight, Github } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Projects() {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = {
    ms: ['Semua', 'E-Dagang', 'Korporat', 'Aplikasi Web'],
    en: ['All', 'E-Commerce', 'Corporate', 'Web App']
  };

  const projectsData = {
    ms: [
      {
        title: 'Portal Korporat FinTech',
        category: 'Korporat',
        overview: 'Laman web korporat premium untuk institusi kewangan terkemuka.',
        problem: 'Reka bentuk lapuk menyebabkan kadar lantunan tinggi dan kurang kepercayaan.',
        solution: 'Reka bentuk semula sepenuhnya dengan UI moden, prestasi dioptimumkan, dan integrasi portal pelanggan yang selamat.',
        result: '+120% Penjanaan Prospek, 98 Skor Lighthouse.',
        tech: ['WordPress', 'Elementor Pro', 'Custom CSS/JS', 'GSAP'],
        image: 'https://picsum.photos/seed/fintech/800/600'
      },
      {
        title: 'Kedai E-Dagang Mewah',
        category: 'E-Dagang',
        overview: 'Platform e-dagang fesyen mewah.',
        problem: 'Proses daftar keluar perlahan dan tidak responsif mudah alih menyebabkan peninggalan troli.',
        solution: 'Rombakan WooCommerce dengan aliran daftar keluar tersuai dan pendekatan utamakan mudah alih.',
        result: 'Peningkatan 45% dalam kadar penukaran, masa muatan bawah 2s.',
        tech: ['WooCommerce', 'PHP', 'React', 'Redis'],
        image: 'https://picsum.photos/seed/ecommerce/800/600'
      },
      {
        title: 'Sistem Tempahan MedClinic',
        category: 'Aplikasi Web',
        overview: 'Sistem tempahan janji temu dalam talian untuk rantaian klinik perubatan.',
        problem: 'Tempahan telefon manual menyebabkan kesesakan pentadbiran.',
        solution: 'Enjin tempahan automatik tersuai dengan peringatan SMS.',
        result: 'Menjimatkan 20+ jam/minggu kerja admin, 0 janji temu terlepas.',
        tech: ['WordPress', 'Custom Plugin', 'Twilio API', 'MySQL'],
        image: 'https://picsum.photos/seed/clinic/800/600'
      }
    ],
    en: [
      {
        title: 'FinTech Corporate Portal',
        category: 'Corporate',
        overview: 'A premium corporate website for a leading financial institution.',
        problem: 'Outdated design causing high bounce rates and poor trust.',
        solution: 'Complete redesign with modern UI, optimized performance, and secure client portal integration.',
        result: '+120% Lead Generation, 98 Lighthouse Score.',
        tech: ['WordPress', 'Elementor Pro', 'Custom CSS/JS', 'GSAP'],
        image: 'https://picsum.photos/seed/fintech/800/600'
      },
      {
        title: 'Luxe E-Commerce Store',
        category: 'E-Commerce',
        overview: 'High-end fashion e-commerce platform.',
        problem: 'Slow checkout process and mobile unresponsiveness leading to cart abandonment.',
        solution: 'WooCommerce overhaul with custom checkout flow and mobile-first approach.',
        result: '45% increase in conversion rate, sub-2s load time.',
        tech: ['WooCommerce', 'PHP', 'React', 'Redis'],
        image: 'https://picsum.photos/seed/ecommerce/800/600'
      },
      {
        title: 'MedClinic Booking System',
        category: 'Web App',
        overview: 'Online appointment system for a chain of medical clinics.',
        problem: 'Manual phone bookings causing administrative bottlenecks.',
        solution: 'Custom built automated booking engine with SMS reminders.',
        result: 'Saved 20+ hours/week in admin work, 0 missed appointments.',
        tech: ['WordPress', 'Custom Plugin', 'Twilio API', 'MySQL'],
        image: 'https://picsum.photos/seed/clinic/800/600'
      }
    ]
  };

  const texts = {
    ms: { badge: 'Hasil Kerja Pilihan', title1: 'Menyampaikan', title2: 'hasil yang boleh diukur.', prob: 'Masalah:', sol: 'Penyelesaian:', res: 'Hasil:', demo: 'Demo Langsung' },
    en: { badge: 'Featured Work', title1: 'Delivering', title2: 'measurable results.', prob: 'Problem:', sol: 'Solution:', res: 'Result:', demo: 'Live Demo' }
  };

  const currentCategories = categories[language];
  const currentProjects = projectsData[language];
  const t = texts[language];

  // Map activeCategory to English for filtering, or just use index
  const activeIndex = categories['en'].indexOf(activeCategory) !== -1 ? categories['en'].indexOf(activeCategory) : categories['ms'].indexOf(activeCategory);
  
  const filteredProjects = currentProjects.filter(p => activeIndex === 0 || p.category === currentCategories[activeIndex]);

  const handleCategoryClick = (cat: string) => {
    setActiveCategory(cat);
  };

  return (
    <section id="work" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent-purple font-medium tracking-wider uppercase text-sm mb-4 block"
            >
              {t.badge}
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold"
            >
              {t.title1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-cyan">{t.title2}</span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {currentCategories.map((cat, i) => {
              const isCatActive = activeIndex === i || (activeIndex === -1 && i === 0);
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryClick(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isCatActive 
                      ? 'bg-white text-primary' 
                      : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/5'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </motion.div>
        </div>

        <div className="grid gap-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="group relative rounded-3xl glass border border-white/10 overflow-hidden lg:h-[500px] flex flex-col lg:flex-row"
            >
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center relative z-10 bg-primary/40 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none">
                <div className="text-accent-cyan text-sm font-bold tracking-wider uppercase mb-4">
                  {project.category}
                </div>
                <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                  {project.title}
                </h3>
                
                <div className="space-y-4 mb-8 text-sm">
                  <div>
                    <span className="text-white font-semibold">{t.prob} </span>
                    <span className="text-slate-400">{project.problem}</span>
                  </div>
                  <div>
                    <span className="text-white font-semibold">{t.sol} </span>
                    <span className="text-slate-400">{project.solution}</span>
                  </div>
                  <div>
                    <span className="text-accent-cyan font-semibold">{t.res} </span>
                    <span className="text-slate-300 font-medium">{project.result}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((techItem, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-white/5 text-slate-300 text-xs border border-white/10">
                      {techItem}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <a href="#" className="flex items-center gap-2 text-white font-medium hover:text-accent-cyan transition-colors bg-white/10 hover:bg-white/20 px-5 py-2.5 rounded-full border border-white/10">
                    {t.demo} <ArrowUpRight size={16} />
                  </a>
                  <a href="#" className="flex items-center gap-2 text-slate-400 font-medium hover:text-white transition-colors p-2.5 rounded-full hover:bg-white/10">
                    <Github size={20} />
                  </a>
                </div>
              </div>
              
              <div className="lg:w-1/2 relative h-64 lg:h-full overflow-hidden order-first lg:order-last">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-110"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
