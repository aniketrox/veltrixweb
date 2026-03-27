"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Close } from 'lucide-react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I help you today?" },
  ]);
  const [userInput, setUserInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSend = () => {
    if (userInput.trim()) {
      setMessages([...messages, { id: Date.now(), text: userInput }]);
      setUserInput('');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 right-8 z-[9999] bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-white/10 flex flex-col"
    >
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <div className="w-4 h-4 bg-primary rounded-full animate-pulse" />
          </div>
          <div className="text-sm font-medium">VeltrixBot</div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-full hover:bg-primary/10 transition-colors"
        >
          <Close className="w-4 h-4" />
        </motion.button>
      </div>

      <div className="p-4 flex-grow overflow-y-auto">
        {messages.map((msg) => (
          <div key={msg.id} className="mb-4">
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <div className="w-4 h-4 bg-primary rounded-full animate-pulse" />
              </div>
              <div className="bg-white/90 rounded-lg px-3 py-2 text-sm max-w-xs">
                {msg.text}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 flex items-center gap-2">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow border border-white/10 rounded-xl px-3 py-1.5 outline-none"
        />
        <Button size="sm" className="rounded-full h-10" onClick={handleSend}>
          Send
        </Button>
      </div>
    </motion.div>
  );
};

export default Chatbot;