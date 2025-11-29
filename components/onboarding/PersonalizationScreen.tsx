'use client'

import { motion } from 'framer-motion'
import { useOnboarding } from '@/lib/stores/onboardingStore'
import ProgressBar from './ProgressBar'
import { Circle, Dices, Spade, Trophy, Zap } from 'lucide-react'

const gamblingOptions = [
  { id: 'sports', label: 'Sports Betting', icon: Trophy },
  { id: 'casino', label: 'Casino/Slots', icon: Circle },
  { id: 'poker', label: 'Poker', icon: Spade },
  { id: 'dfs', label: 'Daily Fantasy', icon: Dices },
  { id: 'other', label: 'Other', icon: Zap },
]

const frequencyOptions = [
  { id: 'multiple-daily', label: 'Multiple times a day' },
  { id: 'daily', label: 'Daily' },
  { id: 'few-weekly', label: 'Few times a week' },
  { id: 'weekly', label: 'Weekly' },
]

const goalOptions = [
  { id: 'quit', label: 'Quit completely' },
  { id: 'reduce', label: 'Reduce to healthier levels' },
  { id: 'break', label: 'Take a break and reassess' },
  { id: 'unsure', label: 'Not sure yet' },
]

export default function PersonalizationScreen() {
  const { gamblingTypes, frequency, goal, toggleGamblingType, setFrequency, setGoal, calculateProjections, nextStep, prevStep } = useOnboarding()

  const canContinue = gamblingTypes.length > 0 && frequency && goal

  const handleContinue = () => {
    calculateProjections()
    nextStep()
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-slate-900 px-6 py-8 md:px-8"
    >
      <div className="max-w-3xl mx-auto">
        <ProgressBar currentStep={2} totalSteps={5} />

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Help us personalize your journey
        </h2>
        <p className="text-gray-400 mb-10">
          This helps us create the most effective recovery plan for you
        </p>

        {/* Question 1: Gambling Types */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-4">
            What types of gambling do you struggle with?
          </h3>
          <p className="text-sm text-gray-400 mb-4">(Select all that apply)</p>
          <div className="grid grid-cols-2 gap-4">
            {gamblingOptions.map((option) => {
              const Icon = option.icon
              const isSelected = gamblingTypes.includes(option.id)
              return (
                <motion.button
                  key={option.id}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => toggleGamblingType(option.id)}
                  className={`min-h-[100px] p-5 rounded-lg border-2 transition-all flex flex-col items-center justify-center gap-2 ${
                    isSelected
                      ? 'border-orange-500 bg-orange-500/10'
                      : 'border-gray-700 bg-gray-800/30 hover:border-gray-600'
                  }`}
                >
                  <Icon className={`w-6 h-6 ${isSelected ? 'text-orange-500' : 'text-gray-400'}`} />
                  <span className={`text-sm font-medium ${isSelected ? 'text-orange-500' : 'text-gray-300'}`}>
                    {option.label}
                  </span>
                  {isSelected && (
                    <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </motion.button>
              )
            })}
          </div>
        </div>

        {/* Question 2: Frequency */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-4">
            How often are you gambling right now?
          </h3>
          <div className="flex flex-col gap-3">
            {frequencyOptions.map((option) => {
              const isSelected = frequency === option.id
              return (
                <motion.button
                  key={option.id}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setFrequency(option.id)}
                  className={`min-h-[60px] p-4 rounded-lg border-2 transition-all flex items-center gap-3 ${
                    isSelected
                      ? 'border-orange-500 bg-orange-500/10'
                      : 'border-gray-700 bg-gray-800/30 hover:border-gray-600'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    isSelected ? 'border-orange-500' : 'border-gray-600'
                  }`}>
                    {isSelected && (
                      <div className="w-3 h-3 rounded-full bg-orange-500" />
                    )}
                  </div>
                  <span className={`text-base font-medium ${isSelected ? 'text-orange-500' : 'text-gray-300'}`}>
                    {option.label}
                  </span>
                </motion.button>
              )
            })}
          </div>
        </div>

        {/* Question 3: Goal */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-4">
            What's your goal?
          </h3>
          <div className="flex flex-col gap-3">
            {goalOptions.map((option) => {
              const isSelected = goal === option.id
              return (
                <motion.button
                  key={option.id}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setGoal(option.id)}
                  className={`min-h-[60px] p-4 rounded-lg border-2 transition-all flex items-center gap-3 ${
                    isSelected
                      ? 'border-orange-500 bg-orange-500/10'
                      : 'border-gray-700 bg-gray-800/30 hover:border-gray-600'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    isSelected ? 'border-orange-500' : 'border-gray-600'
                  }`}>
                    {isSelected && (
                      <div className="w-3 h-3 rounded-full bg-orange-500" />
                    )}
                  </div>
                  <span className={`text-base font-medium ${isSelected ? 'text-orange-500' : 'text-gray-300'}`}>
                    {option.label}
                  </span>
                </motion.button>
              )
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 pt-6">
          <button
            onClick={prevStep}
            className="px-6 py-3 rounded-lg border-2 border-gray-700 text-gray-300 font-semibold hover:border-gray-600 transition-colors"
          >
            Back
          </button>
          <button
            onClick={handleContinue}
            disabled={!canContinue}
            className={`flex-1 py-4 rounded-lg text-lg font-semibold transition-all ${
              canContinue
                ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:opacity-90 shadow-lg'
                : 'bg-gray-800 text-gray-500 cursor-not-allowed'
            }`}
          >
            CONTINUE
          </button>
        </div>
      </div>
    </motion.div>
  )
}
