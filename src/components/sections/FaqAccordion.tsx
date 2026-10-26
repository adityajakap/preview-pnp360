'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

interface FaqAccordionProps {
  items: readonly FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="rounded-xl border border-zinc-200/80 dark:border-white/[0.08] bg-white/80 dark:bg-zinc-900/40 backdrop-blur-sm overflow-hidden transition-colors hover:border-[#B3CCF5]/40"
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              className="w-full px-5 py-4 flex items-center justify-between text-left gap-4 hover:bg-zinc-50 dark:hover:bg-zinc-800/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B3CCF5]"
            >
              <span className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-white">
                {item.q}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-blue-900 dark:text-[#B3CCF5]' : ''
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-zinc-100 dark:border-white/[0.04]">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
