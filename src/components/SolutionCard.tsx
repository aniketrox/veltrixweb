"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SolutionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  delay: number;
}

const SolutionCard = ({ title, description, icon: Icon, features, delay }: SolutionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group p-8 rounded-[2rem] bg-card border border-white/5 hover:border-primary/40 transition-all duration-500 flex flex-col h-full"
    >
      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      
      <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">
        {description}
      </p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3 text-sm text-foreground/80">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            {feature}
          </li>
        ))}
      </ul>
      
      <Button variant="ghost" className="w-full justify-between group/btn hover:bg-primary/10 rounded-xl">
        Learn More
        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </Button>
    </motion.div>
  );
};

export default SolutionCard;