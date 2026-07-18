import Reveal from './Reveal'
import { skillGroups } from '@/data/skills'

export default function SkillsCloud() {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {skillGroups.map((group, i) => (
        <Reveal key={group.category} delay={i * 0.08} className="flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">{group.category}</span>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="px-3.5 py-1.5 rounded-full border border-border bg-bg text-sm text-ink/85 hover:border-blue hover:text-blue transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
      ))}
    </div>
  )
}
