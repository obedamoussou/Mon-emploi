import { Link } from '@tanstack/react-router'
import { AlertTriangle, RotateCcw } from 'lucide-react'

export function DefaultCatchBoundary({ error }: { error: Error }) {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-600">
        <AlertTriangle className="h-8 w-8" />
      </div>
      <h1 className="font-display text-2xl font-bold text-ink-900">Une erreur est survenue</h1>
      <p className="mt-2 max-w-md text-ink-500">
        Nous n’avons pas pu afficher cette page. Veuillez réessayer ou revenir à l’accueil.
      </p>
      {import.meta.env.DEV && (
        <pre className="mt-4 max-w-lg overflow-auto rounded-xl bg-ink-900 p-4 text-left text-xs text-ink-100">
          {error.message}
        </pre>
      )}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button onClick={() => window.location.reload()} className="btn-primary">
          <RotateCcw className="h-4 w-4" />
          Réessayer
        </button>
        <Link to="/" className="btn-secondary">
          Retour à l’accueil
        </Link>
      </div>
    </div>
  )
}
