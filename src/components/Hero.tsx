"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Bot, Globe, Cpu } from 'lucide-react';
import BackgroundGrid from './BackgroundGrid';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center">
      <BackgroundGrid />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span>Next-Gen Tech Solutions</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-8xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50 leading-[1.1]"
          >
            Building the Future of <br />
            <span className="text-primary relative">
              Digital Intelligence
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute -bottom-2 left-0 h-1 bg-primary/30 rounded-full"
              />
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            VeltrixWeb empowers businesses with cutting-edge responsive websites, 
            intelligent chatbots, and autonomous AI agents.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="rounded-full px-8 h-14 text-lg group relative overflow-hidden">
              <span className="relative z-10 flex items-center">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div 
                className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"
              />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg border-white/10 hover:bg-white/5 backdrop-blur-sm">
              View Our Work
            </Button>
          </motion.div>

          {/* Floating Icons Decoration */}
          <motion.div 
            variants={itemVariants}
            className="mt-24 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {[
              { icon: Globe, label: "Web Dev" },
              { icon: Bot, label: "Chatbots" },
              { icon: Cpu, label: "Agentic AI" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
                className="flex flex-col items-center gap-3 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-500">
                  <item.icon className="w-8 h-8 text-primary/60 group-hover:text-primary transition-colors" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground group-hover:text-foreground transition-colors">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;