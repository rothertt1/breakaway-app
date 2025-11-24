'use client';

import { Wallet, Smartphone, Frown, HeartCrack } from 'lucide-react';

const cards = [
  {
    icon: Wallet,
    title: "Betting on games you don't even care about",
    body: "Tuesday night MACtion. Wednesday NBA. You're not watching for fun - you're watching because you've got action. You know it's stupid, but you can't stop checking the score."
  },
  {
    icon: Smartphone,
    title: "Delete the app, re-download it an hour later",
    body: "You've deleted DraftKings six times this month. Each time you promise yourself 'never again.' But Sunday morning rolls around and there you are, re-downloading it before kickoff."
  },
  {
    icon: Frown,
    title: "The shame is eating you alive",
    body: "You lie about where you've been. Clear your browser history. Check your bank account with dread. You're exhausted from hiding, but admitting the truth feels impossible."
  },
  {
    icon: HeartCrack,
    title: "Missing moments that matter",
    body: "Your kid's recital, your anniversary dinner, Sunday brunch with family - you're there physically, but mentally you're checking lines. They deserve your full attention. So do you."
  }
];

export default function Specificity() {
  return (
    <section className="section-padding bg-background-secondary">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Does This Sound Familiar?
          </h2>
          <p className="text-xl md:text-2xl text-foreground-muted">
            You&apos;re not the only one. Here&apos;s what we hear every day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="card-hover bg-background p-10 md:p-16 rounded-2xl border border-teal/30 shadow-lg"
              >
                <Icon className="w-16 h-16 text-teal mb-6" />
                <h3 className="text-2xl md:text-[28px] font-bold text-white mb-4 leading-tight">
                  {card.title}
                </h3>
                <p className="text-lg md:text-[18px] text-foreground-muted leading-relaxed">
                  {card.body}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-xl md:text-2xl font-bold text-white mb-4">
            If you&apos;re nodding your head, you&apos;re in the right place.
          </p>
          <p className="text-lg md:text-xl text-orange">
            Let&apos;s change this story together.
          </p>
        </div>
      </div>
    </section>
  );
}
