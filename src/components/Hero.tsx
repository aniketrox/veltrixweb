"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Bot, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
        >
          <Sparkles className="w-4 h-4" />
          <span>Next-Gen Tech Solutions</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70"
        >
          Building the Future of <br />
          <span className="text-primary">Digital Intelligence</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          VeltrixWeb empowers businesses with cutting-edge responsive websites, 
          intelligent chatbots, and autonomous AI agents.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="rounded-full px-8 h-14 text-lg group">
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg border-white/10 hover:bg-white/5">
            View Our Work
          </Button>
        </motion.div>

        {/* Floating Icons Decoration */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto opacity-50">
          <div className="flex flex-col items-center gap-2">
            <Globe className="w-8 h-8 text-primary" />
            <span className="text-xs font-mono uppercase tracking-widest">Web Dev</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Bot className="w-8 h-8 text-primary" />
            <span className="text-xs font-mono uppercase tracking-widest">Chatbots</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Cpu className="w-8 h-8 text-primary" />
            <span className="text-xs font-mono uppercase tracking-widest">Agentic AI</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;