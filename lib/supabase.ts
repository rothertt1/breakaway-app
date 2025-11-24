import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Create a singleton instance
let supabaseInstance: SupabaseClient | null = null;

function getSupabaseClient(): SupabaseClient {
  if (supabaseInstance) {
    return supabaseInstance;
  }

  if (!supabaseUrl || !supabaseAnonKey || supabaseUrl === 'your_project_url_here') {
    // Return a mock client during build time or when credentials aren't set
    // This prevents build errors when env vars aren't configured yet
    throw new Error(
      'Supabase credentials not configured. Please update .env.local with your Supabase URL and anon key.'
    );
  }

  supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
  return supabaseInstance;
}

// Export a getter function instead of the instance directly
// This allows for lazy initialization and better error handling
export const getSupabase = getSupabaseClient;

// For backwards compatibility, export supabase that throws if not configured
export const supabase = {
  get auth() {
    return getSupabaseClient().auth;
  },
  get from() {
    return getSupabaseClient().from.bind(getSupabaseClient());
  },
};

// Database types for TypeScript
export type Profile = {
  id: string;
  username: string | null;
  created_at: string;
  updated_at: string;
  gambling_type: string | null;
  gambling_frequency: string | null;
  primary_trigger: string | null;
  monthly_loss_estimate: number | null;
  goal: string | null;
  why_quitting: string | null;
  subscription_tier: 'free' | 'premium';
  subscription_status: string;
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
};

export type Urge = {
  id: string;
  user_id: string;
  created_at: string;
  amount_almost_bet: number | null;
  amount_actually_bet: number | null;
  did_resist: boolean;
  trigger: string | null;
  urge_strength: number | null;
  gambling_type: string | null;
  bet_outcome: 'won' | 'lost' | 'pending' | null;
  notes: string | null;
};

export type CheckIn = {
  id: string;
  user_id: string;
  created_at: string;
  check_in_date: string;
  mood: number | null;
  had_urges: boolean | null;
  urge_count: number;
  notes: string | null;
};

export type Lesson = {
  id: string;
  lesson_number: number;
  title: string;
  category: string | null;
  content: string;
  estimated_read_time: number;
  is_premium: boolean;
  created_at: string;
};

export type LessonProgress = {
  id: string;
  user_id: string;
  lesson_id: string;
  completed_at: string;
};

export type Streak = {
  id: string;
  user_id: string;
  current_streak: number;
  longest_streak: number;
  last_clean_day: string | null;
  total_clean_days: number;
  total_urges_resisted: number;
  total_money_not_lost: number;
  last_updated: string;
};

export type SOSBuddy = {
  id: string;
  user_id: string;
  buddy_name: string;
  buddy_email: string | null;
  buddy_phone: string | null;
  relationship: string | null;
  is_active: boolean;
  created_at: string;
};
