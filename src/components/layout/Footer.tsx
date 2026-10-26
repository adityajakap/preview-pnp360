import Image from 'next/image';
import { content } from '@/content/en';
import { siteConfig } from '@/config/site';
import { Shield, Globe } from 'lucide-react';

export function Footer() {
  const { footer } = content;

  return (
    <footer className="border-t border-zinc-200/80 dark:border-white/[0.08] bg-zinc-100/70 dark:bg-zinc-950 py-12 sm:py-16 text-xs text-zinc-600 dark:text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-[#B3CCF5]/40 dark:border-white/10 bg-[#B3CCF5]/10 dark:bg-white/[0.06] flex items-center justify-center p-0.5">
                <Image
                  src="/brand/pnp-360-logo.png"
                  alt="People & Pixel 360"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-white flex items-center gap-1.5">
                  {footer.brand}
                  <span className="px-1.5 py-0.2 text-[10px] font-mono font-bold bg-[#B3CCF5]/20 text-blue-950 dark:text-[#B3CCF5] border border-[#B3CCF5]/35 rounded backdrop-blur-sm">
                    360
                  </span>
                </span>
                <span className="text-[10px] text-zinc-500 dark:text-zinc-400 tracking-tight">
                  {footer.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs text-zinc-600 dark:text-zinc-400 max-w-sm leading-relaxed">
              Unified media monitoring, vernacular translation, and campaign intelligence built specifically for Malaysia’s public communication landscape.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-600 dark:text-zinc-400 pt-1">
              <Shield className="w-3.5 h-3.5 text-[#B3CCF5]" />
              <span>{footer.securityNote}</span>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-semibold text-zinc-900 dark:text-white uppercase tracking-wider font-mono">
              Platform
            </span>
            <ul className="space-y-2">
              {footer.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-zinc-950 dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Governance & Contact (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-semibold text-zinc-900 dark:text-white uppercase tracking-wider font-mono">
              Institutional Governance
            </span>
            <ul className="space-y-2">
              {footer.legal.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-zinc-950 dark:hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-3 border-t border-zinc-200/60 dark:border-white/[0.06] space-y-1 font-mono text-[11px]">
              <div>Official Enquiries: {siteConfig.links.contactEmail}</div>
              <div className="text-zinc-600 dark:text-zinc-400">Headquarters: Kuala Lumpur, Malaysia</div>
            </div>
          </div>
        </div>

        {/* Bottom bar with Language Switcher placeholder & Copyright */}
        <div className="pt-8 border-t border-zinc-200/80 dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono">
          <p className="text-zinc-600 dark:text-zinc-400">
            {footer.copyright}
          </p>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-zinc-200/80 dark:border-white/10 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300">
              <Globe className="w-3.5 h-3.5 text-[#B3CCF5]" />
              <span>Language:</span>
              <span className="font-bold text-blue-900 dark:text-[#B3CCF5]">English</span>
              <span className="text-zinc-400">/</span>
              <span className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 cursor-pointer">
                Melayu
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

