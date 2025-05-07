import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Hero = () => {
  const socialLinks = [
    { icon: <FaGithub />, href: '#', label: 'GitHub' },
    { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
    { icon: <FaTwitter />, href: '#', label: 'Twitter' },
  ]

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              'radial-gradient(circle at 20% 20%, #ffffff 0%, transparent 50%)',
              'radial-gradient(circle at 80% 80%, #ffffff 0%, transparent 50%)',
              'radial-gradient(circle at 20% 20%, #ffffff 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Hi, I'm <span className="text-yellow-300">Your Name</span>
          </h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl md:text-3xl text-white mb-8"
          >
            Full Stack Developer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg text-white mb-8 max-w-2xl mx-auto"
          >
            I create beautiful and functional web applications with modern technologies.
            Let's build something amazing together!
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-white text-2xl hover:text-yellow-300 transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-8"
          >
            <a
              href="#contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 hover:text-purple-600 transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-1 h-2 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero 