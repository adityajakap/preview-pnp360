'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ShieldCheck, Compass } from 'lucide-react';

interface MediaNode {
  id: string;
  region: string;
  outlet: string;
  nativeScript?: string;
  category: string;
  metricLabel: string;
  metricValue: string;
  metricDelta: string;
  status: string;
  coords: { x: number; y: number }; // percentage 0-100
  feedDetail: string;
  popoverSide: 'left' | 'right' | 'top';
}

const MEDIA_NODES: MediaNode[] = [
  {
    id: 'kl-broadcast',
    region: 'Kuala Lumpur',
    outlet: 'Astro Awani & National Portals',
    nativeScript: 'Broadcast & Web 24/7',
    category: 'National Stream',
    metricLabel: 'Discussion Velocity',
    metricValue: '42,891',
    metricDelta: '+14.2% acceleration',
    status: 'Triaged by Analyst',
    coords: { x: 24, y: 28 },
    feedDetail: '100+ feeds ingested · Real-time crisis radar active',
    popoverSide: 'right',
  },
  {
    id: 'penang-chinese',
    region: 'Northern / Penang',
    outlet: 'Sin Chew Daily',
    nativeScript: '星洲日报',
    category: 'Vernacular Mandarin',
    metricLabel: 'Translation Latency',
    metricValue: '210ms',
    metricDelta: 'Mandarin → BM Baku',
    status: 'Zero Blindspots',
    coords: { x: 76, y: 26 },
    feedDetail: 'Verified deterministic translation · +84% net positive',
    popoverSide: 'left',
  },
  {
    id: 'social-omnichannel',
    region: 'Omnichannel Social',
    outlet: 'X · TikTok · IG · FB · Threads · LinkedIn',
    nativeScript: '6 Platforms Ingested',
    category: 'Live Social Firehose',
    metricLabel: 'Social Discussion Rate',
    metricValue: '284,500/hr',
    metricDelta: '+38% viral acceleration alert',
    status: 'Spike Detector Active',
    coords: { x: 50, y: 84 },
    feedDetail: 'Continuous sentiment indexing across viral video comments, threads, reels, and executive posts',
    popoverSide: 'top',
  },
  {
    id: 'johor-tamil',
    region: 'Southern / Johor',
    outlet: 'Makkal Osai',
    nativeScript: 'மக்கள் ஓசை',
    category: 'Vernacular Tamil',
    metricLabel: 'Community Reach',
    metricValue: '8 / 8 Dailies',
    metricDelta: 'Tamil Daily Ingest',
    status: 'Active Telemetry',
    coords: { x: 26, y: 72 },
    feedDetail: 'Full vernacular monitoring · Sentiment indexing active',
    popoverSide: 'right',
  },
  {
    id: 'cyberjaya-radar',
    region: 'Selangor / Cyberjaya',
    outlet: 'Crisis Velocity Radar',
    nativeScript: 'Early Warning Engine',
    category: 'Intelligence Core',
    metricLabel: 'Early Detection',
    metricValue: '18 min',
    metricDelta: 'Spike warning window',
    status: 'Automated Dispatch',
    coords: { x: 74, y: 72 },
    feedDetail: 'Morning executive brief & WhatsApp snap generation',
    popoverSide: 'left',
  },
  {
    id: 'borneo-east',
    region: 'Sabah & Sarawak',
    outlet: 'Borneo Post & Daily Express',
    nativeScript: 'East Malaysia Press',
    category: 'Regional Press',
    metricLabel: 'Territorial Coverage',
    metricValue: '100%',
    metricDelta: 'Borneo newsstream',
    status: 'Continuous Ingest',
    coords: { x: 50, y: 15 },
    feedDetail: 'Statewide media coverage · Local policy reception',
    popoverSide: 'right',
  },
];

interface SocialPlatform {
  name: string;
  focus: string;
  metric: string;
  iconType: 'x' | 'tiktok' | 'instagram' | 'facebook' | 'linkedin' | 'threads';
}

const SOCIAL_PLATFORMS: SocialPlatform[] = [
  {
    name: 'X',
    focus: 'Viral Threads & Reposts',
    metric: '14.8k mentions/hr',
    iconType: 'x',
  },
  {
    name: 'TikTok',
    focus: 'Soundbites & Comments',
    metric: '+42% velocity spike',
    iconType: 'tiktok',
  },
  {
    name: 'Instagram',
    focus: 'Visual & Mention Index',
    metric: 'Real-time Sentiment',
    iconType: 'instagram',
  },
  {
    name: 'Facebook',
    focus: 'Community Discussions',
    metric: 'Debate Acceleration',
    iconType: 'facebook',
  },
  {
    name: 'LinkedIn',
    focus: 'Executive Posts & PR',
    metric: 'B2B Reputation Stream',
    iconType: 'linkedin',
  },
  {
    name: 'Threads',
    focus: 'Early Conversational Sparks',
    metric: 'Sub-hour trend alert',
    iconType: 'threads',
  },
];

const MONITORED_OUTLETS = [
  { name: 'The Star', lang: 'English' },
  { name: 'Malaysiakini', lang: 'Bilingual' },
  { name: 'Sin Chew Daily (星洲日报)', lang: 'Mandarin' },
  { name: 'Sinar Harian', lang: 'Bahasa Melayu' },
  { name: 'Makkal Osai (மக்கள் ஓசை)', lang: 'Tamil' },
  { name: 'Astro Awani', lang: 'Broadcast' },
  { name: 'Berita Harian', lang: 'Bahasa Melayu' },
  { name: 'Free Malaysia Today', lang: 'English' },
];

function SocialIcon({ type }: { type: SocialPlatform['iconType'] }) {
  switch (type) {
    case 'x':
      return (
        <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case 'tiktok':
      return (
        <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.29 6.29 0 0 0 1.96-4.48v-6.7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.96-.4z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
    case 'facebook':
      return (
        <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      );
    case 'threads':
      return (
        <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.247 18.29 1.5 15.324 1.5 11.757 1.5 4.887 6.438 0 12.222 0c6.046 0 10.278 4.774 10.278 11.603 0 6.64-4.148 10.82-9.673 10.82-2.316 0-4.32-.78-5.795-2.257-.014-.014-.027-.028-.041-.043l1.867-1.564c.007.007.014.015.022.022 1.096 1.092 2.54 1.674 4.07 1.674 3.963 0 6.945-2.923 6.945-7.854 0-5.187-3.072-8.775-7.55-8.775-4.484 0-7.852 3.738-7.852 8.924 0 2.898.577 5.253 1.716 7.001 1.341 2.057 3.42 3.037 6.182 3.056h.007c2.31 0 4.14-.64 5.438-1.905l1.642 1.776c-1.745 1.701-4.195 2.545-7.109 2.545zm1.545-8.918c-.85 0-1.562-.23-2.115-.684-.555-.456-.879-1.127-.936-1.944-.09-1.304.606-2.368 1.959-2.996.591-.275 1.343-.442 2.235-.497v.528c0 1.96-.347 3.32-1.033 4.08-.293.325-.662.513-1.11.513zm2.535-7.234c-1.378.077-2.57.34-3.541.782-2.203 1.002-3.32 2.766-3.149 4.966.1 1.282.639 2.378 1.558 3.167.975.837 2.277 1.263 3.766 1.263.854 0 1.637-.184 2.327-.549 1.122-.593 1.89-1.55 2.285-2.846.334-1.097.5-2.585.5-4.417V6.027c-1.22.844-2.56 1.455-3.746 1.821z" />
        </svg>
      );
  }
}

export function Hero3DGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);
  const [activeNodeId, setActiveNodeId] = useState<string>('social-omnichannel');
  const [userInteracted, setUserInteracted] = useState(false);

  // Auto-cycle through nodes when user hasn't explicitly clicked/pinned
  useEffect(() => {
    if (userInteracted) return;

    const interval = setInterval(() => {
      setActiveNodeId((prev) => {
        const currentIndex = MEDIA_NODES.findIndex((n) => n.id === prev);
        const nextIndex = (currentIndex + 1) % MEDIA_NODES.length;
        return MEDIA_NODES[nextIndex].id;
      });
    }, 4500);

    return () => clearInterval(interval);
  }, [userInteracted]);

  // Zero-react-render DOM transform using requestAnimationFrame
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !canvasRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - (rect.left + rect.width / 2);
    const mouseY = e.clientY - (rect.top + rect.height / 2);

    const tiltY = ((mouseX / (rect.width / 2)) * 6).toFixed(1);
    const tiltX = (-(mouseY / (rect.height / 2)) * 6).toFixed(1);

    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      if (canvasRef.current) {
        canvasRef.current.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      }
    });
  };

  const handleMouseLeave = () => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    if (canvasRef.current) {
      canvasRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
    }
  };

  const activeNode = MEDIA_NODES.find((n) => n.id === activeNodeId) || MEDIA_NODES[0];

  return (
    <div className="w-full relative mt-4 select-none">
      {/* 3D Stage Container */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative max-w-5xl mx-auto rounded-2xl border border-zinc-200/90 dark:border-white/10 bg-white/95 dark:bg-zinc-950/90 shadow-xl p-4 sm:p-8 overflow-hidden transition-colors duration-200"
        style={{ perspective: 1000 }}
      >
        {/* Soft Ambient Backdrop */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden"
        >
          <div className="w-[480px] h-[480px] rounded-full bg-[#B3CCF5]/15 dark:bg-[#B3CCF5]/10 blur-3xl" />
        </div>

        {/* Top Control Bar / Live Status HUD */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-zinc-200/60 dark:border-white/[0.06]">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[11px] font-mono font-medium text-emerald-700 dark:text-emerald-400 tracking-tight">
                RADAR ACTIVE · 360° SCOPE
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-zinc-600 dark:text-zinc-300">
              <Compass className="w-3.5 h-3.5 text-[#1e3b79] dark:text-[#B3CCF5]" />
              <span>6 Social Networks + 100+ News Outlets Monitored</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
            <span className="hidden md:inline">Hover over 3D beacons to inspect telemetry</span>
            <div className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-white/[0.06] border border-zinc-200/80 dark:border-white/10 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              LIVE 08:30 MYT
            </div>
          </div>
        </div>

        {/* Visual Canvas with direct GPU transform */}
        <div
          ref={canvasRef}
          className="relative min-h-[380px] sm:min-h-[460px] md:min-h-[500px] flex items-center justify-center my-4 transition-transform duration-150 ease-out"
          style={{
            transform: 'rotateX(0deg) rotateY(0deg)',
          }}
        >
          {/* Layer 0: High-Performance Pure SVG Coordinate Grid */}
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <svg
              className="w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] md:w-[500px] md:h-[500px] opacity-75 dark:opacity-85"
              viewBox="0 0 500 500"
              fill="none"
            >
              {/* Outer Coordinate Degree Ring */}
              <circle
                cx="250"
                cy="250"
                r="230"
                stroke="currentColor"
                strokeWidth="1"
                className="text-zinc-300 dark:text-zinc-800"
                strokeDasharray="4 6"
              />

              {/* Major Horizon Ring */}
              <circle
                cx="250"
                cy="250"
                r="190"
                stroke="currentColor"
                strokeWidth="1"
                className="text-zinc-300 dark:text-zinc-700/60"
              />

              {/* 3D Spherical Latitude Arcs */}
              <ellipse
                cx="250"
                cy="250"
                rx="190"
                ry="95"
                stroke="#B3CCF5"
                strokeOpacity="0.4"
                strokeWidth="1.2"
                strokeDasharray="4 4"
              />
              <ellipse
                cx="250"
                cy="250"
                rx="190"
                ry="45"
                stroke="currentColor"
                strokeWidth="1"
                className="text-zinc-300 dark:text-zinc-800"
              />

              {/* 3D Longitude Ellipses */}
              <ellipse
                cx="250"
                cy="250"
                rx="95"
                ry="190"
                stroke="currentColor"
                strokeWidth="1"
                className="text-zinc-200 dark:text-zinc-800/80"
                strokeDasharray="2 4"
              />
              <ellipse
                cx="250"
                cy="250"
                rx="45"
                ry="190"
                stroke="#B3CCF5"
                strokeOpacity="0.4"
                strokeWidth="1"
                strokeDasharray="2 3"
              />

              {/* Center Crosshair Lines */}
              <line
                x1="250"
                y1="30"
                x2="250"
                y2="470"
                stroke="currentColor"
                strokeWidth="1"
                className="text-zinc-200 dark:text-zinc-800/60"
                strokeDasharray="3 3"
              />
              <line
                x1="30"
                y1="250"
                x2="470"
                y2="250"
                stroke="currentColor"
                strokeWidth="1"
                className="text-zinc-200 dark:text-zinc-800/60"
                strokeDasharray="3 3"
              />

              {/* Degree Coordinates */}
              <text x="250" y="24" textAnchor="middle" className="text-[10px] font-mono fill-zinc-400 dark:fill-zinc-500">
                000° NORTH
              </text>
              <text x="475" y="254" textAnchor="end" className="text-[10px] font-mono fill-zinc-400 dark:fill-zinc-500">
                090° EAST
              </text>
              <text x="250" y="488" textAnchor="middle" className="text-[10px] font-mono fill-zinc-400 dark:fill-zinc-500">
                180° SOUTH
              </text>
              <text x="25" y="254" textAnchor="start" className="text-[10px] font-mono fill-zinc-400 dark:fill-zinc-500">
                270° WEST
              </text>
            </svg>
          </div>

          {/* Layer 1: Ambient Radar Soft Backglow */}
          <div
            aria-hidden="true"
            className="absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full pointer-events-none opacity-25 dark:opacity-35"
            style={{
              background: 'radial-gradient(circle, rgba(179,204,245,0.35) 0%, rgba(59,130,246,0.1) 45%, transparent 70%)',
            }}
          />

          {/* Layer 2: The Core Brand Logo Centerpiece */}
          <div className="relative flex flex-col items-center justify-center p-6 group cursor-pointer z-10">
            {/* Circular Glass Plinth */}
            <div
              aria-hidden="true"
              className="absolute w-52 h-52 sm:w-68 sm:h-68 md:w-76 md:h-76 rounded-full bg-gradient-to-b from-[#B3CCF5]/20 to-transparent dark:from-white/[0.06] dark:to-transparent border border-[#B3CCF5]/40 dark:border-white/15 shadow-lg -z-10 transition-transform duration-300 group-hover:scale-105"
            />

            {/* Brand Logo (Optimized without drop-shadow) */}
            <div className="relative w-44 sm:w-60 md:w-68 h-auto flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/brand/pnp-360-logo.png"
                alt="People & Pixel 360 Aperture Radar"
                width={360}
                height={280}
                priority
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Core Label Floating Beneath Logo */}
            <div className="mt-2 sm:mt-3 px-3 py-1 rounded-full bg-zinc-900/95 dark:bg-black/95 text-white border border-[#B3CCF5]/40 text-xs font-mono tracking-tight flex items-center gap-1.5 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B3CCF5]" />
              <span>360° Omnidirectional Aperture</span>
            </div>
          </div>

          {/* Layer 3: Interactive Hotspot Beacons */}
          {MEDIA_NODES.map((node) => {
            const isActive = activeNodeId === node.id;

            return (
              <div
                key={node.id}
                style={{
                  top: `${node.coords.y}%`,
                  left: `${node.coords.x}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                className="absolute z-20 cursor-pointer transition-all duration-200"
                onClick={() => {
                  setActiveNodeId(node.id);
                  setUserInteracted(true);
                }}
                onMouseEnter={() => {
                  setActiveNodeId(node.id);
                  setUserInteracted(true);
                }}
              >
                {/* Hotspot Target Button */}
                <div className="relative group/pin p-2">
                  {/* Beacon Core Indicator */}
                  <div
                    className={`relative w-4 h-4 rounded-full border-2 transition-transform duration-200 flex items-center justify-center shadow-md ${
                      isActive
                        ? 'bg-[#B3CCF5] border-white dark:border-zinc-950 scale-125'
                        : 'bg-zinc-800 dark:bg-zinc-200 border-[#B3CCF5] hover:scale-110'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isActive ? 'bg-zinc-950 dark:bg-zinc-900' : 'bg-[#B3CCF5]'
                      }`}
                    />
                  </div>

                  {/* Minimal Node Tag Pill */}
                  <div
                    className={`hidden sm:flex absolute ${
                      node.popoverSide === 'left' ? 'right-6' : 'left-6'
                    } top-1/2 -translate-y-1/2 whitespace-nowrap px-2 py-0.5 rounded border text-[11px] font-mono tracking-tight transition-all duration-200 shadow-sm ${
                      isActive
                        ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 border-[#B3CCF5] font-semibold scale-105'
                        : 'bg-white/90 dark:bg-zinc-900/90 text-zinc-700 dark:text-zinc-300 border-zinc-200/80 dark:border-white/10'
                    }`}
                  >
                    <span>{node.nativeScript || node.region}</span>
                  </div>

                  {/* Desktop Hover Telemetry Card */}
                  {isActive && (
                    <div
                      className={`hidden md:block absolute z-30 pointer-events-auto transition-all duration-200 ${
                        node.popoverSide === 'left'
                          ? 'right-8 -top-8'
                          : node.popoverSide === 'top'
                          ? 'left-1/2 -translate-x-1/2 -top-28'
                          : 'left-8 -top-8'
                      } w-72 sm:w-84`}
                    >
                      <div className="rounded-xl border border-[#B3CCF5]/60 dark:border-[#B3CCF5]/40 bg-white/95 dark:bg-zinc-900/95 shadow-xl p-3.5 space-y-2">
                        <div className="flex items-center justify-between gap-2 pb-2 border-b border-zinc-200/80 dark:border-white/10">
                          <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            <span className="text-[11px] font-mono font-semibold text-zinc-900 dark:text-white">
                              {node.region}
                            </span>
                          </div>
                          <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-[#B3CCF5]/20 text-blue-950 dark:text-[#B3CCF5] border border-[#B3CCF5]/30">
                            {node.category}
                          </span>
                        </div>

                        <div className="flex items-baseline justify-between gap-2 pt-0.5">
                          <div>
                            <div className="text-xs font-semibold text-zinc-900 dark:text-white flex items-center gap-1">
                              {node.outlet}
                            </div>
                            <div className="text-[10px] text-zinc-500 dark:text-zinc-400">
                              {node.nativeScript}
                            </div>
                          </div>

                          <div className="text-right shrink-0">
                            <span className="text-sm font-bold font-mono tabular-nums text-zinc-950 dark:text-white block">
                              {node.metricValue}
                            </span>
                            <span className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400">
                              {node.metricDelta}
                            </span>
                          </div>
                        </div>

                        <p className="text-[11px] text-zinc-600 dark:text-zinc-300 border-t border-zinc-100 dark:border-white/[0.04] pt-1.5">
                          {node.feedDetail}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Mobile Floating Telemetry Card */}
          <div className="md:hidden absolute bottom-2 left-1/2 -translate-x-1/2 z-30 w-[94%] max-w-sm pointer-events-auto">
            <div className="rounded-xl border border-[#B3CCF5]/50 dark:border-[#B3CCF5]/30 bg-white/95 dark:bg-zinc-900/95 shadow-xl p-3.5">
              <div className="flex items-center justify-between gap-2 pb-2 border-b border-zinc-200/80 dark:border-white/10">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="text-xs font-mono font-semibold text-zinc-900 dark:text-white">
                    {activeNode.region}
                  </span>
                </div>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#B3CCF5]/20 text-blue-950 dark:text-[#B3CCF5] border border-[#B3CCF5]/30">
                  {activeNode.category}
                </span>
              </div>

              <div className="pt-2 flex items-baseline justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold text-zinc-900 dark:text-white">
                    {activeNode.outlet}
                  </div>
                  <div className="text-[10px] text-zinc-500 dark:text-zinc-400">
                    {activeNode.feedDetail}
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-sm font-bold font-mono tabular-nums text-zinc-950 dark:text-white block">
                    {activeNode.metricValue}
                  </span>
                  <span className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400">
                    {activeNode.metricDelta}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stage: Dual-Stream Telemetry (Social Media Firehose + Malaysian Press) */}
        <div className="pt-6 border-t border-zinc-200/60 dark:border-white/[0.06] space-y-5">
          {/* Section 1: Monitored Social Media Networks */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-zinc-500 dark:text-zinc-400 mb-3">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-900 dark:text-[#B3CCF5] font-mono text-[10px] font-bold border border-blue-500/20">
                  LIVE FIREHOSE
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-900 dark:text-white font-semibold">
                  6 Social Media Networks Monitored:
                </span>
              </div>
              <span className="font-mono text-[10px] text-zinc-500 dark:text-zinc-400">
                Real-Time Sentiment, Transcripts & Velocity
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
              {SOCIAL_PLATFORMS.map((platform) => (
                <div
                  key={platform.name}
                  className="p-2.5 rounded-xl border border-zinc-200/80 dark:border-white/[0.08] bg-zinc-50/80 dark:bg-zinc-900/60 transition-colors duration-150 hover:border-[#B3CCF5]/80 group cursor-pointer"
                >
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <div className="flex items-center gap-1.5 text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-[#B3CCF5] transition-colors">
                      <SocialIcon type={platform.iconType} />
                      <span className="text-xs font-bold tracking-tight">{platform.name}</span>
                    </div>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  </div>

                  <div className="text-[10px] text-zinc-600 dark:text-zinc-300 font-medium truncate">
                    {platform.focus}
                  </div>

                  <div className="mt-1 text-[9px] font-mono text-zinc-500 dark:text-zinc-400 tabular-nums">
                    {platform.metric}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Verified National & Vernacular Press Network */}
          <div className="pt-2 border-t border-zinc-100 dark:border-white/[0.04]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-zinc-500 dark:text-zinc-400 mb-2.5">
              <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-600 dark:text-zinc-300 font-semibold">
                National, Vernacular & Broadcast Press Stream:
              </span>
              <span className="font-mono text-[10px] text-zinc-500 dark:text-zinc-400">
                100+ Outlets · Continuous Ingestion
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
              {MONITORED_OUTLETS.map((item) => (
                <div
                  key={item.name}
                  className="px-2 py-1.5 rounded-lg border border-zinc-200/70 dark:border-white/[0.06] bg-zinc-50/70 dark:bg-zinc-900/30 text-center transition-colors duration-150 hover:border-[#B3CCF5]/60 group cursor-pointer"
                >
                  <div className="text-[11px] font-medium text-zinc-800 dark:text-zinc-200 truncate group-hover:text-blue-600 dark:group-hover:text-[#B3CCF5]">
                    {item.name}
                  </div>
                  <div className="text-[9px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-tight">
                    {item.lang}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
