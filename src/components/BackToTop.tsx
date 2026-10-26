import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUp } from 'lucide-react'
import { ui } from '../data/i18n'
import { useLang } from '../hooks/useLang'

/** Bouton fixe en bas à droite, visible après un écran de défilement. */
export function BackToTop() {
  const { t } = useLang()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#top"
          aria-label={t(ui.footer.top)}
          title={t(ui.footer.top)}
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-5 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-line bg-paper text-ink shadow-[0_10px_30px_-12px_rgba(36,38,32,0.35)] transition-colors duration-300 hover:bg-forest hover:text-ivory sm:bottom-8 sm:right-8"
        >
          <ArrowUp className="h-5 w-5" aria-hidden="true" />
        </motion.a>
      )}
    </AnimatePresence>
  )
}
