'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { PetalField } from './petal-field'

export function VerseSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#d7c0a2] via-[#e1d2bf] to-[#f1e5d6] px-4 py-20 text-center sm:py-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(200,169,106,0.6) 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />
      <div aria-hidden="true" className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-burgundy/20 blur-3xl" />
      <div aria-hidden="true" className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
      <PetalField count={8} seedOffset={135} />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-3xl"
      >
        <div className="mx-auto mb-7 flex items-center justify-center gap-3 text-gold/75">
          <span className="h-px w-12 bg-gold/40 sm:w-20" />
          <Sparkles className="h-4 w-4" aria-hidden="true" />
          <span className="h-px w-12 bg-gold/40 sm:w-20" />
        </div>

        <blockquote className="text-balance font-serif text-2xl italic leading-relaxed text-charcoal sm:text-3xl md:text-4xl">
          &ldquo;And the rib that the Lord God had taken from the man He made into a woman and He brought her to the man.&rdquo;
        </blockquote>
        <p className="mt-6 font-sans text-xs font-semibold uppercase tracking-[0.32em] text-burgundy sm:text-sm">
          Genesis 2:22
        </p>

        <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-gold/55 to-transparent" />
      </motion.div>
    </section>
  )
}
