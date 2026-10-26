import { Calendar } from 'lucide-react';
import { content } from '@/content/en';
import { DemoForm } from './DemoForm';

export function CtaSection() {
  const { cta } = content;

  return (
    <section id="book-demo" className="py-20 sm:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-10 text-center">
        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#B3CCF5]/40 bg-[#B3CCF5]/10 text-blue-950 dark:text-[#B3CCF5] font-mono text-[11px] font-semibold backdrop-blur-sm">
            <Calendar className="w-3.5 h-3.5" />
            <span>{cta.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white leading-[1.1]">
            {cta.headline}
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {cta.description}
          </p>
        </div>

        <div className="max-w-2xl mx-auto rounded-3xl border border-[#B3CCF5]/35 bg-white/90 dark:bg-zinc-900/80 backdrop-blur-xl p-6 sm:p-10 shadow-2xl text-left">
          <DemoForm />
        </div>
      </div>
    </section>
  );
}
