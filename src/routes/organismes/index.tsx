import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Building2, Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { PublicLayout } from '~/layouts/PublicLayout'
import { InstitutionCard } from '~/components/InstitutionCard'
import { InstitutionCardSkeleton } from '~/components/LoadingSkeleton'
import { EmptyState } from '~/components/EmptyState'
import { useInstitutions } from '~/hooks/queries'
import { institutionTypes } from '~/mocks/institutions'
import { useDebouncedValue } from '~/hooks/useMediaQuery'
import { cn, formatNumber } from '~/lib/utils'
import type { InstitutionType } from '~/types'

interface OrgSearch {
  q?: string
  type?: InstitutionType
}

export const Route = createFileRoute('/organismes/')({
  validateSearch: (search: Record<string, unknown>): OrgSearch => ({
    q: typeof search.q === 'string' ? search.q : undefined,
    type: search.type as InstitutionType | undefined,
  }),
  component: OrganismesPage,
})

function OrganismesPage() {
  const search = Route.useSearch()
  const navigate = useNavigate({ from: Route.fullPath })
  const [query, setQuery] = useState(search.q ?? '')
  const debounced = useDebouncedValue(query, 250)

  const { data, isLoading } = useInstitutions(debounced)

  const filtered = useMemo(() => {
    if (!data) return []
    return search.type ? data.filter((i) => i.type === search.type) : data
  }, [data, search.type])

  const totalJobs = filtered.reduce((sum, i) => sum + i.jobCount, 0)

  return (
    <PublicLayout>
      <div className="border-b border-ink-100 bg-white">
        <div className="container-page py-8">
          <div className="flex items-center gap-2 text-brand-600">
            <Building2 className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">Annuaire officiel</span>
          </div>
          <h1 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl">
            Organismes & institutions partenaires
          </h1>
          <p className="mt-1.5 max-w-2xl text-ink-500">
            Découvrez les ministères, mairies, entreprises publiques, ONG et universités qui
            recrutent sur la plateforme nationale.
          </p>

          <div className="mt-5 max-w-xl">
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher un organisme, un secteur…"
                className="input h-12 pl-12 text-[15px]"
              />
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <TypeChip
              active={!search.type}
              onClick={() => navigate({ search: (p) => ({ ...p, type: undefined }) })}
            >
              Tous
            </TypeChip>
            {institutionTypes.map((t) => (
              <TypeChip
                key={t}
                active={search.type === t}
                onClick={() => navigate({ search: (p) => ({ ...p, type: t }) })}
              >
                {t}
              </TypeChip>
            ))}
          </div>
        </div>
      </div>

      <div className="container-page py-8">
        <p className="mb-5 text-sm text-ink-600">
          <span className="font-bold text-ink-900">{filtered.length}</span> organismes ·{' '}
          <span className="font-bold text-accent-700">{formatNumber(totalJobs)}</span> offres au total
        </p>

        {isLoading ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <InstitutionCardSkeleton key={i} />
            ))}
          </div>
        ) : filtered.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((inst, i) => (
              <InstitutionCard key={inst.id} institution={inst} index={i} />
            ))}
          </div>
        ) : (
          <EmptyState
            icon={<Building2 className="h-7 w-7" />}
            title="Aucun organisme trouvé"
            description="Modifiez votre recherche ou changez de catégorie."
          />
        )}
      </div>
    </PublicLayout>
  )
}

function TypeChip({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'rounded-full border px-3.5 py-1.5 text-xs font-semibold transition',
        active
          ? 'border-brand-600 bg-brand-600 text-white'
          : 'border-ink-200 bg-white text-ink-600 hover:border-brand-300 hover:text-brand-700',
      )}
    >
      {children}
    </button>
  )
}
