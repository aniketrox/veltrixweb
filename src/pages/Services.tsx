"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { Globe, MessageSquare, BrainCircuit, Zap, Shield, BarChart3, Code, Cpu, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const allServices = [
  {
    title: "Responsive Web Design",
    description: "Modern, high-performance websites that look stunning on every device. We focus on speed, SEO, and user experience.",
    icon: Globe,
    delay: 0.1
  },
  {
    title: "Intelligent Chatbots",
    description: "Custom AI-powered conversational interfaces that handle customer support, lead generation, and sales 24/7.",
    icon: MessageSquare,
    delay: 0.2
  },
  {
    title: "Agentic AI Solutions",
    description: "Autonomous AI agents that can perform complex tasks, integrate with your tools, and optimize your workflows.",
    icon: BrainCircuit,
    delay: 0.3
  },
  {
    title: "Custom Software",
    description: "Tailor-made software solutions designed to solve your specific business challenges and scale with your growth.",
    icon: Code,
    delay: 0.4
  },
  {
    title: "AI Integration",
    description: "Seamlessly integrate LLMs and AI capabilities into your existing infrastructure to boost productivity.",
    icon: Cpu,
    delay: 0.5
  },
  {
    title: "Digital Strategy",
    description: "Expert consulting to help you navigate the digital landscape and choose the right tech for your goals.",
    icon: Rocket,
    delay: 0.6
  }
];

const ServicesPage = () => {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our <span className="text-primary">Solutions</span></h1>
            <p className="text-lg text-muted-foreground">
              We provide a comprehensive suite of digital services designed to propel 
              your business into the future of technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;