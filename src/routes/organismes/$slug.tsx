import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import {
  BadgeCheck,
  Briefcase,
  Building2,
  CalendarDays,
  ChevronRight,
  Globe,
  Mail,
  MapPin,
  Phone,
  Users,
} from 'lucide-react'
import { PublicLayout } from '~/layouts/PublicLayout'
import { Avatar } from '~/components/Avatar'
import { Badge } from '~/components/Badge'
import { JobCard } from '~/components/JobCard'
import { EmptyState } from '~/components/EmptyState'
import { Skeleton } from '~/components/LoadingSkeleton'
import { NotFound } from '~/components/NotFound'
import { useInstitution, useInstitutionJobs } from '~/hooks/queries'
import { regionName } from '~/mocks/regions'
import { formatNumber } from '~/lib/utils'

export const Route = createFileRoute('/organismes/$slug')({
  component: InstitutionPage,
})

function InstitutionPage() {
  const { slug } = Route.useParams()
  const { data: inst, isLoading } = useInstitution(slug)
  const { data: jobs } = useInstitutionJobs(inst?.id)

  if (isLoading) {
    return (
      <PublicLayout>
        <div className="container-page py-10">
          <Skeleton className="h-48 w-full rounded-3xl" />
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-40 rounded-2xl" />
            ))}
          </div>
        </div>
      </PublicLayout>
    )
  }
  if (!inst) return <PublicLayout><NotFound /></PublicLayout>

  const stats = [
    { icon: Briefcase, label: 'Offres ouvertes', value: formatNumber(inst.jobCount) },
    { icon: Users, label: 'Agents', value: formatNumber(inst.employees) },
    { icon: CalendarDays, label: 'Depuis', value: String(inst.foundedYear) },
  ]

  return (
    <PublicLayout>
      {/* En-tête institutionnel */}
      <div className="relative overflow-hidden border-b border-ink-100 bg-ink-950">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-10" />
        <div
          className="absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-30 blur-3xl"
          style={{ backgroundColor: inst.logoColor }}
        />
        <div className="container-page relative py-10">
          <nav className="flex items-center gap-1.5 text-xs text-white/50">
            <Link to="/" className="hover:text-white">Accueil</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/organismes" className="hover:text-white">Organismes</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="truncate text-white/80">{inst.shortName}</span>
          </nav>

          <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center">
            <Avatar
              initials={inst.logoInitials}
              color={inst.logoColor}
              size="xl"
              className="!h-24 !w-24 !rounded-3xl !text-3xl ring-4 ring-white/10"
            />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="brand">{inst.type}</Badge>
                {inst.verified && (
                  <Badge variant="accent" icon={<BadgeCheck className="h-3 w-3" />}>
                    Organisme vérifié
                  </Badge>
                )}
              </div>
              <h1 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                {inst.name}
              </h1>
              <p className="mt-1.5 inline-flex items-center gap-1.5 text-sm text-white/60">
                <MapPin className="h-4 w-4" /> {inst.city}, {regionName(inst.regionId)} · Secteur{' '}
                {inst.sector}
              </p>
            </div>
          </div>

          <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
              >
                <s.icon className="h-5 w-5 text-brand-300" />
                <p className="mt-2 font-display text-xl font-bold text-white">{s.value}</p>
                <p className="text-xs text-white/50">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-page grid gap-8 py-8 lg:grid-cols-[1fr_320px]">
        <div className="min-w-0 space-y-8">
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="card p-6"
          >
            <h2 className="font-display text-lg font-bold text-ink-900">Présentation</h2>
            <p className="mt-3 leading-relaxed text-ink-600">{inst.presentation}</p>
          </motion.section>

          <section>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-display text-lg font-bold text-ink-900">
                Offres publiées{jobs ? ` (${jobs.length})` : ''}
              </h2>
              <Link
                to="/offres"
                search={{ institution: inst.id }}
                className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-800"
              >
                Tout voir <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            {jobs && jobs.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {jobs.map((job, i) => (
                  <JobCard key={job.id} job={job} index={i} />
                ))}
              </div>
            ) : (
              <EmptyState
                icon={<Briefcase className="h-7 w-7" />}
                title="Aucune offre en cours"
                description="Cet organisme n’a pas d’offre ouverte pour le moment."
              />
            )}
          </section>
        </div>

        {/* Coordonnées */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="card p-6">
            <h3 className="inline-flex items-center gap-2 font-display text-sm font-bold text-ink-900">
              <Building2 className="h-4 w-4 text-brand-600" /> Coordonnées
            </h3>
            <ul className="mt-4 space-y-4 text-sm">
              <ContactRow icon={<MapPin className="h-4 w-4" />} label="Adresse">
                {inst.address}
              </ContactRow>
              <ContactRow icon={<Mail className="h-4 w-4" />} label="E-mail">
                <a href={`mailto:${inst.email}`} className="text-brand-700 hover:underline">
                  {inst.email}
                </a>
              </ContactRow>
              <ContactRow icon={<Phone className="h-4 w-4" />} label="Téléphone">
                {inst.phone}
              </ContactRow>
              <ContactRow icon={<Globe className="h-4 w-4" />} label="Site web">
                <a
                  href={`https://${inst.website}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-700 hover:underline"
                >
                  {inst.website}
                </a>
              </ContactRow>
            </ul>
            <Link
              to="/offres"
              search={{ institution: inst.id }}
              className="btn-primary mt-6 w-full"
            >
              <Briefcase className="h-4 w-4" /> Voir les offres
            </Link>
          </div>
        </aside>
      </div>
    </PublicLayout>
  )
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode
  label: string
  children: React.ReactNode
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-wide text-ink-400">{label}</p>
        <p className="mt-0.5 break-words text-ink-700">{children}</p>
      </div>
    </li>
  )
}
