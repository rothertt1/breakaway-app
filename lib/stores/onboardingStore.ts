import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface OnboardingState {
  // User inputs
  gamblingTypes: string[] // Multi-select array
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

  // Actions
  setGamblingTypes: (types: string[]) => void
  toggleGamblingType: (type: string) => void
  setFrequency: (freq: string) => void
  setGoal: (goal: string) => void
  calculateProjections: () => void
  nextStep: () => void
  prevStep: () => void
  completeOnboarding: () => void
  reset: () => void
}

export const useOnboarding = create<OnboardingState>()(
  persist(
    (set, get) => ({
      gamblingTypes: [],
      frequency: '',
      goal: '',
      threeYearLoss: 0,
      yearlyBreakdown: [],
      userProfile: '',
      currentStep: 1,
      isComplete: false,
      startTime: Date.now(),

      setGamblingTypes: (types) => set({ gamblingTypes: types }),

      toggleGamblingType: (type) => {
        const current = get().gamblingTypes
        const updated = current.includes(type)
          ? current.filter(t => t !== type)
          : [...current, type]
        set({ gamblingTypes: updated })
      },

      setFrequency: (freq) => set({ frequency: freq }),
      setGoal: (goal) => set({ goal: goal }),

      calculateProjections: () => {
        const { frequency } = get()

        // Base monthly loss estimates by frequency
        const frequencyMap: Record<string, number> = {
          'multiple-daily': 2000,
          'daily': 1200,
          'few-weekly': 500,
          'weekly': 200
        }

        const baseMonthly = frequencyMap[frequency] || 500

        // Calculate 3-year projection with escalation
        const year1 = baseMonthly * 12
        const year2 = year1 * 1.58  // 58% increase (research-backed)
        const year3 = year1 * 2.37  // 137% increase (research-backed)

        const breakdown = [
          Math.round(year1),
          Math.round(year2),
          Math.round(year3)
        ]
        const total = breakdown.reduce((sum, val) => sum + val, 0)

        // Determine user profile
        const primaryType = get().gamblingTypes[0] || 'sports'
        const profiles: Record<string, string> = {
          'sports': 'Compulsive Sports Bettor',
          'casino': 'Slot Machine Spiral',
          'poker': 'High-Stakes Poker Player',
          'dfs': 'Daily Fantasy Addict',
          'other': 'Compulsive Bettor'
        }

        set({
          threeYearLoss: total,
          yearlyBreakdown: breakdown,
          userProfile: profiles[primaryType] || 'Compulsive Bettor'
        })
      },

      nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
      prevStep: () => set((state) => ({ currentStep: Math.max(1, state.currentStep - 1) })),
      completeOnboarding: () => set({ isComplete: true }),
      reset: () => set({
        gamblingTypes: [],
        frequency: '',
        goal: '',
        threeYearLoss: 0,
        yearlyBreakdown: [],
        userProfile: '',
        currentStep: 1,
        isComplete: false,
        startTime: Date.now()
      })
    }),
    {
      name: 'breakaway-onboarding'
    }
  )
)
