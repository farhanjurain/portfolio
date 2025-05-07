import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce platform with real-time inventory management and payment processing.',
      image: '/project1.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      live: '#',
    },
    {
      title: 'AI-Powered Chat Application',
      description:
        'Real-time chat application with AI integration for automated responses and language processing.',
      image: '/project2.jpg',
      technologies: ['React', 'Python', 'TensorFlow', 'WebSocket'],
      github: '#',
      live: '#',
    },
    {
      title: 'Task Management System',
      description:
        'Collaborative task management system with real-time updates and team collaboration features.',
      image: '/project3.jpg',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      github: '#',
      live: '#',
    },
    {
      title: 'Portfolio Website',
      description:
        'Modern portfolio website with smooth animations and responsive design.',
      image: '/project4.jpg',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
      github: '#',
      live: '#',
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
    <section id="projects" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <h2 className="heading-lg text-gray-900 mb-4">
            My <span className="text-purple-600">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience in web development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    <FaGithub className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 