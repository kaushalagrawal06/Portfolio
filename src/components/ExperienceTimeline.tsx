'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ExperienceItem } from '@/data/experience'

export default function ExperienceTimeline({ items }: { items: ExperienceItem[] }) {
  const reduceMotion = useReducedMotion()

  return (
    <div className="relative">
      <div className="absolute left-4 md:left-5 top-0 bottom-0 w-px bg-border" />
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: 'top' }}
        className="absolute left-4 md:left-5 top-0 bottom-0 w-px bg-blue"
      />

      <div className="flex flex-col gap-8">
        {items.map((item, idx) => (
          <motion.div
            key={`${item.company}-${item.title}`}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.45, delay: idx * 0.06 }}
            className="relative pl-12 md:pl-14"
          >
            <div className="absolute left-[10px] md:left-[14px] top-1.5 w-2.5 h-2.5 bg-blue rounded-full ring-4 ring-bg" />

            <div className="rounded-xl border border-border bg-bg-alt p-5 md:p-6">
              <p className="text-xs font-medium text-muted uppercase tracking-wide mb-1">{item.period}</p>
              <h4 className="font-display text-lg md:text-xl font-bold text-ink leading-tight">{item.title}</h4>
              <div className="flex flex-wrap items-center gap-x-2 mt-0.5 mb-3">
                <span className="font-semibold text-ink/80 text-sm">{item.company}</span>
                <span className="text-muted">·</span>
                <span className="text-muted text-sm">{item.location}</span>
              </div>
              <p className="text-sm text-ink/80 leading-relaxed mb-3">{item.description}</p>
              <ul className="flex flex-col gap-1.5 mb-4">
                {item.highlights.map((h) => (
                  <li key={h} className="text-sm text-muted flex items-start gap-2">
                    <span className="text-blue mt-1 shrink-0">▸</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {item.tech.map((t) => (
                  <span key={t} className="px-2.5 py-0.5 rounded-full border border-border text-xs font-medium text-muted">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
