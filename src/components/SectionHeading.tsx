import Reveal from './Reveal'

type Props = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  onDark?: boolean
}

export default function SectionHeading({ eyebrow, title, description, align = 'left', onDark = false }: Props) {
  const alignment = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start'

  return (
    <Reveal className={`flex flex-col gap-4 max-w-2xl ${alignment}`}>
      {eyebrow && (
        <span
          className={`text-xs font-semibold uppercase tracking-[0.14em] ${
            onDark ? 'text-brass-light' : 'text-blue'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl md:text-4xl font-bold tracking-tight text-balance ${
          onDark ? 'text-cream' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-base md:text-lg leading-relaxed ${onDark ? 'text-cream/70' : 'text-muted'}`}>
          {description}
        </p>
      )}
    </Reveal>
  )
}
