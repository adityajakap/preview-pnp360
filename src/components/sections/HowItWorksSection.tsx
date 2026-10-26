import { SlidersHorizontal, Radio, Filter, FileText, Compass } from 'lucide-react';
import { content } from '@/content/en';

export function HowItWorksSection() {
  const { howItWorks } = content;

  const stepIcons = [SlidersHorizontal, Radio, Filter, FileText, Compass];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 border-b border-zinc-200/80 dark:border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md border border-[#B3CCF5]/40 bg-[#B3CCF5]/10 text-blue-950 dark:text-[#B3CCF5] font-mono text-[11px] font-semibold backdrop-blur-sm">
            {howItWorks.sectionTag}
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white leading-tight">
            {howItWorks.headline}
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {howItWorks.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {howItWorks.steps.map((step, idx) => {
            const Icon = stepIcons[idx] || Radio;
            return (
              <div
                key={step.num}
                className="relative rounded-2xl border border-zinc-200/80 dark:border-white/[0.08] bg-white/80 dark:bg-zinc-900/50 backdrop-blur-sm p-5 sm:p-6 flex flex-col justify-between space-y-6 shadow-sm hover:border-[#B3CCF5]/60 hover:shadow-md hover:shadow-[#B3CCF5]/10 transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-xl bg-[#B3CCF5]/20 dark:bg-[#B3CCF5]/10 text-blue-900 dark:text-[#B3CCF5] border border-[#B3CCF5]/30 flex items-center justify-center backdrop-blur-sm shadow-sm group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-xl font-bold text-zinc-300 dark:text-zinc-700">
                      {step.num}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-blue-900 dark:text-[#B3CCF5] font-semibold block mb-1">
                      {step.tag}
                    </span>
                    <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-100 dark:border-white/[0.04] text-[10px] font-mono text-blue-900 dark:text-[#B3CCF5] font-medium">
                  Step {idx + 1} of 5
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
