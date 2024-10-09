import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cczjxsivuykwpfeqohbq.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjemp4c2l2dXlrd3BmZXFvaGJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcyMzUwNzUsImV4cCI6MjA0MjgxMTA3NX0.nodRUAFedA_a9GcF-suMSGZ4GjqazE1q_3urKkugXVs';
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
