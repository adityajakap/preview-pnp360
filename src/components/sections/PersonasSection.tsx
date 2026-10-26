import { Landmark, Megaphone, Target, CheckCircle2 } from 'lucide-react';
import { content } from '@/content/en';

export function PersonasSection() {
  const { personas } = content;

  const personaIcons = [Landmark, Megaphone, Target];

  return (
    <section id="use-cases" className="py-20 sm:py-28 border-b border-zinc-200/80 dark:border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md border border-[#B3CCF5]/40 bg-[#B3CCF5]/10 text-blue-950 dark:text-[#B3CCF5] font-mono text-[11px] font-semibold backdrop-blur-sm">
            {personas.sectionTag}
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white leading-tight">
            {personas.headline}
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {personas.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {personas.columns.map((col, idx) => {
            const Icon = personaIcons[idx] || Landmark;
            return (
              <div
                key={col.title}
                className="rounded-2xl border border-zinc-200/80 dark:border-white/[0.08] bg-white/80 dark:bg-zinc-900/50 backdrop-blur-sm p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm hover:border-[#B3CCF5]/60 hover:shadow-md hover:shadow-[#B3CCF5]/10 transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#B3CCF5]/20 dark:bg-[#B3CCF5]/10 text-blue-950 dark:text-[#B3CCF5] border border-[#B3CCF5]/30 flex items-center justify-center backdrop-blur-sm shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold">
                      {col.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                      {col.title}
                    </h3>
                  </div>

                  <ul className="space-y-3 pt-2 border-t border-zinc-100 dark:border-white/[0.04]">
                    {col.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-zinc-100 dark:border-white/[0.04] text-[11px] font-mono text-blue-900 dark:text-[#B3CCF5] font-semibold">
                  Tailored Institutional Profile
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
