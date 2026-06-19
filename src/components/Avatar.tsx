import { cn } from '~/lib/utils'

const sizes = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-14 w-14 text-base',
  xl: 'h-20 w-20 text-2xl',
} as const

/** Avatar à initiales avec couleur de fond déterministe (pas d'image). */
export function Avatar({
  initials,
  color = '#1f47e6',
  size = 'md',
  className,
  ring,
}: {
  initials: string
  color?: string
  size?: keyof typeof sizes
  className?: string
  ring?: boolean
}) {
  return (
    <span
      className={cn(
        'inline-flex shrink-0 select-none items-center justify-center rounded-full font-bold text-white',
        sizes[size],
        ring && 'ring-2 ring-white',
        className,
      )}
      style={{ backgroundColor: color }}
      aria-hidden
    >
      {initials}
    </span>
  )
}
