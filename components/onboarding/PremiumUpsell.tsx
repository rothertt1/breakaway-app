'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useOnboarding } from '@/lib/stores/onboardingStore';
import { Check, X, Sparkles, Shield, Brain, TrendingUp } from 'lucide-react';

const freeFeatures = [
  'Track unlimited urges',
  'See your patterns',
  '3 recovery lessons',
  'Crisis resources',
  'Community (read-only)',
];

const premiumFeatures = [
  'Everything in Free',
  '365 daily lessons',
  'AI crisis coach 24/7',
  'Advanced insights & patterns',
  'Post in community',
  'Accountability tools',
  'Export your data',
  'Priority support',
];

const benefits = [
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Get personalized recommendations based on your unique pattern',
  },
  {
    icon: Shield,
    title: '24/7 Crisis Support',
    description: 'Never face an urge alone with instant AI coaching',
  },
  {
    icon: TrendingUp,
    title: 'Advanced Analytics',
    description: 'Track patterns, triggers, and progress with detailed charts',
  },
];

export default function PremiumUpsell() {
  const router = useRouter();
  const { completeOnboarding } = useOnboarding();

  const handleFreeContinue = () => {
    completeOnboarding();
    router.push('/dashboard');
  };

  const handlePremiumTrial = () => {
    completeOnboarding();
    // TODO: Initiate Stripe checkout
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-orange/20 border border-orange/30 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-orange" />
            <span className="text-orange font-semibold">Limited Time Offer</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Maximize Your Recovery
          </h1>
          <p className="text-xl md:text-2xl text-foreground-muted max-w-3xl mx-auto">
            Join 78% of users who stay clean past 30 days with Premium
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                className="bg-background-secondary p-8 rounded-2xl border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-orange/20 flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-orange" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-foreground-muted">{benefit.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Pricing Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Free Plan */}
          <motion.div
            className="bg-background-secondary p-8 rounded-3xl border-2 border-gray-700"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-2">Free Plan</h3>
            <div className="mb-6">
              <span className="text-5xl font-extrabold text-white">$0</span>
              <span className="text-foreground-muted">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              {freeFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground-muted">
                  <Check className="w-5 h-5 text-green flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={handleFreeContinue}
              className="w-full py-4 rounded-xl text-lg font-semibold btn-outline"
            >
              Continue Free
            </button>
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            className="bg-gradient-to-br from-orange/10 to-orange/5 p-8 rounded-3xl border-2 border-orange relative overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            style={{ boxShadow: '0 0 60px rgba(249, 115, 22, 0.3)' }}
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-orange text-white text-sm font-bold rounded-full">
              RECOMMENDED
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 mt-4">
              Premium Plan
            </h3>
            <div className="mb-2">
              <span className="text-5xl font-extrabold text-orange">$14.99</span>
              <span className="text-foreground-muted">/month</span>
            </div>
            <p className="text-foreground-muted mb-6">
              or $89.99/year (save 50%)
            </p>
            <ul className="space-y-4 mb-8">
              {premiumFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground-muted">
                  <Check className="w-5 h-5 text-orange flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={handlePremiumTrial}
              className="w-full py-4 rounded-xl text-lg font-semibold btn-primary animate-pulse-glow"
            >
              Start 7-Day Free Trial
            </button>
            <p className="text-center text-sm text-foreground-muted mt-4">
              Cancel anytime. No commitment.
            </p>
          </motion.div>
        </div>

        {/* Social Proof */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-xl text-foreground-muted mb-4">
            Join 7,840 Premium users who are crushing their recovery goals
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-foreground-muted">
            <span>🔒 Secure payment</span>
            <span>✓ 30-day guarantee</span>
            <span>⚡ Cancel anytime</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
