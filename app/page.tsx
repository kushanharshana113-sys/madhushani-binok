'use client'

import { useEffect, useState } from 'react'
import { EnvelopeGate } from '@/components/wedding/envelope-gate'
import { InvitationExperience } from '@/components/wedding/invitation-experience'
import { MusicControl } from '@/components/wedding/music-control'

export default function Page() {
  const [unveiled, setUnveiled] = useState(false)

  useEffect(() => {
    document.body.style.overflow = unveiled ? 'auto' : 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [unveiled])

  return (
    <div className="relative min-h-screen bg-ivory">
      {!unveiled && <EnvelopeGate onUnveiled={() => setUnveiled(true)} />}
      {unveiled && <InvitationExperience />}
      <MusicControl />
    </div>
  )
}
