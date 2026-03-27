"use client";

import React from 'react';
import { motion } from 'framer-motion';

const LoadingAnimation = () => {
  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="relative">
        {/* Main rotating hexagon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 relative"
        >
          {/* Hexagon outline */}
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              points="50,5 90,25 90,75 50,95 10,75 10,25"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              className="opacity-30"
            />
            <polygon
              points="50,15 80,30 80,70 50,85 20,70 20,30"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              className="opacity-50"
            />
            <polygon
              points="50,25 70,35 70,65 50,75 30,65 30,35"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              className="opacity-70"
            />
          </svg>
          
          {/* Center dot */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full"
          />
        </motion.div>

        {/* Orbiting particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 60, 0, -60, 0],
              y: [0, 0, 60, 0, -60, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="w-2 h-2 bg-primary rounded-full opacity-60" />
          </motion.div>
        ))}

        {/* Glowing effect */}
        <motion.div
          animate={{
            boxShadow: [
              "0 0 20px rgba(99, 102, 241, 0.3)",
              "0 0 40px rgba(99, 102, 241, 0.5)",
              "0 0 20px rgba(99, 102, 241, 0.3)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 rounded-full"
        />
      </div>

      {/* Loading text */}
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute -bottom-16 text-primary font-mono text-sm uppercase tracking-wider"
      >
        Initializing...
      </motion.div>
    </div>
  );
};

export default LoadingAnimation;