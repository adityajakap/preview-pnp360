import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/hero/HeroSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { ReportingSuiteSection } from '@/components/sections/ReportingSuiteSection';
import { CoreBenefitsSection } from '@/components/sections/CoreBenefitsSection';
import { BeforeAfterSection } from '@/components/sections/BeforeAfterSection';
import { CampaignRoiSection } from '@/components/sections/CampaignRoiSection';
import { PersonasSection } from '@/components/sections/PersonasSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { TrustSecuritySection } from '@/components/sections/TrustSecuritySection';
import { FaqSection } from '@/components/sections/FaqSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { Footer } from '@/components/layout/Footer';
import { SectionReveal } from '@/components/ui/SectionReveal';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans">
      <Navbar />
      <main className="flex-1">
        {/* Section 2: Hero */}
        <HeroSection />

        {/* Section 3: How It Works */}
        <SectionReveal>
          <HowItWorksSection />
        </SectionReveal>

        {/* Section 4: Feature Highlights (Key Features / 6-Card Bento Grid) */}
        <SectionReveal>
          <ReportingSuiteSection />
        </SectionReveal>

        {/* Section 5: Core Benefits (Turn Noise Into Knowledge) */}
        <SectionReveal>
          <CoreBenefitsSection />
        </SectionReveal>

        {/* Section 6: Before vs. After (Manual vs. Automated) */}
        <SectionReveal>
          <BeforeAfterSection />
        </SectionReveal>

        {/* Section 6: Campaign ROI Attribution */}
        <SectionReveal>
          <CampaignRoiSection />
        </SectionReveal>

        {/* Section 7: Personas / Solutions */}
        <SectionReveal>
          <PersonasSection />
        </SectionReveal>

        {/* Section 8: Pricing */}
        <SectionReveal>
          <PricingSection />
        </SectionReveal>

        {/* Section 9: Enterprise Trust & Data Privacy */}
        <SectionReveal>
          <TrustSecuritySection />
        </SectionReveal>

        {/* Section 10: FAQ */}
        <SectionReveal>
          <FaqSection />
        </SectionReveal>

        {/* Section 11: Final CTA + Book a Demo Form */}
        <SectionReveal>
          <CtaSection />
        </SectionReveal>
      </main>
      {/* Section 11: Footer */}
      <Footer />
    </div>
  );
}
