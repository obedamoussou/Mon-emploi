import type { ReactNode } from 'react'
import { cn } from '~/lib/utils'

type BadgeVariant =
  | 'neutral'
  | 'brand'
  | 'accent'
  | 'gold'
  | 'danger'
  | 'outline'

const variants: Record<BadgeVariant, string> = {
  neutral: 'bg-ink-100 text-ink-700',
  brand: 'bg-brand-50 text-brand-700',
  accent: 'bg-accent-50 text-accent-700',
  gold: 'bg-gold-400/15 text-gold-600',
  danger: 'bg-red-50 text-red-600',
  outline: 'border border-ink-200 bg-white text-ink-600',
}

export function Badge({
  children,
  variant = 'neutral',
  className,
  icon,
}: {
  children: ReactNode
  variant?: BadgeVariant
  className?: string
  icon?: ReactNode
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold leading-none',
        variants[variant],
        className,
      )}
    >
      {icon}
      {children}
    </span>
  )
}
