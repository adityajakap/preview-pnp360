import { content } from '@/content/en';
import { FaqAccordion } from './FaqAccordion';

export function FaqSection() {
  const { faq } = content;

  return (
    <section id="faq" className="py-20 sm:py-28 border-b border-zinc-200/80 dark:border-white/[0.08] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md border border-[#B3CCF5]/40 bg-[#B3CCF5]/10 text-blue-950 dark:text-[#B3CCF5] font-mono text-[11px] font-semibold backdrop-blur-sm">
            {faq.sectionTag}
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white leading-tight">
            {faq.headline}
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {faq.description}
          </p>
        </div>

        <FaqAccordion items={faq.items} />
      </div>
    </section>
  );
}
