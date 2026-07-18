'use client'

import { usePathname } from 'next/navigation'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollProgress from './ScrollProgress'

/**
 * Individual demo sites (/demos/[slug]) render as standalone websites with
 * their own chrome, so the portfolio's Navbar/Footer/ScrollProgress are hidden
 * there. The demos gallery (/demos) keeps the portfolio chrome.
 */
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isStandaloneDemo = pathname.startsWith('/demos/')

  if (isStandaloneDemo) {
    return <main className="flex-1">{children}</main>
  }

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  )
}
