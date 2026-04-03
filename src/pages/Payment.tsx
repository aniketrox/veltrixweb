"use client";

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Clock, ShieldCheck, AlertCircle } from 'lucide-react';
import { showError } from '@/utils/toast';

// ✅ IMPORT QR IMAGES (IMPORTANT FIX)
import qr3999 from "@/assets/qr_3999.png";
import qr6999 from "@/assets/qr_6999.png";

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { plan } = location.state || {};

  const [timeLeft, setTimeLeft] = useState(300);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    transactionId: '',
    consent: false
  });

  useEffect(() => {
    if (!plan || plan.name === "Enterprise") {
      navigate('/pricing');
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/pricing');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [plan, navigate]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.consent) {
      showError("Please confirm the consent checkbox.");
      return;
    }

    try {
      const SCRIPT_URL =
        'https://script.google.com/macros/s/AKfycbzxy09AoPasx-_mrLm6wM5fPkd6NHYVHMl_wrqobBLpiCvorVqI5AjBnc1GvR1n26OtlQ/exec';

      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // IMPORTANT for Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          address: formData.address,
          transactionId: formData.transactionId,
          plan: plan.name
        }),
      });

      // Direct success (no-cors won't return response)
      navigate('/confirmation');

    } catch (error) {
      console.error(error);
      showError("Something went wrong. Please try again.");
    }
  };

  // ✅ QR IMAGE (FIXED)
  const qrImage = plan?.name === "Starter" ? qr3999 : qr6999;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">

            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="p-6 rounded-3xl bg-primary/5 border border-primary/20">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Complete Payment</h2>

                  <div className="flex items-center gap-2 text-primary font-mono bg-primary/10 px-4 py-2 rounded-full">
                    <Clock className="w-4 h-4" />
                    {formatTime(timeLeft)}
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <p className="text-muted-foreground">
                    Scan the QR code to pay <span className="font-bold">{plan?.price}</span>
                  </p>

                  <div className="bg-white p-4 rounded-2xl inline-block">
                    <img src={qrImage} alt="QR Code" className="w-64 h-64 object-contain" />
                  </div>

                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <ShieldCheck className="w-4 h-4 text-green-500" />
                    Secure UPI Payment
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-card border border-white/5">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-primary" />
                  Instructions
                </h3>

                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>1. Open any UPI app (GPay, PhonePe, Paytm)</li>
                  <li>2. Scan QR & pay exact amount</li>
                  <li>3. Copy Transaction ID / UTR</li>
                  <li>4. Fill form before timer ends</li>
                </ul>
              </div>
            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-8 rounded-3xl bg-card border border-white/5 shadow-xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">

                <Input
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />

                <Input
                  type="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />

                <Textarea
                  placeholder="Full Address"
                  required
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                />

                <Input
                  placeholder="Transaction ID / UTR"
                  required
                  value={formData.transactionId}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      transactionId: e.target.value,
                    })
                  }
                />

                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={formData.consent}
                    onCheckedChange={(checked) =>
                      setFormData({
                        ...formData,
                        consent: checked as boolean,
                      })
                    }
                  />
                  <span className="text-xs">
                    I confirm that I have made the payment
                  </span>
                </div>

                <Button type="submit" className="w-full h-12">
                  Submit Payment Details
                </Button>

              </form>
            </motion.div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PaymentPage;