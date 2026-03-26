"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SolutionCard from '@/components/SolutionCard';
import { 
  ShoppingBag, 
  Layout, 
  Layers, 
  Smartphone, 
  Database, 
  Settings,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';

const solutions = [
  {
    title: "E-commerce Platforms",
    description: "High-converting online stores built for scale. We integrate secure payments, inventory management, and seamless checkout experiences.",
    icon: ShoppingBag,
    features: ["Custom Checkout", "Inventory Sync", "Multi-currency Support"],
    delay: 0.1
  },
  {
    title: "Enterprise Web Apps",
    description: "Complex internal tools and dashboards designed to streamline business operations and improve team productivity.",
    icon: Layout,
    features: ["Role-based Access", "Data Visualization", "Legacy Integration"],
    delay: 0.2
  },
  {
    title: "SaaS Development",
    description: "End-to-end development of software-as-a-service platforms with subscription management and multi-tenant architecture.",
    icon: Layers,
    features: ["Stripe Integration", "User Analytics", "Scalable Infrastructure"],
    delay: 0.3
  },
  {
    title: "Progressive Web Apps",
    description: "Websites that feel like native apps. Fast, reliable, and installable on any device with offline capabilities.",
    icon: Smartphone,
    features: ["Offline Access", "Push Notifications", "App-like Feel"],
    delay: 0.4
  },
  {
    title: "Custom CMS Solutions",
    description: "Tailored content management systems that give you full control over your digital content without technical hurdles.",
    icon: Database,
    features: ["Headless CMS", "SEO Optimized", "Easy Editing"],
    delay: 0.5
  },
  {
    title: "API & Integrations",
    description: "Connecting your web ecosystem. We build robust APIs and integrate third-party services to automate your workflow.",
    icon: Settings,
    features: ["REST & GraphQL", "Webhook Support", "Secure Auth"],
    delay: 0.6
  }
];

const WebSolutions = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span>Tailored Digital Experiences</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-8 tracking-tight"
            >
              Web <span className="text-primary">Solutions</span> for the Modern Era
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              From high-growth startups to established enterprises, we build 
              web applications that are fast, secure, and designed to convert.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <SolutionCard key={index} {...solution} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WebSolutions;