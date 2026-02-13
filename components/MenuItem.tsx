import React from 'react';
import { MenuItemType } from '../types';
import { Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group flex flex-col sm:flex-row gap-6 p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 border border-white/5 hover:border-gold/30"
    >
      {/* Image Container */}
      <div className="w-full sm:w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden relative">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          src={item.image || 'https://picsum.photos/200'}
          alt={item.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
        {item.isVegetarian && (
          <div className="absolute top-2 left-2 bg-green-600/80 backdrop-blur-sm p-1 rounded-full shadow-md" title="Vegetarian">
            <Leaf size={12} className="text-white" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-grow flex flex-col justify-center">
        <div className="flex justify-between items-baseline mb-2 border-b border-dashed border-white/10 pb-2">
          <h4 className="font-serif text-xl text-white group-hover:text-gold transition-colors duration-300">
            {item.name}
          </h4>
          <span className="font-bold text-gold text-lg whitespace-nowrap ml-4">
            {item.price} <span className="text-xs uppercase ml-0.5">DT</span>
          </span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export default MenuItem;