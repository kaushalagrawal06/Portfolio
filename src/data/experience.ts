export type ExperienceItem = {
  title: string
  company: string
  location: string
  period: string
  description: string
  highlights: string[]
  tech: string[]
}

export const experience: ExperienceItem[] = [
  {
    title: 'Business Consultant',
    company: 'HORBACH',
    location: 'Stuttgart, Germany',
    period: 'May 2025 – January 2026',
    description:
      'Advised on business optimisation and export strategy for clients navigating international growth, combining data analysis with practical process recommendations.',
    highlights: [
      'Delivered data-driven reporting and analysis to support client decision-making',
      'Supported cost-reduction and export-strategy initiatives',
      'Applied structured business analysis methods to real client operations',
    ],
    tech: ['Data Analysis', 'Excel', 'Python', 'Business Strategy'],
  },
  {
    title: 'Working Student, Business Leads Management',
    company: 'Consulate General of India, Munich',
    location: 'Munich, Germany',
    period: 'April 2024 – July 2024',
    description:
      'Coordinated international trade and business-leads initiatives, supporting Indian businesses navigating the German market with compliance and relationship groundwork.',
    highlights: [
      'Coordinated cross-border business-leads communication between Indian enterprises and German counterparts',
      'Supported compliance documentation for international trade',
      'Collaborated with interdisciplinary teams on trade-promotion initiatives',
    ],
    tech: ['International Trade', 'Export / Import', 'Compliance', 'Stakeholder Coordination'],
  },
  {
    title: 'Student Representative',
    company: 'Deggendorf Institute of Technology (THD)',
    location: 'Pfarrkirchen, Germany',
    period: 'October 2023 – December 2023',
    description:
      'Represented student interests and coordinated communication between the student body and university administration.',
    highlights: [
      'Facilitated structured feedback channels between students and faculty',
      'Coordinated logistics for student initiatives',
    ],
    tech: ['Stakeholder Communication', 'Coordination'],
  },
  {
    title: 'Working Student, Procurement',
    company: 'Laumer GmbH',
    location: 'Pfarrkirchen, Germany',
    period: 'May 2023 – October 2023',
    description:
      'Managed procurement operations with a focus on supplier coordination and cost-conscious sourcing.',
    highlights: [
      'Supported raw-material sourcing and supplier coordination',
      'Contributed to supply-security and quality-focused procurement practices',
    ],
    tech: ['Procurement', 'Supply Chain', 'Cost Analysis'],
  },
  {
    title: 'Business Analyst / Project Manager',
    company: 'Adani Group',
    location: 'Ahmedabad, India',
    period: 'March 2020 – January 2023',
    description:
      'Managed cross-functional projects with a focus on supplier negotiation, risk analysis, and supply chain coordination across international markets.',
    highlights: [
      'Led supplier negotiations across Asian markets for cost-effective procurement',
      'Conducted risk analysis for international trade compliance',
      'Coordinated distribution channels for packaged goods',
    ],
    tech: ['Business Analysis', 'Risk Management', 'Supply Chain', 'Excel'],
  },
  {
    title: 'Remote Internship, Finance & Commodities Analyst',
    company: 'Bitpanda',
    location: 'Remote',
    period: 'January 2018 – June 2018',
    description:
      'Conducted market analysis and financial modelling for commodity trading operations in a remote analyst role.',
    highlights: [
      'Conducted commodity market research and risk assessments',
      'Built pricing and hedging models in Excel',
      'Prepared import / export compliance reports',
    ],
    tech: ['Financial Analysis', 'Commodity Markets', 'Excel', 'Risk Assessment'],
  },
]
