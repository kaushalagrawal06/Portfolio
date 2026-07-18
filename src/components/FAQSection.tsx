'use client'

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { LuChevronDown } from 'react-icons/lu'
import type { FaqItem } from '@/data/faq'

function FAQRow({ item, isOpen, onToggle }: { item: FaqItem; isOpen: boolean; onToggle: () => void }) {
  const reduceMotion = useReducedMotion()
  const id = item.question.toLowerCase().replace(/[^a-z0-9]+/g, '-')

  return (
    <div className="border-b border-border">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`faq-panel-${id}`}
          id={`faq-trigger-${id}`}
          className="w-full flex items-center justify-between gap-4 py-5 text-left min-h-[44px]"
        >
          <span className="font-display text-base md:text-lg font-bold text-ink">{item.question}</span>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.25 }}
            className="shrink-0 text-muted"
          >
            <LuChevronDown size={18} />
          </motion.span>
        </button>
      </h3>
      <motion.div
        id={`faq-panel-${id}`}
        role="region"
        aria-labelledby={`faq-trigger-${id}`}
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-sm text-ink/80 leading-relaxed max-w-2xl">{item.answer}</p>
      </motion.div>
    </div>
  )
}

export default function FAQSection({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        suppressHydrationWarning
      />
      <div className="flex flex-col">
        {items.map((item, i) => (
          <FAQRow
            key={item.question}
            item={item}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex((v) => (v === i ? null : i))}
          />
        ))}
      </div>
    </div>
  )
}
