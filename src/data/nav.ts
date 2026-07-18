export type NavItem = {
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Expertise', href: '/expertise' },
  { label: 'Work', href: '/work' },
  { label: 'Demos', href: '/demos' },
  { label: 'NexWerk AI', href: 'https://nexwerk.app' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
]

export const bookCallHref = '/contact#book-a-call'
