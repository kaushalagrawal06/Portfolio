import Link from 'next/link'
import Image from 'next/image'
import {
  LuZap,
  LuChartLine,
  LuWorkflow,
  LuLock,
  LuCheck,
  LuArrowRight,
  LuSparkles,
} from 'react-icons/lu'

const ACCENT = '#7C3AED'

const features = [
  { icon: LuWorkflow, title: 'Visual workflows', desc: 'Drag, drop, and connect your tools in minutes — no code required.' },
  { icon: LuChartLine, title: 'Live analytics', desc: 'See what’s working in real time with dashboards your whole team can read.' },
  { icon: LuLock, title: 'Enterprise-grade security', desc: 'SOC 2, SSO, and role-based access baked in from day one.' },
]

const steps = [
  { n: '01', title: 'Connect', desc: 'Plug in the tools you already use in a couple of clicks.' },
  { n: '02', title: 'Automate', desc: 'Build flows that run the repetitive work for you.' },
  { n: '03', title: 'Scale', desc: 'Watch output climb while your team focuses on real work.' },
]

const plans = [
  { name: 'Starter', price: '€0', period: '/mo', features: ['Up to 3 workflows', '1 user', 'Community support'], cta: 'Start free', highlight: false },
  { name: 'Growth', price: '€49', period: '/mo', features: ['Unlimited workflows', '10 users', 'Priority support', 'Advanced analytics'], cta: 'Start trial', highlight: true },
  { name: 'Scale', price: 'Custom', period: '', features: ['Everything in Growth', 'SSO & SAML', 'Dedicated manager', 'SLA'], cta: 'Talk to sales', highlight: false },
]

export default function SaasStartupDemo() {
  return (
    <div className="bg-[#0B0B14] text-slate-200" style={{ fontFamily: 'var(--font-inter)' }}>
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: `radial-gradient(80% 60% at 50% 0%, ${ACCENT}33, transparent 60%)` }} />
        <div className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center flex flex-col items-center gap-6">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-white/80">
            <LuSparkles size={13} style={{ color: ACCENT }} /> Now with AI-assisted workflows
          </span>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.05]" style={{ fontFamily: 'var(--font-manrope)' }}>
            Automate the busywork.<br />
            <span style={{ color: ACCENT }}>Ship what matters.</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-xl">
            FlowGrid connects your tools and runs the repetitive work automatically — so your team spends
            time on the things software can’t do.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="#pricing" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]" style={{ backgroundColor: ACCENT }}>
              Start free <LuArrowRight size={16} />
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5 transition-colors">
              See how it works
            </a>
          </div>
          <p className="text-xs text-slate-500">No credit card required · 14-day Growth trial</p>
        </div>

        {/* Product screenshot */}
        <div className="max-w-5xl mx-auto px-6 pb-4">
          <div className="relative rounded-t-2xl border border-white/10 bg-white/[0.03] overflow-hidden shadow-2xl">
            <div className="flex items-center gap-1.5 px-4 h-9 border-b border-white/10 bg-white/[0.04]">
              <span className="w-3 h-3 rounded-full bg-red-400/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <span className="w-3 h-3 rounded-full bg-green-400/70" />
              <span className="ml-3 text-[11px] text-white/40">app.flowgrid.io</span>
            </div>
            <div className="relative aspect-[16/9]">
              <Image
                src="/demos/saas-startup/dashboard.jpg"
                alt="The FlowGrid analytics dashboard"
                fill
                priority
                sizes="(min-width: 1024px) 960px, 100vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Logos strip */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-slate-500 mb-6">Trusted by fast-moving teams</p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-60">
          {['Nimbus', 'Vertex', 'Loop', 'Cobalt', 'Northstar'].map((l) => (
            <span key={l} className="text-lg font-bold tracking-tight text-white/70" style={{ fontFamily: 'var(--font-manrope)' }}>{l}</span>
          ))}
        </div>
      </div>

      {/* Features */}
      <section id="features" className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid gap-5 sm:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 flex flex-col gap-3">
              <span className="flex items-center justify-center w-12 h-12 rounded-xl" style={{ backgroundColor: `${ACCENT}26`, color: ACCENT }}>
                <f.icon size={22} />
              </span>
              <h3 className="font-bold text-white">{f.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12" style={{ fontFamily: 'var(--font-manrope)' }}>Up and running in three steps</h2>
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl aspect-[4/3]">
            <Image
              src="/demos/saas-startup/analytics.jpg"
              alt="A team reviewing FlowGrid analytics on a laptop"
              fill
              sizes="(min-width: 1024px) 480px, 90vw"
              className="object-cover"
            />
          </div>
          <div className="grid gap-8">
            {steps.map((s) => (
              <div key={s.n} className="flex items-start gap-4">
                <span className="text-3xl font-extrabold shrink-0" style={{ color: ACCENT, fontFamily: 'var(--font-manrope)' }}>{s.n}</span>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-white text-lg">{s.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-3" style={{ fontFamily: 'var(--font-manrope)' }}>Simple, honest pricing</h2>
        <p className="text-slate-400 text-center mb-12">Start free. Upgrade when you’re ready.</p>
        <div className="grid gap-5 sm:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className="rounded-2xl border p-6 flex flex-col gap-4"
              style={p.highlight ? { borderColor: ACCENT, backgroundColor: `${ACCENT}14` } : { borderColor: 'rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.02)' }}
            >
              {p.highlight && (
                <span className="w-fit rounded-full px-2.5 py-0.5 text-xs font-semibold text-white" style={{ backgroundColor: ACCENT }}>Most popular</span>
              )}
              <div>
                <h3 className="font-bold text-white text-lg">{p.name}</h3>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-3xl font-extrabold text-white" style={{ fontFamily: 'var(--font-manrope)' }}>{p.price}</span>
                  <span className="text-slate-400 text-sm">{p.period}</span>
                </div>
              </div>
              <ul className="flex flex-col gap-2 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                    <LuCheck size={15} style={{ color: ACCENT }} className="shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="rounded-full px-5 py-2.5 text-sm font-semibold transition-transform hover:scale-[1.02]"
                style={p.highlight ? { backgroundColor: ACCENT, color: 'white' } : { border: '1px solid rgba(255,255,255,0.15)', color: 'white' }}
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Automation selling layer */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="rounded-2xl border p-5 sm:p-6 flex items-start gap-4" style={{ borderColor: `${ACCENT}44`, backgroundColor: `${ACCENT}14` }}>
          <span className="shrink-0 flex items-center justify-center w-10 h-10 rounded-xl" style={{ backgroundColor: `${ACCENT}2E`, color: ACCENT }}>
            <LuZap size={20} />
          </span>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold uppercase tracking-[0.1em]" style={{ color: ACCENT }}>The automation behind the launch</span>
            <p className="text-sm text-slate-300 leading-relaxed">
              Every signup and demo request flows straight into your CRM, tagged and scored, with an
              instant follow-up sequence — so no lead goes cold while your team is heads-down building.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 pb-16 text-center">
        <Link href="/contact#book-a-call" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]" style={{ backgroundColor: ACCENT }}>
          Get a landing page like this
        </Link>
      </div>
    </div>
  )
}
