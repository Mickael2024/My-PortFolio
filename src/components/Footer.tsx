import { Logo } from './Logo'
import { useLang } from '../hooks/useLang'
import { profile } from '../data/profile'

const year = new Date().getFullYear()

export function Footer() {
  const { t } = useLang()
  return (
    <footer className="border-t border-line bg-ivory">
      <div className="mx-auto w-full max-w-7xl px-5 pt-16 sm:px-8 lg:px-12">
        <p className="eyebrow">{t({ fr: 'Travaillons ensemble', en: 'Let’s work together' })}</p>
        <p className="mt-6 font-serif text-[13vw] leading-[0.9] tracking-tight text-ink sm:text-[9vw] lg:text-[7.5rem]" aria-hidden="true">
          {profile.firstName.split(' ')[0]} <span className="text-forest">{profile.lastName.charAt(0) + profile.lastName.slice(1).toLowerCase()}</span><span className="text-terracotta">.</span>
        </p>
      </div>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-12 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12">
        <div>
          <Logo />
          <p className="mt-3 max-w-sm font-serif text-xl leading-snug text-ink/80">{t(profile.headline)}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-muted lg:items-end">
          <div className="flex gap-5">
            <a href={profile.github} target="_blank" rel="noreferrer noopener" className="link-underline text-sm">GitHub</a>
            {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer noopener" className="link-underline text-sm">LinkedIn</a>}
          </div>
          <p>
            © {year} {profile.firstName} {profile.lastName} · {profile.location}
          </p>
        </div>
      </div>
    </footer>
  )
}
