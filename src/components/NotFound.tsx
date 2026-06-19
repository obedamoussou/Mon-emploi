import { Link } from '@tanstack/react-router'
import { Compass, Home } from 'lucide-react'

export function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
        <Compass className="h-8 w-8" />
      </div>
      <p className="font-display text-6xl font-extrabold text-brand-600">404</p>
      <h1 className="mt-3 font-display text-2xl font-bold text-ink-900">Page introuvable</h1>
      <p className="mt-2 max-w-md text-ink-500">
        La page que vous recherchez n’existe pas ou a été déplacée. Revenez à l’accueil pour
        poursuivre votre recherche d’opportunités.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link to="/" className="btn-primary">
          <Home className="h-4 w-4" />
          Retour à l’accueil
        </Link>
        <Link to="/offres" className="btn-secondary">
          Voir les offres
        </Link>
      </div>
    </div>
  )
}
