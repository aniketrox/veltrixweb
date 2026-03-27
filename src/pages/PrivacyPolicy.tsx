"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-12">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground mb-8">
            This Privacy Policy explains how we collect, use, and protect your personal information.
          </p>

          <div className="text-lg leading-relaxed">
            <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>
            <p>We may collect information such as your name, email, and browsing activity.</p>

            <h2 className="text-xl font-semibold mb-4">2. How We Use Your Data</h2>
            <p>We use your data to provide services, improve our site, and communicate with you.</p>

            <h2 className="text-xl font-semibold mb-4">3. Cookies</h2>
            <p>We use cookies to enhance your experience on our website.</p>

            <h2 className="text-xl font-semibold mb-4">4. Data Security</h2>
            <p>We implement security measures to protect your information from unauthorized access.</p>

            <h2 className="text-xl font-semibold mb-4">5. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal information.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;