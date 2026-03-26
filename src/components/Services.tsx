"use client";

import React from 'react';
import { Globe, MessageSquare, BrainCircuit, Zap, Shield, BarChart3 } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
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
    title: "Performance Optimization",
    description: "We ensure your digital assets are lightning fast, providing the best possible experience for your users.",
    icon: Zap,
    delay: 0.4
  },
  {
    title: "Secure Infrastructure",
    description: "Enterprise-grade security for all your web applications and AI integrations, keeping your data safe.",
    icon: Shield,
    delay: 0.5
  },
  {
    title: "Data Analytics",
    description: "Deep insights into user behavior and AI performance to help you make data-driven business decisions.",
    icon: BarChart3,
    delay: 0.6
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-black/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Expertise</h2>
          <p className="text-lg text-muted-foreground">
            We combine creative design with advanced engineering to deliver 
            solutions that drive real business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;