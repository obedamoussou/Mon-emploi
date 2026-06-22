import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import {
  Activity,
  BadgeCheck,
  Ban,
  BarChart3,
  Briefcase,
  Building2,
  CheckCircle2,
  Eye,
  FileText,
  GraduationCap,
  LayoutDashboard,
  MoreVertical,
  Plus,
  Search,
  Settings,
  Target,
  Trash2,
  TrendingUp,
  UserCheck,
  Users,
} from 'lucide-react'
import { DashboardShell, type DashboardNavItem } from '~/layouts/DashboardShell'
import { Avatar } from '~/components/Avatar'
import { Badge } from '~/components/Badge'
import { Icon } from '~/components/Icon'
import {
  adminCandidates,
  activityFeed,
  signupsTrend,
  type AdminAccountStatus,
  type AdminCandidate,
} from '~/mocks/admin'
import { institutions, institutionById } from '~/mocks/institutions'
import { jobs, jobById } from '~/mocks/jobs'
import { applications } from '~/mocks/applications'
import { trainings as allTrainings } from '~/mocks/trainings'
import { userById } from '~/mocks/users'
import { regionName } from '~/mocks/regions'
import { categoryName } from '~/mocks/categories'
import { kindLabels, statusVariant } from '~/lib/display'
import { cn, formatNumber, initials, timeAgo } from '~/lib/utils'
import type { Institution, Job } from '~/types'

type Section =
  | 'overview'
  | 'candidats'
  | 'administrations'
  | 'offres'
  | 'matching'
  | 'formations'
  | 'candidatures'
  | 'parametres'

interface AdminSearch {
  section?: Section
}

export const Route = createFileRoute('/admin/')({
  validateSearch: (search: Record<string, unknown>): AdminSearch => ({
    section: (search.section as Section) ?? undefined,
  }),
  component: AdminDashboard,
})

const accountStatusVariant: Record<AdminAccountStatus, 'accent' | 'gold' | 'danger'> = {
  Actif: 'accent',
  'En attente': 'gold',
  Suspendu: 'danger',
}

function AdminDashboard() {
  const { section = 'overview' } = Route.useSearch()
  const navigate = useNavigate({ from: Route.fullPath })

  const pendingCandidates = adminCandidates.filter((c) => c.status === 'En attente').length

  const items: DashboardNavItem[] = [
    { key: 'overview', label: 'Vue d’ensemble', icon: LayoutDashboard },
    { key: 'matching', label: 'Profils par offre', icon: Target },
    { key: 'candidats', label: 'Candidats', icon: Users, badge: adminCandidates.length },
    { key: 'administrations', label: 'Administrations', icon: Building2, badge: institutions.length },
    { key: 'offres', label: 'Offres & concours', icon: Briefcase, badge: jobs.length },
    { key: 'formations', label: 'Formations', icon: GraduationCap, badge: allTrainings.length },
    { key: 'candidatures', label: 'Candidatures', icon: FileText, badge: applications.length },
    { key: 'parametres', label: 'Paramètres', icon: Settings },
  ]

  return (
    <DashboardShell
      brandLabel="Super Admin"
      items={items}
      active={section}
      onSelect={(key) => navigate({ search: { section: key as Section } })}
      user={{
        name: 'Super Administrateur',
        subtitle: 'Plateforme nationale',
        initials: 'SA',
        color: '#111a4a',
      }}
    >
      {section === 'overview' && <OverviewPanel pending={pendingCandidates} />}
      {section === 'candidats' && <CandidatesPanel />}
      {section === 'administrations' && <AdministrationsPanel />}
      {section === 'offres' && <OffresPanel />}
      {section === 'matching' && <MatchingPanel />}
      {section === 'formations' && <FormationsPanel />}
      {section === 'candidatures' && <CandidaturesPanel />}
      {section === 'parametres' && <SettingsPanel />}
    </DashboardShell>
  )
}

function PanelHeader({ title, subtitle, action }: { title: string; subtitle?: string; action?: React.ReactNode }) {
  return (
    <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
      <div>
        <h1 className="font-display text-xl font-extrabold text-ink-900">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-ink-500">{subtitle}</p>}
      </div>
      {action}
    </div>
  )
}

/* ------------------------------- Overview ------------------------------- */

function OverviewPanel({ pending }: { pending: number }) {
  const totalApplicants = jobs.reduce((s, j) => s + j.applicants, 0)
  const kpis = [
    { label: 'Candidats inscrits', value: formatNumber(adminCandidates.length), icon: 'Users', delta: '+12 cette semaine', color: 'bg-brand-50 text-brand-600' },
    { label: 'Administrations', value: formatNumber(institutions.length), icon: 'Building2', delta: '+3 ce mois', color: 'bg-accent-50 text-accent-700' },
    { label: 'Offres & concours', value: formatNumber(jobs.length), icon: 'Briefcase', delta: '+8 cette semaine', color: 'bg-gold-400/15 text-gold-600' },
    { label: 'Candidatures', value: formatNumber(totalApplicants), icon: 'FileText', delta: '+18 %', color: 'bg-brand-50 text-brand-600' },
  ]
  const max = Math.max(...signupsTrend.map((d) => d.value))
  const topOrgs = [...institutions].sort((a, b) => b.jobCount - a.jobCount).slice(0, 5)

  return (
    <div className="space-y-6">
      <PanelHeader
        title="Vue d’ensemble"
        subtitle="Pilotage global de la plateforme nationale de l’emploi."
      />

      {/* Comptes en attente */}
      {pending > 0 && (
        <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-gold-400/30 bg-gold-400/10 p-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-400/20 text-gold-600">
            <UserCheck className="h-5 w-5" />
          </span>
          <p className="flex-1 text-sm text-ink-700">
            <span className="font-bold">{pending} compte(s) candidat</span> en attente de validation.
          </p>
          <Link to="/admin" search={{ section: 'candidats' }} className="btn-secondary">
            Examiner
          </Link>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((k, i) => (
          <motion.div
            key={k.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="card p-5"
          >
            <div className="flex items-center justify-between">
              <span className={cn('flex h-10 w-10 items-center justify-center rounded-xl', k.color)}>
                <Icon name={k.icon} className="h-5 w-5" />
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent-600">
                <TrendingUp className="h-3.5 w-3.5" />
                {k.delta}
              </span>
            </div>
            <p className="mt-3 font-display text-2xl font-extrabold text-ink-900">{k.value}</p>
            <p className="text-xs text-ink-500">{k.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        {/* Graphe inscriptions */}
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <h3 className="inline-flex items-center gap-2 font-display font-bold text-ink-900">
              <BarChart3 className="h-4 w-4 text-brand-600" /> Inscriptions candidats
            </h3>
            <span className="text-xs text-ink-400">6 derniers mois</span>
          </div>
          <div className="mt-6 flex h-52 flex-col">
            <div className="flex flex-1 items-end gap-3">
              {signupsTrend.map((d, i) => (
                <div key={d.month} className="flex h-full flex-1 items-end">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${(d.value / max) * 100}%` }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="w-full rounded-t-lg bg-gradient-to-t from-brand-600 to-brand-400"
                    title={`${d.value} inscriptions`}
                  />
                </div>
              ))}
            </div>
            <div className="mt-2 flex gap-3">
              {signupsTrend.map((d) => (
                <span key={d.month} className="flex-1 text-center text-xs text-ink-400">
                  {d.month}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Activité récente */}
        <div className="card p-6">
          <h3 className="inline-flex items-center gap-2 font-display font-bold text-ink-900">
            <Activity className="h-4 w-4 text-brand-600" /> Activité récente
          </h3>
          <ul className="mt-4 space-y-3">
            {activityFeed.map((a) => (
              <li key={a.id} className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-500" />
                <div>
                  <p className="text-sm text-ink-700">{a.text}</p>
                  <p className="text-xs text-ink-400">
                    {a.daysAgo === 0 ? "Aujourd'hui" : `il y a ${a.daysAgo} j`}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Top administrations */}
      <div className="card p-6">
        <h3 className="font-display font-bold text-ink-900">Administrations les plus actives</h3>
        <div className="mt-4 space-y-3">
          {topOrgs.map((o) => (
            <div key={o.id} className="flex items-center gap-3">
              <Avatar initials={o.logoInitials} color={o.logoColor} className="!rounded-lg" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-ink-900">{o.name}</p>
                <p className="truncate text-xs text-ink-500">{o.type}</p>
              </div>
              <span className="shrink-0 text-sm font-bold text-accent-700">{o.jobCount} offres</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------ Kebab menu ------------------------------ */

interface KebabAction {
  label: string
  icon: typeof Eye
  onClick: () => void
  danger?: boolean
}

function Kebab({ actions }: { actions: KebabAction[] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className={cn(
          'flex h-8 w-8 items-center justify-center rounded-lg text-ink-400 transition hover:bg-ink-100 hover:text-ink-700',
          open && 'bg-ink-100 text-ink-700',
        )}
        aria-label="Actions"
      >
        <MoreVertical className="h-4 w-4" />
      </button>
      <AnimatePresence>
        {open && (
          <>
            <div className="fixed inset-0 z-30" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -4 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -4 }}
              transition={{ duration: 0.14 }}
              className="absolute right-0 z-40 mt-1 w-48 overflow-hidden rounded-xl border border-ink-100 bg-white p-1.5 shadow-card-hover"
            >
              {actions.map((a, i) => (
                <button
                  key={i}
                  onClick={() => {
                    a.onClick()
                    setOpen(false)
                  }}
                  className={cn(
                    'flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition',
                    a.danger ? 'text-red-600 hover:bg-red-50' : 'text-ink-700 hover:bg-ink-50',
                  )}
                >
                  <a.icon className="h-4 w-4" />
                  {a.label}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ------------------------------ Candidats ------------------------------ */

function CandidatesPanel() {
  const [list, setList] = useState<AdminCandidate[]>(adminCandidates)
  const [q, setQ] = useState('')

  const filtered = list.filter(
    (c) =>
      c.name.toLowerCase().includes(q.toLowerCase()) ||
      c.title.toLowerCase().includes(q.toLowerCase()) ||
      c.domain.toLowerCase().includes(q.toLowerCase()),
  )

  const setStatus = (id: string, status: AdminAccountStatus) =>
    setList((prev) => prev.map((c) => (c.id === id ? { ...c, status } : c)))
  const remove = (id: string) => setList((prev) => prev.filter((c) => c.id !== id))

  const actions = (c: AdminCandidate): KebabAction[] => [
    { label: 'Voir le profil', icon: Eye, onClick: () => {} },
    c.status === 'Suspendu'
      ? { label: 'Réactiver', icon: CheckCircle2, onClick: () => setStatus(c.id, 'Actif') }
      : c.status === 'En attente'
        ? { label: 'Valider le compte', icon: CheckCircle2, onClick: () => setStatus(c.id, 'Actif') }
        : { label: 'Suspendre', icon: Ban, onClick: () => setStatus(c.id, 'Suspendu') },
    { label: 'Supprimer', icon: Trash2, onClick: () => remove(c.id), danger: true },
  ]

  return (
    <div>
      <PanelHeader title="Candidats" subtitle={`${list.length} candidats inscrits sur la plateforme.`} />
      <SearchInput value={q} onChange={setQ} placeholder="Rechercher un candidat…" />

      {/* Desktop */}
      <div className="card mt-4 hidden md:block">
        <div className="grid grid-cols-[minmax(0,1.4fr)_1fr_120px_120px_44px] items-center gap-4 border-b border-ink-100 bg-ink-50/60 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-ink-400">
          <span>Candidat</span>
          <span>Domaine</span>
          <span>Statut</span>
          <span>Inscrit</span>
          <span className="sr-only">Actions</span>
        </div>
        <div className="divide-y divide-ink-100">
          {filtered.map((c) => (
            <div key={c.id} className="grid grid-cols-[minmax(0,1.4fr)_1fr_120px_120px_44px] items-center gap-4 px-5 py-3">
              <div className="flex min-w-0 items-center gap-3">
                <Avatar initials={initials(c.name)} color={c.avatarColor} />
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-ink-900">{c.name}</p>
                  <p className="truncate text-xs text-ink-500">{c.title}</p>
                </div>
              </div>
              <p className="truncate text-sm text-ink-600">{c.domain}</p>
              <div><Badge variant={accountStatusVariant[c.status]}>{c.status}</Badge></div>
              <p className="text-sm text-ink-500">il y a {c.registeredDaysAgo} j</p>
              <div className="flex justify-end"><Kebab actions={actions(c)} /></div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="mt-4 space-y-3 md:hidden">
        {filtered.map((c) => (
          <div key={c.id} className="card p-4">
            <div className="flex items-start gap-3">
              <Avatar initials={initials(c.name)} color={c.avatarColor} size="lg" className="!h-11 !w-11" />
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-ink-900">{c.name}</p>
                    <p className="truncate text-sm text-ink-500">{c.title}</p>
                  </div>
                  <Kebab actions={actions(c)} />
                </div>
                <p className="mt-1 truncate text-xs text-ink-400">{c.domain} · {regionName(c.regionId)}</p>
                <div className="mt-2"><Badge variant={accountStatusVariant[c.status]}>{c.status}</Badge></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* --------------------------- Administrations --------------------------- */

function AdministrationsPanel() {
  const [list, setList] = useState<Institution[]>(institutions)
  const [q, setQ] = useState('')
  const filtered = list.filter(
    (o) => o.name.toLowerCase().includes(q.toLowerCase()) || o.type.toLowerCase().includes(q.toLowerCase()),
  )
  const toggleVerified = (id: string) =>
    setList((prev) => prev.map((o) => (o.id === id ? { ...o, verified: !o.verified } : o)))
  const remove = (id: string) => setList((prev) => prev.filter((o) => o.id !== id))

  const actions = (o: Institution): KebabAction[] => [
    { label: 'Voir la fiche', icon: Eye, onClick: () => {} },
    o.verified
      ? { label: 'Retirer la vérif.', icon: Ban, onClick: () => toggleVerified(o.id) }
      : { label: 'Vérifier', icon: BadgeCheck, onClick: () => toggleVerified(o.id) },
    { label: 'Supprimer', icon: Trash2, onClick: () => remove(o.id), danger: true },
  ]

  return (
    <div>
      <PanelHeader title="Administrations" subtitle={`${list.length} organismes enregistrés.`} />
      <SearchInput value={q} onChange={setQ} placeholder="Rechercher une administration…" />

      <div className="card mt-4 hidden md:block">
        <div className="grid grid-cols-[minmax(0,1.6fr)_1fr_100px_120px_44px] items-center gap-4 border-b border-ink-100 bg-ink-50/60 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-ink-400">
          <span>Organisme</span>
          <span>Type</span>
          <span className="text-right">Offres</span>
          <span>Statut</span>
          <span className="sr-only">Actions</span>
        </div>
        <div className="divide-y divide-ink-100">
          {filtered.map((o) => (
            <div key={o.id} className="grid grid-cols-[minmax(0,1.6fr)_1fr_100px_120px_44px] items-center gap-4 px-5 py-3">
              <div className="flex min-w-0 items-center gap-3">
                <Avatar initials={o.logoInitials} color={o.logoColor} className="!rounded-lg" />
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-ink-900">{o.shortName}</p>
                  <p className="truncate text-xs text-ink-500">{regionName(o.regionId)}</p>
                </div>
              </div>
              <p className="truncate text-sm text-ink-600">{o.type}</p>
              <p className="text-right text-sm font-semibold text-ink-800">{o.jobCount}</p>
              <div>
                {o.verified ? (
                  <Badge variant="accent" icon={<BadgeCheck className="h-3 w-3" />}>Vérifié</Badge>
                ) : (
                  <Badge variant="gold">En attente</Badge>
                )}
              </div>
              <div className="flex justify-end"><Kebab actions={actions(o)} /></div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 space-y-3 md:hidden">
        {filtered.map((o) => (
          <div key={o.id} className="card p-4">
            <div className="flex items-start gap-3">
              <Avatar initials={o.logoInitials} color={o.logoColor} size="lg" className="!h-11 !w-11 !rounded-lg" />
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-ink-900">{o.shortName}</p>
                    <p className="truncate text-xs text-ink-500">{o.type}</p>
                  </div>
                  <Kebab actions={actions(o)} />
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  {o.verified ? (
                    <Badge variant="accent" icon={<BadgeCheck className="h-3 w-3" />}>Vérifié</Badge>
                  ) : (
                    <Badge variant="gold">En attente</Badge>
                  )}
                  <span className="text-xs text-ink-500">{o.jobCount} offres</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ------------------------------- Offres ------------------------------- */

function OffresPanel() {
  const navigate = useNavigate()
  const [list, setList] = useState(jobs)
  const [q, setQ] = useState('')
  const filtered = list.filter((j) => j.title.toLowerCase().includes(q.toLowerCase()))
  const remove = (id: string) => setList((prev) => prev.filter((j) => j.id !== id))

  return (
    <div>
      <PanelHeader title="Offres & concours" subtitle={`${list.length} annonces publiées sur la plateforme.`} />
      <SearchInput value={q} onChange={setQ} placeholder="Rechercher une offre…" />

      <div className="card mt-4 hidden md:block">
        <div className="grid grid-cols-[minmax(0,2fr)_1fr_110px_90px_44px] items-center gap-4 border-b border-ink-100 bg-ink-50/60 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-ink-400">
          <span>Offre</span>
          <span>Type</span>
          <span className="text-right">Candidats</span>
          <span>Publiée</span>
          <span className="sr-only">Actions</span>
        </div>
        <div className="divide-y divide-ink-100">
          {filtered.map((j) => (
            <div key={j.id} className="grid grid-cols-[minmax(0,2fr)_1fr_110px_90px_44px] items-center gap-4 px-5 py-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-ink-900">{j.title}</p>
                <p className="truncate text-xs text-ink-400">{j.reference}</p>
              </div>
              <div><Badge variant="brand">{kindLabels[j.kind]}</Badge></div>
              <p className="text-right text-sm font-semibold text-ink-800">{j.applicants}</p>
              <p className="text-xs text-ink-500">{timeAgo(j.publishedAt)}</p>
              <div className="flex justify-end">
                <Kebab
                  actions={[
                    { label: 'Voir l’offre', icon: Eye, onClick: () => navigate({ to: '/offres/$slug', params: { slug: j.slug } }) },
                    { label: 'Retirer', icon: Trash2, onClick: () => remove(j.id), danger: true },
                  ]}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 space-y-3 md:hidden">
        {filtered.map((j) => (
          <div key={j.id} className="card p-4">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <p className="truncate font-semibold text-ink-900">{j.title}</p>
                <p className="truncate text-xs text-ink-400">{j.reference}</p>
              </div>
              <Kebab
                actions={[
                  { label: 'Voir l’offre', icon: Eye, onClick: () => navigate({ to: '/offres/$slug', params: { slug: j.slug } }) },
                  { label: 'Retirer', icon: Trash2, onClick: () => remove(j.id), danger: true },
                ]}
              />
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink-500">
              <Badge variant="brand">{kindLabels[j.kind]}</Badge>
              <span>{j.applicants} candidats</span>
              <span>Publiée {timeAgo(j.publishedAt)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* --------------------------- Profils par offre --------------------------- */

const TOKEN_STOP = new Set(['fonction', 'publique', 'action', 'sociale'])

function tokenize(s: string): string[] {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .split(/[^a-z]+/)
    .filter((w) => w.length > 3 && !TOKEN_STOP.has(w))
}

/** Score de correspondance (mock, déterministe) entre un candidat et une offre. */
function matchScore(candidate: AdminCandidate, job: Job): number {
  const jobTokens = new Set(tokenize(categoryName(job.categoryId)))
  const overlap = tokenize(candidate.domain).filter((t) => jobTokens.has(t)).length
  let score = 52 + overlap * 23
  if (candidate.regionId === job.regionId) score += 11
  const h = [...candidate.id].reduce((a, ch) => a + ch.charCodeAt(0), 0)
  score += (h % 9) - 4
  return Math.max(44, Math.min(99, score))
}

function matchTier(score: number): { label: string; variant: 'accent' | 'brand' | 'neutral' } {
  if (score >= 85) return { label: 'Excellent', variant: 'accent' }
  if (score >= 70) return { label: 'Bon profil', variant: 'brand' }
  return { label: 'Moyen', variant: 'neutral' }
}

function MatchingPanel() {
  const [jobId, setJobId] = useState(jobs[0]?.id ?? '')
  const [onlyStrong, setOnlyStrong] = useState(false)
  const job = jobById(jobId)

  const ranked = job
    ? adminCandidates
        .map((c) => ({ candidate: c, score: matchScore(c, job) }))
        .filter((r) => (onlyStrong ? r.score >= 70 : true))
        .sort((a, b) => b.score - a.score)
    : []

  const inst = job ? institutionById(job.institutionId) : undefined

  return (
    <div>
      <PanelHeader
        title="Profils par offre"
        subtitle="Sélectionnez une offre pour découvrir les candidats qui y correspondent le mieux."
      />

      {/* Sélecteur d'offre */}
      <div className="card p-4 sm:p-5">
        <label className="label">Offre ciblée</label>
        <select value={jobId} onChange={(e) => setJobId(e.target.value)} className="input cursor-pointer">
          {jobs.map((j) => {
            const o = institutionById(j.institutionId)
            return (
              <option key={j.id} value={j.id}>
                {j.title} — {o?.shortName ?? ''}
              </option>
            )
          })}
        </select>

        {job && (
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-ink-100 pt-4 text-sm text-ink-600">
            <span className="inline-flex items-center gap-2">
              <Avatar initials={inst?.logoInitials ?? 'TL'} color={inst?.logoColor} className="!h-8 !w-8 !rounded-lg !text-xs" />
              <span className="font-semibold text-ink-900">{inst?.shortName}</span>
            </span>
            <Badge variant="brand">{kindLabels[job.kind]}</Badge>
            <Badge variant="neutral">{job.contractType}</Badge>
            <span className="text-ink-500">{categoryName(job.categoryId)}</span>
            <span className="text-ink-500">· {regionName(job.regionId)}</span>
          </div>
        )}
      </div>

      <div className="mb-4 mt-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-ink-600">
          <span className="font-bold text-ink-900">{ranked.length}</span> profil(s) correspondant(s)
        </p>
        <label className="flex cursor-pointer items-center gap-2 text-sm text-ink-600">
          <input
            type="checkbox"
            checked={onlyStrong}
            onChange={(e) => setOnlyStrong(e.target.checked)}
            className="h-4 w-4 accent-brand-600"
          />
          Correspondance ≥ 70 %
        </label>
      </div>

      <div className="space-y-3">
        {ranked.map(({ candidate: c, score }, i) => {
          const tier = matchTier(score)
          return (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i * 0.04, 0.25) }}
              className="card flex flex-wrap items-center gap-4 p-4"
            >
              <Avatar initials={initials(c.name)} color={c.avatarColor} size="lg" className="!h-12 !w-12" />

              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold text-ink-900">{c.name}</p>
                <p className="truncate text-sm text-ink-500">{c.title}</p>
                <p className="mt-0.5 truncate text-xs text-ink-400">
                  {c.domain} · {regionName(c.regionId)}
                </p>
              </div>

              {/* Score */}
              <div className="flex w-28 shrink-0 flex-col items-end gap-1">
                <span className="font-display text-lg font-extrabold text-brand-700">{score}%</span>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink-100">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500"
                    style={{ width: `${score}%` }}
                  />
                </div>
                <Badge variant={tier.variant}>{tier.label}</Badge>
              </div>

              <button className="btn-secondary w-full sm:w-auto">
                <Eye className="h-4 w-4" /> Voir le profil
              </button>
            </motion.div>
          )
        })}

        {ranked.length === 0 && (
          <div className="card p-10 text-center text-sm text-ink-500">
            Aucun profil ne correspond aux critères pour cette offre.
          </div>
        )}
      </div>
    </div>
  )
}

/* ------------------------------ Formations ------------------------------ */

function FormationsPanel() {
  const [list, setList] = useState(allTrainings)
  const remove = (id: string) => setList((prev) => prev.filter((t) => t.id !== id))

  return (
    <div>
      <PanelHeader
        title="Formations"
        subtitle={`${list.length} opportunités de formation publiées.`}
        action={<button className="btn-primary"><Plus className="h-4 w-4" /> Ajouter</button>}
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((t) => (
          <div key={t.id} className="card flex flex-col p-5">
            <div className="flex items-start justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl text-white" style={{ backgroundColor: t.color }}>
                <Icon name={t.icon} className="h-5 w-5" />
              </span>
              <Kebab
                actions={[
                  { label: 'Modifier', icon: Eye, onClick: () => {} },
                  { label: 'Supprimer', icon: Trash2, onClick: () => remove(t.id), danger: true },
                ]}
              />
            </div>
            <h3 className="mt-3 line-clamp-2 font-display text-sm font-bold text-ink-900">{t.title}</h3>
            <p className="mt-1 truncate text-xs text-ink-500">{t.provider}</p>
            <div className="mt-3 flex flex-wrap items-center gap-1.5 border-t border-ink-100 pt-3">
              <Badge variant="brand">{t.category}</Badge>
              {t.free ? <Badge variant="accent">Gratuit</Badge> : <Badge variant="gold">Payant</Badge>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ----------------------------- Candidatures ----------------------------- */

function CandidaturesPanel() {
  return (
    <div>
      <PanelHeader title="Candidatures" subtitle={`${applications.length} candidatures suivies sur la plateforme.`} />
      <div className="card divide-y divide-ink-100">
        {applications.map((a) => {
          const job = jobById(a.jobId)
          const user = userById(a.userId)
          return (
            <div key={a.id} className="flex flex-wrap items-center gap-3 px-5 py-4">
              <Avatar initials={user ? initials(`${user.firstName} ${user.lastName}`) : '?'} color={user?.avatarColor} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-ink-900">
                  {user ? `${user.firstName} ${user.lastName}` : 'Candidat'}
                </p>
                <p className="truncate text-xs text-ink-500">{job?.title ?? 'Offre'} · {a.reference}</p>
              </div>
              <span className="hidden text-xs text-ink-400 sm:block">{timeAgo(a.submittedAt)}</span>
              <Badge variant={statusVariant[a.status]} className="px-3 py-1.5">{a.status}</Badge>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ------------------------------ Paramètres ------------------------------ */

function SettingsPanel() {
  return (
    <div>
      <PanelHeader title="Paramètres de la plateforme" subtitle="Configuration générale et accès." />
      <div className="space-y-6">
        <div className="card p-6">
          <h3 className="font-display font-bold text-ink-900">Informations générales</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Field label="Nom de la plateforme" defaultValue="Président de la République du Bénin — Portail de l’Emploi" />
            <Field label="E-mail de contact" defaultValue="contact@mon-emploi.bj" />
            <Field label="Téléphone du support" defaultValue="+229 21 00 00 00" />
            <Field label="Région par défaut" defaultValue="District de la Capitale" />
          </div>
          <button className="btn-primary mt-5">Enregistrer</button>
        </div>

        <div className="card p-6">
          <h3 className="font-display font-bold text-ink-900">Modération</h3>
          <div className="mt-4 space-y-3">
            <Toggle label="Validation manuelle des comptes candidats" />
            <Toggle label="Vérification obligatoire des administrations" defaultChecked />
            <Toggle label="Modération des offres avant publication" defaultChecked />
          </div>
        </div>
      </div>
    </div>
  )
}

function Field({ label, defaultValue }: { label: string; defaultValue: string }) {
  return (
    <div>
      <label className="label">{label}</label>
      <input className="input" defaultValue={defaultValue} />
    </div>
  )
}

function Toggle({ label, defaultChecked }: { label: string; defaultChecked?: boolean }) {
  return (
    <label className="flex cursor-pointer items-center justify-between rounded-xl border border-ink-100 p-3.5">
      <span className="text-sm font-medium text-ink-700">{label}</span>
      <span className="relative inline-flex">
        <input type="checkbox" defaultChecked={defaultChecked} className="peer sr-only" />
        <span className="h-6 w-11 rounded-full bg-ink-200 transition peer-checked:bg-brand-600" />
        <span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition peer-checked:translate-x-5" />
      </span>
    </label>
  )
}

function SearchInput({
  value,
  onChange,
  placeholder,
}: {
  value: string
  onChange: (v: string) => void
  placeholder: string
}) {
  return (
    <div className="max-w-sm">
      <div className="relative">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
        <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="input pl-10" />
      </div>
    </div>
  )
}
