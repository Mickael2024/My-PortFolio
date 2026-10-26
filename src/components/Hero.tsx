import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { projects } from '../data/projects'
import { profile } from '../data/profile'
import { ui } from '../data/i18n'
import { useLang } from '../hooks/useLang'

export function Hero() {
  const { t } = useLang()
  const reduce = useReducedMotion()
  const title = t(profile.headline)
  // Met en valeur le dernier groupe de mots du titre.
  const [head, tail] = splitTitle(title)

  return (
    <section id="top" className="grain relative overflow-hidden bg-ivory pt-[72px]">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-12 lg:pb-28 lg:pt-24">
        {/* Colonne texte */}
        <div className="relative z-10 lg:col-span-7 lg:pr-8">
          <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="eyebrow">
            {t({ fr: 'Bonjour, je suis', en: 'Hello, I am' })}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-4 font-serif text-3xl text-ink sm:text-4xl"
          >
            {profile.firstName} <span className="text-forest">{profile.lastName}</span>
            <span className="mt-2 block font-sans text-base text-muted">{t(profile.jobTitle)}</span>
          </motion.p>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-serif text-[2.6rem] leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[4.4rem] xl:text-[5rem]"
          >
            {head} <span className="underline-ink italic text-forest">{tail}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-ink/80 sm:text-xl"
          >
            {t(profile.subheadline)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <a href="#projects" className="btn-solid">
              {t(ui.hero.explore)}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#education" className="link-underline text-base">
              {t(ui.hero.discover)}
            </a>
            {profile.cvUrl && (
              <a href={profile.cvUrl} download className="link-underline text-base">
                {t(ui.hero.cv)}
              </a>
            )}
          </motion.div>

          <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.9 }} className="mt-8 flex items-center gap-3" aria-label={t({ fr: 'Réseaux', en: 'Social links' })}>
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-forest hover:text-forest">
                <GithubIcon className="h-5 w-5" />
              </a>
            </li>
            {profile.linkedin && (
              <li>
                <a href={profile.linkedin} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-forest hover:text-forest">
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              </li>
            )}
            {profile.email && (
              <li>
                <a href={`mailto:${profile.email}`} aria-label="E-mail" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-forest hover:text-forest">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </a>
              </li>
            )}
            <li className="ml-2 text-sm text-muted">{profile.location}</li>
          </motion.ul>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-14 grid max-w-xl grid-cols-2 gap-6 border-t border-line pt-6 sm:grid-cols-3"
          >
            {[
              { k: { fr: 'Formation', en: 'Education' }, v: { fr: 'BTS Maintenance Industrielle, FTS Toamasina', en: 'BTS Industrial Maintenance, FTS Toamasina' } },
              { k: { fr: 'Projets présentés', en: 'Projects shown' }, v: { fr: `${projects.length} projets, dont ${projects.filter((p) => p.kind === 'professionnel').length} missions pour des clients et des équipes`, en: `${projects.length} projects, ${projects.filter((p) => p.kind === 'professionnel').length} of them commissions for clients and teams` } },
              { k: { fr: 'Terrain', en: 'Ground' }, v: { fr: 'Électricité · électronique · IoT · logiciel', en: 'Electricity · electronics · IoT · software' } },
            ].map((item) => (
              <div key={item.k.fr}>
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{t(item.k)}</dt>
                <dd className="mt-1.5 text-sm leading-snug text-ink">{t(item.v)}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Colonne photo, décalée */}
        <motion.figure
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:col-span-5 lg:mt-2 lg:max-w-none lg:self-start"
        >
          {/* Arche sable : la photo détourée se détache de la forme, le haut du casque dépasse */}
          <div className="relative mx-auto w-full max-w-[420px] lg:max-w-[460px]">
            <div className="absolute -left-8 bottom-10 hidden h-36 w-36 rounded-full border-[12px] border-forest/15 lg:block" aria-hidden="true" />
            <div className="absolute -right-6 top-16 hidden h-16 w-16 rounded-full bg-terracotta/25 lg:block" aria-hidden="true" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[2rem] bg-sand">
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-forest/10 to-transparent" aria-hidden="true" />
              <img
                src={profile.photoCutout}
                alt={profile.photoAlt}
                width={433}
                height={389}
                fetchPriority="high"
                className="absolute inset-x-0 bottom-0 w-full object-contain drop-shadow-[0_24px_40px_rgba(36,38,32,0.25)]"
              />
            </div>
          </div>
          <figcaption className="mt-5 flex items-center justify-center gap-3 text-sm text-muted lg:absolute lg:-bottom-4 lg:left-1/2 lg:mt-0 lg:-translate-x-1/2 lg:whitespace-nowrap lg:rounded-full lg:border lg:border-line lg:bg-paper lg:px-4 lg:py-2 lg:shadow-sm">
            <span className="h-2 w-2 rounded-full bg-forest" aria-hidden="true" />
            {t({ fr: 'Disponible pour de nouveaux projets', en: 'Available for new projects' })}
          </figcaption>
        </motion.figure>
      </div>

      {/* Détail graphique : phrase manuscrite verticale */}
      <p
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 rotate-90 font-serif text-sm italic tracking-wide text-muted/70 2xl:block"
      >
        {t({ fr: 'Toamasina, côte est de Madagascar', en: 'Toamasina, east coast of Madagascar' })}
      </p>
    </section>
  )
}

function splitTitle(title: string): [string, string] {
  const words = title.replace(/\.$/, '').split(' ')
  const n = Math.min(3, Math.max(1, Math.floor(words.length / 3)))
  return [words.slice(0, -n).join(' '), words.slice(-n).join(' ') + '.']
}
