'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ShieldCheck, Compass } from 'lucide-react';

interface MediaNode {
  id: string;
  region: string;
  outlet: string;
  outletShort?: string;
  nativeScript?: string;
  category: string;
  metricLabel: string;
  metricValue: string;
  metricDelta: string;
  status: string;
  coords: { x: number; y: number }; // percentage 0-100
  feedDetail: string;
  popoverSide: 'left' | 'right' | 'top' | 'bottom';
  iconType: 'tiktok' | 'x' | 'instagram' | 'facebook' | 'linkedin' | 'threads' | 'news' | 'languages';
}

const MEDIA_NODES: MediaNode[] = [
  {
    id: 'tiktok-reels',
    region: 'Viral Video Stream',
    outlet: 'TikTok FYP & IG Reels',
    outletShort: 'TikTok & Reels',
    category: 'Short-Form Video Radar',
    metricLabel: 'Video Velocity',
    metricValue: '48,200/hr',
    metricDelta: '+42% viral spike alert',
    status: 'Soundbite AI Active',
    coords: { x: 78, y: 24 },
    feedDetail: 'Real-time soundbite audio transcription, viral hashtag acceleration, and netizen comment mood indexing',
    popoverSide: 'left',
    iconType: 'tiktok',
  },
  {
    id: 'x-threads-radar',
    region: 'Breaking Conversations',
    outlet: 'X (Twitter) & Threads Radar',
    outletShort: 'X & Threads',
    category: 'Real-Time Sparks',
    metricLabel: 'Discussion Velocity',
    metricValue: '118,400/hr',
    metricDelta: 'Sparks 18m before press',
    status: 'Early Warning Active',
    coords: { x: 22, y: 24 },
    feedDetail: 'Flags viral quote-tweet storms, netizen thread escalation, and emerging sentiment polarities before press pickup',
    popoverSide: 'right',
    iconType: 'x',
  },
  {
    id: 'digital-news-portals',
    region: 'Digital News & Web',
    outlet: '10,000+ Online Portals & Broadcast',
    outletShort: '10,000+ Digital Portals',
    category: 'Web Editorial & Broadcast',
    metricLabel: 'Portals Crawled',
    metricValue: '10,420',
    metricDelta: '24/7 continuous stream',
    status: 'Continuous Ingestion',
    coords: { x: 50, y: 13 },
    feedDetail: 'Real-time web ingestion across national dailies (The Star, Malaysiakini, Astro Awani, FMT) and digital blogs',
    popoverSide: 'bottom',
    iconType: 'news',
  },
  {
    id: 'facebook-communities',
    region: 'Netizen Communities',
    outlet: 'Facebook Groups & Pages',
    outletShort: 'Facebook Communities',
    category: 'Grassroots Netizen Mood',
    metricLabel: 'Comment Volume',
    metricValue: '86,300/hr',
    metricDelta: '94% netizen coverage',
    status: 'Community Radar',
    coords: { x: 22, y: 76 },
    feedDetail: 'Monitors public discussion groups, netizen reaction velocity, and localized dialect sentiment (Bahasa Rojak)',
    popoverSide: 'right',
    iconType: 'facebook',
  },
  {
    id: 'vernacular-multilingual',
    region: 'Vernacular Press',
    outlet: 'Chinese & Tamil Dailies (8 Media)',
    outletShort: 'Vernacular (中文 / தமிழ்)',
    nativeScript: '星洲日报 · மக்கள் ஓசை',
    category: 'Multilingual Ingestion',
    metricLabel: 'Translation Latency',
    metricValue: '210ms',
    metricDelta: 'Mandarin/Tamil → BM Baku',
    status: 'Zero Blindspots',
    coords: { x: 78, y: 76 },
    feedDetail: 'Deterministic real-time translation of Sin Chew Daily, Makkal Osai, China Press, and all 8 vernacular dailies',
    popoverSide: 'left',
    iconType: 'languages',
  },
  {
    id: 'linkedin-b2b',
    region: 'Corporate & B2B Radar',
    outlet: 'LinkedIn & Executive Feeds',
    outletShort: 'LinkedIn & Executive PR',
    category: 'B2B Reputation Stream',
    metricLabel: 'Executive Reach',
    metricValue: '24,600/hr',
    metricDelta: '+19% stakeholder reach',
    status: 'Corporate Radar',
    coords: { x: 50, y: 87 },
    feedDetail: 'C-suite statements, industry thought leadership debates, regulator announcements, and brand equity monitoring',
    popoverSide: 'top',
    iconType: 'linkedin',
  },
];

interface SocialPlatform {
  name: string;
  focus: string;
  metric: string;
  iconType: 'x' | 'tiktok' | 'instagram' | 'facebook' | 'linkedin' | 'threads';
  targetNodeId: string;
}

const SOCIAL_PLATFORMS: SocialPlatform[] = [
  {
    name: 'TikTok',
    focus: 'Soundbites & Comments',
    metric: '+42% velocity spike',
    iconType: 'tiktok',
    targetNodeId: 'tiktok-reels',
  },
  {
    name: 'X',
    focus: 'Viral Threads & Reposts',
    metric: '14.8k mentions/hr',
    iconType: 'x',
    targetNodeId: 'x-threads-radar',
  },
  {
    name: 'Instagram',
    focus: 'Visual & Mention Index',
    metric: 'Real-time Sentiment',
    iconType: 'instagram',
    targetNodeId: 'tiktok-reels',
  },
  {
    name: 'Facebook',
    focus: 'Community Discussions',
    metric: 'Debate Acceleration',
    iconType: 'facebook',
    targetNodeId: 'facebook-communities',
  },
  {
    name: 'LinkedIn',
    focus: 'Executive Posts & PR',
    metric: 'B2B Reputation Stream',
    iconType: 'linkedin',
    targetNodeId: 'linkedin-b2b',
  },
  {
    name: 'Threads',
    focus: 'Early Conversational Sparks',
    metric: 'Sub-hour trend alert',
    iconType: 'threads',
    targetNodeId: 'x-threads-radar',
  },
];

const MONITORED_OUTLETS = [
  { name: 'The Star', lang: 'English', targetNodeId: 'digital-news-portals' },
  { name: 'Malaysiakini', lang: 'Bilingual', targetNodeId: 'digital-news-portals' },
  { name: 'Sin Chew Daily (星洲日报)', lang: 'Mandarin', targetNodeId: 'vernacular-multilingual' },
  { name: 'Sinar Harian', lang: 'Bahasa Melayu', targetNodeId: 'digital-news-portals' },
  { name: 'Makkal Osai (மக்கள் ஓசை)', lang: 'Tamil', targetNodeId: 'vernacular-multilingual' },
  { name: 'Astro Awani', lang: 'Broadcast', targetNodeId: 'digital-news-portals' },
  { name: 'Berita Harian', lang: 'Bahasa Melayu', targetNodeId: 'digital-news-portals' },
  { name: 'Free Malaysia Today', lang: 'English', targetNodeId: 'digital-news-portals' },
];

function SocialIcon({
  type,
  className = 'w-3.5 h-3.5 shrink-0',
}: {
  type: SocialPlatform['iconType'] | 'news' | 'languages';
  className?: string;
}) {
  switch (type) {
    case 'x':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case 'tiktok':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.29 6.29 0 0 0 1.96-4.48v-6.7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.96-.4z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
    case 'facebook':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      );
    case 'threads':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.263 11.097c-.03-3.486-1.92-5.586-5.111-5.586-2.13 0-3.922.963-4.863 2.499l2.062 1.438c.535-.843 1.272-1.543 2.628-1.543 1.528 0 2.318.85 2.544 2.431a15 15 0 0 0-2.236-.173c-4.125 0-6.068 1.867-6.068 4.336s1.943 3.99 4.804 3.99c3.139 0 5.013-2.115 5.781-4.735.798.361 1.348 1.204 1.348 2.47 0 3.387-3.907 5.232-7.22 5.232-4.885 0-8.077-3.207-8.077-8.424 0-6.392 4.223-10.487 9.9-10.487 3.808 0 5.69 1.671 6.97 3.914l2.108-1.475C21.44 2.078 18.331 0 13.663 0 6.227 0 1.168 5.277 1.168 12.934c0 7 4.953 11.066 10.856 11.066 4.878 0 9.809-2.846 9.809-7.716 0-2.545-1.46-4.231-3.569-5.187m-6.33 4.855c-1.077 0-2.026-.512-2.026-1.453 0-1.483 1.822-1.934 3.606-1.934.678 0 1.34.045 1.927.173-.422 1.927-1.671 3.215-3.508 3.214Z" />
        </svg>
      );
    case 'news':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
          <path d="M18 14h-8" />
          <path d="M15 18h-5" />
          <path d="M10 6h8v4h-8V6Z" />
        </svg>
      );
    case 'languages':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m5 8 6 6" />
          <path d="m4 14 6-6 2-3" />
          <path d="M2 5h12" />
          <path d="M7 2h1" />
          <path d="m22 22-5-10-5 10" />
          <path d="M14 18h6" />
        </svg>
      );
  }
}

export function Hero3DGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);
  const [activeNodeId, setActiveNodeId] = useState<string>('tiktok-reels');
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
              <span>6 Social Networks + 10,000+ News Portals Monitored</span>
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
                  {/* Subtle Radar Pulse Ring for active beacon */}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-1 rounded-full bg-[#B3CCF5]/50 animate-ping pointer-events-none"
                    />
                  )}

                  {/* Beacon Core Indicator */}
                  <div
                    className={`relative w-4 h-4 rounded-full border-2 transition-transform duration-200 flex items-center justify-center shadow-md ${
                      isActive
                        ? 'bg-[#B3CCF5] border-white dark:border-zinc-950 scale-125 ring-2 ring-[#B3CCF5]/40'
                        : 'bg-zinc-800 dark:bg-zinc-200 border-[#B3CCF5] hover:scale-110'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isActive ? 'bg-zinc-950 dark:bg-zinc-900' : 'bg-[#B3CCF5]'
                      }`}
                    />
                  </div>

                  {/* Node Tag Pill with Platform Icon */}
                  <div
                    className={`hidden sm:flex items-center gap-1.5 absolute ${
                      node.popoverSide === 'left' ? 'right-6' : 'left-6'
                    } top-1/2 -translate-y-1/2 whitespace-nowrap px-2.5 py-1 rounded-full border text-[11px] font-mono tracking-tight transition-all duration-200 shadow-sm ${
                      isActive
                        ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 border-[#B3CCF5] font-semibold scale-105 shadow-md shadow-[#B3CCF5]/20'
                        : 'bg-white/95 dark:bg-zinc-900/90 text-zinc-700 dark:text-zinc-300 border-zinc-200/90 dark:border-white/10 hover:border-[#B3CCF5]/60'
                    }`}
                  >
                    <SocialIcon
                      type={node.iconType}
                      className={`w-3 h-3 shrink-0 ${
                        isActive ? 'text-[#B3CCF5] dark:text-blue-900' : 'text-zinc-500 dark:text-zinc-400'
                      }`}
                    />
                    <span>{node.nativeScript || node.outletShort || node.outlet}</span>
                  </div>

                  {/* Desktop Hover Telemetry Card */}
                  {isActive && (
                    <div
                      className={`hidden md:block absolute z-30 pointer-events-auto transition-all duration-200 ${
                        node.popoverSide === 'left'
                          ? 'right-8 -top-8'
                          : node.popoverSide === 'right'
                          ? 'left-8 -top-8'
                          : node.popoverSide === 'top'
                          ? 'left-1/2 -translate-x-1/2 -top-32'
                          : 'left-1/2 -translate-x-1/2 top-8'
                      } w-72 sm:w-84`}
                    >
                      <div className="rounded-xl border border-[#B3CCF5]/60 dark:border-[#B3CCF5]/40 bg-white/95 dark:bg-zinc-900/95 shadow-xl p-3.5 space-y-2">
                        <div className="flex items-center justify-between gap-2 pb-2 border-b border-zinc-200/80 dark:border-white/10">
                          <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            <SocialIcon type={node.iconType} className="w-3.5 h-3.5 text-blue-900 dark:text-[#B3CCF5]" />
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
                              {node.status}
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
                  <SocialIcon type={activeNode.iconType} className="w-3.5 h-3.5 text-blue-900 dark:text-[#B3CCF5]" />
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
                  LIVE SOCIAL FIREHOSE
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-900 dark:text-white font-semibold">
                  6 Social Media Networks Monitored
                </span>
              </div>
              <span className="font-mono text-[10px] text-zinc-500 dark:text-zinc-400">
                Sub-minute Sentiment, Transcripts & Velocity
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
              {SOCIAL_PLATFORMS.map((platform) => {
                const isSelected = activeNodeId === platform.targetNodeId;

                return (
                  <div
                    key={platform.name}
                    onClick={() => {
                      setActiveNodeId(platform.targetNodeId);
                      setUserInteracted(true);
                    }}
                    onMouseEnter={() => {
                      setActiveNodeId(platform.targetNodeId);
                      setUserInteracted(true);
                    }}
                    className={`p-2.5 rounded-xl border transition-all duration-150 group cursor-pointer ${
                      isSelected
                        ? 'border-[#B3CCF5] bg-blue-50/50 dark:bg-white/[0.08] shadow-sm scale-[1.02]'
                        : 'border-zinc-200/80 dark:border-white/[0.08] bg-zinc-50/80 dark:bg-zinc-900/60 hover:border-[#B3CCF5]/80'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1 mb-1.5">
                      <div className="flex items-center gap-1.5 text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-[#B3CCF5] transition-colors">
                        <SocialIcon type={platform.iconType} />
                        <span className="text-xs font-bold tracking-tight">{platform.name}</span>
                      </div>
                      <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-blue-600 dark:bg-[#B3CCF5] animate-pulse' : 'bg-emerald-500'}`} />
                    </div>

                    <div className="text-[10px] text-zinc-600 dark:text-zinc-300 font-medium truncate">
                      {platform.focus}
                    </div>

                    <div className="mt-1 text-[9px] font-mono text-zinc-500 dark:text-zinc-400 tabular-nums">
                      {platform.metric}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 2: Verified National & Vernacular Press Network */}
          <div className="pt-2 border-t border-zinc-100 dark:border-white/[0.04]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-zinc-500 dark:text-zinc-400 mb-2.5">
              <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-600 dark:text-zinc-300 font-semibold">
                Digital Web, Vernacular & Broadcast Media:
              </span>
              <span className="font-mono text-[10px] text-zinc-500 dark:text-zinc-400">
                10,000+ Portals · 8 Chinese & Tamil Dailies · 24/7 Ingestion
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
              {MONITORED_OUTLETS.map((item) => {
                const isSelected = activeNodeId === item.targetNodeId;

                return (
                  <div
                    key={item.name}
                    onClick={() => {
                      setActiveNodeId(item.targetNodeId);
                      setUserInteracted(true);
                    }}
                    onMouseEnter={() => {
                      setActiveNodeId(item.targetNodeId);
                      setUserInteracted(true);
                    }}
                    className={`px-2 py-1.5 rounded-lg border text-center transition-all duration-150 group cursor-pointer ${
                      isSelected
                        ? 'border-[#B3CCF5] bg-blue-50/50 dark:bg-white/[0.08] shadow-sm'
                        : 'border-zinc-200/70 dark:border-white/[0.06] bg-zinc-50/70 dark:bg-zinc-900/30 hover:border-[#B3CCF5]/60'
                    }`}
                  >
                    <div className="text-[11px] font-medium text-zinc-800 dark:text-zinc-200 truncate group-hover:text-blue-600 dark:group-hover:text-[#B3CCF5]">
                      {item.name}
                    </div>
                    <div className="text-[9px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-tight">
                      {item.lang}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
