"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    name: "Starter",
    price: "₹3,499",
    description: "Perfect for small businesses looking to establish a presence.",
    features: ["Responsive Landing Page", "Basic SEO Optimization", "Free Hosting" ,"upto 5 pages free", "1 Month Technical Support", "Premium Animations", "Social Media Integration", "Whatsapp Automation and Integration","Google Map Integration", "Call Button Integration"],
    highlight: false
  },
  {
    name: "Professional",
    price: "₹6,499",
    description: "Ideal for growing companies needing advanced features.",
    features: ["Responsive Landing Page","Free Hosting", "upto 11 pages free","Premium Animations","Premium Animations", "Social Media Integration", "Whatsapp Automation and Integration","Google Map Integration", "Contact form Integration (upto 2)", "Performance Optimization", "3 Months technical Support", "free domain for 1 year (.net.in, .org.in)","Premium SEO Optimization", "Call Button Integration"],
    highlight: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Full-scale solutions for large organizations.",
    features: ["All professional facilities", "Agentic AI Integration", "Custom Software Dev", "Priority 24/7 Support", "Dedicated Project Manager", "Security Audit"],
    highlight: false
  }
];

const PricingPage = () => {
  const navigate = useNavigate();

  const handlePlanSelect = (plan: any) => {
    if (plan.name === "Enterprise") {
      const message = encodeURIComponent(`Hi VeltrixWeb, I'm interested in the Enterprise plan. Can we discuss this further?`);
      window.open(`https://wa.me/916290800308?text=${message}`, '_blank');
    } else {
      navigate('/payment', { state: { plan } });
    }
  };

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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Simple <span className="text-primary">Pricing</span></h1>
            <p className="text-lg text-muted-foreground">
              Choose the plan that fits your needs. No hidden fees, just 
              transparent value for your digital growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 rounded-3xl border ${plan.highlight ? 'border-primary bg-primary/5 shadow-[0_0_30px_-10px_rgba(var(--primary),0.3)]' : 'border-white/5 bg-card'} relative overflow-hidden flex flex-col`}
              >
                {plan.highlight && (
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Zap className="w-3 h-3" /> POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-4">{plan.price}</div>
                <p className="text-muted-foreground mb-8 text-sm">{plan.description}</p>
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={() => handlePlanSelect(plan)}
                  className={`w-full rounded-xl h-12 ${plan.highlight ? '' : 'variant-outline'}`}
                >
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;