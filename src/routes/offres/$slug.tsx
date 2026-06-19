import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import {
  Banknote,
  Bookmark,
  Briefcase,
  Building2,
  CalendarClock,
  CheckCircle2,
  ChevronRight,
  Clock,
  Eye,
  Flame,
  Globe,
  Layers,
  MapPin,
  Send,
  Share2,
  Target,
  Users,
} from 'lucide-react'
import { PublicLayout } from '~/layouts/PublicLayout'
import { Avatar } from '~/components/Avatar'
import { Badge } from '~/components/Badge'
import { JobCardCompact } from '~/components/JobCard'
import { Skeleton } from '~/components/LoadingSkeleton'
import { NotFound } from '~/components/NotFound'
import { useJob, useRelatedJobs } from '~/hooks/queries'
import { institutionById } from '~/mocks/institutions'
import { regionName } from '~/mocks/regions'
import { categoryName } from '~/mocks/categories'
import { contractVariant, kindLabels, kindVariant } from '~/lib/display'
import {
  cn,
  deadlineLabel,
  formatDate,
  formatNumber,
  formatSalary,
  timeAgo,
} from '~/lib/utils'
import type { Job } from '~/types'

export const Route = createFileRoute('/offres/$slug')({
  component: JobDetailPage,
})

function JobDetailPage() {
  const { slug } = Route.useParams()
  const { data: job, isLoading } = useJob(slug)
  const { data: related } = useRelatedJobs(job)

  if (isLoading) return <JobDetailSkeleton />
  if (!job) return <PublicLayout><NotFound /></PublicLayout>

  const inst = institutionById(job.institutionId)
  const deadline = deadlineLabel(job.deadline)

  return (
    <PublicLayout>
      {/* Fil d'ariane + bandeau */}
      <div className="border-b border-ink-100 bg-white">
        <div className="container-page py-6">
          <nav className="flex flex-wrap items-center gap-1.5 text-xs text-ink-400">
            <Link to="/" className="hover:text-brand-600">Accueil</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/offres" className="hover:text-brand-600">Offres</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="truncate text-ink-600">{job.title}</span>
          </nav>

          <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-start">
            <Avatar
              initials={inst?.logoInitials ?? 'TL'}
              color={inst?.logoColor}
              size="xl"
              className="!rounded-2xl"
            />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant={kindVariant[job.kind]}>{kindLabels[job.kind]}</Badge>
                <Badge variant={contractVariant[job.contractType]}>{job.contractType}</Badge>
                {job.urgent && (
                  <Badge variant="danger" icon={<Flame className="h-3 w-3" />}>Urgent</Badge>
                )}
                {job.featured && <Badge variant="gold">À la une</Badge>}
              </div>
              <h1 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl">
                {job.title}
              </h1>
              {inst && (
                <Link
                  to="/organismes/$slug"
                  params={{ slug: inst.slug }}
                  className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-medium text-ink-600 transition hover:text-brand-600"
                >
                  <Building2 className="h-4 w-4" />
                  {inst.name}
                </Link>
              )}

              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-500">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-ink-400" /> {job.city}, {regionName(job.regionId)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Layers className="h-4 w-4 text-ink-400" /> {categoryName(job.categoryId)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-ink-400" /> Publié {timeAgo(job.publishedAt)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Eye className="h-4 w-4 text-ink-400" /> {formatNumber(job.views)} vues
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-page grid gap-8 py-8 lg:grid-cols-[1fr_340px]">
        {/* Contenu principal */}
        <div className="min-w-0 space-y-8">
          <Section title="Présentation du poste">
            <p className="leading-relaxed text-ink-600">{job.description}</p>
          </Section>

          <ListSection
            title="Missions principales"
            icon={<Target className="h-5 w-5" />}
            items={job.missions}
            variant="bullet"
          />
          <ListSection
            title="Profil recherché"
            icon={<Users className="h-5 w-5" />}
            items={job.profile}
            variant="check"
          />
          <ListSection
            title="Conditions & déroulement"
            icon={<Briefcase className="h-5 w-5" />}
            items={job.conditions}
            variant="bullet"
          />

          {job.benefits.length > 0 && (
            <Section title="Avantages">
              <div className="flex flex-wrap gap-2">
                {job.benefits.map((b) => (
                  <Badge key={b} variant="accent" className="px-3 py-1.5 text-sm">
                    {b}
                  </Badge>
                ))}
              </div>
            </Section>
          )}

          {inst && (
            <Section title="À propos de l’organisme">
              <div className="flex items-start gap-4">
                <Avatar initials={inst.logoInitials} color={inst.logoColor} size="lg" className="!rounded-2xl" />
                <div className="min-w-0">
                  <p className="font-display font-bold text-ink-900">{inst.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-500">{inst.description}</p>
                  <Link
                    to="/organismes/$slug"
                    params={{ slug: inst.slug }}
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
                  >
                    Voir le profil de l’organisme
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Section>
          )}
        </div>

        {/* Colonne latérale */}
        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          <ApplyCard job={job} deadlineUrgent={deadline.urgent} deadlineText={deadline.text} expired={deadline.expired} />

          {related && related.length > 0 && (
            <div className="card p-5">
              <h3 className="font-display text-sm font-bold text-ink-900">Offres similaires</h3>
              <div className="mt-3 space-y-2.5">
                {related.map((r) => (
                  <JobCardCompact key={r.id} job={r} />
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </PublicLayout>
  )
}

function ApplyCard({
  job,
  deadlineText,
  deadlineUrgent,
  expired,
}: {
  job: Job
  deadlineText: string
  deadlineUrgent: boolean
  expired: boolean
}) {
  const navigate = useNavigate()
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="card overflow-hidden"
    >
      <div className="space-y-4 p-5">
        {job.salary && (
          <div className="flex items-center gap-3 rounded-xl bg-accent-50 p-3">
            <Banknote className="h-5 w-5 text-accent-600" />
            <div>
              <p className="text-xs text-accent-700">Rémunération</p>
              <p className="text-sm font-bold text-accent-800">
                {formatSalary(job.salary.min, job.salary.max, job.salary.currency, job.salary.period)}
              </p>
            </div>
          </div>
        )}

        <dl className="space-y-3 text-sm">
          <InfoRow icon={<CalendarClock className="h-4 w-4" />} label="Date limite">
            <span className={cn('font-semibold', deadlineUrgent ? 'text-red-600' : 'text-ink-900')}>
              {formatDate(job.deadline)}
            </span>
            <span className="block text-xs text-ink-400">{deadlineText}</span>
          </InfoRow>
          <InfoRow icon={<Briefcase className="h-4 w-4" />} label="Type de contrat">
            <span className="font-semibold text-ink-900">{job.contractType}</span>
          </InfoRow>
          <InfoRow icon={<Globe className="h-4 w-4" />} label="Mode de travail">
            <span className="font-semibold text-ink-900">{job.workMode}</span>
          </InfoRow>
          <InfoRow icon={<Layers className="h-4 w-4" />} label="Expérience">
            <span className="font-semibold text-ink-900">{job.experienceLevel}</span>
          </InfoRow>
          <InfoRow icon={<Users className="h-4 w-4" />} label="Postes à pourvoir">
            <span className="font-semibold text-ink-900">{job.positions}</span>
          </InfoRow>
        </dl>

        <p className="rounded-lg bg-ink-50 px-3 py-2 text-center text-xs text-ink-500">
          Référence : <span className="font-semibold text-ink-700">{job.reference}</span>
        </p>
      </div>

      <div className="space-y-2 border-t border-ink-100 p-5">
        <button
          disabled={expired}
          onClick={() => navigate({ to: '/postuler/$slug', params: { slug: job.slug } })}
          className="btn-primary w-full"
        >
          <Send className="h-4 w-4" />
          {expired ? 'Candidatures closes' : 'Postuler maintenant'}
        </button>
        <div className="grid grid-cols-2 gap-2">
          <button className="btn-secondary">
            <Bookmark className="h-4 w-4" /> Sauver
          </button>
          <button className="btn-secondary">
            <Share2 className="h-4 w-4" /> Partager
          </button>
        </div>
      </div>
    </motion.div>
  )
}

function InfoRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-start justify-between gap-3">
      <dt className="inline-flex items-center gap-2 text-ink-500">
        <span className="text-ink-400">{icon}</span>
        {label}
      </dt>
      <dd className="text-right">{children}</dd>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="card p-6">
      <h2 className="font-display text-lg font-bold text-ink-900">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  )
}

function ListSection({
  title,
  icon,
  items,
  variant,
}: {
  title: string
  icon: React.ReactNode
  items: string[]
  variant: 'bullet' | 'check'
}) {
  return (
    <section className="card p-6">
      <h2 className="inline-flex items-center gap-2 font-display text-lg font-bold text-ink-900">
        <span className="text-brand-600">{icon}</span>
        {title}
      </h2>
      <ul className="mt-4 space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-ink-600">
            {variant === 'check' ? (
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
            ) : (
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
            )}
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}

function JobDetailSkeleton() {
  return (
    <PublicLayout>
      <div className="border-b border-ink-100 bg-white">
        <div className="container-page py-8">
          <Skeleton className="h-4 w-48" />
          <div className="mt-5 flex gap-5">
            <Skeleton className="h-20 w-20 rounded-2xl" />
            <div className="flex-1 space-y-3">
              <Skeleton className="h-6 w-2/3" />
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-page grid gap-8 py-8 lg:grid-cols-[1fr_340px]">
        <div className="space-y-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-40 w-full rounded-2xl" />
          ))}
        </div>
        <Skeleton className="h-96 w-full rounded-2xl" />
      </div>
    </PublicLayout>
  )
}
