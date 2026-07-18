import Link from 'next/link'
import Image from 'next/image'
import {
  LuUtensils,
  LuClock,
  LuMapPin,
  LuPhone,
  LuStar,
  LuLeaf,
  LuCalendarCheck,
} from 'react-icons/lu'
import AutomationCallout from '../AutomationCallout'

const ACCENT = '#D97706'

const menu = [
  { name: 'Saffron Risotto', desc: 'Slow-cooked arborio, saffron, aged parmesan', price: '€18', img: '/demos/restaurant/dish-1.jpg' },
  { name: 'Charred Aubergine', desc: 'Smoked yoghurt, pomegranate, mint oil', price: '€14', img: '/demos/restaurant/dish-2.jpg' },
  { name: 'Sage Butter Gnocchi', desc: 'Hand-rolled potato gnocchi, crispy sage', price: '€16', img: '/demos/restaurant/dish-3.jpg' },
  { name: 'Slow Lamb Tagine', desc: 'Apricot, almond, warm flatbread', price: '€22', img: '/demos/restaurant/dish-4.jpg' },
  { name: 'Citrus Sea Bass', desc: 'Fennel, blood orange, salsa verde', price: '€24', img: '/demos/restaurant/dish-5.jpg' },
  { name: 'Dark Chocolate Tart', desc: 'Sea salt, olive oil, crème fraîche', price: '€9', img: '/demos/restaurant/dish-6.jpg' },
]

const hours = [
  { day: 'Mon – Thu', time: '12:00 – 22:00' },
  { day: 'Fri – Sat', time: '12:00 – 23:30' },
  { day: 'Sunday', time: '12:00 – 21:00' },
]

export default function RestaurantDemo() {
  return (
    <div className="bg-[#FFFBF5] text-stone-800" style={{ fontFamily: 'var(--font-inter)' }}>
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/demos/restaurant/hero.jpg"
            alt="The warm, candlelit dining room at Saffron & Sage"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(28,20,10,0.55), rgba(28,20,10,0.78))' }} />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-24 sm:pt-32 sm:pb-28 text-center flex flex-col items-center gap-5">
          <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-amber-200">
            <LuLeaf size={14} /> Seasonal · Mediterranean · Munich
          </span>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white" style={{ fontFamily: 'var(--font-manrope)' }}>
            Saffron &amp; Sage
          </h1>
          <p className="text-lg text-white/80 max-w-xl">
            A neighbourhood kitchen serving honest, seasonal plates and a wine list worth lingering over.
            Warm room, slow evenings, food that tastes like someone cared.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a href="#reserve" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]" style={{ backgroundColor: ACCENT }}>
              <LuCalendarCheck size={16} /> Reserve a table
            </a>
            <a href="#menu" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
              <LuUtensils size={16} /> View menu
            </a>
          </div>
          <div className="flex items-center gap-1 pt-3 text-sm text-white/70">
            {[1, 2, 3, 4, 5].map((i) => (
              <LuStar key={i} size={16} className="fill-current" style={{ color: '#FBBF24' }} />
            ))}
            <span className="ml-2">4.9 · 620+ reviews</span>
          </div>
        </div>
      </header>

      {/* Menu */}
      <section id="menu" className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-stone-900" style={{ fontFamily: 'var(--font-manrope)' }}>From the kitchen</h2>
          <p className="text-stone-500 mt-2">A short menu, changed with the seasons.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menu.map((item) => (
            <div key={item.name} className="group flex flex-col rounded-2xl overflow-hidden border border-stone-200 bg-white">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-baseline gap-3 p-4">
                <div className="flex-1">
                  <h3 className="font-bold text-stone-900">{item.name}</h3>
                  <p className="text-sm text-stone-500">{item.desc}</p>
                </div>
                <span className="font-bold" style={{ color: ACCENT }}>{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Story band */}
      <section className="py-16" style={{ backgroundColor: `${ACCENT}0D` }}>
        <div className="max-w-5xl mx-auto px-6 grid gap-10 md:grid-cols-2 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-stone-200 shadow-[0_20px_60px_-30px_rgba(120,53,15,0.5)]">
            <Image
              src="/demos/restaurant/story.jpg"
              alt="A chef plating a dish in the Saffron & Sage kitchen"
              fill
              sizes="(min-width: 768px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold text-stone-900" style={{ fontFamily: 'var(--font-manrope)' }}>Our story</h2>
            <p className="text-stone-600 leading-relaxed">
              Saffron &amp; Sage started as a supper club in a tiny apartment kitchen. Ten years later, we&apos;re
              still guided by the same idea: source well, cook simply, and treat every guest like they&apos;re
              eating at our own table. Everything is made in-house, most of it that morning.
            </p>
          </div>
        </div>
      </section>

      {/* Hours + Reserve */}
      <section id="reserve" className="max-w-5xl mx-auto px-6 py-16 grid gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold text-stone-900" style={{ fontFamily: 'var(--font-manrope)' }}>Visit us</h2>
          <div className="flex flex-col gap-3 text-stone-600">
            <span className="inline-flex items-center gap-2.5"><LuMapPin size={18} style={{ color: ACCENT }} /> Sendlinger Str. 42, 80331 Munich</span>
            <span className="inline-flex items-center gap-2.5"><LuPhone size={18} style={{ color: ACCENT }} /> +49 89 1234 5678</span>
          </div>
          <div className="rounded-2xl border border-stone-200 divide-y divide-stone-100">
            {hours.map((h) => (
              <div key={h.day} className="flex items-center justify-between px-4 py-3">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-stone-700"><LuClock size={15} style={{ color: ACCENT }} /> {h.day}</span>
                <span className="text-sm text-stone-500">{h.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 flex flex-col gap-4">
          <h3 className="text-xl font-bold text-stone-900" style={{ fontFamily: 'var(--font-manrope)' }}>Book a table</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-medium text-stone-500">Date</span>
              <div className="h-11 rounded-lg border border-stone-200 bg-stone-50 flex items-center px-3 text-sm text-stone-400">Select date</div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-medium text-stone-500">Guests</span>
              <div className="h-11 rounded-lg border border-stone-200 bg-stone-50 flex items-center px-3 text-sm text-stone-400">2 people</div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium text-stone-500">Time</span>
            <div className="flex flex-wrap gap-2">
              {['18:00', '19:00', '20:00', '21:00'].map((t) => (
                <span key={t} className="rounded-lg border border-stone-200 px-3 py-1.5 text-sm text-stone-600">{t}</span>
              ))}
            </div>
          </div>
          <button
            type="button"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
            style={{ backgroundColor: ACCENT }}
          >
            <LuCalendarCheck size={16} /> Confirm reservation
          </button>
        </div>
      </section>

      {/* Automation selling layer */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <AutomationCallout
          accent={ACCENT}
          label="The automation behind the booking"
          text="An AI reservation assistant takes bookings 24/7, syncs them to your table plan, and sends WhatsApp confirmations and reminders automatically — cutting no-shows and freeing your staff from the phone."
        />
      </section>

      <div className="max-w-5xl mx-auto px-6 pb-16 text-center">
        <Link
          href="/contact#book-a-call"
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
          style={{ backgroundColor: ACCENT }}
        >
          Get this site for your restaurant
        </Link>
      </div>
    </div>
  )
}
