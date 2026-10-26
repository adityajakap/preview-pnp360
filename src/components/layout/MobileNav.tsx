'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface MobileNavProps {
  loginText: string;
  bookDemoText: string;
}

export function MobileNav({ loginText, bookDemoText }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation menu"
        className="p-1.5 rounded-lg glass-btn-white text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white"
      >
        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {open && (
        <div className="absolute top-16 left-0 right-0 border-b border-zinc-200/80 dark:border-white/10 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl p-6 shadow-xl space-y-4 animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-3">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-zinc-700 dark:text-zinc-200 hover:text-blue-900 dark:hover:text-[#B3CCF5] py-1 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-zinc-200/80 dark:border-white/10 flex flex-col gap-2.5">
            <a
              href={siteConfig.links.login}
              className="w-full text-center py-2 text-sm font-medium rounded-lg glass-btn-white text-zinc-800 dark:text-zinc-200 transition-all"
            >
              {loginText}
            </a>
            <a
              href={siteConfig.links.bookDemo}
              onClick={() => setOpen(false)}
              className="w-full text-center py-2 text-sm font-semibold rounded-lg bg-[#B3CCF5] hover:bg-[#B3CCF5]/90 text-zinc-950 shadow-sm border border-white/40 transition-colors"
            >
              {bookDemoText}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

