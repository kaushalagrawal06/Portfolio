export type ExpertiseArea = {
  slug: string
  title: string
  problem: string
  whatIDo: string
  deliverables: string[]
  tools: string[]
  outcome: string
}

export const expertiseAreas: ExpertiseArea[] = [
  {
    slug: 'ai-automation-agents',
    title: 'AI Automation & AI Agents',
    problem:
      'Teams lose hours to manual, repetitive coordination — data entry, reporting, follow-ups — that pulls focus away from higher-value work.',
    whatIDo:
      'I design and implement AI agents and workflow automations that connect existing tools, remove repetitive steps, and surface information where decisions actually get made.',
    deliverables: ['Workflow architecture', 'Automated agent builds', 'Tool & CRM integration', 'Documented handover'],
    tools: ['n8n', 'Python', 'LLM APIs', 'CRM / ERP connectors'],
    outcome: 'Reduced manual coordination and faster response workflows.',
  },
  {
    slug: 'business-operations',
    title: 'Business Operations',
    problem:
      'Growing teams run on spreadsheets, side-channel messages, and tribal knowledge — fragile once volume increases.',
    whatIDo:
      'I map existing operating processes, identify bottlenecks, and rebuild them into structured, repeatable systems that don’t depend on any one person.',
    deliverables: ['Process maps', 'Standard operating procedures', 'Reporting cadences', 'Operating structure'],
    tools: ['Excel', 'Power BI', 'SAP', 'Jira', 'Confluence'],
    outcome: 'Clearer decision support and a scalable operating structure.',
  },
  {
    slug: 'digital-transformation',
    title: 'Digital Transformation',
    problem:
      'Legacy manual processes limit how fast a business can respond to demand, customers, or market change.',
    whatIDo:
      'I assess current-state tooling and workflows, then design and implement digital systems — dashboards, automation, structured data flows — that replace manual handoffs.',
    deliverables: ['Digital process architecture', 'Implementation roadmap', 'Live systems'],
    tools: ['Next.js', 'Power BI', 'Workflow automation', 'CRM platforms'],
    outcome: 'Centralised information and systems that scale with growth.',
  },
  {
    slug: 'project-programme-coordination',
    title: 'Project & Programme Coordination',
    problem:
      'Cross-functional initiatives stall when ownership, timelines, and status aren’t tracked consistently.',
    whatIDo:
      'I set up and run structured coordination — issue tracking, stakeholder reporting, milestone tracking — across distributed teams.',
    deliverables: ['Project trackers', 'Status reporting cadences', 'Stakeholder documentation'],
    tools: ['Jira', 'Confluence', 'Excel', 'Power BI'],
    outcome: 'Improved process visibility and clearer accountability.',
  },
  {
    slug: 'business-analysis-strategy',
    title: 'Business Analysis & Strategy',
    problem:
      'Decisions get made on incomplete data or gut feel, especially in fast-moving or international operations.',
    whatIDo:
      'I analyse business data, market conditions, and process performance to produce clear, actionable recommendations.',
    deliverables: ['Business analysis reports', 'KPI dashboards', 'Strategic recommendations'],
    tools: ['SQL', 'Python', 'Power BI', 'Excel'],
    outcome: 'Clearer decision support and reduced risk in international dealings.',
  },
  {
    slug: 'customer-success-growth-ops',
    title: 'Customer Success & Growth Operations',
    problem:
      'Customer-facing teams struggle to keep response times and follow-through consistent as volume grows.',
    whatIDo:
      'I design lead-management and customer-response workflows that combine automation with structured process ownership.',
    deliverables: ['Lead-response workflows', 'CRM structuring', 'Growth reporting'],
    tools: ['CRM platforms', 'n8n', 'API integrations'],
    outcome: 'Faster response workflows and clearer pipeline visibility.',
  },
]
