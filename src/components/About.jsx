import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Terminal, Code2, Cpu } from 'lucide-react'

const profileLinks = {
  LeetCode: 'https://leetcode.com/u/keshavisyours/',
  GFG: 'https://www.geeksforgeeks.org/profile/keshav_0__',
}

const highlights = [
  { icon: Terminal, label: 'Backend Dev', desc: 'Node.js - Express - REST APIs' },
  { icon: Code2, label: 'Frontend Dev', desc: 'React - Tailwind - JavaScript' },
  { icon: Cpu, label: 'DSA & Logic', desc: 'LeetCode - GFG - Problem Solving' },
]

const stats = [
  { num: '250+', label: 'LeetCode', href: profileLinks.LeetCode },
  { num: '320+', label: 'GFG', href: profileLinks.GFG },
  { num: '3+', label: 'Projects' },
  { num: '1yr+', label: 'Coding' },
]

function openProfile(href) {
  if (!href) return
  window.open(href, '_blank', 'noopener,noreferrer')
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <p className="font-mono text-[#d4d2cc] text-xs tracking-widest uppercase mb-4">01. About</p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#e8e6e1] mb-8 leading-tight">
                Who I am
              </h2>
            </motion.div>

            {[
             "I'm a Mechanical Engineering student at SRMS College of Engineering & Technology who chose to pursue software development out of genuine interest. I enjoy building backend systems, designing APIs, and developing full-stack applications that are scalable, maintainable, and user-focused.",
            "My core stack includes React, Node.js, Express.js, MongoDB, and REST APIs. I also solve Data Structures & Algorithms problems regularly on LeetCode and GeeksforGeeks to sharpen my problem-solving and coding skills.",
            "I'm currently looking for opportunities where I can contribute to real-world products, learn from experienced engineers, and grow as a backend-focused software developer"
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
                className="text-[#e8e6e1]/55 leading-relaxed mb-5 font-light"
              >
                {text}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-8 p-4 border border-[#d4d2cc20] rounded-lg bg-[#d4d2cc08]"
            >
              <p className="font-mono text-sm text-[#d4d2cc]/70">
                <span className="text-[#d4d2cc]">-&gt;</span> Currently: Learning System Design basics + building projects
              </p>
            </motion.div>
          </div>

          <div className="grid gap-4">
            {highlights.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.14 }}
                className="flex items-center gap-5 p-5 rounded-xl border border-[#d4d2cc15] bg-[#1a1a1a] card-hover cursor-default"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#d4d2cc12] border border-[#d4d2cc25] flex items-center justify-center">
                  <Icon size={20} className="text-[#d4d2cc]" />
                </div>
                <div>
                  <p className="font-display font-semibold text-[#e8e6e1] text-base">{label}</p>
                  <p className="font-mono text-xs text-[#e8e6e1]/40 mt-0.5">{desc}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3 mt-2"
            >
              {stats.map(({ num, label, href }) => (
                <button
                  key={label}
                  type="button"
                  onDoubleClick={() => openProfile(href)}
                  disabled={!href}
                  title={href ? `Double click to open ${label}` : undefined}
                  className={`p-4 rounded-xl border border-[#d4d2cc15] bg-[#1a1a1a] text-center transition-all duration-300 ${
                    href
                      ? 'cursor-pointer hover:-translate-y-1 hover:border-[#d4d2cc50] hover:bg-[#d4d2cc08]'
                      : 'cursor-default'
                  }`}
                >
                  <p className="font-display text-2xl font-bold text-[#d4d2cc]">{num}</p>
                  <p className="font-mono text-xs text-[#e8e6e1]/35 mt-1">{label}</p>
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
