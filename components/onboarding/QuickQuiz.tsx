'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useOnboarding } from '@/lib/stores/onboardingStore';
import { Trophy, Dice5, Spade, DollarSign, Zap } from 'lucide-react';

const gamblingTypes = [
  { id: 'sports', label: 'Sports Betting', icon: Trophy },
  { id: 'casino', label: 'Casino/Slots', icon: Dice5 },
  { id: 'poker', label: 'Poker', icon: Spade },
  { id: 'dfs', label: 'Daily Fantasy', icon: DollarSign },
  { id: 'other', label: 'Other', icon: Zap },
];

const frequencies = [
  { id: 'daily', label: 'Every day', severity: 'high' },
  { id: 'few-times-week', label: 'Few times a week', severity: 'medium' },
  { id: 'weekly', label: 'Weekly', severity: 'medium' },
  { id: 'cutting-back', label: 'Trying to cut back', severity: 'low' },
];

export default function QuickQuiz() {
  const {
    gamblingType,
    frequency,
    monthlyLoss,
    setGamblingType,
    setFrequency,
    setMonthlyLoss,
    calculateProjections,
    nextStep,
  } = useOnboarding();

  const [localType, setLocalType] = useState(gamblingType);
  const [localFreq, setLocalFreq] = useState(frequency);
  const [localLoss, setLocalLoss] = useState(monthlyLoss);

  const handleTypeSelect = (type: string) => {
    setLocalType(type);
    setGamblingType(type);
  };

  const handleFreqSelect = (freq: string) => {
    setLocalFreq(freq);
    setFrequency(freq);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setLocalLoss(value);
    setMonthlyLoss(value);
  };

  const handleSubmit = () => {
    calculateProjections();
    nextStep();
  };

  const isValid = localType && localFreq && localLoss > 0;
  const yearlyEstimate = localLoss * 12;

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <motion.div
        className="max-w-4xl w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Quick Assessment
          </motion.h1>
          <motion.p
            className="text-xl text-foreground-muted"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Help us understand your pattern
          </motion.p>
        </div>

        {/* Question 1: Gambling Type */}
        <motion.div
          className="mb-12"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">
            1. What type of gambling?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {gamblingTypes.map((type) => {
              const Icon = type.icon;
              const isSelected = localType === type.id;
              return (
                <motion.button
                  key={type.id}
                  onClick={() => handleTypeSelect(type.id)}
                  className={`p-6 rounded-2xl border-2 transition-all ${
                    isSelected
                      ? 'border-orange bg-orange/10'
                      : 'border-gray-700 bg-background-secondary hover:border-gray-600'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon
                    className={`w-8 h-8 mx-auto mb-3 ${
                      isSelected ? 'text-orange' : 'text-foreground-muted'
                    }`}
                  />
                  <p
                    className={`text-sm font-medium ${
                      isSelected ? 'text-white' : 'text-foreground-muted'
                    }`}
                  >
                    {type.label}
                  </p>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Question 2: Frequency */}
        <motion.div
          className="mb-12"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">
            2. How often do you gamble?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {frequencies.map((freq) => {
              const isSelected = localFreq === freq.id;
              return (
                <motion.button
                  key={freq.id}
                  onClick={() => handleFreqSelect(freq.id)}
                  className={`p-6 rounded-2xl border-2 text-left transition-all ${
                    isSelected
                      ? 'border-orange bg-orange/10'
                      : 'border-gray-700 bg-background-secondary hover:border-gray-600'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <p
                    className={`text-lg font-semibold ${
                      isSelected ? 'text-white' : 'text-foreground-muted'
                    }`}
                  >
                    {freq.label}
                  </p>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Question 3: Monthly Loss */}
        <motion.div
          className="mb-12"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">
            3. How much do you lose per month?
          </h2>
          <div className="bg-background-secondary p-8 rounded-2xl">
            <div className="mb-6">
              <p className="text-5xl font-extrabold text-orange mb-2">
                ${localLoss.toLocaleString()}
              </p>
              {localLoss > 0 && (
                <p className="text-foreground-muted">
                  At this pace: ${yearlyEstimate.toLocaleString()} per year
                </p>
              )}
            </div>
            <input
              type="range"
              min="0"
              max="10000"
              step="50"
              value={localLoss}
              onChange={handleSliderChange}
              className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-orange"
              style={{
                background: `linear-gradient(to right, #f97316 0%, #f97316 ${
                  (localLoss / 10000) * 100
                }%, #374151 ${(localLoss / 10000) * 100}%, #374151 100%)`,
              }}
            />
            <div className="flex justify-between mt-2 text-sm text-foreground-muted">
              <span>$0</span>
              <span>$10,000+</span>
            </div>
          </div>
        </motion.div>

        {/* Submit Button */}
        <motion.div
          className="text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <button
            onClick={handleSubmit}
            disabled={!isValid}
            className={`btn-primary text-xl md:text-2xl py-6 px-16 rounded-2xl shadow-2xl ${
              !isValid ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            ANALYZE MY PATTERN
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
