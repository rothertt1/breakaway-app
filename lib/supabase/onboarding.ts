// Database integration for onboarding
// NOTE: This requires Supabase to be set up with proper configuration

// Uncomment when Supabase is configured:
// import { supabase } from '@/lib/supabase'

export async function saveOnboardingData(userId: string, data: {
  gambling_types: string[]
  gambling_frequency: string
  goal: string
  user_profile: string
  three_year_loss: number
  yearly_breakdown: number[]
  subscription_tier: 'free' | 'premium_trial'
  onboarding_duration_seconds: number
}) {
  // TODO: Implement Supabase integration
  // This function will save onboarding data to the database

  console.log('Saving onboarding data:', { userId, data })

  /* Example implementation when Supabase is set up:

  // Update profiles table
  const { error: profileError } = await supabase
    .from('profiles')
    .update({
      gambling_type: data.gambling_types.join(','), // Store as comma-separated
      gambling_frequency: data.gambling_frequency,
      goal: data.goal,
      risk_profile: data.user_profile,
      monthly_loss_estimate: data.yearly_breakdown[0] / 12,
      subscription_tier: data.subscription_tier,
      onboarding_completed_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    })
    .eq('id', userId)

  if (profileError) throw profileError

  // Initialize streak
  const { error: streakError } = await supabase
    .from('streaks')
    .update({
      current_streak: 1,
      longest_streak: 1,
      total_clean_days: 1,
      last_clean_day: new Date().toISOString(),
      last_updated: new Date().toISOString()
    })
    .eq('user_id', userId)

  if (streakError) throw streakError

  return { success: true }
  */

  // Mock success for now
  return { success: true }
}

/**
 * Database Schema Requirements:
 *
 * profiles table should have:
 * - id (UUID, primary key)
 * - gambling_type (TEXT) - comma-separated list
 * - gambling_frequency (TEXT)
 * - goal (TEXT)
 * - risk_profile (TEXT)
 * - monthly_loss_estimate (NUMERIC)
 * - subscription_tier (TEXT)
 * - onboarding_completed_at (TIMESTAMP)
 * - updated_at (TIMESTAMP)
 *
 * streaks table should have:
 * - user_id (UUID, foreign key to profiles)
 * - current_streak (INTEGER)
 * - longest_streak (INTEGER)
 * - total_clean_days (INTEGER)
 * - last_clean_day (TIMESTAMP)
 * - last_updated (TIMESTAMP)
 */
