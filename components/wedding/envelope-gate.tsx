'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PetalField } from './petal-field'

type Stage = 'closed' | 'opening' | 'leaving'

export function EnvelopeGate({ onUnveiled }: { onUnveiled: () => void }) {
  const [stage, setStage] = useState<Stage>('closed')
  const [guestName, setGuestName] = useState('Our Beloved Guest')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const rawName = params.get('to') ?? params.get('guest') ?? params.get('name')
    const normalized = rawName?.trim().replace(/\s+/g, ' ')

    if (normalized) {
      setGuestName(normalized.slice(0, 60))
    }
  }, [])

  useEffect(() => {
    if (stage !== 'opening') return
    const t = setTimeout(() => setStage('leaving'), 2600)
    return () => clearTimeout(t)
  }, [stage])

  useEffect(() => {
    if (stage !== 'leaving') return
    const t = setTimeout(onUnveiled, 900)
    return () => clearTimeout(t)
  }, [stage, onUnveiled])

  const handleOpen = () => {
    if (stage !== 'closed') return

    // Start the wedding music from the same user gesture that opens the envelope.
    // Browsers allow media playback here because this runs directly inside the tap/click handler.
    const audio = document.getElementById('wedding-audio') as HTMLAudioElement | null
    if (audio) {
      audio.volume = 0.9
      void audio.play().catch(() => {
        // If a browser still blocks playback, the visible music control remains available.
      })
    }

    setStage('opening')
  }

  return (
    <AnimatePresence>
      {stage !== 'leaving' ? (
        <GateShell stage={stage} onOpen={handleOpen} guestName={guestName} />
      ) : (
        <motion.div
          key="gate"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.85, ease: 'easeInOut' }}
          className="fixed inset-0 z-40"
        >
          <GateShell stage={stage} onOpen={() => {}} guestName={guestName} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function GateShell({
  stage,
  onOpen,
  guestName,
}: {
  stage: Stage
  onOpen: () => void
  guestName: string
}) {
  const opened = stage === 'opening' || stage === 'leaving'

  const shineTransition = {
    duration: 2.35,
    ease: 'easeInOut' as const,
    repeat: Infinity,
    repeatDelay: 4.8,
  }

  return (
    <div className="fixed inset-0 z-40 flex flex-col items-center justify-center overflow-hidden bg-[#e1d2bf] px-4 py-10">
      {/* backdrop texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(200,169,106,0.5) 1px, transparent 0)',
          backgroundSize: '26px 26px',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-burgundy/30 blur-3xl"
        style={{ animation: 'glow-pulse 6s ease-in-out infinite' }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
        style={{ animation: 'glow-pulse 8s ease-in-out infinite reverse' }}
      />
      <div
        aria-hidden="true"
        className="absolute right-10 top-16 hidden h-40 w-40 rounded-full border border-gold/20 sm:block"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-16 left-10 hidden h-24 w-24 rounded-full border border-gold/15 sm:block"
      />

      <PetalField count={18} />

      {/* header */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: opened ? 0 : 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-8 flex flex-col items-center gap-2 text-center sm:mb-10"
      >
        <div className="flex items-center gap-3 text-burgundy/85">
          <span className="h-px w-10 bg-burgundy/30 sm:w-14" />
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.3em] sm:text-xs">
            A Wedding Invitation
          </span>
          <span className="h-px w-10 bg-burgundy/30 sm:w-14" />
        </div>
        <p className="font-serif text-sm italic text-charcoal/70">Unveil the moment</p>
      </motion.div>

      {/* envelope */}
      <div className="relative z-10 w-full max-w-md" style={{ perspective: 1400 }}>
        <div className="relative rounded-[28px] border border-gold/25 p-3 sm:p-4">
          <div className="rounded-[22px] border border-gold/15 p-2">
            <button
              type="button"
              onClick={onOpen}
              disabled={opened}
              aria-label="Touch to unveil the invitation"
              className="group relative block aspect-[4/3] w-full overflow-visible rounded-2xl focus:outline-none"
              style={{ perspective: 1200 }}
            >
              {/* envelope body */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl bg-gradient-to-br from-[#f2e7d8] via-[#e1d2bf] to-[#c8ad8c] shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_38%),radial-gradient(circle_at_bottom,rgba(201,167,91,0.12),transparent_42%)]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/5" />
                <div className="absolute inset-x-5 top-4 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
                <div className="absolute inset-x-5 bottom-4 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
                {/* moving white/champagne shine */}
                <motion.div
                  aria-hidden="true"
                  initial={false}
                  animate={opened ? { opacity: 0 } : { x: ['-140%', '180%'], opacity: [0, 0.9, 0] }}
                  transition={opened ? { duration: 0.2 } : shineTransition}
                  className="pointer-events-none absolute -inset-y-6 left-[-35%] w-[42%] rotate-[18deg] blur-xl"
                  style={{
                    background:
                      'linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.04) 42%, rgba(255,255,255,0.48) 50%, rgba(232,211,155,0.18) 56%, rgba(255,255,255,0.05) 62%, transparent 70%)',
                  }}
                />
                {/* corner ornaments */}
                {[
                  'left-3 top-3',
                  'right-3 top-3',
                  'left-3 bottom-3',
                  'right-3 bottom-3',
                ].map((pos) => (
                  <span
                    key={pos}
                    className={`absolute ${pos} h-4 w-4 rounded-sm border border-gold/50 bg-white/5 sm:h-5 sm:w-5`}
                  />
                ))}
              </div>

              {/* flap (rotates open and hides its own back face so it visually disappears) */}
              <motion.div
                initial={false}
                animate={{ rotateX: opened ? -180 : 0 }}
                transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
                style={{
                  transformOrigin: 'top center',
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
                className="absolute inset-x-0 top-0 z-30 h-[58%]"
              >
                <div
                  className="relative h-full w-full overflow-hidden bg-gradient-to-b from-[#eadcc9] via-[#d9c5aa] to-[#bfa17c] shadow-[0_6px_16px_rgba(0,0,0,0.3)]"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
                >
                  <div className="absolute inset-x-[18%] top-2 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
                  <motion.div
                    aria-hidden="true"
                    initial={false}
                    animate={opened ? { opacity: 0 } : { x: ['-140%', '180%'], opacity: [0, 0.7, 0] }}
                    transition={opened ? { duration: 0.2 } : { ...shineTransition, duration: 2.1, repeatDelay: 5.2 }}
                    className="pointer-events-none absolute -inset-y-6 left-[-30%] w-[36%] rotate-[22deg] blur-lg"
                    style={{
                      background:
                        'linear-gradient(115deg, transparent 28%, rgba(255,255,255,0.02) 40%, rgba(255,255,255,0.22) 50%, rgba(232,211,155,0.14) 56%, rgba(255,255,255,0.04) 61%, transparent 72%)',
                    }}
                  />
                </div>
              </motion.div>

              {/* rising inner card */}
              <motion.div
                initial={false}
                animate={
                  opened
                    ? { y: -64, opacity: 1, scale: 1 }
                    : { y: 16, opacity: 0, scale: 0.94 }
                }
                transition={{ duration: 1, delay: opened ? 0.5 : 0, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-x-3 bottom-3 z-10 rounded-xl border border-gold/40 bg-ivory px-4 py-5 text-center shadow-[0_18px_40px_rgba(0,0,0,0.35)] sm:inset-x-4 sm:px-6 sm:py-7"
              >
                <InvitationCardBody />
              </motion.div>

              {/* seal */}
              <motion.div
                initial={false}
                animate={
                  opened
                    ? { opacity: 0, scale: 0.6, y: -10 }
                    : { opacity: 1, scale: 1, y: 0 }
                }
                transition={{ duration: 0.4 }}
                className="absolute left-1/2 top-[36%] z-30 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-2 border-gold/70 bg-gradient-to-b from-burgundy to-burgundy-deep font-serif text-sm tracking-widest text-cream shadow-[0_6px_16px_rgba(0,0,0,0.4)] sm:h-16 sm:w-16">
                  <motion.span
                    aria-hidden="true"
                    initial={false}
                    animate={opened ? { opacity: 0 } : { x: ['-150%', '170%'], opacity: [0, 0.5, 0] }}
                    transition={opened ? { duration: 0.2 } : { duration: 1.6, ease: 'easeInOut', repeat: Infinity, repeatDelay: 6.6 }}
                    className="pointer-events-none absolute -inset-y-5 left-[-45%] w-[42%] rotate-[20deg] blur-md"
                    style={{
                      background:
                        'linear-gradient(115deg, transparent 32%, rgba(255,255,255,0.05) 44%, rgba(255,255,255,0.28) 52%, rgba(232,211,155,0.12) 58%, transparent 70%)',
                    }}
                  />
                  M&amp;B
                </div>
              </motion.div>

              {/* personalized guest name on the envelope front */}
              <motion.div
                initial={false}
                animate={{ opacity: opened ? 0 : 1, y: opened ? 8 : 0 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-x-6 top-[56%] z-20 flex flex-col items-center text-center sm:top-[55%]"
              >
                <p className="font-sans text-[9px] font-semibold uppercase tracking-[0.28em] text-burgundy/70 sm:text-[10px]">
                  Dear
                </p>
                <p
                  title={guestName}
                  className="mt-1 max-w-[92%] break-words font-serif text-[clamp(1.15rem,5vw,1.65rem)] leading-tight tracking-wide text-burgundy drop-shadow-sm"
                >
                  {guestName}
                </p>
                <div className="mt-2 h-px w-16 bg-gold/55" />
              </motion.div>

            </button>
          </div>
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: opened ? 0 : 1 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 mt-8 font-sans text-sm font-semibold uppercase tracking-[0.34em] text-burgundy/90 drop-shadow-sm sm:mt-10 sm:text-base"
      >
        Touch to unveil
      </motion.p>
    </div>
  )
}

function InvitationCardBody() {
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-burgundy sm:text-[11px]">
        Together with their families
      </p>
      <div className="my-1 h-px w-10 bg-gold/60" />
      <p className="font-serif text-2xl leading-none text-charcoal sm:text-3xl">
        Madhushani
      </p>
      <p className="font-serif text-sm italic text-gold sm:text-base">and</p>
      <p className="font-serif text-2xl leading-none text-charcoal sm:text-3xl">Binok</p>
      <p className="mt-2 max-w-[220px] text-[10px] uppercase tracking-[0.15em] text-charcoal/70 sm:text-[11px]">
        Request the pleasure of your company at their wedding
      </p>
      <div className="my-1 h-px w-10 bg-gold/60" />
      <p className="font-serif text-base tracking-wide text-burgundy sm:text-lg">
        28 · 11 · 2026
      </p>
      <p className="text-[10px] uppercase tracking-[0.15em] text-charcoal/70">
        At 3.30 PM
      </p>
    </div>
  )
}
