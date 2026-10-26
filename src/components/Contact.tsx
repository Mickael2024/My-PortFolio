import { useState, type FormEvent } from 'react'
import { motion } from 'motion/react'
import { ArrowUpRight, Download } from 'lucide-react'
import { Section } from './Section'
import { ui } from '../data/i18n'
import { profile } from '../data/profile'
import { useLang } from '../hooks/useLang'
import { fadeUp, viewportOnce } from '../lib/animations'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function Contact() {
  const { t } = useLang()
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const hasBackend = Boolean(profile.contactEndpoint)

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    const next: Record<string, string> = {}
    if (!name) next.name = t(ui.contact.required)
    if (!email) next.email = t(ui.contact.required)
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = t(ui.contact.invalidEmail)
    if (!message) next.message = t(ui.contact.required)
    else if (message.length < 10) next.message = t(ui.contact.tooShort)
    setErrors(next)
    if (Object.keys(next).length > 0 || !hasBackend) return
    setStatus('sending')
    try {
      const res = await fetch(profile.contactEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ name, email, message }) })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <Section id="contact" tone="forest">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="lg:col-span-6">
          <p className="eyebrow text-ivory/70">{t(ui.sections.contact.kicker)}</p>
          <h2 className="mt-5 font-serif text-5xl leading-[1.02] tracking-tight text-ivory sm:text-6xl lg:text-7xl">{t(ui.sections.contact.title)}</h2>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-ivory/80">{t(ui.contact.intro)}</p>
          <dl className="mt-10 space-y-4 border-t border-ivory/20 pt-6 text-ivory">
            <div className="flex flex-wrap gap-x-6 gap-y-1">
              <dt className="w-28 text-xs font-semibold uppercase tracking-[0.18em] text-ivory/60">{t(ui.contact.location)}</dt>
              <dd>{profile.location}</dd>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-1">
              <dt className="w-28 text-xs font-semibold uppercase tracking-[0.18em] text-ivory/60">{t(ui.contact.email)}</dt>
              <dd>{profile.email ? <a href={`mailto:${profile.email}`} className="underline decoration-ivory/40 underline-offset-4 hover:decoration-ivory">{profile.email}</a> : <span className="text-ivory/60">{t(ui.contact.emailMissing)}</span>}</dd>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-1">
              <dt className="w-28 text-xs font-semibold uppercase tracking-[0.18em] text-ivory/60">GitHub</dt>
              <dd><a href={profile.github} target="_blank" rel="noreferrer noopener" className="underline decoration-ivory/40 underline-offset-4 hover:decoration-ivory">github.com/{profile.githubUser}</a></dd>
            </div>
            {profile.linkedin && (
              <div className="flex flex-wrap gap-x-6 gap-y-1">
                <dt className="w-28 text-xs font-semibold uppercase tracking-[0.18em] text-ivory/60">LinkedIn</dt>
                <dd><a href={profile.linkedin} target="_blank" rel="noreferrer noopener" className="underline decoration-ivory/40 underline-offset-4 hover:decoration-ivory">LinkedIn</a></dd>
              </div>
            )}
          </dl>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-ivory/40 px-6 text-sm font-semibold text-ivory transition-colors hover:bg-ivory hover:text-forest">
              {t(ui.contact.ctaWork)} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            {profile.cvUrl && (
              <a href={profile.cvUrl} download className="inline-flex min-h-12 items-center gap-2 rounded-full bg-ivory px-6 text-sm font-semibold text-forest transition-colors hover:bg-paper">
                <Download className="h-4 w-4" aria-hidden="true" /> {t(ui.contact.ctaCv)}
              </a>
            )}
          </div>
        </motion.div>

        <motion.form variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} onSubmit={onSubmit} noValidate className="rounded-[1.75rem] bg-ivory p-7 text-ink sm:p-10 lg:col-span-6">
          {!hasBackend && <p className="mb-6 rounded-xl border border-terracotta/30 bg-terracotta/10 px-4 py-3 text-sm text-ink/80" role="status">{t(ui.contact.noBackend)}</p>}
          <div className="grid gap-6 sm:grid-cols-2">
            <Field id="name" label={t(ui.contact.name)} error={errors.name} autoComplete="name" />
            <Field id="email" label={t(ui.contact.email)} error={errors.email} type="email" autoComplete="email" />
          </div>
          <div className="mt-6">
            <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted">{t(ui.contact.message)}</label>
            <textarea id="message" name="message" rows={5} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} className="mt-2 w-full border-b border-ink/30 bg-transparent py-2 text-base text-ink focus:border-forest focus:outline-none" />
            {errors.message && <p id="message-error" className="mt-1 text-xs text-terracotta">{errors.message}</p>}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button type="submit" disabled={!hasBackend || status === 'sending'} className="btn-solid disabled:cursor-not-allowed disabled:opacity-50">
              {status === 'sending' ? t(ui.contact.sending) : t(ui.contact.send)}
            </button>
            {status === 'sent' && <p className="text-sm text-forest" role="status">{t(ui.contact.sent)}</p>}
            {status === 'error' && <p className="text-sm text-terracotta" role="alert">{t(ui.contact.error)}</p>}
          </div>
        </motion.form>
      </div>
    </Section>
  )
}

function Field({ id, label, error, type = 'text', autoComplete }: { id: string; label: string; error?: string; type?: string; autoComplete?: string }) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted">{label}</label>
      <input id={id} name={id} type={type} autoComplete={autoComplete} aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : undefined} className="mt-2 h-11 w-full border-b border-ink/30 bg-transparent text-base text-ink focus:border-forest focus:outline-none" />
      {error && <p id={`${id}-error`} className="mt-1 text-xs text-terracotta">{error}</p>}
    </div>
  )
}
