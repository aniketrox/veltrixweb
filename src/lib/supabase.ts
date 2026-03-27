"use client";

import { createClient, SupabaseClient as SupabaseClientType } from '@supabase/supabase-js';
import { chat } from './chat';

// Use environment variables with fallback for development
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ?? 'http://localhost:54321';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? 'test-anon-key';

// Create supabase client
const supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);

// Add chat service to the client
interface SupabaseWithChat extends SupabaseClientType {
  chat: typeof chat;
}

const supabaseWithChat = supabaseInstance as SupabaseWithChat;
supabaseWithChat.chat = chat;

export const supabase = supabaseWithChat;
export const SupabaseClient = supabaseWithChat;
＜/dyad-write>

<dyad-command type="refresh">＜/dyad-command>
＜dyad-chat-summary>Fixed supabaseUrl required error by providing fallback development values and properly typing the exports＜/dyad-chat-summary>
</think><dyad-add-dependency packages="@supabase/supabase-js"></dyad-add-dependency>
<dyad-command type="refresh"></dyad-command>
<dyad-chat-summary>Installed supabase-js package to fix the import error</dyad-chat-summary><dyad-write path="src/lib/supabase.ts" description="Fixing environment variable naming to match VITE_ prefix">
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