import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { content } from '@/content/en';
import { ThemeToggle } from './ThemeToggle';
import { MobileNav } from './MobileNav';

export function Navbar() {
  const { navbar } = content;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 dark:border-white/[0.08] bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-[#B3CCF5]/40 dark:border-white/15 bg-[#B3CCF5]/10 dark:bg-white/[0.06] flex items-center justify-center p-0.5 shadow-sm transition-colors">
            <Image
              src="/brand/pnp-360-logo.png"
              alt="People & Pixel 360"
              width={32}
              height={32}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-white flex items-center gap-1.5">
              People & Pixel
              <span className="px-1.5 py-0.2 text-[10px] font-mono font-bold bg-[#B3CCF5]/20 dark:bg-[#B3CCF5]/10 text-blue-950 dark:text-[#B3CCF5] border border-[#B3CCF5]/40 rounded backdrop-blur-sm">
                360
              </span>
            </span>
            <span className="text-[10px] text-zinc-600 dark:text-zinc-400 tracking-tight hidden sm:inline">
              Media Intelligence
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-[#B3CCF5] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <a
            href={siteConfig.links.login}
            className="hidden sm:inline-flex items-center justify-center text-xs font-medium px-3.5 py-1.5 rounded-lg glass-btn-white text-zinc-800 dark:text-zinc-200 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B3CCF5]"
          >
            {navbar.login}
          </a>

          <a
            href={siteConfig.links.bookDemo}
            className="inline-flex items-center justify-center text-xs font-semibold px-3.5 py-1.5 rounded-lg bg-[#B3CCF5] hover:bg-[#B3CCF5]/90 text-zinc-950 shadow-sm shadow-[#B3CCF5]/20 border border-white/60 dark:border-white/30 backdrop-blur-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B3CCF5]"
          >
            {navbar.bookDemo}
          </a>

          <MobileNav loginText={navbar.login} bookDemoText={navbar.bookDemo} />
        </div>
      </div>
    </header>
  );
}
