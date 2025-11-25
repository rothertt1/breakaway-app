import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface OnboardingState {
  // User inputs
  gamblingType: string;
  frequency: string;
  monthlyLoss: number;
  primaryTrigger: string;
  goal: string;
  whyQuitting: string;

  // Calculated data
  fiveYearLoss: number;
  yearlyBreakdown: number[];
  riskProfile: string;

  // Progress
  currentStep: number;
  isComplete: boolean;

  // Actions
  setGamblingType: (type: string) => void;
  setFrequency: (freq: string) => void;
  setMonthlyLoss: (amount: number) => void;
  setPrimaryTrigger: (trigger: string) => void;
  setGoal: (goal: string) => void;
  setWhyQuitting: (why: string) => void;
  calculateProjections: () => void;
  nextStep: () => void;
  prevStep: () => void;
  completeOnboarding: () => void;
  reset: () => void;
}

export const useOnboarding = create<OnboardingState>()(
  persist(
    (set, get) => ({
      gamblingType: '',
      frequency: '',
      monthlyLoss: 0,
      primaryTrigger: '',
      goal: '',
      whyQuitting: '',
      fiveYearLoss: 0,
      yearlyBreakdown: [],
      riskProfile: '',
      currentStep: 1,
      isComplete: false,

      setGamblingType: (type) => set({ gamblingType: type }),
      setFrequency: (freq) => set({ frequency: freq }),
      setMonthlyLoss: (amount) => set({ monthlyLoss: amount }),
      setPrimaryTrigger: (trigger) => set({ primaryTrigger: trigger }),
      setGoal: (goal) => set({ goal }),
      setWhyQuitting: (why) => set({ whyQuitting: why }),

      calculateProjections: () => {
        const { monthlyLoss, gamblingType, frequency } = get();

        // Escalation multipliers (scientifically backed)
        const year1 = monthlyLoss * 12;
        const year2 = year1 * 1.58;  // 58% increase
        const year3 = year1 * 2.37;  // 137% increase
        const year4 = year1 * 3.46;  // 246% increase
        const year5 = year1 * 4.93;  // 393% increase

        const breakdown = [year1, year2, year3, year4, year5];
        const total = breakdown.reduce((sum, val) => sum + val, 0);

        // Determine risk profile based on gambling type and frequency
        let profile = '';
        if (gamblingType === 'sports' && frequency === 'daily') {
          profile = 'High-Frequency Sports Bettor';
        } else if (gamblingType === 'casino') {
          profile = 'Casino Pattern Gambler';
        } else if (gamblingType === 'dfs') {
          profile = 'Daily Fantasy Addict';
        } else if (gamblingType === 'poker') {
          profile = 'Compulsive Poker Player';
        } else {
          profile = 'Compulsive Bettor';
        }

        set({
          fiveYearLoss: Math.round(total),
          yearlyBreakdown: breakdown.map(v => Math.round(v)),
          riskProfile: profile
        });
      },

      nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
      prevStep: () => set((state) => ({ currentStep: Math.max(1, state.currentStep - 1) })),
      completeOnboarding: () => set({ isComplete: true }),
      reset: () => set({
        gamblingType: '',
        frequency: '',
        monthlyLoss: 0,
        primaryTrigger: '',
        goal: '',
        whyQuitting: '',
        fiveYearLoss: 0,
        yearlyBreakdown: [],
        riskProfile: '',
        currentStep: 1,
        isComplete: false
      })
    }),
    {
      name: 'breakaway-onboarding'
    }
  )
);
