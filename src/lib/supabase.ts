"use client";

import { createClient, SupabaseClient as SupabaseClientType } from '@supabase/supabase-js';
import { chat } from './chat';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file.');
}

const supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);

interface SupabaseWithChat extends SupabaseClientType {
  chat: typeof chat;
}

const supabaseWithChat = supabaseInstance as SupabaseWithChat;
supabaseWithChat.chat = chat;

export const supabase = supabaseWithChat;
export const SupabaseClient = supabaseWithChat;