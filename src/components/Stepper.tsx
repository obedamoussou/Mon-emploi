import { CheckCircle2, type LucideIcon } from 'lucide-react'
import { cn } from '~/lib/utils'

export interface Step {
  id: number
  label: string
  icon: LucideIcon
}

/** Indicateur d'étapes horizontal réutilisable (inscription, création d'offre…). */
export function Stepper({ steps, current }: { steps: Step[]; current: number }) {
  return (
    <div className="flex items-center">
      {steps.map((s, i) => (
        <div key={s.id} className="flex flex-1 items-center last:flex-none">
          <div className="flex flex-col items-center gap-1.5">
            <div
              className={cn(
                'flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-bold transition',
                current > s.id
                  ? 'border-accent-600 bg-accent-600 text-white'
                  : current === s.id
                    ? 'border-brand-600 bg-brand-600 text-white'
                    : 'border-ink-200 bg-white text-ink-400',
              )}
            >
              {current > s.id ? <CheckCircle2 className="h-5 w-5" /> : <s.icon className="h-4 w-4" />}
            </div>
            <span
              className={cn(
                'hidden text-center text-xs font-medium sm:block',
                current >= s.id ? 'text-ink-800' : 'text-ink-400',
              )}
            >
              {s.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className={cn(
                'mx-2 h-0.5 flex-1 rounded-full transition',
                current > s.id ? 'bg-accent-500' : 'bg-ink-200',
              )}
            />
          )}
        </div>
      ))}
    </div>
  )
}
