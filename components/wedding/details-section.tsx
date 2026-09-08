'use client'

import { motion } from 'framer-motion'
import { Church, Coffee, Shirt, Heart, Sparkle } from 'lucide-react'

const cards = [
  {
    icon: Church,
    title: 'Ceremony',
    body: (
      <>
        Saturday, 28 November 2026
        <br />
        3.30 PM
        <br />
        St. Andrew's Scots Kirk Church
        <br />
        Colombo, Sri Lanka
      </>
    ),
    swatches: false,
  },
  {
    icon: Coffee,
    title: 'Refreshments',
    body: <>Please join us for light refreshments at the church after the ceremony.</>,
    swatches: false,
  },
  {
    icon: Shirt,
    title: 'Dress Code',
    body: (
      <>
        <span className="inline-block font-serif text-base text-burgundy sm:text-lg">
          Wedding Colours Encouraged
        </span>
        <br />
        <span className="inline-block pt-1 text-charcoal/75">
          Your choice, but greatly appreciated.
        </span>
      </>
    ),
    swatches: true,
  },
  {
    icon: Heart,
    title: 'Your Presence',
    body: <>Your love, prayers and presence mean the world to us.</>,
    swatches: false,
  },
]

const swatchColors = [
  { name: 'Chocolate', color: '#503426', textColor: '#fffaf2' },
  { name: 'Champagne', color: '#e4d2be', textColor: '#332b25' },
  { name: 'Green', color: '#c3cfab', textColor: '#283023' },
  { name: 'Olive Green', color: '#626641', textColor: '#fffaf2' },
  { name: 'Burgundy', color: '#571020', textColor: '#fffaf2' },
]

export function DetailsSection() {
  return (
    <section className="relative bg-ivory px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col items-center gap-3 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-cream px-4 py-1.5">
            <Sparkle className="h-3 w-3 text-burgundy" aria-hidden="true" />
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-charcoal">
              What to Know
            </span>
          </div>
          <h2 className="font-serif text-4xl text-charcoal sm:text-5xl">The Details</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="rounded-2xl border border-gold/25 bg-cream/60 p-6 shadow-sm sm:p-8"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-ivory text-burgundy">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 font-serif text-xl text-charcoal sm:text-2xl">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-charcoal/75">{card.body}</p>
                {card.swatches && (
                  <div
                    className="mt-5 grid w-full grid-cols-5 gap-1.5 sm:gap-2"
                    aria-label="Wedding colour palette"
                  >
                    {swatchColors.map((swatch) => (
                      <div
                        key={swatch.name}
                        title={swatch.name}
                        aria-label={swatch.name}
                        className="flex h-12 min-w-0 items-center justify-center rounded-lg border border-black/5 px-1 text-center font-serif text-[8px] font-semibold leading-tight shadow-[0_4px_12px_rgba(60,45,30,0.10)] sm:h-14 sm:text-[10px]"
                        style={{ backgroundColor: swatch.color, color: swatch.textColor }}
                      >
                        {swatch.name}
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
