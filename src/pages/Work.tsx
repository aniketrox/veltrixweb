"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TestimonialCard from '@/components/TestimonialCard';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, Tech Innovations Inc.",
    company: "Tech Innovations Inc.",
    quote: "VeltrixWeb delivered a stunning website that exceeded our expectations. Their attention to detail and technical expertise were exceptional.",
    highlight: false
  },
  {
    name: "Michael Chen",
    role: "CTO, Global Solutions Group",
    company: "Global Solutions Group",
    quote: "The AI integration we received was revolutionary. Our team now works 30% faster thanks to their agentic AI solutions.",
    highlight: true
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Creative Agency",
    quote: "The responsive design and SEO optimization have significantly increased our client acquisition rate. We're thrilled with the results.",
    highlight: false
  }
];

const WorkPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              View <span className="text-primary">Our Work</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              See what we've built for our clients and the innovative solutions we've delivered.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} 
                title={testimonial.name} 
                subtitle={`${testimonial.role} • ${testimonial.company}`} 
                quote={testimonial.quote} 
                delay={index * 0.1} 
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WorkPage;