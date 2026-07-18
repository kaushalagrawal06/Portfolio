type Variant = 'hero' | 'expertise' | 'work' | 'experience' | 'contact'

export default function SectionBackground({ variant }: { variant: Variant }) {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {variant === 'hero' && (
        <>
          <div className="absolute inset-0 bg-grid-faint opacity-60 [mask-image:radial-gradient(ellipse_65%_55%_at_50%_0%,black,transparent)]" />
          <div className="animate-glow-pulse absolute -top-24 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full bg-blue/10 blur-[120px]" />
          <div className="animate-glow-pulse-slow absolute top-32 right-[-80px] w-[420px] h-[420px] rounded-full bg-cyan/10 blur-[100px]" />
        </>
      )}

      {variant === 'expertise' && (
        <>
          <div className="absolute inset-0 bg-bg-alt" />
          <div className="absolute inset-0 bg-dot-matrix opacity-60 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]" />
        </>
      )}

      {variant === 'work' && (
        <div className="absolute inset-0 bg-grid-faint opacity-40 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]" />
      )}

      {variant === 'experience' && (
        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent opacity-70" />
      )}

      {variant === 'contact' && (
        <>
          <div className="absolute inset-0 bg-dot-matrix opacity-50 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black,transparent)]" />
          <div className="animate-glow-pulse-slow absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[560px] h-[560px] rounded-full bg-blue/8 blur-[120px]" />
        </>
      )}
    </div>
  )
}
