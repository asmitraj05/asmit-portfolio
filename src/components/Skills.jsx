import { motion } from 'framer-motion'

const skillGroups = [
  {
    label: 'Product Strategy',
    color: '#6366f1',
    skills: ['0→1 Product Development', 'Roadmapping', 'OKR Design', 'Market Sizing', 'Competitive Analysis', 'Product Vision'],
  },
  {
    label: 'Execution',
    color: '#f59e0b',
    skills: ['Sprint Planning', 'Stakeholder Management', 'PRD Writing', 'User Stories', 'A/B Testing', 'Feature Flagging'],
  },
  {
    label: 'Analytics & Metrics',
    color: '#10b981',
    skills: ['Mixpanel', 'Amplitude', 'SQL (Basic)', 'Funnel Analysis', 'Cohort Analysis', 'North Star Metrics'],
  },
  {
    label: 'AI & Automation',
    color: '#818cf8',
    skills: ['OpenAI API', 'Claude API', 'n8n', 'Zapier', 'Prompt Engineering', 'LLM Orchestration', 'Cursor', 'Lovable'],
  },
  {
    label: 'Design & Research',
    color: '#ec4899',
    skills: ['Figma', 'Wireframing', 'User Interviews', 'Usability Testing', 'Jobs-to-be-Done', 'Persona Development'],
  },
  {
    label: 'Domain Expertise',
    color: '#f59e0b',
    skills: ['B2B Marketplaces', 'EdTech', 'Fintech', 'Healthcare IoT', 'NBFC APIs', 'Payment Gateways', 'LMS Architecture'],
  },
]

const frameworks = [
  {
    title: 'Prioritization',
    description: 'ICE + Strategic Fit hybrid. I weight impact on North Star, confidence in data, effort in sprints — then overlay business context before finalizing.',
    formula: 'Score = (Impact × Confidence) / Effort × Strategic Multiplier',
    color: '#6366f1',
  },
  {
    title: 'Opportunity Sizing',
    description: 'TAM → SAM → SOM in 10 minutes. I use market proxies + behavioral data before investing in bottom-up models.',
    formula: 'Validated SAM > theoretical TAM',
    color: '#f59e0b',
  },
  {
    title: 'Experiment Design',
    description: 'Pre-mortem before every A/B test. Define success metric, guardrail metric, minimum detectable effect, and what we do if it fails.',
    formula: 'Hypothesis → Metric → MDE → Decision Rule',
    color: '#10b981',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        {/* Skills section */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label mb-3">Skills & Tools</p>
          <h2
            className="font-bold mb-8"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', color: 'var(--text-primary)' }}
          >
            What I bring to the table
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillGroups.map((group, gi) => (
              <motion.div
                key={group.label}
                className="p-5 rounded-2xl"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: gi * 0.07 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: group.color }}
                  />
                  <p className="text-xs font-semibold" style={{ color: group.color, letterSpacing: '0.06em' }}>
                    {group.label.toUpperCase()}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map(skill => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-full transition-colors"
                      style={{
                        background: 'var(--surface-2)',
                        color: 'var(--text-secondary)',
                        border: '1px solid var(--border)',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Frameworks section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label mb-3">Product Thinking</p>
          <h2
            className="font-bold mb-8"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', color: 'var(--text-primary)' }}
          >
            How I make decisions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {frameworks.map((fw, i) => (
              <motion.div
                key={fw.title}
                className="p-5 rounded-2xl"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4"
                  style={{
                    background: fw.color + '15',
                    color: fw.color,
                    border: `1px solid ${fw.color}30`,
                  }}
                >
                  {fw.title}
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {fw.description}
                </p>
                <div
                  className="font-mono-nums text-xs px-3 py-2 rounded-lg"
                  style={{
                    background: 'var(--bg)',
                    color: fw.color,
                    border: `1px solid ${fw.color}20`,
                    wordBreak: 'break-word',
                  }}
                >
                  {fw.formula}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
