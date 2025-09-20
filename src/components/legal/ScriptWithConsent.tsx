// src/components/legal/ScriptWithConsent.tsx
import { useEffect } from 'react'
import { useConsent } from './useConsent'

type Props = { src: string; id?: string; async?: boolean; defer?: boolean }
export default function ScriptWithConsent({ src, id, async = true, defer = true }: Props) {
  const { consent } = useConsent()
  useEffect(() => {
    if (consent !== 'accepted') return
    const s = document.createElement('script')
    s.src = src; s.async = async; s.defer = defer; if (id) s.id = id
    document.head.appendChild(s)
    return () => { s.remove() }
  }, [consent, src, async, defer, id])
  return null
}
