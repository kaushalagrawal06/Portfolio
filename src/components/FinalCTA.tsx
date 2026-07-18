import Reveal from './Reveal'
import MagneticButton from './MagneticButton'
import { profile } from '@/data/profile'

const options = [
  { label: 'Hiring', description: 'Looking to bring on an AI automation or business operations professional.' },
  { label: 'Consulting', description: 'Need help diagnosing and fixing an operational or automation bottleneck.' },
  { label: 'Partnership', description: 'Exploring a collaboration with NexWerk AI.' },
  { label: 'Startup collaboration', description: 'Building something and want an operations-minded partner.' },
]

export default function FinalCTA() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <Reveal className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-ink text-balance">
          Let&apos;s turn your operational bottlenecks into scalable systems.
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <MagneticButton href="/contact#book-a-call">Book a Strategy Call</MagneticButton>
          <MagneticButton href="/contact" variant="secondary">
            Discuss a Role
          </MagneticButton>
          <MagneticButton href={profile.resumeUrl} variant="secondary">
            Download Resume
          </MagneticButton>
        </div>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-16">
        {options.map((o, i) => (
          <Reveal key={o.label} delay={i * 0.06} className="rounded-2xl border border-border p-5 flex flex-col gap-1.5">
            <span className="text-sm font-semibold text-ink">{o.label}</span>
            <span className="text-xs text-muted leading-relaxed">{o.description}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
