import { Link } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, type LucideIcon } from 'lucide-react'
import { useState, type ReactNode } from 'react'
import { Logo } from '~/components/Logo'
import { Avatar } from '~/components/Avatar'
import { cn } from '~/lib/utils'

export interface DashboardNavItem {
  key: string
  label: string
  icon: LucideIcon
  badge?: number
}

/**
 * Gabarit des espaces connectés (candidat / organisme) :
 * barre latérale de navigation par section + en-tête + contenu.
 */
export function DashboardShell({
  items,
  active,
  onSelect,
  user,
  brandLabel,
  children,
}: {
  items: DashboardNavItem[]
  active: string
  onSelect: (key: string) => void
  user: { name: string; subtitle: string; initials: string; color: string }
  brandLabel: string
  children: ReactNode
}) {
  const [mobileNav, setMobileNav] = useState(false)
  const activeItem = items.find((i) => i.key === active)

  const NavList = () => (
    <nav className="space-y-1">
      {items.map((item) => {
        const isActive = item.key === active
        return (
          <button
            key={item.key}
            onClick={() => {
              onSelect(item.key)
              setMobileNav(false)
            }}
            className={cn(
              'flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition',
              isActive
                ? 'bg-brand-600 text-white shadow-sm'
                : 'text-ink-600 hover:bg-ink-100 hover:text-ink-900',
            )}
          >
            <item.icon className={cn('h-5 w-5', isActive ? 'text-white' : 'text-ink-400')} />
            <span className="flex-1 text-left">{item.label}</span>
            {item.badge != null && item.badge > 0 && (
              <span
                className={cn(
                  'rounded-full px-1.5 py-0.5 text-[10px] font-bold',
                  isActive ? 'bg-white/20 text-white' : 'bg-brand-100 text-brand-700',
                )}
              >
                {item.badge}
              </span>
            )}
          </button>
        )
      })}
    </nav>
  )

  return (
    <div className="min-h-screen bg-ink-50">
      <div className="border-b border-ink-100 bg-white">
        <div className="container-page flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Logo />
            <span className="hidden rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700 md:inline">
              {brandLabel}
            </span>
          </div>
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-500 transition hover:text-brand-600">
            <ChevronLeft className="h-4 w-4" />
            Retour au site
          </Link>
        </div>
      </div>

      <div className="container-page grid gap-6 py-6 lg:grid-cols-[260px_1fr]">
        {/* Sidebar desktop */}
        <aside className="hidden lg:block">
          <div className="sticky top-6 space-y-4">
            <div className="card flex items-center gap-3 p-4">
              <Avatar initials={user.initials} color={user.color} size="lg" />
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-ink-900">{user.name}</p>
                <p className="truncate text-xs text-ink-500">{user.subtitle}</p>
              </div>
            </div>
            <div className="card p-3">
              <NavList />
            </div>
          </div>
        </aside>

        {/* Sélecteur mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileNav((v) => !v)}
            className="btn-secondary w-full justify-between"
          >
            <span className="inline-flex items-center gap-2">
              {activeItem && <activeItem.icon className="h-4 w-4 text-brand-600" />}
              {activeItem?.label ?? 'Menu'}
            </span>
            <span className={cn('transition-transform', mobileNav && 'rotate-180')}>⌄</span>
          </button>
          <AnimatePresence>
            {mobileNav && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="card mt-2 overflow-hidden p-3"
              >
                <NavList />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <section className="min-w-0">{children}</section>
      </div>
    </div>
  )
}
