"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-12">Terms of Service</h1>
          <p className="text-lg text-muted-foreground mb-8">
            By using our website, you agree to comply with and be bound by these Terms of Service.
          </p>

          <div className="text-lg leading-relaxed">
            <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p>By accessing or using this website, you agree to be bound by these terms.</p>

            <h2 className="text-xl font-semibold mb-4">2. User Conduct</h2>
            <p>You agree not to use the website for any illegal or unauthorized purposes.</p>

            <h2 className="text-xl font-semibold mb-4">3. Intellectual Property</h2>
            <p>All content on this site is owned by VeltrixWeb and is protected by copyright laws.</p>

            <h2 className="text-xl font-semibold mb-4">4. Disclaimer</h2>
            <p>This website is provided "as is" without any warranties of any kind.</p>

            <h2 className="text-xl font-semibold mb-4">5. Changes to Terms</h2>
            <p>We reserve the right to update these terms at any time.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;