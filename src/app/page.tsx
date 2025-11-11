'use client'

import { motion } from 'framer-motion'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Skills } from '@/components/Skills'
import { Projects } from '@/components/Projects'
import { Experience } from '@/components/Experience'
import { Contact } from '@/components/Contact'
import { Navigation } from '@/components/Navigation'
import { MouseAnimation } from '@/components/MouseAnimation'

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <Navigation />
      <MouseAnimation />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </motion.main>
    </div>
  )
}
