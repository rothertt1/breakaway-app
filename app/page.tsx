"use client";

import { useState } from "react";

// Custom SVG Icons
const WalletIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5z" />
    <path d="M16 12h.01" />
    <path d="M3 7l9-4 9 4" />
    <path d="M7 3v4M17 3v4" />
    <path d="M12 12l4-8M8 12l4-8" opacity="0.5" />
  </svg>
);

const CycleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12a9 9 0 1 1-9-9" />
    <path d="M21 3v9h-9" />
  </svg>
);

const ShameIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" />
    <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
    <path d="M8 8c0-2 1-4 4-4" opacity="0.5" />
    <path d="M10 21l2-3 2 3" opacity="0.5" />
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21C12 21 4 13.5 4 8.5C4 5.42 6.42 3 9.5 3c1.74 0 3.41.81 4.5 2.09A5.99 5.99 0 0 1 18.5 3C21.58 3 24 5.42 24 8.5c0 5-8 12.5-8 12.5" />
    <path d="M2 8.5C2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09" />
    <path d="M12 5.5v6M9 8.5h6" opacity="0.5" />
  </svg>
);

const ChartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18" />
    <path d="M7 12l4-4 4 4 5-5" />
    <circle cx="20" cy="7" r="2" />
  </svg>
);

const BrainIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0 .32 4.94v.02A2.5 2.5 0 0 0 8.5 15h.5" />
    <path d="M12 4.5a2.5 2.5 0 0 1 4.96-.46 2.5 2.5 0 0 1 1.98 3 2.5 2.5 0 0 1-.32 4.94v.02A2.5 2.5 0 0 1 15.5 15H15" />
    <path d="M8 15v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-5" />
    <path d="M12 15v7" />
  </svg>
);

const TrendingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

const SOSIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v4l2 2" />
    <path d="M8.5 8.5l1.5 1.5" opacity="0.5" />
    <path d="M15.5 8.5l-1.5 1.5" opacity="0.5" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const painPoints = [
    {
      icon: <WalletIcon />,
      title: "You've lost more than you can afford",
      body: "Started with $20 bets. Now you're hiding losses from people you love. The number keeps growing and you can't stop thinking about it.",
    },
    {
      icon: <CycleIcon />,
      title: "You've tried to quit before",
      body: "Made it a week. A month, even. Then one 'small' bet turned into a binge. You're tired of breaking promises to yourself.",
    },
    {
      icon: <ShameIcon />,
      title: "The shame is overwhelming",
      body: "You lie about where you've been. Delete apps, then re-download them. Watch games you don't care about just to have action. You're exhausted.",
    },
    {
      icon: <HeartIcon />,
      title: "Your relationships are suffering",
      body: "Missing family time to bet. Snapping at loved ones. They don't understand why you can't 'just stop.' Neither do you.",
    },
  ];

  const features = [
    {
      icon: <ChartIcon />,
      title: "Track Your Patterns (Not Just Bets)",
      description: "Log every urge - even when you resist it. See what triggers you. Knowledge is power.",
    },
    {
      icon: <BrainIcon />,
      title: "Daily Lessons That Actually Help",
      description: "5 minutes every morning. Real psychology, not lectures. Understand why your brain does this - and how to rewire it.",
    },
    {
      icon: <TrendingIcon />,
      title: "Your Recovery, Visualized",
      description: "Watch your clean streak grow. See money you're NOT losing. Track urges getting weaker. Progress you can see keeps you going.",
    },
    {
      icon: <SOSIcon />,
      title: "24/7 Crisis Support",
      description: "Tempted to bet? Hit the SOS button. Get instant support from our AI coach or your accountability buddy. You're never alone.",
    },
  ];

  const testimonials = [
    {
      initials: "MT",
      name: "Marcus T.",
      days: "67 days clean",
      quote: "I lost $23,000 before I found Breakaway. I'm 67 days clean now. My wife is talking to me again. I wake up without that pit in my stomach. If you're reading this, you can do it too.",
    },
    {
      initials: "JR",
      name: "Jennifer R.",
      days: "4 months clean",
      quote: "I thought I was the only woman with this problem. Breakaway showed me I wasn't alone. The daily lessons helped me understand my triggers. I haven't bet on a single game this season.",
    },
    {
      initials: "DK",
      name: "David K.",
      days: "91 days clean",
      quote: "Started with fantasy football. Ended up betting my rent money on Tuesday night baseball. Breakaway gave me the structure I needed. I've saved $4,800 in 3 months just by NOT gambling.",
    },
  ];

  const faqs = [
    {
      question: "What if I relapse?",
      answer: "Relapse is part of recovery for most people. Breakaway doesn't shame you - it helps you learn from it. Log what happened, identify the trigger, and keep going. Every day clean counts, even if it's not consecutive.",
    },
    {
      question: "Is my data private?",
      answer: "Completely. We don't share your gambling data with anyone. Period. Use a username, not your real name. Stay anonymous if you want.",
    },
    {
      question: "Do I have to quit completely?",
      answer: "That's up to you. Some people use Breakaway for complete abstinence. Others use it to regain control and bet responsibly. We support your goals, whatever they are.",
    },
    {
      question: "How is this different from therapy?",
      answer: "We're not therapy. We're a daily support tool based on proven psychology (CBT). Think of us as a companion between therapy sessions - or an affordable alternative if therapy isn't accessible right now.",
    },
    {
      question: "What if I don't have an accountability buddy?",
      answer: "No problem. Our AI crisis coach is available 24/7. Plus, you can connect with others in our community who understand what you're going through.",
    },
    {
      question: "Can I cancel anytime?",
      answer: "Absolutely. No contracts, no commitments. Cancel with one click whenever you want. We hope you'll stay because Breakaway helps - not because you're locked in.",
    },
  ];

  const freeFeatures = [
    "Track unlimited urges",
    "See your patterns",
    "3 recovery lessons",
    "Crisis resources",
    "Community (read-only)",
  ];

  const premiumFeatures = [
    "Everything in Free",
    "365 daily lessons",
    "Advanced insights",
    "AI crisis coach 24/7",
    "Post in community",
    "Accountability tools",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border-subtle">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-8 md:px-16 py-5">
          <span className="text-2xl md:text-3xl font-bold gradient-text">Breakaway</span>
          <a
            href="#pricing"
            className="btn-primary px-6 py-3 rounded-full text-base font-semibold text-white"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* ==================== HERO SECTION ==================== */}
      <section className="hero-gradient min-h-screen flex items-center justify-center pt-32 pb-24 px-8 md:px-16">
        <div className="max-w-[1200px] mx-auto text-center">
          {/* Main headline */}
          <h1 className="animate-fade-in text-[clamp(2.5rem,8vw,4.5rem)] md:text-[4.5rem] font-extrabold text-white mb-8 leading-[1.1] tracking-tight">
            You&apos;re Not Alone{" "}
            <span className="gradient-text">in This</span>
          </h1>

          {/* Subheadline - much larger */}
          <p className="animate-fade-in animate-delay-1 text-xl md:text-[1.75rem] text-foreground-muted mb-6 max-w-[900px] mx-auto leading-relaxed">
            You&apos;ve tried to stop. You&apos;ve promised yourself &quot;never again.&quot;
            But here you are, watching another game, feeling the urge.{" "}
            <span className="text-white font-medium">We get it. And we can help.</span>
          </p>

          {/* Emotional hook */}
          <p className="animate-fade-in animate-delay-2 text-lg md:text-xl text-foreground-subtle mb-14 max-w-[800px] mx-auto">
            Breakaway is a daily companion for people ready to break free from gambling -
            built by people who&apos;ve been exactly where you are.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in animate-delay-3">
            <a
              href="#pricing"
              className="btn-primary pulse-glow inline-block px-12 py-5 rounded-full text-xl md:text-2xl font-bold text-white"
            >
              Start Your Recovery - Free
            </a>
            <p className="mt-6 text-foreground-muted text-lg">
              No credit card. No judgment. Just support.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== PAIN SECTION ==================== */}
      <section className="section section-dark">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold text-center text-white mb-20">
            Does This Sound <span className="gradient-text">Familiar?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-[1000px] mx-auto mb-16">
            {painPoints.map((point, index) => (
              <article
                key={index}
                className="card p-10 md:p-12 lg:p-16"
              >
                <div className="icon-container mb-8">
                  {point.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight">
                  {point.title}
                </h3>
                <p className="text-foreground-muted text-base md:text-lg leading-relaxed">
                  {point.body}
                </p>
              </article>
            ))}
          </div>

          <p className="text-center text-xl md:text-2xl text-foreground-muted max-w-[700px] mx-auto leading-relaxed">
            If you&apos;re nodding your head, you&apos;re in the right place.
            <br />
            <span className="text-white font-medium">Let&apos;s change this story together.</span>
          </p>
        </div>
      </section>

      {/* ==================== TRANSFORMATION SECTION ==================== */}
      <section className="section section-elevated">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold text-center text-white mb-20">
            Imagine <span className="gradient-text">30 Days From Now</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-[1100px] mx-auto mb-16">
            {/* Before Card */}
            <div className="bg-background-card border-2 border-error/30 rounded-3xl p-10 md:p-14 lg:p-16">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 rounded-2xl bg-error/20 flex items-center justify-center">
                  <span className="text-error text-2xl">✗</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-error">Before</h3>
              </div>
              <ul className="space-y-6">
                {["Checking scores obsessively", "Hiding losses", "Chasing yesterday's bets", "Feeling powerless"].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="text-error flex-shrink-0"><XIcon /></span>
                    <span className="text-foreground-muted text-lg md:text-xl">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After Card */}
            <div className="bg-background-card border-2 border-success/30 rounded-3xl p-10 md:p-14 lg:p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-success/5 to-transparent pointer-events-none" />
              <div className="relative">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-14 h-14 rounded-2xl bg-success/20 flex items-center justify-center">
                    <span className="text-success text-2xl">✓</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-success">After</h3>
                </div>
                <ul className="space-y-6">
                  {["Waking up without regret", "Honest conversations", "Rebuilding savings", "In control again"].map((item, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <span className="text-success flex-shrink-0"><CheckIcon /></span>
                      <span className="text-white text-lg md:text-xl font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-2xl md:text-3xl text-white font-medium mb-10">
              This can be you. <span className="gradient-text">Start today.</span>
            </p>
            <a
              href="#pricing"
              className="btn-primary inline-block px-10 py-4 rounded-full text-lg font-semibold text-white"
            >
              Begin Your Journey
            </a>
          </div>
        </div>
      </section>

      {/* ==================== FEATURES SECTION ==================== */}
      <section className="section section-dark">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold text-center text-white mb-6">
            Your Daily Path to <span className="gradient-text">Freedom</span>
          </h2>
          <p className="text-center text-xl text-foreground-muted mb-20 max-w-[600px] mx-auto">
            Simple tools, powerful results. Here&apos;s how Breakaway helps you break free.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-[1100px] mx-auto">
            {features.map((feature, index) => (
              <article
                key={index}
                className="card p-10 md:p-12 lg:p-16"
              >
                <div className="icon-container icon-container-lg mb-10">
                  {feature.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-foreground-muted text-lg md:text-xl leading-relaxed">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS SECTION ==================== */}
      <section className="section section-elevated">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold text-center text-white mb-6">
            You&apos;re Not the First.{" "}
            <span className="gradient-text">You Won&apos;t Be the Last.</span>
          </h2>
          <p className="text-center text-xl text-foreground-muted mb-20 max-w-[600px] mx-auto">
            Real stories from people who took the same first step you&apos;re considering.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-[1200px] mx-auto">
            {testimonials.map((testimonial, index) => (
              <article
                key={index}
                className="card p-8 md:p-10 lg:p-12"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="avatar">{testimonial.initials}</div>
                  <div>
                    <p className="text-white font-bold text-lg">{testimonial.name}</p>
                    <p className="text-success text-base font-medium">{testimonial.days}</p>
                  </div>
                </div>
                <p className="text-foreground-muted text-lg leading-relaxed italic">
                  &quot;{testimonial.quote}&quot;
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PRICING SECTION ==================== */}
      <section id="pricing" className="section section-dark">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold text-center text-white mb-6">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-center text-xl text-foreground-muted mb-20 max-w-[500px] mx-auto">
            Start free. Upgrade when you&apos;re ready.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {/* Free Tier */}
            <div className="card p-10 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Start Your Journey
              </h3>
              <p className="text-4xl font-bold text-white mb-8">$0</p>

              <ul className="space-y-5 mb-10">
                {freeFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="text-success flex-shrink-0"><CheckIcon /></span>
                    <span className="text-foreground text-lg">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="btn-secondary w-full py-5 rounded-full text-lg font-semibold text-white">
                Get Started Free
              </button>
            </div>

            {/* Premium Tier */}
            <div className="card card-elevated p-10 md:p-12 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent-primary to-accent-secondary px-5 py-2 rounded-full text-sm font-bold text-white">
                POPULAR
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Full Recovery Program
              </h3>
              <p className="mb-1">
                <span className="text-4xl font-bold text-white">$14.99</span>
                <span className="text-foreground-muted text-lg">/month</span>
              </p>
              <p className="text-foreground-subtle text-base mb-8">
                or $89.99/year (save 50%)
              </p>

              <ul className="space-y-5 mb-10">
                {premiumFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="text-accent-primary flex-shrink-0"><CheckIcon /></span>
                    <span className="text-foreground text-lg">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="btn-primary w-full py-5 rounded-full text-lg font-bold text-white">
                Start 7-Day Free Trial
              </button>
            </div>
          </div>

          <p className="text-center text-xl text-foreground-muted mt-12">
            Most people start free, upgrade after seeing progress.
          </p>
        </div>
      </section>

      {/* ==================== FAQ SECTION ==================== */}
      <section className="section section-elevated">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold text-center text-white mb-6">
            Questions? <span className="gradient-text">We&apos;ve Got Answers.</span>
          </h2>
          <p className="text-center text-xl text-foreground-muted mb-16 max-w-[500px] mx-auto">
            Everything you need to know before getting started.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-background-card border border-border-subtle rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-white/[0.02] transition-colors"
                  aria-expanded={openFaq === index}
                >
                  <span className="text-lg md:text-xl font-semibold text-white pr-4">
                    {faq.question}
                  </span>
                  <span className="text-foreground-muted flex-shrink-0">
                    <ChevronIcon isOpen={openFaq === index} />
                  </span>
                </button>
                <div className={`faq-content ${openFaq === index ? 'open' : ''}`}>
                  <div className="px-6 md:px-8 pb-6 md:pb-8">
                    <p className="text-foreground-muted text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA SECTION ==================== */}
      <section className="section cta-gradient">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-white mb-10">
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
              The shame, the lying, the financial stress - it doesn&apos;t have to be your story anymore.
            </p>
            <p>
              Thousands of people just like you have taken this first step.
              Some of them felt hopeless.{" "}
              <span className="text-white font-medium">All of them are glad they started.</span>
            </p>
            <p className="text-white font-semibold text-2xl md:text-3xl pt-4">
              Join them.
            </p>
          </div>

          <a
            href="#pricing"
            className="btn-primary pulse-glow inline-block px-14 py-6 rounded-full text-xl md:text-2xl font-bold text-white mb-6"
          >
            Start My Recovery - Free
          </a>
          <p className="text-foreground-muted text-lg mb-12">
            Takes 2 minutes. No credit card required.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-foreground-subtle text-base">
            <span className="flex items-center gap-2">
              <span>🔒</span> Your data is private
            </span>
            <span className="hidden md:inline text-foreground-subtle/50">|</span>
            <span className="flex items-center gap-2">
              <span>💬</span> Cancel anytime
            </span>
            <span className="hidden md:inline text-foreground-subtle/50">|</span>
            <span className="flex items-center gap-2">
              <span>✓</span> Proven methods
            </span>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="py-12 px-8 md:px-16 border-t border-border-subtle bg-background">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <span className="text-2xl font-bold gradient-text">Breakaway</span>
          <nav className="flex items-center gap-8">
            <a href="#" className="text-foreground-muted hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground-muted hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="text-foreground-muted hover:text-white transition-colors">
              Contact
            </a>
            <a href="#" className="text-foreground-muted hover:text-white transition-colors">
              Support
            </a>
          </nav>
          <p className="text-foreground-subtle text-base">
            © 2024 Breakaway. Helping people break free.
          </p>
        </div>
      </footer>
    </div>
  );
}
