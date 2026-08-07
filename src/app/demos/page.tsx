import type { Metadata } from 'next'
import Link from 'next/link'
import { LuArrowUpRight, LuZap } from 'react-icons/lu'
import SectionHeading from '@/components/SectionHeading'
import Reveal from '@/components/Reveal'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import { demos } from '@/data/demos'

export const metadata: Metadata = {
  title: 'Website Demos',
  description:
    'Live sample websites by Kaushal Agrawal — restaurant, clinic, SaaS, agency, industrial, e-commerce, and student portfolio demos you can explore. Each shows the design plus the AI automation behind it.',
  alternates: { canonical: '/demos' },
}

export default function DemosPage() {
  return (
    <div className="pt-36 pb-28">
      <BreadcrumbJsonLd items={[{ name: 'Demos', href: '/demos' }]} />

      <section className="max-w-6xl mx-auto px-6">
        <SectionHeading
          level={1}
          eyebrow="Website Demos"
          title="Sample websites I can build for your business"
          description="Explore live demo sites across different industries. Each one is a real, working example — designed to convert, and wired with the kind of AI automation that runs the busywork behind it. Find the one closest to your business, then let’s build yours."
        />
      </section>

      <section className="max-w-6xl mx-auto px-6 mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {demos.map((demo, i) => (
          <Reveal key={demo.slug} delay={i * 0.05}>
            <Link
              href={`/demos/${demo.slug}`}
              className="group relative flex flex-col gap-4 rounded-2xl border border-border bg-bg-alt p-6 h-full overflow-hidden transition-all hover:border-ink hover:shadow-[0_18px_45px_-30px_rgba(22,38,29,0.45)]"
            >
              {/* branded wash */}
              <div
                className="pointer-events-none absolute inset-0 opacity-60 transition-opacity group-hover:opacity-100"
                style={{ background: `radial-gradient(120% 80% at 100% 0%, ${demo.tint}, transparent 70%)` }}
                aria-hidden="true"
              />

              <div className="relative flex items-center justify-between gap-3">
                <span
                  className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold"
                  style={{ backgroundColor: `${demo.accent}1A`, color: demo.accent }}
                >
                  {demo.category}
                </span>
                <span
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-border bg-bg text-ink transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <LuArrowUpRight size={17} />
                </span>
              </div>

              <div className="relative flex flex-col gap-2 flex-1">
                <h3 className="font-display text-lg font-bold text-ink leading-snug">{demo.tagline}</h3>
                <p className="text-sm text-muted leading-relaxed">{demo.audience}</p>
              </div>

              <div className="relative flex items-start gap-2 border-t border-border pt-3">
                <LuZap size={14} className="mt-0.5 shrink-0" style={{ color: demo.accent }} />
                <p className="text-xs text-muted leading-relaxed">{demo.automation}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>

      <section className="max-w-3xl mx-auto px-6 mt-20 text-center flex flex-col items-center gap-5">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-balance">
          Don’t see your industry? That’s fine.
        </h2>
        <p className="text-muted leading-relaxed">
          These are starting points, not templates. Every site I build is tailored to your business,
          your customers, and the tasks you want automated away. Tell me what you do, and I’ll show you
          what’s possible.
        </p>
        <Link
          href="/contact#book-a-call"
          className="inline-flex items-center gap-2 rounded-full bg-ink text-bg px-6 py-3 text-sm font-semibold transition-colors hover:bg-blue min-h-[44px]"
        >
          Book a strategy call
        </Link>
      </section>
    </div>
  )
}
