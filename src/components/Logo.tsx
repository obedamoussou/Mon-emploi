import { Link } from '@tanstack/react-router'
import { cn } from '~/lib/utils'

/** Logo officiel Mon Emploi — emblème + signature institutionnelle. */
export function Logo({
  variant = 'dark',
  className,
}: {
  variant?: 'dark' | 'light'
  className?: string
}) {
  const isLight = variant === 'light'
  return (
    <Link to="/" className={cn('group flex items-center gap-2.5', className)} aria-label="Mon Emploi — accueil">
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-glow">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none">
          <path
            d="M12 2L3 6v6c0 5 3.8 8.4 9 10 5.2-1.6 9-5 9-10V6l-9-4z"
            fill="currentColor"
            fillOpacity="0.18"
          />
          <path
            d="M12 2L3 6v6c0 5 3.8 8.4 9 10 5.2-1.6 9-5 9-10V6l-9-4z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="m8.5 12 2.3 2.3L15.5 9.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-display text-[17px] font-extrabold tracking-tight',
            isLight ? 'text-white' : 'text-ink-900',
          )}
        >
          Mon<span className="text-brand-500"> Emploi</span>
        </span>
        <span
          className={cn(
            'text-[10px] font-medium uppercase tracking-[0.14em]',
            isLight ? 'text-white/60' : 'text-ink-400',
          )}
        >
          Portail National de l’Emploi
        </span>
      </span>
    </Link>
  )
}
