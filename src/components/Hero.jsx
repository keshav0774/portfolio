import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { useState, useEffect } from 'react'

const roles = [
  'Full Stack Developer',
  'Backend Engineer',
  'Problem Solver',
  'CS Enthusiast',
]

function useTypewriter(words, speed = 80, pause = 2000) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIndex + 1))
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause)
        } else {
          setCharIndex((c) => c + 1)
        }
      } else {
        setText(current.slice(0, charIndex - 1))
        if (charIndex - 1 === 0) {
          setDeleting(false)
          setWordIndex((w) => (w + 1) % words.length)
          setCharIndex(0)
        } else {
          setCharIndex((c) => c - 1)
        }
      }
    }, deleting ? speed / 2 : speed)
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, wordIndex, words, speed, pause])

  return text
}

export default function Hero() {
  const typed = useTypewriter(roles)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#d4d2cc]/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-[#d4d2cc]/3 blur-[100px] pointer-events-none" />

      {/* Side social links */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="fixed left-6 bottom-0 hidden lg:flex flex-col items-center gap-4 z-20"
      >
        {[
          { icon: Github, href: 'https://github.com/keshav0774', label: 'GitHub' },
          { icon: Linkedin, href: 'https://www.linkedin.com/in/keshavmishra0774/', label: 'LinkedIn' },
          { icon: Mail, href: 'mailto:keshav0774@example.com', label: 'Email' },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e8e6e1]/30 hover:text-[#d4d2cc] transition-all duration-200 hover:-translate-y-1"
            aria-label={label}
          >
            <Icon size={18} />
          </a>
        ))}
        <div className="w-px h-24 bg-gradient-to-b from-[#d4d2cc40] to-transparent mt-2" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-mono text-[#d4d2cc] text-sm mb-6 tracking-widest uppercase"
          >
            Hello, World — I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold leading-none tracking-tight text-[#e8e6e1] mb-4"
          >
            Keshav
            <br />
            <span className="text-gradient">Mishra.</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="font-mono text-xl sm:text-2xl text-[#e8e6e1]/50 mb-8 h-8"
          >
            <span>{typed}</span>
            <span className="animate-cursor-blink text-[#d4d2cc] ml-0.5">|</span>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-[#e8e6e1]/55 text-lg max-w-xl leading-relaxed mb-12 font-light"
          >
            Mechanical engineering student turned developer. I build things for the web —
            clean backends, functional frontends, and everything in between.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-7 py-3.5 bg-[#d4d2cc] text-[#111111] font-display font-semibold text-sm rounded-md overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_#d4d2cc40] hover:scale-105 active:scale-100"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-green-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>

            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-7 py-3.5 border border-[#d4d2cc40] text-[#d4d2cc] font-display font-semibold text-sm rounded-md hover:bg-[#d4d2cc10] hover:border-[#d4d2cc80] transition-all duration-300 hover:scale-105 active:scale-100"
            >
              Contact Me
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#e8e6e1]/20"
      >
        <span className="font-mono text-xs tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  )
}
