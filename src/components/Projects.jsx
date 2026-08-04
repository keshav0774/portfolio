import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    number: '01',
    name: 'CodeIt',
    description:
      'A production-style coding platform built around real interview-prep workflows: secure authentication, problem management, code execution, AI-assisted hints, and submission analytics in one full-stack system.',
    highlights: [
      'JWT + Redis auth with OTP email verification and forgot-password recovery',
      'Run and submit code in 10+ languages with visible and hidden test cases',
      'Admin problem management, AI hint assistant, and profile-level progress tracking',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Redis', 'JWT', 'AI'],
    github: 'https://github.com/keshav0774/CodeIT',
    live: 'https://code-it-lilac.vercel.app/signup',
    status: 'Flagship Full Stack',
    featured: true,
  },
  {
    number: '02',
    name: 'NEXUS',
    description:
      'A lightweight cybersecurity-inspired system automation suite focused on local-first observability, developer utilities, and voice-driven machine automation while keeping user data on the device.',
    highlights: [
      'Backend-first architecture for system checks, local automation, and utility workflows',
      'Privacy-conscious design where sensitive system data stays on the machine',
      'Designed as a practical command center for developers and power users',
    ],
    tech: ['Node.js', 'Express', 'Automation', 'System Tools', 'Security', 'Voice UX'],
    github: '',
    live: '',
    status: 'In Progress',
  },
  {
    number: '03',
    name: 'TaskFlow App',
    description:
      'A full-stack task management web app with user authentication, drag-and-drop boards, and real-time updates. Clean UI built in React + Tailwind, with an Express backend and MongoDB storage.',
    highlights: [
      'JWT-based authentication for protected user workflows',
      'Kanban-style task movement with a focused dashboard UI',
      'REST API backend connected to MongoDB persistence',
    ],
    tech: ['React', 'Tailwind CSS', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com/keshav0774/keshavmishra/taskflow',
    live: 'https://taskflow-demo.vercel.app',
    status: 'Full Stack',
  },
  {
    number: '04',
    name: 'DSA Tracker',
    description:
      'A personal tool to log and track DSA problem-solving progress across LeetCode and GFG with topic filters, difficulty tags, and a daily streak counter.',
    highlights: [
      'Tracks consistency across coding platforms',
      'Filters problems by topic and difficulty',
      'Uses localStorage for fast personal progress tracking',
    ],
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
          <p className="text-[#e8e6e1]/45 mt-4 max-w-2xl font-light leading-relaxed">
            Focused on backend-heavy products, real authentication flows, automation, and practical tools that show system thinking.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.15 }}
            
              className="group relative flex flex-col p-6 rounded-xl border border-[#d4d2cc15] bg-[#1a1a1a] card-hover"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <span className="font-mono text-4xl font-bold text-[#d4d2cc18] select-none">
                  {project.number}
                </span>
                <span className="font-mono text-xs text-[#d4d2cc]/60 border border-[#d4d2cc25] px-2 py-1 rounded-md text-right">
                  {project.status}
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-[#e8e6e1] mb-3 group-hover:text-[#d4d2cc] transition-colors duration-300">
                {project.name}
              </h3>

              <p className="text-[#e8e6e1]/55 text-sm leading-relaxed mb-5 font-light">
                {project.description}
              </p>

              <ul className="space-y-2 mb-6 flex-1">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-[#e8e6e1]/45 leading-relaxed font-light">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[#d4d2cc]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

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

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#d4d2cc10]">
                {project.github ? (
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
                ) : (
                  <span className="font-mono text-xs text-[#e8e6e1]/30">Source coming soon</span>
                )}

                {project.live && (
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
                )}
              </div>

              <div className="absolute inset-0 rounded-xl border border-green-400/0 group-hover:border-green-400/20 transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

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
