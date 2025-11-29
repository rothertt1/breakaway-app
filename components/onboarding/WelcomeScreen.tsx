'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useOnboarding } from '@/lib/stores/onboardingStore'

export default function WelcomeScreen() {
  const [showButton, setShowButton] = useState(false)
  const { nextStep } = useOnboarding()

  useEffect(() => {
    // Show button after breathing animation (3 seconds)
    const timer = setTimeout(() => {
      setShowButton(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen px-8 text-center bg-slate-900"
    >
      {/* Breathing Circle Animation */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 mb-12"
      />

      {/* Text Content - Fade in after animation starts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="max-w-2xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Welcome to Breakaway
        </h1>
        <p className="text-xl text-gray-300 mb-4">
          Take a deep breath. You're in the right place.
        </p>
        <p className="text-lg text-gray-400 mb-12">
          Thousands of people just like you have found their way back to freedom.
          <br />
          You're about to join them.
        </p>

        {/* Button appears after breathing animation */}
        {showButton && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={nextStep}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
          >
            LET'S BEGIN
          </motion.button>
        )}
      </motion.div>
    </motion.div>
  )
}
