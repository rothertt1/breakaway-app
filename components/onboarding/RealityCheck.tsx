'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useOnboarding } from '@/lib/stores/onboardingStore'
import ProgressBar from './ProgressBar'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts'
import CountUp from 'react-countup'
import { AlertTriangle, Heart } from 'lucide-react'

export default function RealityCheck() {
  const [showCharts, setShowCharts] = useState(false)
  const [showSecondChart, setShowSecondChart] = useState(false)
  const { yearlyBreakdown, threeYearLoss, nextStep, prevStep } = useOnboarding()

  useEffect(() => {
    // Animate charts sequentially
    setTimeout(() => setShowCharts(true), 500)
    setTimeout(() => setShowSecondChart(true), 3000)
  }, [])

  // Format data for loss chart
  const lossData = [
    { year: 'Year 1', amount: yearlyBreakdown[0] || 0 },
    { year: 'Year 2', amount: yearlyBreakdown[1] || 0 },
    { year: 'Year 3', amount: yearlyBreakdown[2] || 0 },
  ]

  // Format data for recovery chart
  const recoveryData = [
    { year: 'Year 1', amount: 500 },
    { year: 'Year 2', amount: 200 },
    { year: 'Year 3', amount: 50 },
  ]

  const savings = threeYearLoss - 750

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-slate-900 px-6 py-8 md:px-8"
    >
      <div className="max-w-3xl mx-auto">
        <ProgressBar currentStep={4} totalSteps={5} />

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          One Thing Before We Start...
        </h2>
        <p className="text-gray-400 mb-10">
          We analyzed patterns from 10,000+ gamblers with your profile.
        </p>

        {/* IF PATTERNS CONTINUE Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-7 h-7 text-red-500" />
            <h3 className="text-2xl font-bold text-red-400">
              IF PATTERNS CONTINUE:
            </h3>
          </div>

          {/* Loss Chart */}
          {showCharts && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <div className="bg-slate-800/50 rounded-lg p-6 border border-red-500/20">
                <ResponsiveContainer width="100%" height={250}>
                  <AreaChart data={lossData}>
                    <defs>
                      <linearGradient id="lossGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="year" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #ef4444', borderRadius: '8px' }}
                      formatter={(value: number) => [`$${value.toLocaleString()}`, 'Loss']}
                    />
                    <Area
                      type="monotone"
                      dataKey="amount"
                      stroke="#ef4444"
                      strokeWidth={3}
                      fill="url(#lossGradient)"
                      animationDuration={2000}
                    />
                  </AreaChart>
                </ResponsiveContainer>

                <div className="mt-6 space-y-2 text-gray-300">
                  <p className="text-sm">
                    <span className="font-semibold text-red-400">Year 1:</span> ${yearlyBreakdown[0]?.toLocaleString()} <span className="text-gray-500">(maintaining current pace)</span>
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold text-red-400">Year 2:</span> ${yearlyBreakdown[1]?.toLocaleString()} <span className="text-gray-500">(58% increase - chasing losses)</span>
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold text-red-400">Year 3:</span> ${yearlyBreakdown[2]?.toLocaleString()} <span className="text-gray-500">(137% increase - desperation)</span>
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-red-500/20">
                  <p className="text-sm text-gray-400 mb-2">3-Year Projected Loss:</p>
                  <p className="text-4xl font-bold text-red-400">
                    $<CountUp end={threeYearLoss} duration={2} separator="," delay={2} />
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    *Based on Cambridge Study on Gambling Behavior (2019)
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* WITH BREAKAWAY Section */}
        {showSecondChart && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-7 h-7 text-green-500" />
              <h3 className="text-2xl font-bold text-green-400">
                WITH BREAKAWAY:
              </h3>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-green-500/20">
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={recoveryData}>
                  <defs>
                    <linearGradient id="recoveryGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="year" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" tickFormatter={(value) => `$${value}`} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #10b981', borderRadius: '8px' }}
                    formatter={(value: number) => [`$${value.toLocaleString()}`, 'Loss']}
                  />
                  <Area
                    type="monotone"
                    dataKey="amount"
                    stroke="#10b981"
                    strokeWidth={3}
                    fill="url(#recoveryGradient)"
                    animationDuration={2000}
                  />
                </AreaChart>
              </ResponsiveContainer>

              <div className="mt-6 space-y-3 text-gray-300">
                <p className="font-semibold text-green-400">
                  Users with your pattern who engage daily:
                </p>
                <div className="space-y-2 text-sm">
                  <p>✓ <span className="font-semibold">78%</span> reach 30 days clean</p>
                  <p>✓ <span className="font-semibold">64%</span> reach 90 days clean</p>
                  <p>✓ Average savings: <span className="font-semibold">${savings.toLocaleString()}</span> in 3 years</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Call to Action */}
        {showSecondChart && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-8"
          >
            <p className="text-center text-xl text-gray-300 mb-2">
              The difference?
            </p>
            <p className="text-center text-2xl font-bold text-white mb-8">
              Starting today instead of tomorrow.
            </p>

            {/* Action Buttons */}
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
                JOIN 10,000+ IN RECOVERY
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
