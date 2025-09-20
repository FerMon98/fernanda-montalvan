import { useTranslate } from '../i18n/useTranslate'

export default function PrivacyPolicy() {
  const t = useTranslate()
  const email = 'fernandaramo@outlook.es'
  const withVars = (s: string) => s.replace('{email}', email)

  return (
    <main className="prose prose-invert max-w-3xl mx-auto py-12">
      <h1>{t('legal.privacy.title')}</h1>

      <p><strong>{t('legal.privacy.controller')}</strong></p>
      <p><strong>{withVars(t('legal.privacy.contact'))}</strong></p>
      <p><strong>{t('legal.privacy.purpose')}</strong></p>

      <h2>{t('legal.privacy.data.title')}</h2>
      <pre className="whitespace-pre-wrap text-sm leading-relaxed">
        {t('legal.privacy.data.items')}
      </pre>

      <h2>{t('legal.privacy.bases.title')}</h2>
      <p>{t('legal.privacy.bases.body')}</p>

      <h2>{t('legal.privacy.recipients.title')}</h2>
      <pre className="whitespace-pre-wrap text-sm leading-relaxed">
        {t('legal.privacy.recipients.body')}
      </pre>

      <h2>{t('legal.privacy.storage.title')}</h2>
      <p>{t('legal.privacy.storage.body')}</p>

      <h2>{t('legal.privacy.rights.title')}</h2>
      <p>{withVars(t('legal.privacy.rights.body'))}</p>

      <h2>{t('legal.privacy.security.title')}</h2>
      <p>{t('legal.privacy.security.body')}</p>

      <h2>{t('legal.privacy.updates.title')}</h2>
      <p>{t('legal.privacy.updates.body')}</p>
    </main>
  )
}
