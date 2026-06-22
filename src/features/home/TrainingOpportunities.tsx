import { motion } from 'framer-motion'
import { Award, Clock, MonitorPlay, Users } from 'lucide-react'
import { SectionHeading } from '~/components/SectionHeading'
import { Badge } from '~/components/Badge'
import { Icon } from '~/components/Icon'
import { trainings } from '~/mocks/trainings'

export function TrainingOpportunities() {
  return (
    <section className="border-t border-ink-100 bg-white py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Montée en compétences"
          title="Opportunités de formation"
          description="Certifications et formations professionnelles pour booster votre profil : cybersécurité, data, gestion de projet et bien plus."
        />

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {trainings.map((t, i) => (
            <motion.article
              key={t.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: Math.min(i * 0.05, 0.3) }}
              className="group flex min-w-0 flex-col rounded-2xl border border-ink-100 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card-hover"
            >
              <div className="flex items-start justify-between gap-3">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white"
                  style={{ backgroundColor: t.color }}
                >
                  <Icon name={t.icon} className="h-6 w-6" />
                </span>
                {t.free ? (
                  <Badge variant="accent">Gratuit</Badge>
                ) : (
                  <Badge variant="gold">Payant</Badge>
                )}
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-1.5">
                <Badge variant="brand">{t.category}</Badge>
                {t.certifying && (
                  <Badge variant="neutral" icon={<Award className="h-3 w-3" />}>
                    Certifiante
                  </Badge>
                )}
              </div>

              <h3 className="mt-2 line-clamp-2 font-display text-base font-bold text-ink-900 transition group-hover:text-brand-700">
                {t.title}
              </h3>
              <p className="mt-1 truncate text-sm text-ink-500">{t.provider}</p>

              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-ink-100 pt-3 text-xs text-ink-500">
                <span className="inline-flex items-center gap-1.5">
                  <MonitorPlay className="h-3.5 w-3.5 text-ink-400" /> {t.mode}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-ink-400" /> {t.duration}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Users className="h-3.5 w-3.5 text-ink-400" /> {t.seats} places
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
