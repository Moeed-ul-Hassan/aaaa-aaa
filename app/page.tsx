'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import UniqueAnimations from '@/components/UniqueAnimations'
import Preloader from '@/components/Preloader'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Hide preloader after 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Preloader />
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section with Unique Animations */}
      <UniqueAnimations>
        <Hero />
      </UniqueAnimations>
      
      {/* About Section with Enhanced Animations */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <About />
      </motion.div>
      
      {/* Skills Section with Unique Effects */}
      <UniqueAnimations>
        <Skills />
      </UniqueAnimations>
      
      {/* Projects Section with Enhanced Design */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Projects />
      </motion.div>
      
      {/* Testimonials Section with Unique Animations */}
      <UniqueAnimations>
        <Testimonials />
      </UniqueAnimations>
      
      {/* Contact Section with Enhanced Effects */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Contact />
      </motion.div>
      
      <Footer />
    </main>
  )
} 