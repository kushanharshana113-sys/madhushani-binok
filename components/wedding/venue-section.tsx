'use client'

import { motion } from 'framer-motion'
import { ExternalLink, MapPin, Navigation, Sparkles } from 'lucide-react'

const LOCATION_URL = 'https://share.google/Gd3KYgkjRxahKTvKo'

export function VenueSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#fbf2e7] via-ivory to-[#f4e7e3] px-4 py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(110,31,43,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(110,31,43,.12) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          maskImage: 'linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-12 flex flex-col items-center gap-3 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-ivory/90 px-4 py-1.5 shadow-sm">
            <Sparkles className="h-3 w-3 text-burgundy" aria-hidden="true" />
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-charcoal">
              Ceremony Venue
            </span>
          </div>
          <h2 className="font-serif text-4xl text-charcoal sm:text-5xl md:text-6xl">
            Venue <span className="italic text-burgundy">Location</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.65fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative min-h-[410px] overflow-hidden rounded-[28px] border border-gold/30 bg-ivory/80 shadow-[0_18px_55px_rgba(73,48,37,.12)]"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(200,169,106,.22) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,106,.22) 1px, transparent 1px), radial-gradient(circle at 35% 35%, rgba(110,31,43,.10), transparent 28%), radial-gradient(circle at 72% 68%, rgba(36,64,47,.12), transparent 26%)',
                backgroundSize: '42px 42px, 42px 42px, auto, auto',
              }}
            />
            <svg
              aria-hidden="true"
              className="absolute inset-0 h-full w-full opacity-70"
              viewBox="0 0 900 520"
              preserveAspectRatio="none"
            >
              <path
                d="M70 320 C 180 190, 320 420, 450 275 S 690 210, 830 120"
                fill="none"
                stroke="rgba(110,31,43,0.38)"
                strokeWidth="5"
                strokeDasharray="14 16"
              />
              <path
                d="M100 405 C 260 330, 380 500, 560 405 S 760 335, 860 395"
                fill="none"
                stroke="rgba(200,169,106,0.48)"
                strokeWidth="3"
                strokeDasharray="8 12"
              />
            </svg>

            <motion.div
              initial={{ scale: 0.75, opacity: 0, y: 14 }}
              whileInView={{ scale: 1, opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-[49%] top-[43%] -translate-x-1/2 -translate-y-1/2"
            >
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-burgundy/20 bg-ivory shadow-[0_12px_35px_rgba(110,31,43,.18)] sm:h-24 sm:w-24">
                <span className="absolute inset-2 rounded-full border border-gold/30" />
                <MapPin className="relative h-9 w-9 text-burgundy sm:h-10 sm:w-10" strokeWidth={1.7} />
              </div>
            </motion.div>

            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-gold/25 bg-ivory/95 p-5 shadow-lg backdrop-blur sm:inset-x-6 sm:bottom-6 sm:flex sm:items-center sm:justify-between sm:gap-5">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-burgundy/75">
                  Live Location
                </p>
                <p className="mt-1 font-serif text-xl text-charcoal sm:text-2xl">
                  St. Andrew&apos;s Scots Kirk Church
                </p>
                <p className="mt-1 text-xs text-charcoal/60">Colombo, Sri Lanka</p>
              </div>
              <a
                href={LOCATION_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Open live location in Google Maps"
                className="mt-4 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-burgundy text-cream shadow-md transition-transform hover:scale-105 active:scale-95 sm:mt-0"
              >
                <Navigation className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="rounded-[28px] border border-gold/30 bg-ivory/95 p-6 shadow-[0_18px_55px_rgba(73,48,37,.10)] sm:p-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/35 px-3 py-1.5">
              <MapPin className="h-3.5 w-3.5 text-burgundy" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-burgundy">
                Venue Details
              </span>
            </div>

            <h3 className="mt-6 font-serif text-3xl leading-tight text-charcoal sm:text-4xl">
              St. Andrew&apos;s Scots Kirk Church
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-charcoal/70">
              Please join us for our wedding ceremony in Colombo on Saturday, 28 November 2026 at 3.30 PM.
            </p>

            <a
              href={LOCATION_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-burgundy px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-cream shadow-[0_10px_25px_rgba(110,31,43,.22)] transition hover:-translate-y-0.5 hover:bg-burgundy-deep"
            >
              Open Live Location
              <ExternalLink className="h-4 w-4" />
            </a>

            <div className="mt-6 rounded-2xl border border-gold/20 bg-cream/60 p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-charcoal/50">Ceremony</p>
              <p className="mt-1 font-serif text-xl text-charcoal">Saturday · 3.30 PM</p>
              <p className="mt-1 text-xs text-charcoal/60">28 November 2026</p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
