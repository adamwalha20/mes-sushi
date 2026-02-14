import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, Instagram, Phone } from 'lucide-react';
import { BRAND_INFO } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.menu'), href: '#menu' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] py-3' : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hover:opacity-80 transition-opacity"
        >
          <Logo />
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {/* Language Switcher */}
          <div className="flex items-center gap-2 border-r border-white/10 pr-6 mr-2">
            <button
              onClick={() => setLanguage('fr')}
              className={`text-[10px] font-bold tracking-widest transition-colors ${language === 'fr' ? 'text-gold' : 'text-white/50 hover:text-white'
                }`}
            >
              FR
            </button>
            <span className="text-white/10 text-[10px]">|</span>
            <button
              onClick={() => setLanguage('en')}
              className={`text-[10px] font-bold tracking-widest transition-colors ${language === 'en' ? 'text-gold' : 'text-white/50 hover:text-white'
                }`}
            >
              EN
            </button>
          </div>
          <ul className="flex space-x-10">
            {navLinks.map((link, idx) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
              >
                <a
                  href={link.href}
                  className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/70 hover:text-gold transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-px bg-gold transition-all duration-500 group-hover:w-full"></span>
                </a>
              </motion.li>
            ))}
          </ul>
          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            href={`tel:${BRAND_INFO.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-3 bg-gold hover:bg-gold-light text-black px-8 py-3 rounded-sm font-bold transition-all hover:shadow-[0_0_20px_rgba(201,162,74,0.4)] text-[10px] uppercase tracking-widest"
          >
            <Phone size={14} />
            <span>{t('nav.orderNow')}</span>
          </motion.a>
        </div>

        {/* Mobile Toggle & Language Switcher */}
        <div className="md:hidden flex items-center gap-4">
          <div className="flex items-center gap-2 mr-2">
            <button
              onClick={() => setLanguage('fr')}
              className={`text-[10px] font-bold tracking-widest ${language === 'fr' ? 'text-gold' : 'text-white/50'
                }`}
            >
              FR
            </button>
            <span className="text-white/10 text-[10px]">|</span>
            <button
              onClick={() => setLanguage('en')}
              className={`text-[10px] font-bold tracking-widest ${language === 'en' ? 'text-gold' : 'text-white/50'
                }`}
            >
              EN
            </button>
          </div>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white hover:text-gold transition-colors z-50 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-full h-full bg-black/98 backdrop-blur-2xl z-40 flex flex-col justify-center items-center space-y-10"
          >
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                className="text-4xl font-serif text-white hover:text-gold transition-colors tracking-wide"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              href={`tel:${BRAND_INFO.phone.replace(/\s/g, '')}`}
              className="bg-gold text-black px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-xs"
            >
              {t('nav.orderNow')}
            </motion.a>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex space-x-10 mt-12 bg-white/5 p-6 rounded-full border border-white/10"
            >
              <a href={BRAND_INFO.instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-all hover:scale-110">
                <Instagram size={28} />
              </a>
              <a href={`tel:${BRAND_INFO.phone.replace(/\s/g, '')}`} className="text-white hover:text-gold transition-all hover:scale-110">
                <Phone size={28} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;