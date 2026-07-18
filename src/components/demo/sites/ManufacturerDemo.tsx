import Link from 'next/link'
import Image from 'next/image'
import {
  LuFactory,
  LuCog,
  LuShieldCheck,
  LuTruck,
  LuGauge,
  LuArrowRight,
  LuCircleCheck,
} from 'react-icons/lu'
import AutomationCallout from '../AutomationCallout'

const ACCENT = '#1D4ED8'

const capabilities = [
  { icon: LuCog, title: 'CNC Machining', desc: 'Precision turning and milling to ±0.01 mm tolerances.' },
  { icon: LuFactory, title: 'Sheet Metal', desc: 'Laser cutting, bending, and welding at production scale.' },
  { icon: LuGauge, title: 'Quality Control', desc: 'In-house metrology and full inspection reporting.' },
  { icon: LuTruck, title: 'Logistics', desc: 'Just-in-time delivery across Germany and the EU.' },
]

const catalogue = [
  { name: 'Machined Components', spec: 'Aluminium · Steel · Titanium' },
  { name: 'Enclosures & Housings', spec: 'IP65 rated · powder-coated' },
  { name: 'Custom Brackets', spec: 'Laser-cut · CAD to part' },
  { name: 'Assembly Kits', spec: 'Kitted · labelled · traceable' },
]

const certs = ['ISO 9001:2015', 'ISO 14001', 'IATF 16949', 'CE Conformity']

const stats = [
  { value: '40+', label: 'Years in operation' },
  { value: '120', label: 'Team members' },
  { value: '98%', label: 'On-time delivery' },
]

export default function ManufacturerDemo() {
  return (
    <div className="bg-white text-slate-900" style={{ fontFamily: 'var(--font-inter)' }}>
      {/* Hero */}
      <header className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="/demos/manufacturer/hero.jpg"
            alt="Precision manufacturing on the Verdant Industries production floor"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0" style={{ background: `linear-gradient(110deg, rgba(2,6,23,0.92) 35%, rgba(2,6,23,0.55)), radial-gradient(90% 120% at 90% 0%, ${ACCENT}40, transparent 55%)` }} />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-20">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-white/70 mb-6">
            Precision manufacturing since 1984
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight max-w-3xl" style={{ fontFamily: 'var(--font-manrope)' }}>
            Engineered to spec. Built to last.
          </h1>
          <p className="text-lg text-white/60 max-w-xl mt-6">
            Verdant Industries is a family-run precision manufacturer supplying the automotive,
            medical, and industrial sectors. From prototype to full production run.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link href="/contact#book-a-call" className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]" style={{ backgroundColor: ACCENT }}>
              Request a quote <LuArrowRight size={16} />
            </Link>
            <a href="#capabilities" className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
              Our capabilities
            </a>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-14 max-w-lg">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-extrabold" style={{ fontFamily: 'var(--font-manrope)' }}>{s.value}</div>
                <div className="text-xs text-white/50 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Capabilities */}
      <section id="capabilities" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: 'var(--font-manrope)' }}>Capabilities</h2>
        <p className="text-slate-600 mb-10 max-w-xl">Everything under one roof — from raw material to finished, inspected part.</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c) => (
            <div key={c.title} className="rounded-xl border border-slate-200 p-6 hover:border-slate-300 hover:shadow-sm transition-all">
              <span className="flex items-center justify-center w-12 h-12 rounded-lg mb-4" style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}>
                <c.icon size={22} />
              </span>
              <h3 className="font-bold text-slate-900 mb-1">{c.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Facility visuals */}
      <section className="max-w-5xl mx-auto px-6 pb-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="relative rounded-2xl overflow-hidden aspect-[3/2]">
            <Image
              src="/demos/manufacturer/facility.jpg"
              alt="Automated assembly line at Verdant Industries"
              fill
              sizes="(min-width: 640px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-[3/2]">
            <Image
              src="/demos/manufacturer/plant.jpg"
              alt="Verdant Industries production plant"
              fill
              sizes="(min-width: 640px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Catalogue */}
      <section className="bg-slate-50 border-y border-slate-200 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10" style={{ fontFamily: 'var(--font-manrope)' }}>Product catalogue</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {catalogue.map((item) => (
              <div key={item.name} className="flex items-center justify-between rounded-xl bg-white border border-slate-200 px-6 py-5">
                <div>
                  <h3 className="font-semibold text-slate-900">{item.name}</h3>
                  <p className="text-sm text-slate-500">{item.spec}</p>
                </div>
                <LuArrowUpRightSquare />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-8">
          <LuShieldCheck size={24} style={{ color: ACCENT }} />
          <h2 className="text-3xl font-bold" style={{ fontFamily: 'var(--font-manrope)' }}>Certifications</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certs.map((cert) => (
            <div key={cert} className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700">
              <LuCircleCheck size={16} style={{ color: ACCENT }} /> {cert}
            </div>
          ))}
        </div>
      </section>

      {/* Automation selling layer */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <AutomationCallout
          accent={ACCENT}
          label="Where automation cuts the admin"
          text="Every RFQ from the website is parsed, logged, and routed to the right estimator automatically — with an instant acknowledgement to the customer. Quote turnaround drops from days to hours."
        />
      </section>

      <div className="max-w-5xl mx-auto px-6 pb-16 text-center">
        <Link href="/contact#book-a-call" className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]" style={{ backgroundColor: ACCENT }}>
          Modernise your manufacturing site
        </Link>
      </div>
    </div>
  )
}

function LuArrowUpRightSquare() {
  return (
    <span className="flex items-center justify-center w-9 h-9 rounded-lg text-white shrink-0" style={{ backgroundColor: ACCENT }}>
      <LuArrowRight size={16} />
    </span>
  )
}
