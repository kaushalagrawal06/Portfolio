import Reveal from './Reveal'
import { workingPrinciples } from '@/data/principles'

export default function WorkingPrinciples() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {workingPrinciples.map((p, i) => (
        <Reveal key={p.title} delay={i * 0.06} className="rounded-2xl border border-border bg-bg p-6 flex flex-col gap-2 h-full">
          <h3 className="font-display text-base font-bold text-ink">{p.title}</h3>
          <p className="text-sm text-muted leading-relaxed">{p.description}</p>
        </Reveal>
      ))}
    </div>
  )
}
