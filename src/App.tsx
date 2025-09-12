/**
 * @description App shell: LanguageProvider, NavBar, and route table (no Router here).
 */
import { useState } from 'react'
import './Styles/App.css'
import NavBar from './components/NavBar'
import LanguageProvider from './i18n/LanguageProvider'
import { Routes, Route } from 'react-router-dom'
import {JSX} from 'react'

// Pages
import HomePage from './Views/Homepage'
import ProjectsPage from './Views/ProjectsPage'
import ProjectDetailPage from './Views/ProjectDetailPage'
import PlaygroundPage from './Views/PlaygroundPage'
import ResumePage from './Views/ResumePage'
import ContactPage from './Views/ContactPage'

export default function App(): JSX.Element {
  const [theme, setTheme] = useState<'electric' | 'cyber'>('electric')

  /**
   * Toggles theme tokens between "electric" and "cyber".
   */
  const toggleTheme = (): void => {
    const root = document.documentElement
    const electric = theme === 'electric'
    root.style.setProperty('--bg-app', electric ? 'var(--color-bg-cyber)' : 'var(--color-bg-electric)')
    root.style.setProperty('--text-app', electric ? 'var(--color-text-cyber)' : 'var(--color-text-electric)')
    root.style.setProperty('--card-app', electric ? 'var(--color-card-cyber)' : 'var(--color-card-electric)')
    root.style.setProperty('--accent-app', electric ? 'var(--color-cyber)' : 'var(--color-electric)')
    setTheme(electric ? 'cyber' : 'electric')
  }

  return (
    <LanguageProvider>
      <div className="min-h-dvh">
        <NavBar theme={theme} onToggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/playground" element={<PlaygroundPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </LanguageProvider>
  )
}