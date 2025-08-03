'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Zap, Coffee, Code, Rocket, Brain, Sparkles } from 'lucide-react'

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [currentQuote, setCurrentQuote] = useState(0)

  const quotes = [
    {
      text: "If it lags, change your device 😅",
      icon: <Zap className="w-6 h-6" />
    },
    {
      text: "Loading pixels... one by one 🎨",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      text: "Teaching AI to write better code 🤖",
      icon: <Brain className="w-6 h-6" />
    },
    {
      text: "Converting coffee to code ☕",
      icon: <Coffee className="w-6 h-6" />
    },
    {
      text: "Deploying to production... fingers crossed 🚀",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      text: "Debugging life... still in progress 🐛",
      icon: <Code className="w-6 h-6" />
    }
  ]

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    // Change quote every 500ms
    const quoteTimer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 500)

    return () => {
      clearTimeout(timer)
      clearInterval(quoteTimer)
    }
  }, [quotes.length])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 flex items-center justify-center"
        >
          {/* Background Animated Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating Particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  x: [0, Math.random() * 200 - 100],
                  y: [0, Math.random() * 200 - 100],
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
                className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  filter: "blur(1px)"
                }}
              />
            ))}

            {/* Rotating Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 w-96 h-96 border border-blue-400/20 rounded-full"
              style={{ transform: "translate(-50%, -50%)" }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 w-80 h-80 border border-purple-400/20 rounded-full"
              style={{ transform: "translate(-50%, -50%)" }}
            />
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center">
            {/* Logo/Title */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "backOut" }}
              className="mb-8"
            >
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Code className="w-12 h-12 text-white" />
                </motion.div>
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Moeed ul Hassan
              </h1>
              <p className="text-gray-300 mt-2">Python Backend Developer</p>
            </motion.div>

            {/* Loading Quote */}
            <motion.div
              key={currentQuote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mb-8"
            >
              <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/20 shadow-lg">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="text-blue-400"
                >
                  {quotes[currentQuote].icon}
                </motion.div>
                <p className="text-white text-lg font-medium">
                  {quotes[currentQuote].text}
                </p>
              </div>
            </motion.div>

            {/* Loading Bar */}
            <div className="w-80 h-2 bg-gray-700 rounded-full overflow-hidden mx-auto mb-8">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 3, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
              />
            </div>

            {/* Loading Dots */}
            <div className="flex justify-center space-x-2">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                  className="w-3 h-3 bg-blue-400 rounded-full"
                />
              ))}
            </div>

            {/* Funny Loading Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-gray-400 text-sm mt-6"
            >
              Please wait while we convince the server to cooperate...
            </motion.p>
          </div>

          {/* Corner Elements */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 left-10 w-16 h-16 border border-blue-400/30 rounded-full"
          />
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 right-10 w-20 h-20 border border-purple-400/30 rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Preloader 