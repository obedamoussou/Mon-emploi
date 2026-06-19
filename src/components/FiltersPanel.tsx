import { motion } from 'framer-motion'
import { RotateCcw, SlidersHorizontal } from 'lucide-react'
import { useState } from 'react'
import type {
  ContractType,
  InstitutionType,
  JobFilters,
  OpportunityKind,
} from '~/types'
import { regions } from '~/mocks/regions'
import { categories } from '~/mocks/categories'
import { institutions, institutionTypes } from '~/mocks/institutions'
import { kindLabels } from '~/lib/display'
import { cn } from '~/lib/utils'

const kinds: OpportunityKind[] = ['emploi', 'stage', 'concours', 'appel-candidature']
const contracts: ContractType[] = [
  'CDI',
  'CDD',
  'Stage',
  'Concours',
  'Vacation',
  'Apprentissage',
  'Mission',
]
const datePostedOptions: { value: JobFilters['datePosted']; label: string }[] = [
  { value: 'all', label: 'Toutes les dates' },
  { value: '24h', label: 'Dernières 24 h' },
  { value: '7d', label: '7 derniers jours' },
  { value: '30d', label: '30 derniers jours' },
]

export type FiltersValue = Pick<
  JobFilters,
  | 'kind'
  | 'contractType'
  | 'categoryId'
  | 'regionId'
  | 'institutionType'
  | 'institutionId'
  | 'datePosted'
>

export function FiltersPanel({
  value,
  onChange,
  onReset,
  activeCount,
}: {
  value: FiltersValue
  onChange: (patch: Partial<FiltersValue>) => void
  onReset: () => void
  activeCount: number
}) {
  return (
    <aside className="rounded-2xl border border-ink-100 bg-white shadow-card">
      <div className="flex items-center justify-between border-b border-ink-100 px-5 py-4">
        <h2 className="inline-flex items-center gap-2 font-display text-sm font-bold text-ink-900">
          <SlidersHorizontal className="h-4 w-4 text-brand-600" />
          Filtres
          {activeCount > 0 && (
            <span className="rounded-full bg-brand-600 px-1.5 py-0.5 text-[10px] font-bold text-white">
              {activeCount}
            </span>
          )}
        </h2>
        {activeCount > 0 && (
          <button
            onClick={onReset}
            className="inline-flex items-center gap-1 text-xs font-medium text-ink-500 transition hover:text-brand-600"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Réinitialiser
          </button>
        )}
      </div>

      <div className="divide-y divide-ink-100">
        <Section title="Type d’opportunité" defaultOpen>
          <div className="flex flex-wrap gap-2">
            {kinds.map((k) => (
              <ChipToggle
                key={k}
                active={value.kind === k}
                onClick={() => onChange({ kind: value.kind === k ? null : k })}
              >
                {kindLabels[k]}
              </ChipToggle>
            ))}
          </div>
        </Section>

        <Section title="Type de contrat" defaultOpen>
          <div className="flex flex-wrap gap-2">
            {contracts.map((c) => (
              <ChipToggle
                key={c}
                active={value.contractType === c}
                onClick={() => onChange({ contractType: value.contractType === c ? null : c })}
              >
                {c}
              </ChipToggle>
            ))}
          </div>
        </Section>

        <Section title="Domaine">
          <SelectFilter
            value={value.categoryId ?? ''}
            onChange={(v) => onChange({ categoryId: v || null })}
            placeholder="Tous les domaines"
            options={categories.map((c) => ({ value: c.id, label: c.name }))}
          />
        </Section>

        <Section title="Région">
          <SelectFilter
            value={value.regionId ?? ''}
            onChange={(v) => onChange({ regionId: v || null })}
            placeholder="Toutes les régions"
            options={regions.map((r) => ({ value: r.id, label: r.name }))}
          />
        </Section>

        <Section title="Type d’organisme">
          <SelectFilter
            value={value.institutionType ?? ''}
            onChange={(v) =>
              onChange({ institutionType: (v || null) as InstitutionType | null })
            }
            placeholder="Tous les organismes"
            options={institutionTypes.map((t) => ({ value: t, label: t }))}
          />
        </Section>

        <Section title="Institution">
          <SelectFilter
            value={value.institutionId ?? ''}
            onChange={(v) => onChange({ institutionId: v || null })}
            placeholder="Toutes les institutions"
            options={institutions
              .slice()
              .sort((a, b) => a.shortName.localeCompare(b.shortName))
              .map((i) => ({ value: i.id, label: i.shortName }))}
          />
        </Section>

        <Section title="Date de publication" defaultOpen>
          <div className="space-y-1.5">
            {datePostedOptions.map((opt) => (
              <label
                key={opt.value}
                className="flex cursor-pointer items-center gap-2.5 text-sm text-ink-700"
              >
                <input
                  type="radio"
                  name="datePosted"
                  checked={value.datePosted === opt.value}
                  onChange={() => onChange({ datePosted: opt.value })}
                  className="h-4 w-4 accent-brand-600"
                />
                {opt.label}
              </label>
            ))}
          </div>
        </Section>
      </div>
    </aside>
  )
}

function Section({
  title,
  children,
  defaultOpen = false,
}: {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="px-5 py-4">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between text-sm font-semibold text-ink-800"
      >
        {title}
        <span className={cn('text-ink-400 transition-transform', open && 'rotate-180')}>⌄</span>
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="overflow-hidden pt-3"
        >
          {children}
        </motion.div>
      )}
    </div>
  )
}

function ChipToggle({
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
        'rounded-full border px-3 py-1.5 text-xs font-medium transition',
        active
          ? 'border-brand-600 bg-brand-600 text-white shadow-sm'
          : 'border-ink-200 bg-white text-ink-700 hover:border-brand-300 hover:text-brand-700',
      )}
    >
      {children}
    </button>
  )
}

function SelectFilter({
  value,
  onChange,
  options,
  placeholder,
}: {
  value: string
  onChange: (v: string) => void
  options: { value: string; label: string }[]
  placeholder: string
}) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)} className="input cursor-pointer">
      <option value="">{placeholder}</option>
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  )
}
