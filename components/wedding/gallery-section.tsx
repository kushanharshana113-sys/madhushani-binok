'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const photos = [
  { src: '/images/img5.jpg', alt: 'Madhushani and Binok together', width: 1024, height: 1536 },
  { src: '/images/img2.jpg', alt: 'Madhushani and Binok by the sea', width: 1024, height: 1536 },
  { src: '/images/img3.jpg', alt: 'A joyful moment together', width: 1536, height: 1024 },
  { src: '/images/img4.jpg', alt: 'Madhushani and Binok dressed elegantly', width: 1024, height: 1536 },
  { src: '/images/img7.jpeg', alt: 'Madhushani and Binok enjoying a mountain view together', width: 1478, height: 1064 },
  { src: '/images/img8.jpeg', alt: 'A close moment with flowers and wedding rings', width: 1101, height: 1429 },
]

export function GallerySection() {
  return (
    <section className="relative overflow-hidden bg-[#e1d2bf] px-4 py-24 text-center sm:py-28">
      <div aria-hidden="true" className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-burgundy/20 blur-3xl" />
      <div aria-hidden="true" className="absolute -right-24 bottom-12 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-12 flex flex-col items-center gap-3"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-burgundy/20 bg-ivory/45 px-4 py-1.5 backdrop-blur">
            <Sparkles className="h-3 w-3 text-gold" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-burgundy/80">
              Our Story
            </span>
          </div>
          <h2 className="font-serif text-4xl text-charcoal sm:text-5xl md:text-6xl">
            Moments <span className="italic text-burgundy">Together</span>
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-charcoal/65">
            A few beautiful memories from the journey that brought us here.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {photos.map((photo, index) => (
            <motion.figure
              key={photo.src}
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -6, scale: 1.015 }}
              whileTap={{ scale: 0.995 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-[28px] border border-gold/35 bg-ivory/35 p-3 shadow-[0_18px_45px_rgba(0,0,0,.22)] backdrop-blur-sm"
              style={{ animation: `float-card ${7.5 + index * 0.6}s ease-in-out ${index * 0.4}s infinite` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-gold/10 opacity-70" />
              <div className="pointer-events-none absolute inset-3 rounded-[22px] border border-white/40" />
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="relative z-10 h-auto w-full rounded-[22px] object-contain transition duration-700 ease-out group-hover:scale-[1.02]"
              />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
