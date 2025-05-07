import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaTrophy, FaMedal, FaAward, FaCertificate } from 'react-icons/fa'

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const achievements = [
    {
      title: 'Best Developer Award',
      description: 'Recognized for outstanding contributions to open-source projects',
      icon: <FaTrophy className="text-4xl text-yellow-500" />,
      year: '2023',
    },
    {
      title: 'Hackathon Winner',
      description: 'First place in the National Web Development Hackathon',
      icon: <FaMedal className="text-4xl text-blue-500" />,
      year: '2022',
    },
    {
      title: 'Innovation Award',
      description: 'Awarded for developing an innovative solution in AI integration',
      icon: <FaAward className="text-4xl text-purple-500" />,
      year: '2022',
    },
    {
      title: 'Certified Expert',
      description: 'Achieved expert certification in Full Stack Development',
      icon: <FaCertificate className="text-4xl text-green-500" />,
      year: '2021',
    },
  ]

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
    <section id="achievements" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <h2 className="heading-lg text-gray-900 mb-4">
            My <span className="text-purple-600">Achievements</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Throughout my career, I've been fortunate to receive recognition for my
            work and contributions to the tech community.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">{achievement.icon}</div>
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {achievement.title}
                    </h3>
                    <span className="text-sm font-medium text-purple-600">
                      {achievement.year}
                    </span>
                  </div>
                  <p className="mt-2 text-gray-600">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Achievements Counter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: 15, label: 'Awards Won' },
            { number: 50, label: 'Projects Completed' },
            { number: 30, label: 'Happy Clients' },
            { number: 5, label: 'Years Experience' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center"
            >
              <motion.h3
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold text-purple-600 mb-2"
              >
                {stat.number}+
              </motion.h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements 