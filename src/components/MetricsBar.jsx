import { useRef, useEffect } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'

const metrics = [
  { value: 4.8, prefix: '₹', suffix: 'Cr', label: 'ARR Built', sub: 'DhagaKart', color: 'var(--amber)' },
  { value: 12, prefix: '₹', suffix: 'Cr+', label: 'Transactions', sub: 'K12 Techno', color: 'var(--amber)' },
  { value: 44, prefix: '', suffix: '%', label: 'Engagement ↑', sub: 'Hero Vired', color: '#10b981' },
  { value: 28, prefix: '', suffix: '%', label: 'Conversion ↑', sub: 'DhagaKart', color: '#10b981' },
  { value: 30, prefix: '', suffix: '%', label: 'Fee Payment ↑', sub: 'K12 Techno', color: '#10b981' },
  { value: 45, prefix: '', suffix: 'd', label: 'MVP Shipped', sub: 'OneCare', color: '#6366f1' },
  { value: 100, prefix: '', suffix: '+', label: 'Paid Users W1', sub: 'OneCare', color: '#6366f1' },
  { value: 5, prefix: '', suffix: '+', label: 'Years PM', sub: 'Multi-industry', color: '#6366f1' },
]

function Counter({ value, prefix, suffix, color, inView }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, v => {
    if (suffix === 'Cr' || suffix === 'Cr+') return v.toFixed(1)
    return Math.round(v)
  })

  useEffect(() => {
    if (!inView) return
    const controls = animate(count, value, { duration: 1.6, ease: 'easeOut', delay: 0.2 })
    return () => controls.stop()
  }, [inView, count, value])

  return (
    <span className="font-mono-nums font-bold" style={{ color, fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}

export default function MetricsBar() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section ref={ref} className="section-padding" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label mb-2">Product Impact</p>
          <h2 className="font-bold" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--text-primary)' }}>
            Measured in outcomes, not activities
          </h2>
        </motion.div>

        <div
          className="rounded-2xl p-6 md:p-8"
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            boxShadow: '0 0 60px rgba(99,102,241,0.06)',
          }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px" style={{ background: 'var(--border)' }}>
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                className="flex flex-col items-center text-center p-5 md:p-6"
                style={{ background: 'var(--surface)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <Counter
                  value={m.value}
                  prefix={m.prefix}
                  suffix={m.suffix}
                  color={m.color}
                  inView={inView}
                />
                <span
                  className="font-medium mt-1 text-sm"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {m.label}
                </span>
                <span
                  className="tag tag-muted mt-2"
                  style={{ fontSize: '0.65rem' }}
                >
                  {m.sub}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
