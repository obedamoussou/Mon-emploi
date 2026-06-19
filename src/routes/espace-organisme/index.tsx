import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import {
  BarChart3,
  Briefcase,
  CheckCircle2,
  Copy,
  Eye,
  LayoutDashboard,
  Mail,
  MessageSquare,
  MoreVertical,
  Pause,
  Pencil,
  Play,
  Plus,
  Search,
  Settings,
  Trash2,
  TrendingUp,
  Users,
  XCircle,
} from 'lucide-react'
import { DashboardShell, type DashboardNavItem } from '~/layouts/DashboardShell'
import { Avatar } from '~/components/Avatar'
import { Badge } from '~/components/Badge'
import { Icon } from '~/components/Icon'
import { Modal } from '~/components/Modal'
import {
  applicationsTrend,
  orgCandidates,
  orgMessages,
  orgOffers,
  orgStats,
  type OrgOffer,
} from '~/mocks/dashboard'
import { cn, formatNumber, initials } from '~/lib/utils'

type Section = 'stats' | 'offres' | 'candidatures' | 'messages' | 'parametres'

interface OrgSearch {
  section?: Section
}

export const Route = createFileRoute('/espace-organisme/')({
  validateSearch: (search: Record<string, unknown>): OrgSearch => ({
    section: (search.section as Section) ?? undefined,
  }),
  component: OrgDashboard,
})

const ORG = {
  name: 'Société Nationale d’Électricité',
  short: 'SNE',
  color: '#ea580c',
}

function OrgDashboard() {
  const { section = 'stats' } = Route.useSearch()
  const navigate = useNavigate({ from: Route.fullPath })

  const unreadMsg = orgMessages.filter((m) => m.unread).length
  const newCandidates = orgCandidates.filter((c) => c.status === 'Nouveau').length

  const items: DashboardNavItem[] = [
    { key: 'stats', label: 'Tableau de bord', icon: LayoutDashboard },
    { key: 'offres', label: 'Gestion des offres', icon: Briefcase, badge: orgOffers.length },
    { key: 'candidatures', label: 'Candidatures', icon: Users, badge: newCandidates },
    { key: 'messages', label: 'Messages', icon: MessageSquare, badge: unreadMsg },
    { key: 'parametres', label: 'Paramètres', icon: Settings },
  ]

  return (
    <DashboardShell
      brandLabel="Espace organisme"
      items={items}
      active={section}
      onSelect={(key) => navigate({ search: { section: key as Section } })}
      user={{ name: ORG.name, subtitle: 'Organisme vérifié', initials: ORG.short, color: ORG.color }}
    >
      {section === 'stats' && <StatsPanel />}
      {section === 'offres' && <OffersPanel />}
      {section === 'candidatures' && <CandidatesPanel />}
      {section === 'messages' && <MessagesPanel />}
      {section === 'parametres' && <OrgSettingsPanel />}
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

function StatsPanel() {
  const max = Math.max(...applicationsTrend.map((d) => d.value))
  return (
    <div className="space-y-6">
      <PanelHeader
        title="Tableau de bord"
        subtitle="Vue d’ensemble de votre activité de recrutement."
        action={
          <Link to="/espace-organisme/nouvelle-offre" className="btn-primary">
            <Plus className="h-4 w-4" /> Publier une offre
          </Link>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {orgStats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="card p-5"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon name={s.icon} className="h-5 w-5" />
              </div>
              <span className={cn(
                'inline-flex items-center gap-1 text-xs font-semibold',
                s.trend === 'up' ? 'text-accent-600' : 'text-red-500',
              )}>
                <TrendingUp className="h-3.5 w-3.5" />
                {s.delta}
              </span>
            </div>
            <p className="mt-3 font-display text-2xl font-extrabold text-ink-900">{s.value}</p>
            <p className="text-xs text-ink-500">{s.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        {/* Graphe */}
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <h3 className="inline-flex items-center gap-2 font-display font-bold text-ink-900">
              <BarChart3 className="h-4 w-4 text-brand-600" /> Candidatures reçues
            </h3>
            <span className="text-xs text-ink-400">6 derniers mois</span>
          </div>
          <div className="mt-6 flex h-48 items-end gap-3">
            {applicationsTrend.map((d, i) => (
              <div key={d.month} className="flex flex-1 flex-col items-center gap-2">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${(d.value / max) * 100}%` }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="w-full rounded-t-lg bg-gradient-to-t from-brand-600 to-brand-400"
                  title={`${d.value} candidatures`}
                />
                <span className="text-xs text-ink-400">{d.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Derniers candidats */}
        <div className="card p-6">
          <h3 className="font-display font-bold text-ink-900">Candidats récents</h3>
          <div className="mt-4 space-y-3">
            {orgCandidates.slice(0, 4).map((c) => (
              <div key={c.id} className="flex items-center gap-3">
                <Avatar initials={initials(c.name)} color={c.avatarColor} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-ink-900">{c.name}</p>
                  <p className="truncate text-xs text-ink-500">{c.role}</p>
                </div>
                <span className="text-xs font-bold text-accent-700">{c.matchScore}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const offerStatusVariant = {
  Active: 'accent',
  'En pause': 'gold',
  Clôturée: 'neutral',
} as const

const COLS = 'grid-cols-[minmax(0,1fr)_128px_104px_96px_48px]'

function OffersPanel() {
  const [offers, setOffers] = useState<OrgOffer[]>(orgOffers)
  const [menuOpen, setMenuOpen] = useState<string | null>(null)
  const [editing, setEditing] = useState<OrgOffer | null>(null)
  const [deleting, setDeleting] = useState<OrgOffer | null>(null)

  const setStatus = (id: string, status: OrgOffer['status']) =>
    setOffers((prev) => prev.map((o) => (o.id === id ? { ...o, status } : o)))

  const duplicate = (o: OrgOffer) =>
    setOffers((prev) => [
      { ...o, id: `o${Date.now()}`, ref: `${o.ref}-COPIE`, status: 'En pause', applicants: 0, views: 0 },
      ...prev,
    ])

  const remove = (id: string) => setOffers((prev) => prev.filter((o) => o.id !== id))

  const saveEdit = (updated: OrgOffer) =>
    setOffers((prev) => prev.map((o) => (o.id === updated.id ? updated : o)))

  return (
    <div>
      <PanelHeader
        title="Gestion des offres"
        subtitle="Créez, modifiez et suivez la performance de vos annonces."
        action={
          <Link to="/espace-organisme/nouvelle-offre" className="btn-primary">
            <Plus className="h-4 w-4" /> Nouvelle offre
          </Link>
        }
      />

      {/* ---- Tableau desktop ---- */}
      <div className="card hidden md:block">
        <div
          className={cn(
            'grid items-center gap-4 border-b border-ink-100 bg-ink-50/60 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-ink-400',
            COLS,
          )}
        >
          <span>Offre</span>
          <span>Statut</span>
          <span className="text-right">Candidats</span>
          <span className="text-right">Vues</span>
          <span className="sr-only">Actions</span>
        </div>
        <div className="divide-y divide-ink-100">
          {offers.map((o) => (
            <div key={o.id} className={cn('grid items-center gap-4 px-5 py-4', COLS)}>
              <div className="min-w-0">
                <p className="truncate font-semibold text-ink-900">{o.title}</p>
                <p className="truncate text-xs text-ink-400">
                  Réf. {o.ref}
                  {o.daysLeft > 0 && o.status === 'Active' && ` · ${o.daysLeft} j restants`}
                </p>
              </div>
              <div>
                <Badge variant={offerStatusVariant[o.status]}>{o.status}</Badge>
              </div>
              <div className="text-right text-sm font-semibold text-ink-800">{o.applicants}</div>
              <div className="text-right text-sm font-semibold text-ink-800">
                {formatNumber(o.views)}
              </div>
              <div className="flex justify-end">
                <RowActions
                  offer={o}
                  open={menuOpen === o.id}
                  onToggle={() => setMenuOpen((cur) => (cur === o.id ? null : o.id))}
                  onClose={() => setMenuOpen(null)}
                  onEdit={() => setEditing(o)}
                  onStatus={setStatus}
                  onDuplicate={duplicate}
                  onDelete={() => setDeleting(o)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---- Cartes mobile ---- */}
      <div className="space-y-3 md:hidden">
        {offers.map((o) => (
          <div key={o.id} className="card p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="font-semibold text-ink-900">{o.title}</p>
                <p className="mt-0.5 truncate text-xs text-ink-400">Réf. {o.ref}</p>
              </div>
              <Badge variant={offerStatusVariant[o.status]}>{o.status}</Badge>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-500">
              <span className="inline-flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5 text-ink-400" /> {o.applicants} candidats
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Eye className="h-3.5 w-3.5 text-ink-400" /> {formatNumber(o.views)} vues
              </span>
              {o.daysLeft > 0 && o.status === 'Active' && (
                <span className="text-ink-400">{o.daysLeft} j restants</span>
              )}
            </div>

            <div className="mt-4 flex items-center gap-2 border-t border-ink-100 pt-3">
              <button onClick={() => setEditing(o)} className="btn-secondary flex-1">
                <Pencil className="h-4 w-4" /> Modifier
              </button>
              {o.status === 'En pause' ? (
                <button onClick={() => setStatus(o.id, 'Active')} className="btn-secondary flex-1">
                  <Play className="h-4 w-4" /> Réactiver
                </button>
              ) : o.status === 'Active' ? (
                <button onClick={() => setStatus(o.id, 'En pause')} className="btn-secondary flex-1">
                  <Pause className="h-4 w-4" /> Pause
                </button>
              ) : null}
              <RowActions
                offer={o}
                open={menuOpen === o.id}
                onToggle={() => setMenuOpen((cur) => (cur === o.id ? null : o.id))}
                onClose={() => setMenuOpen(null)}
                onEdit={() => setEditing(o)}
                onStatus={setStatus}
                onDuplicate={duplicate}
                onDelete={() => setDeleting(o)}
              />
            </div>
          </div>
        ))}
      </div>

      <EditOfferModal
        offer={editing}
        onClose={() => setEditing(null)}
        onSave={(u) => {
          saveEdit(u)
          setEditing(null)
        }}
      />

      <Modal
        open={!!deleting}
        onClose={() => setDeleting(null)}
        title="Supprimer l’offre ?"
        description={deleting ? `« ${deleting.title} » sera définitivement retirée.` : undefined}
        footer={
          <>
            <button onClick={() => setDeleting(null)} className="btn-secondary">
              Annuler
            </button>
            <button
              onClick={() => {
                if (deleting) remove(deleting.id)
                setDeleting(null)
              }}
              className="btn bg-red-600 text-white hover:bg-red-700"
            >
              <Trash2 className="h-4 w-4" /> Supprimer
            </button>
          </>
        }
      >
        <p className="text-sm text-ink-600">
          Cette action est irréversible. Les candidatures associées resteront accessibles dans vos
          archives.
        </p>
      </Modal>
    </div>
  )
}

function RowActions({
  offer,
  open,
  onToggle,
  onClose,
  onEdit,
  onStatus,
  onDuplicate,
  onDelete,
}: {
  offer: OrgOffer
  open: boolean
  onToggle: () => void
  onClose: () => void
  onEdit: () => void
  onStatus: (id: string, status: OrgOffer['status']) => void
  onDuplicate: (o: OrgOffer) => void
  onDelete: () => void
}) {
  const run = (fn: () => void) => () => {
    fn()
    onClose()
  }

  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className={cn(
          'flex h-8 w-8 items-center justify-center rounded-lg text-ink-400 transition hover:bg-ink-100 hover:text-ink-700',
          open && 'bg-ink-100 text-ink-700',
        )}
        aria-label="Actions"
        aria-expanded={open}
      >
        <MoreVertical className="h-4 w-4" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <div className="fixed inset-0 z-30" onClick={onClose} />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -4 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -4 }}
              transition={{ duration: 0.14 }}
              className="absolute right-0 z-40 mt-1 w-52 overflow-hidden rounded-xl border border-ink-100 bg-white p-1.5 shadow-card-hover"
            >
              <MenuItem icon={Pencil} label="Modifier l’offre" onClick={run(onEdit)} />
              {offer.status === 'Active' && (
                <MenuItem icon={Pause} label="Mettre en pause" onClick={run(() => onStatus(offer.id, 'En pause'))} />
              )}
              {offer.status === 'En pause' && (
                <MenuItem icon={Play} label="Réactiver" onClick={run(() => onStatus(offer.id, 'Active'))} />
              )}
              {offer.status !== 'Clôturée' && (
                <MenuItem icon={XCircle} label="Clôturer" onClick={run(() => onStatus(offer.id, 'Clôturée'))} />
              )}
              <MenuItem icon={Copy} label="Dupliquer" onClick={run(() => onDuplicate(offer))} />
              <div className="my-1 h-px bg-ink-100" />
              <MenuItem icon={Trash2} label="Supprimer" danger onClick={run(onDelete)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

function MenuItem({
  icon: I,
  label,
  onClick,
  danger,
}: {
  icon: typeof Pencil
  label: string
  onClick: () => void
  danger?: boolean
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition',
        danger ? 'text-red-600 hover:bg-red-50' : 'text-ink-700 hover:bg-ink-50',
      )}
    >
      <I className="h-4 w-4" />
      {label}
    </button>
  )
}

const offerStatuses: OrgOffer['status'][] = ['Active', 'En pause', 'Clôturée']

function EditOfferModal({
  offer,
  onClose,
  onSave,
}: {
  offer: OrgOffer | null
  onClose: () => void
  onSave: (o: OrgOffer) => void
}) {
  const [draft, setDraft] = useState<OrgOffer | null>(offer)

  // Synchronise le brouillon à l'ouverture.
  if (offer && (!draft || draft.id !== offer.id)) setDraft(offer)

  return (
    <Modal
      open={!!offer}
      onClose={onClose}
      title="Modifier l’offre"
      description="Mettez à jour les informations de votre annonce."
      footer={
        <>
          <button onClick={onClose} className="btn-secondary">
            Annuler
          </button>
          <button
            onClick={() => draft && onSave(draft)}
            disabled={!draft?.title.trim()}
            className="btn-primary"
          >
            <CheckCircle2 className="h-4 w-4" /> Enregistrer
          </button>
        </>
      }
    >
      {draft && (
        <div className="space-y-4">
          <div>
            <label className="label">Intitulé du poste</label>
            <input
              className="input"
              value={draft.title}
              onChange={(e) => setDraft({ ...draft, title: e.target.value })}
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="label">Référence</label>
              <input
                className="input"
                value={draft.ref}
                onChange={(e) => setDraft({ ...draft, ref: e.target.value })}
              />
            </div>
            <div>
              <label className="label">Statut</label>
              <select
                className="input cursor-pointer"
                value={draft.status}
                onChange={(e) => setDraft({ ...draft, status: e.target.value as OrgOffer['status'] })}
              >
                {offerStatuses.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="label">Jours restants</label>
              <input
                type="number"
                min={0}
                className="input"
                value={draft.daysLeft}
                onChange={(e) =>
                  setDraft({ ...draft, daysLeft: Math.max(0, Number(e.target.value) || 0) })
                }
              />
            </div>
          </div>
        </div>
      )}
    </Modal>
  )
}

const candidateStatusVariant = {
  Nouveau: 'brand',
  'Présélectionné': 'accent',
  Entretien: 'gold',
  'Refusé': 'danger',
} as const

function CandidatesPanel() {
  return (
    <div>
      <PanelHeader
        title="Candidatures"
        subtitle="Évaluez et faites avancer les candidats dans votre pipeline."
      />
      <div className="mb-4 max-w-sm">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
          <input placeholder="Rechercher un candidat…" className="input pl-10" />
        </div>
      </div>

      <div className="space-y-3">
        {orgCandidates.map((c) => (
          <div key={c.id} className="card p-4">
            <div className="flex items-start gap-3 sm:gap-4">
              <Avatar initials={initials(c.name)} color={c.avatarColor} size="lg" className="!h-11 !w-11 sm:!h-14 sm:!w-14" />
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-ink-900">{c.name}</p>
                    <p className="truncate text-sm text-ink-500">{c.role}</p>
                  </div>
                  <div className="shrink-0 text-center">
                    <p className="font-display text-base font-extrabold text-accent-700 sm:text-lg">{c.matchScore}%</p>
                    <p className="text-[10px] uppercase tracking-wide text-ink-400">match</p>
                  </div>
                </div>
                <p className="mt-1 truncate text-xs text-ink-400">
                  Postule à : {c.offer} · il y a {c.appliedDaysAgo}j
                </p>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-ink-100 pt-3">
              <Badge variant={candidateStatusVariant[c.status]} className="px-3 py-1.5">{c.status}</Badge>
              <div className="ml-auto flex gap-2">
                <button className="btn-secondary">Voir le profil</button>
                <button className="btn-primary">Contacter</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function MessagesPanel() {
  return (
    <div>
      <PanelHeader title="Messages" subtitle="Échangez avec les candidats et votre équipe." />
      <div className="card divide-y divide-ink-100">
        {orgMessages.map((m) => (
          <button
            key={m.id}
            className={cn(
              'flex w-full items-center gap-4 p-4 text-left transition hover:bg-ink-50',
              m.unread && 'bg-brand-50/40',
            )}
          >
            <Avatar initials={initials(m.from)} color={m.avatarColor} size="lg" />
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <p className="font-semibold text-ink-900">{m.from}</p>
                <span className="shrink-0 text-xs text-ink-400">
                  {m.daysAgo === 0 ? "auj." : `${m.daysAgo}j`}
                </span>
              </div>
              <p className="text-xs text-ink-400">{m.role}</p>
              <p className="mt-1 truncate text-sm text-ink-600">{m.preview}</p>
            </div>
            {m.unread && <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-brand-600" />}
          </button>
        ))}
      </div>
    </div>
  )
}

function OrgSettingsPanel() {
  return (
    <div>
      <PanelHeader title="Paramètres de l’organisme" subtitle="Gérez le profil public et l’équipe." />
      <div className="space-y-6">
        <div className="card p-6">
          <div className="flex items-center gap-4">
            <Avatar initials={ORG.short} color={ORG.color} size="xl" className="!rounded-2xl" />
            <div>
              <p className="font-display font-bold text-ink-900">{ORG.name}</p>
              <Badge variant="accent" className="mt-1">Organisme vérifié</Badge>
            </div>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Field label="Nom de l’organisme" defaultValue={ORG.name} />
            <Field label="Secteur" defaultValue="Énergie" />
            <Field label="E-mail de recrutement" defaultValue="recrutement@sbee.bj" />
            <Field label="Téléphone" defaultValue="+229 21 00 40 40" />
          </div>
          <button className="btn-primary mt-5">Enregistrer</button>
        </div>

        <div className="card p-6">
          <h3 className="font-display font-bold text-ink-900">Équipe de recrutement</h3>
          <div className="mt-4 space-y-3">
            {['Dr. Samuel Eto · DRH', 'Mariam Sow · Chargée RH', 'Ibrahim Touré · Recruteur'].map((member) => (
              <div key={member} className="flex items-center gap-3 rounded-xl border border-ink-100 p-3">
                <Avatar initials={initials(member.split(' · ')[0] ?? member)} color="#1f47e6" />
                <span className="flex-1 text-sm font-medium text-ink-700">{member}</span>
                <button className="btn-ghost text-sm"><Mail className="h-4 w-4" /></button>
              </div>
            ))}
            <button className="btn-secondary w-full"><Plus className="h-4 w-4" /> Inviter un membre</button>
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
