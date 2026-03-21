'use client'

import { PERSONAL_INFO, SKILLS, PROJECTS, EXPERIENCE, EDUCATION } from '@/lib/constants'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import ResumeTimeline from '@/components/ResumeTimeline'
import EducationTimeline from '@/components/EducationTimeline'
import SkillChips from '@/components/SkillChips'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Animated Cursor */}
      <motion.div
        className="fixed w-6 h-6 border-2 border-blue-500 rounded-full pointer-events-none z-50"
        animate={{ x: mousePosition.x - 12, y: mousePosition.y - 12 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-40 border-b border-gray-200"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">{PERSONAL_INFO.name}</h1>
          <div className="flex gap-8">
            {['about', 'resume', 'projects', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors capitalize"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
              Hi, I'm <span className="text-blue-600">Kaushal</span>
            </h2>
            <p className="text-2xl text-gray-700 mb-3">{PERSONAL_INFO.title}</p>
            <p className="text-lg text-gray-600 mb-6">{PERSONAL_INFO.subtitle}</p>
            <p className="text-gray-600 mb-8">📍 {PERSONAL_INFO.location}</p>
            <div className="flex gap-4 flex-wrap">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold transition"
              >
                Get in Touch
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 font-semibold transition"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-80 h-80">
              <img
                src="/Profile.jpg"
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-blue-600"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-gray-900">About Me</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I'm a Business Analyst and Finance Consultant with 8+ years of experience in international trade, 
                financial management, and business optimization. Currently working at HORBACH in Stuttgart, Germany.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                My expertise spans across SAP, Excel, Power BI, Python, and AI automation. I'm passionate about 
                leveraging data-driven insights to drive business growth and operational excellence.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg border-l-4 border-blue-600">
                  <h4 className="font-bold text-gray-900 mb-2">📍 Location</h4>
                  <p className="text-gray-700">{PERSONAL_INFO.location}</p>
                </div>
                <div className="p-4 bg-white rounded-lg border-l-4 border-blue-600">
                  <h4 className="font-bold text-gray-900 mb-2">💼 Company</h4>
                  <p className="text-gray-700">{PERSONAL_INFO.company}</p>
                </div>
                <div className="p-4 bg-white rounded-lg border-l-4 border-blue-600">
                  <h4 className="font-bold text-gray-900 mb-2">📞 Contact</h4>
                  <p className="text-gray-700">{PERSONAL_INFO.phone}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-6 max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold mb-14 text-gray-900">Resume</h3>

        {/* Work Experience */}
        <div className="mb-14">
          <h4 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <span className="inline-block w-1 h-7 bg-blue-600 rounded-full" />
            Work Experience
          </h4>
          <ResumeTimeline items={EXPERIENCE} />
        </div>

        {/* Education */}
        <div className="mb-14">
          <h4 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <span className="inline-block w-1 h-7 bg-blue-600 rounded-full" />
            Education
          </h4>
          <EducationTimeline items={EDUCATION} />
        </div>

        {/* Skills */}
        <div>
          <h4 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <span className="inline-block w-1 h-7 bg-blue-600 rounded-full" />
            Skills
          </h4>
          <SkillChips groups={SKILLS} />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-gray-900">Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-6"
              >
                <div className="text-4xl mb-4">{project.icon}</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h4>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="space-y-2 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <p key={i} className="text-gray-700 flex items-center gap-2">
                      <span className="text-blue-600">•</span> {highlight}
                    </p>
                  ))}
                </div>
                <div className="flex gap-2 flex-wrap">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h3 className="text-4xl font-bold mb-8 text-gray-900">Let's Connect</h3>
        <p className="text-lg text-gray-700 mb-12">Ready to collaborate? Reach out to me!</p>
        <div className="flex gap-6 justify-center flex-wrap">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold transition"
          >
            📧 Email
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 font-semibold transition"
          >
            💼 LinkedIn
          </a>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 font-semibold transition"
          >
            🐙 GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 px-6 text-center text-gray-600 bg-gray-50">
        <p>© 2026 {PERSONAL_INFO.name}. All rights reserved.</p>
      </footer>
    </div>
  )
}