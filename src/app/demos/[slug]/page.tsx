import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { demos, getDemo } from '@/data/demos'
import DemoChrome from '@/components/demo/DemoChrome'
import StudentPortfolioDemo from '@/components/demo/sites/StudentPortfolioDemo'
import RestaurantDemo from '@/components/demo/sites/RestaurantDemo'
import DentalClinicDemo from '@/components/demo/sites/DentalClinicDemo'
import SaasStartupDemo from '@/components/demo/sites/SaasStartupDemo'
import AgencyDemo from '@/components/demo/sites/AgencyDemo'
import ManufacturerDemo from '@/components/demo/sites/ManufacturerDemo'
import EcommerceDemo from '@/components/demo/sites/EcommerceDemo'

const registry: Record<string, () => React.ReactElement> = {
  'student-portfolio': StudentPortfolioDemo,
  restaurant: RestaurantDemo,
  'dental-clinic': DentalClinicDemo,
  'saas-startup': SaasStartupDemo,
  agency: AgencyDemo,
  manufacturer: ManufacturerDemo,
  ecommerce: EcommerceDemo,
}

export function generateStaticParams() {
  return demos.map((d) => ({ slug: d.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const demo = getDemo(slug)
  if (!demo) return {}

  const title = `${demo.name} — ${demo.category} website demo`
  return {
    title,
    description: demo.description,
    alternates: { canonical: `/demos/${demo.slug}` },
    openGraph: {
      title,
      description: demo.description,
      url: `/demos/${demo.slug}`,
      type: 'website',
    },
  }
}

export default async function DemoPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const demo = getDemo(slug)
  const DemoComponent = registry[slug]

  if (!demo || !DemoComponent) notFound()

  return (
    <DemoChrome demo={demo}>
      <DemoComponent />
    </DemoChrome>
  )
}
