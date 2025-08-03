'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -40])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const skillCategories = [
    {
      title: "Backend & AI",
      skills: [
        "Python", "FastAPI", "AI Integrations", "Gmail API", "NLP", "Machine Learning"
      ]
    },
    {
      title: "Database & Storage",
      skills: [
        "Supabase", "PostgreSQL", "Local-first Storage", "Offline Mode", "Data Architecture"
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Git", "GitHub", "Docker", "Linux", "Rapid Prototyping", "Demo Storytelling"
      ]
    }
  ]

  const skillFeatures = [
    { name: "Accessible", icon: "⭐" },
    { name: "Responsive", icon: "⭐" },
    { name: "Dynamic", icon: "⭐" },
    { name: "Scalable", icon: "⭐" },
    { name: "Search Optimized", icon: "⭐" },
    { name: "Interactive", icon: "⭐" },
    { name: "Secure", icon: "⭐" },
    { name: "Reliable", icon: "⭐" },
    { name: "Engaging", icon: "⭐" }
  ]

  const technologies = [
    "Python", "Python", "FastAPI", "FastAPI", "AI", "AI", "NLP", "NLP", "Gmail API", "Gmail API",
    "Supabase", "Supabase", "PostgreSQL", "PostgreSQL", "Docker", "Docker", "Git", "Git", "GitHub", "GitHub"
  ]

  return (
    <section ref={containerRef} className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Circuit Board Background Effect */}
      <div className="absolute inset-0">
        {/* Circuit Lines */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.8, 0],
              x: [0, Math.random() * 100 - 50]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
            className="absolute h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"
            style={{
              top: `${i * 4}%`,
              left: `${Math.random() * 100}%`,
              width: `${100 + Math.random() * 200}px`,
              filter: "blur(0.5px)"
            }}
          />
        ))}

        {/* Vertical Circuit Lines */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scaleY: [0, 1, 0],
              opacity: [0, 0.6, 0],
              y: [0, Math.random() * 50 - 25]
            }}
            transition={{
              duration: 5 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut"
            }}
            className="absolute w-px bg-gradient-to-b from-transparent via-indigo-400 to-transparent"
            style={{
              left: `${i * 5}%`,
              top: `${Math.random() * 100}%`,
              height: `${100 + Math.random() * 200}px`,
              filter: "blur(0.5px)"
            }}
          />
        ))}

        {/* Tech Nodes */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
            className="absolute w-3 h-3 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(1px)",
              boxShadow: "0 0 10px rgba(147, 51, 234, 0.5)"
            }}
          />
        ))}

        {/* Binary Code Rain */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-100, window.innerHeight + 100],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            className="absolute text-xs text-purple-400/60 font-mono"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: "10px"
            }}
          >
            {Math.random() > 0.5 ? "1" : "0"}
          </motion.div>
        ))}

        {/* Data Flow Streams */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 300],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear"
            }}
            className="absolute h-1 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full"
            style={{
              top: `${20 + i * 10}%`,
              left: "-100px",
              width: "100px",
              filter: "blur(1px)"
            }}
          />
        ))}

        {/* Floating Tech Icons */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-purple-400/30"
        >
          <span className="text-2xl">⚡</span>
        </motion.div>

        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-indigo-400/30"
        >
          <span className="text-2xl">🔧</span>
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
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent"
          >
            My Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300"
          >
            The Secret Sauce
          </motion.p>
        </motion.div>

        {/* Passionate about cutting-edge technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Passionate about cutting-edge technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {technologies.map((tech, index) => (
              <motion.span
                key={`${tech}-${index}`}
                initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  boxShadow: "0 10px 25px rgba(147, 51, 234, 0.3)"
                }}
                className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium text-purple-200 hover:text-white transition-all duration-300 border border-purple-400/30 shadow-lg"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Skill Categories with Enhanced Design */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(147, 51, 234, 0.2)"
              }}
              className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur-md rounded-2xl p-8 border border-purple-400/20 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-purple-300">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 2,
                      boxShadow: "0 5px 15px rgba(147, 51, 234, 0.3)"
                    }}
                    className="bg-gradient-to-r from-purple-800/50 to-indigo-800/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-purple-200 border border-purple-400/30 hover:border-purple-300 transition-all duration-300 shadow-md"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Features Grid with Enhanced Animations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            What I Deliver
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-9 gap-6">
            {skillFeatures.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.1,
                  rotate: 10,
                  boxShadow: "0 15px 35px rgba(147, 51, 234, 0.4)"
                }}
                className="flex flex-col items-center space-y-3 p-6 bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur-md rounded-2xl hover:from-purple-800/50 hover:to-indigo-800/50 transition-all duration-300 shadow-xl border border-purple-400/20"
              >
                <motion.span
                  className="text-3xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  {feature.icon}
                </motion.span>
                <span className="text-xs font-bold text-purple-200 text-center">
                  {feature.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-3xl p-16 text-white relative overflow-hidden"
        >
          {/* Background Animated Elements */}
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-lg"
          />
          <motion.div
            animate={{
              rotate: -360,
              scale: [1.2, 1, 1.2],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-lg"
          />

          <h3 className="text-4xl font-bold mb-6 relative z-10">
            Real-world solutions that make a difference
          </h3>
          <p className="text-xl mb-10 opacity-90 relative z-10">
            Let's work together on your next hackathon project
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Get started
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-purple-600 transition-all duration-300 shadow-lg"
            >
              Read More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 