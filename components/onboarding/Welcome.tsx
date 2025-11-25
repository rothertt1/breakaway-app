'use client';

import { motion } from 'framer-motion';
import { useOnboarding } from '@/lib/stores/onboardingStore';
import { Brain, Sparkles } from 'lucide-react';

export default function Welcome() {
  const { nextStep } = useOnboarding();

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        className="max-w-2xl text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Icon */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        >
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange to-orange-light flex items-center justify-center">
              <Brain className="w-12 h-12 text-white" />
            </div>
            <motion.div
              className="absolute -top-2 -right-2"
              animate={{ rotate: [0, 10, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Sparkles className="w-8 h-8 text-orange" />
            </motion.div>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Welcome to Breakaway
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-xl md:text-2xl text-foreground-muted mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          You&apos;re about to see something nobody else can show you:{' '}
          <span className="text-white font-semibold">
            your gambling pattern, analyzed by AI in real-time.
          </span>
        </motion.p>

        {/* Body */}
        <motion.p
          className="text-lg md:text-xl text-foreground-muted mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          First, answer 3 quick questions.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          onClick={nextStep}
          className="btn-primary text-xl md:text-2xl py-6 px-16 rounded-2xl inline-block shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          START ANALYSIS
        </motion.button>

        {/* Trust Badge */}
        <motion.p
          className="mt-8 text-sm text-foreground-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Based on real data from 10,000+ users in recovery
        </motion.p>
      </motion.div>
    </div>
  );
}
