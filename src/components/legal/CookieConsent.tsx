import { useConsent } from './useConsent'
import { Link } from 'react-router-dom'
import { useTranslate } from '../../i18n/useTranslate'

export default function CookieConsent() {
  const { consent, setConsent } = useConsent()
  const t = useTranslate()

  const COOKIE_BANNER_ENABLED = true
  if (!COOKIE_BANNER_ENABLED || consent !== 'unset') return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-black/80 backdrop-blur text-white p-4">
      <div className="mx-auto max-w-4xl flex flex-col sm:flex-row gap-3 items-center justify-between">
        <p className="text-sm">
          {t('cookie.banner.message')}{' '}
          <Link to="/#/cookies" className="underline">{t('legal.nav.cookies')}</Link>{' '}
          {t('and') ? t('and') : '·'}{' '}
          <Link to="/#/privacy" className="underline">{t('legal.nav.privacy')}</Link>.
        </p>
        <div className="flex gap-2">
          <button
            className="px-3 py-2 rounded bg-white/10 hover:bg-white/20"
            onClick={() => setConsent('rejected')}
          >
            {t('cookie.banner.reject')}
          </button>
          <button
            className="px-3 py-2 rounded bg-white text-black hover:opacity-90"
            onClick={() => setConsent('accepted')}
          >
            {t('cookie.banner.accept')}
          </button>
        </div>
      </div>
    </div>
  )
}
