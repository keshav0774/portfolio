import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react'

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'keshav0774@example.com',
    href: 'mailto:keshav0774@example.com',
    description: 'Best for project inquiries',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/keshav0774',
    href: 'https://github.com/keshav0774',
    description: 'See my code and projects',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/keshavmishra0774/',
    href: 'https://www.linkedin.com/in/keshavmishra0774/',
    description: 'Connect professionally',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="py-28 relative">
      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-[#d4d2cc]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-[#d4d2cc] text-xs tracking-widest uppercase mb-4">05. Contact</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#e8e6e1] mb-6">
              Let's talk
            </h2>
            <p className="text-[#e8e6e1]/50 leading-relaxed font-light">
              I'm open to opportunities, collaborations, or just a good conversation about
              tech and building things. Reach out through any of the channels below.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto mb-12">
          {contacts.map(({ icon: Icon, label, value, href, description }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
              className="group flex flex-col items-center text-center p-6 rounded-xl border border-[#d4d2cc15] bg-[#1a1a1a] hover:border-[#d4d2cc40] hover:bg-[#0f1a0f] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_#d4d2cc15]"
            >
              <div className="w-12 h-12 rounded-lg bg-[#d4d2cc12] border border-[#d4d2cc25] flex items-center justify-center mb-4 group-hover:bg-[#d4d2cc20] group-hover:border-[#d4d2cc50] transition-all duration-300">
                <Icon size={20} className="text-[#d4d2cc]" />
              </div>
              <p className="font-display font-semibold text-[#e8e6e1] text-base mb-1">{label}</p>
              <p className="font-mono text-xs text-[#e8e6e1]/35 mb-2 break-all">{value}</p>
              <p className="text-xs text-[#e8e6e1]/30 font-light">{description}</p>
              <ArrowUpRight
                size={14}
                className="mt-3 text-[#d4d2cc]/0 group-hover:text-[#d4d2cc]/60 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-center"
        >
          <a
            href="mailto:keshav0774@example.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#d4d2cc] text-[#111111] font-display font-semibold text-sm rounded-md hover:bg-green-300 hover:shadow-[0_0_30px_#d4d2cc40] transition-all duration-300 hover:scale-105 active:scale-100"
          >
            <Mail size={16} />
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  )
}
