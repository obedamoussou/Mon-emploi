import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '~/lib/utils'

/** Construit la liste de pages avec ellipses : 1 … 4 5 [6] 7 8 … 20 */
function pageItems(current: number, total: number): (number | '…')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)
  const items: (number | '…')[] = [1]
  const start = Math.max(2, current - 1)
  const end = Math.min(total - 1, current + 1)
  if (start > 2) items.push('…')
  for (let p = start; p <= end; p++) items.push(p)
  if (end < total - 1) items.push('…')
  items.push(total)
  return items
}

export function Pagination({
  page,
  totalPages,
  onPageChange,
}: {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
}) {
  if (totalPages <= 1) return null
  const items = pageItems(page, totalPages)

  return (
    <nav className="flex items-center justify-center gap-1.5" aria-label="Pagination">
      <button
        className="btn-secondary h-9 w-9 !px-0"
        onClick={() => onPageChange(page - 1)}
        disabled={page <= 1}
        aria-label="Page précédente"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      {items.map((it, i) =>
        it === '…' ? (
          <span key={`e${i}`} className="px-1.5 text-sm text-ink-400">
            …
          </span>
        ) : (
          <button
            key={it}
            onClick={() => onPageChange(it)}
            aria-current={it === page ? 'page' : undefined}
            className={cn(
              'inline-flex h-9 min-w-9 items-center justify-center rounded-xl px-2 text-sm font-semibold transition',
              it === page
                ? 'bg-brand-600 text-white shadow-sm'
                : 'text-ink-700 hover:bg-ink-100',
            )}
          >
            {it}
          </button>
        ),
      )}

      <button
        className="btn-secondary h-9 w-9 !px-0"
        onClick={() => onPageChange(page + 1)}
        disabled={page >= totalPages}
        aria-label="Page suivante"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </nav>
  )
}
