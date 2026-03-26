import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#d4d2cc15] py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="font-mono text-sm text-[#d4d2cc] hover:text-green-300 transition-colors"
          >
            <span className="text-[#e8e6e1]/30">./</span>keshav
          </a>

          {/* Credit */}
          <p className="font-mono text-xs text-[#e8e6e1]/25 flex items-center gap-1.5">
            Built with <Heart size={11} className="text-[#d4d2cc]/60 fill-green-400/40" /> by Keshav Mishra · {year}
          </p>

          {/* Social */}
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: 'https://github.com/keshav0774', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/keshavmishra0774/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:keshav0774@example.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                whileHover={{ y: -2 }}
                className="text-[#e8e6e1]/25 hover:text-[#d4d2cc] transition-colors duration-200"
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
