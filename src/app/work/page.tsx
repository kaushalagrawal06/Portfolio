import type { Metadata } from 'next'
import SectionHeading from '@/components/SectionHeading'
import CaseStudyCard from '@/components/CaseStudyCard'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import { caseStudies } from '@/data/ventures'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Selected work from Kaushal Agrawal — AI automation, digital transformation, and business operations case studies.',
  alternates: { canonical: '/work' },
}

export default function WorkPage() {
  return (
    <div className="pt-36 pb-24">
      <BreadcrumbJsonLd items={[{ name: 'Work', href: '/work' }]} />
      <section className="max-w-6xl mx-auto px-6">
        <SectionHeading
          level={1}
          eyebrow="Selected Work"
          title="Systems I've built and businesses I've helped run better"
          description="A mix of founder-led work at NexWerk AI, client-facing digital transformation, and internal automation and coordination projects."
        />
      </section>

      <section className="max-w-6xl mx-auto px-6 mt-16 grid gap-5 sm:grid-cols-2">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </section>
    </div>
  )
}
