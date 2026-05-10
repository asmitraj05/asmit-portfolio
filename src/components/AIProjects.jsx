import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, GitBranch, Cpu, Workflow, Users, Search, ExternalLink } from 'lucide-react'

const agents = [
  {
    id: 'prioritization-agent',
    title: 'AI Feature Prioritization Agent',
    tagline: 'What if your backlog could prioritize itself?',
    description:
      'An LLM pipeline that ingests user feedback, analytics events, and business goals — then outputs a scored, rationale-backed backlog. Built with OpenAI, Claude, and n8n orchestration.',
    stack: ['OpenAI GPT-4', 'Claude', 'n8n', 'Notion API', 'Zapier'],
    flow: [
      { step: 'Inputs', items: ['User Feedback', 'Analytics Events', 'Business Goals', 'Tech Debt'] },
      { step: 'Orchestration', items: ['n8n Workflow', 'LLM Reasoning', 'ICE Scoring'] },
      { step: 'Outputs', items: ['Ranked Backlog', 'Decision Rationale', 'Notion / Linear'] },
    ],
    insight:
      "PM teams spend 15–20% of their time in prioritization theater. The frameworks exist. The data exists. The synthesis doesn't — until now.",
    color: '#10b981',
    glow: 'rgba(16,185,129,0.12)',
    icon: GitBranch,
    github: null,
  },
  {
    id: 'youtube-agent',
    title: 'YouTube Summary AI Agent',
    tagline: '60-minute talks → 90-second insight briefs.',
    description:
      'Watches YouTube transcripts, extracts key decisions and frameworks, and delivers a structured insight brief to Notion — automatically. Built for PMs who consume 10+ hours of content weekly.',
    stack: ['Claude API', 'YouTube Transcript API', 'n8n', 'Notion API'],
    flow: [
      { step: 'Input', items: ['YouTube URL', 'Transcript Pull', 'Context Config'] },
      { step: 'Process', items: ['Claude Summarization', 'Framework Extraction', 'Key Decisions'] },
      { step: 'Output', items: ['Notion Brief', 'Insight Tags', 'Shareable Summary'] },
    ],
    insight:
      'I watch 15+ industry talks per week. I was spending 30 minutes extracting insights from 60-minute videos. Now it takes 90 seconds.',
    color: '#818cf8',
    glow: 'rgba(129,140,248,0.12)',
    icon: Cpu,
    github: null,
  },
  {
    id: 'scaler-profile-matchmaker',
    title: 'Scaler Profile Matchmaker',
    tagline: 'AI-powered profile matching for career alignment.',
    description:
      'An AI-enabled matchmaking system that intelligently pairs candidate profiles with opportunities using semantic similarity and LLM reasoning — reducing manual screening time dramatically.',
    stack: ['AI / LLM', 'Semantic Search', 'Profile Scoring', 'Matching Engine'],
    flow: [
      { step: 'Input', items: ['Candidate Profiles', 'Job Requirements', 'Scoring Weights'] },
      { step: 'Process', items: ['Semantic Match', 'LLM Reasoning', 'Rank & Score'] },
      { step: 'Output', items: ['Ranked Matches', 'Match Rationale', 'Shortlist'] },
    ],
    insight:
      'Manual profile screening is the biggest bottleneck in hiring. This system lets AI do the first-pass filtering so humans focus on the final decision.',
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.12)',
    icon: Users,
    github: 'https://github.com/asmitraj05/ai-enabled-match-making',
    demo: 'https://scaler-profile-matchmaker.netlify.app/',
  },
  {
    id: 'ai-enabled-job-scrapping',
    title: 'AI-Enabled Job Scraper',
    tagline: 'Automated job discovery with intelligent extraction.',
    description:
      'An AI-powered job scraping pipeline that discovers, extracts, and structures job listings from across the web — normalizing inconsistent formats into clean, queryable data.',
    stack: ['Web Scraping', 'AI Extraction', 'Data Pipeline', 'Structured Output'],
    flow: [
      { step: 'Input', items: ['Target Sites', 'Search Params', 'Filters'] },
      { step: 'Process', items: ['Scrape & Fetch', 'AI Extraction', 'Dedup & Normalize'] },
      { step: 'Output', items: ['Structured Jobs', 'Clean Dataset', 'Export / API'] },
    ],
    insight:
      'Job data is everywhere and inconsistent. AI extraction turns messy HTML into structured, queryable intelligence — the foundation for any hiring product.',
    color: '#ec4899',
    glow: 'rgba(236,72,153,0.12)',
    icon: Search,
    github: 'https://github.com/asmitraj05/ai-enabled-job-scrapping',
  },
]

const tools = [
  { name: 'Claude', cat: 'LLM' },
  { name: 'OpenAI', cat: 'LLM' },
  { name: 'n8n', cat: 'Orchestration' },
  { name: 'Zapier', cat: 'Automation' },
  { name: 'Cursor', cat: 'Dev' },
  { name: 'Perplexity', cat: 'Research' },
  { name: 'Notion AI', cat: 'Productivity' },
  { name: 'Lovable', cat: 'Dev' },
  { name: 'Midjourney', cat: 'Design' },
  { name: 'Whisper', cat: 'Audio AI' },
]

function AgentCard({ agent, index }) {
  const Icon = agent.icon
  return (
    <motion.div
      className="card-base p-6 md:p-8 flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-5">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: agent.color + '18', border: `1px solid ${agent.color}30` }}
        >
          <Icon size={18} style={{ color: agent.color }} />
        </div>
        <div>
          <h3 className="font-semibold mb-1" style={{ color: 'var(--text-primary)', fontSize: '1.05rem' }}>
            {agent.title}
          </h3>
          <p className="text-sm font-medium" style={{ color: agent.color }}>
            {agent.tagline}
          </p>
        </div>
      </div>

      <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
        {agent.description}
      </p>

      {/* Flow diagram */}
      <div className="rounded-xl p-4 mb-5" style={{ background: 'var(--bg)', border: '1px solid var(--border-subtle)' }}>
        <p className="text-xs font-medium mb-3" style={{ color: 'var(--text-muted)', letterSpacing: '0.08em' }}>
          WORKFLOW
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          {agent.flow.map((stage, i) => (
            <div key={stage.step} className="flex items-center gap-3 flex-1">
              <div className="flex-1">
                <p className="text-xs font-semibold mb-1.5" style={{ color: agent.color }}>{stage.step}</p>
                <div className="flex flex-col gap-1">
                  {stage.items.map(item => (
                    <span
                      key={item}
                      className="text-xs px-2 py-0.5 rounded-md inline-block"
                      style={{ background: 'var(--surface)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              {i < agent.flow.length - 1 && (
                <ArrowRight size={14} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Insight quote */}
      <blockquote
        className="text-sm italic leading-relaxed mb-5 pl-3"
        style={{ color: 'var(--text-secondary)', borderLeft: `2px solid ${agent.color}` }}
      >
        {agent.insight}
      </blockquote>

      {/* Stack chips */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {agent.stack.map(tool => (
          <span
            key={tool}
            className="text-xs px-2.5 py-1 rounded-full font-medium"
            style={{
              background: agent.color + '12',
              color: agent.color,
              border: `1px solid ${agent.color}25`,
            }}
          >
            {tool}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="mt-auto flex items-center gap-4 flex-wrap">
        <Link
          to={`/project/${agent.id}`}
          className="flex items-center gap-1.5 text-sm font-semibold group/link"
          style={{ color: agent.color }}
        >
          View Details
          <ArrowRight size={13} className="transition-transform group-hover/link:translate-x-1" />
        </Link>
        {agent.demo && (
          <a
            href={agent.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium group/link"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={e => { e.currentTarget.style.color = agent.color }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)' }}
          >
            <ExternalLink size={13} />
            Live Demo
            <ArrowRight size={13} className="transition-transform group-hover/link:translate-x-1" />
          </a>
        )}
        {agent.github && (
          <a
            href={agent.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium group/link"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={e => { e.currentTarget.style.color = agent.color }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)' }}
          >
            GitHub
            <ArrowRight size={13} className="transition-transform group-hover/link:translate-x-1" />
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default function AIProjects() {
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
          <p className="section-label mb-3">AI Projects</p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2
              className="font-bold"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', color: 'var(--text-primary)' }}
            >
              I Build With AI, Not Around It
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '360px' }}>
              AI fluency is not a skill anymore. {"It's"} a multiplier.
            </p>
          </div>
        </motion.div>

        {/* Agent cards — 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {agents.map((agent, i) => (
            <AgentCard key={agent.id} agent={agent} index={i} />
          ))}
        </div>

        {/* AI Toolkit */}
        <motion.div
          className="rounded-2xl p-6"
          style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Workflow size={16} style={{ color: 'var(--accent)' }} />
            <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
              AI Toolkit
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {tools.map(tool => (
              <div
                key={tool.name}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg"
                style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}
              >
                <span className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>
                  {tool.name}
                </span>
                <span
                  className="text-xs px-1.5 py-0.5 rounded"
                  style={{ background: 'var(--accent-glow)', color: '#818cf8', fontSize: '0.6rem' }}
                >
                  {tool.cat}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
