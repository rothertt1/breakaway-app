'use client';

import Link from 'next/link';
import { Check } from 'lucide-react';

const freeFeatures = [
  "Track unlimited urges",
  "See your patterns",
  "3 recovery lessons",
  "Crisis resources",
  "Community (read-only)"
];

const premiumFeatures = [
  "Everything in Free",
  "365 daily lessons",
  "Advanced insights & patterns",
  "AI crisis coach 24/7",
  "Post in community",
  "Accountability tools",
  "Export your data"
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding"
      style={{
        background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)'
      }}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl md:text-2xl text-foreground-muted">
            Start free. Upgrade when you&apos;re ready. No tricks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-[1000px] mx-auto mb-12">
          {/* Free Plan */}
          <div className="bg-background p-8 md:p-12 rounded-2xl border-2 border-foreground/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Start Your Journey</h3>
            <div className="mb-2">
              <span className="text-4xl md:text-5xl font-extrabold text-white">$0</span>
            </div>
            <p className="text-foreground-muted mb-8">Forever free</p>

            <ul className="space-y-4 mb-10">
              {freeFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-lg text-foreground-muted">
                  <Check className="w-5 h-5 text-green flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/auth"
              className="btn-outline w-full py-4 rounded-xl text-lg inline-block text-center"
            >
              Get Started Free
            </Link>
          </div>

          {/* Premium Plan */}
          <div className="relative bg-background p-8 md:p-12 rounded-2xl border-2 border-orange shadow-2xl"
               style={{ boxShadow: '0 0 40px rgba(249, 115, 22, 0.2)' }}>
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-orange text-white text-sm font-bold rounded-full">
              MOST POPULAR
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 mt-4">Full Recovery Program</h3>
            <div className="mb-2">
              <span className="text-4xl md:text-5xl font-extrabold text-orange">$14.99</span>
              <span className="text-foreground-muted">/month</span>
            </div>
            <p className="text-foreground-muted mb-8">or $89.99/year (save 50%)</p>

            <ul className="space-y-4 mb-10">
              {premiumFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-lg text-foreground-muted">
                  <Check className="w-5 h-5 text-orange flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/auth"
              className="btn-primary w-full py-4 rounded-xl text-lg inline-block text-center"
            >
              Start 7-Day Free Trial
            </Link>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-foreground-muted mb-4">
            Most people start free, upgrade after seeing progress. No pressure.
          </p>
          <p className="text-foreground-muted">
            30-day money-back guarantee. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
