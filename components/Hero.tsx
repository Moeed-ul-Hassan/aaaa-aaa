'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Mail, ArrowRight, Sparkles, Zap, Star, Heart, Target } from 'lucide-react'
import { useRef } from 'react'

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 1, 0])

  return (
    <section ref={containerRef} id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Unique 3D Holographic Background */}
      <div className="absolute inset-0">
        {/* Holographic Grid */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scaleY: [1, 1.5, 1],
                opacity: [0.2, 0.8, 0.2],
                rotateX: [0, 45, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
              className="absolute w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent"
              style={{ left: `${i * 5}%` }}
            />
          ))}
        </div>

        {/* Floating 3D Orbs with Light Trails */}
        <motion.div
          animate={{ 
            x: [0, 200, 0],
            y: [0, -100, 0],
            rotate: [0, 360, 720],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-32 left-32 w-40 h-40"
        >
          <div className="w-full h-full bg-gradient-to-r from-blue-400/40 to-purple-400/40 rounded-full blur-xl relative">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-blue-400/30"
            />
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 rounded-full border border-purple-400/30"
            />
          </div>
        </motion.div>

        <motion.div
          animate={{ 
            x: [0, -150, 0],
            y: [0, 120, 0],
            rotate: [360, 0, -360],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-32 right-32 w-48 h-48"
        >
          <div className="w-full h-full bg-gradient-to-r from-pink-400/40 to-orange-400/40 rounded-full blur-xl relative">
            <motion.div
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-pink-400/30"
            />
            <motion.div
              animate={{ rotate: [-360, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute inset-3 rounded-full border border-orange-400/30"
            />
          </div>
        </motion.div>

        {/* Quantum Particle System */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, Math.random() * 400 - 200],
              y: [0, Math.random() * 400 - 200],
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(0.5px)"
            }}
          />
        ))}

        {/* Holographic Light Beams */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scaleY: [0, 1, 0],
              opacity: [0, 0.6, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            className="absolute w-1 h-96 bg-gradient-to-b from-transparent via-blue-400/50 to-transparent"
            style={{ 
              left: `${i * 12.5}%`,
              top: "50%",
              transform: "translateY(-50%)"
            }}
          />
        ))}

        {/* Floating Icons with 3D Effects */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotateY: [0, 180, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20"
        >
          <Star className="w-8 h-8 text-blue-600" />
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotateX: [0, 180, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20"
        >
          <Heart className="w-8 h-8 text-pink-600" />
        </motion.div>

        <motion.div
          animate={{ 
            x: [0, 10, 0],
            y: [0, -10, 0],
            rotateZ: [0, 90, 180, 270, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/3 w-16 h-16 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20"
        >
          <Target className="w-8 h-8 text-green-600" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          style={{ y, opacity }}
          className="space-y-8"
        >
          {/* Enhanced Status Badge with Holographic Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-100/80 to-emerald-100/80 backdrop-blur-sm text-green-800 px-8 py-4 rounded-full text-sm font-bold shadow-2xl border border-green-200/50"
          >
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-4 h-4 bg-green-500 rounded-full relative"
            >
              <motion.div
                animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-green-400 rounded-full"
              />
            </motion.div>
            <span className="font-bold">OPEN TO WORK</span>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={20} className="text-green-600" />
            </motion.div>
          </motion.div>

          {/* Enhanced Main Heading with 3D Text Effect */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
          >
            <motion.span 
              className="block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I build real-world solutions
            </motion.span>
            <motion.span 
              className="block relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <span className="bg-gradient-to-r from-primary-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                through hackathon innovation
              </span>
              {/* 3D Text Shadow Effect */}
              <motion.div
                animate={{ 
                  x: [0, 2, 0],
                  y: [0, 2, 0],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-primary-600 via-blue-600 to-purple-600 bg-clip-text text-transparent blur-sm -z-10"
                style={{ transform: "translate(2px, 2px)" }}
              >
                through hackathon innovation
              </motion.div>
            </motion.span>
          </motion.h1>

          {/* Enhanced Subtitle with Floating Elements */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed relative"
          >
            Hello, I'm <span className="font-semibold text-primary-600 relative inline-block">
              Moeed ul Hassan
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-blue-400 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
              />
              {/* Floating particles around name */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              />
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [360, 180, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 -left-2 w-2 h-2 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full"
              />
            </span>
            <br />
            <span className="text-lg md:text-xl">a Python Backend Developer & Product Builder</span>
          </motion.p>

          {/* Enhanced Contact Info with Holographic Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex items-center justify-center space-x-3 text-lg text-gray-600 bg-white/30 backdrop-blur-md px-8 py-4 rounded-full shadow-xl border border-white/20"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Mail size={20} className="text-primary-600" />
            </motion.div>
            <span className="font-medium">moeedulhassan.pk@gmail.com</span>
          </motion.div>

          {/* Enhanced CTA Buttons with 3D Effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              onClick={() => {
                // Open email with pre-filled subject and body
                window.open('mailto:moeedulhassan.pk@gmail.com?subject=Portfolio Inquiry - Let\'s Connect!&body=Hi Moeed,%0D%0A%0D%0AI came across your portfolio and would like to discuss potential opportunities.%0D%0A%0D%0ABest regards,', '_blank')
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(14, 165, 233, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-gradient-to-r from-primary-600 to-blue-600 text-white px-12 py-5 rounded-full text-lg font-bold hover:from-primary-700 hover:to-blue-700 transition-all duration-300 flex items-center space-x-3 shadow-2xl overflow-hidden group"
            >
              {/* Animated background */}
              <motion.div
                animate={{ 
                  x: [-100, 100],
                  opacity: [0, 0.3, 0]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />
              <span className="relative z-10">Let's Connect</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative z-10"
              >
                <ArrowRight size={20} />
              </motion.div>
            </motion.button>
            
            <motion.button
              onClick={() => {
                // Scroll to projects section
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(14, 165, 233, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="relative border-2 border-primary-600 text-primary-600 px-12 py-5 rounded-full text-lg font-bold hover:bg-primary-600 hover:text-white transition-all duration-300 shadow-2xl overflow-hidden group"
            >
              {/* Animated border */}
              <motion.div
                animate={{ 
                  rotate: [0, 360]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-primary-400 rounded-full opacity-50"
              />
              <span className="relative z-10">View My Work</span>
            </motion.button>
          </motion.div>

          {/* Additional Creative Elements with Holographic Effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-16 space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-800">FROM CONCEPT TO CREATION</h3>
            <motion.h4 
              className="text-4xl font-bold relative"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              LET'S MAKE IT HAPPEN!
            </motion.h4>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:from-primary-700 hover:to-purple-700 transition-all duration-300 shadow-2xl"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Enhanced Availability Info with 3D Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="mt-12 bg-gradient-to-r from-white/50 to-blue-50/50 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/20"
          >
            <p className="text-lg text-gray-700 mb-4 font-medium">
              I'm available for hackathons & collaborative projects.
            </p>
            <p className="text-lg text-gray-600">
              I thrive on building real-world solutions through hackathon innovation.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 