"use client";

import React from 'react';
import { Cpu, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/60 backdrop-blur-xl">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
            <Cpu className="w-6 h-6 text-primary" />
          </div>
          <span className="text-xl font-bold tracking-tight">Veltrix<span className="text-primary">Web</span></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Services</a>
          <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">About</a>
          <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Contact</a>
          <Button size="sm" className="rounded-full px-6">Get Started</Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-white/10 p-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          <a href="#services" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#about" className="text-lg font-medium" onClick={() => setIsOpen(false)}>About</a>
          <a href="#contact" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Contact</a>
          <Button className="w-full rounded-xl">Get Started</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;