'use client'

import { motion } from 'framer-motion'
import { useOnboarding } from '@/lib/stores/onboardingStore'
import ProgressBar from './ProgressBar'
import LessonMockup from '@/components/mockups/LessonMockup'
import TrackerMockup from '@/components/mockups/TrackerMockup'
import CrisisCoachMockup from '@/components/mockups/CrisisCoachMockup'
import CommunityMockup from '@/components/mockups/CommunityMockup'
import { BookOpen, BarChart3, MessageCircle, Users } from 'lucide-react'

export default function ProductShowcase() {
  const { nextStep, prevStep } = useOnboarding()

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-slate-950 px-6 py-8 md:px-8"
    >
      <div className="max-w-3xl mx-auto">
        <ProgressBar currentStep={3} totalSteps={5} />

        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Your Personalized Recovery Plan
          </h2>
          <p className="text-gray-400">
            Based on your goals, here's what Breakaway provides:
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-12 pb-8">
          {/* Daily Lessons */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-100">Daily Lessons</h3>
                <p className="text-sm text-slate-400">5 minutes that change everything</p>
              </div>
            </div>

            <LessonMockup />

            <div className="space-y-2 px-4">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                <span>Day 1: "Why Your Brain Can't Stop Betting"</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                <span>Day 7: "Identifying Your Triggers"</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                <span>Day 14: "The 5-Minute Delay Technique"</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                <span>Day 30: "Rewiring Your Reward System"</span>
              </div>
              <p className="text-xs text-slate-500 pt-2">
                365 days of CBT-based recovery content
              </p>
            </div>
          </motion.section>

          {/* Urge Tracking */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-100">Urge Tracking</h3>
                <p className="text-sm text-slate-400">See your progress visualized</p>
              </div>
            </div>

            <TrackerMockup />

            <ul className="space-y-2 px-4">
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <span className="text-green-400">✓</span>
                <span>Log every urge (even when you resist)</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <span className="text-green-400">✓</span>
                <span>See patterns emerge over time</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <span className="text-green-400">✓</span>
                <span>Watch urges get weaker</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <span className="text-green-400">✓</span>
                <span>Track money you're NOT losing</span>
              </li>
            </ul>
          </motion.section>

          {/* Crisis Support */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-100">24/7 Crisis Support</h3>
                <p className="text-sm text-slate-400">Never face an urge alone</p>
              </div>
            </div>

            <CrisisCoachMockup />

            <ul className="space-y-2 px-4">
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <span className="text-green-400">✓</span>
                <span>Instant support when tempted</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <span className="text-green-400">✓</span>
                <span>AI crisis coach trained in CBT</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <span className="text-green-400">✓</span>
                <span>Available anytime, anywhere</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <span className="text-green-400">✓</span>
                <span>Help when you need it most</span>
              </li>
            </ul>
          </motion.section>

          {/* Community */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-100">Community</h3>
                <p className="text-sm text-slate-400">You're not alone in this</p>
              </div>
            </div>

            <CommunityMockup />

            <ul className="space-y-2 px-4">
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <span className="text-green-400">✓</span>
                <span>Anonymous support forum</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <span className="text-green-400">✓</span>
                <span>Share wins and struggles</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <span className="text-green-400">✓</span>
                <span>Learn from others' journeys</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <span className="text-green-400">✓</span>
                <span>Find accountability partners</span>
              </li>
            </ul>
          </motion.section>
        </div>

        {/* CTA */}
        <div className="pt-6">
          <div className="flex items-center gap-4">
            <button
              onClick={prevStep}
              className="px-6 py-3 rounded-lg border-2 border-gray-700 text-gray-300 font-semibold hover:border-gray-600 transition-colors"
            >
              Back
            </button>
            <button
              onClick={nextStep}
              className="flex-1 py-4 rounded-xl text-lg font-semibold bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:opacity-90 shadow-lg transition-all shadow-orange-500/25"
            >
              See the Science
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
