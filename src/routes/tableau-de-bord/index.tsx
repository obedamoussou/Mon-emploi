import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import {
  Bell,
  Bookmark,
  Briefcase,
  CalendarClock,
  CheckCircle2,
  Download,
  FileText,
  GraduationCap,
  LayoutDashboard,
  Mail,
  MapPin,
  Pencil,
  Phone,
  Plus,
  Settings,
  Trash2,
  Upload,
  UserRound,
} from 'lucide-react'
import { DashboardShell, type DashboardNavItem } from '~/layouts/DashboardShell'
import { Avatar } from '~/components/Avatar'
import { Badge } from '~/components/Badge'
import { EmptyState } from '~/components/EmptyState'
import { useUserApplications } from '~/hooks/queries'
import { currentUser } from '~/mocks/users'
import { coverLetters, notifications } from '~/mocks/dashboard'
import { jobById } from '~/mocks/jobs'
import { institutionById } from '~/mocks/institutions'
import { regionName } from '~/mocks/regions'
import { statusVariant } from '~/lib/display'
import { cn, formatDate, initials, timeAgo } from '~/lib/utils'
import type { Application } from '~/types'

type Section =
  | 'profil'
  | 'cv'
  | 'lettres'
  | 'candidatures'
  | 'notifications'
  | 'parametres'

interface DashSearch {
  section?: Section
}

export const Route = createFileRoute('/tableau-de-bord/')({
  validateSearch: (search: Record<string, unknown>): DashSearch => ({
    section: (search.section as Section) ?? undefined,
  }),
  component: CandidateDashboard,
})

function CandidateDashboard() {
  const { section = 'profil' } = Route.useSearch()
  const navigate = useNavigate({ from: Route.fullPath })
  const { data: applications = [] } = useUserApplications(currentUser.id)

  const unread = notifications.filter((n) => !n.read).length

  const items: DashboardNavItem[] = [
    { key: 'profil', label: 'Profil', icon: UserRound },
    { key: 'cv', label: 'Mon CV', icon: FileText },
    { key: 'lettres', label: 'Lettres de motivation', icon: Pencil },
    { key: 'candidatures', label: 'Mes candidatures', icon: Briefcase, badge: applications.length },
    { key: 'notifications', label: 'Notifications', icon: Bell, badge: unread },
    { key: 'parametres', label: 'Paramètres', icon: Settings },
  ]

  return (
    <DashboardShell
      brandLabel="Espace candidat"
      items={items}
      active={section}
      onSelect={(key) => navigate({ search: { section: key as Section } })}
      user={{
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        subtitle: currentUser.title,
        initials: initials(`${currentUser.firstName} ${currentUser.lastName}`),
        color: currentUser.avatarColor,
      }}
    >
      {section === 'profil' && <ProfilePanel applications={applications} />}
      {section === 'cv' && <CvPanel />}
      {section === 'lettres' && <LettersPanel />}
      {section === 'candidatures' && <ApplicationsPanel applications={applications} />}
      {section === 'notifications' && <NotificationsPanel />}
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

function ProfilePanel({ applications }: { applications: Application[] }) {
  const u = currentUser
  const quick = [
    { label: 'Candidatures', value: applications.length, icon: Briefcase, color: 'text-brand-600 bg-brand-50' },
    { label: 'Offres sauvées', value: u.savedJobs.length, icon: Bookmark, color: 'text-accent-700 bg-accent-50' },
    { label: 'Notifications', value: notifications.filter((n) => !n.read).length, icon: Bell, color: 'text-gold-600 bg-gold-400/15' },
  ]
  return (
    <div className="space-y-6">
      {/* Bandeau profil */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="card overflow-hidden"
      >
        <div className="h-24 bg-gradient-to-r from-brand-600 to-brand-800" />
        <div className="px-6 pb-6">
          <div className="-mt-10 flex flex-wrap items-end justify-between gap-4">
            <div className="flex items-end gap-4">
              <Avatar
                initials={initials(`${u.firstName} ${u.lastName}`)}
                color={u.avatarColor}
                size="xl"
                className="ring-4 ring-white"
              />
              <div className="pb-1">
                <h2 className="font-display text-lg font-bold text-ink-900">
                  {u.firstName} {u.lastName}
                </h2>
                <p className="text-sm text-ink-500">{u.title}</p>
              </div>
            </div>
            <button className="btn-secondary">
              <Pencil className="h-4 w-4" /> Modifier le profil
            </button>
          </div>

          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-ink-500">
            <span className="inline-flex items-center gap-1.5"><Mail className="h-4 w-4 text-ink-400" />{u.email}</span>
            <span className="inline-flex items-center gap-1.5"><Phone className="h-4 w-4 text-ink-400" />{u.phone}</span>
            <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-ink-400" />{u.city}, {regionName(u.regionId)}</span>
          </div>

          {/* Complétion */}
          <div className="mt-5 rounded-xl bg-ink-50 p-4">
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold text-ink-700">Complétion du profil</span>
              <span className="font-bold text-brand-700">{u.completion} %</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-ink-200">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-700"
                initial={{ width: 0 }}
                animate={{ width: `${u.completion}%` }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats rapides */}
      <div className="grid gap-4 sm:grid-cols-3">
        {quick.map((q) => (
          <div key={q.label} className="card flex items-center gap-4 p-5">
            <div className={cn('flex h-11 w-11 items-center justify-center rounded-xl', q.color)}>
              <q.icon className="h-5 w-5" />
            </div>
            <div>
              <p className="font-display text-2xl font-extrabold text-ink-900">{q.value}</p>
              <p className="text-xs text-ink-500">{q.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bio */}
      <div className="card p-6">
        <h3 className="font-display font-bold text-ink-900">À propos</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-600">{u.bio}</p>
      </div>

      {/* Compétences & langues */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card p-6">
          <h3 className="font-display font-bold text-ink-900">Compétences</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {u.skills.map((s) => (
              <Badge key={s} variant="brand" className="px-3 py-1.5">{s}</Badge>
            ))}
          </div>
          <h3 className="mt-6 font-display font-bold text-ink-900">Langues</h3>
          <ul className="mt-3 space-y-2">
            {u.languages.map((l) => (
              <li key={l.name} className="flex items-center justify-between text-sm">
                <span className="font-medium text-ink-700">{l.name}</span>
                <span className="text-ink-500">{l.level}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card p-6">
          <h3 className="font-display font-bold text-ink-900">Expériences</h3>
          <ul className="mt-3 space-y-4">
            {u.experiences.map((exp, i) => (
              <li key={i} className="border-l-2 border-brand-100 pl-4">
                <p className="text-sm font-semibold text-ink-900">{exp.title}</p>
                <p className="text-xs text-ink-500">
                  {exp.organization} · {exp.startYear} – {exp.endYear ?? 'présent'}
                </p>
                <p className="mt-1 text-sm text-ink-600">{exp.description}</p>
              </li>
            ))}
          </ul>
          <h3 className="mt-6 inline-flex items-center gap-2 font-display font-bold text-ink-900">
            <GraduationCap className="h-4 w-4 text-brand-600" /> Formation
          </h3>
          <ul className="mt-3 space-y-2">
            {u.education.map((ed, i) => (
              <li key={i} className="text-sm">
                <p className="font-semibold text-ink-800">{ed.degree}</p>
                <p className="text-xs text-ink-500">{ed.school} · {ed.year}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function CvPanel() {
  return (
    <div>
      <PanelHeader
        title="Mon CV"
        subtitle="Gérez le curriculum vitæ utilisé pour vos candidatures."
      />
      <div className="card p-6">
        <div className="flex flex-wrap items-center gap-4 rounded-xl border border-ink-100 bg-ink-50/50 p-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
            <FileText className="h-6 w-6" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate font-semibold text-ink-900">{currentUser.cvFileName}</p>
            <p className="text-xs text-ink-500">PDF · 412 Ko · mis à jour il y a 8 jours</p>
          </div>
          <div className="flex gap-2">
            <button className="btn-secondary"><Download className="h-4 w-4" /> Télécharger</button>
            <button className="btn-ghost text-red-600 hover:bg-red-50"><Trash2 className="h-4 w-4" /></button>
          </div>
        </div>

        <button className="mt-5 flex w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-ink-200 bg-ink-50/40 px-6 py-10 text-center transition hover:border-brand-400 hover:bg-brand-50/40">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
            <Upload className="h-6 w-6" />
          </div>
          <p className="mt-3 text-sm font-semibold text-ink-800">Téléverser un nouveau CV</p>
          <p className="mt-1 text-xs text-ink-400">PDF, DOC, DOCX — 5 Mo max</p>
        </button>
      </div>
    </div>
  )
}

function LettersPanel() {
  return (
    <div>
      <PanelHeader
        title="Lettres de motivation"
        subtitle="Réutilisez vos lettres types pour candidater plus vite."
        action={<button className="btn-primary"><Plus className="h-4 w-4" /> Nouvelle lettre</button>}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {coverLetters.map((cl) => (
          <div key={cl.id} className="card flex flex-col p-5">
            <div className="flex items-start justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Pencil className="h-5 w-5" />
              </div>
              <span className="text-xs text-ink-400">Modifiée {cl.updatedDaysAgo}j</span>
            </div>
            <h3 className="mt-3 font-semibold text-ink-900">{cl.title}</h3>
            <p className="mt-1.5 line-clamp-3 flex-1 text-sm text-ink-500">{cl.excerpt}</p>
            <div className="mt-4 flex gap-2 border-t border-ink-100 pt-3">
              <button className="btn-secondary flex-1"><Pencil className="h-4 w-4" /> Modifier</button>
              <button className="btn-ghost text-red-600 hover:bg-red-50"><Trash2 className="h-4 w-4" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ApplicationsPanel({ applications }: { applications: Application[] }) {
  if (applications.length === 0) {
    return (
      <div>
        <PanelHeader title="Mes candidatures" />
        <EmptyState
          icon={<Briefcase className="h-7 w-7" />}
          title="Aucune candidature"
          description="Parcourez les offres et postulez pour les retrouver ici."
          action={<Link to="/offres" className="btn-primary">Voir les offres</Link>}
        />
      </div>
    )
  }

  return (
    <div>
      <PanelHeader
        title="Mes candidatures"
        subtitle={`${applications.length} dossiers suivis en temps réel.`}
      />
      <div className="space-y-4">
        {applications.map((app) => {
          const job = jobById(app.jobId)
          const inst = job ? institutionById(job.institutionId) : undefined
          return (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card p-5"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-start gap-4">
                  <Avatar initials={inst?.logoInitials ?? 'TL'} color={inst?.logoColor} size="lg" className="!rounded-xl" />
                  <div>
                    {job ? (
                      <Link
                        to="/offres/$slug"
                        params={{ slug: job.slug }}
                        className="font-display font-bold text-ink-900 hover:text-brand-700"
                      >
                        {job.title}
                      </Link>
                    ) : (
                      <p className="font-display font-bold text-ink-900">Offre archivée</p>
                    )}
                    <p className="text-sm text-ink-500">{inst?.name}</p>
                    <p className="mt-1 text-xs text-ink-400">
                      Réf. {app.reference} · Envoyée {timeAgo(app.submittedAt)}
                    </p>
                  </div>
                </div>
                <Badge variant={statusVariant[app.status]} className="px-3 py-1.5">{app.status}</Badge>
              </div>

              {/* Timeline */}
              <div className="mt-5 flex items-center gap-1 overflow-x-auto pb-1">
                {app.timeline.map((t, i) => (
                  <div key={i} className="flex flex-1 items-center last:flex-none">
                    <div className="flex flex-col items-center gap-1.5 px-1">
                      <div
                        className={cn(
                          'flex h-7 w-7 items-center justify-center rounded-full',
                          t.done ? 'bg-accent-100 text-accent-700' : 'bg-ink-100 text-ink-400',
                        )}
                      >
                        {t.done ? <CheckCircle2 className="h-4 w-4" /> : <CalendarClock className="h-4 w-4" />}
                      </div>
                      <span className={cn('whitespace-nowrap text-[10px]', t.done ? 'text-ink-700' : 'text-ink-400')}>
                        {t.label}
                      </span>
                    </div>
                    {i < app.timeline.length - 1 && (
                      <div className={cn('mx-1 h-0.5 min-w-6 flex-1 rounded-full', t.done ? 'bg-accent-400' : 'bg-ink-200')} />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

const notifIcon: Record<string, React.ReactNode> = {
  application: <Briefcase className="h-5 w-5" />,
  message: <Mail className="h-5 w-5" />,
  alert: <Bell className="h-5 w-5" />,
  system: <LayoutDashboard className="h-5 w-5" />,
}

function NotificationsPanel() {
  return (
    <div>
      <PanelHeader
        title="Notifications"
        subtitle="Suivez l’actualité de vos candidatures et vos alertes emploi."
        action={<button className="btn-ghost text-sm">Tout marquer comme lu</button>}
      />
      <div className="card divide-y divide-ink-100">
        {notifications.map((n) => (
          <div key={n.id} className={cn('flex gap-4 p-4', !n.read && 'bg-brand-50/40')}>
            <div className={cn(
              'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl',
              n.read ? 'bg-ink-100 text-ink-500' : 'bg-brand-100 text-brand-700',
            )}>
              {notifIcon[n.type]}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <p className="font-semibold text-ink-900">{n.title}</p>
                {!n.read && <span className="h-2 w-2 rounded-full bg-brand-600" />}
              </div>
              <p className="mt-0.5 text-sm text-ink-600">{n.body}</p>
              <p className="mt-1 text-xs text-ink-400">
                {n.daysAgo === 0 ? "Aujourd'hui" : `il y a ${n.daysAgo} jour(s)`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SettingsPanel() {
  return (
    <div>
      <PanelHeader title="Paramètres" subtitle="Gérez votre compte et vos préférences." />
      <div className="space-y-6">
        <div className="card p-6">
          <h3 className="font-display font-bold text-ink-900">Informations du compte</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Field label="Prénom" defaultValue={currentUser.firstName} />
            <Field label="Nom" defaultValue={currentUser.lastName} />
            <Field label="E-mail" defaultValue={currentUser.email} />
            <Field label="Téléphone" defaultValue={currentUser.phone} />
          </div>
          <button className="btn-primary mt-5">Enregistrer</button>
        </div>

        <div className="card p-6">
          <h3 className="font-display font-bold text-ink-900">Préférences de notification</h3>
          <div className="mt-4 space-y-3">
            <Toggle label="Alertes emploi personnalisées" defaultChecked />
            <Toggle label="Suivi de mes candidatures par e-mail" defaultChecked />
            <Toggle label="Lettre d’information mensuelle" />
          </div>
        </div>

        <div className="card border-red-100 p-6">
          <h3 className="font-display font-bold text-red-600">Zone de danger</h3>
          <p className="mt-1 text-sm text-ink-500">La suppression du compte est définitive.</p>
          <button className="btn mt-4 border border-red-200 bg-white text-red-600 hover:bg-red-50">
            <Trash2 className="h-4 w-4" /> Supprimer mon compte
          </button>
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
