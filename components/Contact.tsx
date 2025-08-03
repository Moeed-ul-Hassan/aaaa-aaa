'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Sparkles } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-primary-200 to-blue-200 rounded-full opacity-20 blur-xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1.1, 1, 1.1],
          }}
          transition={{ 
            duration: 35, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20 blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            x: [0, 15, 0],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/3 right-1/3 w-4 h-4 bg-primary-300 rounded-full opacity-60"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-primary-600 to-blue-600 bg-clip-text text-transparent">
            Let's build something amazing together
          </h2>
          <p className="text-xl text-gray-600">
            Looking for hackathons with real-world themes and problem-first judging
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
                Get In Touch
              </h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                I'm available for hackathons, collaborative projects, and teams that value quick thinking, solid architecture, and purpose-driven tech. Let's discuss how we can work together.
              </p>
            </div>

            {/* Contact Details with Enhanced Design */}
            <div className="space-y-6">
              <motion.div 
                className="flex items-center space-x-4 p-4 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 15px 35px rgba(14, 165, 233, 0.2)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-14 h-14 bg-gradient-to-r from-primary-100 to-blue-100 rounded-xl flex items-center justify-center">
                  <Mail className="w-7 h-7 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email</h4>
                  <p className="text-gray-600">moeedulhassan.pk@gmail.com</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-4 p-4 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 15px 35px rgba(14, 165, 233, 0.2)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-14 h-14 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                  <Phone className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Phone</h4>
                  <p className="text-gray-600">+92 (300) 123-4567</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-4 p-4 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 15px 35px rgba(14, 165, 233, 0.2)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-14 h-14 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Location</h4>
                  <p className="text-gray-600">Gujrat, Pakistan • Remote Available</p>
                </div>
              </motion.div>
            </div>

            {/* Enhanced Availability Status */}
            <motion.div 
              className="bg-gradient-to-r from-white to-blue-50 p-8 rounded-2xl shadow-lg border border-gray-100"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(14, 165, 233, 0.15)"
              }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="font-bold text-xl mb-4 text-gray-900">Current Status</h4>
              <div className="flex items-center space-x-3 mb-3">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-4 h-4 bg-green-500 rounded-full"
                />
                <span className="text-green-600 font-bold">Available for new projects</span>
                <Sparkles size={16} className="text-green-600" />
              </div>
              <p className="text-gray-600">
                I'm currently accepting hackathon opportunities and collaborative projects
              </p>
            </motion.div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100"
          >
            <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
              Send a Message
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label htmlFor="firstName" className="block text-sm font-bold text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="John"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label htmlFor="lastName" className="block text-sm font-bold text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Doe"
                  />
                </motion.div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="john@example.com"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="Project Inquiry"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tell me about your project..."
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(14, 165, 233, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-primary-600 to-blue-600 text-white py-4 rounded-xl font-bold hover:from-primary-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg"
              >
                <Send size={20} />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 