"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ConfirmationPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-20 flex items-center justify-center min-h-[80vh]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto p-12 rounded-[3rem] bg-card border border-white/5 shadow-2xl"
          >
            <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-12 h-12 text-green-500" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Payment Details Received!</h1>
            
            <div className="space-y-4 mb-10">
              <p className="text-xl text-muted-foreground">
                Please wait for the admin confirmation. Have patience. We will be there soon.
              </p>
              <div className="flex items-center justify-center gap-2 text-primary font-medium">
                <Clock className="w-5 h-5" />
                Verification usually takes 2-4 hours
              </div>
            </div>

            <Link to="/">
              <Button variant="outline" className="rounded-xl px-8 h-12">
                Return to Home
              </Button>
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ConfirmationPage;