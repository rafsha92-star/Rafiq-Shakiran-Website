'use client';

import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, MapPin, MessageSquare, Send } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const { language, t } = useLanguage();
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(data);
    reset();
    alert(t('contact.success'));
  };

  return (
    <section id="contact" className="py-32 relative border-t border-white/5 bg-secondary/20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-6">
              {t('contact.title1')} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-blue">{t('contact.title2')}</span> <br/>
              {t('contact.title3')}
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-md">
              {t('contact.subtitle')}
            </p>

            <div className="space-y-6">
              <a href="mailto:rshakiran@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-accent-cyan/20 transition-colors">
                  <Mail size={20} className="text-accent-cyan" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">{t('contact.emailTitle')}</p>
                  <p className="font-medium">rshakiran@gmail.com</p>
                </div>
              </a>
              <a href="https://wa.me/60105750229" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <MessageSquare size={20} className="text-green-500" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">{t('contact.waTitle')}</p>
                  <p className="font-medium">(+60) 10 575 0229</p>
                </div>
              </a>
              <div className="flex items-center gap-4 text-slate-300 group cursor-default">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center">
                  <MapPin size={20} className="text-slate-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">{t('contact.locTitle')}</p>
                  <p className="font-medium">{t('contact.locDesc')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-10 rounded-3xl border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white mb-6">{t('contact.formTitle')}</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">{t('contact.nameLabel')}</label>
                <input 
                  {...register('name')}
                  type="text" 
                  className={`w-full bg-primary/50 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 transition-all`}
                  placeholder={t('contact.namePlace')}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">{t('contact.emailLabel')}</label>
                <input 
                  {...register('email')}
                  type="email" 
                  className={`w-full bg-primary/50 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 transition-all`}
                  placeholder={t('contact.emailPlace')}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">{t('contact.msgLabel')}</label>
                <textarea 
                  {...register('message')}
                  rows={4}
                  className={`w-full bg-primary/50 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 transition-all resize-none`}
                  placeholder={t('contact.msgPlace')}
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-primary font-bold py-4 rounded-xl hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? t('contact.sending') : t('contact.sendBtn')} 
                {!isSubmitting && <Send size={18} />}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
