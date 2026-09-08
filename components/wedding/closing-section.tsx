'use client'

import { motion } from 'framer-motion'
import { Sparkle } from 'lucide-react'
import { PetalField } from './petal-field'
import { Monogram } from './monogram'

export function ClosingSection() {
  return (
    <section className="relative overflow-hidden bg-[#e1d2bf] px-4 py-28 text-center sm:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-bottom opacity-80"
        style={{ backgroundImage: "url('/images/closing-botanical.png')" }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[#e1d2bf]/70" />
      <PetalField count={12} seedOffset={90} />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto flex max-w-xl flex-col items-center gap-6"
      >
        <Monogram size="sm" />
        <p className="text-balance font-serif text-2xl italic leading-relaxed text-charcoal sm:text-3xl">
          &ldquo;Therefore what God has joined together,
          <br />
          let no one separate.&rdquo;
        </p>
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-burgundy">
          Mark 10:9
        </p>

        <div className="mt-4 flex items-center gap-3 text-gold/70">
          <span className="h-px w-10 bg-gold/40" />
          <Sparkle className="h-3 w-3 text-gold" aria-hidden="true" />
          <span className="h-px w-10 bg-gold/40" />
        </div>

        <p className="font-serif text-xl text-charcoal/90 sm:text-2xl">
          Madhushani &amp; Binok
        </p>
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-charcoal/55">
          28 November 2026 · Colombo, Sri Lanka
        </p>

        <div className="mt-8 w-full max-w-xs border-t border-gold/20 pt-5">
          <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-charcoal/50">
            Created by
          </p>
          <p className="mt-1 font-serif text-base tracking-wide text-gold/90 sm:text-lg">
            Grand Wedding Cars
          </p>
        </div>
      </motion.div>
    </section>
  )
}
