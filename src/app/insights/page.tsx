import type { Metadata } from 'next'
import Link from 'next/link'
import SectionHeading from '@/components/SectionHeading'
import Reveal from '@/components/Reveal'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import { articles, estimateReadingTime } from '@/data/articles'

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Writing on AI automation, business operations, and digital transformation from Kaushal Agrawal.',
  alternates: { canonical: '/insights' },
}

export default function InsightsPage() {
  return (
    <div className="pt-36 pb-32">
      <BreadcrumbJsonLd items={[{ name: 'Insights', href: '/insights' }]} />
      <section className="max-w-3xl mx-auto px-6">
        <SectionHeading
          eyebrow="Insights"
          title="Practitioner notes on AI automation and business operations"
          description="Short, specific write-ups grounded in real engagements — not general commentary."
        />
      </section>

      <section className="max-w-3xl mx-auto px-6 mt-14 flex flex-col gap-5">
        {articles.map((article, i) => (
          <Reveal key={article.slug} delay={i * 0.06}>
            <Link
              href={`/insights/${article.slug}`}
              className="group flex flex-col gap-3 rounded-2xl border border-border bg-bg-alt p-6 md:p-7 transition-colors hover:border-ink"
            >
              <div className="flex items-center gap-3 text-xs text-muted">
                <span className="font-semibold uppercase tracking-[0.1em] text-blue">{article.category}</span>
                <span>·</span>
                <time dateTime={article.publishedAt}>
                  {new Date(article.publishedAt).toLocaleDateString('en-GB', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span>·</span>
                <span>{estimateReadingTime(article)} min read</span>
              </div>
              <h2 className="font-display text-xl md:text-2xl font-bold text-ink leading-snug group-hover:text-blue transition-colors">
                {article.title}
              </h2>
              <p className="text-sm text-muted leading-relaxed">{article.excerpt}</p>
            </Link>
          </Reveal>
        ))}
      </section>
    </div>
  )
}
