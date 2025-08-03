'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Calendar, Mail, Phone } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showContactModal, setShowContactModal] = useState(false)

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'More', href: '#more' },
  ]

  const handleBookCall = () => {
    setShowContactModal(true)
  }

  const handleContactAction = (type: 'email' | 'phone' | 'calendar') => {
    switch (type) {
      case 'email':
        window.open('mailto:moeedulhassan.pk@gmail.com?subject=Portfolio Inquiry - Let\'s Connect!&body=Hi Moeed,%0D%0A%0D%0AI came across your portfolio and would like to discuss potential opportunities.%0D%0A%0D%0ABest regards,', '_blank')
        break
      case 'phone':
        window.open('tel:+1234567890', '_blank')
        break
      case 'calendar':
        window.open('https://calendly.com/moeedulhassan/30min', '_blank')
        break
    }
    setShowContactModal(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold gradient-text"
            >
              Portfolio
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  className="text-gray-700 hover:text-primary-600 transition-colors duration-200"
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>

            {/* CTA Button */}
            <motion.button
              onClick={handleBookCall}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors duration-200"
            >
              Book a Call
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <button 
                  onClick={handleBookCall}
                  className="w-full mt-4 bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors duration-200"
                >
                  Book a Call
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* Contact Modal */}
      {showContactModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setShowContactModal(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Let's Connect!</h3>
              <p className="text-gray-600">Choose how you'd like to reach out</p>
            </div>

            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleContactAction('email')}
                className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg"
              >
                <Mail size={20} />
                <span className="font-semibold">Send Email</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleContactAction('phone')}
                className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 px-6 rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-lg"
              >
                <Phone size={20} />
                <span className="font-semibold">Call Now</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleContactAction('calendar')}
                className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-orange-500 to-red-600 text-white py-4 px-6 rounded-xl hover:from-orange-600 hover:to-red-700 transition-all duration-200 shadow-lg"
              >
                <Calendar size={20} />
                <span className="font-semibold">Schedule Meeting</span>
              </motion.button>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowContactModal(false)}
              className="w-full mt-6 py-3 text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              Cancel
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}

export default Header 