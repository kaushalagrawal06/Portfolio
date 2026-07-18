import { LuZap } from 'react-icons/lu'

/**
 * The "AI automation" selling layer shown inside each demo — a subtle band
 * that demonstrates Kaushal sells automation, not just design. Accent color is
 * passed in so it matches each demo's branding.
 */
export default function AutomationCallout({
  accent,
  text,
  label = 'What I’d automate for you',
}: {
  accent: string
  text: string
  label?: string
}) {
  return (
    <div
      className="rounded-2xl border p-5 sm:p-6 flex items-start gap-4"
      style={{ borderColor: `${accent}33`, backgroundColor: `${accent}0D` }}
    >
      <span
        className="shrink-0 flex items-center justify-center w-10 h-10 rounded-xl"
        style={{ backgroundColor: `${accent}1F`, color: accent }}
      >
        <LuZap size={20} />
      </span>
      <div className="flex flex-col gap-1">
        <span className="text-xs font-semibold uppercase tracking-[0.1em]" style={{ color: accent }}>
          {label}
        </span>
        <p className="text-sm text-slate-700 leading-relaxed">{text}</p>
      </div>
    </div>
  )
}
