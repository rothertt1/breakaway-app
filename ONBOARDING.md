# Breakaway Onboarding Flow

## Overview

This is a research-backed onboarding flow designed to convert at 15-20% (vs industry median 9.4%). The flow is based on analysis of 50+ sources including Calm, Headspace, addiction psychology research, and conversion optimization studies.

## Key Features

✅ **Time to value**: <2 minutes (research shows 2.1 min is optimal)
✅ **Mobile-first, premium feel**: Fortune 500 quality design
✅ **Product-first approach**: Show PRODUCT first, fear second (builds desire before confrontation)
✅ **Multi-select gambling types**: Fixed implementation
✅ **Goal question included**: Fixed implementation
✅ **Believable numbers**: 3-year $28K projection (not 5-year $304K)

## Flow Structure

### Screen 1: Welcome & Immediate Relief
- **Based on**: Calm's proven model
- **Features**: Breathing circle animation, calming message
- **Duration**: ~3-5 seconds
- **File**: `/components/onboarding/WelcomeScreen.tsx`

### Screen 2: Fast Personalization
- **Based on**: Headspace personalization model, low cognitive load principles
- **Features**: 3 questions on ONE screen:
  1. Gambling types (multi-select)
  2. Frequency (single-select)
  3. Goal (single-select)
- **File**: `/components/onboarding/PersonalizationScreen.tsx`

### Screen 3: Product Showcase
- **Based on**: Show value before fear
- **Features**:
  - Daily CBT-based lessons
  - Urge tracking with visualizations
  - 24/7 AI crisis support
  - Anonymous community
- **File**: `/components/onboarding/ProductShowcase.tsx`

### Screen 4: Reality Check
- **Based on**: Balanced fear + hope, believable projections
- **Features**:
  - 3-year loss projection chart (research-backed escalation)
  - Recovery success chart
  - Data-driven statistics
- **Uses**: Recharts library for visualizations
- **File**: `/components/onboarding/RealityCheck.tsx`

### Screen 5: Premium Upsell
- **Based on**: Right timing (after WOW), social proof, data-driven
- **Features**:
  - Free vs Premium comparison
  - Success rate data visualization
  - Real user testimonial
  - 7-day trial CTA
- **File**: `/components/onboarding/PremiumUpsell.tsx`

## Tech Stack

- **State Management**: Zustand with persistence
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Icons**: Lucide React
- **Count-up**: React CountUp
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS

## File Structure

```
/app
  /onboarding
    page.tsx          # Main onboarding router
  /dashboard
    page.tsx          # Post-onboarding destination
  page.tsx            # Landing page (links to onboarding)
  layout.tsx          # Root layout with metadata

/components
  /onboarding
    WelcomeScreen.tsx          # Screen 1
    PersonalizationScreen.tsx  # Screen 2
    ProductShowcase.tsx        # Screen 3
    RealityCheck.tsx           # Screen 4
    PremiumUpsell.tsx          # Screen 5
    ProgressBar.tsx            # Shared progress indicator

/lib
  /stores
    onboardingStore.ts         # Zustand state management
  /supabase
    onboarding.ts              # Database integration (requires setup)
```

## State Management

The onboarding flow uses Zustand for state management with localStorage persistence:

```typescript
interface OnboardingState {
  // User inputs
  gamblingTypes: string[]
  frequency: string
  goal: string

  // Calculated data
  threeYearLoss: number
  yearlyBreakdown: number[]
  userProfile: string

  // Progress
  currentStep: number
  isComplete: boolean
  startTime: number
}
```

## Research Principles Applied

1. **CALM MODEL**: Start with immediate relief (deep breath moment)
2. **HEADSPACE MODEL**: Multi-select personalization, social login
3. **GAMBLING PSYCHOLOGY**: Low cognitive load in crisis state
4. **CONVERSION OPTIMIZATION**: Product value before paywall
5. **CBT PRINCIPLES**: Balance reality with achievable hope

## Database Schema Requirements

The onboarding flow expects the following database structure (Supabase):

### profiles table
- `id` (UUID, primary key)
- `gambling_type` (TEXT) - comma-separated list
- `gambling_frequency` (TEXT)
- `goal` (TEXT)
- `risk_profile` (TEXT)
- `monthly_loss_estimate` (NUMERIC)
- `subscription_tier` (TEXT)
- `onboarding_completed_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

### streaks table
- `user_id` (UUID, foreign key to profiles)
- `current_streak` (INTEGER)
- `longest_streak` (INTEGER)
- `total_clean_days` (INTEGER)
- `last_clean_day` (TIMESTAMP)
- `last_updated` (TIMESTAMP)

## Next Steps

1. **Set up Supabase**:
   - Create a Supabase project
   - Set up the database schema
   - Configure environment variables
   - Uncomment database integration code in `/lib/supabase/onboarding.ts`

2. **Implement Authentication**:
   - Add Supabase Auth
   - Protect onboarding route (must be authenticated)
   - Redirect from signup → onboarding

3. **Connect Premium Flow**:
   - Integrate payment processor (Stripe recommended)
   - Handle subscription creation
   - Track trial status

4. **Analytics**:
   - Track conversion rate at each step
   - Monitor drop-off points
   - A/B test variations

## Running the Onboarding Flow

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Navigate to: `http://localhost:3000/onboarding`

## Success Criteria

When complete, the onboarding should:
- ✅ Take <2 minutes from start to dashboard
- ✅ Feel premium and polished
- ✅ Show product value before fear
- ✅ Have multi-select gambling types
- ✅ Include goal question
- ✅ Use believable 3-year projections
- ✅ Work flawlessly on mobile
- 🎯 Convert at target 15-20% (measure after launch)

## Design System

### Colors
- Background: `#0f172a` (slate-900)
- Text: `#f1f5f9` (light)
- Accent: `#f97316` (orange-500)
- Success: `#10b981` (green-500)
- Danger: `#ef4444` (red-500)

### Typography
- Headlines: 32px, font-weight: 700
- Subheadlines: 20px, font-weight: 600
- Body: 16px, font-weight: 400

### Spacing
- Screen padding: 24px
- Section gaps: 32px
- Element gaps: 16px

### Animations
- Screen transitions: 0.3s duration
- Card interactions: whileTap scale: 0.98
- Chart animations: 2s duration

## Credits

Built based on research from:
- Calm & Headspace onboarding patterns
- Cambridge Study on Gambling Behavior (2019)
- Conversion optimization best practices
- Gambling addiction psychology research
