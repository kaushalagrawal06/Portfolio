import { LuArrowRight } from 'react-icons/lu'
import Reveal from './Reveal'
import { positioningSteps } from '@/data/process'

export default function PositioningDiagram() {
  return (
    <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-2">
      {positioningSteps.map((step, i) => (
        <Reveal key={step} delay={i * 0.08} className="flex items-center gap-3 md:gap-2 flex-1">
          <div className="flex-1 rounded-xl border border-border bg-bg-alt px-4 py-4 text-center">
            <span className="text-sm font-semibold text-ink">{step}</span>
          </div>
          {i < positioningSteps.length - 1 && (
            <LuArrowRight className="hidden md:block shrink-0 text-border" size={18} />
          )}
        </Reveal>
      ))}
    </div>
  )
}
