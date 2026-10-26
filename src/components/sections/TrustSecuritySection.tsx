import { ShieldCheck, Lock, Check } from 'lucide-react';
import { content } from '@/content/en';

export function TrustSecuritySection() {
  const { security } = content;

  return (
    <section className="py-20 sm:py-28 border-b border-zinc-200/80 dark:border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md border border-[#B3CCF5]/40 bg-[#B3CCF5]/10 text-blue-950 dark:text-[#B3CCF5] font-mono text-[11px] font-semibold backdrop-blur-sm">
            {security.sectionTag}
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white leading-tight">
            {security.headline}
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {security.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {security.badges.map((badge) => (
            <div
              key={badge.title}
              className="p-6 rounded-2xl border border-zinc-200/80 dark:border-white/[0.08] bg-white/80 dark:bg-zinc-900/50 backdrop-blur-sm space-y-3 shadow-sm hover:border-[#B3CCF5]/50 transition-colors"
            >
              <div className="w-9 h-9 rounded-xl bg-[#B3CCF5]/20 dark:bg-[#B3CCF5]/10 text-blue-950 dark:text-[#B3CCF5] border border-[#B3CCF5]/30 flex items-center justify-center backdrop-blur-sm shadow-sm">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                {badge.title}
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {badge.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-zinc-200/80 dark:border-white/[0.08] bg-white/90 dark:bg-zinc-900/60 backdrop-blur-sm p-6 sm:p-8 space-y-6 shadow-sm overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-200/60 dark:border-white/[0.06] pb-4">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-emerald-500" />
              <span className="text-sm font-semibold text-zinc-900 dark:text-white">
                Isolated Workspace Protocol
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-semibold self-start sm:self-center">
              Confidentiality Guaranteed
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" aria-hidden="true">
            <div className="p-4 rounded-xl border border-[#B3CCF5]/30 bg-[#B3CCF5]/[0.05] dark:bg-[#B3CCF5]/[0.02] backdrop-blur-sm space-y-2">
              <span className="text-xs font-bold font-mono text-blue-950 dark:text-[#B3CCF5] block">
                Workspace 01 · Agency / Department A
              </span>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Dedicated keyword profiles, private clippings, and internal reports remain strictly sealed within authorized team credentials.
              </p>
              <div className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 pt-1 font-medium flex items-center gap-1">
                <Check className="w-3 h-3 text-emerald-500" />
                <span>Full Privacy Protection Active</span>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-blue-500/20 bg-blue-500/[0.02] space-y-2">
              <span className="text-xs font-bold font-mono text-blue-600 dark:text-blue-400 block">
                Workspace 02 · Agency / Department B
              </span>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Operating simultaneously on the same infrastructure with impenetrable database boundaries. Zero cross-visibility.
              </p>
              <div className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 pt-1 font-medium flex items-center gap-1">
                <Check className="w-3 h-3 text-emerald-500" />
                <span>Zero Data Leakage Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
