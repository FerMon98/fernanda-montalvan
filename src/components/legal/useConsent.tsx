// src/components/legal/useConsent.tsx
import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Consent = 'accepted' | 'rejected' | 'unset'

type ConsentValue = {
  consent: Consent
  setConsent: (v: Consent) => void
}

const ConsentCtx = createContext<ConsentValue | null>(null)

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<Consent>(() => {
    const saved = localStorage.getItem('cookieConsent') as Consent | null
    return saved ?? 'unset'
  })

  useEffect(() => {
    localStorage.setItem('cookieConsent', consent)
  }, [consent])

  return (
    <ConsentCtx.Provider value={{ consent, setConsent }}>
      {children}
    </ConsentCtx.Provider>
  )
}

export const useConsent = () => {
  const ctx = useContext(ConsentCtx)
  if (!ctx) throw new Error('useConsent must be used within ConsentProvider')
  return ctx
}
