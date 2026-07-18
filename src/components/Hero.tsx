'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { LuMapPin, LuDownload, LuArrowDown } from 'react-icons/lu'
import MagneticButton from './MagneticButton'
import { profile } from '@/data/profile'

const CREDENTIALS = [
  { k: 'Founder', v: 'NexWerk AI' },
  { k: 'Based in', v: 'Munich, Germany' },
  { k: 'Practice', v: 'AI · Operations · Strategy' },
]

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Restrained parallax — old money doesn't shout.
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.18])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.9, 0.97])

  const bgStyle = reduceMotion ? undefined : { y: bgY, scale: bgScale }
  const contentStyle = reduceMotion ? undefined : { y: contentY, opacity: contentOpacity }

  return (
    <section
      ref={ref}
      className="relative min-h-[94vh] overflow-hidden isolate"
      style={{ backgroundColor: 'var(--color-forest-deep)' }}
    >
      {/* Heritage library backdrop (parallax) */}
      <motion.div style={bgStyle} className="absolute inset-0 will-change-transform">
        <Image
          src="/hero/hero-bg.jpg"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Deep forest-green wash for legibility + palette cohesion */}
      <motion.div
        aria-hidden="true"
        style={reduceMotion ? undefined : { opacity: overlayOpacity }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(115deg, rgba(20,42,33,0.96) 0%, rgba(20,42,33,0.82) 42%, rgba(30,58,47,0.55) 100%)',
          }}
        />
      </motion.div>

      {/* Brass vignette glow */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-24 w-[620px] h-[620px] rounded-full blur-[150px] opacity-25"
        style={{ background: 'var(--color-brass)' }}
      />

      {/* Fade into the cream page below */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--color-bg))' }}
      />

      {/* Content */}
      <motion.div
        style={contentStyle}
        className="relative z-10 max-w-6xl mx-auto px-6 pt-36 pb-28 md:pt-44 md:pb-32"
      >
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-16 items-center">
          {/* Left: editorial copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3 mb-7"
            >
              <span className="h-px w-10" style={{ backgroundColor: 'var(--color-brass-light)' }} />
              <span
                className="text-[11px] font-semibold uppercase tracking-[0.28em]"
                style={{ color: 'var(--color-brass-light)' }}
              >
                {profile.role}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-[2.9rem] leading-[1.06] sm:text-6xl md:text-[4.4rem] md:leading-[1.04] font-medium text-balance"
              style={{ color: 'var(--color-cream)' }}
            >
              Turning business complexity into{' '}
              <span className="italic" style={{ color: 'var(--color-brass-light)' }}>
                intelligent, automated systems.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-7 text-lg leading-relaxed max-w-xl"
              style={{ color: 'rgba(243,239,230,0.72)' }}
            >
              {profile.subhead}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <MagneticButton
                href="/contact#book-a-call"
                className="!bg-[var(--color-brass)] !text-[#14251C] hover:!bg-[var(--color-brass-light)]"
              >
                Book a Strategy Call
              </MagneticButton>
              <MagneticButton
                href="/work"
                variant="secondary"
                className="!border-[rgba(243,239,230,0.3)] !text-[var(--color-cream)] hover:!border-[var(--color-brass-light)]"
              >
                Explore My Work
              </MagneticButton>
            </motion.div>

            <motion.a
              href={profile.resumeUrl}
              download
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium min-h-[44px] transition-colors"
              style={{ color: 'rgba(243,239,230,0.6)' }}
            >
              <LuDownload size={15} />
              Download Résumé
            </motion.a>
          </div>

          {/* Right: matted portrait + engraved credentials */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative mx-auto w-full max-w-sm"
          >
            {/* Cream matte with thin brass rule */}
            <div
              className="relative p-3 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.7)]"
              style={{ backgroundColor: 'var(--color-cream)' }}
            >
              <div className="p-[3px]" style={{ backgroundColor: 'var(--color-brass)' }}>
                <div className="relative aspect-[4/5] overflow-hidden bg-[#e7e2d6]">
                  <Image
                    src={profile.portrait.src}
                    alt={profile.portrait.alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 384px, 90vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Engraved nameplate */}
              <div className="pt-4 pb-1 text-center">
                <p
                  className="font-serif text-2xl"
                  style={{ color: 'var(--color-forest)' }}
                >
                  {profile.name}
                </p>
                <p
                  className="mt-1 text-[10px] font-semibold uppercase tracking-[0.24em]"
                  style={{ color: 'var(--color-brass)' }}
                >
                  Est. NexWerk AI
                </p>
              </div>
            </div>

            {/* Credentials strip */}
            <div className="mt-6 grid grid-cols-3 divide-x divide-[rgba(243,239,230,0.15)]">
              {CREDENTIALS.map((c) => (
                <div key={c.k} className="px-2 text-center">
                  <p
                    className="text-[10px] font-semibold uppercase tracking-[0.16em]"
                    style={{ color: 'var(--color-brass-light)' }}
                  >
                    {c.k}
                  </p>
                  <p className="mt-1 text-sm" style={{ color: 'rgba(243,239,230,0.85)' }}>
                    {c.v}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 1 }}
        style={reduceMotion ? undefined : { opacity: contentOpacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
      >
        <span
          className="text-[10px] font-semibold uppercase tracking-[0.24em]"
          style={{ color: 'rgba(243,239,230,0.5)' }}
        >
          Scroll
        </span>
        <motion.span
          animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ color: 'var(--color-brass-light)' }}
        >
          <LuArrowDown size={16} />
        </motion.span>
      </motion.div>
    </section>
  )
}
