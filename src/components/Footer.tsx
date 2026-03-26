"use client";

import React from 'react';
import { Cpu, Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-black/40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Cpu className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold tracking-tight">Veltrix<span className="text-primary">Web</span></span>
            </div>
            <p className="text-muted-foreground max-w-sm mb-6">
              Pioneering the next generation of digital experiences through 
              innovative web design and advanced AI solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-primary/20 hover:text-primary transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-primary/20 hover:text-primary transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-primary/20 hover:text-primary transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-primary/20 hover:text-primary transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Solutions</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link to="/solutions" className="hover:text-primary transition-colors">E-commerce</Link></li>
              <li><Link to="/solutions" className="hover:text-primary transition-colors">SaaS Platforms</Link></li>
              <li><Link to="/solutions" className="hover:text-primary transition-colors">Enterprise Apps</Link></li>
              <li><Link to="/solutions" className="hover:text-primary transition-colors">Custom CMS</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} VeltrixWeb. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;