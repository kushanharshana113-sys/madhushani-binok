'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Sparkle } from 'lucide-react'
import { PetalField } from './petal-field'

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#d8c3a7] px-4 py-24 text-center">
      <Image
        src="/images/img1.jpg"
        alt="Madhushani and Binok"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-[#2b211b]/68 via-[#5a2a2e]/40 to-[#1f1814]/78" />
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_8%,rgba(0,0,0,.28)_72%)]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(200,169,106,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,106,.6) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <PetalField count={14} seedOffset={40} />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 px-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="-translate-y-14 inline-flex items-center gap-2 rounded-full border border-gold/45 bg-black/20 px-4 py-1.5 backdrop-blur-md sm:translate-y-0"
        >
          <Sparkle className="h-3 w-3 text-gold" aria-hidden="true" />
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-cream/95">
            Holy Matrimony
          </span>
          <Sparkle className="h-3 w-3 text-gold" aria-hidden="true" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-balance font-serif text-5xl leading-tight text-cream drop-shadow-[0_5px_18px_rgba(0,0,0,.55)] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Madhushani <span className="text-gold">&amp;</span> Binok
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl text-balance font-serif text-lg italic text-cream/90 drop-shadow-md sm:text-xl"
        >
          With grateful hearts before God, we invite you to witness our blessed beginning and celebrate this joyful day with us.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-2 flex flex-col items-center gap-3 rounded-[22px] border border-gold/30 bg-black/20 px-7 py-5 backdrop-blur-md"
        >
          <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
            Wedding Date
          </p>
          <p className="font-serif text-2xl text-cream sm:text-3xl">28 November 2026</p>
          <div className="flex items-center gap-3 text-gold/80">
            <span className="h-px w-8 bg-gold/50" />
            <Sparkle className="h-3 w-3 text-gold" aria-hidden="true" />
            <span className="h-px w-8 bg-gold/50" />
          </div>
          <p className="text-xs leading-relaxed text-cream/75">
            St. Andrew&apos;s Scots Kirk Church · Colombo, Sri Lanka
          </p>
        </motion.div>
      </div>
    </section>
  )
}
