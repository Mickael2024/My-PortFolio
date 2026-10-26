import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { Logo } from './Logo'
import { useLang } from '../hooks/useLang'
import { ui } from '../data/i18n'
import { profile } from '../data/profile'
import { cn } from '../lib/cn'

const links = [
  { id: 'about', label: ui.nav.about },
  { id: 'services', label: ui.nav.services },
  { id: 'education', label: ui.nav.education },
  { id: 'projects', label: ui.nav.projects },
  { id: 'expertise', label: ui.nav.expertise },
  { id: 'experience', label: ui.nav.experience },
  { id: 'contact', label: ui.nav.contact },
] as const

export function Navbar() {
  const { t, lang, toggle } = useLang()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id)).filter((el): el is HTMLElement => el !== null)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.2, 0.5] },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled ? 'border-b border-line bg-ivory/90 backdrop-blur-md' : 'bg-transparent',
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-forest focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ivory"
      >
        {t(ui.a11y.skip)}
      </a>
      <nav className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12" aria-label="Navigation principale">
        <a href="#top" aria-label="Accueil" className="rounded-sm">
          <Logo />
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? 'true' : undefined}
                className={cn(
                  'relative py-2 text-[15px] text-ink/70 transition-colors duration-300 hover:text-ink',
                  active === l.id && 'text-ink',
                )}
              >
                {t(l.label)}
                {active === l.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-0 -bottom-0.5 h-px bg-terracotta"
                    transition={{ type: 'spring', stiffness: 400, damping: 40 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggle}
            aria-label={t(ui.a11y.switchLang)}
            className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/70 transition-colors hover:text-ink"
          >
            <span className={cn(lang === 'fr' && 'text-ink')}>FR</span>
            <span className="mx-1.5 text-line">/</span>
            <span className={cn(lang === 'en' && 'text-ink')}>EN</span>
          </button>
          <a href="#contact" className="hidden rounded-full bg-ink px-4 py-2 text-sm font-semibold text-ivory transition-colors hover:bg-forest lg:inline-flex">
            {t(ui.nav.contact)}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t(ui.a11y.closeMenu) : t(ui.a11y.openMenu)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper text-ink lg:hidden"
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[72px] z-40 bg-ivory lg:hidden"
          >
            <ul className="mx-auto flex h-full max-w-7xl flex-col gap-1 overflow-y-auto px-5 py-8 sm:px-8">
              {links.map((l, i) => (
                <motion.li key={l.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.04 * i }}>
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between border-b border-line py-4 font-serif text-3xl text-ink"
                  >
                    {t(l.label)}
                    <span className="text-xs font-sans text-muted">0{i + 1}</span>
                  </a>
                </motion.li>
              ))}
              <li className="mt-6 flex flex-wrap gap-4 text-sm text-muted">
                <a href={profile.github} target="_blank" rel="noreferrer noopener" className="link-underline">
                  GitHub
                </a>
                <span>{profile.location}</span>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
