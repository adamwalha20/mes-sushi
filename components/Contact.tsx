import React from 'react';
import { Phone, Instagram, MapPin, Clock } from 'lucide-react';
import { BRAND_INFO } from '../constants';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section className="py-24 bg-black text-white relative" id="contact">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto bg-dark-stone p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-800"
                >
                    <div className="text-center mb-10">
                        <h2 className="font-serif text-4xl mb-4 leading-tight">{t('contact.title')} <span className="text-gold italic">{t('contact.titleAccent')}</span></h2>
                        <p className="text-gray-400 max-w-xl mx-auto">
                            {t('contact.description')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.a
                            whileHover={{ y: -5 }}
                            href={`tel:${BRAND_INFO.phone.replace(/\s/g, '')}`}
                            className="flex flex-col items-center text-center p-10 bg-white/5 rounded-2xl border border-white/10 hover:border-gold/50 transition-all group"
                        >
                            <div className="bg-gold/10 p-5 rounded-full text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300 mb-6">
                                <Phone size={32} />
                            </div>
                            <h3 className="font-bold text-xs uppercase tracking-widest text-gray-500 mb-2">{t('contact.orderPhone')}</h3>
                            <span className="text-3xl text-white font-serif group-hover:text-gold transition-colors">
                                {BRAND_INFO.phone}
                            </span>
                        </motion.a>

                        <motion.a
                            whileHover={{ y: -5 }}
                            href={BRAND_INFO.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center text-center p-10 bg-white/5 rounded-2xl border border-white/10 hover:border-gold/50 transition-all group"
                        >
                            <div className="bg-gold/10 p-5 rounded-full text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300 mb-6">
                                <Instagram size={32} />
                            </div>
                            <h3 className="font-bold text-xs uppercase tracking-widest text-gray-500 mb-2">{t('contact.orderInsta')}</h3>
                            <span className="text-3xl text-white font-serif group-hover:text-gold transition-colors">
                                {t('contact.viewProfile')}
                            </span>
                        </motion.a>
                    </div>

                    <div className="mt-12 pt-12 border-t border-white/5 flex flex-col items-center">
                        <div className="flex items-center gap-3 text-gold mb-4">
                            <Clock size={20} />
                            <h3 className="font-bold text-xs uppercase tracking-widest">{t('contact.deliveryHours')}</h3>
                        </div>
                        <p className="text-xl text-gray-300 font-serif text-center">
                            {BRAND_INFO.hours}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;