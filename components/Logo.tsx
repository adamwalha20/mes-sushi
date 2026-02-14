import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg
        width="160"
        height="160"
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 md:h-14 w-auto"
      >
        {/* Outer circle border */}
        <circle cx="80" cy="80" r="78" stroke="white" strokeWidth="2" />
        <circle cx="80" cy="80" r="72" stroke="white" strokeWidth="1.5" />

        {/* Sushi illustration */}
        {/* Rice base */}
        <ellipse cx="80" cy="55" rx="18" ry="10" fill="#F5F5F5" />

        {/* Salmon topping */}
        <path
          d="M 62 52 Q 62 45 80 45 Q 98 45 98 52 L 98 58 Q 98 62 80 62 Q 62 62 62 58 Z"
          fill="#E85D4A"
        />

        {/* Salmon texture lines */}
        <path d="M 68 50 Q 80 48 92 50" stroke="#D94A3A" strokeWidth="0.5" opacity="0.6" />
        <path d="M 68 54 Q 80 52 92 54" stroke="#D94A3A" strokeWidth="0.5" opacity="0.6" />

        {/* Chopsticks */}
        <line x1="58" y1="48" x2="102" y2="38" stroke="#C9A24A" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="58" y1="52" x2="102" y2="42" stroke="#C9A24A" strokeWidth="2.5" strokeLinecap="round" />

        {/* Text: "mes sushis" */}
        <text
          x="80"
          y="90"
          fontFamily="'Brush Script MT', cursive, serif"
          fontSize="20"
          fill="white"
          textAnchor="middle"
          style={{ fontStyle: 'italic' }}
        >
          mes sushis
        </text>

        {/* Decorative line */}
        <line x1="50" y1="98" x2="110" y2="98" stroke="white" strokeWidth="0.5" opacity="0.5" />

        {/* Text: "by imen" */}
        <text
          x="80"
          y="110"
          fontFamily="Arial, sans-serif"
          fontSize="10"
          fill="white"
          textAnchor="middle"
          letterSpacing="2"
        >
          by imen
        </text>
      </svg>
    </div>
  );
};

export default Logo;