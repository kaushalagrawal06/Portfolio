import { LuCheck } from 'react-icons/lu'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import MagneticButton from './MagneticButton'
import { nexwerk } from '@/data/ventures'

export default function NexWerkFeature() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-ink via-ink to-ink-2 text-bg p-8 md:p-14">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-grid-faint-dark opacity-70 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_0%,black,transparent)]" />
          <div className="animate-glow-pulse absolute -top-20 right-[-60px] w-[420px] h-[420px] rounded-full bg-cyan/15 blur-[110px]" />
          <div className="animate-glow-pulse-slow absolute bottom-[-100px] left-[-60px] w-[380px] h-[380px] rounded-full bg-blue/15 blur-[110px]" />
        </div>
        <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-6">
            <SectionHeading eyebrow="Founder" title={nexwerk.name} onDark />
            <p className="text-bg/70 text-base leading-relaxed -mt-4">{nexwerk.tagline}</p>
            <p className="text-bg/60 text-sm leading-relaxed">{nexwerk.description}</p>
            <div>
              <MagneticButton href={nexwerk.url} external>
                {nexwerk.cta}
              </MagneticButton>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {nexwerk.features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.06} className="flex gap-3 items-start">
                <span className="mt-0.5 w-6 h-6 rounded-full bg-bg/10 flex items-center justify-center shrink-0">
                  <LuCheck size={14} className="text-cyan" />
                </span>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-bg">{f.title}</span>
                  <span className="text-sm text-bg/60 leading-relaxed">{f.description}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
