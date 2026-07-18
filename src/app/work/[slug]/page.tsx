import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { LuArrowLeft, LuArrowUpRight } from 'react-icons/lu'
import Reveal from '@/components/Reveal'
import MagneticButton from '@/components/MagneticButton'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import { caseStudies } from '@/data/ventures'

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const study = caseStudies.find((s) => s.slug === slug)
  if (!study) return {}
  return {
    title: study.title,
    description: study.summary,
    alternates: { canonical: `/work/${study.slug}` },
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = caseStudies.find((s) => s.slug === slug)
  if (!study) notFound()

  const sections = [
    { label: 'Challenge', body: study.challenge },
    { label: 'Approach', body: study.approach },
    { label: 'Solution', body: study.solution },
    { label: 'Lessons', body: study.lessons },
  ]

  return (
    <div className="pt-36 pb-24">
      <BreadcrumbJsonLd
        items={[
          { name: 'Work', href: '/work' },
          { name: study.title, href: `/work/${study.slug}` },
        ]}
      />
      <section className="max-w-3xl mx-auto px-6">
        <Link href="/work" className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-ink transition-colors mb-8">
          <LuArrowLeft size={16} />
          All work
        </Link>

        <Reveal className="flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.1em] text-blue">{study.category}</span>
          <h1 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-ink text-balance leading-[1.1]">
            {study.title}
          </h1>
          <p className="text-lg text-muted leading-relaxed">{study.summary}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 rounded-xl border border-border bg-bg-alt p-5 flex flex-col gap-1.5">
          <span className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">Outcome</span>
          <span className="text-sm font-medium text-ink">{study.outcome}</span>
        </Reveal>

        <div className="mt-14 flex flex-col gap-10">
          {sections.map((section, i) => (
            <Reveal key={section.label} delay={0.05 * i} className="flex flex-col gap-2">
              <h2 className="font-display text-lg font-bold text-ink">{section.label}</h2>
              <p className="text-base text-ink/80 leading-relaxed">{section.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10 flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">Tools</span>
          <div className="flex flex-wrap gap-1.5">
            {study.tools.map((tool) => (
              <span key={tool} className="px-2.5 py-1 rounded-full border border-border text-xs text-muted">
                {tool}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 flex flex-wrap items-center gap-4">
          {study.link && (
            <a
              href={study.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue hover:underline"
            >
              {study.link.label}
              <LuArrowUpRight size={16} />
            </a>
          )}
          <MagneticButton href="/contact#book-a-call" className="ml-auto">
            Book a Strategy Call
          </MagneticButton>
        </div>
      </section>
    </div>
  )
}
