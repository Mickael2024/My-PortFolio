import { motion } from 'motion/react'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'
import { ui } from '../data/i18n'
import { education } from '../data/education'
import { useLang } from '../hooks/useLang'
import { fadeUp, stagger, viewportOnce } from '../lib/animations'

export function Education() {
  const { t } = useLang()
  const confirmed = education.domains.filter((d) => d.confirmed)
  const toValidate = education.domains.filter((d) => !d.confirmed)

  return (
    <Section id="education">
      <SectionHeading kicker={t(ui.sections.education.kicker)} title={t(ui.sections.education.title)} description={t(education.intro)} />

      {/* Ouverture façon magazine */}
      <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-12">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="lg:col-span-4">
          <p className="font-serif text-[5.5rem] leading-none tracking-tight text-forest sm:text-[7rem]">
            2025<span className="text-terracotta">–</span>26
          </p>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            {t({ fr: 'Année académique du mémoire', en: 'Academic year of the thesis' })}
          </p>
          <dl className="mt-10 space-y-5 border-t border-line pt-6">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{t({ fr: 'École', en: 'School' })}</dt>
              <dd className="mt-1 text-ink">{education.schoolFull}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{t({ fr: 'Formation', en: 'Programme' })}</dt>
              <dd className="mt-1 text-ink">{t(education.program)}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{t({ fr: 'Années de formation', en: 'Study years' })}</dt>
              <dd className="mt-1 text-ink">{education.years ?? <span className="text-muted">{t(ui.education.yearsMissing)}</span>}</dd>
            </div>
            {education.keyFacts.map((f) => (
              <div key={f.label.fr}>
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{t(f.label)}</dt>
                <dd className="mt-1 text-ink">{t(f.value)}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <div className="lg:col-span-8">
          {education.diploma && (
            <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="border-l-2 border-terracotta pl-5 font-serif text-2xl leading-relaxed text-ink/85 sm:text-3xl">
              {education.diploma}
            </motion.p>
          )}
        </div>
      </div>

      {/* Domaines confirmés : entrées éditoriales numérotées */}
      <div className="mt-20 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <h3 className="font-serif text-3xl leading-tight text-ink">{t(education.confirmedTitle)}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {t({ fr: 'Chaque domaine ci-contre est illustré par un travail réel, visible dans les projets.', en: 'Each domain here is backed by real work, visible in the projects.' })}
          </p>
        </div>
        <motion.ol variants={stagger(0.05, 0.1)} initial="hidden" whileInView="show" viewport={viewportOnce} className="divide-y divide-line border-y border-line lg:col-span-9">
          {confirmed.map((d, i) => (
            <motion.li key={d.id} variants={fadeUp} className="grid gap-5 py-8 md:grid-cols-12 md:gap-8">
              <span className="font-serif text-3xl text-terracotta md:col-span-1">0{i + 1}</span>
              <div className="md:col-span-11">
                <h4 className="font-serif text-2xl text-ink">{t(d.title)}</h4>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink/80">{t(d.description)}</p>
                <div className="mt-5 grid gap-5 text-sm sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{t(ui.education.knowledge)}</p>
                    <ul className="mt-2 space-y-1 text-ink/80">{d.knowledge.map((k) => <li key={k}>{k}</li>)}</ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{t(ui.education.practice)}</p>
                    <ul className="mt-2 space-y-1 text-ink/80">{d.practice.map((k) => <li key={k}>{k}</li>)}</ul>
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>

      {/* Ce que la formation apporte : bandeau vert */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="mt-20 rounded-[2rem] bg-forest px-7 py-12 text-ivory sm:px-12 lg:px-16 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow text-ivory/70">{t(ui.education.bringsToday)}</p>
            <h3 className="mt-5 font-serif text-3xl leading-tight sm:text-4xl">{t(ui.education.bridgeTitle)}</h3>
          </div>
          <ol className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
            {education.bridge.map((step, i) => (
              <li key={i} className="border-t border-ivory/20 pt-5">
                <span className="font-serif text-2xl text-terracotta">0{i + 1}</span>
                <p className="mt-2 font-serif text-xl">{t(step.title)}</p>
                <p className="mt-2 text-sm leading-relaxed text-ivory/75">{t(step.description)}</p>
              </li>
            ))}
          </ol>
        </div>
        <ul className="mt-12 grid gap-6 border-t border-ivory/20 pt-8 md:grid-cols-3">
          {education.bringsToday.map((b, i) => (
            <li key={i} className="text-[15px] leading-relaxed text-ivory/85">{t(b)}</li>
          ))}
        </ul>
      </motion.div>

      {/* Note : matières à préciser */}
      {toValidate.length > 0 && (
        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted">
          <span className="font-semibold text-ink">{t(education.toValidateTitle)} — </span>
          {t(education.toValidateHint)}{' '}
          {toValidate.map((d) => t(d.title)).join(' · ')}.
        </p>
      )}
    </Section>
  )
}
