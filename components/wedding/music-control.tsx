'use client'

import { useRef, useState } from 'react'
import { Music, Pause } from 'lucide-react'

/**
 * The single, global music control for the invitation. Starts paused
 * (browsers block autoplay) and toggles playback of /music.mp3 on tap.
 */
export function MusicControl() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio
        .play()
        .then(() => {
          setPlaying(true)
          setHasStarted(true)
        })
        .catch(() => {
          // Autoplay/media restrictions or missing file — fail silently.
          setHasStarted(true)
        })
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
      <audio
        id="wedding-audio"
        ref={audioRef}
        src="/music.mp3"
        loop
        preload="auto"
        onPlay={() => {
          setPlaying(true)
          setHasStarted(true)
        }}
        onPause={() => setPlaying(false)}
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? 'Pause wedding music' : 'Play wedding music'}
        aria-pressed={playing}
        className="relative flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 bg-gradient-to-b from-gold to-[#a9843f] text-charcoal shadow-[0_6px_20px_rgba(0,0,0,0.35)] transition-transform active:scale-95"
      >
        {playing && (
          <span className="absolute inset-0 animate-ping rounded-full bg-gold/40" />
        )}
        {playing ? (
          <Pause className="relative h-5 w-5" fill="currentColor" />
        ) : (
          <Music className="relative h-5 w-5" />
        )}
      </button>
    </div>
  )
}
