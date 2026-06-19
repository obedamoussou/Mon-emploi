import { Link } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'framer-motion'
import { Bell, Briefcase, Building2, LayoutDashboard, Menu, Search, UserPlus, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Logo } from '~/components/Logo'
import { Avatar } from '~/components/Avatar'
import { SignupModal } from '~/components/SignupModal'
import { currentUser } from '~/mocks/users'
import { cn } from '~/lib/utils'

const navLinks = [
  { to: '/offres', label: 'Offres & concours', icon: Briefcase },
  { to: '/organismes', label: 'Organismes', icon: Building2 },
  { to: '/tableau-de-bord', label: 'Espace candidat', icon: LayoutDashboard },
] as const

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [signupOpen, setSignupOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 border-b transition-all duration-300',
          scrolled
            ? 'border-ink-100 bg-white/85 backdrop-blur-xl shadow-sm'
            : 'border-transparent bg-white',
        )}
      >
        <div className="container-page flex h-16 items-center justify-between gap-4">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-xl px-3.5 py-2 text-sm font-medium text-ink-600 transition hover:bg-ink-50 hover:text-ink-900 [&.active]:bg-brand-50 [&.active]:text-brand-700"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* <Link
              to="/offres"
              className="hidden h-10 w-10 items-center justify-center rounded-xl text-ink-500 transition hover:bg-ink-100 hover:text-ink-800 sm:flex"
              aria-label="Rechercher"
            >
              <Search className="h-5 w-5" />
            </Link> */}
            <Link
              to="/tableau-de-bord"
              search={{ section: 'notifications' }}
              className="relative hidden h-10 w-10 items-center justify-center rounded-xl text-ink-500 transition hover:bg-ink-100 hover:text-ink-800 sm:flex"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
            </Link>
            {/* <Link
              to="/tableau-de-bord"
              className="flex items-center gap-2 rounded-xl py-1 pl-1 pr-1 transition hover:bg-ink-50 sm:pr-3"
              aria-label="Espace candidat"
            >
              <Avatar initials="AD" color={currentUser.avatarColor} size="sm" />
              <span className="hidden text-sm font-semibold text-ink-800 sm:inline">
                {currentUser.firstName}
              </span>
            </Link> */}
            <button
              onClick={() => setSignupOpen(true)}
              className="btn-secondary hidden lg:inline-flex"
            >
              <UserPlus className="h-4 w-4" />
              S’inscrire
            </button>
            {/* <Link to="/espace-organisme" className="btn-primary hidden lg:inline-flex">
              Espace organisme
            </Link> */}

            <button
              className="flex h-10 w-10 items-center justify-center rounded-xl text-ink-700 transition hover:bg-ink-100 lg:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="overflow-hidden border-t border-ink-100 bg-white lg:hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22 }}
            >
              <div className="container-page space-y-1 py-4">
                {/* Accès rapide espace candidat */}
                {/* <Link
                  to="/tableau-de-bord"
                  onClick={() => setMobileOpen(false)}
                  className="mb-2 flex items-center gap-3 rounded-2xl border border-ink-100 bg-ink-50/60 p-3 transition hover:border-brand-200"
                >
                  <Avatar initials="AD" color={currentUser.avatarColor} size="md" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold text-ink-900">
                      {currentUser.firstName} {currentUser.lastName}
                    </p>
                    <p className="text-xs text-ink-500">Accéder à mon espace candidat</p>
                  </div>
                  <LayoutDashboard className="h-5 w-5 text-brand-500" />
                </Link> */}

                {navLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-ink-700 transition hover:bg-ink-50 [&.active]:bg-brand-50 [&.active]:text-brand-700"
                  >
                    <l.icon className="h-5 w-5 text-ink-400" />
                    {l.label}
                  </Link>
                ))}

                <div className="grid grid-cols-1 gap-2 pt-2">
                  <button
                    onClick={() => {
                      setMobileOpen(false)
                      setSignupOpen(true)
                    }}
                    className="btn-secondary w-full"
                  >
                    <UserPlus className="h-4 w-4" />
                    S’inscrire
                  </button>
                  {/* <Link
                    to="/espace-organisme"
                    onClick={() => setMobileOpen(false)}
                    className="btn-primary w-full"
                  >
                    Organisme
                  </Link> */}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <SignupModal open={signupOpen} onClose={() => setSignupOpen(false)} />
    </>
  )
}
