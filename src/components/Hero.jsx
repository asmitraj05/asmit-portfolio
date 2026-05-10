import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Download, Sparkles } from 'lucide-react'

const roles = ['Product Manager', 'AI Builder', 'Ex-Founder', 'Venture Builder']

const logos = [
  { name: 'DhagaKart', abbr: 'DK', color: '#f59e0b' },
  { name: 'Hero Vired', abbr: 'HV', color: '#6366f1' },
  { name: 'K12 Techno', abbr: 'K12', color: '#10b981' },
  { name: 'OneCare', abbr: 'OC', color: '#ec4899' },
]

const quickMetrics = [
  { value: '₹4.8Cr', label: 'ARR Built' },
  { value: '44%', label: 'Engagement ↑' },
  { value: '28%', label: 'Conversion ↑' },
  { value: '45d', label: 'MVP Shipped' },
]

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) return
    const interval = setInterval(() => {
      setRoleIdx(i => (i + 1) % roles.length)
    }, 2400)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ paddingTop: '5rem' }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(var(--border-subtle) 1px, transparent 1px),
            linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)',
          opacity: 0.4,
        }}
      />

      {/* Gradient orb */}
      <div
        className="absolute animate-float pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, rgba(99,102,241,0.04) 50%, transparent 70%)',
          borderRadius: '50%',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          top: '30%',
          right: '15%',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center mb-6"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium"
            style={{
              background: 'var(--accent-glow)',
              border: '1px solid var(--accent-border)',
              color: '#818cf8',
            }}
          >
            <Sparkles size={11} />
            Open to PM Roles · Bangalore / Remote
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          className="font-bold leading-tight tracking-tight mb-3"
          style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4rem)', color: 'var(--text-primary)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {"Hi, I'm Asmit Raj."}
          <br />
          <span className="gradient-text-accent">
            {"Product Manager & AI Builder"}
          </span>
          <br />
          {"who ships from idea to impact."}
        </motion.h1>

        {/* Credential bar */}
        <motion.div
          className="flex items-center justify-center gap-2 mb-5 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          {['NIT Trichy', 'BITS Pilani MBA', 'Ex-Founder @ DhagaKart'].map((cred, i) => (
            <span key={cred} className="flex items-center gap-2">
              <span
                className="text-xs font-medium px-2.5 py-1 rounded-full"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-secondary)',
                }}
              >
                {cred}
              </span>
              {i < 2 && <span style={{ color: 'var(--border)', fontSize: '0.7rem' }}>·</span>}
            </span>
          ))}
        </motion.div>

        {/* Cycling role */}
        <motion.div
          className="flex items-center justify-center gap-2 mb-7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Currently —</span>
          <span
            className="inline-block overflow-hidden"
            style={{ height: '1.5rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIdx}
                className="block"
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -24, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {roles[roleIdx]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          className="mx-auto mb-10 leading-relaxed"
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.1rem)',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          NIT Trichy graduate, MBA from BITS Pilani, and ex-Founder of DhagaKart — a B2B marketplace
          I built from the ground up. Today, I design, build, and prioritize products using AI, and
          I&apos;ve shipped real ventures and tools powered entirely by AI workflows.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          <a href="#work" className="btn-primary">
            View AI Projects
            <ArrowRight size={15} />
          </a>
          <a href="/resume.pdf" download className="btn-secondary">
            <Download size={14} />
            Download Resume
          </a>
        </motion.div>

        {/* Company logos */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <p className="text-xs font-medium mb-4" style={{ color: 'var(--text-muted)', letterSpacing: '0.08em' }}>
            BUILT PRODUCTS AT
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {logos.map(logo => (
              <div
                key={logo.name}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
              >
                <span
                  className="w-5 h-5 rounded flex items-center justify-center text-xs font-bold"
                  style={{ background: logo.color + '22', color: logo.color, fontSize: '0.6rem' }}
                >
                  {logo.abbr}
                </span>
                <span className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick metrics */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
        >
          {quickMetrics.map(m => (
            <div
              key={m.label}
              className="flex flex-col items-center py-3 px-2 rounded-xl"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
            >
              <span
                className="font-mono-nums font-bold text-xl glow-amber"
                style={{ color: 'var(--amber)' }}
              >
                {m.value}
              </span>
              <span className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                {m.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
      >
        <span className="text-xs" style={{ color: 'var(--text-muted)' }}>scroll</span>
        <motion.div
          className="w-px h-8"
          style={{ background: 'linear-gradient(to bottom, var(--border), transparent)' }}
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  )
}
