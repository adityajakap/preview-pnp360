import { Search, CheckCircle2, HelpCircle } from 'lucide-react';
import { content } from '@/content/en';

export function AskDataSection() {
  const { askData } = content;
  const loopQueries = [...askData.marqueeQueries, ...askData.marqueeQueries];

  return (
    <section className="py-20 sm:py-28 border-b border-zinc-200/80 dark:border-white/[0.08] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md border border-[#B3CCF5]/40 bg-[#B3CCF5]/10 text-blue-950 dark:text-[#B3CCF5] font-mono text-[11px] font-semibold backdrop-blur-sm">
            {askData.sectionTag}
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white leading-tight">
            {askData.headline}
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {askData.description}
          </p>
        </div>

        <div className="marquee-container relative w-full overflow-hidden flex items-center py-2">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-zinc-50 dark:from-zinc-950 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-zinc-50 dark:from-zinc-950 to-transparent z-10" />

          <div className="marquee-track flex gap-3 whitespace-nowrap animate-marquee-slow">
            {loopQueries.map((query, index) => (
              <div
                key={`${query}-${index}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-200/80 dark:border-[#B3CCF5]/20 bg-white/80 dark:bg-zinc-900/60 backdrop-blur-sm text-xs text-zinc-700 dark:text-zinc-300 shadow-sm hover:border-[#B3CCF5]/50 hover:text-blue-900 dark:hover:text-[#B3CCF5] transition-colors cursor-default"
              >
                <HelpCircle className="w-3.5 h-3.5 text-blue-700 dark:text-[#B3CCF5] shrink-0" />
                <span className="font-medium">{query}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-[#B3CCF5]/35 bg-[#B3CCF5]/[0.05] dark:bg-[#B3CCF5]/[0.03] backdrop-blur-md p-6 sm:p-8 space-y-5 shadow-sm max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#B3CCF5]/20 pb-4">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-900 dark:text-[#B3CCF5] font-semibold">
              <Search className="w-4 h-4 text-blue-700 dark:text-[#B3CCF5]" />
              <span>DETERMINISTIC INSIGHT SYNTHESIS</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-[10px]">
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">
                {askData.sampleResponse.verifiedNote}
              </span>
              <span className="text-zinc-600 dark:text-zinc-400">{askData.sampleResponse.speedTag}</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-mono font-semibold text-zinc-600 dark:text-zinc-400">
              Query: &ldquo;{askData.sampleResponse.query}&rdquo;
            </div>
            <div className="p-4 rounded-xl bg-white/90 dark:bg-zinc-950/70 border border-zinc-200/80 dark:border-white/[0.06] text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed font-sans">
              {askData.sampleResponse.aiAnswer}
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-zinc-600 dark:text-zinc-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              Verified Boardroom-Ready Citation
            </span>
            <span>Zero Extrapolation · Mathematical Aggregates</span>
          </div>
        </div>
      </div>
    </section>
  );
}
