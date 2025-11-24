-- ===========================================
-- BREAKAWAY DATABASE SCHEMA
-- ===========================================
-- Run this SQL in your Supabase SQL Editor
-- ===========================================

-- USERS TABLE (extends Supabase auth.users)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  username TEXT UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  -- Onboarding data
  gambling_type TEXT, -- 'sports', 'casino', 'dfs', 'poker', etc.
  gambling_frequency TEXT, -- 'daily', 'weekly', etc.
  primary_trigger TEXT, -- 'boredom', 'stress', 'chasing', etc.
  monthly_loss_estimate INTEGER, -- in dollars
  goal TEXT, -- 'abstinence', 'reduction', 'break', 'unsure'
  why_quitting TEXT, -- their personal reason

  -- Subscription status
  subscription_tier TEXT DEFAULT 'free', -- 'free' or 'premium'
  subscription_status TEXT DEFAULT 'active',
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT
);

-- URGES TABLE (track every urge/bet)
CREATE TABLE public.urges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  -- Urge details
  amount_almost_bet INTEGER, -- dollars they almost bet (if resisted)
  amount_actually_bet INTEGER, -- dollars they bet (if didn't resist)
  did_resist BOOLEAN NOT NULL, -- true if resisted, false if bet
  trigger TEXT, -- what triggered this urge
  urge_strength INTEGER, -- 1-10 scale
  gambling_type TEXT, -- sports, casino, etc.

  -- If they bet (slip-up)
  bet_outcome TEXT, -- 'won', 'lost', 'pending'
  notes TEXT
);

-- DAILY CHECK-INS TABLE
CREATE TABLE public.check_ins (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  check_in_date DATE NOT NULL,

  -- Check-in data
  mood INTEGER, -- 1-5 scale
  had_urges BOOLEAN,
  urge_count INTEGER DEFAULT 0,
  notes TEXT,

  UNIQUE(user_id, check_in_date)
);

-- LESSONS TABLE (365 daily lessons - we'll populate later)
CREATE TABLE public.lessons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_number INTEGER UNIQUE NOT NULL, -- 1-365
  title TEXT NOT NULL,
  category TEXT, -- 'psychology', 'neuroscience', 'strategies', etc.
  content TEXT NOT NULL, -- markdown format
  estimated_read_time INTEGER DEFAULT 5, -- minutes
  is_premium BOOLEAN DEFAULT false, -- true if requires premium
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- USER LESSON PROGRESS TABLE
CREATE TABLE public.lesson_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  lesson_id UUID REFERENCES public.lessons(id) ON DELETE CASCADE NOT NULL,
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  UNIQUE(user_id, lesson_id)
);

-- STREAKS TABLE (calculated data for performance)
CREATE TABLE public.streaks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE UNIQUE NOT NULL,

  -- Streak data
  current_streak INTEGER DEFAULT 0, -- days
  longest_streak INTEGER DEFAULT 0, -- days
  last_clean_day DATE,
  total_clean_days INTEGER DEFAULT 0,

  -- Calculated stats
  total_urges_resisted INTEGER DEFAULT 0,
  total_money_not_lost INTEGER DEFAULT 0,
  last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- SOS BUDDY TABLE (accountability partners)
CREATE TABLE public.sos_buddies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,

  -- Buddy info
  buddy_name TEXT NOT NULL,
  buddy_email TEXT,
  buddy_phone TEXT,
  relationship TEXT, -- 'friend', 'family', 'sponsor', etc.

  -- Status
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ===========================================
-- INDEXES for performance
-- ===========================================
CREATE INDEX idx_urges_user_id ON public.urges(user_id);
CREATE INDEX idx_urges_created_at ON public.urges(created_at);
CREATE INDEX idx_check_ins_user_id ON public.check_ins(user_id);
CREATE INDEX idx_check_ins_date ON public.check_ins(check_in_date);
CREATE INDEX idx_lesson_progress_user_id ON public.lesson_progress(user_id);

-- ===========================================
-- ROW LEVEL SECURITY (users can only see their own data)
-- ===========================================
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.urges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.check_ins ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lesson_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.streaks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sos_buddies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- Urges policies
CREATE POLICY "Users can view own urges" ON public.urges
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own urges" ON public.urges
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own urges" ON public.urges
  FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own urges" ON public.urges
  FOR DELETE USING (auth.uid() = user_id);

-- Check-ins policies
CREATE POLICY "Users can view own check-ins" ON public.check_ins
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own check-ins" ON public.check_ins
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Lesson progress policies
CREATE POLICY "Users can view own progress" ON public.lesson_progress
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own progress" ON public.lesson_progress
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Streaks policies
CREATE POLICY "Users can view own streaks" ON public.streaks
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update own streaks" ON public.streaks
  FOR UPDATE USING (auth.uid() = user_id);

-- SOS Buddies policies
CREATE POLICY "Users can view own buddies" ON public.sos_buddies
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own buddies" ON public.sos_buddies
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own buddies" ON public.sos_buddies
  FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own buddies" ON public.sos_buddies
  FOR DELETE USING (auth.uid() = user_id);

-- Lessons are public (everyone can read)
CREATE POLICY "Anyone can view lessons" ON public.lessons
  FOR SELECT USING (true);

-- ===========================================
-- FUNCTIONS
-- ===========================================

-- Function to create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, username)
  VALUES (NEW.id, NEW.email);

  INSERT INTO public.streaks (user_id)
  VALUES (NEW.id);

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to auto-create profile
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to update streak when urge is logged
CREATE OR REPLACE FUNCTION public.update_streak_on_urge()
RETURNS TRIGGER AS $$
BEGIN
  -- If they resisted, update streak
  IF NEW.did_resist = true THEN
    UPDATE public.streaks
    SET
      total_urges_resisted = total_urges_resisted + 1,
      total_money_not_lost = total_money_not_lost + COALESCE(NEW.amount_almost_bet, 0),
      last_updated = NOW()
    WHERE user_id = NEW.user_id;
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_urge_logged
  AFTER INSERT ON public.urges
  FOR EACH ROW EXECUTE FUNCTION public.update_streak_on_urge();
