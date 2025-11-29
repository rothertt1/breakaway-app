'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { AnimatePresence } from 'framer-motion'
import { useOnboarding } from '@/lib/stores/onboardingStore'
import WelcomeScreen from '@/components/onboarding/WelcomeScreen'
import PersonalizationScreen from '@/components/onboarding/PersonalizationScreen'
import ProductShowcase from '@/components/onboarding/ProductShowcase'
import RealityCheck from '@/components/onboarding/RealityCheck'
import PremiumUpsell from '@/components/onboarding/PremiumUpsell'

export default function OnboardingPage() {
  const router = useRouter()
  const { currentStep, isComplete } = useOnboarding()

  // Redirect to dashboard if onboarding is complete
  useEffect(() => {
    if (isComplete) {
      // TODO: Save onboarding data to database before redirecting
      router.push('/dashboard')
    }
  }, [isComplete, router])

  // Render the current screen based on step
  const renderScreen = () => {
    switch (currentStep) {
      case 1:
        return <WelcomeScreen key="welcome" />
      case 2:
        return <PersonalizationScreen key="personalization" />
      case 3:
        return <ProductShowcase key="product" />
      case 4:
        return <RealityCheck key="reality" />
      case 5:
        return <PremiumUpsell key="premium" />
      default:
        return <WelcomeScreen key="welcome" />
    }
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <AnimatePresence mode="wait">
        {renderScreen()}
      </AnimatePresence>
    </div>
  )
}
