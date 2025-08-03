'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Sparkles } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      })
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }, 2000)
  }

  const handleQuickContact = (type: 'email' | 'phone' | 'linkedin') => {
    switch (type) {
      case 'email':
        window.open('mailto:moeedulhassan.pk@gmail.com?subject=Portfolio Inquiry&body=Hi Moeed,%0D%0A%0D%0AI came across your portfolio and would like to discuss potential opportunities.%0D%0A%0D%0ABest regards,', '_blank')
        break
      case 'phone':
        window.open('tel:+1234567890', '_blank')
        break
      case 'linkedin':
        window.open('https://linkedin.com/in/moeedulhassan', '_blank')
        break
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 overflow-hidden">
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
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-primary-200 to-blue-200 rounded-full opacity-20 blur-xl"
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
          className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20 blur-xl"
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
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Get In Touch</h3>
              <p className="text-gray-600 mb-8">
                I'm available for hackathons, collaborative projects, and teams that value quick thinking, solid architecture, and purpose-driven tech. Let's discuss how we can work together.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(14, 165, 233, 0.1)" }}
                onClick={() => handleQuickContact('email')}
                className="flex items-center space-x-4 bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-md border border-gray-100 cursor-pointer"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-7 h-7 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900">Email</h4>
                  <p className="text-gray-700">moeedulhassan.pk@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(14, 165, 233, 0.1)" }}
                onClick={() => handleQuickContact('phone')}
                className="flex items-center space-x-4 bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-md border border-gray-100 cursor-pointer"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-7 h-7 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900">Phone</h4>
                  <p className="text-gray-700">+1 (555) 123-4567</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(14, 165, 233, 0.1)" }}
                className="flex items-center space-x-4 bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-md border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900">Location</h4>
                  <p className="text-gray-700">Gujrat, Pakistan • Remote Available</p>
                </div>
              </motion.div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="space-y-4">
              <h4 className="font-bold text-lg text-gray-900">Quick Contact</h4>
              <div className="flex flex-wrap gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleQuickContact('email')}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg"
                >
                  Send Email
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleQuickContact('phone')}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-lg"
                >
                  Call Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleQuickContact('linkedin')}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg"
                >
                  LinkedIn
                </motion.button>
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <h4 className="font-bold text-xl mb-4 text-gray-900">Current Status</h4>
              <div className="flex items-center space-x-3 mb-3">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-4 h-4 bg-green-500 rounded-full"
                />
                <span className="text-green-600 font-semibold text-lg">Available for new projects</span>
                <Sparkles size={18} className="text-green-500" />
              </div>
              <p className="text-base text-gray-700">
                I'm currently accepting hackathon opportunities and collaborative projects
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-sm p-8 border border-gray-100"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Send a Message</h3>
            
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6"
              >
                ✅ Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, boxShadow: "0 15px 30px rgba(14, 165, 233, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-primary-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-primary-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Send size={20} />
                    </motion.div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 