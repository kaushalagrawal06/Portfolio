import Link from 'next/link'
import Image from 'next/image'
import {
  LuShoppingBag,
  LuStar,
  LuTruck,
  LuLeaf,
  LuHeart,
  LuArrowRight,
} from 'react-icons/lu'
import AutomationCallout from '../AutomationCallout'

const ACCENT = '#DB2777'
const BG = '#FFF5F9'

const products = [
  { name: 'Wild Rose Candle', price: '€24', tag: 'Bestseller', img: '/demos/ecommerce/product-1.jpg' },
  { name: 'Botanical Soap Set', price: '€18', tag: 'New', img: '/demos/ecommerce/product-2.jpg' },
  { name: 'Linen Room Spray', price: '€29', tag: null, img: '/demos/ecommerce/product-3.jpg' },
  { name: 'Ceramic Diffuser', price: '€42', tag: 'Bestseller', img: '/demos/ecommerce/product-4.jpg' },
  { name: 'Dried Flower Bundle', price: '€16', tag: null, img: '/demos/ecommerce/product-5.jpg' },
  { name: 'Gift Box — The Full Set', price: '€68', tag: 'Limited', img: '/demos/ecommerce/product-6.jpg' },
]

const categories = ['Home Fragrance', 'Bath & Body', 'Florals', 'Gift Sets']

const perks = [
  { icon: LuTruck, title: 'Free EU shipping', desc: 'On orders over €40' },
  { icon: LuLeaf, title: 'Plastic-free', desc: 'Every order, always' },
  { icon: LuHeart, title: 'Handmade', desc: 'In small batches' },
]

export default function EcommerceDemo() {
  return (
    <div style={{ backgroundColor: BG, fontFamily: 'var(--font-inter)' }} className="text-slate-900">
      {/* Hero */}
      <header className="max-w-6xl mx-auto px-6 pt-20 pb-14">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold mb-6" style={{ backgroundColor: `${ACCENT}15`, color: ACCENT }}>
              <LuLeaf size={13} /> Natural · Handmade · Sustainable
            </span>
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-[0.95]" style={{ fontFamily: 'var(--font-manrope)' }}>
              Little rituals for<br />everyday <span style={{ color: ACCENT }}>calm.</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-md mt-6">
              Bloom &amp; Co. makes small-batch candles, soaps, and home fragrance from natural
              ingredients — designed to make your space feel like a deep breath.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <a href="#shop" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]" style={{ backgroundColor: ACCENT }}>
                Shop the collection <LuShoppingBag size={16} />
              </a>
              <a href="#shop" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-white transition-colors">
                Bestsellers
              </a>
            </div>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden">
            <Image
              src="/demos/ecommerce/hero.jpg"
              alt="Bloom & Co. handmade candles and home fragrance"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
            <div className="absolute bottom-5 left-5 rounded-2xl bg-white/85 backdrop-blur px-4 py-3 shadow-sm">
              <div className="flex items-center gap-1" style={{ color: ACCENT }}>
                {Array.from({ length: 5 }).map((_, i) => <LuStar key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-xs text-slate-600 mt-1">“Obsessed. My whole flat smells amazing.”</p>
            </div>
          </div>
        </div>
      </header>

      {/* Perks strip */}
      <section className="border-y border-pink-100 bg-white/50">
        <div className="max-w-6xl mx-auto px-6 py-6 grid gap-6 sm:grid-cols-3">
          {perks.map((p) => (
            <div key={p.title} className="flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-full shrink-0" style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}>
                <p.icon size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">{p.title}</p>
                <p className="text-xs text-slate-500">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-6 pt-14">
        <div className="flex flex-wrap gap-2.5">
          {categories.map((c, i) => (
            <span key={c} className="rounded-full px-4 py-2 text-sm font-medium transition-colors cursor-pointer" style={i === 0 ? { backgroundColor: ACCENT, color: 'white' } : { backgroundColor: 'white', color: '#334155', border: '1px solid #F3D5E2' }}>
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* Product grid */}
      <section id="shop" className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div key={p.name} className="group rounded-2xl bg-white border border-pink-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {p.tag && (
                  <span className="absolute top-3 left-3 rounded-full px-2.5 py-1 text-[11px] font-semibold text-white z-10" style={{ backgroundColor: ACCENT }}>
                    {p.tag}
                  </span>
                )}
                <button className="absolute top-3 right-3 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-white/85 text-slate-500 hover:text-pink-600 transition-colors" aria-label="Add to wishlist">
                  <LuHeart size={16} />
                </button>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-slate-900">{p.name}</h3>
                  <p className="text-sm font-bold" style={{ color: ACCENT }}>{p.price}</p>
                </div>
                <button className="flex items-center justify-center w-10 h-10 rounded-full text-white transition-transform hover:scale-110" style={{ backgroundColor: ACCENT }} aria-label={`Add ${p.name} to cart`}>
                  <LuShoppingBag size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Automation selling layer */}
      <section className="max-w-6xl mx-auto px-6 pb-14">
        <AutomationCallout
          accent={ACCENT}
          label="The automation working behind the shop"
          text="Abandoned carts trigger a friendly reminder, orders sync straight to fulfilment and accounting, and post-purchase emails ask for reviews at exactly the right moment — recovering sales you'd otherwise lose."
        />
      </section>

      {/* Newsletter */}
      <section className="bg-white border-t border-pink-100">
        <div className="max-w-2xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold" style={{ fontFamily: 'var(--font-manrope)' }}>Get 10% off your first order</h2>
          <p className="text-slate-600 mt-3">Join the list for new drops, restocks, and slow-living notes.</p>
          <div className="flex flex-col sm:flex-row gap-3 mt-7 max-w-md mx-auto">
            <input
              type="email"
              placeholder="you@email.com"
              className="flex-1 rounded-full border border-slate-300 px-5 py-3 text-sm outline-none focus:ring-2"
              style={{ '--tw-ring-color': ACCENT } as React.CSSProperties}
            />
            <button className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white" style={{ backgroundColor: ACCENT }}>
              Subscribe <LuArrowRight size={16} />
            </button>
          </div>
          <div className="mt-10">
            <Link href="/contact#book-a-call" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors">
              Get a store like this for your brand
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
