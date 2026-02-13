import React from 'react';
import { Phone, Instagram, MapPin, Clock } from 'lucide-react';
import { BRAND_INFO } from '../constants';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
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
                        <h2 className="font-serif text-4xl mb-4 leading-tight">Ready to Experience <span className="text-gold italic">Pure Excellence?</span></h2>
                        <p className="text-gray-400 max-w-xl mx-auto">
                            We deliver the finest sushi experience directly door to door.
                            Contact us via phone or WhatsApp to place your order.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <motion.div whileHover={{ x: 5 }} className="flex items-start gap-5 group">
                                <div className="bg-gold/10 p-4 rounded-full text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xs uppercase tracking-widest text-gray-500 mb-2">Order Now</h3>
                                    <a href={`tel:${BRAND_INFO.phone.replace(/\s/g, '')}`} className="text-2xl text-white hover:text-gold transition-colors font-serif">
                                        {BRAND_INFO.phone}
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div whileHover={{ x: 5 }} className="flex items-start gap-5 group">
                                <div className="bg-gold/10 p-4 rounded-full text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xs uppercase tracking-widest text-gray-500 mb-2">Hours</h3>
                                    <p className="text-lg text-white font-serif">{BRAND_INFO.hours}</p>
                                </div>
                            </motion.div>
                        </div>

                        <div className="space-y-8">
                            <motion.div whileHover={{ x: 5 }} className="flex items-start gap-5 group">
                                <div className="bg-gold/10 p-4 rounded-full text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xs uppercase tracking-widest text-gray-500 mb-2">Visit Us</h3>
                                    <p className="text-lg text-white font-serif">{BRAND_INFO.address}</p>
                                </div>
                            </motion.div>

                            <motion.div whileHover={{ x: 5 }} className="flex items-start gap-5 group">
                                <div className="bg-gold/10 p-4 rounded-full text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300">
                                    <Instagram size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xs uppercase tracking-widest text-gray-500 mb-2">Follow</h3>
                                    <a href={BRAND_INFO.instagram} target="_blank" rel="noopener noreferrer" className="text-lg text-white hover:text-gold transition-colors font-serif">
                                        @messushi_tunis
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={`https://wa.me/${BRAND_INFO.phone.replace(/[^0-9]/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold py-5 px-12 rounded-full transition-all shadow-xl shadow-green-900/20 uppercase text-xs tracking-[0.2em]"
                        >
                            Order via WhatsApp
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;