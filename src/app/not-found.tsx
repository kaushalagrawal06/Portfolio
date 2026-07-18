import type { Metadata } from 'next'
import SectionHeading from '@/components/SectionHeading'
import MagneticButton from '@/components/MagneticButton'

export const metadata: Metadata = {
  title: 'Page not found',
  description: 'The page you were looking for could not be found.',
}

export default function NotFound() {
  return (
    <div className="pt-36 pb-24">
      <section className="max-w-2xl mx-auto px-6 text-center flex flex-col items-center gap-8">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue">404</span>
        <SectionHeading
          align="center"
          title="This page doesn't exist."
          description="The link may be broken, or the page may have moved. Here are a few places to pick back up."
        />
        <div className="flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href="/">Back to home</MagneticButton>
          <MagneticButton href="/work" variant="secondary">
            See selected work
          </MagneticButton>
        </div>
      </section>
    </div>
  )
}
