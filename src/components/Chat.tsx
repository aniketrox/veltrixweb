"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toast';
import { SupabaseClient } from '@/lib/supabase';
import { ChatMessage } from '@/types';

const Chat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulate initial loading
    setTimeout(() => {
      addMessage({ text: 'Hello! How can I help you today?', isUser: false });
    }, 1000);
  }, []);

  const addMessage = (message: ChatMessage) => {
    setMessages(prev => [...prev, message]);
    scrollToBottom();
  };

  const scrollToBottom = () => {
    const chat = document.getElementById('chat-container');
    if (chat) chat.scrollTop = chat.scrollHeight;
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    setLoading(true);
    addMessage({ text: input, isUser: true });

    try {
      const response = await SupabaseClient.chat.sendMessage({
        message: input,
        user: 'user123',
      });

      if (response.data) {
        addMessage({
          text: response.data.message,
          isUser: false,
          timestamp: new Date().toISOString(),
        });
      } else {
        Toaster.error('Failed to send message');
      }
    } catch (error) {
      Toaster.error('Error sending message');
    } finally {
      setLoading(false);
      setInput('');
    }
  };

  return (
    <div className="relative">
      <div 
        id="chat-container"
        className="absolute inset-0 bg-white/10 rounded-xl shadow-xl overflow-hidden"
      >
        <div className="relative z-10">
          <div className="p-6">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <div className="w-6 h-6 bg-primary rounded-full animate-bounce" />
              </div>
              <div>
                <h3 className="font-bold text-lg">VeltrixBot</h3>
                <p className="text-sm text-muted-foreground">AI Assistant</p>
              </div>
            </div>
          </div>

          <div className="max-h-[70vh] overflow-y-auto p-6">
            {messages.map((message, index) => (
              <div key={index} className="mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <div className="w-6 h-6 bg-primary rounded-full animate-bounce" />
                  </div>
                  <div className="max-w-[80%]">
                    <div className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 flex items-start gap-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <div className="text-sm text-muted-foreground">{message.text}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <div className="w-6 h-6 bg-primary rounded-full animate-bounce" />
            </div>
            <div className="flex-1">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="w-full p-3 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <Button 
              variant="ghost" 
              className="w-10 h-10 rounded-full flex items-center justify-center"
              onClick={handleSend}
              disabled={loading}
            >
              <motion.div
                animate={{ scale: loading ? 1.2 : 1 }}
                transition={{ duration: 0.2 }}
                className="w-4 h-4"
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;