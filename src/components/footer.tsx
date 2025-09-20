/**
 * Footer component — with legal links + cookie preferences
 */
import { useTranslate } from '../i18n/useTranslate'
import { useConsent } from '../components/legal/useConsent'
import { Link } from 'react-router-dom'

export default function Footer() {
  const t = useTranslate()
  const { setConsent } = useConsent()

  return (
    <footer className="border-t border-white/10 bg-card py-8 text-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        {/* Left side */}
        <p className="opacity-80">
          © {new Date().getFullYear()} Fernanda Montalván. <br /> {t('footer.rights')}
        </p>

        {/* Middle: Legal links */}
        <nav aria-label="Legal">
          <ul className="flex flex-wrap items-center gap-4">
            <li>
              <Link to="/#/legal" className="hover:underline">
                {t('legal.nav.notice')}
              </Link>
            </li>
            <li>
              <Link to="/#/privacy" className="hover:underline">
                {t('legal.nav.privacy')}
              </Link>
            </li>
            <li>
              <Link to="/#/cookies" className="hover:underline">
                {t('legal.nav.cookies')}
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setConsent('unset')}
                className="underline decoration-dotted underline-offset-4 hover:decoration-solid"
                aria-label={t('footer.cookiePrefs')}
              >
                {t('footer.cookiePrefs')}
              </button>
            </li>
          </ul>
        </nav>

        {/* Right side: Social links */}
        <nav aria-label={t('footer.social')}>
          <ul className="flex gap-4">
            <li>
              <a
                href="https://github.com/FerMon98"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/fernanda-montalvan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:fernandaramo@outlook.es" className="hover:underline">
                Email
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
