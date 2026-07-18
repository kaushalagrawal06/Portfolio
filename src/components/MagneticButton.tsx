'use client'

import { useRef, useState, type ReactNode, type MouseEvent } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'

type Props = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
  external?: boolean
  className?: string
}

export default function MagneticButton({
  href,
  children,
  variant = 'primary',
  external = false,
  className = '',
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const reduceMotion = useReducedMotion()

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (reduceMotion) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - (rect.left + rect.width / 2)
    const y = e.clientY - (rect.top + rect.height / 2)
    setPos({ x: x * 0.3, y: y * 0.3 })
  }

  function handleMouseLeave() {
    setPos({ x: 0, y: 0 })
  }

  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold min-h-[44px] transition-colors'
  const styles =
    variant === 'primary'
      ? `${base} bg-ink text-bg hover:bg-blue`
      : `${base} border border-border bg-transparent text-ink hover:border-ink`

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 12, mass: 0.2 }}
      className="inline-block"
    >
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={`${styles} ${className}`}>
          {children}
        </a>
      ) : (
        <Link href={href} className={`${styles} ${className}`}>
          {children}
        </Link>
      )}
    </motion.div>
  )
}
