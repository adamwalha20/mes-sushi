import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-dark-slate relative overflow-hidden" id="about">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 border-2 border-gold transform translate-x-4 translate-y-4 rounded-sm"></div>
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8 }}
                src="https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1925&auto=format&fit=crop"
                alt="Sushi Chef preparing food"
                className="relative z-10 w-full h-[500px] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <span className="text-gold uppercase tracking-widest text-sm font-bold mb-2 block">{t('about.badge')}</span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
              {t('about.title')}
            </h2>
            <div className="space-y-6 text-gray-300 leading-relaxed mb-8">
              <p>
                {t('about.p1')}
              </p>
              <p>
                {t('about.p2')}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-gray-800 pt-8">
              <div className="text-center lg:text-left">
                <span className="block text-2xl font-serif text-gold mb-1">{t('about.stat1')}</span>
                <span className="text-xs uppercase tracking-wider text-gray-500">{t('about.label1')}</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block text-2xl font-serif text-gold mb-1">{t('about.stat2')}</span>
                <span className="text-xs uppercase tracking-wider text-gray-500">{t('about.label2')}</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block text-2xl font-serif text-gold mb-1">{t('about.stat3')}</span>
                <span className="text-xs uppercase tracking-wider text-gray-500">{t('about.label3')}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;