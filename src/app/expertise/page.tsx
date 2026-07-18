import type { Metadata } from 'next'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import MagneticButton from '@/components/MagneticButton'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import { expertiseAreas } from '@/data/expertise'

export const metadata: Metadata = {
  title: 'Expertise',
  description:
    'AI automation, business operations, digital transformation, and strategy — how Kaushal Agrawal helps companies scale.',
  alternates: { canonical: '/expertise' },
}

export default function ExpertisePage() {
  return (
    <div className="pt-36 pb-24">
      <BreadcrumbJsonLd items={[{ name: 'Expertise', href: '/expertise' }]} />
      <section className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Expertise"
          title="Six areas where I create the most business value"
          description="Each grounded in real operating experience — not a generic services menu."
        />
        <p className="mt-6 max-w-2xl text-sm text-ink/80 leading-relaxed">
          Kaushal Agrawal helps startups and SMEs improve operations through AI automation, business analysis,
          digital transformation, and project coordination. Below is where that work concentrates: the problem
          each area solves, what the engagement looks like, and the tools involved.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 mt-16 flex flex-col gap-6">
        {expertiseAreas.map((area, i) => (
          <Reveal
            key={area.slug}
            delay={i * 0.05}
            className="rounded-2xl border border-border bg-bg-alt p-7 md:p-10 grid gap-8 lg:grid-cols-[1fr_1.3fr]"
          >
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-blue">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display text-2xl font-bold text-ink leading-snug">{area.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{area.problem}</p>
            </div>

            <div className="flex flex-col gap-5">
              <p className="text-sm text-ink/80 leading-relaxed">{area.whatIDo}</p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">Deliverables</span>
                  <ul className="flex flex-col gap-1.5">
                    {area.deliverables.map((d) => (
                      <li key={d} className="text-sm text-ink/80 flex items-start gap-2">
                        <span className="text-blue mt-1 shrink-0">▸</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">Tools</span>
                  <div className="flex flex-wrap gap-1.5">
                    {area.tools.map((tool) => (
                      <span key={tool} className="px-2.5 py-1 rounded-full border border-border text-xs text-muted">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-sm font-medium text-ink pt-1">{area.outcome}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="max-w-6xl mx-auto px-6 mt-20 flex justify-center">
        <MagneticButton href="/contact#book-a-call">Book a Strategy Call</MagneticButton>
      </section>
    </div>
  )
}
