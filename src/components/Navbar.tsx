import { Link } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'framer-motion'
import { Briefcase, Building2, Menu, ShieldCheck, UserPlus, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Logo } from '~/components/Logo'
import { CandidateRegisterModal } from '~/components/CandidateRegisterModal'
import { cn } from '~/lib/utils'

const navLinks = [
  { to: '/offres', label: 'Offres & concours', icon: Briefcase },
  { to: '/organismes', label: 'Organismes', icon: Building2 },
] as const

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [registerOpen, setRegisterOpen] = useState(false)

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
            <button
              onClick={() => setRegisterOpen(true)}
              className="btn-primary hidden lg:inline-flex"
            >
              <UserPlus className="h-4 w-4" />
              S’inscrire
            </button>
            <Link to="/admin" className="btn-secondary hidden lg:inline-flex">
              <ShieldCheck className="h-4 w-4" />
              Espace admin
            </Link>

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
                      setRegisterOpen(true)
                    }}
                    className="btn-primary w-full"
                  >
                    <UserPlus className="h-4 w-4" />
                    S’inscrire
                  </button>
                  <Link
                    to="/admin"
                    onClick={() => setMobileOpen(false)}
                    className="btn-secondary w-full"
                  >
                    <ShieldCheck className="h-4 w-4" />
                    Espace admin
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <CandidateRegisterModal open={registerOpen} onClose={() => setRegisterOpen(false)} />
    </>
  )
}
