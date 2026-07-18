'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { LuArrowUpRight } from 'react-icons/lu'
import type { CaseStudy } from '@/data/ventures'

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="h-full"
    >
      <Link
        href={`/work/${study.slug}`}
        className="group flex flex-col justify-between gap-6 rounded-2xl border border-border bg-bg-alt p-6 md:p-7 h-full transition-colors hover:border-ink hover:shadow-[0_16px_40px_-28px_rgba(22,38,29,0.45)]"
      >
        <div className="flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.1em] text-blue">{study.category}</span>
          <h3 className="font-display text-lg font-bold text-ink leading-snug">{study.title}</h3>
          <p className="text-sm text-muted leading-relaxed">{study.summary}</p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {study.tools.slice(0, 4).map((tool) => (
              <span key={tool} className="px-2.5 py-1 rounded-full border border-border text-xs text-muted">
                {tool}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium text-ink">{study.outcome}</p>
          <div className="flex items-end justify-between gap-4 border-t border-border pt-3">
            <p className="text-xs text-muted leading-relaxed">Lesson: {study.lessons}</p>
            <LuArrowUpRight
              size={20}
              className="shrink-0 text-ink transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
