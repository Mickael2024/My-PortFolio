import type { ReactNode } from 'react'
import { cn } from '../lib/cn'

interface SectionProps {
  id: string
  children: ReactNode
  className?: string
  tone?: 'ivory' | 'paper' | 'forest'
}

export function Section({ id, children, className, tone = 'ivory' }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative scroll-mt-24 py-20 sm:py-28 lg:py-36',
        tone === 'paper' && 'bg-paper',
        tone === 'forest' && 'bg-forest text-ivory',
        className,
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">{children}</div>
    </section>
  )
}
