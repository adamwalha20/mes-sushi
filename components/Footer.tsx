import React from 'react';
import Logo from './Logo';
import { BRAND_INFO } from '../constants';
import { Instagram, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Logo className="mb-8" />
            <p className="text-gray-500 text-lg font-light leading-relaxed max-w-sm">
              Authentic Japanese flavors meets modern Tunis elegance.
              Experience the art of sushi at its finest.
            </p>
            <div className="flex gap-6 mt-10">
              <motion.a whileHover={{ y: -3 }} href={BRAND_INFO.instagram} target="_blank" className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-gold transition-colors border border-white/5">
                <Instagram size={20} />
              </motion.a>
              <motion.a whileHover={{ y: -3 }} href={`tel:${BRAND_INFO.phone}`} className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-gold transition-colors border border-white/5">
                <Phone size={20} />
              </motion.a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif text-xl mb-8">Navigation</h4>
            <ul className="space-y-4 text-gray-500 text-sm uppercase tracking-widest">
              <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-gold transition-colors">Our Menu</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">The Story</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-xl mb-8">Visit Us</h4>
            <div className="space-y-4 text-gray-500 text-sm leading-relaxed">
              <div className="flex gap-3">
                <MapPin size={16} className="text-gold flex-shrink-0" />
                <span>{BRAND_INFO.address}</span>
              </div>
              <p className="pl-7">{BRAND_INFO.hours}</p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[10px] uppercase tracking-[0.2em] font-bold">
            &copy; {new Date().getFullYear()} {BRAND_INFO.name}. Pure Excellence.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-600">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;