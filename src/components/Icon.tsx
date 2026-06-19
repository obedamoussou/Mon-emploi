import * as Lucide from 'lucide-react'
import type { LucideProps } from 'lucide-react'

/**
 * Rend une icône Lucide à partir de son nom (les mocks stockent l'icône
 * sous forme de chaîne). Retombe sur un point neutre si introuvable.
 */
export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = (Lucide as unknown as Record<string, React.ComponentType<LucideProps>>)[name]
  if (!Cmp) return <Lucide.Circle {...props} />
  return <Cmp {...props} />
}
