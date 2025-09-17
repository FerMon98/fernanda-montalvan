/**
 * Footer component
 * Displays site credits, social links, and adapts to theme.
 * Uses i18n translations for accessibility and localization.
 */

import { useTranslate } from '../i18n/useTranslate';

export default function Footer() {
  const t = useTranslate();

  return (
    <footer className="mt-16 border-t border-white/10 bg-card py-8 text-sm">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 md:flex-row md:justify-between">
        {/* Left side */}
        <p className="opacity-80">
          © {new Date().getFullYear()} Fernanda Montalván. {t('footer.rights')}
        </p>

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
              <a
                href="mailto:fernandamontalvan.dev@gmail.com"
                className="hover:underline"
              >
                Email
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
