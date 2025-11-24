'use client';

import Link from 'next/link';
import { Shield, MessageCircle, CheckCircle } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background with orange glow */}
      <div className="absolute inset-0 bg-background"></div>
      <div className="absolute inset-0 gradient-orange-glow"></div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-12">
            Today Can Be Day 1
          </h2>

          <div className="text-xl md:text-2xl lg:text-[28px] text-foreground-muted leading-relaxed space-y-6 mb-16">
            <p>You&apos;ve read this far. That means part of you is ready.</p>
            <p>Not tomorrow. Not after &quot;one more bet.&quot; Now.</p>
            <p>The shame, the lying, the financial stress - it doesn&apos;t have to be your story anymore.</p>
            <p>Thousands of people just like you have taken this first step. Some of them felt hopeless. All of them are glad they started.</p>
          </div>

          <Link
            href="/auth"
            className="btn-primary animate-pulse-glow text-2xl md:text-[28px] py-6 md:py-7 px-16 md:px-20 rounded-2xl mb-8 inline-block"
          >
            Start My Recovery - Free
          </Link>

          <p className="text-lg text-foreground-muted mb-12">
            Takes 2 minutes. No credit card required.
          </p>

          {/* Trust Signals */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-foreground-muted">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>Your data is private</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Proven methods</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
