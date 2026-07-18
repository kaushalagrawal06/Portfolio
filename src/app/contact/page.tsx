import type { Metadata } from 'next'
import { LuMail, LuPhone, LuMapPin, LuLinkedin, LuGithub, LuCalendarClock } from 'react-icons/lu'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import MagneticButton from '@/components/MagneticButton'
import SectionBackground from '@/components/SectionBackground'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import { profile } from '@/data/profile'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Kaushal Agrawal — for hiring, consulting, or NexWerk AI partnership inquiries.',
  alternates: { canonical: '/contact' },
}

const contactMethods = [
  { icon: LuMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: LuPhone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, '')}` },
  { icon: LuLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/kaushalagrawal06', href: profile.linkedin },
  { icon: LuGithub, label: 'GitHub', value: 'github.com/kaushalagrawal06', href: profile.github },
]

const visitorPaths = [
  {
    label: "I'm hiring",
    detail: 'Recruiters & hiring managers — review background and role fit.',
    href: '/about',
    cta: 'View background',
  },
  {
    label: 'Startup founder',
    detail: 'Exploring AI automation or an operations build for an early-stage company.',
    href: `mailto:${profile.email}?subject=Startup%20automation%20inquiry`,
    cta: 'Email directly',
  },
  {
    label: 'SME owner',
    detail: 'Looking to automate a specific process or reduce manual coordination.',
    href: '#book-a-call',
    cta: 'Book a strategy call',
  },
  {
    label: 'Potential partner',
    detail: 'Interested in collaborating with NexWerk AI or on a joint engagement.',
    href: profile.nexwerk,
    cta: 'Visit NexWerk AI',
    external: true,
  },
]

export default function ContactPage() {
  return (
    <div className="relative pt-36 pb-24">
      <SectionBackground variant="contact" />
      <BreadcrumbJsonLd items={[{ name: 'Contact', href: '/contact' }]} />
      <section className="max-w-3xl mx-auto px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about your operations, hiring needs, or a potential partnership."
          description="Whether you're hiring, evaluating a consulting engagement, or exploring a collaboration with NexWerk AI — reach out directly."
        />

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {visitorPaths.map((path) => (
            <Reveal key={path.label} className="rounded-xl border border-border p-5 flex flex-col gap-2">
              <span className="text-sm font-bold text-ink">{path.label}</span>
              <p className="text-xs text-muted leading-relaxed flex-1">{path.detail}</p>
              <a
                href={path.href}
                target={path.external ? '_blank' : undefined}
                rel={path.external ? 'noopener noreferrer' : undefined}
                className="text-xs font-semibold text-blue hover:underline w-fit"
              >
                {path.cta} →
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-2 text-sm text-muted">
          <LuMapPin size={16} />
          <span>{profile.location} · {profile.mobility}</span>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {contactMethods.map((method) => (
            <Reveal key={method.label} className="rounded-xl border border-border p-5 flex items-center gap-4">
              <span className="w-10 h-10 rounded-full bg-bg-alt flex items-center justify-center shrink-0 text-blue">
                <method.icon size={18} />
              </span>
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">{method.label}</span>
                <a
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-sm font-medium text-ink hover:text-blue transition-colors truncate"
                >
                  {method.value}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="book-a-call" className="max-w-3xl mx-auto px-6 mt-20 scroll-mt-24">
        <Reveal className="rounded-2xl border border-border bg-ink text-bg p-8 md:p-12 flex flex-col gap-6">
          <span className="w-11 h-11 rounded-full bg-bg/10 flex items-center justify-center text-cyan">
            <LuCalendarClock size={20} />
          </span>
          <div className="flex flex-col gap-2">
            <h2 className="font-display text-2xl font-bold">Book a strategy call</h2>
            <p className="text-bg/70 text-sm leading-relaxed max-w-lg">
              Send a short note on what you&apos;re looking to solve — hiring, an operations bottleneck, or an
              automation idea — and I&apos;ll reply directly to schedule a time that works.
            </p>
          </div>
          <div>
            <MagneticButton
              href={`mailto:${profile.email}?subject=Strategy%20call%20request`}
              external
            >
              Email to schedule a call
            </MagneticButton>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
