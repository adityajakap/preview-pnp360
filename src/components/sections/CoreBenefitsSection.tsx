import { ShieldCheck, Compass, BarChart3, Clock, ArrowUpRight } from 'lucide-react';
import { content } from '@/content/en';
import { siteConfig } from '@/config/site';

export function CoreBenefitsSection() {
  const { coreBenefits } = content;
  const icons = [ShieldCheck, Compass, BarChart3, Clock];

  return (
    <section id="benefits" className="py-20 sm:py-28 border-b border-zinc-200/80 dark:border-white/[0.08] relative overflow-hidden">
      {/* Background radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#B3CCF5]/10 dark:from-[#B3CCF5]/5 to-transparent rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md border border-[#B3CCF5]/40 bg-[#B3CCF5]/10 text-blue-950 dark:text-[#B3CCF5] font-mono text-[11px] font-semibold backdrop-blur-sm">
            {coreBenefits.sectionTag}
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white leading-tight">
            {coreBenefits.headline}
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
            {coreBenefits.description}
          </p>
        </div>

        {/* 4 Core Benefits Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreBenefits.benefits.map((benefit, idx) => {
            const Icon = icons[idx] || ShieldCheck;

            return (
              <div
                key={benefit.num}
                className="rounded-3xl border border-zinc-200/80 dark:border-white/10 bg-white/80 dark:bg-zinc-900/50 backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between space-y-8 shadow-sm hover:border-[#B3CCF5]/60 hover:shadow-lg hover:shadow-[#B3CCF5]/10 transition-all duration-300 group"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-blue-500/10 text-blue-700 dark:text-[#B3CCF5] border border-blue-500/20 flex items-center justify-center backdrop-blur-sm group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-3xl font-extrabold text-zinc-200 dark:text-zinc-800 group-hover:text-[#B3CCF5]/50 transition-colors">
                      {benefit.num}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-blue-900 dark:text-[#B3CCF5] font-semibold block">
                      {benefit.tag}
                    </span>
                    <h3 className="text-lg font-bold tracking-tight text-zinc-950 dark:text-white">
                      {benefit.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                    {benefit.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-100 dark:border-white/[0.04] flex items-center justify-between text-[11px] font-mono">
                  <span className="text-zinc-500 dark:text-zinc-400">Institutional Impact</span>
                  <a
                    href={siteConfig.links.bookDemo}
                    className="inline-flex items-center gap-1 font-semibold text-blue-900 dark:text-[#B3CCF5] group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Explore</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
