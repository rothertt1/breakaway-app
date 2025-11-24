'use client';

import Link from 'next/link';
import { X, Check } from 'lucide-react';

const beforeItems = [
  "Checking scores obsessively",
  "Hiding losses from people you love",
  "Chasing yesterday's bets",
  "Deleting apps, re-downloading them",
  "Feeling powerless and ashamed"
];

const afterItems = [
  "Waking up without regret",
  "Honest conversations",
  "Rebuilding savings",
  "Present for moments that matter",
  "In control again"
];

export default function Transformation() {
  return (
    <section className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0f172a 0%, rgba(249, 115, 22, 0.1) 50%, #0f172a 100%)'
      }}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Imagine 30 Days From Now
          </h2>
          <p className="text-xl md:text-2xl text-foreground-muted">
            This isn&apos;t fantasy. This is what our users report.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-[1100px] mx-auto mb-16">
          {/* Before Card */}
          <div className="bg-background p-8 md:p-12 rounded-2xl border-l-4 border-red shadow-lg">
            <div className="text-center mb-8">
              <span className="text-6xl mb-4 block">😞</span>
              <h3 className="text-3xl font-bold text-red">Before</h3>
            </div>
            <ul className="space-y-4">
              {beforeItems.map((item, index) => (
                <li key={index} className="flex items-center gap-4 text-lg md:text-xl text-foreground-muted">
                  <X className="w-6 h-6 text-red flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After Card */}
          <div className="bg-background p-8 md:p-12 rounded-2xl border-l-4 border-green shadow-lg relative overflow-hidden">
            {/* Subtle green glow */}
            <div className="absolute inset-0 bg-green/5 pointer-events-none"></div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <span className="text-6xl mb-4 block">😊</span>
                <h3 className="text-3xl font-bold text-green">After</h3>
              </div>
              <ul className="space-y-4">
                {afterItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-4 text-lg md:text-xl text-foreground-muted">
                    <Check className="w-6 h-6 text-green flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-2xl md:text-3xl font-bold text-white mb-8">
            This can be you. Start today.
          </p>
          <Link
            href="/auth"
            className="btn-primary text-xl md:text-2xl py-5 px-12 rounded-xl inline-block"
          >
            Begin Your Journey
          </Link>
        </div>
      </div>
    </section>
  );
}
