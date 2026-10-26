import { motion } from 'motion/react'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'
import { ui } from '../data/i18n'
import { expertise } from '../data/expertise'
import { projects } from '../data/projects'
import { useLang } from '../hooks/useLang'
import { fadeUp, stagger, viewportOnce } from '../lib/animations'

export function Expertise() {
  const { t } = useLang()
  return (
    <Section id="expertise" tone="paper">
      <SectionHeading kicker={t(ui.sections.expertise.kicker)} title={t(ui.sections.expertise.title)} description={t(expertise.intro)} />
      <motion.ol variants={stagger(0.05, 0.08)} initial="hidden" whileInView="show" viewport={viewportOnce} className="mt-16 divide-y divide-line border-y border-line">
        {expertise.domains.map((d, i) => {
          const related = d.projectSlugs.map((s) => projects.find((p) => p.slug === s)).filter((p): p is NonNullable<typeof p> => Boolean(p))
          return (
            <motion.li key={d.id} variants={fadeUp} className="grid gap-6 py-10 lg:grid-cols-12 lg:gap-10">
              <div className="flex items-start gap-5 lg:col-span-4">
                <span className="font-serif text-2xl text-terracotta">0{i + 1}</span>
                <h3 className="font-serif text-3xl leading-tight text-ink sm:text-4xl">{t(d.title)}</h3>
              </div>
              <div className="lg:col-span-8">
                <p className="text-lg leading-relaxed text-ink/80">{t(d.description)}</p>
                {related.length > 0 && (
                  <p className="mt-4 text-sm text-ink">
                    <span className="text-muted">{t(ui.expertise.relatedProjects)} : </span>
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
