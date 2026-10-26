import { cn } from '../lib/cn'

/** Logo typographique : initiales en serif, point terracotta. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-baseline gap-0.5 font-serif text-2xl leading-none tracking-tight text-ink', className)}>
      JMN<span className="text-terracotta">.</span>
    </span>
  )
}
