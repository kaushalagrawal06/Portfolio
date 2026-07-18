import Link from 'next/link'
import Image from 'next/image'
import {
  LuGraduationCap,
  LuMapPin,
  LuMail,
  LuLinkedin,
  LuGithub,
  LuDownload,
  LuExternalLink,
  LuAward,
  LuLanguages,
} from 'react-icons/lu'
import AutomationCallout from '../AutomationCallout'

const ACCENT = '#4F46E5'

const skills = [
  'Data Analysis',
  'Python',
  'SQL',
  'Power BI',
  'Market Research',
  'Project Coordination',
  'Excel',
  'Presentation',
]

const projects = [
  {
    title: 'Retail Sales Dashboard',
    desc: 'Interactive Power BI dashboard analysing two years of retail sales to surface seasonality and top-performing categories.',
    tags: ['Power BI', 'Data Viz'],
    img: '/demos/student-portfolio/project-2.jpg',
  },
  {
    title: 'Consumer Survey Study',
    desc: 'End-to-end research project: designed a 400-response survey, cleaned the data in Python, and presented findings to faculty.',
    tags: ['Python', 'Research'],
    img: '/demos/student-portfolio/project-1.jpg',
  },
  {
    title: 'Capstone: Market Entry Plan',
    desc: 'A go-to-market analysis for a European SME expanding into South Asia, covering demand, pricing, and channel strategy.',
    tags: ['Strategy', 'Analysis'],
    img: '/demos/student-portfolio/project-3.jpg',
  },
]

const education = [
  {
    school: 'Technical University — MSc International Management',
    period: '2024 – 2026',
    detail: 'Focus on business analytics and international strategy. Expected distinction.',
  },
  {
    school: 'University of Delhi — BBA (Hons.)',
    period: '2020 – 2023',
    detail: 'Graduated top 5% of cohort. Finance and marketing specialisation.',
  },
]

export default function StudentPortfolioDemo() {
  return (
    <div className="bg-white text-slate-900" style={{ fontFamily: 'var(--font-inter)' }}>
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{ background: `radial-gradient(90% 60% at 15% 0%, ${ACCENT}14, transparent 60%)` }}
        />
        <div className="max-w-5xl mx-auto px-6 pt-20 pb-16 sm:pt-28">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <div
              className="relative shrink-0 w-28 h-28 rounded-3xl overflow-hidden shadow-lg"
              style={{ outline: `3px solid ${ACCENT}` }}
            >
              <Image
                src="/demos/student-portfolio/headshot.jpg"
                alt="Aisha Verma"
                fill
                priority
                sizes="112px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-3">
              <span
                className="inline-flex items-center gap-1.5 w-fit rounded-full px-3 py-1 text-xs font-semibold"
                style={{ backgroundColor: `${ACCENT}14`, color: ACCENT }}
              >
                <LuGraduationCap size={14} /> Open to opportunities abroad
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
                Aisha Verma
              </h1>
              <p className="text-lg text-slate-600 max-w-xl">
                Business analytics graduate seeking data & strategy roles in Europe. I turn messy data
                into decisions companies can act on.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 pt-1">
                <span className="inline-flex items-center gap-1.5">
                  <LuMapPin size={15} /> Munich, Germany · willing to relocate
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <LuLanguages size={15} /> English, German, Hindi
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
              style={{ backgroundColor: ACCENT }}
            >
              <LuDownload size={16} /> Download CV
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-slate-400 transition-colors"
            >
              <LuMail size={16} /> Email me
            </a>
            <div className="flex items-center gap-2">
              <a href="#" aria-label="LinkedIn" className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 text-slate-600 hover:border-slate-400 transition-colors">
                <LuLinkedin size={17} />
              </a>
              <a href="#" aria-label="GitHub" className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 text-slate-600 hover:border-slate-400 transition-colors">
                <LuGithub size={17} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About + Skills */}
      <section className="max-w-5xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-manrope)' }}>About</h2>
          <p className="text-slate-600 leading-relaxed">
            I&apos;m a final-year master&apos;s student specialising in business analytics, with hands-on
            experience across data analysis, market research, and project coordination. I&apos;ve worked on
            real datasets, presented to stakeholders, and thrive when a problem needs both numbers and
            narrative. I&apos;m now looking for a graduate role where I can keep learning and deliver
            measurable value from day one.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-manrope)' }}>Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: 'var(--font-manrope)' }}>Selected projects</h2>
        <div className="grid gap-5 sm:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="group flex flex-col rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes="(min-width: 640px) 30vw, 90vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-2.5 right-2.5 flex items-center justify-center w-8 h-8 rounded-full bg-white/85 text-slate-600 group-hover:text-slate-900 transition-colors">
                  <LuExternalLink size={15} />
                </span>
              </div>
              <div className="flex flex-col gap-3 p-5 flex-1">
                <h3 className="font-bold text-slate-900">{p.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: `${ACCENT}14`, color: ACCENT }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: 'var(--font-manrope)' }}>Education</h2>
        <div className="flex flex-col gap-4">
          {education.map((e) => (
            <div key={e.school} className="flex items-start gap-4 rounded-2xl border border-slate-200 p-5">
              <span className="shrink-0 flex items-center justify-center w-11 h-11 rounded-xl" style={{ backgroundColor: `${ACCENT}14`, color: ACCENT }}>
                <LuAward size={20} />
              </span>
              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <h3 className="font-bold text-slate-900">{e.school}</h3>
                  <span className="text-sm text-slate-500">{e.period}</span>
                </div>
                <p className="text-sm text-slate-600">{e.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Automation selling layer */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <AutomationCallout
          accent={ACCENT}
          label="How I’d supercharge this portfolio"
          text="An AI application tracker that logs every job you apply to, and auto-drafts a tailored cover letter and CV summary for each posting — so you apply to more roles, faster, without losing quality."
        />
      </section>

      {/* Contact */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="rounded-3xl p-8 sm:p-12 text-center flex flex-col items-center gap-4" style={{ backgroundColor: `${ACCENT}0D` }}>
          <h2 className="text-2xl sm:text-3xl font-bold" style={{ fontFamily: 'var(--font-manrope)' }}>Let’s connect</h2>
          <p className="text-slate-600 max-w-md">
            Recruiting for a data or strategy role? I&apos;d love to hear about it.
          </p>
          <Link
            href="/contact#book-a-call"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            style={{ backgroundColor: ACCENT }}
          >
            <LuMail size={16} /> Get in touch
          </Link>
        </div>
      </section>
    </div>
  )
}
