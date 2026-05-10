import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MetricsBar from './components/MetricsBar'
import CareerTimeline from './components/CareerTimeline'
import AIProjects from './components/AIProjects'
import Skills from './components/Skills'
import Writing from './components/Writing'
import Contact from './components/Contact'
import ProjectDetail from './pages/ProjectDetail'

function Footer() {
  return (
    <footer
      className="text-center py-8 px-6"
      style={{ borderTop: '1px solid var(--border)', color: 'var(--text-muted)', fontSize: '0.8rem' }}
    >
      <p>
        Built by Asmit Raj · {new Date().getFullYear()} ·{' '}
        <span style={{ color: 'var(--accent)' }}>React + Tailwind + Framer Motion</span>
      </p>
    </footer>
  )
}

function PortfolioHome() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Hero />
        <div className="divider" />
        <MetricsBar />
        <div className="divider" />
        <AIProjects />
        <div className="divider" />
        <CareerTimeline />
        <div className="divider" />
        <Skills />
        <div className="divider" />
        <Writing />
        <div className="divider" />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioHome />} />
      <Route path="/project/:id" element={<ProjectDetail />} />
    </Routes>
  )
}
