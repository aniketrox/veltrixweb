"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Target, Eye, Users, Award } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About <span className="text-primary">VeltrixWeb</span></h1>
            <p className="text-lg text-muted-foreground">
              We are a team of visionary developers and AI specialists dedicated to 
              redefining the digital landscape through innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-card border border-white/5"
            >
              <Target className="w-12 h-12 text-primary mb-6" />
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses by providing accessible, high-performance tech 
                solutions that bridge the gap between human creativity and artificial intelligence.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-card border border-white/5"
            >
              <Eye className="w-12 h-12 text-primary mb-6" />
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To become the global leader in agentic AI and responsive web design, 
                setting the standard for the next generation of digital interaction.
              </p>
            </motion.div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-12">Why Choose Us?</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="text-4xl font-bold text-primary">99%</div>
                <p className="text-sm text-muted-foreground uppercase tracking-widest">Client Satisfaction</p>
              </div>
              <div className="space-y-4">
                <div className="text-4xl font-bold text-primary">150+</div>
                <p className="text-sm text-muted-foreground uppercase tracking-widest">Projects Delivered</p>
              </div>
              <div className="space-y-4">
                <div className="text-4xl font-bold text-primary">24/7</div>
                <p className="text-sm text-muted-foreground uppercase tracking-widest">AI Support</p>
              </div>
              <div className="space-y-4">
                <div className="text-4xl font-bold text-primary">10+</div>
                <p className="text-sm text-muted-foreground uppercase tracking-widest">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;