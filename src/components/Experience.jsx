import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { BookOpen, Code2, Server, GitBranch } from 'lucide-react'

const learningItems = [
  {
    icon: Code2,
    title: 'Data Structures & Algorithms',
    platform: 'LeetCode · GeeksForGeeks',
    description:
      'Consistent daily practice — arrays, strings, linked lists, trees, graphs, and dynamic programming. Focused on writing clean, optimal solutions.',
    tags: ['Arrays', 'Trees', 'DP', 'Graphs', 'Sorting'],
    status: 'Ongoing',
  },
  {
    icon: Server,
    title: 'Backend Development',
    platform: 'Self-taught · Projects',
    description:
      'Building REST APIs with Node.js and Express. Learning about middleware, authentication flows, error handling, and connecting with MongoDB.',
    tags: ['Node.js', 'Express', 'JWT', 'REST', 'MongoDB'],
    status: 'Active',
  },
  {
    icon: BookOpen,
    title: 'System Design Basics',
    platform: 'Books · YouTube',
    description:
      'Currently reading about scalability, load balancers, databases, caching, and how large-scale systems are designed. Just starting out.',
    tags: ['Scalability', 'Caching', 'Load Balancing', 'Databases'],
    status: 'Learning',
  },
  {
    icon: GitBranch,
    title: 'Version Control & Dev Tools',
    platform: 'Daily Use',
    description:
      'Using Git daily for all projects — branching, merging, pull requests. Comfortable with GitHub workflows and Postman for API testing.',
    tags: ['Git', 'GitHub', 'Postman', 'CLI'],
    status: 'Proficient',
  },
]

const statusColors = {
  Ongoing: 'text-[#d4d2cc] bg-[#d4d2cc15] border-[#d4d2cc30]',
  Active: 'text-[#d4d2cc] bg-[#d4d2cc15] border-[#d4d2cc30]',
  Learning: 'text-yellow-400/80 bg-yellow-400/10 border-yellow-400/20',
  Proficient: 'text-blue-400/80 bg-blue-400/10 border-blue-400/20',
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="py-28 relative">
      <div className="absolute right-0 bottom-0 w-[350px] h-[350px] rounded-full bg-[#d4d2cc]/3 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-[#d4d2cc] text-xs tracking-widest uppercase mb-4">04. Learning</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#e8e6e1]">
            What I'm working on
          </h2>
          <p className="text-[#e8e6e1]/45 mt-4 max-w-lg font-light leading-relaxed">
            No internship yet — but I'm building skills the only way that matters: by actually doing the work.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {learningItems.map(({ icon: Icon, title, platform, description, tags, status }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="p-6 rounded-xl border border-[#d4d2cc15] bg-[#1a1a1a] card-hover"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-11 h-11 rounded-lg bg-[#d4d2cc12] border border-[#d4d2cc25] flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-[#d4d2cc]" />
                </div>
                <span className={`font-mono text-xs px-2.5 py-1 rounded-md border ${statusColors[status]}`}>
                  {status}
                </span>
              </div>

              <h3 className="font-display text-lg font-semibold text-[#e8e6e1] mb-1">{title}</h3>
              <p className="font-mono text-xs text-[#d4d2cc]/50 mb-3">{platform}</p>
              <p className="text-[#e8e6e1]/50 text-sm leading-relaxed mb-5 font-light">{description}</p>

              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-[#e8e6e1]/35 border border-[#d4d2cc15] px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
