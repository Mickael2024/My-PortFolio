import { motion } from 'motion/react'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'
import { ui } from '../data/i18n'
import { experiences } from '../data/experience'
import { projects } from '../data/projects'
import { useLang } from '../hooks/useLang'
import { fadeUp, stagger, viewportOnce } from '../lib/animations'

export function Experience() {
  const { t } = useLang()
  return (
    <Section id="experience" tone="paper">
      <SectionHeading kicker={t(ui.sections.experience.kicker)} title={t(ui.sections.experience.title)} />
      <motion.ol variants={stagger(0.05, 0.08)} initial="hidden" whileInView="show" viewport={viewportOnce} className="mt-14 divide-y divide-line border-y border-line">
        {experiences.map((e) => {
          const related = (e.projectSlugs ?? []).map((s) => projects.find((p) => p.slug === s)).filter((p): p is NonNullable<typeof p> => Boolean(p))
          return (
            <motion.li key={e.id} variants={fadeUp} className="grid gap-4 py-8 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-3">
                <p className="font-serif text-2xl text-ink">{e.period ?? <span className="text-base text-muted">{t(ui.experience.periodMissing)}</span>}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted">{t(ui.experience.types[e.type])}</p>
              </div>
              <div className="lg:col-span-9">
                <h3 className="font-serif text-2xl leading-tight text-ink sm:text-3xl">{t(e.title)}</h3>
                <p className="mt-1 text-sm font-medium text-forest">{e.organization}</p>
                <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-ink/80">{t(e.summary)}</p>
                {e.highlights.length > 0 && <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">{e.highlights.join(' · ')}</p>}
                {related.length > 0 && (
                  <p className="mt-4 text-sm">
                    {related.map((p, j) => (
                      <span key={p.slug}>
                        <a href="#projects" data-project={p.slug} className="link-underline text-sm">{p.name}</a>
                        {j < related.length - 1 && <span className="text-muted">, </span>}
                      </span>
                    ))}
                  </p>
                )}
              </div>
            </motion.li>
          )
        })}
      </motion.ol>
    </Section>
  )
}
