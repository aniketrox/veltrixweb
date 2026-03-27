"use client";

import React from 'react';
import { motion } from 'framer-motion';

const BackgroundGrid = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* The Grid */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" 
      />
      
      {/* Moving Light Beam */}
      <motion.div
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      {/* Floating Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: Math.random() * 0.5, 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%" 
          }}
          animate={{
            y: [null, Math.random() * -100 - 50],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-1 h-1 bg-primary rounded-full blur-[1px]"
        />
      ))}
    </div>
  );
};

export default BackgroundGrid;