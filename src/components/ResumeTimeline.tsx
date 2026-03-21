'use client'

import { motion } from 'framer-motion'

export interface ExperienceItem {
  title: string
  company: string
  location: string
  period: string
  highlights: string[]
  tech: string[]
}

interface Props {
  items: ExperienceItem[]
}

export default function ResumeTimeline({ items }: Props) {
  return (
    <div className="relative">
      {/* Blue vertical line */}
      <div className="absolute left-4 md:left-5 top-0 bottom-0 w-0.5 bg-blue-200" />

      <div className="space-y-8">
        {items.map((item, idx) => (
          <motion.div
            key={`${item.company}-${item.title}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="relative pl-12 md:pl-14"
          >
            {/* Timeline dot */}
            <div className="absolute left-[10px] md:left-[14px] top-2 w-3 h-3 bg-blue-600 rounded-full border-2 border-white shadow ring-2 ring-blue-200" />

            <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-1">
                {item.period}
              </p>
              <h4 className="text-lg md:text-xl font-bold text-blue-600 leading-tight">
                {item.title}
              </h4>
              <div className="flex flex-wrap items-center gap-x-2 mt-0.5 mb-3">
                <span className="font-semibold text-gray-800 text-sm">{item.company}</span>
                {item.location && (
                  <>
                    <span className="text-gray-300">·</span>
                    <span className="text-gray-500 text-sm">{item.location}</span>
                  </>
                )}
              </div>
              <ul className="space-y-1 mb-4">
                {item.highlights.map((h, i) => (
                  <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                    <span className="text-blue-400 mt-1 shrink-0">▸</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-100"
                  >
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
