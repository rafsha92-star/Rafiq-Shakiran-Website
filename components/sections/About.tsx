'use client';

import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function About() {
  const { language } = useLanguage();

  const content = {
    ms: {
      title1: 'Lebih daripada sekadar kod.',
      title2: 'Saya membina penyelesaian perniagaan.',
      p1: 'Sebagai seorang Profesional Pembangunan Web yang berpangkalan di Malaysia, saya memahami bahawa laman web adalah satu pelaburan. Ia bukan sekadar kelihatan cantik—ia perlu berprestasi, menukar prospek, dan memacu pertumbuhan perniagaan sebenar.',
      p2: 'Dengan pengalaman bertahun-tahun mengkhususkan diri dalam pembangunan WordPress tersuai, saya merapatkan jurang antara kecemerlangan teknikal dan strategi perniagaan. Saya fokus kepada penyampaian platform berprestasi tinggi, selamat, dan sangat dioptimumkan yang pelanggan anda akan suka gunakan dan anda dapati mudah untuk diuruskan.',
      p3: 'Keghairahan saya terletak pada penyelesaian masalah dan kebolehpercayaan jangka panjang. Apabila anda mengupah saya, anda bukan sekadar mendapatkan pembangun; anda bekerjasama dengan pakar strategi digital yang berdedikasi untuk kejayaan anda.',
      checks: [
        'Perhatian Teliti Terhadap Perincian',
        'Pendekatan Mengutamakan Perniagaan',
        'Komunikasi Jelas & Telus',
        'Kebolehpercayaan & Sokongan Jangka Panjang'
      ],
      journeyTitle: 'Perjalanan Saya',
      j1: { title: 'Pakar IT & Sistem', desc: 'Lebih 5 tahun mengetuai infrastruktur IT, platform e-dagang (Shopify/Onpay), dan pembangunan web korporat di Global Genius Consultant.' },
      j2: { title: 'Pembangun Sistem', desc: 'Membangunkan sistem akademik perusahaan dan mengurus pelayan di IIUM Advanced Technologies.' },
      j3: { title: 'Sarjana Muda IT', desc: 'Lulusan dari Universiti Islam Antarabangsa Malaysia (UIAM) dengan pengkhususan dalam Teknologi Maklumat.' }
    },
    en: {
      title1: 'More than just code.',
      title2: 'I build business solutions.',
      p1: "As a Professional Web Developer based in Malaysia, I understand that a website is an investment. It shouldn't just look pretty—it needs to perform, convert, and drive actual business growth.",
      p2: 'With years of experience specializing in custom WordPress development, I bridge the gap between technical excellence and business strategy. I focus on delivering high-performance, secure, and highly optimized platforms that your customers will love to use and you will find easy to manage.',
      p3: "My passion lies in problem-solving and long-term reliability. When you hire me, you aren't just getting a developer; you are partnering with a digital strategist dedicated to your success.",
      checks: [
        'Meticulous Attention to Detail',
        'Business-First Approach',
        'Clear, Transparent Communication',
        'Long-Term Reliability & Support'
      ],
      journeyTitle: 'My Journey',
      j1: { title: 'IT & System Specialist', desc: 'Over 5 years leading IT infrastructure, e-commerce platforms (Shopify/Onpay), and corporate web development at Global Genius Consultant.' },
      j2: { title: 'System Developer', desc: 'Developed enterprise academic systems and managed servers at IIUM Advanced Technologies.' },
      j3: { title: 'Bachelor of IT', desc: 'Graduated from International Islamic University Malaysia (IIUM) with a focus on Information Technology.' }
    }
  };

  const t = content[language];

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t.title1} <br />
              <span className="text-slate-500">{t.title2}</span>
            </h2>
            <div className="w-20 h-1 bg-accent-cyan mb-8 rounded-full"></div>
            
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
              <p>{t.p3}</p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-4">
              {t.checks.map((item, i) => (
                <div key={`${language}-${i}`} className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-accent-cyan/20 p-1">
                    <Check size={14} className="text-accent-cyan" />
                  </div>
                  <span className="text-sm text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/20 to-accent-purple/20 rounded-3xl blur-2xl z-0"></div>
            <div className="glass p-8 rounded-3xl border border-white/10 relative z-10">
              <h3 className="text-xl font-bold text-white mb-8">{t.journeyTitle}</h3>
              
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
                
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-primary bg-accent-cyan shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_rgba(6,182,212,0.2)]"></div>
                  <div className="w-[calc(100%-3rem)] md:w-[calc(50%-1.5rem)] glass p-4 rounded-xl border border-white/5">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-white">{t.j1.title}</h4>
                    </div>
                    <p className="text-sm text-slate-400">{t.j1.desc}</p>
                  </div>
                </div>
                
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-primary bg-accent-blue shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
                  <div className="w-[calc(100%-3rem)] md:w-[calc(50%-1.5rem)] glass p-4 rounded-xl border border-white/5">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-white">{t.j2.title}</h4>
                    </div>
                    <p className="text-sm text-slate-400">{t.j2.desc}</p>
                  </div>
                </div>
                
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-primary bg-slate-600 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
                  <div className="w-[calc(100%-3rem)] md:w-[calc(50%-1.5rem)] glass p-4 rounded-xl border border-white/5">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-white">{t.j3.title}</h4>
                    </div>
                    <p className="text-sm text-slate-400">{t.j3.desc}</p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
