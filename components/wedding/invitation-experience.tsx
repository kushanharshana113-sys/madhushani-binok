'use client'

import { motion } from 'framer-motion'
import { HeroSection } from './hero-section'
import { VerseSection } from './verse-section'
import { DetailsSection } from './details-section'
import { VenueSection } from './venue-section'
import { GallerySection } from './gallery-section'
import { RsvpSection } from './rsvp-section'
import { CountdownSection } from './countdown-section'
import { ClosingSection } from './closing-section'

export function InvitationExperience() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.15 }}
    >
      <HeroSection />
      <VerseSection />
      <DetailsSection />
      <VenueSection />
      <GallerySection />
      <RsvpSection />
      <CountdownSection />
      <ClosingSection />
    </motion.main>
  )
}
