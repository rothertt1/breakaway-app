'use client';

import { Shield, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen bg-background relative overflow-hidden">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-6 max-w-[1440px] mx-auto">
        <div className="text-2xl md:text-3xl font-bold text-orange">Breakaway</div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-foreground-muted hover:text-foreground transition-colors">How It Works</a>
          <a href="#pricing" className="text-foreground-muted hover:text-foreground transition-colors">Pricing</a>
          <a href="#" className="text-foreground-muted hover:text-foreground transition-colors">Login</a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex flex-col lg:flex-row items-center px-6 md:px-12 lg:px-20 py-12 lg:py-24 max-w-[1440px] mx-auto">
        {/* Left Side - Content (60%) */}
        <div className="w-full lg:w-[60%] mb-12 lg:mb-0 lg:pr-12">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-8">
            You&apos;re Not Alone <span className="text-orange">in This</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-[28px] text-foreground-muted leading-relaxed mb-10 max-w-2xl">
            You&apos;ve tried to stop. You&apos;ve promised yourself &quot;never again.&quot; But here you are, watching another game, feeling the urge.
          </p>

          <p className="text-2xl md:text-3xl font-bold text-white mb-6">
            We get it. And we can help.
          </p>

          <p className="text-lg md:text-xl text-foreground-muted mb-12 max-w-2xl">
            Breakaway is a daily companion for people ready to break free from gambling - built by people who&apos;ve been exactly where you are.
          </p>

          <button className="btn-primary animate-pulse-glow text-xl md:text-2xl py-5 px-10 md:px-16 rounded-xl mb-6">
            Start Your Recovery - Free
          </button>

          <p className="text-lg text-foreground-muted mb-6">
            No credit card. No judgment. Just support.
          </p>

          <div className="flex items-center gap-2 text-foreground-muted">
            <Shield className="w-5 h-5 text-green" />
            <CheckCircle className="w-4 h-4 text-green" />
            <span className="text-base">Trusted by 10,000+ people in recovery</span>
          </div>
        </div>

        {/* Right Side - Visual (40%) */}
        <div className="w-full lg:w-[40%] flex justify-center items-center">
          {/* iPhone Mockup */}
          <div className="animate-float relative">
            <div className="relative w-[280px] md:w-[320px] h-[560px] md:h-[640px] bg-background-secondary rounded-[50px] p-3 shadow-2xl border border-gray-700/50"
                 style={{
                   boxShadow: '0 0 60px rgba(249, 115, 22, 0.2), 0 25px 50px rgba(0, 0, 0, 0.5)',
                   transform: 'rotate(5deg)'
                 }}>
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-background rounded-b-2xl z-10"></div>

              {/* Screen */}
              <div className="w-full h-full bg-background rounded-[40px] overflow-hidden p-6 flex flex-col">
                {/* App Header */}
                <div className="text-center mb-8 pt-6">
                  <p className="text-foreground-muted text-sm mb-1">Good Morning</p>
                  <h3 className="text-white text-xl font-bold">Welcome Back</h3>
                </div>

                {/* Streak Card */}
                <div className="gradient-orange rounded-2xl p-6 mb-6 text-center">
                  <p className="text-white/80 text-sm mb-1">Current Streak</p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-4xl">🔥</span>
                    <span className="text-5xl font-bold text-white">23</span>
                  </div>
                  <p className="text-white/90 text-lg mt-1">Days Clean</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-background-secondary rounded-xl p-4 text-center">
                    <p className="text-foreground-muted text-xs mb-1">Money Saved</p>
                    <p className="text-green text-xl font-bold">$1,847</p>
                  </div>
                  <div className="bg-background-secondary rounded-xl p-4 text-center">
                    <p className="text-foreground-muted text-xs mb-1">Urges Resisted</p>
                    <p className="text-teal text-xl font-bold">47</p>
                  </div>
                </div>

                {/* Daily Lesson */}
                <div className="bg-background-secondary rounded-xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center">
                    <span className="text-lg">📚</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Today&apos;s Lesson</p>
                    <p className="text-foreground-muted text-xs">Understanding Triggers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
