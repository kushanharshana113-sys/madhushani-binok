'use client'

import { FormEvent, useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, MessageCircle, Sparkles } from 'lucide-react'

const WHATSAPP_NUMBER = '94778309543'

export function RsvpSection() {
  const [name, setName] = useState('')
  const [attendance, setAttendance] = useState('Yes, joyfully attending')
  const [guests, setGuests] = useState('1')
  const [message, setMessage] = useState('')

  const submitRsvp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const text = [
      'Wedding RSVP — Madhushani & Binok',
      '',
      `Guest Name: ${name.trim() || 'Not provided'}`,
      `Attendance: ${attendance}`,
      `Number of Guests: ${guests}`,
      `Message: ${message.trim() || '—'}`,
    ].join('\n')

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ivory to-cream px-4 py-24 sm:py-28">
      <div aria-hidden="true" className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-burgundy/10 blur-3xl" />
      <div aria-hidden="true" className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-forest/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-10 flex flex-col items-center gap-3 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-ivory px-4 py-1.5 shadow-sm">
            <Heart className="h-3.5 w-3.5 text-burgundy" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-charcoal">
              Kindly Respond
            </span>
          </div>
          <h2 className="font-serif text-4xl text-charcoal sm:text-5xl md:text-6xl">
            RSVP <span className="italic text-burgundy">With Love</span>
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-charcoal/65">
            Please let us know if you will be celebrating with us. Your response will be sent directly through WhatsApp.
          </p>
        </motion.div>

        <motion.form
          onSubmit={submitRsvp}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="relative overflow-hidden rounded-[30px] border border-gold/30 bg-ivory/90 p-5 shadow-[0_18px_55px_rgba(73,48,37,.12)] sm:p-8"
        >
          <div aria-hidden="true" className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="sm:col-span-2">
              <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.22em] text-burgundy/80">Guest Name</span>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full rounded-2xl border border-gold/30 bg-cream/50 px-4 py-3.5 text-sm text-charcoal outline-none transition placeholder:text-charcoal/35 focus:border-burgundy/45 focus:ring-2 focus:ring-burgundy/10"
              />
            </label>

            <label>
              <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.22em] text-burgundy/80">Will you attend?</span>
              <select
                value={attendance}
                onChange={(e) => setAttendance(e.target.value)}
                className="w-full rounded-2xl border border-gold/30 bg-cream/50 px-4 py-3.5 text-sm text-charcoal outline-none focus:border-burgundy/45 focus:ring-2 focus:ring-burgundy/10"
              >
                <option>Yes, joyfully attending</option>
                <option>Sorry, unable to attend</option>
              </select>
            </label>

            <label>
              <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.22em] text-burgundy/80">Number of Guests</span>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full rounded-2xl border border-gold/30 bg-cream/50 px-4 py-3.5 text-sm text-charcoal outline-none focus:border-burgundy/45 focus:ring-2 focus:ring-burgundy/10"
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={String(n)}>{n}</option>
                ))}
              </select>
            </label>

            <label className="sm:col-span-2">
              <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.22em] text-burgundy/80">Message / Notes</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                placeholder="A message for the couple..."
                className="w-full resize-none rounded-2xl border border-gold/30 bg-cream/50 px-4 py-3.5 text-sm text-charcoal outline-none transition placeholder:text-charcoal/35 focus:border-burgundy/45 focus:ring-2 focus:ring-burgundy/10"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-burgundy px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-cream shadow-[0_12px_30px_rgba(110,31,43,.24)] transition hover:-translate-y-0.5 hover:bg-burgundy-deep active:translate-y-0"
          >
            <MessageCircle className="h-4 w-4" />
            Send RSVP via WhatsApp
          </button>

          <div className="mt-6 flex items-center justify-center gap-3 text-gold/70">
            <span className="h-px w-10 bg-gold/40" />
            <Sparkles className="h-3 w-3" />
            <span className="h-px w-10 bg-gold/40" />
          </div>
        </motion.form>
      </div>
    </section>
  )
}
