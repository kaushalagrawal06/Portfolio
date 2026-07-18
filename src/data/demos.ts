export type Demo = {
  slug: string
  name: string
  category: string
  tagline: string
  description: string
  /** Tailwind arbitrary hex used for accents on the gallery card + demo. */
  accent: string
  /** Soft tint used for the gallery card background wash. */
  tint: string
  /** What Kaushal would automate for a business like this. */
  automation: string
  /** Audience one-liner for the gallery card. */
  audience: string
}

export const demos: Demo[] = [
  {
    slug: 'student-portfolio',
    name: 'Aisha Verma',
    category: 'Student Portfolio',
    tagline: 'A graduate portfolio built to win jobs and admissions abroad.',
    description:
      'A clean, recruiter-ready portfolio for students and fresh graduates applying to companies and universities overseas — CV-style layout, projects, education, and a one-click resume download.',
    accent: '#4F46E5',
    tint: '#EEF0FF',
    automation: 'AI application tracker + auto-generated cover letters for each job posting.',
    audience: 'Students & graduates seeking jobs or study abroad',
  },
  {
    slug: 'restaurant',
    name: 'Saffron & Sage',
    category: 'Restaurant & Café',
    tagline: 'A mouth-watering site that turns visitors into reservations.',
    description:
      'A warm, appetite-driven website for restaurants and cafés — menu highlights, story, gallery, hours, and an online reservation flow that captures bookings around the clock.',
    accent: '#D97706',
    tint: '#FEF3E2',
    automation: 'AI reservation bot + WhatsApp auto-reply that confirms and reminds guests.',
    audience: 'Restaurants, cafés & cloud kitchens',
  },
  {
    slug: 'dental-clinic',
    name: 'BrightSmile Dental',
    category: 'Clinic & Healthcare',
    tagline: 'A trust-first clinic site that fills the appointment book.',
    description:
      'A calm, credible website for dental and medical clinics — services, the team, patient reassurance, and an appointment request flow designed to reduce no-shows.',
    accent: '#0D9488',
    tint: '#E6F7F4',
    automation: 'Online scheduling + automated appointment reminders over SMS and email.',
    audience: 'Dentists, doctors & local health practices',
  },
  {
    slug: 'saas-startup',
    name: 'FlowGrid',
    category: 'SaaS & Startup',
    tagline: 'A conversion-focused product launch page for software teams.',
    description:
      'A modern SaaS landing page — sharp value proposition, feature story, pricing tiers, and social proof, engineered to move visitors from curious to signed-up.',
    accent: '#7C3AED',
    tint: '#F1ECFE',
    automation: 'Lead capture piped straight into your CRM with instant follow-up sequences.',
    audience: 'Software products & early-stage startups',
  },
  {
    slug: 'agency',
    name: 'Northline Studio',
    category: 'Agency & Freelancer',
    tagline: 'A bold studio site that makes clients take you seriously.',
    description:
      'A confident portfolio site for agencies, freelancers, and creative studios — services, selected work, a clear process, and a contact flow that qualifies inbound leads.',
    accent: '#111827',
    tint: '#F1F2F4',
    automation: 'Client onboarding + proposal generation triggered the moment a lead submits.',
    audience: 'Agencies, studios & freelancers',
  },
  {
    slug: 'manufacturer',
    name: 'Verdant Industries',
    category: 'Industrial & B2B',
    tagline: 'A capable, credible site for manufacturers and exporters.',
    description:
      'A serious B2B website for manufacturers, suppliers, and export businesses — capabilities, product catalogue, certifications, global reach, and a request-for-quote intake.',
    accent: '#1D4ED8',
    tint: '#E8EEFB',
    automation: 'RFQ intake that auto-routes enquiries and drafts quotations for your team.',
    audience: 'Manufacturers, suppliers & exporters',
  },
  {
    slug: 'ecommerce',
    name: 'Bloom & Co.',
    category: 'E-commerce & Retail',
    tagline: 'A polished storefront built to sell while you sleep.',
    description:
      'A vibrant online shop for retail brands — product grid, categories, a clean cart experience, and email capture designed to turn browsers into repeat buyers.',
    accent: '#DB2777',
    tint: '#FCE7F1',
    automation: 'Abandoned-cart recovery + inventory sync that keeps stock accurate everywhere.',
    audience: 'Retail brands & online shops',
  },
]

export function getDemo(slug: string): Demo | undefined {
  return demos.find((d) => d.slug === slug)
}
