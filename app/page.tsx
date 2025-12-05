import PremiumHeader from "@/components/premium-header"
import PremiumHero from "@/components/premium-hero"
import ValuesSection from "@/components/values-section"
import LiveStatsSection from "@/components/live-stats-section"
import BenefitsSection from "@/components/benefits-section"
import HowItWorksSection from "@/components/how-it-works-section"
import TurkeyMapSection from "@/components/turkey-map-section"
import ImpactSection from "@/components/impact-section"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import PremiumFooter from "@/components/premium-footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <PremiumHeader />
      <PremiumHero />
      <ValuesSection />
      <LiveStatsSection />
      <BenefitsSection />
      <HowItWorksSection />
      <TurkeyMapSection />
      <ImpactSection />
      <AboutSection />
      <ContactSection />
      <PremiumFooter />
    </main>
  )
}