'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useOnboarding } from '@/lib/stores/onboardingStore'
import ProgressBar from './ProgressBar'
import { Check, Star } from 'lucide-react'

export default function PremiumUpsell() {
  const [isProcessing, setIsProcessing] = useState(false)
  const { prevStep, completeOnboarding } = useOnboarding()

  const handleStartTrial = async () => {
    setIsProcessing(true)
    // TODO: Implement subscription logic
    // For now, just mark as premium trial and complete onboarding
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
    completeOnboarding()
    // Navigate to dashboard will be handled by the page router
  }

  const handleContinueFree = async () => {
    setIsProcessing(true)
    // TODO: Implement free tier selection
    await new Promise(resolve => setTimeout(resolve, 500))
    completeOnboarding()
    // Navigate to dashboard will be handled by the page router
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-slate-900 px-6 py-8 md:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <ProgressBar currentStep={5} totalSteps={5} />

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 text-center">
          Choose Your Recovery Path
        </h2>
        <p className="text-gray-400 mb-10 text-center">
          Both paths work. Premium members see 2x better results.
        </p>

        {/* Plan Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-slate-800/50 rounded-xl p-8 border-2 border-gray-700"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Free Plan</h3>
            <p className="text-4xl font-bold text-white mb-6">
              $0
              <span className="text-lg text-gray-400 font-normal"> forever</span>
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Track urges</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">3 lessons</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Basic stats</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Crisis resources</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Community (read-only)</span>
              </div>
            </div>
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-xl p-8 border-2 border-orange-500 shadow-xl shadow-orange-500/20 relative"
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                <Star className="w-4 h-4" />
                RECOMMENDED
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">Premium Plan</h3>
            <p className="text-4xl font-bold text-orange-400 mb-2">
              $14.99
              <span className="text-lg text-gray-400 font-normal">/month</span>
            </p>
            <p className="text-sm text-gray-400 mb-6">or $89/year (save 50%)</p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 font-semibold">Everything in Free</span>
              </div>
              <div className="h-px bg-gray-700 my-2"></div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-white font-medium">365 daily lessons</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-white font-medium">AI crisis coach 24/7</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-white font-medium">Advanced analytics</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-white font-medium">Post in community</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-white font-medium">Accountability tools</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-white font-medium">Export your data</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-white font-medium">Priority support</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* The Data Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-slate-800/30 rounded-xl p-8 border border-slate-700 mb-8"
        >
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            📊 THE DATA:
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300">Premium users</span>
                <span className="text-orange-500 font-bold">78% stay clean 30+ days</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '78%' }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="bg-orange-500 h-3 rounded-full"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300">Free users</span>
                <span className="text-gray-500 font-bold">34% stay clean 30+ days</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '34%' }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="bg-gray-500 h-3 rounded-full"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-slate-800/30 rounded-xl p-8 border border-slate-700 mb-10"
        >
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            💬 REAL USER STORY:
          </h3>
          <blockquote className="text-gray-300 italic text-lg mb-4">
            "I tried quitting alone 6 times. With Breakaway Premium, I'm 47 days clean and saved $2,100."
          </blockquote>
          <p className="text-gray-400">
            — Mike T., Sports Bettor
          </p>
        </motion.div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={handleStartTrial}
            disabled={isProcessing}
            className="w-full py-5 rounded-lg text-lg font-semibold bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:opacity-90 shadow-lg transition-opacity disabled:opacity-50"
          >
            {isProcessing ? 'Processing...' : 'START 7-DAY FREE TRIAL'}
          </button>
          <p className="text-center text-sm text-gray-500">
            Cancel anytime. No commitment.
          </p>
          <button
            onClick={handleContinueFree}
            disabled={isProcessing}
            className="w-full text-gray-400 hover:text-gray-300 transition-colors text-sm underline disabled:opacity-50"
          >
            Continue with Free
          </button>

          <div className="flex justify-center pt-4">
            <button
              onClick={prevStep}
              disabled={isProcessing}
              className="px-6 py-2 rounded-lg border-2 border-gray-700 text-gray-300 font-semibold hover:border-gray-600 transition-colors text-sm disabled:opacity-50"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
