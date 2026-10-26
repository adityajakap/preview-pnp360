import { CheckCircle2 } from 'lucide-react';
import { content } from '@/content/en';

export function CampaignRoiSection() {
  const { campaignRoi } = content;

  return (
    <section className="py-20 sm:py-28 border-b border-zinc-200/80 dark:border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md border border-[#B3CCF5]/40 bg-[#B3CCF5]/10 text-blue-950 dark:text-[#B3CCF5] font-mono text-[11px] font-semibold backdrop-blur-sm">
            {campaignRoi.sectionTag}
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white leading-tight">
            {campaignRoi.headline}
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {campaignRoi.description}
          </p>
        </div>

        <div className="rounded-3xl border border-zinc-200/80 dark:border-white/[0.08] bg-white/80 dark:bg-zinc-900/50 backdrop-blur-sm p-6 sm:p-10 space-y-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-200/60 dark:border-white/[0.06] pb-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 block mb-1">
                Real-World Action Pipeline
              </span>
              <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
                {campaignRoi.funnelTitle}
              </h3>
            </div>
            <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-[#B3CCF5]/20 text-blue-950 dark:text-[#B3CCF5] border border-[#B3CCF5]/40 font-bold backdrop-blur-sm self-start sm:self-center">
              {campaignRoi.connectorBadge}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" aria-hidden="true">
            {campaignRoi.stages.map((stage, idx) => (
              <div
                key={stage.name}
                className="p-5 rounded-2xl border border-zinc-200/80 dark:border-white/[0.06] bg-zinc-50/70 dark:bg-zinc-950/40 backdrop-blur-sm space-y-3 relative hover:border-[#B3CCF5]/40 transition-colors"
              >
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                  <span>STAGE 0{idx + 1}</span>
                  <span className="w-2 h-2 rounded-full bg-[#B3CCF5]" />
                </div>

                <div>
                  <span className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-zinc-900 dark:text-white block">
                    {stage.count}
                  </span>
                  <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 mt-1 block">
                    {stage.name}
                  </span>
                </div>

                <p className="text-[11px] font-mono text-zinc-600 dark:text-zinc-400 pt-2 border-t border-zinc-200/40 dark:border-white/[0.04]">
                  {stage.note}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-zinc-600 dark:text-zinc-400 border-t border-zinc-200/60 dark:border-white/[0.06]">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Multi-touch attribution connecting digital ad spend and PR reach to confirmed website conversions
            </span>
            <span className="text-emerald-500 font-bold">39.2% Final Conversion Ratio</span>
          </div>
        </div>
      </div>
    </section>
  );
}
