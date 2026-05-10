import { motion } from 'framer-motion'
import { GraduationCap, Rocket, BriefcaseBusiness, Bot } from 'lucide-react'

const events = [
  {
    year: '2018',
    title: 'NIT Trichy',
    subtitle: 'B.Tech Graduate',
    description: 'Engineering foundation. Started obsessing over how products are built, not just what they do.',
    icon: GraduationCap,
    color: '#6366f1',
    tag: 'Education',
  },
  {
    year: '2019',
    title: 'OneCare — Product Analyst',
    subtitle: 'First PM role',
    description: 'Built an IoT healthcare app MVP in 45 days. Acquired 100+ paid users in the first week. Learned that speed > perfection.',
    icon: BriefcaseBusiness,
    color: '#ec4899',
    tag: 'Healthcare',
    metric: '100+ users · 45 days',
  },
  {
    year: '2021',
    title: 'DhagaKart — Founder',
    subtitle: 'Founded & led product',
    description: 'Built a B2B textile marketplace from scratch. Wore every hat — product, growth, strategy. Grew to ₹4.8Cr ARR. Learned what founders really lose sleep over.',
    icon: Rocket,
    color: '#f59e0b',
    tag: 'Founder · 0→1',
    metric: '₹4.8Cr ARR',
  },
  {
    year: '2022',
    title: 'K12 Techno — PM',
    subtitle: 'Product Manager',
    description: 'Built a fee management platform enabling ₹12Cr+ in transactions. Improved on-time payments 30% by redesigning the collection flow.',
    icon: BriefcaseBusiness,
    color: '#10b981',
    tag: 'EdTech · Fintech',
    metric: '₹12Cr+ transactions',
  },
  {
    year: '2023',
    title: 'Hero Vired — PM',
    subtitle: 'Product Manager',
    description: 'Led LMS migration and fintech integration. Improved engagement 44%, fee conversion 30%. Learned to move fast inside a structured org.',
    icon: BriefcaseBusiness,
    color: '#6366f1',
    tag: 'EdTech · Fintech',
    metric: '44% engagement ↑',
  },
  {
    year: '2024',
    title: 'AI Builder',
    subtitle: 'Side projects & tools',
    description: 'Started building AI agents — Feature Prioritization Agent, YouTube Summary Agent. Realized AI fluency is now a core PM skill.',
    icon: Bot,
    color: '#10b981',
    tag: 'AI · Automation',
    metric: '2 agents shipped',
  },
  {
    year: '2024',
    title: 'BITS Pilani — MBA',
    subtitle: 'Ongoing',
    description: 'Bringing rigor to intuition. The MBA is helping me frame business problems with sharper frameworks and financial thinking.',
    icon: GraduationCap,
    color: '#818cf8',
    tag: 'MBA · Ongoing',
  },
]

export default function CareerTimeline() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label mb-3">Journey</p>
          <h2
            className="font-bold mb-4"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', color: 'var(--text-primary)' }}
          >
            Founder first. PM always.
          </h2>
          <p
            className="mx-auto"
            style={{ maxWidth: '520px', color: 'var(--text-secondary)', fontSize: '1rem' }}
          >
            {"I didn't plan to become a PM. I became a founder, got obsessed with why users behaved the way they did, and realised that product thinking was what I'd been doing all along — just without the title."}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical rail */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: 'linear-gradient(to bottom, transparent, var(--border) 10%, var(--border) 90%, transparent)' }}
          />

          <div className="flex flex-col gap-10">
            {events.map((event, i) => {
              const Icon = event.icon
              const isRight = i % 2 === 0

              return (
                <motion.div
                  key={event.year + event.title}
                  className="relative flex items-start gap-0"
                  initial={{ opacity: 0, x: isRight ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-5%' }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                >
                  {/* Mobile / unified left layout */}
                  <div className="flex items-start gap-4 pl-0 md:hidden w-full">
                    {/* Dot */}
                    <div className="relative flex-shrink-0 ml-3 mt-1">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center z-10 relative"
                        style={{
                          background: event.color + '20',
                          border: `2px solid ${event.color}`,
                          boxShadow: `0 0 12px ${event.color}40`,
                        }}
                      >
                        <Icon size={11} style={{ color: event.color }} />
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className="flex-1 p-4 rounded-xl"
                      style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                    >
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="font-mono-nums text-xs font-semibold" style={{ color: event.color }}>
                          {event.year}
                        </span>
                        <span className="tag tag-muted" style={{ fontSize: '0.65rem' }}>{event.tag}</span>
                        {event.metric && (
                          <span className="font-mono-nums text-xs font-semibold" style={{ color: event.color }}>
                            {event.metric}
                          </span>
                        )}
                      </div>
                      <h3 className="font-semibold text-sm mb-0.5" style={{ color: 'var(--text-primary)' }}>
                        {event.title}
                      </h3>
                      <p className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>{event.subtitle}</p>
                      <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Desktop alternating layout */}
                  <div className="hidden md:flex w-full items-start gap-0">
                    {/* Left side */}
                    <div className={`w-1/2 pr-10 ${isRight ? '' : 'invisible'}`}>
                      {isRight && (
                        <div
                          className="p-5 rounded-xl ml-auto"
                          style={{
                            background: 'var(--surface)',
                            border: '1px solid var(--border)',
                            maxWidth: '340px',
                          }}
                        >
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <span className="font-mono-nums text-xs font-bold" style={{ color: event.color }}>
                              {event.year}
                            </span>
                            <span className="tag tag-muted" style={{ fontSize: '0.65rem' }}>{event.tag}</span>
                            {event.metric && (
                              <span className="font-mono-nums text-xs font-semibold" style={{ color: event.color }}>
                                {event.metric}
                              </span>
                            )}
                          </div>
                          <h3 className="font-semibold mb-1" style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                            {event.title}
                          </h3>
                          <p className="text-xs mb-2" style={{ color: 'var(--text-muted)' }}>{event.subtitle}</p>
                          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            {event.description}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Center dot */}
                    <div className="relative flex-shrink-0 w-0 flex items-center justify-center">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center z-10 -translate-x-1/2"
                        style={{
                          background: event.color + '20',
                          border: `2px solid ${event.color}`,
                          boxShadow: `0 0 16px ${event.color}40`,
                        }}
                      >
                        <Icon size={13} style={{ color: event.color }} />
                      </div>
                    </div>

                    {/* Right side */}
                    <div className={`w-1/2 pl-10 ${!isRight ? '' : 'invisible'}`}>
                      {!isRight && (
                        <div
                          className="p-5 rounded-xl"
                          style={{
                            background: 'var(--surface)',
                            border: '1px solid var(--border)',
                            maxWidth: '340px',
                          }}
                        >
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <span className="font-mono-nums text-xs font-bold" style={{ color: event.color }}>
                              {event.year}
                            </span>
                            <span className="tag tag-muted" style={{ fontSize: '0.65rem' }}>{event.tag}</span>
                            {event.metric && (
                              <span className="font-mono-nums text-xs font-semibold" style={{ color: event.color }}>
                                {event.metric}
                              </span>
                            )}
                          </div>
                          <h3 className="font-semibold mb-1" style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                            {event.title}
                          </h3>
                          <p className="text-xs mb-2" style={{ color: 'var(--text-muted)' }}>{event.subtitle}</p>
                          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            {event.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
