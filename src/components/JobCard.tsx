import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Bookmark,
  Clock,
  Flame,
  MapPin,
  Users,
} from 'lucide-react'
import type { Job } from '~/types'
import { Avatar } from '~/components/Avatar'
import { Badge } from '~/components/Badge'
import { institutionById } from '~/mocks/institutions'
import { regionName } from '~/mocks/regions'
import {
  contractVariant,
  kindLabels,
  kindVariant,
} from '~/lib/display'
import { cn, deadlineLabel, formatSalary, timeAgo } from '~/lib/utils'

export function JobCard({ job, index = 0 }: { job: Job; index?: number }) {
  const inst = institutionById(job.institutionId)
  const deadline = deadlineLabel(job.deadline)

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.24) }}
      className="group relative"
    >
      <Link
        to="/offres/$slug"
        params={{ slug: job.slug }}
        className="block rounded-2xl border border-ink-100 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card-hover"
      >
        <div className="flex items-start gap-4">
          <Avatar
            initials={inst?.logoInitials ?? 'TL'}
            color={inst?.logoColor}
            size="lg"
            className="!rounded-xl"
          />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <Badge variant={kindVariant[job.kind]}>{kindLabels[job.kind]}</Badge>
              {job.urgent && (
                <Badge variant="danger" icon={<Flame className="h-3 w-3" />}>
                  Urgent
                </Badge>
              )}
              {job.featured && <Badge variant="gold">À la une</Badge>}
            </div>
            <h3 className="mt-2 line-clamp-2 font-display text-base font-bold text-ink-900 transition group-hover:text-brand-700">
              {job.title}
            </h3>
            <p className="mt-0.5 truncate text-sm text-ink-500">{inst?.name}</p>
          </div>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-ink-300 transition group-hover:text-brand-600" />
        </div>

        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-ink-500">{job.summary}</p>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-ink-500">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-ink-400" />
            {job.city}, {regionName(job.regionId)}
          </span>
          <Badge variant={contractVariant[job.contractType]}>{job.contractType}</Badge>
          <span className="inline-flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 text-ink-400" />
            {job.applicants} candidats
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-ink-100 pt-3">
          <span className="text-xs text-ink-400">Publié {timeAgo(job.publishedAt)}</span>
          <span
            className={cn(
              'inline-flex items-center gap-1.5 text-xs font-semibold',
              deadline.expired
                ? 'text-ink-400'
                : deadline.urgent
                  ? 'text-red-600'
                  : 'text-ink-600',
            )}
          >
            <Clock className="h-3.5 w-3.5" />
            {deadline.text}
          </span>
        </div>

        {job.salary && (
          <p className="mt-3 text-sm font-semibold text-accent-700">
            {formatSalary(job.salary.min, job.salary.max, job.salary.currency, job.salary.period)}
          </p>
        )}
      </Link>

      <button
        className="absolute right-4 top-[4.6rem] hidden rounded-lg p-1.5 text-ink-300 transition hover:bg-brand-50 hover:text-brand-600 sm:block"
        aria-label="Sauvegarder l’offre"
        onClick={(e) => e.preventDefault()}
      >
        <Bookmark className="h-4 w-4" />
      </button>
    </motion.article>
  )
}

/** Version condensée pour les listes en colonne (sidebar, organisme). */
export function JobCardCompact({ job }: { job: Job }) {
  const inst = institutionById(job.institutionId)
  const deadline = deadlineLabel(job.deadline)
  return (
    <Link
      to="/offres/$slug"
      params={{ slug: job.slug }}
      className="flex items-center gap-3 rounded-xl border border-ink-100 bg-white p-3 transition hover:border-brand-200 hover:bg-brand-50/30"
    >
      <Avatar initials={inst?.logoInitials ?? 'TL'} color={inst?.logoColor} className="!rounded-lg" />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-ink-900">{job.title}</p>
        <p className="truncate text-xs text-ink-500">{inst?.shortName} · {job.city}</p>
      </div>
      <span className="shrink-0 text-xs font-medium text-ink-400">{deadline.text}</span>
    </Link>
  )
}
