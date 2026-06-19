import { createFileRoute, Link } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  FileText,
  ListChecks,
  Loader2,
  PartyPopper,
  Rocket,
  Settings2,
} from 'lucide-react'
import { useState } from 'react'
import { Logo } from '~/components/Logo'
import { Badge } from '~/components/Badge'
import { Stepper, type Step } from '~/components/Stepper'
import { regions } from '~/mocks/regions'
import { categories } from '~/mocks/categories'
import { kindLabels } from '~/lib/display'
import { cn } from '~/lib/utils'
import type {
  ContractType,
  ExperienceLevel,
  OpportunityKind,
  WorkMode,
} from '~/types'

export const Route = createFileRoute('/espace-organisme/nouvelle-offre')({
  component: NewOfferPage,
})

const steps: Step[] = [
  { id: 1, label: 'Informations', icon: FileText },
  { id: 2, label: 'Description', icon: ListChecks },
  { id: 3, label: 'Profil', icon: Settings2 },
  { id: 4, label: 'Publication', icon: Rocket },
]

const kinds: OpportunityKind[] = ['emploi', 'stage', 'concours', 'appel-candidature']
const contracts: ContractType[] = ['CDI', 'CDD', 'Stage', 'Concours', 'Vacation', 'Apprentissage', 'Mission']
const workModes: WorkMode[] = ['Présentiel', 'Hybride', 'Télétravail']
const levels: ExperienceLevel[] = ['Débutant', 'Junior', 'Confirmé', 'Senior', 'Expert']

function NewOfferPage() {
  const [step, setStep] = useState(1)
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)

  const [form, setForm] = useState({
    title: '',
    kind: 'emploi' as OpportunityKind,
    contractType: 'CDI' as ContractType,
    categoryId: categories[0]?.id ?? '',
    regionId: regions[0]?.id ?? '',
    city: '',
    positions: 1,
    workMode: 'Présentiel' as WorkMode,
    level: 'Confirmé' as ExperienceLevel,
    summary: '',
    missions: '',
    profile: '',
    conditions: '',
    benefits: '',
    deadline: '',
    salaryMin: '',
    salaryMax: '',
    urgent: false,
    featured: false,
  })

  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }))

  const step1Valid = form.title && form.city && form.positions > 0
  const step2Valid = form.summary.trim() && form.missions.trim()
  const step4Valid = !!form.deadline

  function submit() {
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setDone(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 1400)
  }

  return (
    <div className="min-h-screen bg-ink-50">
      <div className="border-b border-ink-100 bg-white">
        <div className="container-page flex h-16 items-center justify-between gap-4">
          <Logo />
          <Link
            to="/espace-organisme"
            search={{ section: 'offres' }}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-500 transition hover:text-brand-600"
          >
            <ArrowLeft className="h-4 w-4" /> Retour à l’espace organisme
          </Link>
        </div>
      </div>

      <div className="container-page max-w-3xl py-10">
        {done ? (
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="card p-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-50 text-accent-600">
              <PartyPopper className="h-8 w-8" />
            </div>
            <h1 className="mt-5 font-display text-2xl font-extrabold text-ink-900">Offre publiée !</h1>
            <p className="mt-2 text-ink-500">
              Votre annonce <span className="font-semibold text-ink-700">« {form.title} »</span> est
              désormais visible par les candidats. Vous recevrez les candidatures dans votre espace.
            </p>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center">
              <Link to="/espace-organisme" search={{ section: 'offres' }} className="btn-primary">
                Voir mes offres
              </Link>
              <Link to="/offres" className="btn-secondary">
                Voir le rendu public
              </Link>
            </div>
          </motion.div>
        ) : (
          <>
            <div className="mb-6 text-center">
              <h1 className="font-display text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl">
                Publier une offre
              </h1>
              <p className="mt-2 text-ink-500">Créez une annonce attractive en quelques étapes.</p>
            </div>

            <div className="card p-6 sm:p-8">
              <Stepper steps={steps} current={step} />

              <div className="mt-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.22 }}
                  >
                    {step === 1 && (
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                          <Field label="Intitulé du poste">
                            <input className="input" value={form.title} onChange={set('title')} placeholder="Ingénieur DevOps Senior" />
                          </Field>
                        </div>
                        <Field label="Type d’opportunité">
                          <select className="input cursor-pointer" value={form.kind} onChange={set('kind')}>
                            {kinds.map((k) => <option key={k} value={k}>{kindLabels[k]}</option>)}
                          </select>
                        </Field>
                        <Field label="Type de contrat">
                          <select className="input cursor-pointer" value={form.contractType} onChange={set('contractType')}>
                            {contracts.map((c) => <option key={c} value={c}>{c}</option>)}
                          </select>
                        </Field>
                        <Field label="Domaine">
                          <select className="input cursor-pointer" value={form.categoryId} onChange={set('categoryId')}>
                            {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                          </select>
                        </Field>
                        <Field label="Niveau d’expérience">
                          <select className="input cursor-pointer" value={form.level} onChange={set('level')}>
                            {levels.map((l) => <option key={l} value={l}>{l}</option>)}
                          </select>
                        </Field>
                        <Field label="Région">
                          <select className="input cursor-pointer" value={form.regionId} onChange={set('regionId')}>
                            {regions.map((r) => <option key={r.id} value={r.id}>{r.name}</option>)}
                          </select>
                        </Field>
                        <Field label="Ville">
                          <input className="input" value={form.city} onChange={set('city')} placeholder="Cotonou" />
                        </Field>
                        <Field label="Mode de travail">
                          <select className="input cursor-pointer" value={form.workMode} onChange={set('workMode')}>
                            {workModes.map((w) => <option key={w} value={w}>{w}</option>)}
                          </select>
                        </Field>
                        <Field label="Nombre de postes">
                          <input
                            type="number"
                            min={1}
                            className="input"
                            value={form.positions}
                            onChange={(e) => setForm((f) => ({ ...f, positions: Math.max(1, Number(e.target.value) || 1) }))}
                          />
                        </Field>
                      </div>
                    )}

                    {step === 2 && (
                      <div className="space-y-4">
                        <Field label="Résumé de l’offre" hint="Une phrase d’accroche affichée dans les listes.">
                          <textarea className="input resize-none" rows={2} value={form.summary} onChange={set('summary')} placeholder="Rejoignez notre équipe pour…" />
                        </Field>
                        <Field label="Missions principales" hint="Une mission par ligne.">
                          <textarea className="input resize-none leading-relaxed" rows={5} value={form.missions} onChange={set('missions')} placeholder={'Concevoir et maintenir l’infrastructure\nAutomatiser les déploiements\n…'} />
                        </Field>
                      </div>
                    )}

                    {step === 3 && (
                      <div className="space-y-4">
                        <Field label="Profil recherché" hint="Un critère par ligne.">
                          <textarea className="input resize-none leading-relaxed" rows={4} value={form.profile} onChange={set('profile')} placeholder={'Bac+5 en informatique\n3 ans d’expérience minimum\n…'} />
                        </Field>
                        <Field label="Conditions" hint="Une condition par ligne.">
                          <textarea className="input resize-none leading-relaxed" rows={3} value={form.conditions} onChange={set('conditions')} placeholder={'Contrat à temps plein\nPrise de poste immédiate\n…'} />
                        </Field>
                        <Field label="Avantages" hint="Un avantage par ligne (facultatif).">
                          <textarea className="input resize-none leading-relaxed" rows={3} value={form.benefits} onChange={set('benefits')} placeholder={'Assurance santé\nFormation continue\n…'} />
                        </Field>
                      </div>
                    )}

                    {step === 4 && (
                      <div className="space-y-5">
                        <div className="grid gap-4 sm:grid-cols-3">
                          <Field label="Date limite de candidature">
                            <div className="relative">
                              <CalendarClock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
                              <input type="date" className="input pl-10" value={form.deadline} onChange={set('deadline')} />
                            </div>
                          </Field>
                          <Field label="Salaire min. (FCFA)" hint="Facultatif">
                            <input type="number" className="input" value={form.salaryMin} onChange={set('salaryMin')} placeholder="350000" />
                          </Field>
                          <Field label="Salaire max. (FCFA)" hint="Facultatif">
                            <input type="number" className="input" value={form.salaryMax} onChange={set('salaryMax')} placeholder="600000" />
                          </Field>
                        </div>

                        <div className="space-y-2">
                          <Check label="Marquer comme urgent" checked={form.urgent} onChange={(v) => setForm((f) => ({ ...f, urgent: v }))} />
                          <Check label="Mettre en avant (offre à la une)" checked={form.featured} onChange={(v) => setForm((f) => ({ ...f, featured: v }))} />
                        </div>

                        {/* Aperçu */}
                        <div className="rounded-2xl border border-ink-100 bg-ink-50/60 p-5">
                          <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">Aperçu</p>
                          <div className="mt-2 flex flex-wrap items-center gap-2">
                            <Badge variant="brand">{kindLabels[form.kind]}</Badge>
                            <Badge variant="neutral">{form.contractType}</Badge>
                            {form.urgent && <Badge variant="danger">Urgent</Badge>}
                            {form.featured && <Badge variant="gold">À la une</Badge>}
                          </div>
                          <h3 className="mt-2 font-display text-lg font-bold text-ink-900">
                            {form.title || 'Intitulé du poste'}
                          </h3>
                          <p className="text-sm text-ink-500">
                            {form.city || 'Ville'}, {regions.find((r) => r.id === form.regionId)?.name} ·{' '}
                            {form.positions} poste{form.positions > 1 ? 's' : ''}
                          </p>
                          <p className="mt-2 text-sm text-ink-600">{form.summary || 'Résumé de l’offre…'}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-ink-100 pt-5">
                <button onClick={() => setStep((s) => Math.max(1, s - 1))} disabled={step === 1} className="btn-ghost">
                  <ArrowLeft className="h-4 w-4" /> Précédent
                </button>
                {step < 4 ? (
                  <button
                    onClick={() => setStep((s) => s + 1)}
                    disabled={step === 1 ? !step1Valid : step === 2 ? !step2Valid : false}
                    className="btn-primary"
                  >
                    Continuer <ArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button onClick={submit} disabled={submitting || !step4Valid} className="btn-accent">
                    {submitting ? <><Loader2 className="h-4 w-4 animate-spin" /> Publication…</> : <><Rocket className="h-4 w-4" /> Publier l’offre</>}
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

function Field({
  label,
  hint,
  children,
}: {
  label: string
  hint?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label className="label">{label}</label>
      {children}
      {hint && <p className="mt-1 text-xs text-ink-400">{hint}</p>}
    </div>
  )
}

function Check({
  label,
  checked,
  onChange,
}: {
  label: string
  checked: boolean
  onChange: (v: boolean) => void
}) {
  return (
    <label className={cn(
      'flex cursor-pointer items-center justify-between rounded-xl border p-3.5 transition',
      checked ? 'border-brand-300 bg-brand-50/50' : 'border-ink-100',
    )}>
      <span className="text-sm font-medium text-ink-700">{label}</span>
      <span className="relative inline-flex">
        <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="peer sr-only" />
        <span className="h-6 w-11 rounded-full bg-ink-200 transition peer-checked:bg-brand-600" />
        <span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition peer-checked:translate-x-5" />
      </span>
    </label>
  )
}
