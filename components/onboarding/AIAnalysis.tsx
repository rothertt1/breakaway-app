'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useOnboarding } from '@/lib/stores/onboardingStore';
import CountUp from 'react-countup';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Brain, AlertTriangle, TrendingUp, Loader2 } from 'lucide-react';

export default function AIAnalysis() {
  const { fiveYearLoss, yearlyBreakdown, riskProfile, monthlyLoss, nextStep } =
    useOnboarding();
  const [phase, setPhase] = useState<'loading' | 'results'>('loading');
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    // Simulate AI analysis loading
    const timer = setTimeout(() => {
      setPhase('results');
      setTimeout(() => setShowChart(true), 800);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const chartData = yearlyBreakdown.map((value, index) => ({
    year: `Year ${index + 1}`,
    loss: value,
  }));

  if (phase === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          className="text-center max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-orange to-orange-light flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          >
            <Brain className="w-16 h-16 text-white" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Analyzing Your Pattern...
          </h2>

          <div className="space-y-4 text-lg text-foreground-muted">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              🧠 Mapping your gambling behavior...
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              📊 Calculating 5-year trajectory...
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
            >
              📈 Comparing to 10,000+ user patterns...
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5 }}
            >
              ✨ Generating personalized insights...
            </motion.p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-block px-6 py-2 bg-red/20 border border-red/30 rounded-full mb-6">
            <p className="text-red font-semibold flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              High Risk Pattern Detected
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Your 5-Year Projection
          </h1>
          <p className="text-xl text-foreground-muted">
            Based on {riskProfile} patterns
          </p>
        </motion.div>

        {/* Big Number */}
        <motion.div
          className="bg-gradient-to-br from-red/20 to-red/10 border-2 border-red/30 rounded-3xl p-12 mb-12 text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
        >
          <p className="text-foreground-muted mb-2 text-xl">
            If you continue at this pace...
          </p>
          <div className="text-7xl md:text-8xl font-extrabold text-red mb-2">
            $
            <CountUp
              end={fiveYearLoss}
              duration={2.5}
              separator=","
              delay={0.5}
            />
          </div>
          <p className="text-2xl text-foreground-muted">
            lost in the next 5 years
          </p>
        </motion.div>

        {/* Chart */}
        <AnimatePresence>
          {showChart && (
            <motion.div
              className="bg-background-secondary p-8 rounded-3xl mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-red" />
                Escalation Pattern
              </h3>
              <p className="text-foreground-muted mb-6">
                Based on 10,000+ users, gambling losses escalate an average of
                58% each year due to chasing losses and increased tolerance.
              </p>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis
                    dataKey="year"
                    tick={{ fill: '#94a3b8' }}
                    stroke="#374151"
                  />
                  <YAxis
                    tick={{ fill: '#94a3b8' }}
                    stroke="#374151"
                    tickFormatter={(value) =>
                      `$${(value / 1000).toFixed(0)}k`
                    }
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1e293b',
                      border: 'none',
                      borderRadius: '8px',
                    }}
                    formatter={(value: number) =>
                      `$${value.toLocaleString()}`
                    }
                  />
                  <Line
                    type="monotone"
                    dataKey="loss"
                    stroke="#ef4444"
                    strokeWidth={3}
                    dot={{ fill: '#ef4444', r: 6 }}
                    animationDuration={2000}
                  />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Insight Cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="bg-background-secondary p-6 rounded-2xl border border-gray-700">
            <h4 className="text-lg font-bold text-white mb-2">
              Your Risk Profile
            </h4>
            <p className="text-orange text-2xl font-bold mb-2">
              {riskProfile}
            </p>
            <p className="text-foreground-muted text-sm">
              This pattern shows high escalation risk based on frequency and
              type.
            </p>
          </div>
          <div className="bg-background-secondary p-6 rounded-2xl border border-gray-700">
            <h4 className="text-lg font-bold text-white mb-2">
              Average Monthly Loss
            </h4>
            <p className="text-orange text-2xl font-bold mb-2">
              ${monthlyLoss.toLocaleString()}
            </p>
            <p className="text-foreground-muted text-sm">
              This is ${((monthlyLoss * 12) / 52).toFixed(0)} per week, or $
              {(monthlyLoss / 30).toFixed(0)} per day.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <p className="text-2xl text-white font-bold mb-2">
            But it doesn&apos;t have to be this way.
          </p>
          <p className="text-xl text-foreground-muted mb-8">
            Breakaway users reduce losses by 87% in their first 30 days.
          </p>
          <button
            onClick={nextStep}
            className="btn-primary text-xl md:text-2xl py-6 px-16 rounded-2xl shadow-2xl"
          >
            SHOW ME HOW
          </button>
        </motion.div>
      </div>
    </div>
  );
}
