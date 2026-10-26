import { ArrowRight } from 'lucide-react';
import { content } from '@/content/en';
import { siteConfig } from '@/config/site';
import { Hero3DGlobe } from './Hero3DGlobe';

export function HeroSection() {
  const { hero } = content;

  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
      {/* Light sheen with #B3CCF5 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[380px] bg-gradient-to-b from-[#B3CCF5]/10 to-transparent rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-12">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-[#B3CCF5]/40 bg-[#B3CCF5]/10 text-blue-950 dark:text-[#B3CCF5] shadow-sm">
            <span className="text-[11px] font-mono tracking-tight font-semibold">
              {hero.badge}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 dark:text-white leading-[1.08]">
            {hero.headline}
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            {hero.subheadline}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href={siteConfig.links.bookDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#B3CCF5] hover:bg-[#B3CCF5]/90 text-zinc-950 font-semibold text-sm shadow-sm shadow-[#B3CCF5]/25 border border-white/60 dark:border-white/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B3CCF5]"
            >
              <span>{hero.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg glass-btn-white text-zinc-900 dark:text-zinc-100 font-semibold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B3CCF5]"
            >
              <span>{hero.ctaSecondary}</span>
            </a>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-zinc-600 dark:text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>
                <strong className="text-zinc-900 dark:text-zinc-200 font-semibold">Live Social Firehose:</strong> TikTok FYP · X · Facebook · IG · Threads · LinkedIn
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B3CCF5]" />
              <span>
                <strong className="text-zinc-900 dark:text-zinc-200 font-semibold">Vernacular Press:</strong> 100+ Portals & 8 Chinese/Tamil Dailies
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>1-Click Executive WhatsApp Snaps & PDFs</span>
            </div>
          </div>
        </div>

        {/* 3D Interactive Media Globe / 360 Aperture Focal Stage */}
        <Hero3DGlobe />
      </div>
    </section>
  );
}
