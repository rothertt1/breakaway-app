'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useOnboarding } from '@/lib/stores/onboardingStore'
import ProgressBar from './ProgressBar'
import { BookOpen, BarChart3, MessageCircle, Users } from 'lucide-react'

export default function ProductShowcase() {
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false)
  const { nextStep, prevStep } = useOnboarding()

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLDivElement
      const bottom = target.scrollHeight - target.scrollTop <= target.clientHeight + 100
      if (bottom && !hasScrolledToBottom) {
        setHasScrolledToBottom(true)
      }
    }

    const scrollContainer = document.getElementById('showcase-scroll')
    scrollContainer?.addEventListener('scroll', handleScroll)
    return () => scrollContainer?.removeEventListener('scroll', handleScroll)
  }, [hasScrolledToBottom])

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-slate-900 px-6 py-8 md:px-8 flex flex-col"
    >
      <div className="max-w-3xl mx-auto w-full flex flex-col flex-1">
        <ProgressBar currentStep={3} totalSteps={5} />

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Your Personalized Recovery Plan
        </h2>
        <p className="text-gray-400 mb-8">
          Based on your goals, here's what Breakaway provides:
        </p>

        {/* Scrollable Content */}
        <div
          id="showcase-scroll"
          className="flex-1 overflow-y-auto space-y-10 pb-8 scroll-smooth"
        >
          {/* Section 1: Daily Lessons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-orange-500" />
              <h3 className="text-2xl font-bold text-white">Daily Lessons</h3>
            </div>

            {/* Mockup Screenshot */}
            <div className="w-full h-[200px] bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg border border-slate-600 shadow-xl flex items-center justify-center overflow-hidden">
              <div className="w-full h-full p-6 space-y-3">
                <div className="h-8 bg-orange-500/20 rounded w-3/4"></div>
                <div className="h-4 bg-slate-600 rounded w-full"></div>
                <div className="h-4 bg-slate-600 rounded w-5/6"></div>
                <div className="h-4 bg-slate-600 rounded w-4/5"></div>
                <div className="mt-4 h-10 bg-orange-500/30 rounded-lg w-1/2"></div>
              </div>
            </div>

            <div className="space-y-2 text-gray-300">
              <p className="flex items-start gap-2">
                <span className="text-orange-500 font-semibold">Day 1:</span>
                "Why Your Brain Can't Stop Betting"
              </p>
              <p className="flex items-start gap-2">
                <span className="text-orange-500 font-semibold">Day 7:</span>
                "Identifying Your Triggers"
              </p>
              <p className="flex items-start gap-2">
                <span className="text-orange-500 font-semibold">Day 14:</span>
                "The 5-Minute Delay Technique"
              </p>
              <p className="flex items-start gap-2">
                <span className="text-orange-500 font-semibold">Day 30:</span>
                "Rewiring Your Reward System"
              </p>
            </div>

            <p className="text-sm text-gray-400 italic">
              365 days of CBT-based recovery content • 5 minutes per day
            </p>
          </motion.div>

          {/* Section 2: Urge Tracking */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="w-8 h-8 text-orange-500" />
              <h3 className="text-2xl font-bold text-white">Urge Tracking</h3>
            </div>

            {/* Mockup Screenshot */}
            <div className="w-full h-[200px] bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg border border-slate-600 shadow-xl flex items-center justify-center overflow-hidden">
              <div className="w-full h-full p-6 flex items-end justify-around gap-2">
                <div className="w-full h-3/4 bg-orange-500/40 rounded-t"></div>
                <div className="w-full h-1/2 bg-orange-500/60 rounded-t"></div>
                <div className="w-full h-1/3 bg-green-500/60 rounded-t"></div>
                <div className="w-full h-1/4 bg-green-500/80 rounded-t"></div>
              </div>
            </div>

            <div className="space-y-2 text-gray-300">
              <p>✓ Log every urge (even when you resist)</p>
              <p>✓ See patterns emerge over time</p>
              <p>✓ Watch urges get weaker</p>
              <p>✓ Track money you're NOT losing</p>
            </div>

            <p className="text-sm text-gray-400 italic">
              Real-time insights into your recovery
            </p>
          </motion.div>

          {/* Section 3: Crisis Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-4">
              <MessageCircle className="w-8 h-8 text-orange-500" />
              <h3 className="text-2xl font-bold text-white">24/7 Crisis Support</h3>
            </div>

            {/* Mockup Screenshot */}
            <div className="w-full h-[200px] bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg border border-slate-600 shadow-xl flex items-center justify-center overflow-hidden">
              <div className="w-full h-full p-6 space-y-3">
                <div className="flex justify-end">
                  <div className="bg-orange-500/30 rounded-lg p-3 max-w-[70%]">
                    <div className="h-3 bg-orange-500/50 rounded w-32"></div>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-slate-600/50 rounded-lg p-3 max-w-[70%]">
                    <div className="h-3 bg-slate-500 rounded w-40 mb-2"></div>
                    <div className="h-3 bg-slate-500 rounded w-36"></div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-orange-500/30 rounded-lg p-3 max-w-[70%]">
                    <div className="h-3 bg-orange-500/50 rounded w-28"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2 text-gray-300">
              <p>✓ Instant support when tempted</p>
              <p>✓ AI crisis coach trained in CBT</p>
              <p>✓ Available anytime, anywhere</p>
              <p>✓ Never face an urge alone</p>
            </div>

            <p className="text-sm text-gray-400 italic">
              Help when you need it most
            </p>
          </motion.div>

          {/* Section 4: Community */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-8 h-8 text-orange-500" />
              <h3 className="text-2xl font-bold text-white">Community</h3>
            </div>

            {/* Mockup Screenshot */}
            <div className="w-full h-[200px] bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg border border-slate-600 shadow-xl flex items-center justify-center overflow-hidden">
              <div className="w-full h-full p-6 space-y-3">
                <div className="space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-600"></div>
                      <div className="flex-1 space-y-1">
                        <div className="h-3 bg-slate-600 rounded w-1/4"></div>
                        <div className="h-3 bg-slate-600/60 rounded w-full"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-2 text-gray-300">
              <p>✓ Anonymous support forum</p>
              <p>✓ Share wins and struggles</p>
              <p>✓ Learn from others' journeys</p>
              <p>✓ Find accountability partners</p>
            </div>

            <p className="text-sm text-gray-400 italic">
              You're not alone in this
            </p>
          </motion.div>

          {/* Bottom spacing for button */}
          <div className="h-24"></div>
        </div>

        {/* Continue Button - Fixed at bottom or shown after scroll */}
        <div className={`pt-6 bg-slate-900 transition-opacity duration-300 ${hasScrolledToBottom ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className="flex items-center gap-4">
            <button
              onClick={prevStep}
              className="px-6 py-3 rounded-lg border-2 border-gray-700 text-gray-300 font-semibold hover:border-gray-600 transition-colors"
            >
              Back
            </button>
            <button
              onClick={nextStep}
              className="flex-1 py-4 rounded-lg text-lg font-semibold bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:opacity-90 shadow-lg transition-opacity"
            >
              SEE THE SCIENCE
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
