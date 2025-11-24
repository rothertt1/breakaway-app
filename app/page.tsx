import {
  Hero,
  Specificity,
  ScientificProof,
  Transformation,
  HowItWorks,
  SocialProof,
  Pricing,
  FAQ,
  FinalCTA,
  Footer
} from '@/components/sections';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Hero />
      <Specificity />
      <ScientificProof />
      <Transformation />
      <HowItWorks />
      <SocialProof />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
