import Link from 'next/link'
import Image from 'next/image'
import {
  LuArrowUpRight,
  LuPenTool,
  LuMonitor,
  LuMegaphone,
  LuCode,
  LuArrowRight,
} from 'react-icons/lu'
import AutomationCallout from '../AutomationCallout'

const ACCENT = '#111827'
const HIGHLIGHT = '#F97316'

const services = [
  { icon: LuPenTool, title: 'Brand & Identity', desc: 'Logos, systems, and guidelines that make you unmistakable.' },
  { icon: LuMonitor, title: 'Web Design', desc: 'Fast, beautiful sites that turn visitors into customers.' },
  { icon: LuMegaphone, title: 'Marketing', desc: 'Campaigns and content that actually move the numbers.' },
  { icon: LuCode, title: 'Development', desc: 'Clean, modern builds — from landing pages to web apps.' },
]

const work = [
  { title: 'Lumen Coffee', tag: 'Brand + Web', color: '#F97316', img: '/demos/agency/work-1.jpg' },
  { title: 'Atlas Fintech', tag: 'Product Design', color: '#2563EB', img: '/demos/agency/work-2.jpg' },
  { title: 'Meadow Skincare', tag: 'E-commerce', color: '#DB2777', img: '/demos/agency/work-3.jpg' },
  { title: 'Orbit Analytics', tag: 'SaaS Website', color: '#7C3AED', img: '/demos/agency/work-4.jpg' },
]

const process = [
  { n: '01', title: 'Discover', desc: 'We learn your business, audience, and goals.' },
  { n: '02', title: 'Design', desc: 'We craft and refine until it feels right.' },
  { n: '03', title: 'Deliver', desc: 'We ship, measure, and iterate with you.' },
]

export default function AgencyDemo() {
  return (
    <div className="bg-white text-slate-900" style={{ fontFamily: 'var(--font-inter)' }}>
      {/* Hero */}
      <header className="relative overflow-hidden bg-[#111827] text-white">
        <div className="absolute inset-0">
          <Image
            src="/demos/agency/hero.jpg"
            alt="Northline Studio's creative workspace"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(120deg, #111827 30%, rgba(17,24,39,0.7))' }} />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-20">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-white/80 mb-6">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: HIGHLIGHT }} /> Available for new projects
          </span>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-[0.95]" style={{ fontFamily: 'var(--font-manrope)' }}>
            We build brands<br />
            people <span style={{ color: HIGHLIGHT }}>remember.</span>
          </h1>
          <p className="text-lg text-white/70 max-w-xl mt-6">
            Northline Studio is a small, senior design and development studio. No account managers, no
            fluff — just the people doing the work, obsessed with getting it right.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href="#work" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-slate-900 transition-transform hover:scale-[1.03]" style={{ backgroundColor: HIGHLIGHT }}>
              See our work <LuArrowRight size={16} />
            </a>
            <Link href="/contact#book-a-call" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
              Start a project
            </Link>
          </div>
        </div>
      </header>

      {/* Services */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10" style={{ fontFamily: 'var(--font-manrope)' }}>What we do</h2>
        <div className="grid gap-px bg-slate-200 rounded-2xl overflow-hidden sm:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="group bg-white p-7 flex items-start gap-4 hover:bg-slate-50 transition-colors">
              <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900 text-white shrink-0">
                <s.icon size={20} />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-slate-900">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Work grid */}
      <section id="work" className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl font-bold" style={{ fontFamily: 'var(--font-manrope)' }}>Selected work</h2>
          <span className="text-sm text-slate-500">2024 – 2026</span>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {work.map((w) => (
            <div key={w.title} className="group relative overflow-hidden rounded-2xl aspect-[4/3] p-6 flex flex-col justify-end cursor-pointer">
              <Image
                src={w.img}
                alt={w.title}
                fill
                sizes="(min-width: 640px) 45vw, 90vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${w.color}18, rgba(15,15,20,0.75))` }} />
              <div className="absolute top-5 right-5 flex items-center justify-center w-10 h-10 rounded-full bg-white/90 text-slate-900 transition-transform group-hover:rotate-45">
                <LuArrowUpRight size={18} />
              </div>
              <div className="relative">
                <span className="text-xs font-semibold uppercase tracking-wider text-white/80">{w.tag}</span>
                <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-manrope)' }}>{w.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12" style={{ fontFamily: 'var(--font-manrope)' }}>How we work</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {process.map((p) => (
              <div key={p.n} className="flex flex-col gap-3">
                <span className="text-4xl font-extrabold" style={{ color: HIGHLIGHT, fontFamily: 'var(--font-manrope)' }}>{p.n}</span>
                <h3 className="font-bold text-white text-lg">{p.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation selling layer */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <AutomationCallout
          accent={HIGHLIGHT}
          label="The automation behind the studio"
          text="New enquiries are auto-qualified and scheduled, and onboarding — contracts, questionnaires, project setup — kicks off the moment a client says yes. Less admin, more billable work."
        />
      </section>

      <div className="max-w-5xl mx-auto px-6 pb-16 text-center">
        <Link href="/contact#book-a-call" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]" style={{ backgroundColor: ACCENT }}>
          Get a site like this for your studio
        </Link>
      </div>
    </div>
  )
}
