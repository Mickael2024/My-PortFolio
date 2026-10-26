import type { Variants } from 'motion/react'

const ease = [0.22, 1, 0.36, 1] as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease } },
}

export const reveal: Variants = {
  hidden: { opacity: 0, clipPath: 'inset(0 0 100% 0)' },
  show: { opacity: 1, clipPath: 'inset(0 0 0% 0)', transition: { duration: 0.9, ease } },
}

export const stagger = (delayChildren = 0.05, staggerChildren = 0.09): Variants => ({
  hidden: {},
  show: { transition: { delayChildren, staggerChildren } },
})

// « some » : se déclenche dès qu'une partie de l'élément est visible, même pour les longues listes sur mobile.
export const viewportOnce = { once: true, amount: 'some', margin: '0px 0px -8% 0px' } as const
