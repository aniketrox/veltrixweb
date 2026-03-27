"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Star, Quote, User, Building, Globe, Brain } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    company: "Silicon Valley",
    content: "VeltrixWeb transformed our digital presence completely. The AI chatbot they built handles 80% of our customer support inquiries, saving us thousands monthly. Their attention to detail and technical expertise is unmatched.",
    rating: 5,
    project: "AI Chatbot Integration",
    icon: Brain,
    delay: 0.1
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    company: "E-Commerce Plus",
    content: "Working with VeltrixWeb was a game-changer. They delivered a high-performance e-commerce platform that increased our conversion rate by 45%. The responsive design works flawlessly across all devices.",
    rating: 5,
    project: "E-commerce Platform",
    icon: Globe,
    delay: 0.2
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Global Solutions Ltd",
    content: "The agentic AI solution they implemented has revolutionized our workflow automation. We've seen a 60% reduction in manual processes and improved data accuracy across the board.",
    rating: 5,
    project: "Agentic AI System",
    icon: Building,
    delay: 0.3
  },
  {
    name: "David Kim",
    role: "CTO",
    company: "InnovateTech",
    content: "VeltrixWeb's team exceeded all expectations. They built a custom SaaS platform that scales with our business growth. The performance optimization work they did reduced our page load times by 70%.",
    rating: 5,
    project: "Custom SaaS Platform",
    icon: Globe,
    delay: 0.4
  }
];

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Client <span className="text-primary">Success Stories</span></h1>
            <p className="text-lg text-muted-foreground">
              Discover how businesses worldwide have transformed their digital presence 
              with our innovative solutions and exceptional service.
            </p>
          </motion.div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-8 mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <p className="text-sm text-muted-foreground">Projects Completed</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">99%</div>
              <p className="text-sm text-muted-foreground">Client Satisfaction</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-sm text-muted-foreground">Support Available</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-sm text-muted-foreground">Countries Served</p>
            </motion.div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: testimonial.delay }}
                className="group p-8 rounded-3xl bg-card border border-white/5 hover:border-primary/30 transition-all duration-500"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <testimonial.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? 'text-primary fill-current'
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>

                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                  <p className="text-muted-foreground leading-relaxed pl-6">
                    {testimonial.content}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-sm font-medium text-primary">
                    {testimonial.project}
                  </span>
                  <User className="w-4 h-4 text-muted-foreground" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join the growing list of satisfied clients who have revolutionized 
              their digital presence with our cutting-edge solutions.
            </p>
            <button className="bg-primary text-white px-8 py-4 rounded-xl font-medium hover:bg-primary/90 transition-colors">
              Start Your Project Today
            </button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;