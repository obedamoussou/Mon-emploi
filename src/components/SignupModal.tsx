import { Link } from '@tanstack/react-router'
import { ArrowRight, Building2, UserRound } from 'lucide-react'
import { Modal } from '~/components/Modal'

/**
 * Modale de choix du type d'inscription : candidat ou organisation.
 * Chaque choix redirige vers le parcours d'inscription correspondant.
 */
export function SignupModal({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Créer un compte"
      description="Choisissez le type de compte qui vous correspond."
      size="lg"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <ChoiceCard
          to="/inscription/candidat"
          onClose={onClose}
          icon={<UserRound className="h-6 w-6" />}
          tone="brand"
          title="Je suis un candidat"
          text="Recherchez des offres, déposez votre CV et postulez en ligne aux opportunités du secteur public."
          cta="S’inscrire comme candidat"
        />
        <ChoiceCard
          to="/inscription/organisation"
          onClose={onClose}
          icon={<Building2 className="h-6 w-6" />}
          tone="accent"
          title="Je suis une organisation"
          text="Publiez vos offres, gérez vos candidatures et recrutez les meilleurs talents pour vos équipes."
          cta="S’inscrire comme organisation"
        />
      </div>

      <p className="mt-5 text-center text-sm text-ink-500">
        Vous avez déjà un compte ?{' '}
        <Link to="/tableau-de-bord" onClick={onClose} className="font-semibold text-brand-700 hover:underline">
          Se connecter
        </Link>
      </p>
    </Modal>
  )
}

function ChoiceCard({
  to,
  onClose,
  icon,
  tone,
  title,
  text,
  cta,
}: {
  to: string
  onClose: () => void
  icon: React.ReactNode
  tone: 'brand' | 'accent'
  title: string
  text: string
  cta: string
}) {
  const toneCls =
    tone === 'brand'
      ? 'bg-brand-50 text-brand-600 group-hover:bg-brand-600'
      : 'bg-accent-50 text-accent-700 group-hover:bg-accent-600'
  return (
    <Link
      to={to}
      onClick={onClose}
      className="group flex flex-col rounded-2xl border border-ink-100 p-5 text-left transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card-hover"
    >
      <span
        className={`flex h-12 w-12 items-center justify-center rounded-xl transition group-hover:text-white ${toneCls}`}
      >
        {icon}
      </span>
      <h3 className="mt-4 font-display font-bold text-ink-900">{title}</h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-500">{text}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
        {cta}
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </span>
    </Link>
  )
}
