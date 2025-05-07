import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
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

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Image Section */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-20" />
              <img
                src="/your-image.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-300 rounded-full opacity-20 animate-float" />
          </motion.div>

          {/* Content Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="heading-lg text-gray-900">
              About <span className="text-purple-600">Me</span>
            </h2>
            <p className="text-lg text-gray-600">
              I'm a passionate Full Stack Developer with a keen eye for creating
              beautiful and functional web applications. With several years of
              experience in the industry, I've worked on various projects ranging
              from small business websites to complex enterprise applications.
            </p>
            <p className="text-lg text-gray-600">
              My journey in web development started with a curiosity about how
              things work on the internet, which led me to dive deep into both
              frontend and backend technologies. I believe in writing clean,
              maintainable code and staying up-to-date with the latest industry
              trends and best practices.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <motion.div
                variants={itemVariants}
                className="bg-gray-50 p-4 rounded-lg"
              >
                <h3 className="text-3xl font-bold text-purple-600">5+</h3>
                <p className="text-gray-600">Years Experience</p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="bg-gray-50 p-4 rounded-lg"
              >
                <h3 className="text-3xl font-bold text-purple-600">50+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="bg-gray-50 p-4 rounded-lg"
              >
                <h3 className="text-3xl font-bold text-purple-600">30+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="bg-gray-50 p-4 rounded-lg"
              >
                <h3 className="text-3xl font-bold text-purple-600">10+</h3>
                <p className="text-gray-600">Awards Won</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 