/**
 * @file ContactPage.tsx
 * @description Contact form and links to social media profiles (no subscription).
 * Uses FormSubmit (https://formsubmit.co) so it works on GitHub Pages without a backend.
 * Includes basic validation, success/error states, and a honeypot to reduce spam.
*/
import { JSX, useContext, useState, useRef, useEffect } from 'react'
import { TranslatorContext } from '../i18n/TranslatorContext'

type FormState = 'idle' | 'sending' | 'success' | 'error'

export default function ContactPage(): JSX.Element {
  const { t } = useContext(TranslatorContext)
  const [status, setStatus] = useState<FormState>('idle')
  const [error, setError] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement | null>(null)

  /**
   * @description Assemble the action URL at runtime to avoid hardcoding the email in HTML.
   * Replace `your.name` and `domain.com` below with your address parts.
   */
  const [action, setAction] = useState<string>('')
  useEffect(() => {
    const user = 'fernandaramo' // <-- local-part
    const domain = 'outlook.es'     // <-- domain-part
    setAction(`https://formsubmit.co/${user}%40${domain}`)
  }, [])

  /**
   * @description Handles client-side validation and sends form via FormSubmit.
   */
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)

    const form = e.currentTarget
    const data = new FormData(form)

    // Honeypot: if filled, treat as success but do nothing server-side
    if ((data.get('_honey') as string)?.trim()) {
      setStatus('success')
      form.reset()
      return
    }

    // Basic validation
    const name = (data.get('name') as string)?.trim()
    const email = (data.get('email') as string)?.trim()
    const message = (data.get('message') as string)?.trim()
    if (!name || !email || !message) {
      setError('Please fill in all required fields.')
      setStatus('error')
      return
    }

    try {
      setStatus('sending')
      const res = await fetch(action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      const json = await res.json().catch(() => ({}))

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
        setError(json?.message || 'Submission failed.')
      }
    } catch {
      setStatus('error')
      setError('Network error.')
    }
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-display mb-2">{t('contact.title')}</h1>
      <p className="opacity-80 mb-8">{t('contact.subtitle')}</p>

      <form ref={formRef} onSubmit={onSubmit} action={action} method="POST" className="space-y-5 rounded-2xl border border-white/10 p-6">
        {/* Honeypot */}
        <label className="hidden" htmlFor="_honey">
          <input type="text" name="_honey" tabIndex={-1} autoComplete="off" />
        </label>

        {/* Anti-redirect settings (handled client-side, but these help if action posts directly) */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        {/* Example: after submit, go back to /#/contact (HashRouter) */}
        <input type="hidden" name="_next" value={`${location.origin}/#/contact?sent=1`} />

        {/* Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-white/85">{t('contact.nameLabel')}</label>
          <input id="name" name="name" required className="rounded-xl bg-white/5 border border-white/10 px-3 py-2" />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-white/85">{t('contact.emailLabel')}</label>
          <input id="email" name="email" type="email" required className="rounded-xl bg-white/5 border border-white/10 px-3 py-2" />
        </div>

        {/* Where */}
        <div className="flex flex-col gap-2">
          <label htmlFor="where" className="text-white/85">{t('contact.whereLabel')}</label>
          <input id="where" name="where" placeholder="Barcelona, ES" className="rounded-xl bg-white/5 border border-white/10 px-3 py-2" />
        </div>

        {/* Subject */}
        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className="text-white/85">{t('contact.subjectLabel')}</label>
          <input id="subject" name="subject" className="rounded-xl bg-white/5 border border-white/10 px-3 py-2" />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-white/85">{t('contact.messageLabel')}</label>
          <textarea id="message" name="message" required rows={6} className="rounded-xl bg-white/5 border border-white/10 px-3 py-2" />
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={status === 'sending' || !action}
            className="rounded-2xl px-5 py-2 border border-white/15 hover:bg-white/5 transition disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending…' : t('contact.submit')}
          </button>

          {status === 'success' && <span role="status" className="text-green-300">{t('contact.success')}</span>}
          {status === 'error' && <span role="alert" className="text-red-300">{error ?? t('contact.error')}</span>}
        </div>
      </form>
    </main>
  )
}
