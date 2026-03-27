"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, Heart, Zap, Globe, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';

const jobs = [
  {
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "Remote / Silicon Valley",
    type: "Full-time",
    description: "Lead the development of our next-generation agentic AI systems and LLM integrations."
  },
  {
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build beautiful, high-performance web applications using React, TypeScript, and Node.js."
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Create intuitive and stunning digital experiences for our web and AI platforms."
  },
  {
    title: "AI Solutions Consultant",
    department: "Sales",
    location: "Silicon Valley",
    type: "Full-time",
    description: "Help clients understand and implement cutting-edge AI solutions for their business."
  }
];

const benefits = [
  { icon: Globe, title: "Remote First", description: "Work from anywhere in the world with a flexible schedule." },
  { icon: Zap, title: "Latest Tech", description: "Get access to the newest AI models and hardware." },
  { icon: Heart, title: "Health & Wellness", description: "Comprehensive health insurance and wellness stipends." },
  { icon: Coffee, title: "Learning Budget", description: "Annual budget for courses, books, and conferences." }
];

const CareersPage = () => {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Join the <span className="text-primary">Revolution</span></h1>
            <p className="text-lg text-muted-foreground">
              Help us build the future of digital intelligence. We're looking for 
              passionate individuals to join our global, remote-first team.
            </p>
          </motion.div>

          {/* Culture Section */}
          <div className="grid md:grid-cols-4 gap-8 mb-24">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-white/5 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Job Listings */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
              <Briefcase className="text-primary" />
              Open Positions
            </h2>
            <div className="space-y-6">
              {jobs.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-8 rounded-3xl bg-card border border-white/5 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-bold">{job.title}</h3>
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                          {job.department}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm max-w-xl">
                        {job.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {job.type}
                        </div>
                      </div>
                    </div>
                    <Button className="rounded-xl group-hover:bg-primary transition-colors">
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CareersPage;