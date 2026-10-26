import { Globe2, Eye, Send } from 'lucide-react';
import { content } from '@/content/en';

export function HowItWorksSection() {
  const { howItWorks } = content;

  const stepIcons = [Globe2, Eye, Send];

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {howItWorks.steps.map((step, idx) => {
            const Icon = stepIcons[idx] || Globe2;
            return (
              <div
                key={step.num}
                className="relative rounded-2xl border border-zinc-200/80 dark:border-white/[0.08] bg-white/80 dark:bg-zinc-900/50 backdrop-blur-sm p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm hover:border-[#B3CCF5]/60 hover:shadow-md hover:shadow-[#B3CCF5]/10 transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#B3CCF5]/20 dark:bg-[#B3CCF5]/10 text-blue-900 dark:text-[#B3CCF5] border border-[#B3CCF5]/30 flex items-center justify-center backdrop-blur-sm shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-2xl font-bold text-zinc-300 dark:text-zinc-700">
                      {step.num}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-blue-900 dark:text-[#B3CCF5] font-semibold block mb-1">
                      {step.tag}
                    </span>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-100 dark:border-white/[0.04] text-[11px] font-mono text-blue-900 dark:text-[#B3CCF5] font-medium">
                  Step {idx + 1} of 3
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
