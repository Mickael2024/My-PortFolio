import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { AlertCircle, ExternalLink, Lock, X } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import { ui } from '../data/i18n'
import type { Project } from '../data/types'
import { useLang } from '../hooks/useLang'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { t } = useLang()
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <button type="button" aria-label={t(ui.projects.close)} onClick={onClose} className="absolute inset-0 bg-ink/50 backdrop-blur-[2px]" />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 32 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-t-[1.75rem] bg-ivory shadow-2xl sm:rounded-[1.75rem]"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-ivory/95 px-6 py-4 backdrop-blur-md sm:px-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                {t(ui.status[project.status])} · {t(ui.kind[project.kind])}
                {project.period && ` · ${project.period}`}
              </p>
              <button ref={closeRef} type="button" onClick={onClose} aria-label={t(ui.projects.close)} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-paper text-ink transition-colors hover:bg-sand">
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="px-6 pb-12 pt-8 sm:px-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{project.categories.map((c) => t(ui.categories[c])).join(' · ')}</p>
              <h3 id="project-title" className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">{project.name}</h3>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink/80">{project.tagline}</p>

              <div className="mt-10 grid gap-10 lg:grid-cols-12">
                <div className="space-y-7 lg:col-span-8">
                  <Block title={t(ui.projects.context)} text={project.context} />
                  <Block title={t(ui.projects.objective)} text={project.objective} />
                  <Block title={t(ui.projects.role)} text={project.role} />
                  <Block title={t(ui.projects.operation)} text={project.operation} />
                  {project.difficulties.length > 0 && <ListBlock title={t(ui.projects.difficulties)} items={project.difficulties} />}
                  {project.solutions.length > 0 && <ListBlock title={t(ui.projects.solutions)} items={project.solutions} />}
                  {project.results.length > 0 && <ListBlock title={t(ui.projects.results)} items={project.results} />}
                </div>
                <aside className="space-y-7 lg:col-span-4">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{t(ui.projects.links)}</h4>
                    {project.links.length === 0 ? (
                      <p className="mt-2 inline-flex items-center gap-2 text-sm text-muted"><Lock className="h-4 w-4" aria-hidden="true" /> {t(ui.projects.privateRepo)}</p>
                    ) : (
                      <ul className="mt-2 space-y-2">
                        {project.links.map((l) => (
                          <li key={l.url}>
                            <a href={l.url} target="_blank" rel="noreferrer noopener" className="link-underline text-sm">
                              {l.kind === 'github' ? <GithubIcon className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" aria-hidden="true" />}
                              {l.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {project.toConfirm && project.toConfirm.length > 0 && (
                    <div className="rounded-2xl border border-terracotta/30 bg-terracotta/5 p-4">
                      <h4 className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-terracotta"><AlertCircle className="h-3.5 w-3.5" aria-hidden="true" /> {t(ui.projects.toConfirm)}</h4>
                      <ul className="mt-2 space-y-1 text-xs leading-relaxed text-muted">{project.toConfirm.map((x) => <li key={x}>— {x}</li>)}</ul>
                    </div>
                  )}
                </aside>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Block({ title, text }: { title: string; text: string }) {
  if (!text) return null
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{title}</h4>
      <p className="mt-2 text-[15px] leading-relaxed text-ink/85">{text}</p>
    </div>
  )
}

function ListBlock({ title, items, ordered }: { title: string; items: string[]; ordered?: boolean }) {
  const Tag = ordered ? 'ol' : 'ul'
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{title}</h4>
      <Tag className="mt-2 space-y-2 text-[15px] leading-relaxed text-ink/85">
        {items.map((x, i) => (
          <li key={x} className="flex gap-3">
            <span className="shrink-0 font-serif text-terracotta">{ordered ? String(i + 1).padStart(2, '0') : '—'}</span>
            <span>{x}</span>
          </li>
        ))}
      </Tag>
    </div>
  )
}
