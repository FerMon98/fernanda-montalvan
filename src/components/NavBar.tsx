/**
 * @description Top navigation bar with theme switch and language switcher.
 * - Desktop: inline links + theme + language
 * - Mobile: hamburger reveals links in a slide-down panel; theme + language stay visible
 */
import { useState, useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import LanguageSwitcher from './LanguageSwitcher'
import { TranslatorContext } from '../i18n/TranslatorContext'

export type Theme = 'electric' | 'cyber'

interface NavBarProps {
  theme: Theme
  onToggleTheme: () => void
}

export default function NavBar({ theme, onToggleTheme }: NavBarProps) {
  const [open, setOpen] = useState(false)
  const { t } = useContext(TranslatorContext) // <- i18n translation function

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm transition ${isActive ? 'text-[var(--accent-app)]' : 'text-white/85 hover:text-white'}`

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--bg-app)]/80 backdrop-blur">
      {/* safe-area pad so it’s not glued to notches on iOS */}
      <div className="pt-[env(safe-area-inset-top)]" />

      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-6">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="./media/favi.png"
            alt={t('nav.brand')}
            className="h-8 w-8 rounded-full ring-1 ring-white/30 bg-black/60 object-contain"
          />{' '}
          |{' '}
          <span className="font-display text-lg text-[var(--text-app)]">{t('nav.brand')}</span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden items-center gap-6 md:flex">
          <NavLink to="/projects" className={linkClass}>
            {t('nav.projects')}
          </NavLink>
          {/* <NavLink to="/playground" className={linkClass}>
            {t('nav.playground')}
          </NavLink> */}
          <NavLink to="/resume" className={linkClass}>
            {t('nav.resume')}
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            {t('nav.contact')}
          </NavLink>
        </nav>

        {/* Right controls (always visible) */}
        <div className="flex items-center gap-2">
          <button
            aria-label={t('nav.toggleThemeLabel')}
            onClick={onToggleTheme}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/90 hover:bg-white/10"
          >
            {theme === 'electric' ? '⚡ Electric' : '💠 Cyber'}
          </button>

          <LanguageSwitcher />

          {/* Hamburger on mobile */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white md:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5" strokeWidth="2">
              {open ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile slide-down panel */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden border-t border-white/10 transition-[max-height] duration-300 ${
          open ? 'max-h-72' : 'max-h-0'
        }`}
      >
        <ul className="mx-auto max-w-6xl px-4 py-3 md:px-6">
          <li>
            <NavLink to="/projects" onClick={() => setOpen(false)} className={linkClass}>
              {t('nav.projects')}
            </NavLink>
          </li>
          {/*<li className="mt-2">
            <NavLink to="/playground" onClick={() => setOpen(false)} className={linkClass}>
              {t('nav.playground')}
            </NavLink>
          </li>*/}
          <li className="mt-2">
            <NavLink to="/resume" onClick={() => setOpen(false)} className={linkClass}>
              {t('nav.resume')}
            </NavLink>
          </li>
          <li className="mt-2">
            <NavLink to="/contact" onClick={() => setOpen(false)} className={linkClass}>
              {t('nav.contact')}
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}
