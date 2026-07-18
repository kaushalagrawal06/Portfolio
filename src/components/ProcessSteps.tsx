import Reveal from './Reveal'
import { processSteps } from '@/data/process'

export default function ProcessSteps() {
  return (
    <div className="grid gap-6 md:grid-cols-5">
      {processSteps.map((step, i) => (
        <Reveal key={step.step} delay={i * 0.08} className="flex flex-col gap-3">
          <span className="font-display text-3xl font-bold text-border">{step.step}</span>
          <h3 className="font-display text-base font-bold text-ink">{step.title}</h3>
          <p className="text-sm text-muted leading-relaxed">{step.description}</p>
        </Reveal>
      ))}
    </div>
  )
}
