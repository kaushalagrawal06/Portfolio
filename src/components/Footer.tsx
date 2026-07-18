'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { LuGithub, LuLinkedin, LuMail } from 'react-icons/lu'
import { profile } from '@/data/profile'
import { navItems } from '@/data/nav'

export default function Footer() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.footer
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="border-t border-border bg-bg-alt"
    >
      <div className="max-w-6xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div className="flex flex-col gap-4 max-w-sm">
          <span className="font-display text-lg font-bold text-ink">{profile.name}</span>
          <p className="text-sm text-muted leading-relaxed">{profile.subhead}</p>
          <div className="flex items-center gap-3 pt-1">
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-ink hover:border-ink hover:text-blue transition-colors"
            >
              <LuMail size={17} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-ink hover:border-ink hover:text-blue transition-colors"
            >
              <LuLinkedin size={17} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-ink hover:border-ink hover:text-blue transition-colors"
            >
              <LuGithub size={17} />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">Navigate</span>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-ink/80 hover:text-blue transition-colors w-fit">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">Details</span>
          <span className="text-sm text-ink/80">{profile.location}</span>
          <span className="text-sm text-ink/80">{profile.mobility}</span>
          <a href={profile.nexwerk} target="_blank" rel="noopener noreferrer" className="text-sm text-blue hover:underline w-fit">
            NexWerk AI ↗
          </a>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row gap-2 justify-between text-xs text-muted">
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <span>Designed and built in Munich, Germany.</span>
        </div>
      </div>
    </motion.footer>
  )
}
