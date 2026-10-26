import { motion } from 'motion/react'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'
import { ui } from '../data/i18n'
import { methodIntro, methodSteps } from '../data/method'
import { useLang } from '../hooks/useLang'
import { fadeUp, stagger, viewportOnce } from '../lib/animations'

export function Method() {
  const { t } = useLang()
  return (
    <Section id="method">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading kicker={t(ui.sections.method.kicker)} title={t(ui.sections.method.title)} description={t(methodIntro)} />
        </div>
        <motion.ol variants={stagger(0.05, 0.08)} initial="hidden" whileInView="show" viewport={viewportOnce} className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:col-span-8">
          {methodSteps.map((s, i) => (
            <motion.li key={s.id} variants={fadeUp} className="border-t border-line pt-5">
              <span className="font-serif text-3xl text-terracotta">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-2 font-serif text-xl text-ink">{t(s.title)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{t(s.description)}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </Section>
  )
}
