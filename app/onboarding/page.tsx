'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useOnboarding } from '@/lib/stores/onboardingStore';
import Welcome from '@/components/onboarding/Welcome';
import QuickQuiz from '@/components/onboarding/QuickQuiz';
import AIAnalysis from '@/components/onboarding/AIAnalysis';
import PremiumUpsell from '@/components/onboarding/PremiumUpsell';
import { createBrowserClient } from '@/lib/supabase-browser';
import { ChevronLeft } from 'lucide-react';

export default function OnboardingPage() {
  const router = useRouter();
  const { currentStep, prevStep, isComplete } = useOnboarding();

  // Check authentication
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const supabase = createBrowserClient();
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) {
          router.push('/auth');
        }
      } catch (error) {
        console.error('Auth check error:', error);
        router.push('/auth');
      }
    };
    checkAuth();
  }, [router]);

  // Redirect if onboarding is complete
  useEffect(() => {
    if (isComplete) {
      router.push('/dashboard');
    }
  }, [isComplete, router]);

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-background-secondary z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-orange to-orange-light"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Back Button */}
      {currentStep > 1 && (
        <button
          onClick={prevStep}
          className="fixed top-6 left-6 z-40 flex items-center gap-2 text-foreground-muted hover:text-white transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
      )}

      {/* Main Content */}
      <main className="pt-12">
        {currentStep === 1 && <Welcome />}
        {currentStep === 2 && <QuickQuiz />}
        {currentStep === 3 && <AIAnalysis />}
        {currentStep === 4 && <PremiumUpsell />}
      </main>
    </div>
  );
}
