'use client'

import Link from 'next/link'
import { LuArrowLeft, LuCalendar, LuSparkles } from 'react-icons/lu'
import type { Demo } from '@/data/demos'

/**
 * Frames a standalone demo site with a slim, non-intrusive bar that makes it
 * clear the demo was built by Kaushal and routes interested prospects to the
 * booking CTA. The demo content itself renders as `children` and looks like a
 * real, separate website.
 */
export default function DemoChrome({ demo, children }: { demo: Demo; children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top demo bar */}
      <div
        className="sticky top-0 z-50 w-full text-white"
        style={{ backgroundColor: '#08111F' }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-12 flex items-center justify-between gap-3">
          <Link
            href="/demos"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-white/70 hover:text-white transition-colors min-h-[44px]"
          >
            <LuArrowLeft size={15} />
            <span className="hidden sm:inline">All demos</span>
            <span className="sm:hidden">Back</span>
          </Link>

          <p className="flex items-center gap-1.5 text-[11px] sm:text-xs text-white/80 text-center">
            <LuSparkles size={13} style={{ color: demo.accent }} className="shrink-0" />
            <span className="hidden md:inline">Demo website built by</span>
            <span className="font-semibold text-white">Kaushal Agrawal</span>
            <span className="hidden sm:inline text-white/50">· this could be your site</span>
          </p>

          <Link
            href="/contact#book-a-call"
            className="inline-flex items-center gap-1.5 rounded-full px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs font-semibold text-ink transition-transform hover:scale-[1.03] min-h-[36px]"
            style={{ backgroundColor: '#F7F7F2' }}
          >
            <LuCalendar size={13} />
            <span className="hidden sm:inline">Book a call</span>
            <span className="sm:hidden">Book</span>
          </Link>
        </div>
      </div>

      {/* Demo content */}
      <div className="flex-1">{children}</div>

      {/* Closing conversion band */}
      <section className="w-full" style={{ backgroundColor: '#08111F' }}>
        <div className="max-w-4xl mx-auto px-6 py-16 sm:py-20 text-center flex flex-col items-center gap-5">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
            style={{ backgroundColor: `${demo.accent}22`, color: demo.accent }}
          >
            <LuSparkles size={13} />
            {demo.category} demo
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white text-balance max-w-2xl">
            Want a website like this for your business?
          </h2>
          <p className="text-white/70 text-sm sm:text-base max-w-xl leading-relaxed">
            This is a live demo built by Kaushal Agrawal. I design and build websites like this — and
            automate the busywork behind them. {demo.automation}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/contact#book-a-call"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] min-h-[44px]"
              style={{ backgroundColor: '#F7F7F2' }}
            >
              <LuCalendar size={16} />
              Book a strategy call
            </Link>
            <Link
              href="/demos"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors min-h-[44px]"
            >
              See other demos
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
