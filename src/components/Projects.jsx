import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    number: '01',
    name: 'CodeIt',
    description:
    'A full stack coding platform with secure JWT + Redis auth, OTP-based email verification, and forgot password flow. Supports running & submitting code in 10+ languages with an AI Chat Assistant that gives hints per problem. Includes submission history with runtime, memory & test case results, and a profile page tracking Easy/Medium/Hard solved problems. Admins can create, update, delete problems with visible & hidden test cases.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Redis', 'JWT', 'AI'],
    github: 'https://github.com/keshav0774/CodeIT',
    live: 'https://code-it-lilac.vercel.app/signup',
    status: 'Full Stack',
  },
  {
    number: '02',
    name: 'TaskFlow App',
    description:
      'A full-stack task management web app with user authentication, drag-and-drop boards, and real-time updates. Clean UI built in React + Tailwind, with an Express backend and MongoDB storage.',
    tech: ['React', 'Tailwind CSS', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com/keshav0774/keshavmishra/taskflow',
    live: 'https://taskflow-demo.vercel.app',
    status: 'Full Stack',
  },
  {
    number: '03',
    name: 'DSA Tracker',
    description:
      'A personal tool to log and track DSA problem-solving progress across LeetCode and GFG. Supports topic-wise filtering, difficulty tags, and a daily streak counter. Helped me stay consistent.',
    tech: ['React', 'Tailwind CSS', 'localStorage', 'JavaScript'],
    github: 'https://github.com/keshav0774/keshavmishra/dsa-tracker',
    live: 'https://dsa-tracker-km.vercel.app',
    status: 'Frontend Project',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute left-0 top-1/3 w-[350px] h-[350px] rounded-full bg-[#d4d2cc]/4 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-[#d4d2cc] text-xs tracking-widest uppercase mb-4">03. Projects</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#e8e6e1]">
            Things I've built
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.15 }}
              className="group relative flex flex-col p-6 rounded-xl border border-[#d4d2cc15] bg-[#1a1a1a] card-hover"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-5">
                <span className="font-mono text-4xl font-bold text-[#d4d2cc18] select-none">
                  {project.number}
                </span>
                <span className="font-mono text-xs text-[#d4d2cc]/50 border border-[#d4d2cc25] px-2 py-1 rounded-md">
                  {project.status}
                </span>
              </div>

              {/* Name */}
              <h3 className="font-display text-xl font-bold text-[#e8e6e1] mb-3 group-hover:text-[#d4d2cc] transition-colors duration-300">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-[#e8e6e1]/50 text-sm leading-relaxed mb-6 flex-1 font-light">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs text-[#e8e6e1]/40 bg-[#d4d2cc08] border border-[#d4d2cc15] px-2 py-0.5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#d4d2cc10]">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-mono text-xs text-[#e8e6e1]/50 hover:text-[#d4d2cc] transition-colors duration-200 group/link"
                >
                  <Github size={14} />
                  <span>Source</span>
                  <ArrowUpRight size={10} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                </a>

                {project.live && (
                  <>
                    <span className="text-[#d4d2cc20]">·</span>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-mono text-xs text-[#e8e6e1]/50 hover:text-[#d4d2cc] transition-colors duration-200 group/link"
                    >
                      <ExternalLink size={13} />
                      <span>Live Demo</span>
                      <ArrowUpRight size={10} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </a>
                  </>
                )}
              </div>

              {/* Hover glow border */}
              <div className="absolute inset-0 rounded-xl border border-green-400/0 group-hover:border-green-400/20 transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/keshav0774"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-[#e8e6e1]/40 hover:text-[#d4d2cc] transition-colors duration-200 group"
          >
            <Github size={15} />
            <span>More on GitHub</span>
            <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
