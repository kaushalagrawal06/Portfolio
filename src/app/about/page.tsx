import type { Metadata } from 'next'
import Image from 'next/image'
import { LuCheck } from 'react-icons/lu'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import MagneticButton from '@/components/MagneticButton'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import { profile } from '@/data/profile'
import { education } from '@/data/education'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Kaushal Agrawal is an AI automation consultant and business operations strategist based in Munich, Germany, and founder of NexWerk AI.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <div className="pt-36 pb-24">
      <BreadcrumbJsonLd items={[{ name: 'About', href: '/about' }]} />
      <section className="max-w-6xl mx-auto px-6 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-start">
        <Reveal className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden border border-border shadow-[0_20px_60px_-25px_rgba(22,38,29,0.4)] mx-auto lg:mx-0">
          <Image
            src={profile.portrait.src}
            alt={profile.portrait.alt}
            fill
            priority
            sizes="(min-width: 1024px) 384px, 320px"
            className="object-cover"
          />
        </Reveal>

        <div className="flex flex-col gap-8">
          <SectionHeading eyebrow="About" title="I work at the intersection of business operations and applied AI." />

          <div className="flex flex-col gap-4 text-base text-ink/80 leading-relaxed">
            <p>
              I&apos;m {profile.name}, an {profile.role} based in {profile.location}. My background spans
              international trade, business analysis, and project coordination across companies in India and
              Germany — Adani Group, the Consulate General of India in Munich, Laumer GmbH, and now HORBACH in
              Stuttgart.
            </p>
            <p>
              Across those roles, the same problem kept showing up: good businesses running on manual processes that
              couldn&apos;t scale. That&apos;s what led me to automation and AI — not as a technology interest, but
              as a practical answer to operational bottlenecks I&apos;d already spent years diagnosing.
            </p>
            <p>
              I founded <a href={profile.nexwerk} target="_blank" rel="noopener noreferrer" className="text-blue font-medium hover:underline">NexWerk AI</a> to
              turn that into a practice: designing and implementing AI agents, workflow automation, and digital
              systems for SMEs and industrial businesses, with a focus on solutions that respect data privacy and fit
              a company&apos;s existing tools rather than replacing them wholesale.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border p-5 flex flex-col gap-1.5">
              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">Based in</span>
              <span className="text-sm text-ink font-medium">{profile.location}</span>
            </div>
            <div className="rounded-xl border border-border p-5 flex flex-col gap-1.5">
              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">Mobility</span>
              <span className="text-sm text-ink font-medium">{profile.mobility}</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">Languages</span>
            <ul className="flex flex-col gap-2">
              {profile.languages.map((lang) => (
                <li key={lang.name} className="flex items-center gap-2.5 text-sm text-ink/80">
                  <LuCheck size={16} className="text-blue shrink-0" />
                  <span className="font-medium text-ink">{lang.name}</span>
                  <span className="text-muted">— {lang.level}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <MagneticButton href="/contact#book-a-call">Book a Strategy Call</MagneticButton>
            <MagneticButton href={profile.resumeUrl} variant="secondary">
              Download Resume
            </MagneticButton>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pt-24">
        <SectionHeading eyebrow="Education" title="Academic background" />
        <div className="grid gap-4 sm:grid-cols-3 mt-8">
          {education.map((item) => (
            <Reveal key={item.degree} className="rounded-xl border border-border p-5 flex flex-col gap-1.5">
              <span className="text-xs font-medium text-muted">{item.year}</span>
              <span className="text-sm font-bold text-ink leading-snug">{item.degree}</span>
              <span className="text-sm text-muted">{item.school}</span>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
