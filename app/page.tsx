export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="flex items-center justify-between px-6 md:px-12 py-6">
        <h1 className="text-2xl font-bold text-white">Breakaway</h1>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-foreground-muted hover:text-white transition-colors">
            How It Works
          </a>
          <a href="#pricing" className="text-foreground-muted hover:text-white transition-colors">
            Pricing
          </a>
          <button className="bg-accent hover:bg-accent-hover px-5 py-2.5 rounded-lg font-semibold text-white transition-colors">
            Get Started
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              Take Control of Your Gambling
            </h2>
            <p className="text-xl md:text-2xl text-foreground-muted mb-8 leading-relaxed">
              Daily lessons, urge tracking, and peer support to help you quit betting - one day at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-accent hover:bg-accent-hover glow-accent px-8 py-4 rounded-xl text-lg font-semibold text-white transition-all">
                Start Free - No Credit Card Required
              </button>
            </div>
            <p className="text-foreground-muted text-sm mt-4">
              Join 10,000+ people on their recovery journey
            </p>
          </div>

          {/* Hero Image - Sunrise/Horizon */}
          <div className="relative order-first md:order-last">
            <div className="sunrise-gradient rounded-3xl aspect-[4/3] w-full overflow-hidden relative">
              {/* Horizon line */}
              <div className="absolute bottom-[35%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

              {/* Sun */}
              <div className="absolute bottom-[30%] left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-gradient-to-b from-yellow-200 to-orange-300 blur-sm opacity-80"></div>
              <div className="absolute bottom-[32%] left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-b from-yellow-100 to-yellow-200"></div>

              {/* Clouds */}
              <div className="absolute top-[20%] left-[15%] w-32 h-8 bg-white/10 rounded-full blur-md"></div>
              <div className="absolute top-[30%] right-[20%] w-24 h-6 bg-white/10 rounded-full blur-md"></div>

              {/* Reflection on water */}
              <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[#1e3a5f]/80 to-transparent"></div>
              <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-20 h-32 bg-gradient-to-b from-yellow-200/30 to-transparent blur-sm"></div>

              {/* Text overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white/80 text-sm font-medium">
                A new day, a new beginning
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="px-6 md:px-12 py-20 bg-background-secondary">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            How It Works
          </h3>
          <p className="text-foreground-muted text-center text-lg mb-16 max-w-2xl mx-auto">
            Four simple tools to help you break free from gambling
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Track Your Urges */}
            <div className="bg-card-bg border border-card-border rounded-2xl p-6 card-hover">
              <div className="w-14 h-14 bg-accent-soft rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Track Your Urges</h4>
              <p className="text-foreground-muted">See your patterns. Understand your triggers.</p>
            </div>

            {/* Daily Lessons */}
            <div className="bg-card-bg border border-card-border rounded-2xl p-6 card-hover">
              <div className="w-14 h-14 bg-accent-soft rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Daily Lessons</h4>
              <p className="text-foreground-muted">5-minute reads based on proven psychology.</p>
            </div>

            {/* Build Your Streak */}
            <div className="bg-card-bg border border-card-border rounded-2xl p-6 card-hover">
              <div className="w-14 h-14 bg-accent-soft rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Build Your Streak</h4>
              <p className="text-foreground-muted">Every day clean is a victory.</p>
            </div>

            {/* Join the Community */}
            <div className="bg-card-bg border border-card-border rounded-2xl p-6 card-hover">
              <div className="w-14 h-14 bg-accent-soft rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Join the Community</h4>
              <p className="text-foreground-muted">You&apos;re not alone in this.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 md:px-12 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-card-bg border border-card-border">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">10,000+</div>
              <p className="text-foreground-muted text-lg">People taking control</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-card-bg border border-card-border">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">$2,847</div>
              <p className="text-foreground-muted text-lg">Average savings not lost</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-card-bg border border-card-border">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">78%</div>
              <p className="text-foreground-muted text-lg">Stay clean after 30 days</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-6 md:px-12 py-20 bg-background-secondary">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            Simple, Transparent Pricing
          </h3>
          <p className="text-foreground-muted text-center text-lg mb-12">
            Start free. Upgrade when you&apos;re ready.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Free Plan */}
            <div className="bg-card-bg border border-card-border rounded-2xl p-8">
              <div className="text-lg font-semibold text-foreground-muted mb-2">Free</div>
              <div className="text-4xl font-bold text-white mb-6">$0<span className="text-lg font-normal text-foreground-muted">/month</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground-muted">Urge tracker</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground-muted">3 daily lessons</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground-muted">Community (read-only)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground-muted">Streak tracking</span>
                </li>
              </ul>
              <button className="w-full py-3 rounded-xl font-semibold border-2 border-card-border text-white hover:border-accent transition-colors">
                Get Started Free
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-card-bg border-2 border-accent rounded-2xl p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-sm font-semibold px-4 py-1 rounded-full">
                Most Popular
              </div>
              <div className="text-lg font-semibold text-accent mb-2">Premium</div>
              <div className="text-4xl font-bold text-white mb-6">$14.99<span className="text-lg font-normal text-foreground-muted">/month</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground-muted">Everything in Free</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground-muted">Unlimited daily lessons</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground-muted">Full community access</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground-muted">Advanced analytics</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground-muted">Priority support</span>
                </li>
              </ul>
              <button className="w-full py-3 rounded-xl font-semibold bg-accent hover:bg-accent-hover text-white transition-colors">
                Start Premium
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 md:px-12 py-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            Stories of Recovery
          </h3>
          <p className="text-foreground-muted text-center text-lg mb-12">
            Real people, real progress
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-card-bg border border-card-border rounded-2xl p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-premium-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-foreground-muted mb-4 italic">&quot;45 days clean and counting. The daily lessons helped me understand why I was gambling in the first place.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent-soft rounded-full flex items-center justify-center text-accent font-semibold">M</div>
                <div>
                  <div className="text-white font-medium">Marcus T.</div>
                  <div className="text-foreground-muted text-sm">45-day streak</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-card-bg border border-card-border rounded-2xl p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-premium-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-foreground-muted mb-4 italic">&quot;The urge tracker was a game changer. I finally saw the patterns I was blind to for years.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent-soft rounded-full flex items-center justify-center text-accent font-semibold">S</div>
                <div>
                  <div className="text-white font-medium">Sarah K.</div>
                  <div className="text-foreground-muted text-sm">90-day streak</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-card-bg border border-card-border rounded-2xl p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-premium-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-foreground-muted mb-4 italic">&quot;The community kept me accountable. Knowing others were on the same journey made all the difference.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent-soft rounded-full flex items-center justify-center text-accent font-semibold">J</div>
                <div>
                  <div className="text-white font-medium">James R.</div>
                  <div className="text-foreground-muted text-sm">120-day streak</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-6 md:px-12 py-20 bg-background-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start Your Recovery Today
          </h3>
          <p className="text-foreground-muted text-lg mb-8">
            Every journey begins with a single step. Take yours now.
          </p>
          <button className="bg-accent hover:bg-accent-hover glow-accent px-10 py-4 rounded-xl text-lg font-semibold text-white transition-all">
            Start Your Recovery Today - Free
          </button>
          <p className="text-foreground-muted text-sm mt-4">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-12 border-t border-card-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold text-white">Breakaway</div>
            <div className="flex items-center gap-8 text-foreground-muted text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="text-center text-foreground-muted text-sm mt-8">
            &copy; {new Date().getFullYear()} Breakaway. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
