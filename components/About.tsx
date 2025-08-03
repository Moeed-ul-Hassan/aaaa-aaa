'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Star, Globe, Clock, Zap, Hexagon, Circle } from 'lucide-react'
import { useRef } from 'react'

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -30])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const features = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Collaboration",
      description: "I prioritize client collaboration, fostering open communication"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Remote Work",
      description: "I'm very flexible with time zone communications"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Availability",
      description: "Available for full-time roles & freelance projects"
    }
  ]

  const timeZones = [
    { flag: "🇬🇧", country: "UK" },
    { flag: "🇮🇳", country: "India" },
    { flag: "🇺🇸", country: "USA" }
  ]

  return (
    <section ref={containerRef} id="about" className="py-20 relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Unique DNA Helix Background Effect */}
      <div className="absolute inset-0">
        {/* DNA Helix Structure */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.sin(i * 0.5) * 30, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
            className="absolute w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"
            style={{
              left: `${i * 5}%`,
              top: `${i * 5}%`,
              filter: "blur(1px)"
            }}
          />
        ))}

        {/* Floating Bubbles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
            className="absolute rounded-full border-2 border-emerald-300/30"
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}

        {/* Geometric Patterns */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-10 w-32 h-32 opacity-20"
        >
          <Hexagon className="w-full h-full text-emerald-400" />
        </motion.div>

        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 left-10 w-40 h-40 opacity-20"
        >
          <Circle className="w-full h-full text-teal-400" />
        </motion.div>

        {/* Floating Icons */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/4 w-12 h-12 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-xl flex items-center justify-center backdrop-blur-sm"
        >
          <Zap className="w-6 h-6 text-emerald-600" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-xl flex items-center justify-center backdrop-blur-sm"
        >
          <Star className="w-6 h-6 text-teal-600" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          style={{ y, opacity }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent"
          >
            KNOW ABOUT ME
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Full-Stack Developer and a little bit of everything
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm Moeed ul Hassan, a Python backend developer and product builder who leads a small, agile team dedicated to building real-world solutions through hackathons. Based in Gujrat, Pakistan, I focus on solving practical problems fast, with clean code, strong backend logic, and creative use of AI.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              My team operates like a micro startup — brainstorming, designing, and deploying MVPs within tight timelines. I handle backend architecture, integrations, and AI workflows, while collaborating with my small team on UI, demos, and pitch-ready presentations.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
              We've built and shipped working prototypes in less than 48 hours!
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {['LinkedIn', 'GitHub', 'Twitter'].map((platform) => (
                <motion.a
                  key={platform}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  {platform}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="flex items-start space-x-4 bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-lg"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center text-emerald-600">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}

            {/* Time Zones */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-lg"
            >
              <h4 className="text-lg font-semibold mb-4">Time Zones I Work With</h4>
              <div className="flex flex-wrap gap-3">
                {timeZones.map((tz) => (
                  <motion.div
                    key={tz.country}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-teal-100 px-4 py-2 rounded-full border border-emerald-200"
                  >
                    <span className="text-lg">{tz.flag}</span>
                    <span className="font-medium">{tz.country}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Work Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Work Experience
          </h3>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-emerald-600">MH</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Moeed ul Hassan</h4>
                <p className="text-gray-600">Python Backend Developer & Product Builder</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Currently leading hackathon teams to build real-world solutions. Specialized in Python, FastAPI, AI integrations, and rapid prototyping. Based in Gujrat, Pakistan.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 