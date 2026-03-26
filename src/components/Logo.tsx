"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

const Logo = ({ className = "", iconOnly = false }: LogoProps) => {
  return (
    <div className={`flex items-center gap-3 group ${className}`}>
      <div className="relative w-10 h-10 flex items-center justify-center">
        {/* Animated Background Hexagon */}
        <motion.div
          animate={{ 
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute inset-0 bg-primary/20 rounded-xl blur-sm group-hover:bg-primary/30 transition-colors"
        />
        
        {/* Main Logo SVG */}
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          className="w-8 h-8 relative z-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M12 2L3 7V17L12 22L21 17V7L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary"
          />
          <motion.path
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            d="M12 6V18M12 6L8 10M12 6L16 10M12 18L8 14M12 18L16 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-primary"
          />
          <circle cx="12" cy="12" r="2" fill="currentColor" className="text-primary" />
        </svg>
      </div>

      {!iconOnly && (
        <span className="text-xl font-bold tracking-tighter flex items-center">
          VELTRIX
          <span className="text-primary ml-0.5">WEB</span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-5 bg-primary ml-1 rounded-full"
          />
        </span>
      )}
    </div>
  );
};

export default Logo;