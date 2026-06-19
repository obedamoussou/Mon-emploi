import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'framer-motion'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import { PublicLayout } from '~/layouts/PublicLayout'
import { JobCard } from '~/components/JobCard'
import { JobListSkeleton } from '~/components/LoadingSkeleton'
import { EmptyState } from '~/components/EmptyState'
import { Pagination } from '~/components/Pagination'
import { FiltersPanel, type FiltersValue } from '~/components/FiltersPanel'
import { useJobs } from '~/hooks/queries'
import { defaultFilters } from '~/lib/api'
import type {
  ContractType,
  InstitutionType,
  JobFilters,
  OpportunityKind,
  SortOption,
} from '~/types'
import { cn, formatNumber } from '~/lib/utils'

interface OffresSearch {
  q?: string
  region?: string
  categorie?: string
  contrat?: ContractType
  type?: OpportunityKind
  organisme?: InstitutionType
  institution?: string
  date?: JobFilters['datePosted']
  tri?: SortOption
  page?: number
}

export const Route = createFileRoute('/offres/')({
  validateSearch: (search: Record<string, unknown>): OffresSearch => ({
    q: typeof search.q === 'string' ? search.q : undefined,
    region: typeof search.region === 'string' ? search.region : undefined,
    categorie: typeof search.categorie === 'string' ? search.categorie : undefined,
    contrat: search.contrat as ContractType | undefined,
    type: search.type as OpportunityKind | undefined,
    organisme: search.organisme as InstitutionType | undefined,
    institution: typeof search.institution === 'string' ? search.institution : undefined,
    date: search.date as JobFilters['datePosted'] | undefined,
    tri: search.tri as SortOption | undefined,
    page: typeof search.page === 'number' ? search.page : undefined,
  }),
  component: OffresPage,
})

const sortLabels: Record<SortOption, string> = {
  recent: 'Plus récentes',
  deadline: 'Date limite proche',
  popularity: 'Plus consultées',
  relevance: 'Pertinence',
}

function OffresPage() {
  const search = Route.useSearch()
  const navigate = useNavigate({ from: Route.fullPath })
  const [mobileFilters, setMobileFilters] = useState(false)

  const filters: JobFilters = useMemo(
    () => ({
      ...defaultFilters,
      query: search.q ?? '',
      regionId: search.region ?? null,
      categoryId: search.categorie ?? null,
      contractType: search.contrat ?? null,
      kind: search.type ?? null,
      institutionType: search.organisme ?? null,
      institutionId: search.institution ?? null,
      datePosted: search.date ?? 'all',
      sort: search.tri ?? 'recent',
      page: search.page ?? 1,
    }),
    [search],
  )

  const { data, isLoading, isFetching } = useJobs(filters)

  const filterValue: FiltersValue = {
    kind: filters.kind,
    contractType: filters.contractType,
    categoryId: filters.categoryId,
    regionId: filters.regionId,
    institutionType: filters.institutionType,
    institutionId: filters.institutionId,
    datePosted: filters.datePosted,
  }

  const activeCount = [
    filters.kind,
    filters.contractType,
    filters.categoryId,
    filters.regionId,
    filters.institutionType,
    filters.institutionId,
    filters.datePosted !== 'all' ? filters.datePosted : null,
  ].filter(Boolean).length

  function patchFilters(patch: Partial<FiltersValue>) {
    navigate({
      search: (prev) => ({
        ...prev,
        type: 'kind' in patch ? patch.kind ?? undefined : prev.type,
        contrat: 'contractType' in patch ? patch.contractType ?? undefined : prev.contrat,
        categorie: 'categoryId' in patch ? patch.categoryId ?? undefined : prev.categorie,
        region: 'regionId' in patch ? patch.regionId ?? undefined : prev.region,
        organisme: 'institutionType' in patch ? patch.institutionType ?? undefined : prev.organisme,
        institution: 'institutionId' in patch ? patch.institutionId ?? undefined : prev.institution,
        date: 'datePosted' in patch ? patch.datePosted ?? undefined : prev.date,
        page: 1,
      }),
    })
  }

  function resetFilters() {
    navigate({ search: (prev) => ({ q: prev.q, tri: prev.tri }) })
  }

  function setSort(tri: SortOption) {
    navigate({ search: (prev) => ({ ...prev, tri, page: 1 }) })
  }

  function setQuery(q: string) {
    navigate({ search: (prev) => ({ ...prev, q: q || undefined, page: 1 }) })
  }

  function setPage(page: number) {
    navigate({ search: (prev) => ({ ...prev, page }) })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <PublicLayout>
      {/* En-tête */}
      <div className="border-b border-ink-100 bg-white">
        <div className="container-page py-8">
          <h1 className="font-display text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl">
            Offres, stages & concours
          </h1>
          <p className="mt-1.5 text-ink-500">
            Parcourez toutes les opportunités du secteur public et postulez en ligne.
          </p>

          <div className="mt-5 max-w-2xl">
            <SearchInput value={filters.query} onSubmit={setQuery} />
          </div>
        </div>
      </div>

      <div className="container-page grid gap-6 py-8 lg:grid-cols-[290px_1fr]">
        {/* Filtres desktop */}
        <div className="hidden lg:block">
          <div className="sticky top-24">
            <FiltersPanel
              value={filterValue}
              onChange={patchFilters}
              onReset={resetFilters}
              activeCount={activeCount}
            />
          </div>
        </div>

        {/* Résultats */}
        <div className="min-w-0">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-ink-600">
              {data ? (
                <>
                  <span className="font-bold text-ink-900">{formatNumber(data.total)}</span>{' '}
                  opportunité{data.total > 1 ? 's' : ''} trouvée{data.total > 1 ? 's' : ''}
                </>
              ) : (
                'Recherche…'
              )}
              {isFetching && !isLoading && (
                <span className="ml-2 text-xs text-brand-500">Actualisation…</span>
              )}
            </p>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setMobileFilters(true)}
                className="btn-secondary lg:hidden"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filtres
                {activeCount > 0 && (
                  <span className="rounded-full bg-brand-600 px-1.5 text-[10px] font-bold text-white">
                    {activeCount}
                  </span>
                )}
              </button>
              <label className="flex items-center gap-2 text-sm">
                <span className="hidden text-ink-500 sm:inline">Trier&nbsp;:</span>
                <select
                  value={filters.sort}
                  onChange={(e) => setSort(e.target.value as SortOption)}
                  className="input w-auto cursor-pointer py-2"
                >
                  {(Object.keys(sortLabels) as SortOption[]).map((s) => (
                    <option key={s} value={s}>
                      {sortLabels[s]}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          {isLoading ? (
            <div className="grid gap-4 sm:grid-cols-2">
              <JobListSkeleton count={6} />
            </div>
          ) : data && data.items.length > 0 ? (
            <>
              <div className="grid gap-4 sm:grid-cols-2">
                {data.items.map((job, i) => (
                  <JobCard key={job.id} job={job} index={i} />
                ))}
              </div>
              <div className="mt-10">
                <Pagination page={data.page} totalPages={data.totalPages} onPageChange={setPage} />
              </div>
            </>
          ) : (
            <EmptyState
              title="Aucune opportunité trouvée"
              description="Essayez d’élargir vos critères de recherche ou réinitialisez les filtres."
              action={
                <button onClick={resetFilters} className="btn-primary">
                  Réinitialiser les filtres
                </button>
              }
            />
          )}
        </div>
      </div>

      {/* Drawer filtres mobile */}
      <AnimatePresence>
        {mobileFilters && (
          <div className="fixed inset-0 z-[90] lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-ink-950/50 backdrop-blur-sm"
              onClick={() => setMobileFilters(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute inset-y-0 left-0 w-[88%] max-w-sm overflow-y-auto bg-ink-50 p-4"
            >
              <div className="mb-3 flex items-center justify-between">
                <h2 className="font-display font-bold text-ink-900">Filtres</h2>
                <button
                  onClick={() => setMobileFilters(false)}
                  className="rounded-lg p-1.5 text-ink-500 hover:bg-ink-100"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <FiltersPanel
                value={filterValue}
                onChange={patchFilters}
                onReset={resetFilters}
                activeCount={activeCount}
              />
              <button
                onClick={() => setMobileFilters(false)}
                className="btn-primary mt-4 w-full"
              >
                Voir les résultats
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </PublicLayout>
  )
}

function SearchInput({
  value,
  onSubmit,
}: {
  value: string
  onSubmit: (v: string) => void
}) {
  const [local, setLocal] = useState(value)
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit(local)
      }}
      className="relative"
    >
      <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-400" />
      <input
        value={local}
        onChange={(e) => setLocal(e.target.value)}
        placeholder="Métier, mot-clé, organisme…"
        className={cn('input h-12 pl-12 pr-28 text-[15px]')}
      />
      <button type="submit" className="btn-primary absolute right-1.5 top-1.5 h-9">
        Rechercher
      </button>
    </form>
  )
}
