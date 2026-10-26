'use client';

import { useState } from 'react';
import { Check, ArrowRight, ShieldCheck, Zap, Building2 } from 'lucide-react';
import { content } from '@/content/en';
import { siteConfig } from '@/config/site';

export function PricingSection() {
  const { pricing } = content;
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-20 sm:py-28 border-b border-zinc-200/80 dark:border-white/[0.08] relative overflow-hidden">
      {/* Background ambient light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#B3CCF5]/10 dark:from-[#B3CCF5]/5 to-transparent rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md border border-[#B3CCF5]/40 bg-[#B3CCF5]/10 text-blue-950 dark:text-[#B3CCF5] font-mono text-[11px] font-semibold backdrop-blur-sm">
            {pricing.sectionTag}
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white leading-tight">
            {pricing.headline}
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            {pricing.description}
          </p>

          {/* Interactive Billing Switcher */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <div className="inline-flex items-center p-1 rounded-xl border border-zinc-200/80 dark:border-white/10 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-sm">
              <button
                type="button"
                onClick={() => setIsAnnual(false)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  !isAnnual
                    ? 'bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 shadow-sm'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                {pricing.billing.monthly}
              </button>
              <button
                type="button"
                onClick={() => setIsAnnual(true)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  isAnnual
                    ? 'bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 shadow-sm'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                <span>{pricing.billing.annual}</span>
                <span className="hidden sm:inline-block px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-mono text-[10px] font-bold">
                  -20%
                </span>
              </button>
            </div>
            <span className="inline-flex sm:hidden px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-[10px] font-semibold">
              Save 20%
            </span>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {pricing.tiers.map((tier) => {
            const isHighlight = tier.highlight;
            const currentPrice = isAnnual ? tier.priceAnnual : tier.priceMonthly;

            return (
              <div
                key={tier.id}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isHighlight
                    ? 'border-2 border-[#B3CCF5] bg-gradient-to-b from-[#B3CCF5]/20 via-white dark:via-zinc-900 to-white dark:to-zinc-950 shadow-xl ring-1 ring-[#B3CCF5]/40 lg:-translate-y-2'
                    : 'border border-zinc-200/80 dark:border-white/10 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-md shadow-sm hover:border-zinc-300 dark:hover:border-white/20'
                }`}
              >
                {/* Top Badge for Highlight Card */}
                {isHighlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B3CCF5] text-blue-950 text-[10px] font-mono font-bold uppercase tracking-wider shadow-sm border border-white/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Card Title & Tagline */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                        {tier.name}
                      </h3>
                      {!isHighlight && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-semibold border border-zinc-200/60 dark:border-white/5">
                          {tier.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed min-h-[36px]">
                      {tier.tagline}
                    </p>
                  </div>

                  {/* Pricing Display */}
                  <div className="pt-2 pb-4 border-b border-zinc-100 dark:border-white/[0.08]">
                    {currentPrice !== null ? (
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-sm font-mono font-bold text-zinc-500 dark:text-zinc-400">
                          {tier.currency}
                        </span>
                        <span className="text-3xl sm:text-4xl font-extrabold font-mono tabular-nums tracking-tight text-zinc-950 dark:text-white">
                          {currentPrice.toLocaleString()}
                        </span>
                        <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                          {tier.period}
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-zinc-950 dark:text-white">
                          {'customPriceLabel' in tier && tier.customPriceLabel ? String(tier.customPriceLabel) : 'Custom'}
                        </span>
                        <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                          {tier.period}
                        </span>
                      </div>
                    )}
                    <span className="block text-[11px] font-mono text-zinc-500 dark:text-zinc-400 mt-1">
                      {isAnnual && currentPrice !== null
                        ? 'Billed annually · Local Malaysian invoicing'
                        : 'Flexible monthly billing · Cancel anytime'}
                    </span>
                  </div>

                  {/* Features Bullet List */}
                  <div className="space-y-3">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block">
                      Included Capabilities
                    </span>
                    <ul className="space-y-2.5 text-xs text-zinc-700 dark:text-zinc-300">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span
                            className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                              isHighlight
                                ? 'bg-blue-600 text-white dark:bg-[#B3CCF5] dark:text-zinc-950'
                                : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
                            }`}
                          >
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </span>
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-8 mt-6 border-t border-zinc-100 dark:border-white/[0.08]">
                  <a
                    href={siteConfig.links.bookDemo}
                    className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs tracking-tight transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B3CCF5] ${
                      isHighlight
                        ? 'bg-[#B3CCF5] hover:bg-[#B3CCF5]/90 text-zinc-950 shadow-md shadow-[#B3CCF5]/30 border border-white/60 dark:border-white/30'
                        : 'glass-btn-white text-zinc-900 dark:text-white hover:border-zinc-300 dark:hover:border-white/30'
                    }`}
                  >
                    <span>{tier.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enterprise Procurement Assurance Bar */}
        <div className="rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-zinc-50/70 dark:bg-zinc-900/40 backdrop-blur-sm p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricing.procurementNotes.map((note, idx) => (
              <div key={idx} className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-600 dark:text-[#B3CCF5] flex items-center justify-center shrink-0 border border-blue-500/20">
                  {idx === 0 && <Building2 className="w-4 h-4" />}
                  {idx === 1 && <ShieldCheck className="w-4 h-4" />}
                  {idx === 2 && <Zap className="w-4 h-4" />}
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-semibold text-zinc-900 dark:text-white">
                    {note.title}
                  </h4>
                  <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                    {note.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
