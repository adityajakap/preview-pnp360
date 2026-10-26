'use client';

import { useState } from 'react';
import {
  Activity,
  FileText,
  Search,
  Globe,
  SlidersHorizontal,
  ChevronDown,
  Layers,
  Radio,
  Check,
  Download,
  Share2,
  ExternalLink,
  Shield,
  BarChart2,
} from 'lucide-react';
import { content } from '@/content/en';

export function HeroDashboardMockup() {
  const { mockup } = content.hero;
  const [timeRange, setTimeRange] = useState<'24h' | '7d' | '30d'>('24h');
  const [activeTab, setActiveTab] = useState<'radar' | 'vernacular' | 'emotions'>('radar');

  const emotions = [
    { label: 'Trust', score: 68, color: 'bg-emerald-500' },
    { label: 'Anticipation', score: 48, color: 'bg-blue-500' },
    { label: 'Joy', score: 32, color: 'bg-[#B3CCF5]' },
    { label: 'Surprise', score: 21, color: 'bg-indigo-400' },
    { label: 'Fear', score: 18, color: 'bg-amber-500' },
    { label: 'Anger', score: 12, color: 'bg-rose-500' },
    { label: 'Sadness', score: 8, color: 'bg-zinc-400' },
    { label: 'Disgust', score: 4, color: 'bg-red-700' },
  ];

  return (
    <div
      aria-hidden="true"
      className="relative w-full rounded-3xl border border-zinc-200/90 dark:border-white/10 bg-white/95 dark:bg-[#070d1c]/95 backdrop-blur-2xl shadow-2xl overflow-hidden ring-1 ring-black/5 dark:ring-white/5"
    >
      {/* Top macOS App Chrome & Navigation Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 sm:px-6 py-3.5 border-b border-zinc-200/80 dark:border-white/[0.08] bg-zinc-50/90 dark:bg-zinc-900/50 gap-3">
        {/* Left: Window Controls + Organization Selector */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-zinc-300 dark:text-zinc-700">|</span>
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-zinc-200/60 dark:bg-zinc-800/80 border border-zinc-300/60 dark:border-white/5 text-xs font-medium text-zinc-900 dark:text-zinc-100">
            <span className="w-2 h-2 rounded-full bg-[#B3CCF5]" />
            <span className="font-semibold tracking-tight">Institutional Scope · National Media</span>
            <ChevronDown className="w-3.5 h-3.5 text-zinc-400" />
          </div>
        </div>

        {/* Center: Command Search Bar */}
        <div className="hidden lg:flex items-center gap-2 px-3.5 py-1 rounded-xl bg-white dark:bg-zinc-950/80 border border-zinc-200 dark:border-white/10 text-xs text-zinc-500 dark:text-zinc-400 w-80 shadow-inner font-mono">
          <Search className="w-3.5 h-3.5 text-zinc-400" />
          <span className="truncate">Search 42,891 mentions or topics...</span>
          <span className="ml-auto px-1.5 py-0.2 rounded bg-zinc-100 dark:bg-zinc-800 text-[10px] text-zinc-400">
            ⌘K
          </span>
        </div>

        {/* Right: Live Stream Status + Actions */}
        <div className="flex items-center gap-2.5 self-end sm:self-auto">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[11px] font-mono font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Real-Time Stream Active</span>
          </div>

          <div className="flex items-center rounded-lg border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-zinc-900 p-0.5 text-[10px] font-mono">
            {(['24h', '7d', '30d'] as const).map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setTimeRange(r)}
                className={`px-2 py-0.5 rounded-md font-semibold transition-colors ${
                  timeRange === r
                    ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-xs'
                    : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Dashboard Canvas: Sidebar + Workspace Grid */}
      <div className="flex">
        {/* Left Icon Rail Navigation */}
        <div className="hidden md:flex flex-col items-center justify-between py-6 px-3 border-r border-zinc-200/80 dark:border-white/[0.08] bg-zinc-50/50 dark:bg-zinc-950/40 w-16 shrink-0 space-y-6">
          <div className="space-y-4">
            <button
              type="button"
              onClick={() => setActiveTab('radar')}
              title="Crisis Velocity Radar"
              className={`p-2.5 rounded-xl transition-all ${
                activeTab === 'radar'
                  ? 'bg-[#B3CCF5]/25 text-blue-950 dark:text-[#B3CCF5] border border-[#B3CCF5]/40 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              <Activity className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('vernacular')}
              title="Vernacular Press Stream"
              className={`p-2.5 rounded-xl transition-all ${
                activeTab === 'vernacular'
                  ? 'bg-[#B3CCF5]/25 text-blue-950 dark:text-[#B3CCF5] border border-[#B3CCF5]/40 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              <Globe className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('emotions')}
              title="Emotion Velocity Spectrum"
              className={`p-2.5 rounded-xl transition-all ${
                activeTab === 'emotions'
                  ? 'bg-[#B3CCF5]/25 text-blue-950 dark:text-[#B3CCF5] border border-[#B3CCF5]/40 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              <BarChart2 className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-3">
            <div className="p-2 rounded-xl text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300">
              <Shield className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="p-2 rounded-xl text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300">
              <SlidersHorizontal className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Central Workspace Canvas */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 overflow-hidden">
          {/* Top Metric Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-4 rounded-2xl border border-zinc-200/80 dark:border-white/[0.08] bg-zinc-50/70 dark:bg-zinc-900/40 backdrop-blur-sm space-y-1">
              <div className="flex items-center justify-between text-zinc-500 dark:text-zinc-400 text-xs font-mono">
                <span>COVERAGE VOLUME</span>
                <Radio className="w-3.5 h-3.5 text-blue-600 dark:text-[#B3CCF5]" />
              </div>
              <div className="flex items-baseline gap-2 font-mono">
                <span className="text-2xl font-bold tabular-nums text-zinc-900 dark:text-white">
                  42,891
                </span>
                <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                  +14.2%
                </span>
              </div>
              <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono truncate">
                100+ Portals & 6 Social Firehoses
              </p>
            </div>

            <div className="p-4 rounded-2xl border border-zinc-200/80 dark:border-white/[0.08] bg-zinc-50/70 dark:bg-zinc-900/40 backdrop-blur-sm space-y-1">
              <div className="flex items-center justify-between text-zinc-500 dark:text-zinc-400 text-xs font-mono">
                <span>NET SENTIMENT</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[10px]">
                  +58 POSITIVE
                </span>
              </div>
              <div className="flex items-baseline gap-2 font-mono">
                <span className="text-2xl font-bold tabular-nums text-zinc-900 dark:text-white">
                  +68%
                </span>
                <span className="text-[11px] text-zinc-500 font-mono">Net Index</span>
              </div>
              <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono truncate">
                68% Pos · 22% Neu · 10% Neg
              </p>
            </div>

            <div className="p-4 rounded-2xl border border-zinc-200/80 dark:border-white/[0.08] bg-zinc-50/70 dark:bg-zinc-900/40 backdrop-blur-sm space-y-1">
              <div className="flex items-center justify-between text-zinc-500 dark:text-zinc-400 text-xs font-mono">
                <span>VERNACULAR MONITOR</span>
                <Globe className="w-3.5 h-3.5 text-blue-600 dark:text-[#B3CCF5]" />
              </div>
              <div className="flex items-baseline gap-2 font-mono">
                <span className="text-2xl font-bold tabular-nums text-zinc-900 dark:text-white">
                  8 / 8 Dailies
                </span>
              </div>
              <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono truncate font-semibold">
                Translated in 210ms (CN & TA)
              </p>
            </div>

            <div className="p-4 rounded-2xl border border-zinc-200/80 dark:border-white/[0.08] bg-zinc-50/70 dark:bg-zinc-900/40 backdrop-blur-sm space-y-1">
              <div className="flex items-center justify-between text-zinc-500 dark:text-zinc-400 text-xs font-mono">
                <span>RADAR VELOCITY</span>
                <span className="text-rose-500 font-bold text-[10px]">3.4σ SPIKE</span>
              </div>
              <div className="flex items-baseline gap-2 font-mono">
                <span className="text-2xl font-bold tabular-nums text-rose-600 dark:text-rose-400">
                  +38%
                </span>
                <span className="text-[11px] text-rose-500 font-mono">at 08:14 MYT</span>
              </div>
              <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono truncate">
                TikTok & X Velocity Spike Triaged
              </p>
            </div>
          </div>

          {/* Central Eye-Catching Velocity Wave Curve (Pure SVG) */}
          <div className="p-5 sm:p-6 rounded-3xl border border-zinc-200/80 dark:border-white/[0.08] bg-zinc-50/60 dark:bg-zinc-950/60 backdrop-blur-md relative overflow-hidden space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-blue-900 dark:text-[#B3CCF5] font-semibold block">
                  EARLY WARNING CRISIS RADAR
                </span>
                <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
                  24-Hour Discussion Acceleration & Velocity Curve
                </h3>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono">
                <span className="inline-flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400">
                  <span className="w-2.5 h-1 rounded-full bg-[#B3CCF5]" />
                  Volume Velocity
                </span>
                <span className="inline-flex items-center gap-1.5 text-rose-500">
                  <span className="w-2.5 h-0.5 border-t border-dashed border-rose-500" />
                  Alarm Threshold (2.5σ)
                </span>
              </div>
            </div>

            {/* Pure SVG Wave Graph */}
            <div className="relative h-44 sm:h-52 w-full pt-2">
              <svg
                viewBox="0 0 800 200"
                className="w-full h-full overflow-visible"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="velocityGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#B3CCF5" stopOpacity="0.45" />
                    <stop offset="50%" stopColor="#B3CCF5" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#B3CCF5" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Grid guidelines */}
                <line x1="0" y1="50" x2="800" y2="50" stroke="currentColor" className="text-zinc-200 dark:text-zinc-800/60" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="0" y1="100" x2="800" y2="100" stroke="currentColor" className="text-zinc-200 dark:text-zinc-800/60" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="0" y1="150" x2="800" y2="150" stroke="currentColor" className="text-zinc-200 dark:text-zinc-800/60" strokeWidth="1" strokeDasharray="3 3" />

                {/* Alarm Threshold Line (2.5σ) */}
                <line
                  x1="0"
                  y1="65"
                  x2="800"
                  y2="65"
                  stroke="#f43f5e"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  className="opacity-70"
                />

                {/* Area Fill */}
                <path
                  d="M0,170 C100,165 180,150 250,140 C320,130 380,45 420,35 C460,25 500,110 580,120 C660,130 730,140 800,130 L800,200 L0,200 Z"
                  fill="url(#velocityGrad)"
                />

                {/* Smooth Curve Line */}
                <path
                  d="M0,170 C100,165 180,150 250,140 C320,130 380,45 420,35 C460,25 500,110 580,120 C660,130 730,140 800,130"
                  fill="none"
                  stroke="#B3CCF5"
                  strokeWidth="3"
                  className="drop-shadow-[0_2px_8px_rgba(179,204,245,0.4)]"
                />

                {/* Spike Marker at 08:14 MYT (x: 420, y: 35) */}
                <circle cx="420" cy="35" r="5" fill="#f43f5e" stroke="white" strokeWidth="2" className="drop-shadow-md" />
                <circle cx="420" cy="35" r="9" fill="none" stroke="#f43f5e" strokeWidth="1.5" className="animate-ping opacity-60" />
              </svg>

              {/* Callout Tag Over Spike */}
              <div className="absolute top-1 left-[48%] sm:left-[51%] -translate-x-1/2 p-2 rounded-xl bg-rose-950/90 border border-rose-500/40 text-white text-[11px] font-mono shadow-xl backdrop-blur-md whitespace-nowrap">
                <span className="font-bold text-rose-300">SPIKE: +38% at 08:14 MYT</span>
                <span className="block text-[10px] text-zinc-300 font-sans">
                  Community chatter acceleration detected
                </span>
              </div>
            </div>

            {/* X-Axis Timeline Labels */}
            <div className="flex justify-between items-center text-[10px] font-mono text-zinc-600 dark:text-zinc-400 border-t border-zinc-200/60 dark:border-white/[0.06] pt-2">
              <span>00:00 MYT</span>
              <span>04:00</span>
              <span className="font-bold text-rose-500">08:00 (Spike)</span>
              <span>12:00</span>
              <span>16:00</span>
              <span>20:00</span>
              <span className="font-bold text-blue-900 dark:text-[#B3CCF5]">Now (Live)</span>
            </div>
          </div>

          {/* Bottom Grid: Sentiment Donut + 8 Emotion Spectrum Chips + Vernacular Stream */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Net Sentiment Donut (4 cols) */}
            <div className="lg:col-span-4 p-5 rounded-2xl border border-zinc-200/80 dark:border-white/[0.08] bg-zinc-50/70 dark:bg-zinc-900/40 backdrop-blur-sm space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-zinc-200/60 dark:border-white/[0.06]">
                <span className="text-xs font-mono font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
                  Net Sentiment Distribution
                </span>
                <span className="text-[10px] font-mono text-emerald-500 font-bold">+58 Index</span>
              </div>

              {/* Circular SVG Donut */}
              <div className="relative flex items-center justify-center py-2">
                <svg className="w-32 h-32 -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" className="text-zinc-200 dark:text-zinc-800" strokeWidth="9" />
                  {/* Positive (68%) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="9"
                    strokeDasharray="238.76"
                    strokeDashoffset="76.4"
                    strokeLinecap="round"
                  />
                  {/* Neutral (22%) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    fill="none"
                    stroke="#B3CCF5"
                    strokeWidth="9"
                    strokeDasharray="238.76"
                    strokeDashoffset="186.2"
                    strokeLinecap="round"
                  />
                  {/* Negative (10%) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    fill="none"
                    stroke="#f43f5e"
                    strokeWidth="9"
                    strokeDasharray="238.76"
                    strokeDashoffset="214.8"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Center score */}
                <div className="absolute inset-0 flex flex-col items-center justify-center font-mono">
                  <span className="text-xl font-bold text-zinc-900 dark:text-white tabular-nums">
                    +68%
                  </span>
                  <span className="text-[9px] uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold">
                    Net Positive
                  </span>
                </div>
              </div>

              {/* Donut Legend */}
              <div className="grid grid-cols-3 gap-1 pt-2 border-t border-zinc-200/60 dark:border-white/[0.06] text-center font-mono text-[10px]">
                <div>
                  <span className="block text-emerald-500 font-bold">68%</span>
                  <span className="text-zinc-400">Positive</span>
                </div>
                <div>
                  <span className="block text-blue-400 font-bold">22%</span>
                  <span className="text-zinc-400">Neutral</span>
                </div>
                <div>
                  <span className="block text-rose-500 font-bold">10%</span>
                  <span className="text-zinc-400">Negative</span>
                </div>
              </div>
            </div>

            {/* 8 Plutchik Emotion Velocity Chips (4 cols) */}
            <div className="lg:col-span-4 p-5 rounded-2xl border border-zinc-200/80 dark:border-white/[0.08] bg-zinc-50/70 dark:bg-zinc-900/40 backdrop-blur-sm space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-zinc-200/60 dark:border-white/[0.06]">
                <span className="text-xs font-mono font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
                  8 Emotion Spectrum
                </span>
                <span className="text-[10px] font-mono text-[#B3CCF5]">Plutchik Model</span>
              </div>

              <div className="space-y-2 pt-1">
                {emotions.map((emo) => (
                  <div key={emo.label} className="space-y-1">
                    <div className="flex justify-between items-center text-[10px] font-mono">
                      <span className="text-zinc-700 dark:text-zinc-300 font-medium">{emo.label}</span>
                      <span className="font-bold tabular-nums text-zinc-900 dark:text-white">{emo.score}%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                      <div className={`h-full rounded-full ${emo.color}`} style={{ width: `${emo.score}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Vernacular Translation Feed (4 cols) */}
            <div className="lg:col-span-4 p-5 rounded-2xl border border-zinc-200/80 dark:border-white/[0.08] bg-zinc-50/70 dark:bg-zinc-900/40 backdrop-blur-sm flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-zinc-200/60 dark:border-white/[0.06]">
                  <span className="text-xs font-mono font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
                    Live Vernacular Stream
                  </span>
                  <span className="text-[10px] font-mono text-emerald-500 font-bold">210ms Latency</span>
                </div>

                <div className="mt-3 space-y-2">
                  <div className="flex items-center gap-2 text-[10px] font-mono">
                    <span className="px-1.5 py-0.5 rounded bg-blue-500/15 text-blue-700 dark:text-[#B3CCF5] font-bold">
                      MANDARIN PRESS
                    </span>
                    <span className="text-zinc-400">Sin Chew Daily (星洲日报)</span>
                  </div>

                  <p className="text-xs font-semibold text-zinc-900 dark:text-white leading-snug">
                    政府与业界联手推出数码创新倡议，全面加速产业升级与区域连接
                  </p>

                  <div className="p-2.5 rounded-xl bg-white dark:bg-zinc-950/80 border border-zinc-200/80 dark:border-white/5 space-y-1 text-xs">
                    <span className="text-[10px] font-mono font-bold text-blue-900 dark:text-[#B3CCF5] block">
                      Certified Bahasa Melayu:
                    </span>
                    <p className="text-[11px] text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans">
                      &quot;Inisiatif inovasi digital dilancarkan secara strategik bagi memperkasa transformasi industri dan keterhubungan serantau.&quot;
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-200/60 dark:border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-zinc-500">
                <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
                  <Check className="w-3 h-3 text-emerald-500" />
                  Original Proof Attached
                </span>
                <span>Auto-Ingested</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Eye-Catching Glassmorphic Action Pill */}
      <div className="hidden sm:flex absolute bottom-5 right-6 p-3 rounded-2xl glass-btn-white border border-white/80 dark:border-white/20 shadow-2xl backdrop-blur-2xl items-center gap-3.5 z-20 ring-1 ring-black/5 dark:ring-white/10">
        <div className="w-8 h-8 rounded-xl bg-[#B3CCF5]/30 text-blue-950 dark:text-[#B3CCF5] flex items-center justify-center">
          <FileText className="w-4 h-4 text-blue-900 dark:text-[#B3CCF5]" />
        </div>
        <div className="space-y-0.5 font-mono">
          <span className="text-xs font-bold text-zinc-900 dark:text-white block">
            Executive Brief Ready (08:30 MYT)
          </span>
          <span className="text-[10px] text-zinc-500 dark:text-zinc-400 block">
            WhatsApp Snap (1920×1080) & PDF Dossier
          </span>
        </div>
        <button
          type="button"
          className="ml-2 px-3 py-1.5 rounded-lg bg-[#B3CCF5] hover:bg-[#B3CCF5]/90 text-zinc-950 font-semibold text-xs shadow-sm flex items-center gap-1.5 transition-all"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Snap PNG</span>
        </button>
      </div>
    </div>
  );
}
