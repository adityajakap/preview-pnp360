'use client';

import { useState } from 'react';
import { Languages, CheckCircle2, Clock, ArrowRightLeft } from 'lucide-react';

interface ArticleProps {
  article: {
    id: string;
    outlet: string;
    language: string;
    publishedAt: string;
    sentiment: string;
    sentimentScore: string;
    originalTitle: string;
    translatedTitle: string;
    summary: string;
    translationLatency: string;
    verified: boolean;
  };
}

export function VernacularArticleCard({ article }: ArticleProps) {
  const [showOriginal, setShowOriginal] = useState(false);

  return (
    <div className="rounded-xl border border-zinc-200/80 dark:border-white/[0.08] bg-white/90 dark:bg-zinc-900/60 backdrop-blur-sm p-5 space-y-4 shadow-sm hover:border-[#B3CCF5]/50 transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-xs text-zinc-900 dark:text-zinc-100">
            {article.outlet}
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#B3CCF5]/20 text-blue-950 dark:text-[#B3CCF5] border border-[#B3CCF5]/35">
            {article.language}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono tabular-nums text-zinc-600 dark:text-zinc-400">
            {article.publishedAt}
          </span>
          <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            {article.sentimentScore}
          </span>
        </div>
      </div>

      <div className="min-h-[64px] flex flex-col justify-center">
        <div className="flex items-center gap-1.5 mb-1 text-[11px] font-mono font-semibold">
          {showOriginal ? (
            <span className="text-amber-600 dark:text-amber-400 flex items-center gap-1">
              <Languages className="w-3.5 h-3.5" />
              Original Vernacular Source ({article.language}):
            </span>
          ) : (
            <span className="text-blue-900 dark:text-[#B3CCF5] flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#B3CCF5]" />
              Translated to Bahasa Melayu Baku (Azure AI Translator):
            </span>
          )}
        </div>

        <h3 className="text-sm sm:text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 leading-snug">
          {showOriginal ? article.originalTitle : article.translatedTitle}
        </h3>
      </div>

      <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-zinc-100 dark:border-white/[0.04] pt-3">
        {article.summary}
      </p>

      <div className="flex items-center justify-between pt-2 border-t border-zinc-100 dark:border-white/[0.04] text-[11px]">
        <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 font-mono">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            Verified Pipeline
          </span>
          <span>·</span>
          <span>Latency: {article.translationLatency}</span>
        </div>

        <button
          type="button"
          onClick={() => setShowOriginal(!showOriginal)}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold border border-[#B3CCF5]/40 bg-[#B3CCF5]/15 dark:bg-[#B3CCF5]/10 text-blue-950 dark:text-[#B3CCF5] hover:bg-[#B3CCF5]/25 backdrop-blur-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B3CCF5]"
        >
          <ArrowRightLeft className="w-3.5 h-3.5" />
          <span>{showOriginal ? 'Show translated Malay' : 'Show original text'}</span>
        </button>
      </div>
    </div>
  );
}
