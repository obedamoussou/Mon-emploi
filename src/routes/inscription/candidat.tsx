import { createFileRoute, Link } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Briefcase,
  CheckCircle2,
  Loader2,
  Lock,
  Send,
  UserRound,
} from 'lucide-react'
import { useState } from 'react'
import { PublicLayout } from '~/layouts/PublicLayout'
import { Stepper, type Step } from '~/components/Stepper'
import { regions } from '~/mocks/regions'
import { categories } from '~/mocks/categories'
import { cn } from '~/lib/utils'
import type { ExperienceLevel } from '~/types'

export const Route = createFileRoute('/inscription/candidat')({
  component: CandidateSignup,
})

const steps: Step[] = [
  { id: 1, label: 'Compte', icon: UserRound },
  { id: 2, label: 'Profil', icon: Briefcase },
  { id: 3, label: 'Confirmation', icon: CheckCircle2 },
]

const levels: ExperienceLevel[] = ['Débutant', 'Junior', 'Confirmé', 'Senior', 'Expert']

function CandidateSignup() {
  const [step, setStep] = useState(1)
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirm: '',
    title: '',
    regionId: regions[0]?.id ?? '',
    city: '',
    categoryId: categories[0]?.id ?? '',
    level: 'Junior' as ExperienceLevel,
  })

  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }))

  const step1Valid =
    form.firstName &&
    form.lastName &&
    form.email &&
    form.phone &&
    form.password.length >= 6 &&
    form.password === form.confirm
  const step2Valid = form.title && form.city

  function submit() {
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setDone(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 1300)
  }

  if (done) {
    return (
      <PublicLayout>
        <AuthShell>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-50 text-accent-600">
              <BadgeCheck className="h-8 w-8" />
            </div>
            <h1 className="mt-5 font-display text-2xl font-extrabold text-ink-900">
              Bienvenue, {form.firstName} !
            </h1>
            <p className="mt-2 text-ink-500">
              Votre compte candidat a été créé. Vous pouvez dès maintenant rechercher des offres et
              postuler en ligne.
            </p>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center">
              <Link to="/offres" className="btn-primary">
                <Briefcase className="h-4 w-4" /> Découvrir les offres
              </Link>
              <Link to="/tableau-de-bord" className="btn-secondary">
                Accéder à mon espace
              </Link>
            </div>
          </motion.div>
        </AuthShell>
      </PublicLayout>
    )
  }

  return (
    <PublicLayout>
      <AuthShell
        eyebrow="Espace candidat"
        title="Créer un compte candidat"
        subtitle="Quelques informations pour commencer votre recherche d’emploi public."
      >
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
                  <FormField label="Prénom"><input className="input" value={form.firstName} onChange={set('firstName')} placeholder="Aïcha" /></FormField>
                  <FormField label="Nom"><input className="input" value={form.lastName} onChange={set('lastName')} placeholder="Diallo" /></FormField>
                  <FormField label="Adresse e-mail"><input type="email" className="input" value={form.email} onChange={set('email')} placeholder="vous@email.bj" /></FormField>
                  <FormField label="Téléphone"><input className="input" value={form.phone} onChange={set('phone')} placeholder="+229 ..." /></FormField>
                  <FormField label="Mot de passe" hint="6 caractères minimum">
                    <div className="relative">
                      <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
                      <input type="password" className="input pl-10" value={form.password} onChange={set('password')} placeholder="••••••" />
                    </div>
                  </FormField>
                  <FormField
                    label="Confirmer le mot de passe"
                    error={form.confirm.length > 0 && form.confirm !== form.password ? 'Les mots de passe ne correspondent pas.' : undefined}
                  >
                    <div className="relative">
                      <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
                      <input type="password" className="input pl-10" value={form.confirm} onChange={set('confirm')} placeholder="••••••" />
                    </div>
                  </FormField>
                </div>
              )}

              {step === 2 && (
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <FormField label="Intitulé de poste / métier">
                      <input className="input" value={form.title} onChange={set('title')} placeholder="Ingénieure logicielle, Médecin, Enseignant…" />
                    </FormField>
                  </div>
                  <FormField label="Domaine principal">
                    <select className="input cursor-pointer" value={form.categoryId} onChange={set('categoryId')}>
                      {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select>
                  </FormField>
                  <FormField label="Niveau d’expérience">
                    <select className="input cursor-pointer" value={form.level} onChange={set('level')}>
                      {levels.map((l) => <option key={l} value={l}>{l}</option>)}
                    </select>
                  </FormField>
                  <FormField label="Région">
                    <select className="input cursor-pointer" value={form.regionId} onChange={set('regionId')}>
                      {regions.map((r) => <option key={r.id} value={r.id}>{r.name}</option>)}
                    </select>
                  </FormField>
                  <FormField label="Ville">
                    <input className="input" value={form.city} onChange={set('city')} placeholder="Cotonou" />
                  </FormField>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h2 className="font-display text-lg font-bold text-ink-900">Vérifiez vos informations</h2>
                  <div className="mt-4 space-y-3">
                    <Recap label="Identité">{form.firstName} {form.lastName}</Recap>
                    <Recap label="Contact">{form.email} · {form.phone}</Recap>
                    <Recap label="Profil">{form.title} · {categories.find((c) => c.id === form.categoryId)?.name} · {form.level}</Recap>
                    <Recap label="Localisation">{form.city}, {regions.find((r) => r.id === form.regionId)?.name}</Recap>
                  </div>
                  <label className="mt-5 flex items-start gap-2.5 text-sm text-ink-600">
                    <input type="checkbox" defaultChecked className="mt-0.5 h-4 w-4 accent-brand-600" />
                    J’accepte les conditions d’utilisation et la politique de protection des données.
                  </label>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-ink-100 pt-5">
          <button onClick={() => setStep((s) => Math.max(1, s - 1))} disabled={step === 1} className="btn-ghost">
            <ArrowLeft className="h-4 w-4" /> Précédent
          </button>
          {step < 3 ? (
            <button
              onClick={() => setStep((s) => s + 1)}
              disabled={step === 1 ? !step1Valid : !step2Valid}
              className="btn-primary"
            >
              Continuer <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <button onClick={submit} disabled={submitting} className="btn-accent">
              {submitting ? <><Loader2 className="h-4 w-4 animate-spin" /> Création…</> : <><Send className="h-4 w-4" /> Créer mon compte</>}
            </button>
          )}
        </div>

        <p className="mt-6 text-center text-sm text-ink-500">
          Vous êtes une organisation ?{' '}
          <Link to="/inscription/organisation" className="font-semibold text-brand-700 hover:underline">
            Inscrivez votre organisme
          </Link>
        </p>
      </AuthShell>
    </PublicLayout>
  )
}

export function AuthShell({
  children,
  eyebrow,
  title,
  subtitle,
}: {
  children: React.ReactNode
  eyebrow?: string
  title?: string
  subtitle?: string
}) {
  return (
    <div className="container-page flex justify-center py-12">
      <div className="w-full max-w-2xl">
        {title && (
          <div className="mb-6 text-center">
            {eyebrow && (
              <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-700">
                {eyebrow}
              </span>
            )}
            <h1 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl">{title}</h1>
            {subtitle && <p className="mt-2 text-ink-500">{subtitle}</p>}
          </div>
        )}
        <div className="card p-6 sm:p-8">{children}</div>
      </div>
    </div>
  )
}

function FormField({
  label,
  hint,
  error,
  children,
}: {
  label: string
  hint?: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      {label && <label className="label">{label}</label>}
      {children}
      {error ? (
        <p className="mt-1 text-xs text-red-600">{error}</p>
      ) : hint ? (
        <p className="mt-1 text-xs text-ink-400">{hint}</p>
      ) : null}
    </div>
  )
}

function Recap({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className={cn('rounded-xl border border-ink-100 bg-ink-50/50 p-4')}>
      <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">{label}</p>
      <p className="mt-1 text-sm font-medium text-ink-800">{children}</p>
    </div>
  )
}
