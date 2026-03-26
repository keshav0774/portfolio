import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Terminal, Code2, Cpu } from 'lucide-react'

const highlights = [
  { icon: Terminal, label: 'Backend Dev', desc: 'Node.js · Express · REST APIs' },
  { icon: Code2, label: 'Frontend Dev', desc: 'React · Tailwind · JavaScript' },
  { icon: Cpu, label: 'DSA & Logic', desc: 'LeetCode · Problem Solving' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
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
              "I'm a Mechanical Engineering student at a technical university in India, but code is where I spend most of my time. I made the shift into software development because I love the idea of building things that actually work — and scale.",
              "My primary focus is backend development. I enjoy thinking about how systems are designed, how data flows, and how to make things fast and reliable. Alongside that, I build full-stack web apps with React on the frontend.",
              "I'm consistently practicing Data Structures & Algorithms on LeetCode and GFG — not just to crack interviews, but because problem solving is something I genuinely enjoy.",
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
                <span className="text-[#d4d2cc]">→</span> Currently: Learning System Design basics + building projects
              </p>
            </motion.div>
          </div>

          {/* Right — Highlight Cards */}
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

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="grid grid-cols-3 gap-3 mt-2"
            >
              {[
                { num: '150+', label: 'LeetCode' },
                { num: '3+', label: 'Projects' },
                { num: '1yr+', label: 'Coding' },
              ].map(({ num, label }) => (
                <div
                  key={label}
                  className="p-4 rounded-xl border border-[#d4d2cc15] bg-[#1a1a1a] text-center"
                >
                  <p className="font-display text-2xl font-bold text-[#d4d2cc]">{num}</p>
                  <p className="font-mono text-xs text-[#e8e6e1]/35 mt-1">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
