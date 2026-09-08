'use client'

import { useMemo } from 'react'

type PetalVariant = 'burgundy' | 'cream' | 'gold'

type PetalSpec = {
  id: number
  left: number
  size: number
  duration: number
  delay: number
  drift: number
  rotate: number
  variant: PetalVariant
}

const VARIANT_COLORS: Record<PetalVariant, string> = {
  burgundy: '#7a2331',
  cream: '#f3e9d7',
  gold: '#c8a96a',
}

function makePetals(count: number, seedOffset: number): PetalSpec[] {
  const variants: PetalVariant[] = ['burgundy', 'cream', 'gold']
  return Array.from({ length: count }, (_, i) => {
    const seed = i + seedOffset
    const pseudo = (n: number) => {
      const x = Math.sin(n * 12.9898) * 43758.5453
      return x - Math.floor(x)
    }
    return {
      id: seed,
      left: pseudo(seed * 1.1) * 100,
      size: 8 + pseudo(seed * 2.3) * 10,
      duration: 9 + pseudo(seed * 3.7) * 10,
      delay: pseudo(seed * 4.1) * 12,
      drift: (pseudo(seed * 5.9) - 0.5) * 160,
      rotate: pseudo(seed * 6.3) * 360,
      variant: variants[Math.floor(pseudo(seed * 7.7) * variants.length)],
    }
  })
}

/**
 * Decorative falling rose petal / botanical field. Purely presentational,
 * pointer-events disabled, hidden from assistive tech.
 */
export function PetalField({
  count = 22,
  seedOffset = 0,
  className = '',
}: {
  count?: number
  seedOffset?: number
  className?: string
}) {
  const petals = useMemo(() => makePetals(count, seedOffset), [count, seedOffset])

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {petals.map((p) => (
        <span
          key={p.id}
          className="absolute top-0 block will-change-transform"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 1.3,
            ['--drift' as string]: `${p.drift}px`,
            animation: `petal-fall ${p.duration}s linear ${p.delay}s infinite`,
            transform: `rotate(${p.rotate}deg)`,
          }}
        >
          <svg viewBox="0 0 20 26" className="h-full w-full drop-shadow-sm">
            <path
              d="M10 0C15 3 20 9 18 15C16 21 12 25 10 26C8 25 4 21 2 15C0 9 5 3 10 0Z"
              fill={VARIANT_COLORS[p.variant]}
              opacity={0.85}
            />
          </svg>
        </span>
      ))}
    </div>
  )
}
