import { useContext } from 'react'
import { LangContext, type LangContextValue } from '../lib/langContext'

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang doit être utilisé dans LangProvider')
  return ctx
}
