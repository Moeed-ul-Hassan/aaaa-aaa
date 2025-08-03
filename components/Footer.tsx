'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    general: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Projects', href: '#projects' },
      { name: 'Blog', href: '#blog' }
    ],
    specifics: [
      { name: 'Guest Book', href: '#guestbook' },
      { name: 'Bucket List', href: '#bucketlist' },
      { name: 'Uses', href: '#uses' },
      { name: 'Attribution', href: '#attribution' }
    ],
    more: [
      { name: 'Contact', href: '#contact' },
      { name: 'Links', href: '#links' },
      { name: 'RSS', href: '#rss' }
    ]
  }

  const socialLinks = [
    { name: 'LinkedIn', icon: <Linkedin size={20} />, href: '#' },
    { name: 'GitHub', icon: <Github size={20} />, href: '#' },
    { name: 'Twitter', icon: <Twitter size={20} />, href: '#' }
  ]

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Portfolio
            </h3>
            <p className="text-gray-400 mb-6">
              Python backend developer and product builder passionate about hackathon innovation and real-world solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8"
          >
            <div>
              <h4 className="font-semibold mb-4">General</h4>
              <ul className="space-y-2">
                {footerLinks.general.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Specifics</h4>
              <ul className="space-y-2">
                {footerLinks.specifics.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">More</h4>
              <ul className="space-y-2">
                {footerLinks.more.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-primary-600 font-bold text-lg">MH</span>
              </div>
              <div>
                <p className="font-semibold">Moeed ul Hassan</p>
                <p className="text-sm text-gray-400">Python Backend Developer</p>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2025 Moeed ul Hassan. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Made with ❤️ using Next.js & Tailwind CSS
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 