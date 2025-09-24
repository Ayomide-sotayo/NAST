// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

// For Vite, use import.meta.env instead of process.env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Check if environment variables are loaded
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase environment variables are not set. Check your .env file.');
  console.log('Supabase URL:', supabaseUrl ? 'Loaded' : 'Missing');
  console.log('Supabase Key:', supabaseAnonKey ? 'Loaded' : 'Missing');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)