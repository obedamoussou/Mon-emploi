import * as Lucide from 'lucide-react'
import type { LucideProps } from 'lucide-react'

/**
 * Icônes personnalisées non disponibles dans la version installée de
 * lucide-react (ex. shield-cog). Mêmes conventions de rendu que Lucide.
 */
function ShieldCog({ className, size = 24 }: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m10.929 14.467-.383.924" />
      <path d="M10.929 8.923 10.546 8" />
      <path d="M13.225 8.923 13.608 8" />
      <path d="m13.607 15.391-.382-.924" />
      <path d="m14.849 10.547.923-.383" />
      <path d="m14.849 12.843.923.383" />
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9.305 10.547-.923-.383" />
      <path d="m9.305 12.843-.923.383" />
      <circle cx="12.077" cy="11.695" r="3" />
    </svg>
  )
}

const customIcons: Record<string, React.ComponentType<LucideProps>> = {
  ShieldCog,
}

/**
 * Rend une icône à partir de son nom (les mocks stockent l'icône sous
 * forme de chaîne). Cherche d'abord les icônes personnalisées, puis
 * Lucide, et retombe sur un point neutre si introuvable.
 */
export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Custom = customIcons[name]
  if (Custom) return <Custom {...props} />
  const Cmp = (Lucide as unknown as Record<string, React.ComponentType<LucideProps>>)[name]
  if (!Cmp) return <Lucide.Circle {...props} />
  return <Cmp {...props} />
}
