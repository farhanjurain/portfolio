import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your form submission logic here
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <h2 className="heading-lg text-gray-900 mb-4">
            Get in <span className="text-purple-600">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out to me!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-md hover:bg-purple-700 transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-purple-600" />
                  <span className="text-gray-600">your.email@example.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-purple-600" />
                  <span className="text-gray-600">+1 234 567 890</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-purple-600" />
                  <span className="text-gray-600">Your Location, City, Country</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Let's Connect
              </h3>
              <p className="text-gray-600 mb-4">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Twitter
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 