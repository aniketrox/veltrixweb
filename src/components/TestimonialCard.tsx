"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  title: string;
  subtitle: string;
  quote: string;
  delay: number;
}

const TestimonialCard = ({ title, subtitle, quote, delay }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative p-8 rounded-[2.5rem] bg-card border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
          <Check className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground mb-8 flex-grow leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
          {quote}
        </p>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span>{subtitle}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;