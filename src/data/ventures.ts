export const nexwerk = {
  name: 'NexWerk AI',
  url: 'https://nexwerk.app',
  tagline: 'AI automation, implemented — not just advised.',
  description:
    'NexWerk AI is my venture helping SMEs and industrial businesses design and implement practical AI systems: automation, CRM workflows, lead generation, reporting, and AI-assisted operations — with a focus on privacy-conscious, on-site-capable implementations.',
  features: [
    {
      title: 'AI agent architecture & design',
      description: 'Purpose-built AI agents mapped to a specific business process, not generic chatbots.',
    },
    {
      title: 'Department-level workflow automation',
      description: 'Sales, operations, and reporting workflows connected and automated end-to-end.',
    },
    {
      title: 'Data privacy-first implementation',
      description: 'On-site and privacy-conscious AI options for businesses that can’t default to the public cloud.',
    },
    {
      title: 'Business consultation before implementation',
      description: 'Every build starts with understanding the operating process, not the technology.',
    },
    {
      title: 'Custom builds, not one-size-fits-all SaaS',
      description: 'Systems designed around a business’s existing tools, not a rip-and-replace platform.',
    },
  ],
  cta: 'Explore NexWerk AI',
} as const

export type CaseStudy = {
  slug: string
  title: string
  category: string
  summary: string
  outcome: string
  challenge: string
  approach: string
  solution: string
  tools: string[]
  lessons: string
  link?: { label: string; href: string }
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'nexwerk-ai',
    title: 'NexWerk AI',
    category: 'AI Automation',
    summary:
      'Founded and built an AI automation venture that designs and implements AI agents and workflow systems for SMEs and industrial businesses.',
    outcome: 'A working AI implementation practice, from client scoping to deployed automation.',
    challenge:
      'Industrial and SME teams were tracking maintenance, CRM, and marketing activity across spreadsheets, email, and manual reporting — leading to slow response times and poor visibility into recurring issues.',
    approach:
      'Mapped the existing workflow end-to-end, identified the repetitive manual handoffs, and scoped which processes were worth automating first versus which needed a structural fix.',
    solution:
      'Designed and implemented AI-assisted workflows connecting existing data sources, with dashboards, alerts, and reporting layered on top — plus privacy-conscious, on-site-capable AI options for businesses that can’t default to the public cloud.',
    tools: ['n8n', 'LLM APIs', 'Python', 'CRM integrations', 'Dashboards & reporting'],
    lessons:
      'Pilots succeed when they target one visible bottleneck first — a broad automation rollout without a clear starting point stalls on internal buy-in, not technology.',
    link: { label: 'Visit NexWerk AI', href: 'https://nexwerk.app' },
  },
  {
    slug: 'aarav-broking-digital-transformation',
    title: 'Aarav Broking — Digital Transformation',
    category: 'Digital Transformation',
    summary:
      'Designed and built the digital sourcing and inquiry system for AARAV Broking & IT Solutions, a B2B export brokerage trading into Europe and the Middle East.',
    outcome: 'Centralised inquiry handling and a structured, digital-first sourcing process.',
    challenge:
      'A B2B export brokerage spanning agro products, feed, building materials, gems, and IT services had no central digital presence — buyer inquiries and RFQs were scattered across phone, WhatsApp, and email.',
    approach:
      'Structured the sourcing process — from buyer requirement to supplier verification, sampling, quoting, logistics, and export documentation — into a clear digital flow before building any interface.',
    solution:
      'Built a Next.js platform with a dual-tab inquiry/RFQ system, WhatsApp-integrated contact flow, and category-based sourcing pages, giving the business one place to capture and route every buyer inquiry.',
    tools: ['Next.js', 'TypeScript', 'Framer Motion', 'WhatsApp Business API'],
    lessons:
      'For an international trading business, trust signals (incoterms, ports, verified process steps) matter as much as design polish — buyers convert when the process is legible, not just the UI.',
    link: { label: 'Visit Aarav Broking', href: 'https://www.aaravbroking.com' },
  },
  {
    slug: 'workflow-automation-n8n',
    title: 'Workflow Automation with n8n',
    category: 'AI Automation',
    summary:
      'Designed n8n-based automation for lead intake, reporting, and repetitive coordination tasks across client engagements.',
    outcome: 'Reduced manual coordination and faster, more consistent response workflows.',
    challenge:
      'Repetitive coordination tasks — logging leads, compiling status reports, chasing follow-ups — consumed hours that could go toward higher-value analysis and client work.',
    approach:
      'Audited which recurring tasks followed a consistent, rule-based pattern versus which required human judgement, then prioritised the former for automation.',
    solution:
      'Built n8n workflows that connect intake forms, CRM records, and reporting tools — automatically routing leads, compiling recurring reports, and flagging items that need human follow-up.',
    tools: ['n8n', 'APIs', 'CRM platforms', 'Reporting automation'],
    lessons:
      'The highest-leverage automations are rarely the flashiest ones — a simple, reliable intake-to-CRM workflow saves more time than an elaborate AI feature nobody trusts yet.',
  },
  {
    slug: 'international-business-market-research',
    title: 'International Business & Market Research',
    category: 'International Business',
    summary:
      'Coordinated cross-border trade initiatives and supplier negotiations across German, Indian, and Asian markets.',
    outcome: 'Structured compliance documentation and clearer decision support for international deals.',
    challenge:
      'International trade decisions — supplier selection, compliance, distribution — were being made without a consistent research or documentation process across markets.',
    approach:
      'Combined on-the-ground coordination (at the Consulate General of India, Munich) with hands-on supplier negotiation experience (at Adani Group) to understand both the relationship and the compliance side of cross-border trade.',
    solution:
      'Built structured compliance documentation, supplier evaluation processes, and coordination channels between Indian enterprises and German counterparts, and led supplier negotiations across Asian markets for cost-effective procurement.',
    tools: ['Trade compliance documentation', 'Excel', 'Stakeholder coordination'],
    lessons:
      'International business moves at the speed of trust and documentation, not just price — clear compliance paperwork closes deals as often as commercial terms do.',
  },
]

// Backward-compatible alias used by home page teaser sections.
export const caseStudyTeasers = caseStudies
