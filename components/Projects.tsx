'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ExternalLink, Github, Star, Zap, Globe } from 'lucide-react'
import { useRef } from 'react'

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -35])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const projects = [
    {
      title: "Pulse HMS",
      description: "Main healthcare management system application with comprehensive patient data management, appointment scheduling, and medical records tracking. Built with modern web technologies for healthcare facilities.",
      image: "/api/placeholder/400/250",
      tags: ["Healthcare", "Patient Management", "Appointments", "Medical Records", "Web App"],
      link: "#",
      github: "#",
      featured: true
    },
    {
      title: "PulseLanding",
      description: "Marketing landing page for Pulse HMS with modern design, lead generation forms, and conversion optimization. Showcases healthcare solutions and drives user engagement.",
      image: "/api/placeholder/400/250",
      tags: ["Marketing", "Landing Page", "Lead Generation", "Conversion", "Healthcare"],
      link: "#",
      github: "#",
      featured: true
    },
    {
      title: "ZamindarWebsite",
      description: "Professional website for Zamindar business with modern UI/UX, responsive design, and business showcase. Features property listings, company information, and contact forms.",
      image: "/api/placeholder/400/250",
      tags: ["Business Website", "Property", "Responsive Design", "UI/UX", "Landing Page"],
      link: "#",
      github: "#",
      featured: false
    },
    {
      title: "GithubMirror",
      description: "GitHub mirroring tool for repository synchronization and backup. Enables seamless mirroring between different Git platforms with automated workflows.",
      image: "/api/placeholder/400/250",
      tags: ["Git", "GitHub", "Mirroring", "Automation", "Backup"],
      link: "#",
      github: "#",
      featured: false
    },
    {
      title: "FitnessFlexCore",
      description: "Core fitness application with workout tracking, exercise library, and progress monitoring. Built for fitness enthusiasts and gym management.",
      image: "/api/placeholder/400/250",
      tags: ["Fitness", "Workout Tracking", "Exercise Library", "Progress Monitoring", "Health"],
      link: "#",
      github: "#",
      featured: false
    },
    {
      title: "Portfolio-The Legend",
      description: "This current portfolio website showcasing unique animations, modern design, and professional presentation. Built with Next.js, Framer Motion, and cutting-edge web technologies.",
      image: "/api/placeholder/400/250",
      tags: ["Portfolio", "Next.js", "Framer Motion", "Animations", "Modern Design"],
      link: "#",
      github: "#",
      featured: false
    },
    {
      title: "Dot Skills",
      description: "Skills visualization tool with interactive dot-based interface. Helps users showcase their technical skills in an engaging and visually appealing way.",
      image: "/api/placeholder/400/250",
      tags: ["Skills Visualization", "Interactive", "UI/UX", "Data Visualization", "Web App"],
      link: "#",
      github: "#",
      featured: false
    },
    {
      title: "Lines Counter Package",
      description: "NPM package for counting lines of code in various programming languages. Useful for project analysis, code metrics, and development insights.",
      image: "/api/placeholder/400/250",
      tags: ["NPM Package", "Code Analysis", "Metrics", "Developer Tools", "Node.js"],
      link: "#",
      github: "#",
      featured: false
    },
    {
      title: "Volume Booster",
      description: "Audio enhancement tool for boosting volume levels and improving sound quality. Features advanced audio processing and user-friendly controls.",
      image: "/api/placeholder/400/250",
      tags: ["Audio", "Volume Enhancement", "Sound Processing", "User Interface", "Media"],
      link: "#",
      github: "#",
      featured: false
    },
    {
      title: "Data Getters",
      description: "Data extraction and processing tool for collecting information from various sources. Streamlines data gathering workflows and automation.",
      image: "/api/placeholder/400/250",
      tags: ["Data Extraction", "Automation", "Web Scraping", "Data Processing", "Tools"],
      link: "#",
      github: "#",
      featured: false
    }
  ]

  return (
    <section ref={containerRef} id="projects" className="py-20 bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950 relative overflow-hidden">
      {/* Galaxy/Space Background Effect */}
      <div className="absolute inset-0">
        {/* Stars */}
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(0.5px)",
              boxShadow: "0 0 4px rgba(255, 255, 255, 0.8)"
            }}
          />
        ))}

        {/* Nebula Clouds */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut"
            }}
            className="absolute rounded-full blur-3xl"
            style={{
              width: `${200 + Math.random() * 300}px`,
              height: `${200 + Math.random() * 300}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, 
                rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.3) 0%, 
                rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.1) 50%, 
                transparent 100%)`
            }}
          />
        ))}

        {/* Shooting Stars */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [-100, window.innerWidth + 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear"
            }}
            className="absolute w-2 h-2 bg-gradient-to-r from-white to-blue-400 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              filter: "blur(1px)",
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)"
            }}
          />
        ))}

        {/* Cosmic Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 30 - 15, 0],
              rotate: [0, 360],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
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

        {/* Floating Space Objects */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-400/30"
        >
          <Globe className="w-10 h-10 text-blue-400" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [360, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-400/30"
        >
          <Zap className="w-12 h-12 text-purple-400" />
        </motion.div>

        {/* Orbital Rings */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-96 h-96 border border-blue-400/20 rounded-full"
          style={{ transform: "translate(-50%, -50%)" }}
        />
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-80 h-80 border border-purple-400/20 rounded-full"
          style={{ transform: "translate(-50%, -50%)" }}
        />
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
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            HACKATHON PROJECTS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300"
          >
            Real-world solutions built in 48 hours
          </motion.p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h3>
          <div className="grid lg:grid-cols-2 gap-12">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)"
                }}
                className="relative group"
              >
                {/* 3D Card with Space Theme */}
                <div className="relative bg-gradient-to-br from-slate-900/80 to-purple-900/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-blue-400/20">
                  {/* Project Image with Space Effect */}
                  <div className="relative h-64 bg-gradient-to-br from-blue-900/50 via-purple-900/50 to-indigo-900/50 overflow-hidden">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0]
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 bg-gradient-to-br from-blue-800/30 to-purple-800/30"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.span
                        className="text-6xl font-bold text-blue-400 opacity-30"
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 10, 0]
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        {project.title.charAt(0)}
                      </motion.span>
                    </div>
                    {project.featured && (
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-md"
                      >
                        <Star size={12} className="fill-current" />
                        <span>Featured</span>
                      </motion.div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3 text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-5 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Project Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: tagIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="px-3 py-1 bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm text-blue-200 text-xs rounded-full font-medium border border-blue-400/30"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex space-x-6">
                      <motion.a
                        href={project.link}
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-semibold transition-all duration-200"
                      >
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                      </motion.a>
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 font-semibold transition-all duration-200"
                      >
                        <Github size={18} />
                        <span>Code</span>
                      </motion.a>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60"
                  />
                  <motion.div
                    animate={{ 
                      y: [0, 10, 0],
                      rotate: [0, -5, 0]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-slate-900/80 to-purple-900/80 backdrop-blur-xl rounded-xl overflow-hidden shadow-xl border border-blue-400/20 hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-900/50 to-purple-900/50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-blue-400 opacity-20">
                    {project.title.charAt(0)}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm text-blue-200 text-xs rounded-full border border-blue-400/30"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-1 bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm text-blue-200 text-xs rounded-full border border-blue-400/30">
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-medium"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </motion.a>
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 font-medium"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg"
          >
            See more projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 