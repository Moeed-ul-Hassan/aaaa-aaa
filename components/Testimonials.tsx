'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Star, Sparkles, Zap, Heart } from 'lucide-react'
import { useRef } from 'react'

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const testimonials = [
    {
      name: "Lena Torres",
      role: "Product Lead • Creatify",
      content: "Moeed has an exceptional ability to bring our design concepts to life. His attention to detail and dedication to creating seamless user experiences have greatly enhanced our projects. His skills in frontend development are truly impressive, and he's always ready to tackle any challenge that comes his way.",
      avatar: "LT",
      rating: 5,
      color: "from-pink-400 to-purple-500"
    },
    {
      name: "Emma Thompson",
      role: "Senior Designer • PixelCraft",
      content: "Working with Moeed has been a fantastic experience. He's not only highly skilled in frontend technologies but also brings a refreshing creativity to every project. His ability to solve complex problems quickly and effectively makes him a key asset to our team. Plus, he's a great collaborator who makes the work environment better for everyone.",
      avatar: "ET",
      rating: 5,
      color: "from-blue-400 to-cyan-500"
    },
    {
      name: "Ethan Parker",
      role: "Manager • TechFusion",
      content: "Moeed delivered exceptional work on our project. His meticulous approach and strong communication skills greatly enhanced the quality of our web applications. He's a dependable developer who collaborates seamlessly with the team.",
      avatar: "EP",
      rating: 5,
      color: "from-green-400 to-emerald-500"
    },
    {
      name: "Ryan Mitchell",
      role: "CTO • Innovate Solutions",
      content: "Moeed is a standout frontend developer. His ability to deliver high-quality code and engaging user interfaces consistently makes him a valuable team member. He's proactive, reliable, and always willing to go the extra mile to ensure the success of our projects. It's been a pleasure working with him, and I look forward to future collaborations.",
      avatar: "RM",
      rating: 5,
      color: "from-orange-400 to-red-500"
    },
    {
      name: "Emily Thompson",
      role: "Creative Director • H. Studios",
      content: "Moeed is a fantastic frontend developer! He took our requirements and turned them into something amazing. His attention to detail, creativity, and clear communication made the whole process smooth. We're extremely happy with the results and would highly recommend him!",
      avatar: "ET",
      rating: 5,
      color: "from-purple-400 to-pink-500"
    }
  ]

  return (
    <section ref={containerRef} className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* 3D Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating 3D Lights */}
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-xl"
          style={{
            boxShadow: "0 0 50px rgba(59, 130, 246, 0.5), inset 0 0 50px rgba(147, 51, 234, 0.3)"
          }}
        />
        
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [360, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-pink-400/30 to-orange-400/30 rounded-full blur-xl"
          style={{
            boxShadow: "0 0 60px rgba(236, 72, 153, 0.5), inset 0 0 60px rgba(251, 146, 60, 0.3)"
          }}
        />

        {/* Particle System */}
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

        {/* 3D Grid Effect */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scaleY: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
              className="absolute w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent"
              style={{ left: `${i * 10}%` }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          style={{ y, opacity }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-3 mb-6"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
            >
              <Sparkles className="w-6 h-6 text-white" />
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              TESTIMONIALS
            </h2>
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center"
            >
              <Heart className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600"
          >
            Word on the street about me
          </motion.p>
        </motion.div>

        {/* Enhanced Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
              }}
              className="relative group"
            >
              {/* 3D Card with Glass Effect */}
              <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 overflow-hidden">
                {/* Animated Background Gradient */}
                <motion.div
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))",
                      "linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))",
                      "linear-gradient(45deg, rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1))"
                    ]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-3xl"
                />

                {/* Glowing Border Effect */}
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(59, 130, 246, 0.3)",
                      "0 0 40px rgba(147, 51, 234, 0.5)",
                      "0 0 20px rgba(59, 130, 246, 0.3)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-3xl border border-transparent"
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Rating Stars with Animation */}
                  <div className="flex space-x-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className="relative"
                      >
                        <Star size={20} className="text-yellow-400 fill-current" />
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                          className="absolute inset-0"
                        >
                          <Sparkles size={16} className="text-yellow-300" />
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-gray-700 mb-8 leading-relaxed text-lg"
                  >
                    "{testimonial.content}"
                  </motion.p>

                  {/* Author Info with 3D Avatar */}
                  <div className="flex items-center space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 bg-gradient-to-r ${testimonial.color} rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden`}
                    >
                      {/* 3D Light Effect */}
                      <motion.div
                        animate={{
                          x: [-20, 20, -20],
                          y: [-20, 20, -20],
                          opacity: [0.3, 0.8, 0.3]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-white/30 rounded-2xl"
                      />
                      <span className="text-white font-bold text-xl relative z-10">
                        {testimonial.avatar}
                      </span>
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
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
                  className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full opacity-60"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-16 text-white overflow-hidden">
            {/* Animated Background Lights */}
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
            />
            <motion.div
              animate={{
                scale: [1.5, 1, 1.5],
                rotate: [360, 180, 0]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-xl"
            />

            <h3 className="text-4xl font-bold mb-6 relative z-10">
              Ready to work together?
            </h3>
            <p className="text-xl mb-10 opacity-90 relative z-10">
              Let's create something amazing together
            </p>
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg relative z-10"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 