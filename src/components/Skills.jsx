import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillGroups = [
  {
    category: 'Frontend',
    color: 'from-green-400/20 to-transparent',
    skills: [
      { name: 'React', level: 80 },
      { name: 'JavaScript', level: 78 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'HTML & CSS', level: 90 },
    ],
  },
  {
    category: 'Backend',
    color: 'from-green-400/15 to-transparent',
    skills: [
      { name: 'Node.js', level: 72 },
      { name: 'Express.js', level: 70 },
      { name: 'REST APIs', level: 75 },
    ],
  },
  {
    category: 'Database',
    color: 'from-green-400/10 to-transparent',
    skills: [
      { name: 'MongoDB', level: 68 },
      { name: 'Mongoose', level: 65 },
      { name: 'Redis', level: 50 }
    ],
  },
  {
    category: 'Tools',
    color: 'from-green-400/12 to-transparent',
    skills: [
      { name: 'Git & GitHub', level: 80 },
      { name: 'Postman', level: 75 },
      { name: 'VS Code', level: 90 },
    ],
  },
]

const techBadges = [
  'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB',
  'Tailwind CSS', 'Git', 'Postman', 'HTML5', 'CSS3', 'REST API', 'GitHub'
]

function SkillBar({ name, level, delay, inView }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="font-mono text-sm text-[#e8e6e1]/70">{name}</span>
        <span className="font-mono text-xs text-[#d4d2cc]/60">{level}%</span>
      </div>
      <div className="h-1 bg-[#1e2e1e] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full"
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-28 relative">
      {/* subtle bg blob */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#d4d2cc]/4 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-[#d4d2cc] text-xs tracking-widest uppercase mb-4">02. Skills</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#e8e6e1]">
            What I work with
          </h2>
        </motion.div>

        {/* Skill bars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillGroups.map(({ category, skills }, gi) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
              className="p-6 rounded-xl border border-[#d4d2cc15] bg-[#1a1a1a]"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#d4d2cc]" />
                <span className="font-display font-semibold text-[#e8e6e1] text-sm">{category}</span>
              </div>
              {skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  {...skill}
                  delay={0.3 + gi * 0.1 + si * 0.08}
                  inView={inView}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tech badge cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="font-mono text-xs text-[#e8e6e1]/30 uppercase tracking-widest mb-5">Tech stack</p>
          <div className="flex flex-wrap gap-2">
            {techBadges.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.04, duration: 0.3 }}
                className="px-3 py-1.5 font-mono text-xs text-[#d4d2cc]/70 border border-[#d4d2cc25] rounded-md bg-[#d4d2cc08] hover:border-green-400/50 hover:text-[#d4d2cc] hover:bg-[#d4d2cc15] transition-all duration-200 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
