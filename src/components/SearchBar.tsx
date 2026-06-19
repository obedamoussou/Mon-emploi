import { useNavigate } from '@tanstack/react-router'
import { MapPin, Search, Tag } from 'lucide-react'
import { useState } from 'react'
import { regions } from '~/mocks/regions'
import { categories } from '~/mocks/categories'
import { cn } from '~/lib/utils'

/**
 * Barre de recherche principale. En variante "hero", affiche les sélecteurs
 * région et domaine. Navigue vers /offres avec les filtres en paramètres.
 */
export function SearchBar({
  variant = 'hero',
  initialQuery = '',
  className,
}: {
  variant?: 'hero' | 'compact'
  initialQuery?: string
  className?: string
}) {
  const navigate = useNavigate()
  const [query, setQuery] = useState(initialQuery)
  const [regionId, setRegionId] = useState('')
  const [categoryId, setCategoryId] = useState('')

  function submit(e: React.FormEvent) {
    e.preventDefault()
    navigate({
      to: '/offres',
      search: {
        q: query || undefined,
        region: regionId || undefined,
        categorie: categoryId || undefined,
        page: 1,
      },
    })
  }

  if (variant === 'compact') {
    return (
      <form onSubmit={submit} className={cn('relative', className)}>
        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher un poste, un organisme…"
          className="input pl-10"
        />
      </form>
    )
  }

  return (
    <form
      onSubmit={submit}
      className={cn(
        'grid gap-2 rounded-2xl bg-white p-2 shadow-card-hover ring-1 ring-ink-100 md:grid-cols-[1.6fr_1fr_1fr_auto]',
        className,
      )}
    >
      <Field icon={<Search className="h-5 w-5 text-brand-500" />}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Métier, mot-clé, organisme…"
          className="h-full w-full bg-transparent text-sm font-medium text-ink-900 placeholder:text-ink-400 focus:outline-none"
          aria-label="Mots-clés"
        />
      </Field>

      <Field icon={<MapPin className="h-5 w-5 text-brand-500" />} divider>
        <select
          value={regionId}
          onChange={(e) => setRegionId(e.target.value)}
          className="h-full w-full cursor-pointer appearance-none bg-transparent text-sm font-medium text-ink-700 focus:outline-none"
          aria-label="Région"
        >
          <option value="">Toutes les régions</option>
          {regions.map((r) => (
            <option key={r.id} value={r.id}>
              {r.name}
            </option>
          ))}
        </select>
      </Field>

      <Field icon={<Tag className="h-5 w-5 text-brand-500" />} divider>
        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          className="h-full w-full cursor-pointer appearance-none bg-transparent text-sm font-medium text-ink-700 focus:outline-none"
          aria-label="Domaine"
        >
          <option value="">Tous les domaines</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </Field>

      <button type="submit" className="btn-primary h-12 px-7 text-[15px]">
        <Search className="h-5 w-5" />
        <span className="hidden sm:inline">Rechercher</span>
      </button>
    </form>
  )
}

function Field({
  icon,
  children,
  divider,
}: {
  icon: React.ReactNode
  children: React.ReactNode
  divider?: boolean
}) {
  return (
    <div
      className={cn(
        'flex h-12 items-center gap-2.5 rounded-xl px-3.5',
        divider && 'md:border-l md:border-ink-100',
      )}
    >
      {icon}
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  )
}
