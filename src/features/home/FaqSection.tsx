import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, LifeBuoy } from 'lucide-react'
import { useMemo, useState } from 'react'
import { SectionHeading } from '~/components/SectionHeading'
import { faqCategories, faqItems } from '~/mocks/content'
import { cn } from '~/lib/utils'

export function FaqSection() {
  const [category, setCategory] = useState<(typeof faqCategories)[number]>('Tous')
  const [open, setOpen] = useState<string | null>(faqItems[0]?.id ?? null)

  const filtered = useMemo(
    () => (category === 'Tous' ? faqItems : faqItems.filter((f) => f.category === category)),
    [category],
  )

  return (
    <section id="aide" className="border-t border-ink-100 bg-white py-16 sm:py-20">
      <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading eyebrow="Aide" title="Questions fréquentes" />
          <p className="mt-3 text-ink-500">
            Tout ce qu’il faut savoir pour candidater, suivre vos dossiers et utiliser la
            plateforme en toute sérénité.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {faqCategories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={cn(
                  'rounded-full border px-3.5 py-1.5 text-xs font-semibold transition',
                  category === c
                    ? 'border-brand-600 bg-brand-600 text-white'
                    : 'border-ink-200 bg-white text-ink-600 hover:border-brand-300 hover:text-brand-700',
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3 rounded-2xl border border-ink-100 bg-ink-50 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white">
              <LifeBuoy className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-ink-900">Besoin d’aide ?</p>
              <p className="text-xs text-ink-500">Contactez le support au +229 21 00 00 00</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {filtered.map((item) => {
            const isOpen = open === item.id
            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-2xl border border-ink-100 bg-white"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : item.id)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-ink-900">{item.question}</span>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 shrink-0 text-ink-400 transition-transform',
                      isOpen && 'rotate-180 text-brand-600',
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-ink-600">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
