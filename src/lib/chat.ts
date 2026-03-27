import { supabase } from './supabase';

export const chat = {
  async sendMessage({ message, user }: { message: string; user: string }): Promise<{ message: string }> {
    const apiKey = import.meta.env.VITE_HUGGINGFACE_API_KEY;
    
    if (apiKey) {
      try {
        const response = await fetch(
          'https://api-inference.huggingface.co/models/microsoft/DialoGPT-small',
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
              'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
              inputs: message,
              parameters: {
                max_length: 200,
                temperature: 0.9,
              },
            }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          const generatedText = data[0]?.generated_text || '';
          const aiResponse = generatedText.replace(message, '').trim();
          if (aiResponse) {
            return { message: aiResponse };
          }
        }
      } catch (error) {
        console.error('Hugging Face API error:', error);
      }
    }

    // Fallback to simple responses
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return { message: 'Hello! How can I help you today?' };
    }
    if (lowerMessage.includes('service') || lowerMessage.includes('offer')) {
      return { message: 'We offer web development, AI solutions, and digital strategy services. Which one are you interested in?' };
    }
    if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
      return { message: 'Our pricing depends on the project. Please check our pricing page or contact us for a quote.' };
    }
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone')) {
      return { message: 'You can reach us at hello@veltrixweb.com or call us at +1 (555) 000-0000.' };
    }
    if (lowerMessage.includes('about') || lowerMessage.includes('company')) {
      return { message: 'VeltrixWeb is a cutting-edge web development and AI solutions company based in Silicon Valley.' };
    }
    
    return { message: "I'm sorry, I didn't quite understand that. Could you please rephrase? Or contact us directly for assistance." };
  }
};