import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowUpRight, BadgeCheck, Briefcase, MapPin } from 'lucide-react'
import type { Institution } from '~/types'
import { Avatar } from '~/components/Avatar'
import { Badge } from '~/components/Badge'
import { regionName } from '~/mocks/regions'

export function InstitutionCard({
  institution,
  index = 0,
}: {
  institution: Institution
  index?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.3) }}
    >
      <Link
        to="/organismes/$slug"
        params={{ slug: institution.slug }}
        className="group flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card-hover"
      >
        <div className="flex items-start justify-between">
          <Avatar
            initials={institution.logoInitials}
            color={institution.logoColor}
            size="lg"
            className="!rounded-2xl"
          />
          <ArrowUpRight className="h-5 w-5 text-ink-300 transition group-hover:text-brand-600" />
        </div>

        <div className="mt-4 flex items-center gap-1.5">
          <h3 className="line-clamp-1 font-display text-base font-bold text-ink-900 transition group-hover:text-brand-700">
            {institution.shortName}
          </h3>
          {institution.verified && <BadgeCheck className="h-4 w-4 shrink-0 text-brand-500" />}
        </div>
        <p className="mt-1 line-clamp-2 text-sm text-ink-600">{institution.name}</p>

        <p className="mt-3 line-clamp-2 flex-1 text-sm leading-relaxed text-ink-500">
          {institution.description}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-ink-100 pt-4">
          <Badge variant="brand">{institution.type}</Badge>
          <span className="inline-flex items-center gap-1 text-xs text-ink-500">
            <MapPin className="h-3.5 w-3.5 text-ink-400" />
            {regionName(institution.regionId)}
          </span>
          <span className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-accent-700">
            <Briefcase className="h-3.5 w-3.5" />
            {institution.jobCount} offres
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
