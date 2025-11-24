'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What if I relapse?",
    answer: "Relapse is part of recovery for most people. Breakaway doesn't shame you - it helps you learn from it. Log what happened, identify the trigger, and keep going. Every day clean counts, even if it's not consecutive. Your progress doesn't disappear."
  },
  {
    question: "Is my data private?",
    answer: "Completely. We don't share your gambling data with anyone. Period. Use a username, not your real name. Stay anonymous if you want. We're HIPAA-compliant and take your privacy seriously."
  },
  {
    question: "Do I have to quit completely?",
    answer: "That's up to you. Some people use Breakaway for complete abstinence. Others use it to regain control and bet responsibly. We support your goals, whatever they are. No judgment."
  },
  {
    question: "How is this different from therapy?",
    answer: "We're not therapy and don't claim to be. We're a daily support tool based on proven psychology (CBT). Think of us as a companion between therapy sessions - or an affordable alternative if therapy isn't accessible right now. For serious cases, we always recommend professional help."
  },
  {
    question: "What if I don't have anyone to be my accountability buddy?",
    answer: "No problem. Our AI crisis coach is available 24/7. Plus, you can connect with others in our community who understand what you're going through. You don't need to have someone in your life to get support."
  },
  {
    question: "Can I really trust an app to help with this?",
    answer: "Fair question. We're not magic. We're tools based on CBT (cognitive behavioral therapy) - the same techniques used by professional counselors. Our data shows 78% of users who engage daily stay clean past 30 days. But you have to do the work. We just make it easier."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-background-secondary">
      <div className="max-w-[900px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Questions? We&apos;ve Got Answers.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-background rounded-xl overflow-hidden"
            >
              <button
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg md:text-xl font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-orange flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}>
                <p className="px-6 md:px-8 pb-6 text-lg text-foreground-muted leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
