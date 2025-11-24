'use client';

import { BarChart3, Brain, TrendingUp, LifeBuoy } from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: "Track Your Patterns (Not Just Bets)",
    body: "Log every urge - even when you resist it. See what triggers you, when you're most vulnerable, and how you're improving. Knowledge is power."
  },
  {
    icon: Brain,
    title: "Daily Lessons That Actually Help",
    body: "5 minutes every morning. Real psychology, not lectures. Understand why your brain does this - and how to rewire it. 365 days of content."
  },
  {
    icon: TrendingUp,
    title: "Your Recovery, Visualized",
    body: "Watch your clean streak grow. See money you're NOT losing. Track urges getting weaker. Progress you can see keeps you going."
  },
  {
    icon: LifeBuoy,
    title: "24/7 Crisis Support",
    body: "Tempted to bet? Hit the SOS button. Get instant support from our AI coach or your accountability buddy. You're never alone."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-background-secondary">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Your Daily Path to Freedom
          </h2>
          <p className="text-xl md:text-2xl text-foreground-muted max-w-3xl mx-auto">
            Simple tools, powerful results. Here&apos;s how Breakaway helps you break free.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="card-hover bg-background p-10 md:p-16 rounded-2xl shadow-lg"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-teal/20 flex items-center justify-center mb-8">
                  <Icon className="w-10 h-10 md:w-12 md:h-12 text-teal" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg md:text-xl text-foreground-muted leading-relaxed">
                  {feature.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
