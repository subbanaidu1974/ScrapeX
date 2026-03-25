import React, { useState } from 'react';

interface TooltipProps {
  children: React.ReactNode;
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
  key?: React.Key | null;
}

export default function Tooltip({ children, content, position = 'top', className = 'relative inline-flex' }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  return (
    <div 
      className={className}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div 
          className={`absolute z-50 px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap border shadow-2xl glass-panel bg-black/80 backdrop-blur-xl text-white border-white/10 ${positionClasses[position]} animate-in fade-in zoom-in-95 duration-200`}
          role="tooltip"
        >
          {content}
        </div>
      )}
    </div>
  );
}
