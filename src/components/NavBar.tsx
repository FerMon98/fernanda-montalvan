/**
 * @description Top navigation bar with theme switch and language switcher.
*/

import { NavLink } from 'react-router-dom'
import LanguageSwitcher from './LanguageSwitcher'

export type Theme = 'electric' | 'cyber'

/**
 * Props for NavBar component.
 */
interface NavBarProps {
  /** Current theme token */
  theme: Theme
  /** Toggle theme handler */
  onToggleTheme: () => void
}

/**
 * Renders the main navigation bar with active link styles.
 */
export default function NavBar({ theme, onToggleTheme }: NavBarProps) {
  return (
    <header className="sticky top-0 z-50 bg-[var(--bg-app)]/80 backdrop-blur border-b border-white/10">
      <nav className="mx-auto max-w-5xl px-6 h-14 flex items-center gap-6">
        <NavLink to="/" className="font-display text-lg">
          <img src="./media/favi.png" alt="Fernanda Montalvan" className="inline-block w-10 h-8" />
          <span className="opacity-70">·</span>Portfolio
        </NavLink>

        <div className="ml-auto flex items-center gap-4">
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `text-sm ${isActive ? 'underline underline-offset-4' : 'opacity-80 hover:opacity-100'}`
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/playground"
            className={({ isActive }) =>
              `text-sm ${isActive ? 'underline underline-offset-4' : 'opacity-80 hover:opacity-100'}`
            }
          >
            Playground
          </NavLink>

          <NavLink
            to="/resume"
            className={({ isActive }) =>
              `text-sm ${isActive ? 'underline underline-offset-4' : 'opacity-80 hover:opacity-100'}`
            }
          >
            Resume
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-sm ${isActive ? 'underline underline-offset-4' : 'opacity-80 hover:opacity-100'}`
            }
          >
            Contact
          </NavLink>

          <button
            aria-label="Toggle theme"
            onClick={onToggleTheme}
            className="rounded-xl px-3 py-1 text-sm border border-white/10 hover:bg-white/5"
          >
            {theme === 'electric' ? '⚡ Electric' : '💠 Cyber'}
          </button>

          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  )
}
