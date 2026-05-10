import { motion } from 'framer-motion'
import { ArrowRight, Building2, TrendingUp, Zap, Brain } from 'lucide-react'

const projects = [
  {
    id: 'dhagakart',
    company: 'DhagaKart',
    year: '2021–2023',
    role: 'Founder & Product Head',
    industry: 'B2B Marketplace',
    headline: 'Built a textile marketplace from zero to ₹4.8Cr ARR.',
    description:
      'Led end-to-end product strategy for a B2B textile marketplace — RFQ systems, pricing engine, supplier workflows, and buyer conversion funnel.',
    metrics: ['₹4.8Cr ARR', '28% Conv ↑', '20% CTR ↑', '18% Churn ↓'],
    tags: ['0→1', 'Marketplace', 'Founder', 'Pricing Engine'],
    icon: Building2,
    accentColor: '#f59e0b',
    glow: 'rgba(245,158,11,0.12)',
    gradient: 'from-amber-500/10 to-transparent',
    coverBg: 'linear-gradient(135deg, rgba(245,158,11,0.08) 0%, rgba(10,10,11,0) 100%)',
    pinned: true,
  },
  {
    id: 'hero-vired',
    company: 'Hero Vired',
    year: '2023–2024',
    role: 'Product Manager',
    industry: 'EdTech / Fintech',
    headline: '44% engagement lift through LMS migration + fintech integration.',
    description:
      'Drove the migration from Moodle to a React-based LMS, integrated NBFC APIs for fintech onboarding, and redesigned the fee conversion flow.',
    metrics: ['44% Engagement ↑', '30% Fee Conv ↑', 'NBFC APIs', 'React LMS'],
    tags: ['LMS Migration', 'EdTech', 'Fintech', 'NBFC APIs'],
    icon: TrendingUp,
    accentColor: '#6366f1',
    glow: 'rgba(99,102,241,0.12)',
    gradient: 'from-indigo-500/10 to-transparent',
    coverBg: 'linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(10,10,11,0) 100%)',
    pinned: true,
  },
  {
    id: 'ai-prioritization-agent',
    company: 'AI Project',
    year: '2024',
    role: 'Builder / PM',
    industry: 'AI / Automation',
    headline: 'An AI agent that prioritizes your backlog — automatically.',
    description:
      'Built an LLM-powered feature prioritization agent using OpenAI, Claude, and n8n. Processes user feedback, analytics, and business goals to output scored backlog with rationale.',
    metrics: ['OpenAI + Claude', 'n8n Orchestration', 'ICE Scoring', 'Notion Output'],
    tags: ['AI Agent', 'LLM', 'Automation', 'n8n'],
    icon: Brain,
    accentColor: '#10b981',
    glow: 'rgba(16,185,129,0.12)',
    gradient: 'from-emerald-500/10 to-transparent',
    coverBg: 'linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(10,10,11,0) 100%)',
    pinned: true,
  },
  {
    id: 'k12',
    company: 'K12 Techno',
    year: '2022–2023',
    role: 'Product Manager',
    industry: 'EdTech / Fintech',
    headline: '₹12Cr+ in fee transactions. 30% more on-time payments.',
    description:
      'Built and scaled a school fee management platform enabling digital payments and improving collection rates across hundreds of institutions.',
    metrics: ['₹12Cr+ Transactions', '30% On-time ↑', '22% MAU ↑', 'Multi-school'],
    tags: ['Fintech', 'EdTech', 'Payments', 'Platform'],
    icon: Zap,
    accentColor: '#ec4899',
    glow: 'rgba(236,72,153,0.12)',
    gradient: 'from-pink-500/10 to-transparent',
    coverBg: 'linear-gradient(135deg, rgba(236,72,153,0.08) 0%, rgba(10,10,11,0) 100%)',
  },
]

function ProjectCard({ project, index }) {
  const Icon = project.icon
  return (
    <motion.article
      id={`case-study-${project.id}`}
      className="card-base overflow-hidden flex flex-col group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      {/* Cover */}
      <div
        className="h-36 flex items-center justify-center relative overflow-hidden"
        style={{ background: project.coverBg }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `radial-gradient(circle at center, ${project.glow} 0%, transparent 70%)` }}
        />
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center"
          style={{
            background: project.accentColor + '18',
            border: `1px solid ${project.accentColor}30`,
            boxShadow: `0 0 30px ${project.glow}`,
          }}
        >
          <Icon size={24} style={{ color: project.accentColor }} />
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        {/* Meta */}
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="tag tag-muted" style={{ fontSize: '0.7rem' }}>{project.industry}</span>
          <span className="tag tag-muted" style={{ fontSize: '0.7rem' }}>{project.year}</span>
          {project.pinned && (
            <span className="tag tag-accent" style={{ fontSize: '0.7rem' }}>Featured</span>
          )}
        </div>

        {/* Headline */}
        <h3
          className="font-semibold mb-2 leading-snug"
          style={{ fontSize: '1.05rem', color: 'var(--text-primary)' }}
        >
          {project.headline}
        </h3>
        <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--text-secondary)' }}>
          {project.description}
        </p>

        {/* Metrics chips */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.metrics.map(m => (
            <span
              key={m}
              className="font-mono-nums text-xs px-2 py-0.5 rounded-md font-medium"
              style={{
                background: project.accentColor + '15',
                color: project.accentColor,
                border: `1px solid ${project.accentColor}25`,
              }}
            >
              {m}
            </span>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map(t => (
            <span key={t} className="tag tag-muted" style={{ fontSize: '0.68rem' }}>{t}</span>
          ))}
        </div>

        {/* CTA */}
        <a
          href={`#case-study-${project.id}`}
          className="flex items-center gap-1.5 text-sm font-medium group/link mt-auto"
          style={{ color: project.accentColor }}
        >
          Read Case Study
          <ArrowRight
            size={14}
            className="transition-transform group-hover/link:translate-x-1"
          />
        </a>
      </div>
    </motion.article>
  )
}

export default function FeaturedWork() {
  return (
    <section id="work" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label mb-3">Product Work</p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2
              className="font-bold"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', color: 'var(--text-primary)' }}
            >
              Case Studies
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '400px' }}>
              Each project is a bet I made, a problem I framed, and a result I owned.
            </p>
          </div>
        </motion.div>

        {/* Featured 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {projects.filter(p => p.pinned).map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* Other projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.filter(p => !p.pinned).map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i + 3} />
          ))}
        </div>
      </div>
    </section>
  )
}
