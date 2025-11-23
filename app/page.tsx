"use client";

import { useState } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const painPoints = [
    {
      icon: "💸",
      title: "You've lost more than you can afford",
      body: "Started with $20 bets. Now you're hiding losses from people you love. The number keeps growing and you can't stop thinking about it.",
    },
    {
      icon: "🔁",
      title: "You've tried to quit before",
      body: "Made it a week. A month, even. Then one 'small' bet turned into a binge. You're tired of breaking promises to yourself.",
    },
    {
      icon: "😔",
      title: "The shame is overwhelming",
      body: "You lie about where you've been. Delete apps, then re-download them. Watch games you don't care about just to have action. You're exhausted.",
    },
    {
      icon: "❤️‍🩹",
      title: "Your relationships are suffering",
      body: "Missing family time to bet. Snapping at loved ones. They don't understand why you can't 'just stop.' Neither do you.",
    },
  ];

  const features = [
    {
      icon: "📊",
      title: "Track Your Patterns (Not Just Bets)",
      description:
        "Log every urge - even when you resist it. See what triggers you. Knowledge is power.",
    },
    {
      icon: "🧠",
      title: "Daily Lessons That Actually Help",
      description:
        "5 minutes every morning. Real psychology, not lectures. Understand why your brain does this - and how to rewire it.",
    },
    {
      icon: "📈",
      title: "Your Recovery, Visualized",
      description:
        "Watch your clean streak grow. See money you're NOT losing. Track urges getting weaker. Progress you can see keeps you going.",
    },
    {
      icon: "🆘",
      title: "24/7 Crisis Support",
      description:
        "Tempted to bet? Hit the SOS button. Get instant support from our AI coach or your accountability buddy. You're never alone.",
    },
  ];

  const testimonials = [
    {
      name: "Marcus T.",
      days: "67 days clean",
      image: "👨🏽",
      quote:
        "I lost $23,000 before I found Breakaway. I'm 67 days clean now. My wife is talking to me again. I wake up without that pit in my stomach. If you're reading this, you can do it too.",
    },
    {
      name: "Jennifer R.",
      days: "4 months clean",
      image: "👩🏻",
      quote:
        "I thought I was the only woman with this problem. Breakaway showed me I wasn't alone. The daily lessons helped me understand my triggers. I haven't bet on a single game this season.",
    },
    {
      name: "David K.",
      days: "91 days clean",
      image: "👨🏼",
      quote:
        "Started with fantasy football. Ended up betting my rent money on Tuesday night baseball. Breakaway gave me the structure I needed. I've saved $4,800 in 3 months just by NOT gambling.",
    },
  ];

  const faqs = [
    {
      question: "What if I relapse?",
      answer:
        "Relapse is part of recovery for most people. Breakaway doesn't shame you - it helps you learn from it. Log what happened, identify the trigger, and keep going. Every day clean counts, even if it's not consecutive.",
    },
    {
      question: "Is my data private?",
      answer:
        "Completely. We don't share your gambling data with anyone. Period. Use a username, not your real name. Stay anonymous if you want.",
    },
    {
      question: "Do I have to quit completely?",
      answer:
        "That's up to you. Some people use Breakaway for complete abstinence. Others use it to regain control and bet responsibly. We support your goals, whatever they are.",
    },
    {
      question: "How is this different from therapy?",
      answer:
        "We're not therapy. We're a daily support tool based on proven psychology (CBT). Think of us as a companion between therapy sessions - or an affordable alternative if therapy isn't accessible right now.",
    },
    {
      question: "What if I don't have anyone to be my accountability buddy?",
      answer:
        "No problem. Our AI crisis coach is available 24/7. Plus, you can connect with others in our community who understand what you're going through.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-5">
          <h1 className="text-2xl md:text-3xl font-bold gradient-text">
            Breakaway
          </h1>
          <a
            href="#pricing"
            className="bg-hope-primary hover:bg-hope-primary/90 px-6 py-3 rounded-full text-base font-semibold text-white transition-all"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* ==================== */}
      {/* HERO SECTION */}
      {/* ==================== */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 px-6 md:px-12 overflow-hidden">
        {/* Sunrise background effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-hope-primary/10" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-hope-primary/20 via-hope-secondary/10 to-transparent" />

        {/* Animated glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-hope-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-hope-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Trust badge */}
          <div className="fade-in-up inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 mb-10">
            <span className="text-success-green text-sm">●</span>
            <span className="text-foreground-muted text-base">
              Join Our Community
            </span>
          </div>

          {/* Main headline */}
          <h1 className="fade-in-up stagger-1 text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            You&apos;re Not Alone
            <br />
            <span className="gradient-text">in This</span>
          </h1>

          {/* Subheadline */}
          <p className="fade-in-up stagger-2 text-xl md:text-2xl lg:text-3xl text-foreground-muted mb-8 max-w-4xl mx-auto leading-relaxed">
            You&apos;ve tried to stop. You&apos;ve promised yourself &quot;never
            again.&quot; But here you are, watching another game, feeling the
            urge.{" "}
            <span className="text-white font-medium">
              We get it. And we can help.
            </span>
          </p>

          {/* Emotional hook */}
          <p className="fade-in-up stagger-3 text-lg md:text-xl text-foreground-muted/80 mb-12 max-w-3xl mx-auto">
            Breakaway is a daily companion for people ready to break free from
            gambling - built by people who&apos;ve been exactly where you are.
          </p>

          {/* CTA */}
          <div className="fade-in-up stagger-4">
            <a
              href="#pricing"
              className="cta-pulse inline-block bg-gradient-to-r from-hope-primary to-hope-secondary hover:from-hope-primary/90 hover:to-hope-secondary/90 px-10 py-5 rounded-full text-xl md:text-2xl font-bold text-white transition-all transform hover:scale-105"
            >
              Start Your Recovery - Free
            </a>
            <p className="mt-5 text-foreground-muted text-base">
              No credit card. No judgment. Just support.
            </p>
          </div>

          {/* Hero image text overlay */}
          <div className="mt-20 relative">
            <div className="w-full h-48 md:h-64 bg-gradient-to-b from-hope-primary/30 via-hope-secondary/20 to-transparent rounded-3xl flex items-center justify-center">
              <p className="text-2xl md:text-4xl font-light text-white/90 italic">
                &quot;A new day. A new beginning.&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-8 h-8 text-foreground-muted"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* ==================== */}
      {/* THE PAIN SECTION */}
      {/* ==================== */}
      <section className="section-pain py-28 md:py-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-20">
            Does This Sound <span className="gradient-text">Familiar?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-16">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="pain-card bg-pain-card rounded-2xl p-8 md:p-10"
              >
                <div className="text-5xl mb-6">{point.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  {point.title}
                </h3>
                <p className="text-foreground-muted text-lg leading-relaxed">
                  {point.body}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-xl md:text-2xl text-foreground-muted max-w-3xl mx-auto">
            If you&apos;re nodding your head, you&apos;re in the right place.
            <br />
            <span className="text-white font-medium">
              Let&apos;s change this story together.
            </span>
          </p>
        </div>
      </section>

      {/* ==================== */}
      {/* THE TRANSFORMATION SECTION */}
      {/* ==================== */}
      <section className="section-hope py-28 md:py-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-20">
            Imagine <span className="gradient-text">30 Days From Now</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16">
            {/* Before - Left side */}
            <div className="bg-pain-card/50 border border-pain-border rounded-3xl p-10 md:p-12">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
                  <span className="text-3xl">😰</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-red-400">
                  Before
                </h3>
              </div>
              <ul className="space-y-6">
                {[
                  "Checking scores obsessively",
                  "Hiding losses",
                  "Chasing yesterday's bets",
                  "Feeling powerless",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="text-red-400 text-xl">✗</span>
                    <span className="text-foreground-muted text-lg md:text-xl">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After - Right side */}
            <div className="bg-gradient-to-br from-hope-primary/10 to-hope-secondary/10 border border-hope-primary/30 rounded-3xl p-10 md:p-12">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-16 h-16 bg-success-green/20 rounded-full flex items-center justify-center">
                  <span className="text-3xl">😌</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-success-green">
                  After
                </h3>
              </div>
              <ul className="space-y-6">
                {[
                  "Waking up without regret",
                  "Honest conversations",
                  "Rebuilding savings",
                  "In control again",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="text-success-green text-xl">✓</span>
                    <span className="text-white text-lg md:text-xl font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <p className="text-2xl md:text-3xl text-white font-medium mb-8">
              This can be you.{" "}
              <span className="gradient-text">Start today.</span>
            </p>
            <a
              href="#pricing"
              className="inline-block bg-gradient-to-r from-hope-primary to-hope-secondary px-8 py-4 rounded-full text-lg font-semibold text-white hover:opacity-90 transition-opacity"
            >
              Begin Your Journey
            </a>
          </div>
        </div>
      </section>

      {/* ==================== */}
      {/* HOW IT WORKS SECTION */}
      {/* ==================== */}
      <section className="py-28 md:py-40 px-6 md:px-12 bg-background-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-8">
            Your Daily Path to <span className="gradient-text">Freedom</span>
          </h2>
          <p className="text-center text-xl text-foreground-muted mb-20 max-w-2xl mx-auto">
            Simple tools, powerful results. Here&apos;s how Breakaway helps you
            break free.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card bg-background border border-white/5 rounded-3xl p-10 md:p-12"
              >
                <div className="text-6xl md:text-7xl mb-8">{feature.icon}</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  {feature.title}
                </h3>
                <p className="text-foreground-muted text-lg md:text-xl leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== */}
      {/* TESTIMONIALS SECTION */}
      {/* ==================== */}
      <section className="py-28 md:py-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-8">
            You&apos;re Not the First.{" "}
            <span className="gradient-text">You Won&apos;t Be the Last.</span>
          </h2>
          <p className="text-center text-xl text-foreground-muted mb-20 max-w-2xl mx-auto">
            Real stories from people who took the same first step you&apos;re
            considering.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card bg-background-light border border-white/5 rounded-3xl p-8 md:p-10"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-hope-primary to-hope-secondary rounded-full flex items-center justify-center text-3xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-success-green text-base font-medium">
                      {testimonial.days}
                    </p>
                  </div>
                </div>
                <p className="text-foreground-muted text-lg leading-relaxed italic">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== */}
      {/* PRICING SECTION */}
      {/* ==================== */}
      <section
        id="pricing"
        className="py-28 md:py-40 px-6 md:px-12 bg-background-light"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-8">
            Start Free.{" "}
            <span className="gradient-text">Upgrade When You&apos;re Ready.</span>
          </h2>
          <p className="text-center text-xl text-foreground-muted mb-20 max-w-2xl mx-auto">
            Most people start free, upgrade after they see progress. No
            pressure.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {/* Free tier */}
            <div className="pricing-card bg-background border border-white/10 rounded-3xl p-10 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Start Your Journey
              </h3>
              <p className="text-foreground-muted text-lg mb-8">Free forever</p>

              <ul className="space-y-5 mb-10">
                {[
                  "Track unlimited urges",
                  "See your patterns",
                  "3 recovery lessons",
                  "Crisis resources",
                  "Community (read-only)",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="text-success-green text-xl">✓</span>
                    <span className="text-foreground text-lg">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-white/10 hover:bg-white/20 border border-white/20 px-8 py-5 rounded-full text-lg font-semibold text-white transition-all">
                Get Started Free
              </button>
            </div>

            {/* Premium tier */}
            <div className="pricing-card pricing-premium rounded-3xl p-10 md:p-12 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-hope-primary to-hope-secondary px-5 py-2 rounded-full text-sm font-bold text-white">
                MOST POPULAR
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Full Recovery Program
              </h3>
              <p className="text-foreground-muted text-lg mb-2">
                <span className="text-4xl font-bold text-white">$14.99</span>
                /month
              </p>
              <p className="text-foreground-muted text-base mb-8">
                or $89.99/year (save 50%)
              </p>

              <ul className="space-y-5 mb-10">
                {[
                  "Everything in Free",
                  "365 daily lessons",
                  "Advanced insights",
                  "AI crisis coach 24/7",
                  "Post in community",
                  "Accountability tools",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="text-hope-primary text-xl">✓</span>
                    <span className="text-foreground text-lg">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="cta-pulse w-full bg-gradient-to-r from-hope-primary to-hope-secondary hover:from-hope-primary/90 hover:to-hope-secondary/90 px-8 py-5 rounded-full text-lg font-bold text-white transition-all">
                Start 7-Day Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== */}
      {/* FAQ SECTION */}
      {/* ==================== */}
      <section className="py-28 md:py-40 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-8">
            Questions?{" "}
            <span className="gradient-text">We&apos;ve Got Answers.</span>
          </h2>
          <p className="text-center text-xl text-foreground-muted mb-20 max-w-2xl mx-auto">
            Everything you need to know before getting started.
          </p>

          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="faq-item bg-background-light border border-white/5 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-7 md:p-8 text-left"
                >
                  <span className="text-lg md:text-xl font-semibold text-white pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={`text-hope-primary text-2xl transition-transform ${
                      openFaq === index ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-7 md:px-8 pb-7 md:pb-8">
                    <p className="text-foreground-muted text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== */}
      {/* FINAL CTA SECTION */}
      {/* ==================== */}
      <section className="py-28 md:py-40 px-6 md:px-12 bg-gradient-to-b from-background to-hope-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10">
            Today Can Be <span className="gradient-text">Day 1</span>
          </h2>

          <div className="text-xl md:text-2xl text-foreground-muted leading-relaxed space-y-6 mb-14">
            <p>
              You&apos;ve read this far. That means part of you is ready.
              <br />
              Not tomorrow. Not after &quot;one more bet.&quot;{" "}
              <span className="text-white font-medium">Now.</span>
            </p>
            <p>
              The shame, the lying, the financial stress - it doesn&apos;t have
              to be your story anymore.
            </p>
            <p>
              Thousands of people just like you have taken this first step. Some
              of them felt hopeless.{" "}
              <span className="text-white font-medium">
                All of them are glad they started.
              </span>
            </p>
            <p className="text-white font-semibold text-2xl md:text-3xl pt-4">
              Join them.
            </p>
          </div>

          <a
            href="#pricing"
            className="cta-pulse inline-block bg-gradient-to-r from-hope-primary to-hope-secondary hover:from-hope-primary/90 hover:to-hope-secondary/90 px-12 py-6 rounded-full text-xl md:text-2xl font-bold text-white transition-all transform hover:scale-105 mb-6"
          >
            Start My Recovery - Free
          </a>
          <p className="text-foreground-muted text-lg mb-10">
            Takes 2 minutes. No credit card required.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-foreground-muted text-base">
            <span className="flex items-center gap-2">
              <span>🔒</span> Your data is private
            </span>
            <span className="hidden md:inline">|</span>
            <span className="flex items-center gap-2">
              <span>💬</span> Cancel anytime
            </span>
            <span className="hidden md:inline">|</span>
            <span className="flex items-center gap-2">
              <span>✓</span> Proven methods
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-foreground-muted text-base">
            © 2024 Breakaway. You&apos;re not alone.
          </p>
          <div className="flex items-center gap-8">
            <a
              href="#"
              className="text-foreground-muted hover:text-white transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-foreground-muted hover:text-white transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-foreground-muted hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
