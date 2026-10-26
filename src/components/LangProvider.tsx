import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Lang } from '../data/types'
import { LangContext, type LangContextValue } from '../lib/langContext'

const STORAGE_KEY = 'portfolio-lang'

function readInitialLang(): Lang {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'fr' || stored === 'en') return stored
  } catch {
    /* stockage indisponible */
  }
  return 'fr'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang)

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo<LangContextValue>(
    () => ({
      lang,
      setLang,
      toggle: () => setLang(lang === 'fr' ? 'en' : 'fr'),
      t: (v) => v[lang],
    }),
    [lang, setLang],
  )

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}
