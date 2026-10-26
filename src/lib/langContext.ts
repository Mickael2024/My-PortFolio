import { createContext } from 'react'
import type { Bilingual, Lang } from '../data/types'

export interface LangContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  toggle: () => void
  t: (value: Bilingual) => string
}

export const LangContext = createContext<LangContextValue | null>(null)
