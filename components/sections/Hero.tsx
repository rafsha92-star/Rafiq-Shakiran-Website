'use client';

import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Hero() {
  const { language } = useLanguage();

  const content = {
    ms: {
      available: "Hai, saya Rafiq Shakiran. Sedia untuk projek baharu",
      title1: "Membina",
      title2: "Laman Web WordPress",
      title3: "Profesional Yang Membantu Perniagaan Berkembang.",
      subtitle: "Saya mereka bentuk dan membangunkan laman web WordPress yang moden, pantas, mesra SEO, dan berfokuskan penukaran yang membantu perniagaan membina kredibiliti, menjana prospek, dan berkembang secara dalam talian.",
      viewWork: "Lihat Hasil Kerja",
      hireMe: "Upah Saya",
      scroll: "Skrol"
    },
    en: {
      available: "Hi, I'm Rafiq Shakiran. Available for new projects",
      title1: "Building Professional",
      title2: "WordPress Websites",
      title3: "That Help Businesses Grow.",
      subtitle: "I design and develop modern, fast, SEO-friendly, and conversion-focused WordPress websites that help businesses build credibility, generate leads, and grow online.",
      viewWork: "View My Work",
      hireMe: "Hire Me",
      scroll: "Scroll"
    }
  };

  const t = content[language];

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 glass bg-white/5 backdrop-blur-sm"
            >
              <span className="text-sm font-medium text-slate-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse"></span>
                {t.available}
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-6"
            >
              {t.title1} <br className="hidden md:block" />
              <span className="text-gradient">{t.title2}</span> <br className="hidden md:block" />
              {t.title3}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed"
            >
              {t.subtitle}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="#work"
                className="px-8 py-4 rounded-full bg-white text-primary font-bold hover:scale-105 transition-transform duration-300 flex items-center gap-2"
              >
                {t.viewWork} <ArrowRight size={18} />
              </Link>
              <Link
                href="#contact"
                className="px-8 py-4 rounded-full border border-white/20 text-white font-bold hover:bg-white/10 transition-colors duration-300"
              >
                {t.hireMe}
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 flex items-center gap-6"
            >
              <a href="https://linkedin.com/in/rshakiran" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent-blue transition-colors p-2 rounded-full hover:bg-white/5"><Linkedin size={20} /></a>
              <a href="mailto:rshakiran@gmail.com" className="text-slate-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"><Mail size={20} /></a>
              <a href="https://wa.me/60105750229" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-green-500 transition-colors p-2 rounded-full hover:bg-white/5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
              </a>
            </motion.div>
          </div>
          
          {/* Image/Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative lg:h-[600px] flex items-center justify-center lg:justify-end hidden md:flex"
          >
            <div className="relative w-[400px] h-[500px] rounded-2xl overflow-hidden glass p-2 border border-white/10">
               <div className="absolute inset-0 bg-gradient-to-tr from-accent-cyan/20 to-accent-purple/20 mix-blend-overlay z-10 rounded-xl"></div>
               <Image
                 src="https://picsum.photos/seed/developer/800/1000"
                 alt="Professional WordPress Developer"
                 fill
                 className="object-cover rounded-xl filter grayscale contrast-125"
                 referrerPolicy="no-referrer"
                 priority
               />
               
               {/* Floating elements */}
               <motion.div
                 animate={{ y: [-10, 10, -10] }}
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 className="absolute -left-12 top-20 glass px-6 py-4 rounded-xl shadow-2xl z-20 flex items-center gap-4"
               >
                 <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">WP</div>
                 <div>
                   <p className="text-sm font-bold text-white">Custom Dev</p>
                   <p className="text-xs text-slate-400">Pixel Perfect</p>
                 </div>
               </motion.div>

               <motion.div
                 animate={{ y: [10, -10, 10] }}
                 transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                 className="absolute -right-8 bottom-32 glass px-6 py-4 rounded-xl shadow-2xl z-20 flex items-center gap-4"
               >
                 <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold">100</div>
                 <div>
                   <p className="text-sm font-bold text-white">Performance</p>
                   <p className="text-xs text-slate-400">Lighthouse Score</p>
                 </div>
               </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-500 uppercase tracking-widest font-medium">{t.scroll}</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-slate-500 to-transparent"></div>
      </motion.div>
    </section>
  );
}
