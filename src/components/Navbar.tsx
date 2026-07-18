'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { LuMenu, LuX } from 'react-icons/lu'
import { navItems } from '@/data/nav'
import { profile } from '@/data/profile'
import MagneticButton from './MagneticButton'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const [prevPathname, setPrevPathname] = useState(pathname)

  if (pathname !== prevPathname) {
    setPrevPathname(pathname)
    setOpen(false)
  }

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // The homepage opens with a dark, full-bleed hero. While the navbar is still
  // transparent over it (not yet scrolled, menu closed), switch to light text so
  // the logo and links stay legible; everywhere else keep the default dark text.
  const overHero = pathname === '/' && !scrolled && !open

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          href="/"
          className={`font-display text-lg font-bold tracking-tight transition-colors ${
            overHero ? 'text-[var(--color-cream)]' : 'text-ink'
          }`}
        >
          Kaushal Agrawal
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isExternal = item.href.startsWith('http')
            const isActive = pathname === item.href
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className={`relative text-sm font-medium transition-colors ${
                    overHero
                      ? isActive
                        ? 'text-[var(--color-cream)]'
                        : 'text-[rgba(243,239,230,0.7)] hover:text-[var(--color-cream)]'
                      : isActive
                        ? 'text-ink'
                        : 'text-muted hover:text-ink'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-1.5 left-0 right-0 h-[2px] rounded-full"
                      style={{ backgroundColor: overHero ? 'var(--color-brass-light)' : 'var(--color-blue)' }}
                    />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="hidden lg:block">
          <MagneticButton
            href="/contact#book-a-call"
            className={`!px-5 !py-2.5 !text-xs ${
              overHero
                ? '!bg-[var(--color-brass)] !text-[#14251C] hover:!bg-[var(--color-brass-light)]'
                : ''
            }`}
          >
            Book a Strategy Call
          </MagneticButton>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden flex items-center justify-center w-11 h-11 -mr-2 transition-colors ${
            overHero ? 'text-[var(--color-cream)]' : 'text-ink'
          }`}
        >
          {open ? <LuX size={22} /> : <LuMenu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed inset-x-0 top-20 bottom-0 overflow-y-auto bg-bg border-t border-border"
          >
            <ul className="px-6 py-6 flex flex-col gap-1">
              {navItems.map((item) => {
                const isExternal = item.href.startsWith('http')
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      className="block py-3 text-lg font-medium text-ink min-h-[44px] flex items-center"
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
              <li className="pt-4">
                <MagneticButton href="/contact#book-a-call" className="w-full">
                  Book a Strategy Call
                </MagneticButton>
              </li>
              <li className="pt-2 text-sm text-muted">{profile.location}</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
