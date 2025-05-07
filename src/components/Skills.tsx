import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaDocker,
} from 'react-icons/fa'
import { SiTypescript, SiTailwindcss } from 'react-icons/si'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    {
      name: 'React',
      icon: <FaReact className="text-4xl text-blue-500" />,
      level: 90,
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript className="text-4xl text-blue-600" />,
      level: 85,
    },
    {
      name: 'Node.js',
      icon: <FaNodeJs className="text-4xl text-green-600" />,
      level: 88,
    },
    {
      name: 'Python',
      icon: <FaPython className="text-4xl text-yellow-500" />,
      level: 82,
    },
    {
      name: 'Database',
      icon: <FaDatabase className="text-4xl text-purple-500" />,
      level: 85,
    },
    {
      name: 'Git',
      icon: <FaGitAlt className="text-4xl text-orange-500" />,
      level: 90,
    },
    {
      name: 'Docker',
      icon: <FaDocker className="text-4xl text-blue-600" />,
      level: 75,
    },
    {
      name: 'Tailwind',
      icon: <SiTailwindcss className="text-4xl text-cyan-500" />,
      level: 92,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <h2 className="heading-lg text-gray-900 mb-4">
            My <span className="text-purple-600">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development world.
            Here are some of my core skills and expertise.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center space-y-4">
                {skill.icon}
                <h3 className="text-lg font-semibold text-gray-900">
                  {skill.name}
                </h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="bg-purple-600 h-2.5 rounded-full"
                  />
                </div>
                <span className="text-sm text-gray-600">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 