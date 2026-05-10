import { motion } from 'framer-motion'
import { Mail, Link2, AtSign, GitFork, Download, MapPin, CheckCircle } from 'lucide-react'

const links = [
  {
    icon: Mail,
    label: 'asmitraj.kushwaha@gmail.com',
    href: 'mailto:asmitraj.kushwaha@gmail.com',
    color: '#6366f1',
  },
  {
    icon: GitFork,
    label: 'github.com/asmitraj05',
    href: 'https://github.com/asmitraj05/',
    color: '#a0a0ab',
  },
  {
    icon: Link2,
    label: 'linkedin.com/in/asmitraj',
    href: 'https://linkedin.com/in/asmitraj',
    color: '#0a66c2',
  },
  {
    icon: AtSign,
    label: '@asmitraj on X',
    href: 'https://x.com/asmitraj',
    color: '#a0a0ab',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="rounded-2xl overflow-hidden"
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            boxShadow: '0 0 80px rgba(99,102,241,0.08)',
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Gradient top bar */}
          <div
            className="h-1 w-full"
            style={{ background: 'linear-gradient(90deg, #6366f1, #818cf8, #f59e0b, #10b981)' }}
          />

          <div className="p-8 md:p-12 text-center">
            {/* Availability badge */}
            <motion.div
              className="flex items-center justify-center gap-2 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background: 'var(--green)',
                  boxShadow: '0 0 8px var(--green)',
                  animation: 'pulse-green 2s ease-in-out infinite',
                }}
              />
              <span className="text-xs font-medium" style={{ color: 'var(--green)' }}>
                Available for new opportunities
              </span>
            </motion.div>

            <motion.h2
              className="font-bold mb-3"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--text-primary)' }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
            >
              {"Let's build something together."}
            </motion.h2>

            <motion.p
              className="mb-2"
              style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Open to PM roles in AI, Marketplace, or Fintech
            </motion.p>

            <motion.div
              className="flex items-center justify-center gap-1.5 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}
            >
              <MapPin size={13} />
              Bangalore · Remote · Open to Relocate
            </motion.div>

            {/* Contact links */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {links.map(link => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
                    style={{
                      background: 'var(--surface-2)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-secondary)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = link.color + '60'
                      e.currentTarget.style.color = link.color
                      e.currentTarget.style.background = link.color + '10'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'var(--border)'
                      e.currentTarget.style.color = 'var(--text-secondary)'
                      e.currentTarget.style.background = 'var(--surface-2)'
                    }}
                  >
                    <Icon size={15} />
                    {link.label}
                  </a>
                )
              })}
            </motion.div>

            {/* Resume download */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <a href="/resume.pdf" download className="btn-primary inline-flex">
                <Download size={15} />
                Download Resume
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-4 mt-10 pt-8"
              style={{ borderTop: '1px solid var(--border)' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              {[
                'NIT Trichy Graduate',
                'BITS Pilani MBA',
                'Ex-Founder',
                '5+ Years PM',
                'AI-Native',
              ].map(label => (
                <div key={label} className="flex items-center gap-1.5">
                  <CheckCircle size={12} style={{ color: 'var(--green)' }} />
                  <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
