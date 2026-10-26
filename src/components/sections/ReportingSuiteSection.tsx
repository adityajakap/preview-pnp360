import { content } from '@/content/en';

const SOCIAL_CHANNELS = [
  {
    name: 'TikTok',
    scope: 'Video Captions & Audio Transcripts',
    stat: '+42% velocity spike',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.29 6.29 0 0 0 1.96-4.48v-6.7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.96-.4z" />
      </svg>
    ),
  },
  {
    name: 'X (Twitter)',
    scope: 'Firehose & Viral Threads',
    stat: '14.8k mentions/hr',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    scope: 'Reels, Carousels & Stories',
    stat: 'Visual Sentiment Index',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    scope: 'Public Pages & Viral Groups',
    stat: 'Community Debate Ingest',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    scope: 'C-Suite Feeds & Industry Posts',
    stat: 'B2B Reputation Stream',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: 'Threads',
    scope: 'Emerging Conversational Sparks',
    stat: 'Sub-Hour Trend Alert',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.247 18.29 1.5 15.324 1.5 11.757 1.5 4.887 6.438 0 12.222 0c6.046 0 10.278 4.774 10.278 11.603 0 6.64-4.148 10.82-9.673 10.82-2.316 0-4.32-.78-5.795-2.257-.014-.014-.027-.028-.041-.043l1.867-1.564c.007.007.014.015.022.022 1.096 1.092 2.54 1.674 4.07 1.674 3.963 0 6.945-2.923 6.945-7.854 0-5.187-3.072-8.775-7.55-8.775-4.484 0-7.852 3.738-7.852 8.924 0 2.898.577 5.253 1.716 7.001 1.341 2.057 3.42 3.037 6.182 3.056h.007c2.31 0 4.14-.64 5.438-1.905l1.642 1.776c-1.745 1.701-4.195 2.545-7.109 2.545zm1.545-8.918c-.85 0-1.562-.23-2.115-.684-.555-.456-.879-1.127-.936-1.944-.09-1.304.606-2.368 1.959-2.996.591-.275 1.343-.442 2.235-.497v.528c0 1.96-.347 3.32-1.033 4.08-.293.325-.662.513-1.11.513zm2.535-7.234c-1.378.077-2.57.34-3.541.782-2.203 1.002-3.32 2.766-3.149 4.966.1 1.282.639 2.378 1.558 3.167.975.837 2.277 1.263 3.766 1.263.854 0 1.637-.184 2.327-.549 1.122-.593 1.89-1.55 2.285-2.846.334-1.097.5-2.585.5-4.417V6.027c-1.22.844-2.56 1.455-3.746 1.821z" />
      </svg>
    ),
  },
];

export function ReportingSuiteSection() {
  const { reporting } = content;
  const cards = reporting.cards;

  return (
    <section id="features" className="py-20 sm:py-28 border-b border-zinc-200/80 dark:border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md border border-[#B3CCF5]/40 bg-[#B3CCF5]/10 text-blue-950 dark:text-[#B3CCF5] font-mono text-[11px] font-semibold backdrop-blur-sm">
            {reporting.sectionTag}
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white leading-tight">
            {reporting.headline}
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {reporting.description}
          </p>
        </div>

        {/* Live Multi-Platform Social Ingestion Strip */}
        <div className="rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-md p-4 sm:p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-zinc-200/60 dark:border-white/[0.06]">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-900 dark:text-[#B3CCF5] font-mono text-[10px] font-bold border border-blue-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
                LIVE INGESTION
              </span>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
                Omnichannel Social Media Coverage (6 Networks)
              </span>
            </div>
            <span className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
              Sub-second sentiment indexing across video transcripts, viral threads & reels
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 pt-3.5">
            {SOCIAL_CHANNELS.map((item) => (
              <div
                key={item.name}
                className="p-3 rounded-xl border border-zinc-200/70 dark:border-white/[0.06] bg-zinc-50/70 dark:bg-zinc-950/40 transition-all hover:border-[#B3CCF5]/60 hover:shadow-sm group"
              >
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <div className="flex items-center gap-1.5 text-zinc-900 dark:text-white font-semibold text-xs group-hover:text-blue-600 dark:group-hover:text-[#B3CCF5] transition-colors">
                    {item.icon}
                    <span>{item.name}</span>
                  </div>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div className="text-[10px] text-zinc-600 dark:text-zinc-400 font-medium truncate">
                  {item.scope}
                </div>
                <div className="mt-1 text-[10px] font-mono text-blue-900 dark:text-[#B3CCF5] tabular-nums font-semibold">
                  {item.stat}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6-Card CleanShot / Screen Studio Bento Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Card 0: Vernacular Press Ingestion (Large 6-Col) */}
          <div className="col-span-12 lg:col-span-6 rounded-3xl border border-zinc-200/80 dark:border-white/10 bg-gradient-to-b from-[#B3CCF5]/25 via-blue-50/20 to-white/70 dark:from-[#B3CCF5]/10 dark:via-zinc-900/60 dark:to-zinc-950/80 p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative shadow-sm hover:border-[#B3CCF5]/50 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-blue-900 dark:text-[#B3CCF5] font-semibold">
                  {cards[0].badge}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live Sync
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                {cards[0].title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mt-2 max-w-lg">
                {cards[0].desc}
              </p>
            </div>

            {/* Micro-UI Visual: Browser Window + Overlapping Circular Bubble */}
            <div className="mt-8 relative" aria-hidden="true">
              {/* Browser Window Frame */}
              <div className="rounded-2xl border border-zinc-200/90 dark:border-white/15 bg-white/95 dark:bg-zinc-900/90 shadow-xl overflow-hidden backdrop-blur-md pt-3 pb-5 px-4 sm:px-5">
                {/* Window top bar */}
                <div className="flex items-center justify-between pb-3 border-b border-zinc-100 dark:border-white/[0.08]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <div className="px-3 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800/80 text-[10px] font-mono text-zinc-500 dark:text-zinc-400 border border-zinc-200/50 dark:border-white/5">
                    monitor.pnp360.internal/stream/vernacular
                  </div>
                  <div className="text-[10px] font-mono text-blue-900 dark:text-[#B3CCF5] font-semibold">
                    210ms Latency
                  </div>
                </div>

                {/* News Article Stream Content */}
                <div className="pt-3.5 space-y-2 pr-20 sm:pr-24">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-700 dark:text-[#B3CCF5] font-mono">
                      MANDARIN PRESS
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400">
                      Sin Chew Daily (星洲日报) · 24m ago
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100 line-clamp-1">
                    政府与业界联手推出数码创新倡议，全面加速产业升级与区域连接
                  </p>
                  <p className="text-[11px] text-zinc-600 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-950/60 p-2 rounded-lg border border-zinc-200/60 dark:border-white/5 font-sans leading-relaxed">
                    <span className="text-blue-900 dark:text-[#B3CCF5] font-semibold">Bahasa Melayu:</span> &quot;Inisiatif inovasi digital dilancarkan secara strategik bagi memperkasa transformasi industri dan keterhubungan serantau.&quot;
                  </p>
                </div>

                {/* Floating Bottom Pill Toolbar */}
                <div className="mt-4 pt-2 flex items-center justify-start">
                  <div className="inline-flex items-center gap-3.5 px-3.5 py-1.5 rounded-full bg-zinc-950/90 text-white border border-white/20 shadow-xl backdrop-blur-md">
                    <div className="flex items-center gap-1.5 font-mono text-[11px] tabular-nums font-semibold">
                      <span className="w-2 h-2 rounded-full bg-rose-500" />
                      <span>08:30</span>
                    </div>
                    <span className="h-3 w-px bg-white/20" />
                    <svg className="w-3.5 h-3.5 text-zinc-300 hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="6" y="4" width="4" height="16" rx="1" />
                      <rect x="14" y="4" width="4" height="16" rx="1" />
                    </svg>
                    <svg className="w-3.5 h-3.5 text-zinc-300 hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Overlapping Circular Avatar / Vernacular Verification Badge */}
              <div className="absolute -bottom-3 right-2 sm:right-4 w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white dark:border-zinc-900 shadow-2xl bg-gradient-to-br from-[#0c152e] via-blue-950 to-zinc-950 flex flex-col items-center justify-center p-2 text-center overflow-hidden ring-1 ring-[#B3CCF5]/40">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#B3CCF5_0%,transparent_60%)] opacity-30" />
                <span className="relative text-xs sm:text-sm font-bold text-white tracking-tight">
                  星洲日报
                </span>
                <span className="relative text-[9px] font-mono text-[#B3CCF5] uppercase tracking-wider font-semibold mt-0.5">
                  Sin Chew
                </span>
                <div className="relative mt-1 inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-[8px] font-mono font-bold text-emerald-300">
                  <span className="w-1 h-1 rounded-full bg-emerald-400" />
                  VERIFIED
                </div>
              </div>
            </div>
          </div>

          {/* Card 1: Cross-Platform Social Spike Radar (3-Col) */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 rounded-3xl border border-zinc-200/80 dark:border-white/10 bg-gradient-to-b from-[#B3CCF5]/30 via-blue-50/20 to-white/70 dark:from-[#B3CCF5]/12 dark:via-zinc-900/60 dark:to-zinc-950/80 p-6 sm:p-7 flex flex-col justify-between overflow-hidden relative shadow-sm hover:border-[#B3CCF5]/50 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-blue-900 dark:text-[#B3CCF5] font-semibold">
                  {cards[1].badge}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 font-bold">
                  +42% Spike
                </span>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                {cards[1].title}
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mt-2">
                {cards[1].desc}
              </p>
            </div>

            {/* Micro-UI Visual: Active Social Spike Radar Card */}
            <div className="mt-6 space-y-2.5 relative" aria-hidden="true">
              {/* Alert Feed Item 1: TikTok Viral Comment Spike */}
              <div className="rounded-xl border border-rose-500/30 bg-rose-500/[0.06] dark:bg-rose-500/[0.08] p-2.5 backdrop-blur-sm space-y-1">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <div className="flex items-center gap-1.5 font-bold text-rose-700 dark:text-rose-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
                    <span>TikTok & X Ingestion</span>
                  </div>
                  <span className="text-rose-600 dark:text-rose-300 font-semibold tabular-nums">+42% velocity</span>
                </div>
                <div className="text-[11px] text-zinc-800 dark:text-zinc-200 font-medium truncate">
                  Unverified rumor accelerating in comments
                </div>
              </div>

              {/* Alert Feed Item 2: X Trending Keyword */}
              <div className="rounded-xl border border-zinc-200/80 dark:border-white/10 bg-white/90 dark:bg-zinc-800/80 p-2.5 shadow-sm space-y-1">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <div className="flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>X Firehose Stream</span>
                  </div>
                  <span className="text-zinc-500 dark:text-zinc-400 tabular-nums">14.8k posts/30m</span>
                </div>
                <div className="text-[11px] text-zinc-600 dark:text-zinc-400 truncate">
                  Trending topic tracked before mainstream press
                </div>
              </div>

              {/* Status footer pill */}
              <div className="pt-1 flex items-center justify-between text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
                <span>Threshold: 2.5σ</span>
                <span className="text-blue-900 dark:text-[#B3CCF5] font-semibold">WhatsApp brief dispatched</span>
              </div>
            </div>
          </div>

          {/* Card 2: 1-Click WhatsApp Snap (3-Col) */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 rounded-3xl border border-zinc-200/80 dark:border-white/10 bg-gradient-to-b from-[#B3CCF5]/25 via-blue-50/20 to-white/70 dark:from-[#B3CCF5]/10 dark:via-zinc-900/60 dark:to-zinc-950/80 p-6 sm:p-7 flex flex-col justify-between overflow-hidden relative shadow-sm hover:border-[#B3CCF5]/50 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-blue-900 dark:text-[#B3CCF5] font-semibold">
                  {cards[2].badge}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#B3CCF5]/25 text-blue-950 dark:text-[#B3CCF5] border border-[#B3CCF5]/40 font-bold backdrop-blur-sm">
                  1-Click PNG
                </span>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                {cards[2].title}
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mt-2">
                {cards[2].desc}
              </p>
            </div>

            {/* Micro-UI Visual: Tactile Frosted Dark Shortcut Key Cap (⌘P) */}
            <div className="mt-8 flex flex-col items-center justify-center py-2" aria-hidden="true">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-b from-zinc-700/90 via-zinc-850/95 to-zinc-950 border border-white/20 shadow-2xl flex flex-col items-center justify-center text-white backdrop-blur-xl relative group ring-1 ring-black/40">
                <div className="absolute inset-x-3 top-1 h-px bg-white/30 rounded-full" />
                <div className="flex items-center gap-1 font-mono text-3xl sm:text-4xl font-extrabold tracking-tight">
                  <span className="text-zinc-300">⌘</span>
                  <span className="text-white">P</span>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#B3CCF5] font-semibold mt-1.5">
                  Snap Brief
                </span>
              </div>
              <div className="mt-3 flex items-center gap-1.5 text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>1920×1080 Mobile WhatsApp Ready</span>
              </div>
            </div>
          </div>

          {/* Card 3: Emotion Spectrum Velocity (3-Col) */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 rounded-3xl border border-blue-900/40 bg-gradient-to-b from-[#080e1e] via-[#0b1426] to-[#040813] p-6 sm:p-7 flex flex-col justify-between overflow-hidden relative shadow-xl text-white hover:border-[#B3CCF5]/40 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#B3CCF5] font-semibold">
                  {cards[3].badge}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-[#B3CCF5] border border-blue-400/30 font-bold">
                  Wave Velocity
                </span>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-white">
                {cards[3].title}
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed mt-2">
                {cards[3].desc}
              </p>
            </div>

            {/* Micro-UI Visual: Glowing Pure SVG Audio/Emotion Waveform */}
            <div className="mt-8 relative" aria-hidden="true">
              <div className="flex justify-between items-center text-[10px] font-mono mb-3 text-zinc-400 border-b border-white/10 pb-2">
                <span className="text-emerald-400 font-bold">Trust 68%</span>
                <span className="text-amber-400 font-bold">Fear 20%</span>
                <span className="text-rose-400 font-bold">Anger 12%</span>
              </div>

              <div className="relative h-24 flex items-center justify-between gap-1 px-1">
                {[
                  18, 26, 40, 58, 32, 70, 88, 52, 96, 68,
                  45, 84, 100, 78, 62, 92, 54, 76, 48, 86,
                  64, 42, 72, 50, 36, 24, 16
                ].map((height, i) => (
                  <div
                    key={i}
                    className="w-1.5 rounded-full bg-gradient-to-t from-blue-600 via-[#B3CCF5] to-white shadow-[0_0_8px_rgba(179,204,245,0.6)] transition-all duration-300"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>

              <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-[#040813] to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Card 4: Automated Morning Brief (3-Col) */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 rounded-3xl border border-blue-900/30 bg-gradient-to-br from-[#0c1633] via-[#0e1d42] to-[#091024] p-6 sm:p-7 flex flex-col justify-between overflow-hidden relative shadow-xl text-white hover:border-[#B3CCF5]/40 transition-all duration-300">
            <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-[#B3CCF5]/10 blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#B3CCF5] font-semibold">
                  {cards[4].badge}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 font-bold">
                  Zero Overtime
                </span>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-white">
                {cards[4].title}
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed mt-2">
                {cards[4].desc}
              </p>
            </div>

            {/* Micro-UI Visual: Floating Frosted Context Menu */}
            <div className="mt-8 space-y-2 relative" aria-hidden="true">
              <div className="rounded-2xl border border-white/15 bg-zinc-950/80 backdrop-blur-xl p-2.5 shadow-2xl space-y-2">
                <div className="p-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 flex items-center justify-between transition-colors">
                  <div className="flex items-center gap-2.5">
                    <span className="px-1.5 py-0.5 rounded-md bg-white text-zinc-950 font-mono text-[9px] font-black uppercase tracking-wider">
                      PDF
                    </span>
                    <span className="text-xs font-semibold text-white">
                      08:00 Executive Brief
                    </span>
                  </div>
                  <span className="text-zinc-400 font-mono text-xs">↗</span>
                </div>

                <div className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/5 flex items-center justify-between transition-colors">
                  <div className="flex items-center gap-2.5">
                    <span className="px-1.5 py-0.5 rounded-md bg-[#B3CCF5]/30 text-[#B3CCF5] font-mono text-[9px] font-black uppercase tracking-wider border border-[#B3CCF5]/40">
                      SNAP
                    </span>
                    <span className="text-xs font-medium text-zinc-200">
                      14:00 Mid-Day Pulse
                    </span>
                  </div>
                  <span className="text-zinc-400 font-mono text-xs">↵</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                <span>Auto-deliver: 12 inboxes</span>
                <span className="text-emerald-400 font-semibold">Scheduled</span>
              </div>
            </div>
          </div>

          {/* Card 5: Full-Funnel Campaign Attribution (Large 6-Col) */}
          <div className="col-span-12 lg:col-span-6 rounded-3xl border border-zinc-200/80 dark:border-white/10 bg-gradient-to-b from-[#B3CCF5]/25 via-blue-50/20 to-white/70 dark:from-[#B3CCF5]/10 dark:via-zinc-900/60 dark:to-zinc-950/80 p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative shadow-sm hover:border-[#B3CCF5]/50 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-blue-900 dark:text-[#B3CCF5] font-semibold">
                  {cards[5].badge}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-700 dark:text-[#B3CCF5] border border-blue-500/20 font-bold">
                  Multi-Touch ROI
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                {cards[5].title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mt-2 max-w-lg">
                {cards[5].desc}
              </p>
            </div>

            {/* Micro-UI Visual: Studio Canvas Mockup with Smart Zoom Bounding Box */}
            <div className="mt-8 relative" aria-hidden="true">
              <div className="rounded-2xl border border-zinc-200/90 dark:border-white/15 bg-white/95 dark:bg-zinc-900/90 shadow-xl overflow-hidden backdrop-blur-md">
                <div className="px-3 py-2 border-b border-zinc-100 dark:border-white/[0.08] flex items-center justify-between bg-zinc-50/80 dark:bg-zinc-950/50">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
                    analytics.pnp360.internal/campaign-funnel
                  </span>
                  <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    39.2% Conversion
                  </span>
                </div>

                <div className="p-4 sm:p-5 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <div className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/60 dark:border-white/5 text-center">
                    <span className="block text-[9px] font-mono text-zinc-500 dark:text-zinc-400 uppercase">Paid Ads (TikTok/Meta)</span>
                    <span className="block text-sm sm:text-base font-bold font-mono text-zinc-900 dark:text-white mt-0.5">1.42M</span>
                    <span className="text-[8px] font-mono text-zinc-500">Impressions</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/60 dark:border-white/5 text-center">
                    <span className="block text-[9px] font-mono text-zinc-500 dark:text-zinc-400 uppercase">PR & Press</span>
                    <span className="block text-sm sm:text-base font-bold font-mono text-zinc-900 dark:text-white mt-0.5">108</span>
                    <span className="text-[8px] font-mono text-zinc-500">Outlets</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/60 dark:border-white/5 text-center">
                    <span className="block text-[9px] font-mono text-zinc-500 dark:text-zinc-400 uppercase">QR Activations</span>
                    <span className="block text-sm sm:text-base font-bold font-mono text-zinc-900 dark:text-white mt-0.5">9,430</span>
                    <span className="text-[8px] font-mono text-zinc-500">Scans</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-center">
                    <span className="block text-[9px] font-mono text-blue-900 dark:text-[#B3CCF5] uppercase font-bold">Actions</span>
                    <span className="block text-sm sm:text-base font-bold font-mono text-blue-950 dark:text-white mt-0.5">18,920</span>
                    <span className="text-[8px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">+39.2% rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
