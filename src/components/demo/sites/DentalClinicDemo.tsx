import Link from 'next/link'
import Image from 'next/image'
import {
  LuStethoscope,
  LuHeartPulse,
  LuSmile,
  LuShieldCheck,
  LuStar,
  LuCalendarCheck,
  LuPhone,
  LuMapPin,
  LuClock,
} from 'react-icons/lu'
import AutomationCallout from '../AutomationCallout'

const ACCENT = '#0D9488'

const services = [
  { icon: LuSmile, title: 'General Dentistry', desc: 'Check-ups, cleanings, and preventive care that keeps problems small.' },
  { icon: LuHeartPulse, title: 'Cosmetic Dentistry', desc: 'Whitening, veneers, and smile makeovers with natural-looking results.' },
  { icon: LuShieldCheck, title: 'Implants & Crowns', desc: 'Durable restorations that look, feel, and function like your own teeth.' },
  { icon: LuStethoscope, title: 'Emergency Care', desc: 'Same-day appointments for pain, chips, and dental emergencies.' },
]

const team = [
  { name: 'Dr. Lena Hoffmann', role: 'Lead Dentist · 15 yrs', img: '/demos/dental-clinic/team-1.jpg' },
  { name: 'Dr. Amir Yilmaz', role: 'Implant Specialist', img: '/demos/dental-clinic/team-2.jpg' },
  { name: 'Sofia Braun', role: 'Dental Hygienist', img: '/demos/dental-clinic/team-3.jpg' },
]

const reasons = [
  'Gentle, anxiety-friendly care',
  'Transparent pricing, no surprises',
  'Modern, painless technology',
  'Evening & Saturday slots',
]

export default function DentalClinicDemo() {
  return (
    <div className="bg-white text-slate-800" style={{ fontFamily: 'var(--font-inter)' }}>
      {/* Hero */}
      <header className="relative overflow-hidden" style={{ backgroundColor: `${ACCENT}0A` }}>
        <div className="max-w-5xl mx-auto px-6 pt-20 pb-16 sm:pt-24 grid gap-10 md:grid-cols-2 items-center">
          <div className="flex flex-col gap-5">
            <span className="inline-flex items-center gap-1.5 w-fit rounded-full px-3 py-1 text-xs font-semibold" style={{ backgroundColor: `${ACCENT}1A`, color: ACCENT }}>
              <LuHeartPulse size={14} /> Accepting new patients
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900" style={{ fontFamily: 'var(--font-manrope)' }}>
              A dentist you’ll actually look forward to
            </h1>
            <p className="text-lg text-slate-600 max-w-lg">
              BrightSmile Dental combines gentle, modern care with a calm, welcoming clinic. Healthy
              teeth, honest advice, and appointments that run on time.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#book" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]" style={{ backgroundColor: ACCENT }}>
                <LuCalendarCheck size={16} /> Book appointment
              </a>
              <a href="tel:+498912345678" className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 hover:border-slate-400 transition-colors">
                <LuPhone size={16} /> Call the clinic
              </a>
            </div>
            <div className="flex items-center gap-1 pt-1 text-sm text-slate-500">
              {[1, 2, 3, 4, 5].map((i) => (
                <LuStar key={i} size={15} className="fill-current" style={{ color: ACCENT }} />
              ))}
              <span className="ml-2">Rated 4.9 by 1,200+ patients</span>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] min-h-[320px]">
            <Image
              src="/demos/dental-clinic/hero.jpg"
              alt="A dentist treating a relaxed patient at BrightSmile Dental"
              fill
              priority
              sizes="(min-width: 768px) 45vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <div className="rounded-2xl bg-white/90 backdrop-blur px-5 py-4 flex flex-col gap-1 shadow-lg">
                <div className="flex items-center gap-1" style={{ color: ACCENT }}>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <LuStar key={i} size={13} className="fill-current" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 font-medium leading-snug">
                  “The most relaxed I&apos;ve ever been at a dentist — they explained everything and never rushed me.”
                </p>
                <span className="text-xs text-slate-500">— Verified patient review</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Services */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900" style={{ fontFamily: 'var(--font-manrope)' }}>Our services</h2>
          <p className="text-slate-500 mt-2">Comprehensive care for the whole family.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="flex flex-col gap-3 rounded-2xl border border-slate-100 p-6 hover:shadow-lg transition-shadow">
              <span className="flex items-center justify-center w-12 h-12 rounded-xl" style={{ backgroundColor: `${ACCENT}14`, color: ACCENT }}>
                <s.icon size={22} />
              </span>
              <h3 className="font-bold text-slate-900">{s.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="py-16" style={{ backgroundColor: `${ACCENT}0A` }}>
        <div className="max-w-5xl mx-auto px-6 grid gap-10 md:grid-cols-2 items-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold text-slate-900" style={{ fontFamily: 'var(--font-manrope)' }}>Why patients choose us</h2>
            <ul className="flex flex-col gap-3">
              {reasons.map((r) => (
                <li key={r} className="flex items-center gap-3 text-slate-700">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full text-white shrink-0" style={{ backgroundColor: ACCENT }}>
                    <LuShieldCheck size={14} />
                  </span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {team.map((m) => (
              <div key={m.name} className="flex flex-col items-center text-center gap-2 rounded-2xl bg-white border border-slate-100 p-4">
                <span className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-white shadow" style={{ outline: `2px solid ${ACCENT}` }}>
                  <Image
                    src={m.img}
                    alt={m.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </span>
                <span className="text-sm font-bold text-slate-900 leading-tight">{m.name}</span>
                <span className="text-xs text-slate-500">{m.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="book" className="max-w-5xl mx-auto px-6 py-16 grid gap-8 md:grid-cols-[1fr_1.1fr]">
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold text-slate-900" style={{ fontFamily: 'var(--font-manrope)' }}>Book your visit</h2>
          <p className="text-slate-600">Choose a time that suits you — we&apos;ll confirm within minutes.</p>
          <div className="flex flex-col gap-3 text-slate-600">
            <span className="inline-flex items-center gap-2.5"><LuMapPin size={18} style={{ color: ACCENT }} /> Leopoldstr. 88, 80802 Munich</span>
            <span className="inline-flex items-center gap-2.5"><LuClock size={18} style={{ color: ACCENT }} /> Mon–Fri 8:00–19:00 · Sat 9:00–14:00</span>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="h-11 rounded-lg border border-slate-200 bg-slate-50 flex items-center px-3 text-sm text-slate-400">Full name</div>
            <div className="h-11 rounded-lg border border-slate-200 bg-slate-50 flex items-center px-3 text-sm text-slate-400">Phone</div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium text-slate-500">Preferred day</span>
            <div className="flex flex-wrap gap-2">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((d) => (
                <span key={d} className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-600">{d}</span>
              ))}
            </div>
          </div>
          <button type="button" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]" style={{ backgroundColor: ACCENT }}>
            <LuCalendarCheck size={16} /> Request appointment
          </button>
        </div>
      </section>

      {/* Automation selling layer */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <AutomationCallout
          accent={ACCENT}
          label="The automation behind the clinic"
          text="Online scheduling connects to your calendar, and automated SMS and email reminders go out before every appointment — reducing no-shows, filling last-minute cancellations, and saving your front desk hours each week."
        />
      </section>

      <div className="max-w-5xl mx-auto px-6 pb-16 text-center">
        <Link
          href="/contact#book-a-call"
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
          style={{ backgroundColor: ACCENT }}
        >
          Get this site for your clinic
        </Link>
      </div>
    </div>
  )
}
