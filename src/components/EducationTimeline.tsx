'use client'

import { motion } from 'framer-motion'

export interface EducationItem {
  degree: string
  school: string
  year: string
}

interface Props {
  items: EducationItem[]
}

export default function EducationTimeline({ items }: Props) {
  return (
    <div className="relative">
      {/* Blue vertical line */}
      <div className="absolute left-4 md:left-5 top-0 bottom-0 w-0.5 bg-blue-200" />

      <div className="space-y-6">
        {items.map((item, idx) => (
          <motion.div
            key={`${item.school}-${item.degree}`}
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
                {item.year}
              </p>
              <h4 className="text-lg font-bold text-blue-600 leading-tight">{item.degree}</h4>
              <p className="text-gray-600 text-sm mt-0.5">{item.school}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
