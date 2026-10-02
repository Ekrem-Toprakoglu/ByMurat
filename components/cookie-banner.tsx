'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'bymurat-cookie-consent'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!window.localStorage.getItem(STORAGE_KEY)) setVisible(true)
  }, [])

  const decide = (value: 'accepted' | 'declined') => {
    window.localStorage.setItem(STORAGE_KEY, value)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner" aria-live="polite" aria-label="Cookie-Hinweis">
      <div className="cookie-banner-inner">
        <p>
          Diese Website nutzt technisch notwendige Cookies sowie – wenn du zustimmst – anonymisierte Statistik-Cookies
          (Vercel Analytics), um die Nutzung besser zu verstehen. Details findest du in der{' '}
          <a href="/datenschutz">Datenschutzerklärung</a>.
        </p>
        <div className="cookie-banner-actions">
          <button type="button" className="cookie-btn cookie-btn-ghost" onClick={() => decide('declined')}>
            Nur Notwendige
          </button>
          <button type="button" className="cookie-btn cookie-btn-primary" onClick={() => decide('accepted')}>
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  )
}
