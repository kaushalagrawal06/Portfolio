'use client'

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import type { ExpertiseArea } from '@/data/expertise'

export default function ExpertiseCard({ area, index }: { area: ExpertiseArea; index: number }) {
  const [open, setOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.45, delay: (index % 3) * 0.08 }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="group relative rounded-2xl border border-border bg-bg p-6 md:p-7 flex flex-col gap-4 cursor-default h-full transition-shadow hover:shadow-[0_18px_45px_-30px_rgba(176,141,60,0.4)]"
    >
      <span className="text-xs font-semibold uppercase tracking-[0.1em] text-blue">
        {String(index + 1).padStart(2, '0')}
      </span>
      <h3 className="font-display text-xl font-bold text-ink leading-snug">{area.title}</h3>
      <p className="text-sm text-muted leading-relaxed">{area.problem}</p>

      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden flex flex-col gap-3"
      >
        <p className="text-sm text-ink/80 leading-relaxed pt-1">{area.whatIDo}</p>
        <div className="flex flex-wrap gap-1.5">
          {area.tools.map((tool) => (
            <span key={tool} className="px-2.5 py-1 rounded-full border border-border text-xs text-muted">
              {tool}
            </span>
          ))}
        </div>
        <p className="text-sm font-medium text-ink pt-1">{area.outcome}</p>
      </motion.div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="mt-auto pt-2 text-left text-xs font-semibold text-blue lg:hidden min-h-[44px] flex items-center"
      >
        {open ? 'Show less' : 'Learn more'}
      </button>
    </motion.div>
  )
}
