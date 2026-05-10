import { motion } from 'framer-motion'
import { ExternalLink, BookOpen } from 'lucide-react'

const insights = [
  {
    title: 'Why I stopped writing PRDs and started writing Bets',
    summary: 'A PRD describes what to build. A bet describes why it\'s worth the risk. After 5 years, I\'ve learned that the document matters less than the thinking behind it.',
    tags: ['Product Strategy', 'Frameworks'],
    readTime: '4 min',
    color: '#6366f1',
  },
  {
    title: 'The Marketplace PM Playbook: Lessons from DhagaKart',
    summary: 'Marketplace products fail at the same 3 points: liquidity chicken-and-egg, trust design, and pricing transparency. Here\'s how I thought about each one.',
    tags: ['Marketplace', 'Case Study'],
    readTime: '8 min',
    color: '#f59e0b',
  },
  {
    title: 'AI won\'t replace PMs. PMs who use AI will replace PMs who don\'t.',
    summary: 'How I use Claude, n8n, and structured prompts to run discovery, synthesis, and prioritization 10× faster than I did 18 months ago.',
    tags: ['AI', 'Productivity'],
    readTime: '5 min',
    color: '#10b981',
  },
]

export default function Writing() {
  return (
    <section id="thinking" className="section-padding" style={{ paddingTop: '0' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label mb-3">Writing</p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <h2
              className="font-bold"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', color: 'var(--text-primary)' }}
            >
              Product Insights
            </h2>
            <span
              className="flex items-center gap-1.5 text-sm font-medium"
              style={{ color: 'var(--text-muted)' }}
              title="External writing archive is not linked yet"
            >
              <BookOpen size={14} />
              More writing soon
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {insights.map((post, i) => (
            <motion.article
              key={post.title}
              className="card-base p-5 flex flex-col cursor-pointer group"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                {post.tags.map(tag => (
                  <span key={tag} className="tag tag-muted" style={{ fontSize: '0.65rem' }}>{tag}</span>
                ))}
                <span className="text-xs ml-auto" style={{ color: 'var(--text-muted)' }}>
                  {post.readTime}
                </span>
              </div>

              <h3
                className="font-semibold mb-3 leading-snug"
                style={{ fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: 1.45 }}
              >
                {post.title}
              </h3>

              <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>
                {post.summary}
              </p>

              <div
                className="mt-4 pt-3 flex items-center gap-1.5 text-xs font-medium"
                style={{ borderTop: '1px solid var(--border)', color: post.color }}
              >
                Read article
                <ExternalLink size={11} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
