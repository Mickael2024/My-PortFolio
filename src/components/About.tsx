import { motion } from 'motion/react'
import { Section } from './Section'
import { ui } from '../data/i18n'
import { about } from '../data/about'
import { useLang } from '../hooks/useLang'
import { fadeUp, stagger, viewportOnce } from '../lib/animations'

export function About() {
  const { t } = useLang()
  const [lead, ...rest] = about.paragraphs
  return (
    <Section id="about" tone="paper">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="lg:col-span-5">
          <p className="eyebrow">{t(ui.sections.about.kicker)}</p>
          <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl">{t(ui.sections.about.title)}</h2>
          <p className="mt-8 font-serif text-xl leading-relaxed text-ink/85 sm:text-2xl">{t(lead)}</p>
          <figure className="mt-10 hidden lg:block">
            <img src="/images/portrait-about.webp" alt={t({ fr: 'Portrait de Jean Mickael Ngeva en tenue de chantier', en: 'Portrait of Jean Mickael Ngeva in work gear' })} width={800} height={960} loading="lazy" className="aspect-[5/6] w-full rounded-[1.5rem] object-cover" />
            <figcaption className="mt-2 text-xs text-muted">{t({ fr: 'Sur le terrain, Toamasina.', en: 'In the field, Toamasina.' })}</figcaption>
          </figure>
          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-6">
            {about.facts.map((f) => (
              <div key={f.label.fr}>
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{t(f.label)}</dt>
                <dd className="mt-1 text-sm text-ink">{t(f.value)}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <div className="lg:col-span-7">
          <motion.div variants={stagger(0.1, 0.1)} initial="hidden" whileInView="show" viewport={viewportOnce} className="space-y-5 text-lg leading-relaxed text-ink/80">
            {rest.map((p, i) => (
              <motion.p key={i} variants={fadeUp}>
                {t(p)}
              </motion.p>
            ))}
          </motion.div>

          <motion.ol variants={stagger(0.1, 0.08)} initial="hidden" whileInView="show" viewport={viewportOnce} className="mt-12 divide-y divide-line border-y border-line">
            {about.strengths.map((s, i) => (
              <motion.li key={s.title.fr} variants={fadeUp} className="grid gap-2 py-6 sm:grid-cols-12 sm:gap-6">
                <span className="font-serif text-2xl text-terracotta sm:col-span-1">0{i + 1}</span>
                <h3 className="font-serif text-xl text-ink sm:col-span-4">{t(s.title)}</h3>
                <p className="text-[15px] leading-relaxed text-muted sm:col-span-7">{t(s.description)}</p>
              </motion.li>
            ))}
          </motion.ol>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{t(about.approach.kicker)}</p>
            <p className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1 font-serif text-2xl leading-snug text-ink">
              {about.approach.steps.map((s, i) => (
                <span key={s.fr} className="inline-flex items-baseline gap-x-3">
                  {t(s)}
                  {i < about.approach.steps.length - 1 && <span className="text-terracotta" aria-hidden="true">→</span>}
                </span>
              ))}
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
