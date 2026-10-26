'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Clock,
  Check,
  X,
  Languages,
  FileText,
  ShieldCheck,
  TrendingDown,
  TrendingUp,
  ArrowUpRight,
} from 'lucide-react';
import { content } from '@/content/en';

interface ComparisonItem {
  id: string;
  step: string;
  title: string;
  manual: {
    label: string;
    headline: string;
    description: string;
    snippet: {
      source: string;
      detail: string;
      metric: string;
    };
  };
  automated: {
    label: string;
    headline: string;
    description: string;
    snippet: {
      source: string;
      detail: string;
      metric: string;
    };
  };
}

const comparisons: ComparisonItem[] = [
  {
    id: 'briefing',
    step: '01 · Morning Reporting',
    title: 'Executive Briefing Preparation',
    manual: {
      label: 'Manual Process',
      headline: 'Late-night screenshotting & spreadsheet compilation',
      description:
        'PR analysts spend late hours cropping web articles, formatting slide decks, and verifying formula calculations under pressure.',
      snippet: {
        source: 'PowerPoint Deck · Slide 34 of 48',
        detail: 'Manual copy-paste of 30 news links. Cell formula discrepancy delayed morning delivery.',
        metric: '4.5 hrs wasted daily',
      },
    },
    automated: {
      label: 'With P&P 360',
      headline: 'Autonomous 08:00 morning dossier delivery',
      description:
        'Scheduled executive PDF briefings and mobile-ready Snap PNGs are compiled from verified media streams and dispatched on autopilot.',
      snippet: {
        source: 'Executive PDF Dossier · 08:00:00 MYT',
        detail: 'Dispatched directly to 12 leadership inboxes. 100% verified aggregates with zero hallucinations.',
        metric: '0 mins overtime required',
      },
    },
  },
  {
    id: 'vernacular',
    step: '02 · Media Coverage',
    title: 'Vernacular Press Intelligence',
    manual: {
      label: 'Manual Process',
      headline: 'Complete blind spot across Chinese & Tamil dailies',
      description:
        'Crucial policy coverage in vernacular press is missed due to language barriers, leaving communications teams unprepared for public inquiries.',
      snippet: {
        source: 'Sin Chew Daily & Tamil Dailies',
        detail: 'Coverage unread until external translation agency delivers 24 hours later.',
        metric: '8 dailies unmonitored',
      },
    },
    automated: {
      label: 'With P&P 360',
      headline: 'Real-time vernacular translation with source proof',
      description:
        'All 8 major Chinese and Tamil newspapers are translated into certified standard Bahasa Melayu in real time, with original text displayed side-by-side.',
      snippet: {
        source: 'Sin Chew Daily · Certified BM Translation',
        detail: '"Inisiatif inovasi digital dilancarkan secara strategik bagi memperkasa transformasi industri."',
        metric: '210ms translation latency',
      },
    },
  },
  {
    id: 'crisis',
    step: '03 · Crisis Management',
    title: 'Sentiment Velocity & Boardroom Trust',
    manual: {
      label: 'Manual Process',
      headline: 'Delayed crisis awareness after viral momentum peaks',
      description:
        'Negative sentiment clusters go unnoticed until they dominate social feeds, forcing teams into reactive crisis communications.',
      snippet: {
        source: 'Community Forums & Viral Feeds',
        detail: 'Awareness occurred 6 hours after issue peaked. Spreadsheet calculation errors in briefing.',
        metric: '6h+ lag in detection',
      },
    },
    automated: {
      label: 'With P&P 360',
      headline: 'Early warning velocity radar with locked overrides',
      description:
        'Early-warning radar triggers alerts when discussion velocity accelerates. Locked analyst overrides ensure automated re-runs never overwrite verified assessments.',
      snippet: {
        source: 'Early Warning Radar · Threshold 2.5σ',
        detail: 'Velocity alert triggered at 18 minutes. Emotion spectrum (Trust, Fear, Anger) attached.',
        metric: '< 18 min early alert window',
      },
    },
  },
];

export function BeforeAfterSection() {
  const { comparison } = content;
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number>(0);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    comparisons.forEach((_, index) => {
      const el = document.getElementById(`comparison-step-${index}`);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveStep(index);
            }
          });
        },
        {
          rootMargin: '-30% 0px -50% 0px',
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <section
      id="comparison"
      ref={sectionRef}
      className="py-24 sm:py-32 border-b border-zinc-200/80 dark:border-white/[0.08] relative bg-white dark:bg-zinc-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Sticky Narrative Anchor */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-blue-900 dark:text-[#B3CCF5] font-semibold">
                {comparison.sectionTag}
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white leading-tight">
                {comparison.headline}
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {comparison.description}
              </p>
            </div>

            {/* Stage Progress Indicators */}
            <div className="space-y-2 border-l border-zinc-200 dark:border-zinc-800 pl-4">
              {comparisons.map((item, idx) => {
                const isActive = activeStep === idx;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      const el = document.getElementById(`comparison-step-${idx}`);
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }
                    }}
                    className={`block text-left py-1.5 transition-colors ${
                      isActive
                        ? 'text-zinc-950 dark:text-white font-semibold'
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-300'
                    }`}
                  >
                    <span className="font-mono text-xs block text-blue-900 dark:text-[#B3CCF5]">
                      {item.step}
                    </span>
                    <span className="text-sm tracking-tight">{item.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Benchmarks Summary Card */}
            <div className="p-5 rounded-2xl border border-zinc-200/80 dark:border-white/[0.08] bg-zinc-50/80 dark:bg-zinc-900/40 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 block font-semibold">
                Operational Efficiency Impact
              </span>
              <div className="space-y-2 font-mono text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-600 dark:text-zinc-400">Preparation Time</span>
                  <span className="font-bold text-zinc-900 dark:text-white">
                    Instant at 08:00 <span className="text-zinc-600 dark:text-zinc-400 font-normal">(vs 4.5h)</span>
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-600 dark:text-zinc-400">Vernacular Monitoring</span>
                  <span className="font-bold text-zinc-900 dark:text-white">
                    100% Coverage <span className="text-zinc-600 dark:text-zinc-400 font-normal">(8/8 Dailies)</span>
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-600 dark:text-zinc-400">Accuracy & Overrides</span>
                  <span className="font-bold text-zinc-900 dark:text-white">
                    100% Deterministic <span className="text-zinc-600 dark:text-zinc-400 font-normal">(Zero Guesswork)</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Scrolling Parallax Comparison Stream */}
          <div className="lg:col-span-7 space-y-12">
            {comparisons.map((item, idx) => {
              // Subtle scroll parallax calculation for physical depth feel
              const parallaxOffset = (idx - activeStep) * 8;

              return (
                <div
                  key={item.id}
                  id={`comparison-step-${idx}`}
                  className="rounded-3xl border border-zinc-200/90 dark:border-white/10 p-6 sm:p-8 space-y-6 transition-transform duration-300 ease-out bg-white dark:bg-zinc-900/60 shadow-sm"
                  style={{
                    transform: `translateY(${parallaxOffset}px)`,
                  }}
                >
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-100 dark:border-white/[0.08]">
                    <span className="text-xs font-mono font-semibold text-blue-900 dark:text-[#B3CCF5]">
                      {item.step}
                    </span>
                    <span className="text-xs font-semibold text-zinc-900 dark:text-white">
                      {item.title}
                    </span>
                  </div>

                  {/* Paired Contrast: Manual vs P&P 360 */}
                  <div className="space-y-4">
                    {/* Manual State */}
                    <div className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono text-zinc-600 dark:text-zinc-400 font-medium flex items-center gap-1.5">
                          <X className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-400" />
                          {item.manual.label}
                        </span>
                        <span className="text-[11px] font-mono text-zinc-600 dark:text-zinc-400">
                          {item.manual.snippet.metric}
                        </span>
                      </div>
                      <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                        {item.manual.headline}
                      </h4>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                        {item.manual.description}
                      </p>
                      <div className="p-2.5 rounded-xl border border-zinc-200/60 dark:border-zinc-800/80 bg-white dark:bg-zinc-900 text-[11px] font-mono text-zinc-600 dark:text-zinc-400">
                        <span className="block text-zinc-500 text-[10px] uppercase">
                          {item.manual.snippet.source}
                        </span>
                        <span className="mt-0.5 block text-zinc-700 dark:text-zinc-300">
                          {item.manual.snippet.detail}
                        </span>
                      </div>
                    </div>

                    {/* Automated State */}
                    <div className="p-4 rounded-2xl border border-[#B3CCF5]/50 bg-[#B3CCF5]/[0.05] dark:bg-[#B3CCF5]/[0.04] space-y-2 relative shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono text-blue-900 dark:text-[#B3CCF5] font-semibold flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-blue-900 dark:text-[#B3CCF5]" />
                          {item.automated.label}
                        </span>
                        <span className="text-[11px] font-mono font-semibold text-blue-900 dark:text-[#B3CCF5]">
                          {item.automated.snippet.metric}
                        </span>
                      </div>
                      <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">
                        {item.automated.headline}
                      </h4>
                      <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans">
                        {item.automated.description}
                      </p>
                      <div className="p-2.5 rounded-xl border border-[#B3CCF5]/30 bg-white dark:bg-zinc-900 text-[11px] font-mono">
                        <span className="block text-blue-900 dark:text-[#B3CCF5] text-[10px] uppercase font-semibold">
                          {item.automated.snippet.source}
                        </span>
                        <span className="mt-0.5 block text-zinc-900 dark:text-zinc-100 font-sans">
                          {item.automated.snippet.detail}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
