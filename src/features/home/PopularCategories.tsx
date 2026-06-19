import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '~/components/SectionHeading'
import { Icon } from '~/components/Icon'
import { categories } from '~/mocks/categories'
import { formatNumber } from '~/lib/utils'

export function PopularCategories() {
  return (
    <section className="border-y border-ink-100 bg-white py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Domaines"
          title="Explorez par secteur d’activité"
          description="Des milliers d’opportunités réparties dans tous les domaines du service public."
          action={{ label: 'Tous les domaines', to: '/offres' }}
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.3, delay: Math.min(i * 0.03, 0.25) }}
            >
              <Link
                to="/offres"
                search={{ categorie: cat.id }}
                className="group flex h-full items-start gap-4 rounded-2xl border border-ink-100 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card-hover"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
                  <Icon name={cat.icon} className="h-6 w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display text-sm font-bold text-ink-900 transition group-hover:text-brand-700">
                      {cat.name}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-300 transition group-hover:text-brand-600" />
                  </div>
                  <p className="mt-1 line-clamp-2 text-xs text-ink-500">{cat.description}</p>
                  <p className="mt-2 text-xs font-semibold text-accent-700">
                    {formatNumber(cat.jobCount)} offres
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
