import { BadgeCheck, FileText, Loader2, Upload, UserPlus } from 'lucide-react'
import { useRef, useState } from 'react'
import { Modal } from '~/components/Modal'
import { categories } from '~/mocks/categories'
import { cn } from '~/lib/utils'

/**
 * Modale d'inscription candidat : informations personnelles + dépôt de CV.
 * Flux 100 % front (mock) : affiche une confirmation après envoi.
 */
export function CandidateRegisterModal({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    categoryId: categories[0]?.id ?? '',
  })
  const [cvName, setCvName] = useState<string | null>(null)

  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }))

  const valid =
    form.firstName.trim() &&
    form.lastName.trim() &&
    form.email.trim() &&
    form.phone.trim() &&
    !!cvName

  function reset() {
    setDone(false)
    setSubmitting(false)
    setForm({ firstName: '', lastName: '', email: '', phone: '', categoryId: categories[0]?.id ?? '' })
    setCvName(null)
  }

  function handleClose() {
    onClose()
    // Réinitialise après la fermeture pour la prochaine ouverture.
    setTimeout(reset, 200)
  }

  function submit() {
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setDone(true)
    }, 1300)
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      title={done ? undefined : 'Inscription candidat'}
      description={done ? undefined : 'Renseignez vos informations et déposez votre CV.'}
      size="lg"
      footer={
        done ? (
          <button onClick={handleClose} className="btn-primary">
            Terminer
          </button>
        ) : (
          <>
            <button onClick={handleClose} className="btn-secondary">
              Annuler
            </button>
            <button onClick={submit} disabled={!valid || submitting} className="btn-primary">
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Envoi…
                </>
              ) : (
                <>
                  <UserPlus className="h-4 w-4" /> M’inscrire
                </>
              )}
            </button>
          </>
        )
      }
    >
      {done ? (
        <div className="py-2 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-50 text-accent-600">
            <BadgeCheck className="h-7 w-7" />
          </div>
          <h3 className="mt-4 font-display text-lg font-bold text-ink-900">
            Inscription enregistrée !
          </h3>
          <p className="mt-1.5 text-sm text-ink-500">
            Merci {form.firstName}. Votre candidature a bien été reçue. Les organismes pourront vous
            contacter via les coordonnées fournies.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Prénom">
            <input className="input" value={form.firstName} onChange={set('firstName')} placeholder="Aïcha" />
          </Field>
          <Field label="Nom">
            <input className="input" value={form.lastName} onChange={set('lastName')} placeholder="Diallo" />
          </Field>
          <Field label="Adresse e-mail">
            <input type="email" className="input" value={form.email} onChange={set('email')} placeholder="vous@email.bj" />
          </Field>
          <Field label="Téléphone">
            <input className="input" value={form.phone} onChange={set('phone')} placeholder="+229 ..." />
          </Field>
          <div className="sm:col-span-2">
            <Field label="Domaine d’activité">
              <select className="input cursor-pointer" value={form.categoryId} onChange={set('categoryId')}>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <div className="sm:col-span-2">
            <label className="label">Curriculum vitæ (CV)</label>
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className={cn(
                'flex w-full items-center gap-3 rounded-xl border-2 border-dashed px-4 py-4 text-left transition',
                cvName
                  ? 'border-accent-300 bg-accent-50'
                  : 'border-ink-200 bg-ink-50/50 hover:border-brand-400 hover:bg-brand-50/40',
              )}
            >
              <span
                className={cn(
                  'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg',
                  cvName ? 'bg-accent-100 text-accent-700' : 'bg-brand-50 text-brand-600',
                )}
              >
                {cvName ? <FileText className="h-5 w-5" /> : <Upload className="h-5 w-5" />}
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold text-ink-800">
                  {cvName ?? 'Téléverser votre CV'}
                </span>
                <span className="block text-xs text-ink-400">PDF, DOC, DOCX — 5 Mo max</span>
              </span>
            </button>
            <input
              ref={inputRef}
              type="file"
              accept=".pdf,.doc,.docx"
              className="hidden"
              onChange={(e) => setCvName(e.target.files?.[0]?.name ?? null)}
            />
          </div>
        </div>
      )}
    </Modal>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="label">{label}</label>
      {children}
    </div>
  )
}
