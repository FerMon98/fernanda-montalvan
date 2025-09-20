import { useTranslate } from '../i18n/useTranslate'

export default function LegalNotice() {
  const t = useTranslate()
  const email = 'fernandaramo@outlook.es'

  const withVars = (s: string) => s.replace('{email}', email)

  return (
    <main className="prose prose-invert max-w-3xl mx-auto py-12">
      <h1>{t('legal.notice.title')}</h1>

      <p><strong>{t('legal.notice.responsible')}</strong></p>
      <p><strong>{t('legal.notice.address')}</strong></p>
      <p><strong>{withVars(t('legal.notice.contact'))}</strong></p>
      <p><strong>{t('legal.notice.activity')}</strong></p>

      <h2>{t('legal.notice.terms.title')}</h2>
      <p>{t('legal.notice.terms.body')}</p>

      <h2>{t('legal.notice.ipr.title')}</h2>
      <p>{t('legal.notice.ipr.body')}</p>

      <h2>{t('legal.notice.links.title')}</h2>
      <p>{t('legal.notice.links.body')}</p>

      <h2>{t('legal.notice.law.title')}</h2>
      <p>{t('legal.notice.law.body')}</p>
    </main>
  )
}
