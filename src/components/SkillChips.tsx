'use client'

import { motion } from 'framer-motion'

interface SkillGroup {
  category: string
  icon: string
  skills: string[]
}

interface Props {
  groups: SkillGroup[]
}

export default function SkillChips({ groups }: Props) {
  return (
    <div className="space-y-6">
      {groups.map((group, idx) => (
        <motion.div
          key={group.category}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: idx * 0.1 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">{group.icon}</span>
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
              {group.category}
            </h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-gray-700 text-sm font-medium hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
