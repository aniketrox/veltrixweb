"use client";

import React from 'react';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="py-16 border-t border-white/10 bg-black/40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Logo className="mb-8" />
            <p className="text-muted-foreground max-w-sm mb-8 leading-relaxed">
              Pioneering the next generation of digital experiences through 
              innovative web design and advanced AI solutions.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-lg">Solutions</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link to="/solutions" className="hover:text-primary transition-colors">E-commerce</Link></li>
              <li><Link to="/solutions" className="hover:text-primary transition-colors">SaaS Platforms</Link></li>
              <li><Link to="/solutions" className="hover:text-primary transition-colors">Enterprise Apps</Link></li>
              <li><Link to="/solutions" className="hover:text-primary transition-colors">Custom CMS</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-lg">Company</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} VeltrixWeb. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;