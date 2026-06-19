import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { SectionHeading } from '~/components/SectionHeading'
import { Avatar } from '~/components/Avatar'
import { testimonials } from '~/mocks/content'
import { initials } from '~/lib/utils'

export function Testimonials() {
  return (
    <section className="container-page py-16 sm:py-20">
      <SectionHeading
        align="center"
        eyebrow="Témoignages"
        title="Ils ont trouvé leur place dans le service public"
        description="Des parcours réels rendus possibles par la plateforme nationale de recrutement."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: Math.min(i * 0.06, 0.3) }}
            className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-card"
          >
            <Quote className="h-7 w-7 text-brand-200" />
            <div className="mt-3 flex gap-0.5">
              {Array.from({ length: t.rating }).map((_, s) => (
                <Star key={s} className="h-4 w-4 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink-700">
              « {t.quote} »
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3 border-t border-ink-100 pt-4">
              <Avatar initials={initials(t.name)} color={t.avatarColor} />
              <div>
                <p className="text-sm font-bold text-ink-900">{t.name}</p>
                <p className="text-xs text-ink-500">
                  {t.role} · {t.institution}
                </p>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  )
}
