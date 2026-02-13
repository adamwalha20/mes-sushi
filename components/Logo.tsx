import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white flex items-center justify-center bg-black overflow-hidden group">
         {/* Simple SVG representation of sushi since we don't have the real asset */}
         <svg viewBox="0 0 100 100" className="w-full h-full p-1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="2" />
            <path d="M20 50 C20 30 80 30 80 50 C80 70 20 70 20 50 Z" fill="#F8F8F8" />
            <path d="M30 45 C30 35 70 35 70 45 L70 55 C70 65 30 65 30 55 Z" fill="#D32F2F" />
            <path d="M25 40 L75 20" stroke="#C9A24A" strokeWidth="3" />
            <path d="M25 45 L75 25" stroke="#C9A24A" strokeWidth="3" />
         </svg>
      </div>
      <div className="flex flex-col">
        <span className="font-serif text-xl md:text-2xl font-bold tracking-wide text-white leading-none">
          mes sushis
        </span>
        <span className="font-sans text-[0.6rem] md:text-xs tracking-[0.2em] text-gold uppercase">
          by imen
        </span>
      </div>
    </div>
  );
};

export default Logo;