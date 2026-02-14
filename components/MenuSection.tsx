import React, { useState } from 'react';
import { MENU_DATA } from '../constants';
import MenuItem from './MenuItem';
import { MenuCategoryType } from '../types';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const MenuSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>(MENU_DATA[0].id);

  const handleCategoryClick = (id: string) => {
    setActiveCategory(id);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-24 px-4 md:px-6 bg-dark-stone relative overflow-hidden" id="menu-content">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-5xl md:text-6xl text-white mb-6">{t('menu.title')}</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-gold via-gold-light to-gold mx-auto mb-8 shadow-[0_0_10px_rgba(201,162,74,0.5)]"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            {t('menu.subtitle')}
          </p>
        </motion.div>

        {/* Category Navigation - Stickier and sleeker */}
        <div className="sticky top-[72px] z-30 bg-dark-stone/80 backdrop-blur-xl py-6 mb-16 border-b border-white/5">
          <div className="flex overflow-x-auto no-scrollbar gap-6 md:justify-center px-4">
            {MENU_DATA.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`relative whitespace-nowrap px-2 py-1 text-sm uppercase tracking-[0.2em] transition-all duration-500 ${activeCategory === category.id
                  ? 'text-gold font-bold'
                  : 'text-gray-500 hover:text-white'
                  }`}
              >
                {category.title[language]}
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="space-y-24">
          {MENU_DATA.map((category: any, idx: number) => (
            <motion.div
              key={category.id}
              id={category.id}
              className="scroll-mt-40"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-6 mb-12">
                <h3 className="font-serif text-3xl md:text-4xl text-white">
                  <span className="text-gold mr-4">/</span>
                  {category.title[language]}
                </h3>
                <div className="h-px flex-grow bg-white/10"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {category.items.map((item: any) => (
                  <MenuItem key={item.id} item={item} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center border-t border-white/5 pt-10">
          <p className="text-xs text-gray-600 italic tracking-widest uppercase">
            {language === 'fr'
              ? '* Les prix sont en Dinars Tunisiens (DT) • Les images sont à titre d’illustration'
              : '* Prices are in Tunisian Dinar (DT) • Images are for illustration'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;