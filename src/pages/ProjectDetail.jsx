import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ExternalLink, GitFork, CheckCircle, Lightbulb, Image } from 'lucide-react'
import { getProject } from '../data/projects'

function StatusBadge({ status, color }) {
  const colors = {
    Live: { bg: 'rgba(16,185,129,0.15)', border: 'rgba(16,185,129,0.3)', text: '#10b981' },
    GitHub: { bg: 'rgba(129,140,248,0.15)', border: 'rgba(129,140,248,0.3)', text: '#818cf8' },
    Internal: { bg: 'rgba(107,107,117,0.15)', border: 'rgba(107,107,117,0.3)', text: '#6b6b75' },
  }
  const c = colors[status] || colors.Internal
  return (
    <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
      style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.text }}>
      {status === 'Live' ? '● Live' : status === 'GitHub' ? '⌥ GitHub' : '◎ Internal'}
    </span>
  )
}

function Section({ label, children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{ duration: 0.5, delay }}
    >
      <p className="section-label mb-4">{label}</p>
      {children}
    </motion.div>
  )
}

function ScreenshotPlaceholder({ label, accentColor }) {
  return (
    <div
      className="rounded-2xl flex flex-col items-center justify-center gap-3 aspect-video"
      style={{
        background: 'var(--surface)',
        border: `1px dashed ${accentColor}40`,
      }}
    >
      <Image size={28} style={{ color: accentColor + '80' }} />
      <p className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>{label}</p>
      <p className="text-xs" style={{ color: 'var(--text-muted)', opacity: 0.6 }}>
        Add screenshot here
      </p>
    </div>
  )
}

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = getProject(id)

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p style={{ color: 'var(--text-muted)' }}>Project not found.</p>
        <Link to="/" className="btn-primary">← Back to Portfolio</Link>
      </div>
    )
  }

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      {/* Top nav bar */}
      <div
        className="sticky top-0 z-50 flex items-center justify-between px-6 h-14"
        style={{
          background: 'rgba(10,10,11,0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm font-medium transition-colors"
          style={{ color: 'var(--text-secondary)', background: 'none', border: 'none', cursor: 'pointer' }}
          onMouseEnter={e => { e.currentTarget.style.color = 'var(--text-primary)' }}
          onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)' }}
        >
          <ArrowLeft size={15} />
          Back
        </button>
        <Link to="/" className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
          Asmit Raj
        </Link>
        <div className="flex items-center gap-2">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary"
              style={{ fontSize: '0.78rem', padding: '0.35rem 0.85rem', gap: '0.35rem' }}>
              <ExternalLink size={12} />
              Live Demo
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary"
              style={{ fontSize: '0.78rem', padding: '0.35rem 0.85rem', gap: '0.35rem' }}>
              <GitFork size={12} />
              GitHub
            </a>
          )}
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-14">

        {/* Hero */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badges */}
          <div className="flex items-center gap-2 flex-wrap mb-5">
            <StatusBadge status={project.status} color={project.accentColor} />
            <span className="tag tag-muted text-xs">{project.industry}</span>
            <span className="tag tag-muted text-xs">{project.year}</span>
            <span className="tag tag-muted text-xs">{project.role}</span>
          </div>

          <h1
            className="font-bold mb-4 leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--text-primary)' }}
          >
            {project.title}
          </h1>

          <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--text-secondary)', maxWidth: '640px' }}>
            {project.tagline}
          </p>

          {/* Stat bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.stats.map(s => (
              <div
                key={s.label}
                className="flex flex-col items-center py-4 px-3 rounded-xl text-center"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
              >
                <span className="font-mono-nums font-bold text-xl" style={{ color: project.accentColor }}>
                  {s.value}
                </span>
                <span className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="divider mb-14" />

        {/* Overview & Problem */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          <Section label="Overview">
            <div className="p-5 rounded-2xl h-full" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {project.overview}
              </p>
            </div>
          </Section>
          <Section label="The Problem" delay={0.1}>
            <div
              className="p-5 rounded-2xl h-full"
              style={{ background: `${project.accentColor}08`, border: `1px solid ${project.accentColor}20` }}
            >
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {project.problem}
              </p>
            </div>
          </Section>
        </div>

        {/* Use Cases */}
        <div className="mb-14">
          <Section label="Use Cases">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
              {project.useCases.map((uc, i) => (
                <motion.div
                  key={uc.title}
                  className="p-5 rounded-2xl"
                  style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <span className="text-2xl mb-3 block">{uc.icon}</span>
                  <h3 className="font-semibold text-sm mb-1.5" style={{ color: 'var(--text-primary)' }}>
                    {uc.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {uc.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>

        {/* Architecture */}
        <div className="mb-14">
          <Section label="Architecture">
            <div
              className="rounded-2xl p-6 mt-1"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
            >
              <div className="flex flex-col md:flex-row items-stretch gap-3">
                {project.architecture.map((layer, i) => (
                  <div key={layer.layer} className="flex md:flex-col items-start md:items-center gap-3 flex-1">
                    <div className="flex-1 w-full">
                      <p
                        className="text-xs font-bold mb-3 text-center"
                        style={{ color: layer.color, letterSpacing: '0.06em' }}
                      >
                        {layer.layer.toUpperCase()}
                      </p>
                      <div className="flex flex-col gap-2">
                        {layer.components.map(c => (
                          <div
                            key={c}
                            className="text-xs px-3 py-2 rounded-lg text-center"
                            style={{
                              background: layer.color + '12',
                              border: `1px solid ${layer.color}25`,
                              color: 'var(--text-secondary)',
                            }}
                          >
                            {c}
                          </div>
                        ))}
                      </div>
                    </div>
                    {i < project.architecture.length - 1 && (
                      <ArrowRight
                        size={16}
                        className="hidden md:block flex-shrink-0 mt-6"
                        style={{ color: 'var(--text-muted)' }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Section>
        </div>

        {/* AI Agents */}
        <div className="mb-14">
          <Section label="AI Agents Used">
            <div className="flex flex-col gap-3 mt-1">
              {project.aiAgents.map((agent, i) => (
                <motion.div
                  key={agent.name}
                  className="flex items-start gap-4 p-5 rounded-2xl"
                  style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 font-mono-nums font-bold text-sm"
                    style={{ background: agent.color + '18', color: agent.color, border: `1px solid ${agent.color}30` }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
                        {agent.name}
                      </h3>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{ background: agent.color + '12', color: agent.color, border: `1px solid ${agent.color}25` }}
                      >
                        {agent.model}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {agent.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>

        {/* Screenshots */}
        <div className="mb-14">
          <Section label="Screenshots">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-1">
              {project.screenshots.map(s => (
                <ScreenshotPlaceholder key={s.label} label={s.label} accentColor={project.accentColor} />
              ))}
            </div>
            {project.demo && (
              <p className="text-xs mt-3 text-center" style={{ color: 'var(--text-muted)' }}>
                View the live product at{' '}
                <a href={project.demo} target="_blank" rel="noopener noreferrer"
                  style={{ color: project.accentColor }}>
                  {project.demo.replace('https://', '')}
                </a>
              </p>
            )}
          </Section>
        </div>

        {/* Tech Stack + Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          <Section label="Tech Stack">
            <div className="p-5 rounded-2xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map(t => (
                  <div key={t.name} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg"
                    style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
                    <span className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>{t.name}</span>
                    <span className="text-xs px-1.5 py-0.5 rounded"
                      style={{ background: 'var(--accent-glow)', color: '#818cf8', fontSize: '0.6rem' }}>
                      {t.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Section>
          <Section label="Skills Demonstrated" delay={0.1}>
            <div className="p-5 rounded-2xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
              <div className="flex flex-wrap gap-2">
                {project.skills.map(s => (
                  <div key={s} className="flex items-center gap-1.5">
                    <CheckCircle size={11} style={{ color: project.accentColor }} />
                    <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        </div>

        {/* Learnings */}
        <div className="mb-14">
          <Section label="Key Learnings">
            <div className="flex flex-col gap-3 mt-1">
              {project.learnings.map((l, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl"
                  style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Lightbulb size={15} className="flex-shrink-0 mt-0.5" style={{ color: project.accentColor }} />
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{l}</p>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>

        <div className="divider mb-12" />

        {/* Bottom CTA */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => navigate(-1)}
            className="btn-secondary flex items-center gap-2"
          >
            <ArrowLeft size={14} />
            Back to Portfolio
          </button>
          <div className="flex items-center gap-3">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <GitFork size={14} />
                GitHub
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <ExternalLink size={14} />
                View Live Demo
              </a>
            )}
          </div>
        </motion.div>
      </main>
    </div>
  )
}
