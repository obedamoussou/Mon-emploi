import { Link } from '@tanstack/react-router'
import { cn } from '~/lib/utils'
import blasonBenin from '~/assets/blason-benin.svg'

/** Logo officiel — armoiries de la République du Bénin + signature. */
export function Logo({
  variant = 'dark',
  className,
}: {
  variant?: 'dark' | 'light'
  className?: string
}) {
  const isLight = variant === 'light'
  return (
    <Link
      to="/"
      className={cn('group flex items-center gap-2.5', className)}
      aria-label="Président de la République du Bénin — accueil"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-ink-100 bg-white p-1 shadow-sm">
        <img
          src={blasonBenin}
          alt="Armoiries de la République du Bénin"
          className="h-full w-full object-contain"
          width={40}
          height={40}
        />
      </span>
      <span className="flex max-w-[12.5rem] flex-col leading-tight sm:max-w-none">
        <span
          className={cn(
            'font-display text-[13px] font-extrabold leading-tight tracking-tight sm:text-sm',
            isLight ? 'text-white' : 'text-ink-900',
          )}
        >
          Président de la République du Bénin
        </span>
        <span
          className={cn(
            'mt-0.5 text-[10px] font-medium uppercase tracking-[0.12em]',
            isLight ? 'text-white/60' : 'text-ink-400',
          )}
        >
          Portail National de l’Emploi
        </span>
      </span>
    </Link>
  )
}
