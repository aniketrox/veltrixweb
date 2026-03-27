"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chat from '@/components/Chat';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-16">
        <ContactForm />
        <Chat />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;