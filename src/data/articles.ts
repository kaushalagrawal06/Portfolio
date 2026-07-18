export type ArticleSection = {
  heading: string
  body: string[]
}

export type Article = {
  slug: string
  title: string
  category: string
  excerpt: string
  publishedAt: string
  relatedCaseStudySlug?: string
  intro: string
  sections: ArticleSection[]
}

export const articles: Article[] = [
  {
    slug: 'ai-automation-for-smes-where-to-start',
    title: 'AI automation for SMEs: where to actually start',
    category: 'AI Automation',
    publishedAt: '2026-03-10',
    relatedCaseStudySlug: 'nexwerk-ai',
    excerpt:
      'Most SMEs don’t need a broad AI rollout — they need one visible bottleneck removed first. Here’s the sequencing that works, based on building NexWerk AI.',
    intro:
      'The most common mistake in AI adoption for small and mid-sized businesses isn’t choosing the wrong tool — it’s starting too broad. A team that tries to automate five processes at once usually ends up with none of them fully working, and a lot of internal skepticism about whether "AI" was worth the disruption.',
    sections: [
      {
        heading: 'Start with one bottleneck, not a strategy',
        body: [
          'When I started NexWerk AI, the pattern across early client conversations was consistent: industrial and SME teams were tracking maintenance, CRM, and marketing activity across spreadsheets, email, and manual reporting. Response times were slow, and nobody had good visibility into recurring issues.',
          'The instinct is to propose a comprehensive automation strategy covering every department. In practice, the engagements that actually stuck were the ones that picked a single, visible bottleneck — one workflow that was obviously broken and painful — and fixed that first. A working automation for one process builds more internal trust than a roadmap for ten.',
        ],
      },
      {
        heading: 'Map the workflow before choosing a tool',
        body: [
          'Before any automation gets built, the existing workflow needs to be mapped end-to-end: where does the data currently live, who touches it, and where does the handoff break down? This step is unglamorous but it’s where most of the real analysis happens — identifying which manual steps are genuinely repetitive and rule-based (good automation candidates) versus which ones require judgement calls that shouldn’t be automated away.',
          'Only after that mapping is done does tool selection make sense. For most of the automation work at NexWerk AI, that’s meant connecting existing data sources with n8n, layering dashboards and alerts on top, and — for businesses that can’t default to the public cloud for data privacy reasons — building privacy-conscious, on-site-capable options instead of assuming everything goes through a third-party API.',
        ],
      },
      {
        heading: 'The lesson that keeps repeating',
        body: [
          'Pilots succeed when they target one visible bottleneck first. A broad automation rollout without a clear starting point tends to stall on internal buy-in, not on the technology itself — the tools almost always work; what fails is trying to change too many workflows for too many people at the same time.',
          'If you’re an SME owner considering where to start, the practical answer is usually smaller than expected: pick the one process everyone already complains about, automate that completely, and let the result make the case for what comes next.',
        ],
      },
    ],
  },
  {
    slug: 'where-manual-coordination-breaks-first',
    title: 'Where manual coordination breaks first as you scale',
    category: 'Business Operations',
    publishedAt: '2026-04-02',
    relatedCaseStudySlug: 'workflow-automation-n8n',
    excerpt:
      'Lead intake, status reporting, and follow-ups are rarely the interesting part of the job — which is exactly why they’re usually the first thing to break under volume.',
    intro:
      'Every growing team eventually hits the same wall: the coordination work that used to take a few minutes a day — logging a lead, compiling a status update, chasing a follow-up — starts eating hours. Not because the work got harder, but because the volume outgrew the manual process holding it together.',
    sections: [
      {
        heading: 'Diagnose before you automate',
        body: [
          'The approach I use for this kind of work follows a consistent five-step process: diagnose the real operational problem rather than the symptom, prioritise which fixes create the most business impact for the least disruption, design the workflow and tooling, implement it with the actual stakeholders involved, and then monitor and improve — because a system needs maintenance, not just a launch.',
          'In one engagement, that diagnosis step meant auditing which recurring tasks followed a consistent, rule-based pattern — lead intake, report compilation — versus which ones required human judgement. Only the rule-based work was prioritised for automation; the judgement calls stayed with the people best placed to make them.',
        ],
      },
      {
        heading: 'What actually got automated',
        body: [
          'The resulting n8n workflows connected intake forms, CRM records, and reporting tools directly — automatically routing new leads to the right owner, compiling recurring status reports without manual copy-paste, and flagging the items that still needed a human decision instead of trying to automate those away too.',
          'None of this involved a flashy AI feature. It was closer to plumbing: making sure information moved between systems without someone manually re-entering it three times a week.',
        ],
      },
      {
        heading: 'The highest-leverage automation is rarely the flashiest one',
        body: [
          'That’s the real lesson from this kind of work: a simple, reliable intake-to-CRM workflow saves more time than an elaborate AI feature nobody trusts yet. Teams don’t need the most sophisticated automation available — they need the one that removes a task they were already doing badly by hand, consistently and without surprises.',
          'If coordination overhead is the bottleneck, the fix usually isn’t a new platform. It’s connecting the tools already in use so information stops requiring a person to move it manually.',
        ],
      },
    ],
  },
  {
    slug: 'digital-transformation-for-trading-and-export-businesses',
    title: 'Digital transformation for trading and export businesses',
    category: 'Digital Transformation',
    publishedAt: '2026-05-18',
    relatedCaseStudySlug: 'aarav-broking-digital-transformation',
    excerpt:
      'For a B2B export brokerage, the hard part of going digital isn’t the interface — it’s making the sourcing process legible before you build anything.',
    intro:
      'B2B trading and export businesses often carry a specific digital gap: the company might be well-established and trusted in its markets, but its buyer inquiries and RFQs are scattered across phone calls, WhatsApp messages, and email threads with no central system capturing any of it.',
    sections: [
      {
        heading: 'The problem is process, not design',
        body: [
          'That was the starting point for AARAV Broking & IT Solutions, a B2B export brokerage spanning agro products, feed, building materials, gems, and IT services, trading into Europe and the Middle East. There was no central digital presence, and every inquiry lived in a different channel depending on who picked it up.',
          'Before building any interface, the real work was structuring the sourcing process itself — from buyer requirement, to supplier verification, sampling, quoting, logistics, and export documentation — into a clear, repeatable flow. A polished website on top of a disorganised process just moves the disorganisation online.',
        ],
      },
      {
        heading: 'What the platform actually needed to do',
        body: [
          'The resulting system was a Next.js platform built around a dual-tab inquiry and RFQ system, a WhatsApp-integrated contact flow (since that’s where buyers already communicate), and category-based sourcing pages — giving the business one place to capture and route every buyer inquiry instead of five.',
          'The technical stack mattered less than the sequencing: process first, then interface, then integration with the communication channels buyers were already using.',
        ],
      },
      {
        heading: 'Trust signals matter as much as design',
        body: [
          'For an international trading business, trust signals — incoterms, ports, verified process steps — matter as much as visual design. Buyers convert when the process is legible: when they can see how sourcing, verification, and logistics actually work, not just when the site looks credible.',
          'That’s the broader takeaway for any trading or export business considering a digital rebuild: the interface is the easy part. The transformation that actually moves the needle is making an already-trusted process visible and structured online.',
        ],
      },
    ],
  },
]

export function estimateReadingTime(article: Article): number {
  const words =
    article.intro.split(/\s+/).length +
    article.sections.reduce((sum, section) => sum + section.body.join(' ').split(/\s+/).length, 0)
  return Math.max(1, Math.round(words / 200))
}
