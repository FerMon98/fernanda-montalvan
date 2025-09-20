import { useTranslate } from '../i18n/useTranslate'

export default function CookiesPolicy() {
  const t = useTranslate()

  return (
    <main className="prose prose-invert max-w-3xl mx-auto py-12">
      <h1>{t('legal.cookies.title')}</h1>

      <p>{t('legal.cookies.intro')}</p>

      <h2>{t('legal.cookies.third.title')}</h2>
      <pre className="whitespace-pre-wrap text-sm leading-relaxed">
        {t('legal.cookies.third.list')}
      </pre>

      <h2>{t('legal.cookies.consent.title')}</h2>
      <p>{t('legal.cookies.consent.body')}</p>

      <h2>{t('legal.cookies.browser.title')}</h2>
      <p>{t('legal.cookies.browser.body')}</p>

      <h2>{t('legal.cookies.updates.title')}</h2>
      <p>{t('legal.cookies.updates.body')}</p>
    </main>
  )
}
