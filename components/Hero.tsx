import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Background with subtle zoom effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-dark-stone"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-gold uppercase text-xs md:text-sm mb-4 font-bold tracking-[0.3em]"
          >
            Premium Japanese Cuisine
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl text-white mb-6 leading-tight"
          >
            The Art of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold-light italic">Sushi</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="font-sans text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed"
          >
            Experience the authentic taste of handmade sushi in the heart of Tunis.
            Fresh ingredients, exquisite flavors, and a touch of luxury.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a
              href="#menu"
              className="group px-10 py-4 bg-gold hover:bg-gold-light text-black font-bold uppercase tracking-widest text-xs transition-all rounded-sm hover:shadow-[0_0_30px_rgba(201,162,74,0.5)] flex items-center gap-2 overflow-hidden relative"
            >
              <span className="relative z-10">View Menu</span>
              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <a
              href="#contact"
              className="px-10 py-4 border border-white/20 hover:border-white text-white hover:bg-white/5 font-bold uppercase tracking-widest text-xs transition-all rounded-sm backdrop-blur-sm"
            >
              Book a Table
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/30 hover:text-gold transition-colors"
      >
        <a href="#menu" aria-label="Scroll down" className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest">Discover</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={28} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;