import { createFileRoute, Link } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  FileText,
  Loader2,
  PartyPopper,
  Send,
  Upload,
  UserRound,
} from 'lucide-react'
import { useRef, useState } from 'react'
import { PublicLayout } from '~/layouts/PublicLayout'
import { Avatar } from '~/components/Avatar'
import { Badge } from '~/components/Badge'
import { NotFound } from '~/components/NotFound'
import { useJob } from '~/hooks/queries'
import { currentUser } from '~/mocks/users'
import { institutionById } from '~/mocks/institutions'
import { regions } from '~/mocks/regions'
import { kindLabels } from '~/lib/display'
import { cn, formatDate } from '~/lib/utils'

export const Route = createFileRoute('/postuler/$slug')({
  component: PostulerPage,
})

const steps = [
  { id: 1, label: 'Informations', icon: UserRound },
  { id: 2, label: 'CV', icon: FileText },
  { id: 3, label: 'Lettre de motivation', icon: FileText },
  { id: 4, label: 'Confirmation', icon: CheckCircle2 },
] as const

function PostulerPage() {
  const { slug } = Route.useParams()
  const { data: job, isLoading } = useJob(slug)

  const [step, setStep] = useState(1)
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)

  const [form, setForm] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    phone: currentUser.phone,
    regionId: currentUser.regionId,
    city: currentUser.city,
  })
  const [cvFile, setCvFile] = useState<string | null>(currentUser.cvFileName)
  const [letterFile, setLetterFile] = useState<string | null>(null)
  const [letterText, setLetterText] = useState('')

  if (isLoading) {
    return (
      <PublicLayout>
        <div className="container-page flex min-h-[50vh] items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-brand-600" />
        </div>
      </PublicLayout>
    )
  }
  if (!job) return <PublicLayout><NotFound /></PublicLayout>

  const inst = institutionById(job.institutionId)

  function submit() {
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setDone(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 1400)
  }

  if (done) {
    return (
      <PublicLayout>
        <div className="container-page flex min-h-[70vh] items-center justify-center py-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card max-w-lg p-8 text-center"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-50 text-accent-600">
              <PartyPopper className="h-8 w-8" />
            </div>
            <h1 className="mt-5 font-display text-2xl font-extrabold text-ink-900">
              Candidature envoyée !
            </h1>
            <p className="mt-2 text-ink-500">
              Votre candidature pour <span className="font-semibold text-ink-700">{job.title}</span>{' '}
              a bien été transmise à {inst?.shortName}. Vous recevrez un accusé de réception par
              e-mail.
            </p>
            <div className="mt-5 rounded-xl bg-ink-50 p-4 text-sm">
              <p className="text-ink-500">Référence de votre candidature</p>
              <p className="mt-1 font-display text-lg font-bold text-brand-700">
                CAND-2026-{String(Math.floor(1000 + Math.random() * 8999))}
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center">
              <Link to="/tableau-de-bord" search={{ section: 'candidatures' }} className="btn-primary">
                Suivre ma candidature
              </Link>
              <Link to="/offres" className="btn-secondary">
                Voir d’autres offres
              </Link>
            </div>
          </motion.div>
        </div>
      </PublicLayout>
    )
  }

  const canNext =
    step === 1
      ? form.firstName && form.lastName && form.email && form.phone
      : step === 2
        ? !!cvFile
        : step === 3
          ? !!(letterFile || letterText.trim())
          : true

  return (
    <PublicLayout>
      <div className="container-page max-w-4xl py-8">
        <Link
          to="/offres/$slug"
          params={{ slug: job.slug }}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-500 transition hover:text-brand-600"
        >
          <ArrowLeft className="h-4 w-4" /> Retour à l’offre
        </Link>

        {/* Récap offre */}
        <div className="card mt-4 flex items-center gap-4 p-5">
          <Avatar initials={inst?.logoInitials ?? 'TL'} color={inst?.logoColor} size="lg" className="!rounded-xl" />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <Badge variant="brand">{kindLabels[job.kind]}</Badge>
              <span className="text-xs text-ink-400">Réf. {job.reference}</span>
            </div>
            <h1 className="mt-1 truncate font-display text-lg font-bold text-ink-900">{job.title}</h1>
            <p className="truncate text-sm text-ink-500">
              {inst?.name} · Clôture le {formatDate(job.deadline)}
            </p>
          </div>
        </div>

        {/* Stepper */}
        <div className="mt-6 flex items-center">
          {steps.map((s, i) => (
            <div key={s.id} className="flex flex-1 items-center last:flex-none">
              <div className="flex flex-col items-center gap-1.5">
                <div
                  className={cn(
                    'flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-bold transition',
                    step > s.id
                      ? 'border-accent-600 bg-accent-600 text-white'
                      : step === s.id
                        ? 'border-brand-600 bg-brand-600 text-white'
                        : 'border-ink-200 bg-white text-ink-400',
                  )}
                >
                  {step > s.id ? <CheckCircle2 className="h-5 w-5" /> : <s.icon className="h-4 w-4" />}
                </div>
                <span
                  className={cn(
                    'hidden text-center text-xs font-medium sm:block',
                    step >= s.id ? 'text-ink-800' : 'text-ink-400',
                  )}
                >
                  {s.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div
                  className={cn(
                    'mx-2 h-0.5 flex-1 rounded-full transition',
                    step > s.id ? 'bg-accent-500' : 'bg-ink-200',
                  )}
                />
              )}
            </div>
          ))}
        </div>

        {/* Contenu de l'étape */}
        <div className="card mt-6 p-6 sm:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.22 }}
            >
              {step === 1 && <StepInfos form={form} setForm={setForm} />}
              {step === 2 && (
                <StepUpload
                  title="Votre CV"
                  description="Déposez votre curriculum vitæ au format PDF (5 Mo max). Votre CV enregistré est pré-sélectionné."
                  fileName={cvFile}
                  onFile={setCvFile}
                  accept=".pdf,.doc,.docx"
                />
              )}
              {step === 3 && (
                <StepLetter
                  fileName={letterFile}
                  onFile={setLetterFile}
                  text={letterText}
                  onText={setLetterText}
                />
              )}
              {step === 4 && (
                <StepReview
                  job={job}
                  instName={inst?.name ?? ''}
                  form={form}
                  cvFile={cvFile}
                  letterFile={letterFile}
                  letterText={letterText}
                />
              )}
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between border-t border-ink-100 pt-5">
            <button
              onClick={() => setStep((s) => Math.max(1, s - 1))}
              disabled={step === 1}
              className="btn-ghost"
            >
              <ArrowLeft className="h-4 w-4" /> Précédent
            </button>
            {step < 4 ? (
              <button
                onClick={() => setStep((s) => s + 1)}
                disabled={!canNext}
                className="btn-primary"
              >
                Continuer <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button onClick={submit} disabled={submitting} className="btn-accent">
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Envoi…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Envoyer ma candidature
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}

type FormState = {
  firstName: string
  lastName: string
  email: string
  phone: string
  regionId: string
  city: string
}

function StepInfos({
  form,
  setForm,
}: {
  form: FormState
  setForm: React.Dispatch<React.SetStateAction<FormState>>
}) {
  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))
  return (
    <div>
      <h2 className="font-display text-lg font-bold text-ink-900">Informations personnelles</h2>
      <p className="mt-1 text-sm text-ink-500">Vérifiez et complétez vos coordonnées.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label">Prénom</label>
          <input className="input" value={form.firstName} onChange={set('firstName')} />
        </div>
        <div>
          <label className="label">Nom</label>
          <input className="input" value={form.lastName} onChange={set('lastName')} />
        </div>
        <div>
          <label className="label">Adresse e-mail</label>
          <input type="email" className="input" value={form.email} onChange={set('email')} />
        </div>
        <div>
          <label className="label">Téléphone</label>
          <input className="input" value={form.phone} onChange={set('phone')} />
        </div>
        <div>
          <label className="label">Région</label>
          <select className="input cursor-pointer" value={form.regionId} onChange={set('regionId')}>
            {regions.map((r) => (
              <option key={r.id} value={r.id}>
                {r.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="label">Ville</label>
          <input className="input" value={form.city} onChange={set('city')} />
        </div>
      </div>
    </div>
  )
}

function StepUpload({
  title,
  description,
  fileName,
  onFile,
  accept,
}: {
  title: string
  description: string
  fileName: string | null
  onFile: (name: string | null) => void
  accept: string
}) {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <div>
      <h2 className="font-display text-lg font-bold text-ink-900">{title}</h2>
      <p className="mt-1 text-sm text-ink-500">{description}</p>

      <button
        onClick={() => inputRef.current?.click()}
        className="mt-6 flex w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-ink-200 bg-ink-50/50 px-6 py-12 text-center transition hover:border-brand-400 hover:bg-brand-50/40"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
          <Upload className="h-6 w-6" />
        </div>
        <p className="mt-3 text-sm font-semibold text-ink-800">
          Cliquez pour téléverser un fichier
        </p>
        <p className="mt-1 text-xs text-ink-400">PDF, DOC, DOCX — 5 Mo max</p>
      </button>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={(e) => onFile(e.target.files?.[0]?.name ?? fileName)}
      />

      {fileName && (
        <div className="mt-4 flex items-center gap-3 rounded-xl border border-accent-200 bg-accent-50 p-4">
          <FileText className="h-6 w-6 text-accent-600" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-ink-900">{fileName}</p>
            <p className="text-xs text-accent-700">Fichier prêt à être envoyé</p>
          </div>
          <CheckCircle2 className="h-5 w-5 text-accent-600" />
        </div>
      )}
    </div>
  )
}

function StepLetter({
  fileName,
  onFile,
  text,
  onText,
}: {
  fileName: string | null
  onFile: (name: string | null) => void
  text: string
  onText: (v: string) => void
}) {
  return (
    <div>
      <h2 className="font-display text-lg font-bold text-ink-900">Lettre de motivation</h2>
      <p className="mt-1 text-sm text-ink-500">
        Rédigez votre lettre ci-dessous ou téléversez un document.
      </p>
      <textarea
        value={text}
        onChange={(e) => onText(e.target.value)}
        rows={8}
        placeholder="Madame, Monsieur, c’est avec un grand intérêt que je vous soumets ma candidature…"
        className="input mt-5 resize-none leading-relaxed"
      />
      <div className="mt-3">
        <StepUpload
          title=""
          description=""
          fileName={fileName}
          onFile={onFile}
          accept=".pdf,.doc,.docx"
        />
      </div>
    </div>
  )
}

function StepReview({
  job,
  instName,
  form,
  cvFile,
  letterFile,
  letterText,
}: {
  job: { title: string }
  instName: string
  form: FormState
  cvFile: string | null
  letterFile: string | null
  letterText: string
}) {
  return (
    <div>
      <h2 className="font-display text-lg font-bold text-ink-900">Vérification & confirmation</h2>
      <p className="mt-1 text-sm text-ink-500">
        Relisez votre candidature avant de l’envoyer.
      </p>

      <div className="mt-6 space-y-4">
        <ReviewBlock icon={<Building2 className="h-4 w-4" />} title="Poste">
          {job.title} — {instName}
        </ReviewBlock>
        <ReviewBlock icon={<UserRound className="h-4 w-4" />} title="Candidat">
          {form.firstName} {form.lastName} · {form.email} · {form.phone}
        </ReviewBlock>
        <ReviewBlock icon={<FileText className="h-4 w-4" />} title="CV">
          {cvFile ?? 'Aucun fichier'}
        </ReviewBlock>
        <ReviewBlock icon={<FileText className="h-4 w-4" />} title="Lettre de motivation">
          {letterFile ?? (letterText ? 'Lettre rédigée en ligne' : 'Aucune')}
        </ReviewBlock>
      </div>

      <label className="mt-6 flex items-start gap-2.5 text-sm text-ink-600">
        <input type="checkbox" defaultChecked className="mt-0.5 h-4 w-4 accent-brand-600" />
        Je certifie l’exactitude des informations fournies et j’accepte le traitement de mes données
        dans le cadre de cette candidature.
      </label>
    </div>
  )
}

function ReviewBlock({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-xl border border-ink-100 bg-ink-50/50 p-4">
      <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-ink-400">
        {icon}
        {title}
      </p>
      <p className="mt-1 text-sm font-medium text-ink-800">{children}</p>
    </div>
  )
}
