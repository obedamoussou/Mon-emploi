import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  action,
}: {
  eyebrow?: string
  title: ReactNode
  description?: string
  align?: 'left' | 'center'
  action?: { label: string; to: string }
}) {
  return (
    <div
      className={
        align === 'center'
          ? 'mx-auto max-w-2xl text-center'
          : 'flex flex-wrap items-end justify-between gap-4'
      }
    >
      <div className={align === 'center' ? '' : 'max-w-2xl'}>
        {eyebrow && (
          <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-700">
            {eyebrow}
          </span>
        )}
        <h2 className="mt-3 text-balance font-display text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl">
          {title}
        </h2>
        {description && <p className="mt-3 text-ink-500">{description}</p>}
      </div>
      {action && (
        <Link
          to={action.to}
          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition hover:text-brand-800"
        >
          {action.label}
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </Link>
      )}
    </div>
  )
}
