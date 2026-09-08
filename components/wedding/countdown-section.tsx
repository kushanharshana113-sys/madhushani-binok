'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkle } from 'lucide-react'

const WEDDING_DATE = new Date('2026-11-28T15:30:00+05:30').getTime()

function getRemaining() {
  const diff = Math.max(0, WEDDING_DATE - Date.now())
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export function CountdownSection() {
  const [remaining, setRemaining] = useState<ReturnType<typeof getRemaining> | null>(null)

  useEffect(() => {
    setRemaining(getRemaining())
    const id = setInterval(() => setRemaining(getRemaining()), 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { label: 'Days', value: remaining?.days },
    { label: 'Hours', value: remaining?.hours },
    { label: 'Minutes', value: remaining?.minutes },
    { label: 'Seconds', value: remaining?.seconds },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream to-ivory px-4 py-24 text-center sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex max-w-xl flex-col items-center gap-3"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-ivory px-4 py-1.5">
          <Sparkle className="h-3 w-3 text-gold" aria-hidden="true" />
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-charcoal">
            The Big Day Approaches
          </span>
          <Sparkle className="h-3 w-3 text-gold" aria-hidden="true" />
        </div>
        <h2 className="font-serif text-4xl text-charcoal sm:text-5xl">
          Counting Down to <span className="italic text-burgundy">Forever</span>
        </h2>
        <p className="text-sm leading-relaxed text-charcoal/70">
          Every moment brings us closer to our blessed wedding day.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-3 sm:gap-5"
      >
        {units.map((u) => (
          <div
            key={u.label}
            className="rounded-2xl border border-gold/30 bg-ivory px-2 py-5 shadow-sm sm:px-4 sm:py-7"
          >
            <p className="font-serif text-3xl tabular-nums text-burgundy sm:text-4xl">
              {u.value !== undefined ? String(u.value).padStart(2, '0') : '00'}
            </p>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-charcoal/60 sm:text-xs">
              {u.label}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
