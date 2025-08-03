'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

// Quantum Particle System - Unique Implementation
const QuantumParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, Math.random() * 800 - 400],
            y: [0, Math.random() * 600 - 300],
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            rotate: [0, 360, 720],
            borderRadius: ["50%", "0%", "50%"]
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
          className="absolute w-2 h-2"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `linear-gradient(45deg, 
              hsl(${Math.random() * 360}, 70%, 60%), 
              hsl(${Math.random() * 360}, 70%, 60%)
            )`,
            filter: "blur(1px)",
            boxShadow: `0 0 10px hsl(${Math.random() * 360}, 70%, 60%)`
          }}
        />
      ))}
    </div>
  )
}

// Holographic Grid System - Unique 3D Effect
const HolographicGrid = () => {
  return (
    <div className="absolute inset-0 opacity-30">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            scaleY: [1, 2, 1],
            opacity: [0.2, 0.8, 0.2],
            rotateX: [0, 45, 0],
            rotateY: [0, 90, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut"
          }}
          className="absolute w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent"
          style={{ left: `${i * 6.66}%` }}
        />
      ))}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            scaleX: [1, 2, 1],
            opacity: [0.2, 0.8, 0.2],
            rotateY: [0, 45, 0],
            rotateZ: [0, 90, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
          className="absolute h-px w-full bg-gradient-to-r from-transparent via-purple-400 to-transparent"
          style={{ top: `${i * 10}%` }}
        />
      ))}
    </div>
  )
}

// Floating 3D Orbs with Light Trails
const FloatingOrbs = () => {
  return (
    <div className="absolute inset-0">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, Math.random() * 300 - 150],
            y: [0, Math.random() * 200 - 100],
            rotate: [0, 360, 720],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute"
          style={{
            left: `${20 + i * 15}%`,
            top: `${20 + i * 10}%`
          }}
        >
          <div className={`w-${20 + i * 5} h-${20 + i * 5} relative`}>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 15 + i * 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-blue-400/30"
            />
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 20 + i * 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 rounded-full border-2 border-purple-400/30"
            />
            <motion.div
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 25 + i * 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 rounded-full border-2 border-pink-400/30"
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

// Light Beam System - Unique Implementation
const LightBeams = () => {
  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            scaleY: [0, 1, 0],
            opacity: [0, 0.7, 0],
            rotate: [0, 180, 360],
            x: [0, Math.random() * 100 - 50]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
          className="absolute w-1 h-96 bg-gradient-to-b from-transparent via-blue-400/60 to-transparent"
          style={{
            left: `${i * 8.33}%`,
            top: "50%",
            transform: "translateY(-50%)",
            filter: "blur(0.5px)"
          }}
        />
      ))}
    </div>
  )
}

// Main Animation Container
const UniqueAnimations = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 1, 0])

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Unique Animation Layers */}
      <QuantumParticles />
      <HolographicGrid />
      <FloatingOrbs />
      <LightBeams />
      
      {/* Content */}
      <motion.div style={{ y, opacity }} className="relative z-10">
        {children}
      </motion.div>
    </div>
  )
}

export default UniqueAnimations 