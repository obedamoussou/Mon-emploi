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

export function JobCard({
  job,
  index = 0,
  minimal = false,
}: {
  job: Job
  index?: number
  /** Variante allégée (accueil) : masque lieu, nb de candidats et salaire. */
  minimal?: boolean
}) {
  const inst = institutionById(job.institutionId)
  const deadline = deadlineLabel(job.deadline)

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.24) }}
      className="group relative min-w-0"
    >
      <Link
        to="/offres/$slug"
        params={{ slug: job.slug }}
        className="block rounded-2xl border border-ink-100 bg-white p-4 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card-hover sm:p-5"
      >
        <div className="flex items-start gap-3 sm:gap-4">
          <Avatar
            initials={inst?.logoInitials ?? 'ME'}
            color={inst?.logoColor}
            size="lg"
            className="!h-11 !w-11 !rounded-xl !text-sm sm:!h-14 sm:!w-14 sm:!text-base"
          />
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-1.5">
              <Badge variant={kindVariant[job.kind]}>{kindLabels[job.kind]}</Badge>
              {job.urgent && (
                <Badge variant="danger" icon={<Flame className="h-3 w-3" />}>
                  Urgent
                </Badge>
              )}
              {job.featured && <Badge variant="gold">À la une</Badge>}
            </div>
            <h3 className="mt-2 line-clamp-2 font-display text-[15px] font-bold text-ink-900 transition group-hover:text-brand-700 sm:text-base">
              {job.title}
            </h3>
            <p className="mt-0.5 truncate text-sm text-ink-500">{inst?.name}</p>
          </div>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-ink-300 transition group-hover:text-brand-600" />
        </div>

        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-ink-500">{job.summary}</p>

        <div className="mt-3.5 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-ink-500 sm:mt-4 sm:gap-x-4">
          {!minimal && (
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-ink-400" />
              <span className="truncate">{job.city}, {regionName(job.regionId)}</span>
            </span>
          )}
          <Badge variant={contractVariant[job.contractType]}>{job.contractType}</Badge>
          {!minimal && (
            <span className="inline-flex items-center gap-1.5">
              <Users className="h-3.5 w-3.5 text-ink-400" />
              {job.applicants} candidats
            </span>
          )}
        </div>

        <div className="mt-3.5 flex items-center justify-between gap-2 border-t border-ink-100 pt-3 sm:mt-4">
          <span className="truncate text-xs text-ink-400">Publié {timeAgo(job.publishedAt)}</span>
          <span
            className={cn(
              'inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold',
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

        {!minimal && job.salary && (
          <p className="mt-3 text-sm font-semibold text-accent-700">
            {formatSalary(job.salary.min, job.salary.max, job.salary.currency, job.salary.period)}
          </p>
        )}
      </Link>

      <button
        className="absolute right-3 top-[4.4rem] hidden rounded-lg p-1.5 text-ink-300 transition hover:bg-brand-50 hover:text-brand-600 sm:right-4 sm:top-[4.6rem] sm:block"
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
