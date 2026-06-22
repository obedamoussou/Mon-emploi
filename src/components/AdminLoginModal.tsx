import { useNavigate } from '@tanstack/react-router'
import { Loader2, Lock, LogIn, Mail, ShieldCheck } from 'lucide-react'
import { useState } from 'react'
import { Modal } from '~/components/Modal'

/**
 * Modale de connexion administration : e-mail + mot de passe.
 * Flux 100 % front (mock) : redirige vers l'espace d'administration.
 */
export function AdminLoginModal({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const valid = email.trim() && password.length >= 1

  function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!valid) return
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      onClose()
      navigate({ to: '/espace-organisme' })
    }, 1100)
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Connexion administration"
      description="Accédez à votre espace de gestion des offres et candidatures."
    >
      <form onSubmit={submit} className="space-y-4">
        <div className="flex items-center gap-3 rounded-xl bg-brand-50 p-3 text-sm text-brand-800">
          <ShieldCheck className="h-5 w-5 shrink-0" />
          Réservé aux institutions, ministères et organismes partenaires vérifiés.
        </div>

        <div>
          <label className="label">Adresse e-mail professionnelle</label>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
            <input
              type="email"
              className="input pl-10"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="recrutement@organisme.bj"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label className="label mb-0">Mot de passe</label>
            <button type="button" className="text-xs font-medium text-brand-700 hover:underline">
              Mot de passe oublié ?
            </button>
          </div>
          <div className="relative mt-1.5">
            <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
            <input
              type="password"
              className="input pl-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>
        </div>

        <button type="submit" disabled={!valid || submitting} className="btn-primary w-full">
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Connexion…
            </>
          ) : (
            <>
              <LogIn className="h-4 w-4" /> Se connecter
            </>
          )}
        </button>
      </form>
    </Modal>
  )
}
