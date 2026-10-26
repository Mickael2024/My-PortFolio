import { motion } from 'motion/react'
import { fadeUp, viewportOnce } from '../lib/animations'
import { cn } from '../lib/cn'

interface SectionHeadingProps {
  kicker: string
  title: string
  description?: string
  className?: string
  light?: boolean
}

export function SectionHeading({ kicker, title, description, className, light }: SectionHeadingProps) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className={cn('max-w-3xl', className)}>
      <p className={cn('eyebrow', light && 'text-ivory/70')}>{kicker}</p>
      <h2 className={cn('mt-5 font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl', light ? 'text-ivory' : 'text-ink')}>
        {title}
      </h2>
      {description && (
        <p className={cn('mt-6 text-lg leading-relaxed', light ? 'text-ivory/80' : 'text-muted')}>{description}</p>
      )}
    </motion.div>
  )
}
