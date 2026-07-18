import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { LuArrowLeft, LuArrowUpRight } from 'react-icons/lu'
import Reveal from '@/components/Reveal'
import MagneticButton from '@/components/MagneticButton'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import { articles, estimateReadingTime } from '@/data/articles'
import { caseStudies } from '@/data/ventures'
import { profile } from '@/data/profile'

const siteUrl = 'https://kaushal-portfolio-main.vercel.app'

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/insights/${article.slug}` },
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.excerpt,
      publishedTime: article.publishedAt,
    },
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) notFound()

  const relatedCaseStudy = caseStudies.find((s) => s.slug === article.relatedCaseStudySlug)
  const relatedArticles = articles.filter((a) => a.slug !== article.slug && a.category === article.category)
  const otherArticles = relatedArticles.length > 0 ? relatedArticles : articles.filter((a) => a.slug !== article.slug)

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: { '@type': 'Person', name: profile.name, url: siteUrl },
    publisher: { '@type': 'Person', name: profile.name },
    mainEntityOfPage: `${siteUrl}/insights/${article.slug}`,
  }

  return (
    <div className="pt-36 pb-24">
      <BreadcrumbJsonLd
        items={[
          { name: 'Insights', href: '/insights' },
          { name: article.title, href: `/insights/${article.slug}` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        suppressHydrationWarning
      />

      <article className="max-w-3xl mx-auto px-6">
        <Link href="/insights" className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-ink transition-colors mb-8">
          <LuArrowLeft size={16} />
          All insights
        </Link>

        <Reveal className="flex flex-col gap-4">
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
          <h1 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-ink text-balance leading-[1.1]">
            {article.title}
          </h1>
          <p className="text-lg text-muted leading-relaxed">{article.excerpt}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-col gap-6 text-base text-ink/80 leading-relaxed">
          <p>{article.intro}</p>
        </Reveal>

        <div className="mt-6 flex flex-col gap-10">
          {article.sections.map((section, i) => (
            <Reveal key={section.heading} delay={0.05 * i} className="flex flex-col gap-3">
              <h2 className="font-display text-xl font-bold text-ink">{section.heading}</h2>
              {section.body.map((paragraph, j) => (
                <p key={j} className="text-base text-ink/80 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </Reveal>
          ))}
        </div>

        {relatedCaseStudy && (
          <Reveal className="mt-14 rounded-xl border border-border bg-bg-alt p-6 flex items-center justify-between gap-4 flex-wrap">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">Related case study</span>
              <span className="text-sm font-medium text-ink">{relatedCaseStudy.title}</span>
            </div>
            <Link
              href={`/work/${relatedCaseStudy.slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue hover:underline"
            >
              Read the case study
              <LuArrowUpRight size={16} />
            </Link>
          </Reveal>
        )}

        {otherArticles.length > 0 && (
          <div className="mt-14 flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">More insights</span>
            <div className="grid gap-3 sm:grid-cols-2">
              {otherArticles.slice(0, 2).map((a) => (
                <Link
                  key={a.slug}
                  href={`/insights/${a.slug}`}
                  className="rounded-xl border border-border p-5 flex flex-col gap-2 hover:border-ink transition-colors"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.1em] text-blue">{a.category}</span>
                  <span className="text-sm font-bold text-ink leading-snug">{a.title}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-14">
          <MagneticButton href="/contact#book-a-call">Book a Strategy Call</MagneticButton>
        </div>
      </article>
    </div>
  )
}
