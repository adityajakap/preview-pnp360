'use client';

import { useState } from 'react';
import { Check, ArrowRight, ShieldCheck, Zap, Globe2, Radio, Star, Sparkles } from 'lucide-react';
import { content } from '@/content/en';
import { siteConfig } from '@/config/site';

export function PricingSection() {
  const { pricing } = content;
  const [activeCategory, setActiveCategory] = useState<'media-intelligence' | 'social-watch'>('media-intelligence');
  const [currency, setCurrency] = useState<'MYR' | 'IDR'>('MYR');

  const selectedCategoryData = pricing.categories.find((c) => c.id === activeCategory) ?? pricing.categories[0];

  return (
    <section id="pricing" className="py-20 sm:py-28 border-b border-zinc-200/80 dark:border-white/[0.08] relative overflow-hidden">
      {/* Background ambient light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[360px] bg-gradient-to-b from-[#B3CCF5]/10 dark:from-[#B3CCF5]/5 to-transparent rounded-full blur-3xl"
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

          {/* Interactive Controls Bar: Category Selector + Currency Switcher */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            {/* Category Segmented Tabs */}
            <div className="inline-flex items-center p-1 rounded-2xl border border-zinc-200/90 dark:border-white/10 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-sm">
              {pricing.categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id as 'media-intelligence' | 'social-watch')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 shadow-md'
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                    }`}
                  >
                    {cat.id === 'media-intelligence' ? (
                      <Globe2 className="w-3.5 h-3.5" />
                    ) : (
                      <Radio className="w-3.5 h-3.5" />
                    )}
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Currency Switcher (MYR / IDR) */}
            <div className="inline-flex items-center p-1 rounded-2xl border border-zinc-200/90 dark:border-white/10 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-sm">
              <button
                type="button"
                onClick={() => setCurrency('MYR')}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all ${
                  currency === 'MYR'
                    ? 'bg-[#B3CCF5] text-blue-950 shadow-sm'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                🇲🇾 MYR (RM)
              </button>
              <button
                type="button"
                onClick={() => setCurrency('IDR')}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all ${
                  currency === 'IDR'
                    ? 'bg-[#B3CCF5] text-blue-950 shadow-sm'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                🇮🇩 IDR (Rp)
              </button>
            </div>
          </div>

          {/* Active Category Subtitle */}
          <div className="pt-2">
            <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
              {selectedCategoryData.tagline}
            </span>
          </div>
        </div>

        {/* 2-Card Side-by-Side Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto items-stretch">
          {selectedCategoryData.plans.map((plan) => {
            const isHighlight = plan.highlight;
            const primaryPrice = currency === 'MYR' ? plan.priceMYR : plan.priceIDR;
            const primarySymbol = currency === 'MYR' ? 'RM' : 'Rp';
            const secondaryPrice = currency === 'MYR' ? `Rp ${plan.priceIDR} IDR` : `RM ${plan.priceMYR} MYR`;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-6 sm:p-9 flex flex-col justify-between transition-all duration-300 relative ${
                  isHighlight
                    ? 'border-2 border-[#B3CCF5] bg-gradient-to-b from-[#B3CCF5]/20 via-white dark:via-zinc-900 to-white dark:to-zinc-950 shadow-xl ring-1 ring-[#B3CCF5]/50 md:-translate-y-1'
                    : 'border border-zinc-200/80 dark:border-white/10 bg-white/80 dark:bg-zinc-900/50 backdrop-blur-md shadow-sm hover:border-zinc-300 dark:hover:border-white/20'
                }`}
              >
                {/* Highlight Pill Banner */}
                {isHighlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#B3CCF5] text-blue-950 text-[10px] font-mono font-bold uppercase tracking-wider shadow-sm border border-white/60">
                      <Sparkles className="w-3 h-3 text-blue-800" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Card Header: Name + Free Trial Badge */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                        {plan.name}
                      </h3>
                      {!isHighlight && (
                        <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-semibold border border-zinc-200/60 dark:border-white/5">
                          {plan.badge}
                        </span>
                      )}
                    </div>

                    {/* 14 Days Free Trial Badge */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/25 text-[11px] font-mono font-bold">
                      <Star className="w-3 h-3 fill-emerald-500 text-emerald-500" />
                      <span>{plan.trialBadge}</span>
                    </div>
                  </div>

                  {/* Price Box */}
                  <div className="pt-2 pb-4 border-b border-zinc-100 dark:border-white/[0.08] space-y-1">
                    <div className="flex items-baseline gap-2 font-mono">
                      <span className="text-base font-bold text-zinc-500 dark:text-zinc-400">
                        {primarySymbol}
                      </span>
                      <span className="text-4xl sm:text-5xl font-extrabold tabular-nums tracking-tight text-zinc-950 dark:text-white">
                        {primaryPrice}
                      </span>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">
                        {plan.period}
                      </span>
                    </div>

                    {/* Secondary Dual Currency Note */}
                    <div className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 pt-0.5">
                      <span>Equivalent: </span>
                      <span className="font-semibold text-zinc-700 dark:text-zinc-300">{secondaryPrice}</span>
                    </div>
                  </div>

                  {/* Feature Bullets */}
                  <div className="space-y-3">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block">
                      Package Inclusions
                    </span>
                    <ul className="space-y-2.5 text-xs text-zinc-700 dark:text-zinc-300">
                      {plan.features.map((feature, idx) => (
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
                    className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-xs tracking-tight transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B3CCF5] ${
                      isHighlight
                        ? 'bg-[#B3CCF5] hover:bg-[#B3CCF5]/90 text-zinc-950 shadow-md shadow-[#B3CCF5]/30 border border-white/60 dark:border-white/30'
                        : 'glass-btn-white text-zinc-900 dark:text-white hover:border-zinc-300 dark:hover:border-white/30'
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <span className="block text-center text-[10px] font-mono text-zinc-500 dark:text-zinc-400 mt-2">
                    No credit card required for 14-day trial
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enterprise Procurement Assurance Bar */}
        <div className="rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-zinc-50/70 dark:bg-zinc-900/40 backdrop-blur-sm p-6 sm:p-8 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricing.procurementNotes.map((note, idx) => (
              <div key={idx} className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-600 dark:text-[#B3CCF5] flex items-center justify-center shrink-0 border border-blue-500/20">
                  {idx === 0 && <Globe2 className="w-4 h-4" />}
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
