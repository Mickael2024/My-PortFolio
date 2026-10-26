import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'
import { services, servicesIntro } from '../data/services'
import { useLang } from '../hooks/useLang'
import { fadeUp, stagger, viewportOnce } from '../lib/animations'

export function Services() {
  const { t } = useLang()
  return (
    <Section id="services">
      <SectionHeading
        kicker={t({ fr: 'Ce que je fais', en: 'What I do' })}
        title={t({ fr: 'Des solutions concrètes, du terrain à l’écran', en: 'Concrete solutions, from the field to the screen' })}
        description={t(servicesIntro)}
      />
      <motion.ol variants={stagger(0.05, 0.1)} initial="hidden" whileInView="show" viewport={viewportOnce} className="mt-14 grid gap-px overflow-hidden rounded-[1.75rem] border border-line bg-line md:grid-cols-3">
        {services.map((s, i) => (
          <motion.li key={s.id} variants={fadeUp} className="group flex flex-col bg-paper p-8 transition-colors duration-500 hover:bg-ivory lg:p-10">
            <span className="font-serif text-4xl text-terracotta">0{i + 1}</span>
            <h3 className="mt-6 font-serif text-2xl leading-tight text-ink lg:text-3xl">{t(s.title)}</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink/80">{t(s.description)}</p>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              <span className="font-semibold text-ink/70">{t({ fr: 'Exemples : ', en: 'Examples: ' })}</span>
              {t(s.example)}
            </p>
            <a href="#projects" className="link-underline mt-auto self-start pt-8 text-sm">
              {t({ fr: 'Voir les projets', en: 'See the projects' })} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </motion.li>
        ))}
      </motion.ol>
    </Section>
  )
}
