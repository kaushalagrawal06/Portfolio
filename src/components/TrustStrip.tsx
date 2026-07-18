import Reveal from './Reveal'
import { trustPoints } from '@/data/trust'

export default function TrustStrip() {
  return (
    <section className="border-y border-border bg-bg-alt">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map((point, i) => (
            <Reveal key={point.label} delay={i * 0.05} className="flex flex-col gap-1.5">
              <span className="text-sm font-semibold text-ink">{point.label}</span>
              <span className="text-sm text-muted leading-relaxed">{point.detail}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
