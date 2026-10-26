import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, Search } from 'lucide-react'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'
import { ProjectModal } from './ProjectModal'
import { ui } from '../data/i18n'
import { projects, projectCategories } from '../data/projects'
import type { Project, ProjectCategory } from '../data/types'
import { useLang } from '../hooks/useLang'
import { fadeUp, stagger, viewportOnce } from '../lib/animations'
import { cn } from '../lib/cn'

type Filter = ProjectCategory | 'all'

export function Projects() {
  const { t } = useLang()
  const [filter, setFilter] = useState<Filter>('all')
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<Project | null>(null)

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>('[data-project]')
      if (!target) return
      const p = projects.find((x) => x.slug === target.dataset.project)
      if (p) {
        e.preventDefault()
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
        setSelected(p)
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return projects.filter((p) => {
      if (filter !== 'all' && !p.categories.includes(filter)) return false
      if (!q) return true
      return [p.name, p.tagline, p.context, p.role].join(' ').toLowerCase().includes(q)
    })
  }, [filter, query])

  const featured = filtered.filter((p) => p.featured)
  const others = filtered.filter((p) => !p.featured)

  return (
    <Section id="projects">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading kicker={t(ui.sections.projects.kicker)} title={t(ui.sections.projects.title)} />
        <label className="relative block w-full lg:max-w-xs">
          <span className="sr-only">{t(ui.projects.search)}</span>
          <Search className="pointer-events-none absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t(ui.projects.search)}
            className="h-11 w-full border-b border-ink/30 bg-transparent pl-7 text-base text-ink placeholder:text-muted focus:border-forest focus:outline-none"
          />
        </label>
      </div>

      <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-b border-line pb-4" role="tablist" aria-label="Filtres">
        {(['all', ...projectCategories] as Filter[]).map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={filter === c}
            onClick={() => setFilter(c)}
            className={cn('relative pb-1 text-sm transition-colors duration-300', filter === c ? 'text-ink' : 'text-muted hover:text-ink')}
          >
            {c === 'all' ? t(ui.projects.all) : t(ui.categories[c])}
            {filter === c && <motion.span layoutId="filter-active" className="absolute inset-x-0 -bottom-[17px] h-px bg-terracotta" />}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={`${filter}-${query}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
          {featured.length > 0 && (
            <motion.div variants={stagger(0.05, 0.1)} initial="hidden" whileInView="show" viewport={viewportOnce} className="mt-6 divide-y divide-line">
              {featured.map((p, i) => (
                <FeaturedEntry key={p.slug} project={p} index={i} onOpen={() => setSelected(p)} />
              ))}
            </motion.div>
          )}

          {others.length > 0 && (
            <div className={featured.length > 0 ? 'mt-20' : 'mt-10'}>
              {featured.length > 0 && <p className="eyebrow">{t({ fr: 'Autres réalisations', en: 'More work' })}</p>}
              <motion.ol variants={stagger(0.05, 0.05)} initial="hidden" whileInView="show" viewport={viewportOnce} className="mt-6 divide-y divide-line border-y border-line">
                {others.map((p, i) => (
                  <motion.li key={p.slug} variants={fadeUp}>
                    <button
                      type="button"
                      onClick={() => setSelected(p)}
                      className="group grid w-full gap-2 py-5 text-left transition-colors duration-300 hover:bg-sand/60 sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:px-3"
                    >
                      <span className="font-serif text-lg text-terracotta sm:col-span-1">{String(i + 1).padStart(2, '0')}</span>
                      <span className="font-serif text-2xl text-ink sm:col-span-4">{p.name}</span>
                      <span className="text-sm leading-relaxed text-muted sm:col-span-5">{p.tagline}</span>
                      <span className="flex items-center justify-between gap-3 text-xs text-muted sm:col-span-2 sm:justify-end">
                        {t(ui.status[p.status])}
                        <ArrowUpRight className="h-4 w-4 text-ink transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                      </span>
                    </button>
                  </motion.li>
                ))}
              </motion.ol>
            </div>
          )}

          {filtered.length === 0 && <p className="mt-16 text-center text-muted">{t(ui.projects.empty)}</p>}
        </motion.div>
      </AnimatePresence>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </Section>
  )
}

/** Projet phare : grande composition typographique, sans image. */
function FeaturedEntry({ project, index, onOpen }: { project: Project; index: number; onOpen: () => void }) {
  const { t } = useLang()
  return (
    <motion.article variants={fadeUp} className="grid gap-6 py-12 lg:grid-cols-12 lg:gap-10 lg:py-16">
      <div className="lg:col-span-1">
        <span className="font-serif text-3xl text-terracotta">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className="lg:col-span-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          {project.categories.slice(0, 2).map((c) => t(ui.categories[c])).join(' · ')}
          <span className="mx-2 text-line">|</span>
          {t(ui.status[project.status])}
          {project.period && (
            <>
              <span className="mx-2 text-line">|</span>
              {project.period}
            </>
          )}
        </p>
        <h3 className="mt-4 font-serif text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
          <button type="button" onClick={onOpen} className="text-left transition-colors duration-300 hover:text-forest">
            {project.name}
          </button>
        </h3>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/80">{project.tagline}</p>
      </div>
      <div className="lg:col-span-5 lg:pt-10">
        <p className="text-[15px] leading-relaxed text-ink/80">{project.context}</p>
        <p className="mt-4 text-[15px] leading-relaxed text-muted">{project.role}</p>
        <button type="button" onClick={onOpen} className="link-underline mt-6 text-base">
          {t(ui.projects.details)} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </motion.article>
  )
}
